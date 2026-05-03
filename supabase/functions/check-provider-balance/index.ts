import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

const ALERT_COOLDOWN_HOURS = 6

async function sendTelegram(message: string) {
  try {
    const url = `${Deno.env.get('SUPABASE_URL')}/functions/v1/send-telegram-notification`
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
      },
      body: JSON.stringify({ message, parse_mode: 'HTML' }),
    })
  } catch (e) {
    console.error('TG send error:', e)
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const { data: accounts, error } = await supabase
      .from('provider_accounts')
      .select('*')
      .eq('is_active', true)

    if (error) throw error

    const results: any[] = []

    for (const acc of accounts || []) {
      try {
        const formData = new URLSearchParams()
        formData.append('key', acc.api_key)
        formData.append('action', 'balance')

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 12000)

        const resp = await fetch(acc.api_url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString(),
          signal: controller.signal,
        })
        clearTimeout(timeoutId)

        const text = await resp.text()
        let data: any
        try { data = JSON.parse(text) } catch { data = { error: text } }

        if (data.error) {
          await supabase.from('provider_accounts').update({
            balance_checked_at: new Date().toISOString(),
            last_balance_error: typeof data.error === 'string' ? data.error : JSON.stringify(data.error),
          }).eq('id', acc.id)
          results.push({ name: acc.name, error: data.error })
          continue
        }

        const balance = parseFloat(data.balance ?? '0')
        const currency = data.currency ?? acc.balance_currency ?? 'USD'

        await supabase.from('provider_accounts').update({
          balance,
          balance_currency: currency,
          balance_checked_at: new Date().toISOString(),
          last_balance_error: null,
        }).eq('id', acc.id)

        const threshold = Number(acc.low_balance_threshold ?? 10)
        const lastAlert = acc.last_low_balance_alert_at ? new Date(acc.last_low_balance_alert_at).getTime() : 0
        const cooldownMs = ALERT_COOLDOWN_HOURS * 60 * 60 * 1000
        const canAlert = Date.now() - lastAlert > cooldownMs

        if (balance <= threshold && canAlert) {
          const msg = `⚠️ <b>LOW BALANCE ALERT</b>\n\n` +
            `Provider: <b>${acc.name}</b>\n` +
            `Balance: <b>${balance.toFixed(2)} ${currency}</b>\n` +
            `Threshold: ${threshold} ${currency}\n` +
            `API: ${acc.api_url}\n\n` +
            `Please top-up soon to avoid order failures.`
          await sendTelegram(msg)
          await supabase.from('provider_accounts').update({
            last_low_balance_alert_at: new Date().toISOString(),
          }).eq('id', acc.id)
        }

        results.push({ name: acc.name, balance, currency, alerted: balance <= threshold && canAlert })
      } catch (e: any) {
        console.error(`Balance check failed for ${acc.name}:`, e.message)
        await supabase.from('provider_accounts').update({
          balance_checked_at: new Date().toISOString(),
          last_balance_error: e.message || 'Network error',
        }).eq('id', acc.id)
        results.push({ name: acc.name, error: e.message })
      }
    }

    return new Response(JSON.stringify({ success: true, checked: results.length, results }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})