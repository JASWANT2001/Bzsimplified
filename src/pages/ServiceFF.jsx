import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'How do you identify where money is being lost in my business?',
    a: 'We begin with a full diagnostic audit, reviewing bank statements, vendor contracts, recurring subscriptions, payroll structures, and revenue collection cycles. Most businesses lose 15–25% of cash flow to invisible inefficiencies that only surface under structured scrutiny.',
  },
  {
    q: 'My finances are in a bad state. Is it too late to fix them?',
    a: 'No. We work with businesses across every severity level, from mild cash flow tightness to active debt distress. The earlier you engage, the more options you have. But even in acute situations, structured intervention produces measurable stabilisation within 8–12 weeks.',
  },
  {
    q: 'Do you work with our existing accountant or CA?',
    a: 'Yes. We collaborate with your existing financial partners rather than replacing them. Our role is structural and strategic. We identify what to fix and how, while your CA or accountant handles the compliance and filing work.',
  },
  {
    q: 'What is a "capital buffer" and why does my business need one?',
    a: 'A capital buffer is a ring-fenced liquidity reserve, typically 3 to 6 months of fixed operating costs. It protects you from revenue dips, delayed receivables, or unexpected expenses without forcing you into debt. We build and fund it systematically as part of the restructuring process.',
  },
  {
    q: 'How long before I see results from the Fix Your Finances engagement?',
    a: 'Most clients see meaningful cash flow improvement within 4–6 weeks of the diagnostic phase. Full structural stabilisation, debt consolidated, buffer established, reporting in place, typically completes within 12 weeks.',
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
    dark: true,
  },
  {
    icon: 'bar_chart',
    title: 'Reporting Standardization',
    desc: 'Create clear formats, dashboards, and reporting systems for better visibility and faster decision-making.',
    dark: false,
  },
  {
    icon: 'verified',
    title: 'Process & Compliance Readiness',
    desc: 'Strengthen internal financial practices to support audits, fundraising, expansion, and governance requirements.',
    dark: true,
  },
  {
    icon: 'lightbulb',
    title: 'Management Insights',
    desc: 'Convert numbers into actionable insights to support growth, cost optimization, and long-term planning.',
    dark: false,
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

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-4 md:gap-8 items-stretch mt-8 md:mt-16 mb-10 md:mb-24">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-5 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#0a192f]">Restructure Your Finances.</span>
            <span className="block text-[#515f78]">Build Clarity.</span>
            <span className="block text-[#e31e24]">Scale with Confidence.</span>
          </h1>
          <p className="font-body text-base text-[#5a5e6a] max-w-2xl leading-relaxed mb-6">
            Financial confusion slows growth. We help businesses reorganize financial systems, align numbers with reality, and create structured visibility across every layer of operations.
          </p>
          <div className="border-l-2 border-[#e31e24] pl-4 mt-2 self-start">
            <p className="font-body text-[#39475f] font-medium text-sm leading-relaxed">From numbers to clarity.</p>
            <p className="font-headline font-extrabold text-[#0a192f] text-base leading-snug mt-1">Our Fix Your Finance framework brings together your Trial Balance (TB), Profit &amp; Loss (P&amp;L), Balance Sheet, and operational data into one clear financial story, so decisions are based on facts, not assumptions.</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-end">
          <div className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-full lg:min-h-[420px] mt-6 lg:mt-0 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
              alt="Financial workspace"
            />
          </div>
        </div>
      </section>

      {/* ── What We Do */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter text-2xl sm:text-3xl md:text-4xl">
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
                className={`relative rounded-xl p-6 md:p-8 lg:p-10 flex flex-col gap-4 overflow-hidden ${s.dark ? 'bg-[#0a192f]' : 'bg-[#f2f4f7]'}`}
              >
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
        </div>
      </section>

      {/* ── Outcomes */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-12">
            <h2 className="font-headline font-extrabold tracking-tighter text-[#0a192f] text-2xl sm:text-3xl md:text-4xl">
              Outcomes You Can Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OUTCOMES.map((o, i) => (
              <div key={o} className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-6">
                <span className="font-headline font-extrabold text-[#e31e24] leading-none shrink-0 mt-0.5" style={{ fontSize: '1.4rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-sm text-[#39475f] leading-snug pt-1">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tagline */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="relative bg-[#0a192f] rounded-2xl p-10 md:p-14 text-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-[#0a192f]/60 rounded-2xl" />
            <p className="relative z-10 font-headline font-extrabold text-white tracking-tighter mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              We simplify finance so your business can focus on growth.
            </p>
            <p className="relative z-10 font-body text-white/50 text-base">
              Clarity in numbers. Confidence in decisions. Stability in growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ */}
      <FAQ items={FAQS} />

      {/* ── CTA */}
      <section className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="bg-[#0a192f] rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#e31e24]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="text-left relative z-10">
              <h3 className="font-headline font-extrabold text-white tracking-tighter mb-2 text-xl sm:text-2xl md:text-3xl">
                Ready to fix your finances?
              </h3>
              <p className="font-body text-white text-sm sm:text-base">Clarity in numbers. Confidence in decisions. Stability in growth.</p>
            </div>
            <Link
              to="/contact"
              className="relative z-10 w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 bg-white text-[#0a192f] px-8 py-4 rounded-full font-headline font-semibold text-sm tracking-wide border-2 border-white transition-colors duration-200 hover:bg-transparent hover:text-white group"
            >
              Let's Discuss
              <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
