import { Link } from 'react-router-dom'

/* ─── Static data ────────────────────────────────────────────────────────── */

const WALL_OF_FAME = [
  {
    slug: 'palagara-koodai',
    name: 'Palagara Koodai',
    sector: 'F&B',
    what: 'From Logo to Launch, a complete brand journey across all 7 service verticals, transforming a founder\'s vision into a structured, market-ready business.',
    outcome: '7 Service Verticals · Full Brand Journey',
    img: '/palagara-koodai.png',
    isLogo: true,
    logoShrink: true,
  },
  {
    slug: 'leader-mojo',
    name: 'Leader Mojo',
    sector: 'Leadership & Consulting',
    what: 'GTM strategy and market positioning, strengthening market presence, refining messaging, and building a scalable approach to reach, engage, and transform leaders and teams.',
    outcome: 'GTM Strategy Deployed · Brand Positioning Refined',
    img: '/leader-mojo.png',
    isLogo: true,
    logoZoom: true,
  },
  {
    slug: 'sathyam-grand',
    name: 'Sathyam Grand Resort',
    sector: 'Hospitality',
    what: 'Operational transformation through operations restructuring, food cost optimization, and process standardization, improving efficiency, reducing wastage, and strengthening profitability.',
    outcome: 'F&B Cost Optimized · SOPs Standardized',
    img: '/sathyam_HD.png',
  },
  {
    slug: 'hibiscus-ecr',
    name: 'Hibiscus on ECR',
    sector: 'Cafe',
    what: 'Full-spectrum operational support, rota management, payroll restructuring, food cost optimization, purchase systems, GTM strategy, and Virtual COO.',
    outcome: 'Virtual COO Support · Full Ops Transformation',
    img: '/hibiscus-cafe.png',
  },
  {
    slug: 'muttram',
    name: 'Muttram – The Carnatic Canteen',
    sector: 'F&B',
    what: 'Menu engineering, food costing, and GTM strategy, optimizing profitability, refining pricing, and positioning the brand for sustainable growth.',
    outcome: 'F&B Cost Engineered · GTM Strategy Built',
    img: '/muttram.png',
  },
  {
    slug: 'jp-neuro-spine',
    name: 'JP Neuro Spine Hospital and Pain Management Centre',
    sector: 'Healthcare',
    what: 'Concept to launch, complete healthcare enterprise built from the ground up, covering brand, operations, compliance, recruitment, accounts, GTM, and ongoing Virtual COO support.',
    outcome: 'Full End-to-End Build · GTM Strategy Executed',
    img: '/361EA7E6-5570-4979-84E1-A800FE77BD27_1_105_c.jpeg',
    isLogo: true,
    logoZoom: true,
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
  { code: 'LB', num: '01', icon: 'rocket_launch',   title: 'Launch Your Brand',      desc: 'Identity, positioning, and go-to-market.',          img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80' },
  { code: 'BB', num: '02', icon: 'business_center', title: 'Build Your Business',    desc: 'Legal structure, ops, and funding systems.',        img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { code: 'ST', num: '03', icon: 'devices',         title: 'Set Up Your Tech',       desc: 'Core stack to run and measure your business.',      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
  { code: 'PB', num: '04', icon: 'shield',          title: 'Protect Your Brand',     desc: 'Trademarks, contracts, and brand governance.',      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80' },
  { code: 'FF', num: '05', icon: 'account_balance', title: 'Fix Your Finances',      desc: 'Books, cash flow, and profitability controls.',     img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80' },
  { code: 'EC', num: '06', icon: 'gavel',           title: 'Ensure Compliance',      desc: 'Statutory, regulatory, and internal policy.',       img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80' },
  { code: 'MO', num: '07', icon: 'tune',            title: 'Manage Your Operations', desc: 'SOPs, KPIs, and daily rhythm of execution.',        img: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=600&q=80' },
  { code: 'ET', num: '08', icon: 'groups',          title: 'Empower Your Team',      desc: 'Org design, hiring, and leadership cadence.',       img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80' },
  { code: 'VC', num: '09', icon: 'account_tree',    title: 'Virtual COO',            desc: 'Operational systems, processes, and execution.',    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
]

const WHY_US_ITEMS = [
  { icon: 'bolt',      label: 'Execution-focused methodology' },
  { icon: 'groups',    label: 'Operator-led consultation teams' },
  { icon: 'analytics', label: 'Data-driven structural optimization' },
]

const PARTNERS = [
  { name: 'Equinox Labs',           logo: 'https://ik.imagekit.io/ux5g9gl0h/eq-removebg-preview.png',       category: 'Quality & Compliance'    },
  { name: 'Haboteck',               logo: 'https://ik.imagekit.io/ux5g9gl0h/haboteck-removebg-preview.png', category: 'IT Infrastructure'       },
  { name: 'Razorpay Payroll',       logo: 'https://ik.imagekit.io/ux5g9gl0h/Razorpay-removebg-preview.png', category: 'Payroll & Compliance'    },
  { name: 'Purple Chillies Solutions', logo: 'https://ik.imagekit.io/ux5g9gl0h/purple-removebg-preview.png', category: 'Digital Transformation' },
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
        <section data-hero="true" className="relative min-h-screen flex items-center pt-24 pb-14 sm:pt-28 sm:pb-18 md:pt-36 md:pb-28 overflow-hidden bg-[#0a192f]">

          {/* Background photo */}
          <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0f2240]/95 to-transparent z-10" />
            <img
              src={BG_IMG}
              alt="Modern glass building"
              className="w-full h-full object-cover grayscale opacity-30 mix-blend-overlay"
            />
          </div>

          <div className="w-full mx-auto px-5 sm:px-8 md:px-10 lg:px-16 relative z-20 max-w-[1440px]">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

              {/* Left copy */}
              <div className="lg:col-span-7 xl:col-span-7">
                <h1 className="font-headline leading-[1.05] tracking-tight mb-6 sm:mb-8 md:mb-14 text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl">
                  {/* Line 1: outline ghost */}
                  <div
                    className="block mb-1 sm:mb-2 font-black"
                    style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.45)' }}
                  >
                    Bringing Structure
                  </div>
                  {/* Line 2: solid bold white */}
                  <div className="block font-black text-white">
                    to Business Growth<span className="text-[#e31e24]">.</span>
                  </div>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base md:text-fs-body leading-relaxed mb-7 sm:mb-10 md:mb-16 font-body font-light max-w-xl sm:max-w-2xl">
                  Empowering businesses with structural clarity, operational discipline, and strategic momentum.
                </p>

                <div className="flex flex-col gap-3 sm:gap-4 items-start">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#0a192f] font-body font-semibold text-[14px] sm:text-[15px] tracking-[0.04em] rounded-full border-2 border-white transition-all duration-200 hover:bg-transparent hover:text-white active:scale-95 whitespace-nowrap"
                  >
                    <span className="material-symbols-outlined text-[18px] sm:text-[19px] flex-shrink-0">arrow_forward</span>
                    Start Your Transformation
                  </Link>
                  {/* <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/30 text-white font-body font-medium text-[15px] rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:border-white/50 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]">
                    <span className="material-symbols-outlined text-[21px] group-hover:-translate-y-0.5 transition-transform">play_circle</span>
                    <span>See Our Approach</span>
                  </button> */}
                </div>

              </div>

              {/* Right floating card, desktop only */}
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
        <section className="pt-14 md:pt-20 pb-10 md:pb-14 bg-[#f7f9fc]" id="services">
          <div className="mx-auto px-5 sm:px-8 md:px-10 lg:px-16 max-w-[1440px]">

            {/* Header */}
            <div className="mb-7 md:mb-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-[#0a192f] leading-tight">
                  Everything your business needs to scale.
                </h2>
                <p className="font-body text-slate-400 text-sm shrink-0 hidden sm:block">Click any service to explore →</p>
              </div>
            </div>

            {/* 9-card flat grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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

                  <div className="p-5 sm:p-7 flex flex-col flex-1">
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
            TEAM PREVIEW
        ═══════════════════════════════════════════════════════ */}
        <section className="pt-10 md:pt-14 pb-14 md:pb-20 bg-[#0a192f]" id="team-preview">
          <div className="mx-auto px-5 sm:px-8 md:px-10 lg:px-16 max-w-[1440px]">

            <div className="w-full">

              {/* Header */}
              <div className="flex sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 md:mb-14">
                <div>
                  <p className="eyebrow">Our People</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-white leading-tight">
                    The team that executes.
                  </h2>
                </div>
                <Link
                  to="/teams"
                  className="hidden sm:block btn-link text-white/70 underline underline-offset-8 hover:text-white hover:opacity-80 transition-all flex-shrink-0"
                >
                  View Full Team →
                </Link>
              </div>

              {/* 2×2 on mobile/tablet, 4-across on desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {[
                  { img: 'https://ik.imagekit.io/ux5g9gl0h/bottom_left.png',         name: 'Kalyan',            role: 'Founder & CEO',                            fit: 'object-cover', pos: '35% 40%' },
                  { img: 'https://ik.imagekit.io/ux5g9gl0h/sunil%20jose.png',        name: 'Sunil Jose',        role: 'Consultant – IP & Copyright'          },
                  { img: 'https://ik.imagekit.io/ux5g9gl0h/top_left.png',           name: 'Arunkumar Rajaram', role: 'Learning & Training Excellence Lead',   fit: 'object-cover', pos: 'center top' },
                  { img: 'https://ik.imagekit.io/ux5g9gl0h/top_right.png',         name: 'Dinesh',            role: 'Financial Strategy & Project Funding Lead', fit: 'object-cover object-top', pos: '30% top' },
                ].map(member => (
                  <Link
                    key={member.name}
                    to="/teams"
                    className="group flex flex-col text-left"
                  >
                    <div className="w-full aspect-square overflow-hidden rounded-xl shadow-md group-hover:shadow-2xl group-hover:shadow-black/40 transition-shadow duration-300 bg-[#0e2340]">
                      <img
                        src={member.img}
                        alt={member.name}
                        className={`w-full h-full ${member.fit ?? 'object-contain object-bottom'} group-hover:scale-105 transition-transform duration-500`}
                        style={member.pos ? { objectPosition: member.pos } : undefined}
                      />
                    </div>

                    <div className="pt-3 sm:pt-5">
                      <h3 className="font-headline font-bold text-white text-[15px] sm:text-[18px] leading-tight mb-1 group-hover:text-[#e31e24] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="font-body font-semibold text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.14em] uppercase text-white/35 leading-snug">
                        {member.role}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View Full Team — below grid, mobile only */}
              <div className="mt-10 flex justify-center sm:hidden">
                <Link
                  to="/teams"
                  className="inline-flex items-center gap-2 font-body font-semibold text-[14px] text-white/60 hover:text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded-full transition-all duration-200 group"
                >
                  View Full Team
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PARTNERS
        ═══════════════════════════════════════════════════════ */}
        <section className="py-14 md:py-24 bg-white" id="partners">
          <div className="mx-auto px-5 sm:px-8 md:px-10 lg:px-16 max-w-[1440px]">

            {/* Header */}
            <div className="flex sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 md:mb-14">
              <div>
                <p className="font-body font-bold text-[12px] tracking-[0.28em] uppercase text-[#e31e24] mb-3">Our Partners</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-[#0a192f] leading-tight">
                  Trusted alliances.
                </h2>
              </div>
              <Link
                to="/partners"
                className="hidden sm:inline-flex items-center gap-2 font-body font-semibold text-[14px] text-[#0a192f] hover:text-[#e31e24] underline underline-offset-8 transition-colors duration-200 flex-shrink-0"
              >
                View All Partners →
              </Link>
            </div>

            {/* 4 flip-on-hover cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {PARTNERS.map((p, i) => (
                <Link
                  key={p.name}
                  to="/partners"
                  className="group relative bg-[#f7f9fc] rounded-lg p-5 sm:p-8 flex flex-col gap-4 sm:gap-5 overflow-hidden border border-slate-100 hover:border-transparent hover:bg-[#0a192f] transition-all duration-300 cursor-pointer"
                >
                  {/* Category eyebrow */}
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 group-hover:text-white/40 transition-colors duration-300 relative z-10">
                    {p.category}
                  </p>

                  {/* Logo */}
                  <div className="flex items-center justify-center h-16 relative z-10">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-full w-full object-contain opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  {/* Name + arrow */}
                  <div className="flex items-center justify-between mt-auto relative z-10">
                    <p className="font-headline font-bold text-[#0a192f] text-[15px] leading-tight group-hover:text-white transition-colors duration-300">
                      {p.name}
                    </p>
                    <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200">
                      arrow_forward
                    </span>
                  </div>

                  {/* Watermark number */}
                  <span className="absolute -right-1 -bottom-4 font-headline font-black leading-none text-slate-100 group-hover:text-white/[0.04] transition-colors duration-300 select-none pointer-events-none" style={{ fontSize: '5.5rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Link>
              ))}
            </div>

            {/* View All Partners — below grid, mobile only */}
            <div className="mt-10 flex justify-center sm:hidden">
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 font-body font-semibold text-[14px] text-[#0a192f]/60 hover:text-[#0a192f] border border-slate-300 hover:border-slate-400 px-6 py-3 rounded-full transition-all duration-200 group"
              >
                View All Partners
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            BRANDS
        ═══════════════════════════════════════════════════════ */}

        {/* ═══════════════════════════════════════════════════════
            WALL OF FAME
        ═══════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-20 md:py-32 bg-[#eceef1] overflow-hidden" id="wall-of-fame">
          <div className="mx-auto px-5 sm:px-8 md:px-10 lg:px-16 max-w-[1440px]">
            {/* Header */}
            <div className="flex sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 md:mb-14">
              <div>
                <p className="font-body font-bold text-[12px] tracking-[0.28em] uppercase text-[#e31e24] mb-3">
                  Wall of Fame
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-[#0a192f] leading-tight">
                  From Vision to Brand: Our Success Stories
                </h2>
              </div>
              <Link
                to="/wall-of-fame"
                className="hidden sm:inline-flex items-center gap-2 font-body font-semibold text-[14px] text-[#0a192f] hover:text-[#e31e24] underline underline-offset-8 transition-colors duration-200 flex-shrink-0"
              >
                View All Stories →
              </Link>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {WALL_OF_FAME.map(brand => (
                <Link
                  key={brand.slug}
                  to="/wall-of-fame"
                  className="group relative bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col cursor-pointer"
                >

                  {/* Image area */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0 rounded-t-2xl">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${brand.isLogo ? `object-contain bg-white ${brand.logoShrink ? 'p-12' : brand.logoZoom ? 'p-2' : 'p-6'}` : 'object-cover'}`}
                    />

                  </div>

                  <div className="h-px bg-slate-200" />

                  <div className="relative z-10 p-4 sm:p-6 md:p-7 flex flex-col flex-1">
                    {/* Brand name */}
                    <h4 className="text-[15px] sm:text-lg md:text-xl font-headline font-black text-[#0a192f] mb-2 sm:mb-3 leading-tight">
                      {brand.name}
                    </h4>

                    {/* Outcome pill */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#f7f9fc] group-hover:bg-[#eceef1] border border-slate-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 self-start transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e31e24] flex-shrink-0" />
                      <span className="font-body text-slate-600 group-hover:text-[#0a192f] text-[10px] sm:text-xs transition-colors duration-300">{brand.outcome}</span>
                    </div>

                    {/* Bottom row */}
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-100 group-hover:border-slate-200 flex items-center justify-between transition-colors duration-300">
                      <span className="font-body font-bold text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#e31e24]">{brand.sector}</span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 group-hover:bg-[#0a192f] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 flex-shrink-0">
                        <span className="material-symbols-outlined text-[15px] text-slate-500 group-hover:text-white transition-colors duration-300">arrow_forward</span>
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile pill button */}
            <div className="sm:hidden flex justify-center mt-8">
              <Link
                to="/wall-of-fame"
                className="inline-flex items-center gap-2 bg-[#0a192f] text-white font-body font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-[#0e2340] transition-colors duration-200"
              >
                View All Stories
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            BRAND STORIES — HIDDEN FOR NOW
        ═══════════════════════════════════════════════════════ */}
        {false && <section className="py-16 md:py-24 bg-white" id="brand-stories">
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
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#0a192f] font-body font-semibold text-[15px] tracking-[0.04em] rounded-full border-2 border-white transition-all duration-200 hover:bg-transparent hover:text-white whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[19px]">mail</span>
                  Get in Touch
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white text-white font-body font-medium text-[15px] rounded-full transition-all duration-200 hover:bg-transparent hover:text-white whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[19px]">phone_in_talk</span>
                  Schedule a Call
                </Link>
              </div>
            </div>

          </div>
        </section>}

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

