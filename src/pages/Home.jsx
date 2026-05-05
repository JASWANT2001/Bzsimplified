import { Link } from 'react-router-dom'

/* ─── Static data ────────────────────────────────────────────────────────── */

const WALL_OF_FAME = [
  {
    slug: 'brand-alpha',
    name: 'Brand Alpha',
    sector: 'F&B',
    what: 'End-to-end franchise system design — SOPs, training manuals, and outlet rollout playbook.',
    outcome: '12 outlets launched in 8 months',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'brand-beta',
    name: 'Brand Beta',
    sector: 'Retail',
    what: 'Full brand identity overhaul and go-to-market strategy for Pan-India expansion.',
    outcome: '3× revenue growth in Year 1',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'brand-gamma',
    name: 'Brand Gamma',
    sector: 'F&B',
    what: 'Operational restructuring, cost-control systems, and supply chain standardisation.',
    outcome: '28% reduction in operational cost',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
]

const BLOG_POSTS = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    title: 'The Cost of Operational Fragility in Rapid Growth',
    excerpt: 'How early-stage debt in systems becomes a critical failure point during market expansion.',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    title: 'Bridging the Gap: From Strategy to Applied Results',
    excerpt: 'Why 70% of strategic initiatives fail and how operator-led implementation solves the disconnect.',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    title: 'Designing Governance for Distributed Global Teams',
    excerpt: 'Structural frameworks that maintain culture and speed across borders and time zones.',
  },
]

const ARCH_CARDS = [
  { icon: 'construction',       title: 'Build',      desc: 'Developing the foundational systems and processes that enable initial market traction and functional stability.' },
  { icon: 'auto_awesome_motion', title: 'Optimize',  desc: 'Refining existing workflows to eliminate waste, improve margins, and maximize human capital efficiency.' },
  { icon: 'open_in_full',       title: 'Expand',     desc: 'Identifying and capturing new revenue streams through strategic market entry and product diversification.' },
  { icon: 'shield',             title: 'Strengthen', desc: 'Securing your position through resilient governance models and defensible strategic moats.' },
]

