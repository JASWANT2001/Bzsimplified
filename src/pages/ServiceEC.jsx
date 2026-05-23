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
    dark: false,
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

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-stretch mt-10 md:mt-16 mb-12 md:mb-24">
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
          <h1 className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-8">
            <span className="block text-[#0a192f] whitespace-nowrap">Compliance That Goes</span>
            <span className="block text-[#515f78]">Beyond Filing.</span>
          </h1>
          <p className="font-body text-base text-[#5a5e6a] max-w-2xl leading-relaxed mb-6">
            We help businesses manage GST, bookkeeping, accounting, statutory filings, and CFO-level financial oversight, building systems that keep your business compliant while enabling smarter decisions.
          </p>
          <div className="border-l-2 border-[#e31e24] pl-4 mt-2 self-start">
            <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">Built for clarity. Built for growth.</p>
            <p className="font-headline font-extrabold text-[#0a192f] text-base leading-snug mt-1">Stay compliant. Stay financially clear. Stay growth-ready.</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end">
          <div className="w-full min-h-[300px] h-full bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              alt="Financial Compliance"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80"
            />
          </div>
        </div>
      </section>

      {/* ── Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-10">
            GST & Statutory Compliance
          </h2>
          <div className="space-y-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className={`relative rounded-xl overflow-hidden ${s.dark ? 'bg-[#0a192f]' : 'bg-[#f2f4f7]'}`}
              >
                <div className="relative z-10 p-7 md:p-8 lg:p-10 grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
                    <span className={`material-symbols-outlined ${s.dark ? 'text-white/60' : 'text-[#0a192f]'}`} style={{ fontSize: '30px' }}>{s.icon}</span>
                    <h3 className={`font-headline text-xl font-bold ${s.dark ? 'text-white' : 'text-[#0a192f]'}`}>{s.title}</h3>
                  </div>
                  <div className="hidden lg:flex col-span-1 justify-center">
                    <div className={`h-16 w-px ${s.dark ? 'bg-white/10' : 'bg-slate-300'}`} />
                  </div>
                  <div className="col-span-12 lg:col-span-5">
                    <p className={`font-body text-sm leading-relaxed ${s.dark ? 'text-[#b9c7e4]' : 'text-[#5a5e6a]'}`}>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Framework Planning */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4 bg-[#0a192f] rounded-xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="font-body text-[#b9c7e4] text-xs uppercase tracking-widest mb-4 block">Framework Planning</span>
                <h2 className="font-headline font-extrabold text-white tracking-tighter mb-4">
                  The Foundation of Financial Discipline
                </h2>
                <p className="font-body text-[#b9c7e4] text-sm leading-relaxed">
                  Our Ensure Compliance framework combines operational accounting with strategic finance, helping businesses build sustainable financial systems.
                </p>
              </div>
              <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-[#e31e24]/15 blur-[80px] rounded-full pointer-events-none" />
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col gap-3">
                  <span className="material-symbols-outlined text-[#0a192f]" style={{ fontSize: '28px' }}>{p.icon}</span>
                  <h4 className="font-headline font-bold text-[#0a192f] text-base">{p.title}</h4>
                  <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
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
      <section className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="bg-[#0a192f] rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-headline font-extrabold text-white tracking-tighter mb-2 text-2xl md:text-3xl">
                Ready to build something lasting?
              </h3>
              <p className="font-body text-white/50 text-base">Transform your business with financial clarity, structured compliance, and strategic guidance.</p>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#0a192f] px-10 py-4 rounded-lg font-headline font-semibold text-sm tracking-wide border-2 border-white transition-colors duration-200 hover:bg-transparent hover:text-white group"
            >
              Let's Talk
              <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
