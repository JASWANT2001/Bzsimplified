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
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <h1
              className="font-headline font-extrabold tracking-tighter text-[#0a192f] leading-[0.95] mb-8"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              Secure your <br />
              <span className="text-[#515f78]">financial foundation.</span>
            </h1>
            <p className="font-body text-xl text-[#5a5e6a] font-light max-w-2xl leading-relaxed">
              Fix Your Finances is a dedicated stabilisation initiative designed to identify leaks, restructure debt, and build a resilient capital framework for long-term growth.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <div className="w-full h-64 bg-[#e0e3e6] rounded-xl overflow-hidden group">
              <img
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEd8zOKi6QBCYH7Lbk-WaLWKM_S5kPvFIN2mthVdVkVaxtDvIfCLq0dZqzNqbp0XEiMheq1mZrcs_YcGZyia2tSry0wi9nZnWFLHPvkW6BzxLWQhHndXgJ1JxsohrsLUo-HYHgDcIc0gH3Sdwu_MPR2Xi-m1AR1_vz7hUAR7j7z1z0PPQ5c5PtCGuQKsJHtC3JVPQDQ9heysBKU1FZx2uuiVGCGoI6beMf1fqfNq4hUoFSFMj63W8ChwLh3PxY-Bham-TZjqaB6qeh"
                alt="Financial workspace"
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Asymmetric Content Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-xl overflow-hidden shadow-sm">

          {/* Left — phases */}
          <div className="md:col-span-7 bg-white p-10 lg:p-16">

            {/* Phase 1 */}
            <div className="mb-16">
              <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>
                account_balance_wallet
              </span>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-[#0a192f] mb-5">
                Phase 1: Diagnostic Leak Detection
              </h2>
              <p className="font-body text-[#5a5e6a] leading-loose mb-8">
                Most financial instability stems from invisible erosion. Our first protocol involves a deep-dive audit of operational expenditures and recurring liabilities. We look beyond the balance sheet to understand the behavioural patterns that affect your liquidity.
              </p>
              <ul className="space-y-3">
                {[
                  'Expense Rationalisation & Reduction',
                  'Cash Flow Sensitivity Mapping',
                  'Revenue Leakage Identification',
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 font-body text-sm font-medium text-[#191c1e]">
                    <span className="w-2 h-2 bg-[#0a192f] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 2 */}
            <div>
              <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>
                trending_up
              </span>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-[#0a192f] mb-5">
                Phase 2: Structural Restructuring
              </h2>
              <p className="font-body text-[#5a5e6a] leading-loose mb-8">
                Once the leaks are sealed, we focus on the architecture of your debt and assets. This is the stabilisation core — optimising interest rates, consolidating high-friction liabilities, and establishing an emergency capital buffer.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '40%',  label: 'Avg. Debt Reduction' },
                  { stat: '12wk', label: 'Stabilisation Timeline' },
                ].map(item => (
                  <div key={item.label} className="bg-[#f7f9fc] p-6 rounded-xl">
                    <div className="font-headline font-bold text-[#0a192f] mb-2" style={{ fontSize: '2.5rem' }}>
                      {item.stat}
                    </div>
                    <div className="font-body text-xs uppercase tracking-widest text-[#5a5e6a] font-semibold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right — dark column */}
          <div className="md:col-span-5 bg-[#0a192f] p-10 lg:p-16 text-white">
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] mb-12 text-[#76849f]">
              Strategic Focus
            </h3>

            <div className="space-y-10 mb-16">
              {[
                {
                  title: 'Debt Consolidation',
                  desc: 'Transforming fragmented, high-interest obligations into a single, manageable stream that aligns with your monthly cash flow cycles.',
                },
                {
                  title: 'Capital Buffering',
                  desc: 'Constructing a 6-month liquidity reserve designed to withstand market volatility and operational shocks without compromising core growth.',
                },
                {
                  title: 'Credit Restoration',
                  desc: 'A systematic approach to repairing and leveraging your credit identity to secure favourable terms for future expansion.',
                },
              ].map(item => (
                <div key={item.title} className="border-l border-white/20 pl-8">
                  <h4 className="font-headline text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="font-body text-[#b9c7e4] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-xl">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTe7-KvLSu-SVB6hoFbELGZcf25SaC3DlaT7hRGBdkqCxu84zj0YIuwpZ4-y9IuJCqrGvLGnAn5fl0dqZEU-N0aVYOPJRFhfjbCebQ_YANJEJwCP4TGc_OyJCO-MDI4NXojRqxCJahgj0zDnmQEIIq7uz8b2O-fgegckCWx_S1e3HjQtPst6-C8smqWGChOFgLE6eHFxiy9CaSZYlz64cJ-Zg2idXdhIJG9NxuQiSzIcVaW5haTeuLU7hsAw9QTAL31pxkXv39-CgX"
                alt="Financial data"
                onError={e => { e.target.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-[#0a192f]/30 rounded-xl" />
            </div>
          </div>

        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-[#eceef1] py-24 mt-0">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-[#0a192f] text-center mb-16">
            Measurable Restoration Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '0%',   label: 'High-Interest Liability' },
              { stat: '2.5×', label: 'Liquidity Ratio Growth' },
              { stat: '100%', label: 'Transparency in Reporting' },
            ].map(item => (
              <div key={item.label} className="bg-white p-12 rounded-xl text-center shadow-sm">
                <div
                  className="font-headline font-bold text-[#0a192f] mb-3"
                  style={{ fontSize: '3.5rem', lineHeight: 1 }}
                >
                  {item.stat}
                </div>
                <p className="font-body text-xs uppercase tracking-widest text-[#5a5e6a] font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
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
            <p className="font-body text-white/50 text-base">Transform your business with our consulting expertise.</p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#0a192f] px-10 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-widest hover:bg-[#f7f9fc] transition-colors group"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
