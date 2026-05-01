import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ─── Static data ────────────────────────────────────────────────────────── */

const INDUSTRY_FILTERS = [
  { label: 'All Sectors',    value: 'all' },
  { label: 'FinTech',        value: 'fintech' },
  { label: 'Logistics',      value: 'logistics' },
  { label: 'SaaS',           value: 'saas' },
  { label: 'Healthcare Tech', value: 'healthcare' },
]

const INDUSTRY_CARDS = [
  {
    id: 1, category: 'fintech', label: 'FinTech Success',
    title: 'Scalable Payments Infrastructure',
    description:
      'Streamlined cross-border transactions for a Tier 1 digital bank, reducing latency by 45% and ensuring 99.9% uptime.',
  },
  {
    id: 2, category: 'logistics', label: 'Logistics Success',
    title: 'Last-Mile Optimization',
    description:
      'Deployed dynamic routing algorithms for a regional carrier, resulting in a 22% reduction in fuel costs and 15% faster delivery times.',
  },
  {
    id: 3, category: 'saas', label: 'SaaS Success',
    title: 'GTM Engine Architecture',
    description:
      'Restructured the sales-to-success handoff for a Series C platform, increasing net revenue retention (NRR) by 18 points.',
  },
]

const BLOG_POSTS = [
  {
    id: 1,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAPk_nAYdIsuvI2bXmVaB-yZwCEuH3sZCbE5lfefQ7pC1jetVZ2f44AM9EK2xU5Yr-XhKaXvepeYfvPsyyB4O5WRi9oQO4BQVMiNxVwv_73B-eOefnFvp0rs-LT1ask7EEdkTzW3v6mRSriewcQYkMEPhWnqeLcokl61is46pgpGVnGORiRAanDalw_LeBKINc_T6BzJCja3bsmG6V4-pH_eiQwxkcyr1o4CIdvjgZwomXHWPonoNsRqkoEMSDHLYiwz4F-0Oxde4x',
    title: 'The Cost of Operational Fragility in Rapid Growth',
    excerpt: 'How early-stage debt in systems becomes a critical failure point during market expansion.',
  },
  {
    id: 2,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV5NaKPNAAfG5yOAdqa7pAEmLaOx2s4rLjNC5-n_5UPt1ZXJ44eVlkm5OcMq813emmNVfCHXjdB_TH9IIw8svlZKxIDl-BwxAWiUR5tSdm-x5MG5_i4Yu8cJJ0AoFMv0Hq4sAZ9Vcf-ZLU1ploIw-flCmfysfh201boh1G_LHVz6NjgdRM2N1s2fUo44JSBC6aekqlhjHjatm1hb6CXxaE10DLw_hnTz9-cCOUXlSdiRV6o_sNQ_j9JekFEaXvzRh0WoivRMBkJ3',
    title: 'Bridging the Gap: From Strategy to Applied Results',
    excerpt: 'Why 70% of strategic initiatives fail and how operator-led implementation solves the disconnect.',
  },
  {
    id: 3,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsoj-B0C57r8KoBjwiGFyMYlAAvE50YZfeulsL_h3afiNRNtAft4z2w9wxfbb6jRyFU7eZZ_Y0v1zDQ3sxfz0rFbVMp0DDXQ6uFA84duxK3mkeZDeA_oI7idqmRVps4cYyduyI7oCA8wE-sdw4s_he2_CPsFzqvX3P4hlQD5GkaIaGrchwqZD_shiLWDRMOsGHkTMi7JJBrmVjlil44MOocWc6nSEeMZlogcGPZtvu7tAEHItoH_5KZcQmaocbCcEV0SQR6uZiGiPP',
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
  { stage: 'START', code: 'LB', num: '01', title: 'Launch Your Brand', desc: 'Identity, positioning, and go-to-market.' },
  { stage: 'START', code: 'BB', num: '02', title: 'Build Your Business', desc: 'Legal structure, ops, and funding systems.' },
  { stage: 'START', code: 'ST', num: '03', title: 'Set Up Your Tech', desc: 'Core stack to run and measure your business.' },
  { stage: 'STABILIZE', code: 'PB', num: '04', title: 'Protect Your Brand', desc: 'Trademarks, contracts, and brand governance.' },
  { stage: 'STABILIZE', code: 'FF', num: '05', title: 'Fix Your Finances', desc: 'Books, cash flow, and profitability controls.' },
  { stage: 'STABILIZE', code: 'EC', num: '06', title: 'Ensure Compliance', desc: 'Statutory, regulatory, and internal policy.' },
  { stage: 'STABILIZE', code: 'MO', num: '07', title: 'Manage Your Operations', desc: 'SOPs, KPIs, and daily rhythm of execution.' },
  { stage: 'SCALE', code: 'ET', num: '08', title: 'Empower Your Team', desc: 'Org design, hiring, and leadership cadence.' },
  { stage: 'SCALE', code: 'GB', num: '09', title: 'Grow Your Business', desc: 'Expansion strategy, capital, and new markets.' },
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
  { name: 'OpsForge',   icon: 'settings',         desc: 'Enterprise process automation and workflow orchestration for high-growth teams.' },
  { name: 'DataPulse',  icon: 'analytics',         desc: 'Real-time business intelligence and market analytics suite.' },
  { name: 'TalentAxis', icon: 'people',            desc: 'AI-powered talent acquisition and organisational design tool.' },
  { name: 'FinGuard',   icon: 'account_balance',   desc: 'Regulatory compliance and financial governance framework.' },
  { name: 'ScaleIQ',    icon: 'open_in_full',      desc: 'Multi-market expansion intelligence and entry strategy platform.' },
  { name: 'VentureBase',icon: 'trending_up',       desc: 'M&A pipeline management and deal structuring solution.' },
]

const BG_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBH0f48Xw9KjJuCKEVfS_ntTay0QdBnuBr1B3HqhUMB0-1L9oc6zrkfe1ixcuz5XHtyIyW_FHyY_LQ-c0jIABpjDxXeWsZ5icu4rqHtfrSCs4rAoPDeB9efNVjt4wvUqT9xho2xiXXMsq_jkInL74LwpOVTtg9WHDLMsW3Di7huzcko5rgOc5n-bYW4G_6PwuRzaI6ErU2nP8AjTpy6PBFo0WJ7KTm8iSAQj7YXekyKcDjszH7gawDHppiRl1nauet-rScqoUDjtXu2'

const TEAM_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBw8fTMYmPpK3tAkmDN7E9ins1lmdWJuAOJ9mZvAAV7TG9oG8vGXRert5doNTpN6Y8hM8RSe8KdecEvId4XQS8Gu_R67degjQyX-dSFZ80xKuPcYHvYMuqrekCqZQcy6Q66XAc-Bykc_3u-jnzeuuYlWRSCVY9uSrIEN44QdVg1SiMnxb5aGK3HxaJ9o8N2sFOargopOV-sBdeGDg1CZbP2vpMv6WHDhCvFA4zePggQpRDw86TiludElHuIyub4tMOvqlq5gVc5reZY'

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleCards = INDUSTRY_CARDS.filter(
    c => activeFilter === 'all' || c.category === activeFilter
  )

  return (
    <main>
        {/* ═══════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#0a192f]">

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
            <div className="grid lg:grid-cols-12 gap-16 items-center">

              {/* Left copy */}
              <div className="lg:col-span-7 xl:col-span-7">
                <h1 className="text-white font-headline text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight mb-8">
                  Bringing Structure to
                  <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 mt-2">
                    Business Growth
                  </span>
                </h1>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-12 font-body font-light max-w-2xl">
                  Navigating scale requires more than ambition — it requires an architectural foundation. We help ambitious leaders transform operational complexity into sustainable competitive advantage through structural clarity and execution rigor.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#0a192f] font-body font-semibold text-[14px] tracking-[0.04em] rounded-full transition-all duration-300 hover:shadow-[0_16px_48px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                  >
                    <span className="material-symbols-outlined text-[18px] flex-shrink-0">arrow_forward</span>
                    Start Your Transformation
                  </Link>
                  <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/30 text-white font-body font-medium text-[14px] rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:border-white/50 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]">
                    <span className="material-symbols-outlined text-[20px] group-hover:-translate-y-0.5 transition-transform">play_circle</span>
                    <span>See Our Approach</span>
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
                  {[
                    { num: '12+',   label: 'Global Partnerships' },
                    { num: '500M+', label: 'Value Delivered'      },
                    { num: '98%',   label: 'Client Success Rate'  },
                  ].map(stat => (
                    <div key={stat.label} className="flex flex-col gap-1.5">
                      <p className="text-white font-headline font-bold text-2xl md:text-3xl leading-none tracking-tight">
                        {stat.num}
                      </p>
                      <p className="text-white/50 text-[12px] md:text-[13px] font-body leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right floating card — desktop only */}
              <div className="lg:col-span-5 xl:col-span-5 relative hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative w-full aspect-[4/5] group">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#e31e24]/20 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/15 shadow-[0_40px_100px_-12px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:border-white/25 group-hover:shadow-[0_48px_120px_-12px_rgba(227,30,36,0.2)]">
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
                      <span className="material-symbols-outlined text-[#e31e24] text-[20px] flex-shrink-0 mt-1">
                        {item.icon}
                      </span>
                      <p className="font-body text-slate-700 text-[15px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-primary inline-flex items-center gap-2.5">
                  Start a Conversation
                  <span className="material-symbols-outlined text-[17px] arrow-nudge">arrow_forward</span>
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
                      <li key={item} className="flex items-center gap-2 font-body text-[14px] text-slate-700">
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
            PARTNERS
        ═══════════════════════════════════════════════════════ */}
        <section className="pt-20 pb-8 bg-[#f7f9fc]" id="partners">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            <div className="text-center mb-14">
              <p className="eyebrow justify-center">Our Partners</p>
              <h2 className="font-headline font-bold text-[#0a192f] text-3xl md:text-4xl tracking-tight">
                Backed by trusted alliances.
              </h2>
            </div>

            {/* Partner logo strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-200">
              {PARTNERS.map(p => (
                <div
                  key={p.name}
                  className="bg-[#0a192f] flex flex-col items-center justify-center py-10 px-6 gap-3 group hover:bg-[#0f2847] transition-all duration-300 cursor-pointer"
                >
                  <div className="w-8 h-px bg-white/30 group-hover:bg-white transition-colors duration-300" />
                  <p className="font-headline font-bold text-white text-[13px] tracking-wide transition-colors duration-300 text-center">
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            BRANDS
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100" id="brands">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
              <div>
                <p className="eyebrow">Brands We Represent</p>
                <h2 className="font-headline font-extrabold text-[#0a192f] text-4xl md:text-5xl tracking-tight leading-tight">
                  Premium brands in our portfolio
                </h2>
              </div>
              <p className="font-body text-slate-500 text-[14px] leading-relaxed max-w-sm lg:text-right">
                Each brand we carry is vetted for operator-readiness and measurable client impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRANDS.map(brand => (
                <div
                  key={brand.name}
                  className="group relative bg-[#0a192f] border border-[#0a192f] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#e31e24] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -top-1/2 -right-1/2 w-1/2 h-full bg-white/5 rotate-45 group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                  {/* Content wrapper */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 group-hover:bg-[#e31e24] flex items-center justify-center rounded-xl mb-6 transition-all duration-300">
                      <span className="material-symbols-outlined text-white text-[22px] transition-colors duration-300">
                        {brand.icon}
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-white text-lg mb-3 transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <p className="font-body text-white/70 group-hover:text-white text-[13px] leading-relaxed transition-colors duration-300">
                      {brand.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e31e24]" />
                      <span className="font-body text-white text-[11px] tracking-widest uppercase">Explore</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
        <section className="py-20 bg-white" id="services">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <div>
                <p className="eyebrow">Our Services</p>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-[#0a192f] leading-tight">
                  Three stages of operational evolution.
                </h2>
              </div>
              <Link
                to="/services"
                className="btn-link text-[#0a192f] group inline-flex items-center gap-2 flex-shrink-0"
              >
                View All Services
                <span className="material-symbols-outlined text-[16px] arrow-nudge">arrow_forward</span>
              </Link>
            </div>

            {/* Services Grid - Rich Ocean Blue Design */}
            <div className="grid md:grid-cols-3 gap-6">
              {['START', 'STABILIZE', 'SCALE'].map(stage => {
                const stageServices = SERVICES.filter(s => s.stage === stage)

                return (
                  <div key={stage} className="group relative bg-[#0a192f] border border-[#0a192f] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#0a192f]/80 transition-all duration-300 overflow-hidden">
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -top-1/2 -right-1/2 w-1/2 h-full bg-white/5 rotate-45 group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                    {/* Content wrapper */}
                    <div className="relative z-10">
                      {/* Stage Header */}
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-3 h-3 bg-white/30 rounded-full group-hover:bg-white transition-colors duration-300" />
                        <h3 className="font-headline font-bold text-white text-lg tracking-wide group-hover:text-white transition-colors duration-300">
                          {stage}
                        </h3>
                        <span className="text-xs font-body font-semibold ml-auto text-white/50 group-hover:text-white/70 transition-colors duration-300">
                          {stageServices[0].num}–{stageServices[stageServices.length - 1].num}
                        </span>
                      </div>

                      {/* Services List */}
                      <div className="space-y-3">
                        {stageServices.map(service => (
                          <Link
                            key={service.code}
                            to={`/service/${service.code.toLowerCase()}`}
                            className="group/service flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                          >
                            <div className="flex items-center justify-center w-8 h-8 bg-white/15 rounded-lg flex-shrink-0 group-hover/service:bg-white/20 transition-colors duration-300">
                              <span className="font-headline font-bold text-[10px] text-white">
                                {service.code}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-headline font-semibold text-white text-[13px] leading-snug group-hover/service:text-white transition-colors duration-300">
                                {service.title}
                              </p>
                              <p className="font-body text-white/60 text-[11px] mt-1 leading-tight line-clamp-1 group-hover/service:text-white/80 transition-colors duration-300">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Explore link */}
                      <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <span className="font-body text-white/70 text-[10px] tracking-widest uppercase">Services</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            WHY US
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#f2f4f7]">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px] grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative w-full aspect-video bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-xl shadow-lg overflow-hidden">
                {/* Placeholder with decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-white text-5xl opacity-40">image</span>
                    <p className="text-white/50 font-body text-xs mt-2">Team & Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <p className="eyebrow">Why Us</p>
              <h2 className="text-4xl font-headline font-bold text-[#0a192f] mb-6 leading-tight">
                Operator thinking for complex systems
              </h2>
              <p className="text-lg font-body text-slate-600 leading-relaxed">
                We don't sell decks; we build outcomes. Our model is built on the shared reality that business success
                is 10% strategy and 90% persistent, high-quality execution.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            WALL OF FAME
        ═══════════════════════════════════════════════════════ */}
        <section className="py-32 bg-[#0a192f] overflow-hidden" id="industries">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            {/* Header + filters */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
              <div className="max-w-2xl">
                <p className="font-body font-semibold text-[10px] tracking-[0.2em] uppercase text-white/30 flex items-center gap-2.5 mb-5">
                  <span className="block w-5 h-px bg-[#e31e24] flex-shrink-0" />
                  Wall of Fame
                </p>
                <h2 className="text-4xl md:text-6xl font-headline font-black text-white leading-[1.02]">
                  Sector-specific structural mastery.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {INDUSTRY_FILTERS.map(f => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`px-5 py-2.5 rounded-full text-xs font-body font-bold border transition-all duration-300 ${
                      activeFilter === f.value
                        ? 'bg-[#e31e24] text-white border-[#e31e24] shadow-[0_4px_18px_rgba(227,30,36,0.35)]'
                        : 'border-white/15 text-white/55 hover:text-white hover:border-white/35'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCards.length > 0 ? (
                visibleCards.map(card => (
                  <div
                    key={`${card.id}-${activeFilter}`}
                    className="industry-card card-appear group relative bg-white/[0.04] border border-white/10 p-10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="absolute -right-8 -top-8 w-36 h-36 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 bg-[#e31e24] rounded-full" />
                        <span className="font-body text-white/45 font-bold uppercase text-[10px] tracking-[0.18em]">
                          {card.label}
                        </span>
                      </div>
                      <h4 className="text-xl font-headline font-bold text-white mb-4 leading-snug">
                        {card.title}
                      </h4>
                      <p className="font-body text-slate-400 text-sm leading-relaxed mb-8">{card.description}</p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-white/70 font-body font-semibold text-xs group-hover:text-white group-hover:gap-3 transition-all duration-300"
                      >
                        View Case Study
                        <span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="md:col-span-2 lg:col-span-3 text-center py-16 font-body text-slate-500">
                  No case studies yet for this sector — check back soon.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            BRAND STORIES
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white" id="brand-stories">
          <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
              <div>
                <p className="eyebrow">Brand Stories</p>
                <h2 className="text-4xl font-headline font-bold text-[#0a192f]">Brand Stories</h2>
              </div>
              <a
                href="#"
                className="btn-link text-[#0a192f] underline underline-offset-8 hover:opacity-60 transition-opacity"
              >
                View All Brand Stories →
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {BLOG_POSTS.map(post => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden mb-5 bg-slate-100">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="border-l-2 border-transparent group-hover:border-[#0a192f] pl-4 transition-all duration-300">
                    <h3 className="text-lg font-headline font-bold mb-3 leading-snug text-[#191c1e] group-hover:text-[#0a192f] transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-slate-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-[#0a192f] font-body font-bold text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read More
                      <span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
