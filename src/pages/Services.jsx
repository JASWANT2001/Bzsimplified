import { Link } from 'react-router-dom'

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

export default function Services() {
  return (
    <main>
        {/* ═══════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#f7f9fc] via-white to-white overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 font-body text-[11px] text-slate-400 mb-12">
              <Link to="/" className="hover:text-slate-600 transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-[12px]">chevron_right</span>
              <span className="text-slate-500">Our Services</span>
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl mb-8">
              <p className="eyebrow">Our Services</p>
              <h1 className="font-headline font-black text-[#0a192f] mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Three stages of operational evolution.
              </h1>
              <p className="font-body font-light text-slate-600 text-lg leading-relaxed max-w-2xl">
                We guide ambitious leaders through structured growth across three distinct stages, each designed to address critical operational challenges and unlock your competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SERVICES GRID BY STAGE
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid md:grid-cols-3 gap-12">
              {['START', 'STABILIZE', 'SCALE'].map(stage => {
                const stageServices = SERVICES.filter(s => s.stage === stage)
                return (
                  <div key={stage}>
                    {/* Stage Header */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-[#0a192f] rounded-full" />
                        <h2 className="font-headline font-bold text-[#0a192f] text-2xl">{stage}</h2>
                      </div>
                      <p className="text-slate-400 font-body text-[11px] tracking-widest uppercase ml-5">
                        Services {stageServices[0].num} — {stageServices[stageServices.length - 1].num}
                      </p>
                    </div>

                    {/* Services Cards */}
                    <div className="space-y-5">
                      {stageServices.map(service => (
                        <Link
                          key={service.code}
                          to={`/service/${service.code.toLowerCase()}`}
                          className="group block bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 hover:border-[#0a192f] hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                          {/* Hover shine effect */}
                          <div className="absolute inset-0 -top-1/2 -right-1/2 w-1/2 h-full bg-white/10 rotate-45 group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                          <div className="relative z-10">
                            <div className="flex items-start gap-3 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0a192f] flex-shrink-0 group-hover:bg-[#0f2847] transition-colors duration-300">
                                <span className="font-headline font-bold text-white text-xs">
                                  {service.code}
                                </span>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-headline font-bold text-[#0a192f] text-[14px] group-hover:text-[#0a192f] transition-colors">
                                  {service.title}
                                </h3>
                                <p className="text-slate-400 font-body text-[10px] mt-0.5">
                                  Service {service.num}
                                </p>
                              </div>
                            </div>
                            <p className="font-body text-slate-600 text-[13px] leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
                              {service.desc}
                            </p>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                              <span className="material-symbols-outlined text-[#0a192f] text-[16px]">
                                arrow_forward
                              </span>
                              <span className="text-[#0a192f] font-body font-semibold text-[11px] tracking-widest uppercase">
                                Learn More
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-gradient-to-r from-[#0a192f] to-[#0f2240]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center">
            <h2 className="font-headline font-bold text-white text-4xl md:text-5xl mb-6">
              Ready to transform your operations?
            </h2>
            <p className="font-body text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Choose the service that aligns with your growth stage and let's build structural clarity into your organization.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#0a192f] font-body font-semibold text-[14px] rounded-full transition-all duration-300 hover:shadow-[0_16px_48px_rgba(255,255,255,0.2)] hover:-translate-y-1"
            >
              Get Started
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            FAQ SECTION (Optional)
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline font-bold text-[#0a192f] text-3xl mb-16 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: 'Can I use multiple services?',
                    a: 'Absolutely. Most clients engage across all three stages. We tailor a program based on your specific needs and timeline.',
                  },
                  {
                    q: 'How long does each service typically take?',
                    a: 'Timelines vary by service and complexity, but expect 3-6 months for meaningful results. We work alongside your team with hands-on execution.',
                  },
                  {
                    q: 'Do you work with early-stage startups?',
                    a: 'Yes. START stage services are designed for founders and early-stage teams. We help you avoid common pitfalls and accelerate market entry.',
                  },
                  {
                    q: 'What industries do you serve?',
                    a: 'We have proven expertise across FinTech, SaaS, Logistics, Healthcare Tech, and more. Our methodology translates across sectors.',
                  },
                ].map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-6 hover:border-[#0a192f] hover:bg-slate-50 transition-all duration-300 cursor-pointer"
                  >
                    <summary className="flex items-center justify-between font-headline font-semibold text-[#0a192f] text-[15px] select-none">
                      {item.q}
                      <span className="material-symbols-outlined text-[20px] transition-transform group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <p className="font-body text-slate-600 text-[14px] leading-relaxed mt-4">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}