const SERVICES = [
  { stage: 'START',     code: 'LB', num: '01', icon: 'rocket_launch',   title: 'Launch Your Brand',      desc: 'Identity, positioning, and go-to-market.',          img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80' },
  { stage: 'START',     code: 'BB', num: '02', icon: 'business_center', title: 'Build Your Business',    desc: 'Legal structure, ops, and funding systems.',        img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80' },
  { stage: 'START',     code: 'ST', num: '03', icon: 'devices',         title: 'Set Up Your Tech',       desc: 'Core stack to run and measure your business.',      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
  { stage: 'STABILIZE', code: 'PB', num: '04', icon: 'shield',          title: 'Protect Your Brand',     desc: 'Trademarks, contracts, and brand governance.',      img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80' },
  { stage: 'STABILIZE', code: 'FF', num: '05', icon: 'account_balance', title: 'Fix Your Finances',      desc: 'Books, cash flow, and profitability controls.',     img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80' },
  { stage: 'STABILIZE', code: 'EC', num: '06', icon: 'gavel',           title: 'Ensure Compliance',      desc: 'Statutory, regulatory, and internal policy.',       img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80' },
  { stage: 'SCALE',     code: 'MO', num: '07', icon: 'tune',            title: 'Manage Your Operations', desc: 'SOPs, KPIs, and daily rhythm of execution.',        img: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=600&q=80' },
  { stage: 'SCALE',     code: 'ET', num: '08', icon: 'groups',          title: 'Empower Your Team',      desc: 'Org design, hiring, and leadership cadence.',       img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80' },
  { stage: 'SCALE',     code: 'GB', num: '09', icon: 'trending_up',     title: 'Grow Your Business',     desc: 'Expansion strategy, capital, and new markets.',     img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
]

const WHY_US_ITEMS = [
  { icon: 'bolt',      label: 'Execution-focused methodology' },
  { icon: 'groups',    label: 'Operator-led consultation teams' },
  { icon: 'analytics', label: 'Data-driven structural optimization' },
]

const PARTNERS = [
  { name: 'Accel Advisory'        },
  { name: 'NorthStar Capital'     },
  { name: 'Peak Growth Partners'  },
  { name: 'Meridian Consulting'   },
  { name: 'Atlas Ventures'        },
  { name: 'Summit Advisory Group' },
]

const BRANDS = [
  { slug: 'opsforge',    name: 'OpsForge',    icon: 'settings',       desc: 'Enterprise process automation and workflow orchestration for high-growth teams.' },
  { slug: 'datapulse',   name: 'DataPulse',   icon: 'analytics',      desc: 'Real-time business intelligence and market analytics suite.' },
  { slug: 'talentaxis',  name: 'TalentAxis',  icon: 'people',         desc: 'AI-powered talent acquisition and organisational design tool.' },
  // { slug: 'finguard',    name: 'FinGuard',    icon: 'account_balance',desc: 'Regulatory compliance and financial governance framework.' },
  // { slug: 'scaleiq',     name: 'ScaleIQ',     icon: 'open_in_full',   desc: 'Multi-market expansion intelligence and entry strategy platform.' },
  // { slug: 'venturebase', name: 'VentureBase', icon: 'trending_up',    desc: 'M&A pipeline management and deal structuring solution.' },
]

const BG_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBH0f48Xw9KjJuCKEVfS_ntTay0QdBnuBr1B3HqhUMB0-1L9oc6zrkfe1ixcuz5XHtyIyW_FHyY_LQ-c0jIABpjDxXeWsZ5icu4rqHtfrSCs4rAoPDeB9efNVjt4wvUqT9xho2xiXXMsq_jkInL74LwpOVTtg9WHDLMsW3Di7huzcko5rgOc5n-bYW4G_6PwuRzaI6ErU2nP8AjTpy6PBFo0WJ7KTm8iSAQj7YXekyKcDjszH7gawDHppiRl1nauet-rScqoUDjtXu2'

const TEAM_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBw8fTMYmPpK3tAkmDN7E9ins1lmdWJuAOJ9mZvAAV7TG9oG8vGXRert5doNTpN6Y8hM8RSe8KdecEvId4XQS8Gu_R67degjQyX-dSFZ80xKuPcYHvYMuqrekCqZQcy6Q66XAc-Bykc_3u-jnzeuuYlWRSCVY9uSrIEN44QdVg1SiMnxb5aGK3HxaJ9o8N2sFOargopOV-sBdeGDg1CZbP2vpMv6WHDhCvFA4zePggQpRDw86TiludElHuIyub4tMOvqlq5gVc5reZY'

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main>
        {/* ═══════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════ */}
        <section data-hero="true" className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-[#0a192f]">

          {/* Background photo */}
          <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0f2240]/95 to-transparent z-10" />
            <img
              src={BG_IMG}
              alt="Modern glass building"
              className="w-full h-full object-cover grayscale opacity-30 mix-blend-overlay"
            />
          </div>

          <div className="w-full mx-auto px-6 md:px-10 lg:px-16 relative z-20 max-w-[1440px]">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

              {/* Left copy */}
              <div className="lg:col-span-7 xl:col-span-7">
                <h1 className="font-headline leading-[1.0] tracking-tight mb-8 md:mb-14 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {/* Line 1: outline ghost */}
                  <div
                    className="block mb-2 font-black"
                    style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.45)' }}
                  >
                    Bringing Structure
                  </div>
                  {/* Line 2: solid bold white */}
                  <div className="block font-black text-white">
                    to Business Growth<span className="text-[#e31e24]">.</span>
                  </div>
                </h1>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 md:mb-16 font-body font-light max-w-2xl">
                  Navigating scale requires more than ambition — it requires an architectural foundation. We help ambitious leaders transform operational complexity into sustainable competitive advantage through structural clarity and execution rigor.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#0a192f] font-body font-semibold text-[15px] tracking-[0.04em] rounded-full transition-all duration-300 hover:shadow-[0_16px_48px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                  >
                    <span className="material-symbols-outlined text-[19px] flex-shrink-0">arrow_forward</span>
                    Start Your Transformation
                  </Link>
                  <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/30 text-white font-body font-medium text-[15px] rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:border-white/50 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]">
                    <span className="material-symbols-outlined text-[21px] group-hover:-translate-y-0.5 transition-transform">play_circle</span>
                    <span>See Our Approach</span>
                  </button>
                </div>

              </div>

              {/* Right floating card — desktop only */}
              <div className="lg:col-span-5 xl:col-span-5 relative hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-xl">
                  <div className="relative w-full aspect-[5/4] group">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#e31e24]/20 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/15 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:border-white/25 group-hover:shadow-[0_32px_80px_-12px_rgba(227,30,36,0.2)]">
                      <img src={BG_IMG} alt="Architectural structure" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-40" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Ghost background text */}
          <div className="absolute -bottom-16 -left-2 text-[18vw] font-black text-stroke-white select-none opacity-5 leading-none pointer-events-none font-headline">
            STRUCTURE
          </div>

          <button
            aria-label="Scroll to content"
            onClick={e => e.currentTarget.closest('[data-hero]')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 group"
          >
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">Scroll</span>
            <span className="material-symbols-outlined animate-bounce text-white/40 group-hover:text-white/70 transition-colors" style={{ fontSize: '30px' }}>keyboard_arrow_down</span>
          </button>
        </section>

        {/* ═══════════════════════════════════════════════════════
            WHO WE ARE - HIDDEN FOR NOW
        ═══════════════════════════════════════════════════════
        <section className="py-32 bg-gradient-to-b from-white to-slate-50" id="team">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="eyebrow">Who We Are</p>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-[#0a192f] mb-6 leading-tight">
                  Operators who embed, then execute.
                </h2>
                <p className="text-lg text-slate-600 font-body leading-relaxed mb-8 max-w-xl">
                  We don't consult from the sidelines. We get deep into your operations, understand the real constraints, and build sustainable solutions that actually stick.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { icon: 'check_circle', text: 'Hands-on execution alongside your team' },
                    { icon: 'check_circle', text: 'Results in 3-6 months, not 18' },
                    { icon: 'check_circle', text: 'Zero handoff surprises' },
                  ].map(item => (
                    <div key={item.text} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#e31e24] text-[21px] flex-shrink-0 mt-1">
                        {item.icon}
                      </span>
                      <p className="font-body text-slate-700 text-[16px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-primary inline-flex items-center gap-2.5">
                  Start a Conversation
                  <span className="material-symbols-outlined text-[18px] arrow-nudge">arrow_forward</span>
                </Link>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <p className="text-sm font-body font-semibold text-slate-400 uppercase tracking-widest mb-2">Why Leaders Choose Us</p>
                  <ul className="space-y-3">
                    {[
                      'Operator-led teams with P&L experience',
                      'Proven across 8+ industries and 14 markets',
                      'Track record of 45% operational improvements',
                      'Transparent methodology, no black boxes',
                    ].map(item => (
                      <li key={item} className="flex items-center gap-2 font-body text-[15px] text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e31e24] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[{ num: '325+', label: 'Transformations' }, { num: '98%', label: 'Client Retention' }].map(stat => (
                    <div key={stat.label} className="bg-[#0a192f] rounded-xl p-6 text-center">
                      <p className="text-4xl font-headline font-extrabold text-white mb-2">{stat.num}</p>
                      <p className="font-body text-white/70 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* ═══════════════════════════════════════════════════════
            STRATEGIC ARCHITECTURE - HIDDEN FOR NOW
        ═══════════════════════════════════════════════════════
        <section className="py-24 bg-[#f2f4f7]" id="services">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            <div className="mb-16">
              <p className="eyebrow">The Framework</p>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-[#0a192f]">Strategic Architecture</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
              {ARCH_CARDS.map(card => (
                <div
                  key={card.title}
                  className="bg-white p-10 hover:bg-[#0a192f] transition-colors duration-300 group cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl mb-6 text-[#0a192f] group-hover:text-white block transition-colors duration-300">
                    {card.icon}
                  </span>
                  <h3 className="text-xl font-headline font-bold mb-3 text-[#0a192f] group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-white/70 leading-relaxed text-sm font-body transition-colors duration-300">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* ═══════════════════════════════════════════════════════
            SERVICES NAVIGATION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-[#f7f9fc]" id="services">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">

            {/* Header */}
            <div className="mb-8 md:mb-12">
              <p className="eyebrow">Our Services</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-[#0a192f] leading-tight">
                  Everything your business needs to scale.
                </h2>
                <p className="font-body text-slate-400 text-sm shrink-0">Click any service to explore →</p>
              </div>
            </div>

            {/* 9-card flat grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map(service => (
                <Link
                  key={service.code}
                  to={`/service/${service.code.toLowerCase()}`}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer
                    hover:shadow-2xl hover:-translate-y-1.5 hover:border-slate-200
                    transition-all duration-300 flex flex-col"
                >
                  {/* Image strip */}
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    {/* Top row: icon + number */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 bg-slate-100 group-hover:bg-[#0a192f] rounded-xl flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                        <span className="material-symbols-outlined text-[#0a192f] group-hover:text-white text-[21px] transition-colors duration-300">
                          {service.icon}
                        </span>
                      </div>
                      <span className="font-headline font-black text-slate-200 group-hover:text-slate-300 text-4xl leading-none transition-colors duration-300 select-none">
                        {service.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headline font-bold text-[#0a192f] text-[18px] mb-2 leading-snug">
                      {service.title}
                    </h3>

                    {/* Desc */}
                    <p className="font-body text-slate-500 group-hover:text-slate-600 text-[14px] leading-relaxed mb-6 transition-colors duration-300">
                      {service.desc}
                    </p>

                    {/* CTA row */}
                    <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100 group-hover:border-slate-200 transition-colors duration-300">
                      <span className="font-body font-semibold text-[14px] text-[#e31e24] underline underline-offset-4 decoration-[#e31e24]/40 group-hover:decoration-[#e31e24] transition-all duration-200">
                        Explore Service
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#0a192f] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                        <span className="material-symbols-outlined text-[17px] text-[#0a192f] group-hover:text-white transition-colors duration-300">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PARTNERS
        ═══════════════════════════════════════════════════════ */}
        <section className="py-14 md:py-20 bg-[#0a192f]" id="partners">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 md:mb-12">
              <div>
                <p className="font-body font-bold text-[14px] tracking-[0.18em] uppercase text-[#e31e24] mb-3">Our Partners</p>
                <h2 className="font-headline font-bold text-white text-3xl md:text-4xl tracking-tight">
                  Backed by trusted alliances.
                </h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-white/70 hover:text-white group flex-shrink-0 transition-colors duration-200"
              >
                Become a Partner
                <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
              </Link>
            </div>

            {/* Partner cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {PARTNERS.map(p => (
                <Link
                  key={p.name}
                  to=""
                  className="group relative bg-white/[0.05] border border-white/10 rounded-xl px-5 py-8 flex flex-col items-center justify-center gap-4 hover:bg-white/[0.10] hover:border-[#e31e24]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon placeholder */}
                  <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-[#e31e24]/20 flex items-center justify-center transition-colors duration-300">
                    <span className="material-symbols-outlined text-[19px] text-white/70 group-hover:text-white transition-colors duration-300">handshake</span>
                  </div>

                  {/* Name */}
                  <p className="font-headline font-bold text-white text-[13px] tracking-wide text-center leading-snug">
                    {p.name}
                  </p>

                  {/* Arrow */}
                  <span className="material-symbols-outlined text-[15px] text-white/30 group-hover:text-[#e31e24] group-hover:translate-x-0.5 transition-all duration-300">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            BRANDS
        ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100" id="brands">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 md:mb-16">
              <div>
                <p className="eyebrow">Brands We Represent</p>
                <h2 className="font-headline font-extrabold text-[#0a192f] text-4xl md:text-5xl tracking-tight leading-tight">
                  Premium brands in our portfolio
                </h2>
              </div>
              <p className="font-body text-slate-500 text-[15px] leading-relaxed max-w-sm lg:text-right">
                Each brand we carry is vetted for operator-readiness and measurable client impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRANDS.map(brand => (
                <Link
                  key={brand.name}

                  className="group relative bg-[#0a192f] border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#e31e24] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Shine sweep */}
                  <div className="absolute inset-0 -top-1/2 -right-1/2 w-1/2 h-full bg-white/5 rotate-45 group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                  {/* Top row — icon + arrow always visible */}
                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-white/10 group-hover:bg-[#e31e24] flex items-center justify-center rounded-xl transition-all duration-300">
                      <span className="material-symbols-outlined text-white text-[23px]">
                        {brand.icon}
                      </span>
                    </div>
                    {/* Arrow — always shown, animates on hover */}
                    <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#e31e24] group-hover:bg-[#e31e24] flex items-center justify-center transition-all duration-300">
                      <span className="material-symbols-outlined text-white/50 group-hover:text-white text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                        arrow_outward
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="font-headline font-bold text-white text-lg mb-3">
                      {brand.name}
                    </h3>
                    <p className="font-body text-white/60 group-hover:text-white/80 text-[14px] leading-relaxed flex-1 transition-colors duration-300">
                      {brand.desc}
                    </p>

                    {/* Explore link — looks and acts like a link */}
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                      <span className="font-body font-semibold text-[#e31e24] text-[14px] underline underline-offset-4 decoration-[#e31e24]/40 group-hover:decoration-[#e31e24] transition-all duration-200">
                        Explore Brand
                      </span>
                      <span className="material-symbols-outlined text-[17px] text-[#e31e24] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                        arrow_outward
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            WALL OF FAME
        ═══════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 bg-[#0a192f] overflow-hidden" id="wall-of-fame">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            {/* Header */}
            <div className="mb-10 md:mb-16">
              <p className="font-body font-bold text-[14px] tracking-[0.18em] uppercase text-[#e31e24] mb-5">
                Wall of Fame
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-white leading-[1.05]">
                Brands we've helped build.
              </h2>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {WALL_OF_FAME.map(brand => (
                <Link
                  key={brand.slug}
                  to="/wall-of-fame"
                  className="group relative bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#e31e24]/50 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] flex flex-col cursor-pointer"
                >
                  {/* Image area */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay darkens more on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-500" />

                    {/* Sector slides up on hover */}
                    <span className="absolute bottom-4 left-4 bg-[#e31e24] text-white font-body font-bold text-[11px] tracking-[0.15em] uppercase px-3 py-1 rounded-full translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {brand.sector}
                    </span>

                    {/* Success Story badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-emerald-500/90 text-white font-body font-semibold text-[11px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Success Story
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 p-7 flex flex-col flex-1">
                    {/* Brand name */}
                    <h4 className="text-xl font-headline font-black text-white mb-3 leading-tight group-hover:text-[#e31e24] transition-colors duration-300">
                      {brand.name}
                    </h4>

                    {/* What we did */}
                    <p className="font-body text-slate-400 group-hover:text-slate-300 text-sm leading-relaxed flex-1 mb-5 transition-colors duration-300">
                      {brand.what}
                    </p>

                    {/* Outcome pill */}
                    <div className="inline-flex items-center gap-2 bg-white/5 group-hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6 self-start transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e31e24] flex-shrink-0" />
                      <span className="font-body text-white/60 group-hover:text-white/80 text-xs transition-colors duration-300">{brand.outcome}</span>
                    </div>

                    {/* View Testimonial */}
                    <div className="inline-flex items-center gap-2 self-start">
                      <span className="material-symbols-outlined text-[19px] text-white/25 group-hover:text-[#e31e24] transition-colors duration-300">format_quote</span>
                      <span className="font-body text-[13px] text-white/35 group-hover:text-white/80 transition-colors duration-300 border-b border-transparent group-hover:border-white/30 pb-px">
                        View Testimonial
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            BRAND STORIES
        ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-white" id="brand-stories">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-8 md:mb-14">
              <div>
                <p className="eyebrow">Brand Stories</p>
                <h2 className="text-4xl font-headline font-bold text-[#0a192f]">Brand Stories</h2>
              </div>
              <Link
                to="/brand-stories"
                className="btn-link text-[#0a192f] underline underline-offset-8 hover:opacity-60 transition-opacity"
              >
                View All Brand Stories →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {BLOG_POSTS.map(post => (
                <Link key={post.id} to="/brand-stories">
                <article className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#0a192f]/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Read indicator appears on hover */}
                    <div className="absolute inset-0 bg-[#0a192f]/0 group-hover:bg-[#0a192f]/20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <span className="material-symbols-outlined text-[#0a192f] text-[21px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-[17px] font-headline font-bold mb-3 leading-snug text-[#0a192f]">
                      {post.title}
                    </h3>
                    <p className="font-body text-slate-500 text-sm leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="font-body font-semibold text-[13px] text-[#0a192f] uppercase tracking-widest">
                        Read Story
                      </span>
                      <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0a192f] flex items-center justify-center transition-colors duration-300 group-hover:translate-x-0.5 transition-transform">
                        <span className="material-symbols-outlined text-[15px] text-[#0a192f] group-hover:text-white transition-colors duration-300">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </article>
                </Link>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="mt-16 md:mt-20 relative overflow-hidden rounded-2xl bg-[#0a192f] px-8 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Background glow */}
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#e31e24]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Left copy */}
              <div className="relative z-10 text-center md:text-left">
                <p className="font-body font-bold text-[14px] tracking-[0.18em] uppercase text-[#e31e24] mb-4">
                  Ready to Start?
                </p>
                <h3 className="font-headline font-black text-white text-3xl md:text-4xl leading-tight mb-3">
                  Let's build your success story.
                </h3>
                <p className="font-body text-slate-400 text-[16px] leading-relaxed max-w-md">
                  Talk to our team and find out how we can structure your growth, streamline your operations, and get you to the next level.
                </p>
              </div>

              {/* Right buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#0a192f] font-body font-semibold text-[15px] tracking-[0.04em] rounded-full transition-all duration-300 hover:bg-slate-100 hover:shadow-[0_12px_32px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[19px]">mail</span>
                  Get in Touch
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/20 text-white font-body font-medium text-[15px] rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:border-white/40 whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[19px]">phone_in_talk</span>
                  Schedule a Call
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            WHY US - HIDDEN FOR NOW
        ═══════════════════════════════════════════════════════
        <section className="py-16 md:py-24 bg-[#f2f4f7]">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px] grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                  alt="Consulting team at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0a192f]/20" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#e31e24]/10 rounded-xl blur-2xl pointer-events-none" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="font-body font-bold text-[16px] tracking-[0.18em] uppercase text-[#e31e24] mb-6">Why Us</p>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-[#0a192f] mb-6 leading-tight">
                Operator thinking for complex systems
              </h2>
              <p className="text-lg font-body text-slate-600 leading-relaxed">
                We don't sell decks; we build outcomes. Our model is built on the shared reality that business success
                is 10% strategy and 90% persistent, high-quality execution.
              </p>
            </div>
          </div>
        </section>
        */}

    </main>
  )
}

/* ─── StageCard sub-component ────────────────────────────────────────────── */

function StageCard({ stage, title, items, featured }) {
  if (featured) {
    return (
      <div className="bg-[#0a192f] rounded-xl p-8 shadow-2xl scale-105 z-10 hover:scale-[1.08] hover:shadow-[0_24px_56px_rgba(10,25,47,0.4)] transition-all duration-300 cursor-pointer group">
        <div className="font-body text-[#76849f] font-bold mb-3 text-xs tracking-widest uppercase">
          {stage}
        </div>
        <h3 className="text-2xl font-headline font-bold text-white mb-7">{title}</h3>
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-white text-base mt-0.5 flex-shrink-0">check_circle</span>
              <span className="font-body text-white/70 text-sm leading-snug group-hover:text-white transition-colors duration-200">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="bg-[#f7f9fc] rounded-xl p-8 border border-slate-100 hover:scale-[1.03] hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer group">
      <div className="font-body text-slate-400 font-bold mb-3 text-xs tracking-widest uppercase group-hover:text-[#0a192f] transition-colors">
        {stage}
      </div>
      <h3 className="text-2xl font-headline font-bold text-[#0a192f] mb-7">{title}</h3>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#0a192f]/40 text-base mt-0.5 flex-shrink-0">check_circle</span>
            <span className="font-body text-slate-500 text-sm leading-snug group-hover:text-slate-800 transition-colors duration-200">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
