import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Star, Shield, Sparkles, BarChart3, Globe, Clock3, Zap, TrendingUp, CheckCircle2, PlayCircle } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: '#fafaf8', color: '#1a1a2e', fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Nav */}
      <header className="sticky top-0 z-50" style={{ background: 'rgba(250,250,248,.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(0,0,0,.06)' }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="OrganicSMM" className="w-9 h-9 rounded-lg object-cover" />
            <span className="text-[15px] font-bold tracking-tight" style={{ color: '#1a1a2e' }}>OrganicSMM</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/auth" className="text-[13px] font-medium hidden sm:block" style={{ color: '#666' }}>Log in</Link>
            <Link to="/auth" className="text-[13px] font-semibold text-white px-5 py-2 rounded-lg flex items-center gap-1.5" style={{ background: '#1a1a2e' }}>
              Get started <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1100px] mx-auto px-6 pt-20 sm:pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-8" style={{ background: '#f0f0ec', border: '1px solid rgba(0,0,0,.06)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
            <span className="text-[11px] font-medium" style={{ color: '#888' }}>Platform updated — v3.0</span>
          </div>

          <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6" style={{ color: '#1a1a2e', fontFamily: "'Outfit', system-ui, sans-serif" }}>
            Grow your social media the way it should be done.
          </h1>

          <p className="text-[17px] leading-[1.7] mb-10 max-w-lg" style={{ color: '#666' }}>
            OrganicSMM delivers real engagement with natural delivery patterns. Add funds, pick a service, and let the platform handle the rest.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Link to="/auth" className="h-11 px-6 rounded-lg text-[13px] font-semibold text-white flex items-center gap-2" style={{ background: '#1a1a2e' }}>
              Start growing <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/auth" className="h-11 px-6 rounded-lg text-[13px] font-medium flex items-center gap-2" style={{ color: '#555', border: '1px solid rgba(0,0,0,.1)' }}>
              <Eye className="w-3.5 h-3.5" /> View services
            </Link>
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {['#e74c8b','#8b5cf6','#f59e0b','#10b981'].map((c, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#fafaf8] text-[8px] font-bold text-white flex items-center justify-center" style={{ background: c }}>
                    {['A','S','R','M'][i]}
                  </div>
                ))}
              </div>
              <span className="text-[12px]" style={{ color: '#999' }}>2,400+ users</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
              <span className="text-[12px] ml-1" style={{ color: '#999' }}>4.9/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y" style={{ borderColor: 'rgba(0,0,0,.06)' }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-3">
          {[
            { n: '10M+', l: 'Engagement delivered' },
            { n: '99.8%', l: 'Success rate' },
            { n: '24/7', l: 'Auto delivery' },
          ].map((s, i) => (
            <div key={s.l} className="py-10 text-center" style={{ borderRight: i < 2 ? '1px solid rgba(0,0,0,.06)' : 'none' }}>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#1a1a2e' }}>{s.n}</p>
              <p className="text-[11px] font-medium mt-1.5 uppercase tracking-wider" style={{ color: '#aaa' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-14">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-center text-[11px] font-medium uppercase tracking-widest mb-6" style={{ color: '#bbb' }}>Supported platforms</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {['Instagram', 'YouTube', 'TikTok', 'Twitter/X', 'Facebook', 'Telegram'].map((p) => (
              <span key={p} className="text-[13px] font-semibold" style={{ color: '#999' }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: '#e74c8b' }}>Features</p>
          <h2 className="text-3xl sm:text-[2.6rem] font-extrabold tracking-tight mb-4" style={{ color: '#1a1a2e', fontFamily: "'Outfit', system-ui, sans-serif" }}>
            Everything you need, nothing you don't.
          </h2>
          <p className="text-[15px] mb-14 max-w-lg" style={{ color: '#888' }}>
            Clean tools for real growth. No bloat, no gimmicks.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: 'rgba(0,0,0,.06)' }}>
            {[
              { icon: Clock3, title: 'Organic scheduling', desc: 'Variable speed delivery that mirrors how real engagement actually happens.' },
              { icon: Shield, title: 'Account safety', desc: 'Patterns tuned to look human. No spikes, no red flags.' },
              { icon: Globe, title: 'Multi-provider routing', desc: 'Orders flow through multiple providers for better stability.' },
              { icon: Sparkles, title: 'Smart delivery', desc: 'Speed adapts based on order size and platform best practices.' },
              { icon: Zap, title: 'Instant start', desc: 'Orders begin processing within minutes of placement.' },
              { icon: BarChart3, title: 'Live tracking', desc: 'Watch progress, history, and delivery status in real time.' },
            ].map((f) => (
              <div key={f.title} className="p-8" style={{ background: '#fafaf8' }}>
                <f.icon className="w-5 h-5 mb-4" style={{ color: '#1a1a2e' }} />
                <h3 className="text-[15px] font-bold mb-2" style={{ color: '#1a1a2e' }}>{f.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: '#888' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: '#10b981' }}>How it works</p>
          <h2 className="text-3xl sm:text-[2.6rem] font-extrabold tracking-tight mb-14" style={{ color: '#1a1a2e', fontFamily: "'Outfit', system-ui, sans-serif" }}>
            Three steps. That's it.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '1', title: 'Create account', desc: 'Sign up with email. Takes about 30 seconds.' },
              { n: '2', title: 'Add funds & order', desc: 'Top up your wallet, pick a service, enter the link and quantity.' },
              { n: '3', title: 'Track results', desc: 'Watch your order progress live from the dashboard.' },
            ].map((s) => (
              <div key={s.n}>
                <div className="w-10 h-10 rounded-lg text-sm font-bold text-white flex items-center justify-center mb-5" style={{ background: '#1a1a2e' }}>
                  {s.n}
                </div>
                <h3 className="text-[17px] font-bold mb-2" style={{ color: '#1a1a2e' }}>{s.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#888' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="rounded-2xl p-10 sm:p-16 text-center" style={{ background: '#1a1a2e' }}>
            <img src={logo} alt="" className="w-12 h-12 rounded-lg object-cover mx-auto mb-6" />
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              Ready to start?
            </h2>
            <p className="text-[15px] text-white/50 mb-8 max-w-md mx-auto">
              No subscriptions, no commitments. Just sign up, add funds, and grow.
            </p>
            <Link to="/auth" className="inline-flex h-11 px-7 rounded-lg text-[13px] font-semibold items-center gap-2" style={{ background: 'white', color: '#1a1a2e' }}>
              Create free account <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(0,0,0,.06)' }} className="py-8">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-7 h-7 rounded-md object-cover" />
            <span className="text-[13px] font-semibold" style={{ color: '#1a1a2e' }}>OrganicSMM</span>
          </div>
          <div className="flex gap-5 text-[12px] font-medium" style={{ color: '#999' }}>
            <Link to="/terms" className="hover:text-[#666] transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-[#666] transition-colors">Privacy</Link>
            <Link to="/refund" className="hover:text-[#666] transition-colors">Refund</Link>
          </div>
          <p className="text-[11px]" style={{ color: '#ccc' }}>© {new Date().getFullYear()} OrganicSMM</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
