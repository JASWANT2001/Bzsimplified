import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'How do you identify where money is being lost in my business?',
    a: 'We begin with a full diagnostic audit — reviewing bank statements, vendor contracts, recurring subscriptions, payroll structures, and revenue collection cycles. Most businesses lose 15–25% of cash flow to invisible inefficiencies that only surface under structured scrutiny.',
  },
  {
    q: 'My finances are in a bad state. Is it too late to fix them?',
    a: 'No. We work with businesses across every severity level — from mild cash flow tightness to active debt distress. The earlier you engage, the more options you have. But even in acute situations, structured intervention produces measurable stabilisation within 8–12 weeks.',
  },
  {
    q: 'Do you work with our existing accountant or CA?',
    a: 'Yes. We collaborate with your existing financial partners rather than replacing them. Our role is structural and strategic — we identify what to fix and how, while your CA or accountant handles the compliance and filing work.',
  },
  {
    q: 'What is a "capital buffer" and why does my business need one?',
    a: 'A capital buffer is a ring-fenced liquidity reserve — typically 3 to 6 months of fixed operating costs. It protects you from revenue dips, delayed receivables, or unexpected expenses without forcing you into debt. We build and fund it systematically as part of the restructuring process.',
  },
  {
    q: 'How long before I see results from the Fix Your Finances engagement?',
    a: 'Most clients see meaningful cash flow improvement within 4–6 weeks of the diagnostic phase. Full structural stabilisation — debt consolidated, buffer established, reporting in place — typically completes within 12 weeks.',
  },
]

const SERVICES = [
  {
    icon: 'account_balance',
    title: 'Financial Restructuring',
    desc: 'Review and reorganize existing financial processes to improve accuracy, transparency, and control.',
    dark: true,
  },
  {
    icon: 'balance',
    title: 'TB, P&L & Balance Sheet Alignment',
    desc: 'Identify mismatches, inconsistencies, and gaps across your financial statements and align them into a reliable reporting structure.',
    dark: false,
  },
  {
    icon: 'monitoring',
    title: 'Financial Health Study',
    desc: 'Conduct a comprehensive analysis of your business performance, liabilities, profitability trends, and cash flow position.',
    dark: false,
  },
  {
    icon: 'bar_chart',
    title: 'Reporting Standardization',
    desc: 'Create clear formats, dashboards, and reporting systems for better visibility and faster decision-making.',
    dark: true,
  },
  {
    icon: 'verified',
    title: 'Process & Compliance Readiness',
    desc: 'Strengthen internal financial practices to support audits, fundraising, expansion, and governance requirements.',
    dark: false,
  },
  {
    icon: 'lightbulb',
    title: 'Management Insights',
    desc: 'Convert numbers into actionable insights to support growth, cost optimization, and long-term planning.',
    dark: true,
  },
]

const OUTCOMES = [
  'Clear visibility of your financial position',
  'Structured and reliable financial reporting',
  'Better control over profitability and cash flow',
  'Improved readiness for investors, lenders, and audits',
  'Stronger decision-making backed by data',
  'Confidence to scale sustainably',
]

export default function ServiceFF() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-8">
        <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f] bg-[#eceef1] px-3 py-1.5 rounded-lg">
          STABILIZE / Fix Your Finances
        </span>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-end mb-12 md:mb-24">
        <div className="col-span-12 lg:col-span-8">
          <h1
            className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Restructure Your Finances.<br />
            <span className="text-[#515f78]">Build Clarity. Scale with Confidence.</span>
          </h1>
          <p className="font-body text-xl text-[#5a5e6a] max-w-2xl leading-relaxed mb-4">
            Financial confusion slows growth. We help businesses reorganize financial systems, align numbers with reality, and create structured visibility across every layer of operations.
          </p>
          <p className="font-body text-base font-semibold text-[#0a192f] max-w-2xl leading-relaxed">
            Our Fix Your Finance framework brings together your Trial Balance (TB), Profit &amp; Loss (P&amp;L), Balance Sheet, and operational data into one clear financial story — so decisions are based on facts, not assumptions.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col">
          <div className="w-full h-64 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
              alt="Financial workspace"
            />
          </div>
          <Link
            to="/contact"
            className="self-start inline-flex items-center gap-2 bg-[#0a192f] text-white px-8 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-widest hover:bg-[#1a2f4f] transition-colors mt-4 group"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ── What We Do */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2
            className="font-headline font-extrabold text-[#0a192f] tracking-tighter"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          >
            What We Do
          </h2>
          <p className="font-body text-[#5a5e6a] text-base max-w-sm md:text-right leading-relaxed">
            Six structured pillars to bring clarity to your financial ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`relative rounded-xl p-8 lg:p-10 flex flex-col gap-4 overflow-hidden ${s.dark ? 'bg-[#0a192f]' : 'bg-white border border-slate-200'}`}
            >
              {/* Watermark number */}
              <span
                className={`absolute top-3 right-5 font-headline font-black leading-none select-none pointer-events-none ${s.dark ? 'text-white/5' : 'text-[#0a192f]/5'}`}
                style={{ fontSize: '5rem' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={`material-symbols-outlined relative z-10 ${s.dark ? 'text-white/60' : 'text-[#0a192f]'}`}
                style={{ fontSize: '30px' }}
              >
                {s.icon}
              </span>
              <h3 className={`font-headline text-xl font-bold relative z-10 ${s.dark ? 'text-white' : 'text-[#0a192f]'}`}>
                {s.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed relative z-10 ${s.dark ? 'text-[#b9c7e4]' : 'text-[#5a5e6a]'}`}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Outcomes */}
      <section className="bg-[#0a192f] py-16 md:py-24 mb-16 md:mb-32 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-[#e31e24]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-5%] w-72 h-72 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2
              className="font-headline font-extrabold tracking-tighter text-white"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              Outcomes You Can Expect
            </h2>
            <p className="font-body text-white/40 text-sm max-w-sm md:text-right leading-relaxed">
              Measurable results from every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OUTCOMES.map((o, i) => (
              <div key={o} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="font-headline font-extrabold text-[#e31e24] leading-none shrink-0 mt-0.5" style={{ fontSize: '1.4rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-sm text-[#b9c7e4] leading-snug pt-1">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tagline banner */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="bg-[#eceef1] rounded-2xl p-10 md:p-14 text-center">
          <p className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
            We simplify finance so your business can focus on growth.
          </p>
          <p className="font-body text-[#39475f] text-base">
            Clarity in numbers. Confidence in decisions. Stability in growth.
          </p>
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
              Ready to fix your finances?
            </h3>
            <p className="font-body text-white/50 text-base">Clarity in numbers. Confidence in decisions. Stability in growth.</p>
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
