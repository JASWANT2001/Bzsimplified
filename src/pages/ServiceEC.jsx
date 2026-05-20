import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What compliance services do you cover?',
    a: 'We support GST filings, bookkeeping, accounting, payroll compliance, ROC filings, tax coordination, financial reporting, and Virtual CFO services.',
  },
  {
    q: 'How can a Virtual CFO help my business?',
    a: 'A Virtual CFO provides strategic guidance on budgeting, cash flow, profitability, financial planning, and business growth without the cost of a full-time CFO.',
  },
  {
    q: 'We have never maintained structured books before. Where do we start?',
    a: 'We begin with a financial health review, organise existing records, establish processes, and create a sustainable bookkeeping and compliance framework.',
  },
  {
    q: 'Can you help if we have pending GST notices or compliance issues?',
    a: 'Yes. We assist with regulatory responses, reconciliations, corrective actions, and creating systems to prevent future issues.',
  },
  {
    q: 'How do you keep compliance updated as regulations change?',
    a: 'We continuously monitor regulatory updates and adapt filing, reporting, and financial processes to keep your business compliant.',
  },
]

const SERVICES = [
  {
    icon: 'receipt_long',
    title: 'GST Management',
    desc: 'End-to-end GST support including registration, filing, reconciliation, notices, and compliance monitoring to reduce risk and improve accuracy.',
    dark: true,
  },
  {
    icon: 'menu_book',
    title: 'Bookkeeping & Financial Records',
    desc: 'Maintain organised books with timely accounting, reconciliations, expense tracking, and reporting for complete financial clarity.',
    dark: false,
  },
  {
    icon: 'account_balance',
    title: 'Virtual CFO Services',
    desc: 'Strategic financial oversight with budgeting, cash flow planning, profitability analysis, MIS reporting, and growth-focused financial guidance.',
    dark: false,
  },
  {
    icon: 'gavel',
    title: 'Regulatory Support',
    desc: 'Ensure adherence to statutory requirements including tax filings, ROC compliance, payroll compliance, and operational reporting.',
    dark: true,
  },
]

const PILLARS = [
  {
    icon: 'visibility',
    title: 'Financial Visibility',
    desc: 'Accurate records and reporting systems that support informed decisions and long-term growth.',
  },
  {
    icon: 'autorenew',
    title: 'Compliance Continuity',
    desc: 'Processes designed to ensure filings, records, and obligations remain current throughout the year.',
  },
  {
    icon: 'trending_up',
    title: 'Strategic Oversight',
    desc: 'Finance leadership that moves beyond compliance to improve profitability, planning, and business resilience.',
  },
]

export default function ServiceEC() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-8">
        <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f] bg-[#eceef1] px-3 py-1.5 rounded-lg">
          STABILIZE / Ensure Compliance
        </span>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-32">
        <div className="lg:col-span-7">
          <h1
            className="font-headline font-extrabold tracking-tighter text-[#0a192f] leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Compliance That Goes<br />
            <span className="text-[#515f78]">Beyond Filing.</span>
          </h1>
          <p className="font-body text-lg font-semibold text-[#0a192f] mb-4">
            Stay compliant. Stay financially clear. Stay growth-ready.
          </p>
          <p className="font-body text-xl text-[#5a5e6a] max-w-xl mb-10 leading-relaxed">
            We help businesses manage GST, bookkeeping, accounting, statutory filings, and CFO-level financial oversight — building systems that keep your business compliant while enabling smarter decisions.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="bg-[#0a192f] text-white px-8 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-wider hover:bg-[#1a2f4f] transition-colors"
            >
              Consult Our Experts
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 font-body font-bold text-[#0a192f] text-sm group"
            >
              View All Services
              <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Hero image + floating stat card */}
        <div className="lg:col-span-5 relative">
          <div className="w-full h-64 lg:aspect-square bg-[#eceef1] overflow-hidden rounded-2xl">
            <img
              alt="Financial Compliance"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80"
            />
          </div>
          {/* Floating stat */}
          <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-7 shadow-2xl rounded-xl border border-slate-100 max-w-[230px]">
            <span className="material-symbols-outlined text-[#0a192f] text-4xl mb-3 block">verified_user</span>
            <p className="font-headline font-bold text-2xl text-[#0a192f]">100%</p>
            <p className="font-body text-sm text-[#5a5e6a] mt-1 leading-snug">Structured Financial Compliance Support</p>
          </div>
        </div>
      </section>

      {/* ── GST & Statutory Compliance label */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <span className="block h-[3px] w-8 bg-[#e31e24] rounded-full" />
            <span className="block h-[3px] w-4 bg-[#eceef1] rounded-full" />
          </div>
          <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f]">GST &amp; Statutory Compliance</span>
        </div>
      </div>

      {/* ── Services — horizontal strips */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="space-y-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`relative rounded-xl overflow-hidden ${s.dark ? 'bg-[#0a192f]' : 'bg-white border border-slate-200'}`}
            >
              <div className="relative z-10 p-7 md:p-8 lg:p-10 grid grid-cols-12 gap-6 items-center">

                {/* Icon + title + desc */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
                  <span className={`material-symbols-outlined ${s.dark ? 'text-white/60' : 'text-[#0a192f]'}`} style={{ fontSize: '30px' }}>{s.icon}</span>
                  <h3 className={`font-headline text-xl font-bold ${s.dark ? 'text-white' : 'text-[#0a192f]'}`}>{s.title}</h3>
                </div>

                {/* Divider */}
                <div className="hidden lg:flex col-span-1 justify-center">
                  <div className={`h-16 w-px ${s.dark ? 'bg-white/10' : 'bg-slate-200'}`} />
                </div>

                {/* Desc */}
                <div className="col-span-12 lg:col-span-7">
                  <p className={`font-body text-sm leading-relaxed ${s.dark ? 'text-[#b9c7e4]' : 'text-[#5a5e6a]'}`}>{s.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Framework Planning */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="grid grid-cols-12 gap-6">

          {/* Left — heading */}
          <div className="col-span-12 lg:col-span-4 bg-[#0a192f] rounded-xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-body text-[#b9c7e4] text-xs uppercase tracking-widest mb-4 block">Framework Planning</span>
              <h2
                className="font-headline font-extrabold text-white tracking-tighter mb-4"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}
              >
                The Foundation of Financial Discipline
              </h2>
              <p className="font-body text-[#b9c7e4] text-sm leading-relaxed">
                Our Ensure Compliance framework combines operational accounting with strategic finance, helping businesses build sustainable financial systems.
              </p>
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-[#e31e24]/15 blur-[80px] rounded-full pointer-events-none" />
          </div>

          {/* Right — 3 pillars */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col gap-3">
                <span className="material-symbols-outlined text-[#0a192f]" style={{ fontSize: '28px' }}>{p.icon}</span>
                <h4 className="font-headline font-bold text-[#0a192f] text-base">{p.title}</h4>
                <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-2xl">
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>500+</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Businesses Supported</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>0</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Missed Critical Compliance Deadlines</div>
          </div>
        </div>
      </section>

      {/* ── FAQ */}
      <FAQ items={FAQS} />

      {/* ── CTA */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="bg-[#0a192f] rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h3
              className="font-headline font-extrabold text-white tracking-tighter mb-2"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
            >
              Ready to build something lasting?
            </h3>
            <p className="font-body text-white/50 text-base">Transform your business with financial clarity, structured compliance, and strategic guidance.</p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#0a192f] px-10 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-widest hover:bg-[#f7f9fc] transition-colors group"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
