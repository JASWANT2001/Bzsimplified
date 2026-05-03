import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What types of compliance do you cover?',
    a: 'We cover statutory compliance (ROC filings, GST, TDS, PF/ESI), regulatory compliance specific to your industry (FSSAI, NBFC, healthcare, e-commerce), internal policy frameworks, and data protection obligations. The exact scope is determined during the initial audit.',
  },
  {
    q: 'How do you handle compliance for a business operating across multiple states?',
    a: 'Multi-state operations require jurisdiction-specific mapping. We build a unified compliance calendar that accounts for state-level variations in labour laws, shop act registrations, and professional tax obligations — all managed from a single dashboard.',
  },
  {
    q: 'We have never done a compliance audit before. Where do we start?',
    a: 'We start with a full-scope compliance gap assessment — no prior documentation required. We identify what is in place, what is missing, and what is at risk, then prioritise remediation by severity so the most critical gaps are closed first.',
  },
  {
    q: 'Can you help if we are already facing a notice or penalty from a regulator?',
    a: 'Yes. We handle active regulatory notices in coordination with specialist legal counsel. Our role is to prepare the response documentation, remediation evidence, and corrective action plan — and to ensure the underlying gap does not recur.',
  },
  {
    q: 'How do you ensure compliance stays current as regulations change?',
    a: 'We set up a continuous monitoring system — a compliance calendar with automated alerts, quarterly review cycles, and a regulatory change tracker mapped to your specific industry and jurisdiction. Compliance is treated as an ongoing state, not a one-time event.',
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
            className="font-headline font-extrabold tracking-tighter text-[#0a192f] leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Regulatory{' '}
            <span className="text-[#515f78]">Fortitude</span>{' '}
            for Modern Enterprise.
          </h1>
          <p className="font-body text-xl text-[#5a5e6a] max-w-xl mb-10 leading-relaxed">
            We don't just check boxes. We build resilient compliance frameworks that safeguard your reputation and optimise your operational integrity.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="bg-[#0a192f] text-white px-8 py-4 rounded-lg font-headline font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors"
            >
              Consult Our Experts
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 font-headline font-bold text-[#0a192f] text-sm group"
            >
              View All Services
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Hero image + floating stat card */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-square bg-[#eceef1] overflow-hidden rounded-2xl shadow-2xl">
            <img
              alt="Financial Compliance"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmX5hhf5BW5xMUfBksk5dphBEi9R8rE4pX5T0Obtwr6WD2o7fJ2m6E-rzvzNKGv-ZmNjjEC8eurpvjeJKTax_rXXHntc2bStgr2GGWVsEh_UBUJF5Yjuy75pa79FjnOHU104623CZxhylc0tuVomG5q8vLeKxVDGJE7D8H90WtMxCtcEBL-K1Hvqww8XN1Ful5jOCWCnzdw6OjHsjOFRL4dlP2Blu9fFi4SF-lm01KiV7LyK-qfZrSYbTaiSTa-B21jFke7cs3mrAR"
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
          {/* Floating stat */}
          <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-7 shadow-2xl rounded-xl border border-slate-100 max-w-[220px]">
            <span className="material-symbols-outlined text-[#0a192f] text-4xl mb-3 block">verified_user</span>
            <p className="font-headline font-bold text-2xl text-[#0a192f]">100%</p>
            <p className="font-body text-sm text-[#5a5e6a] mt-1 leading-snug">Audit Success Rate for Tier 1 Clients</p>
          </div>
        </div>
      </section>

      {/* ── Three Service Cards */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: 'gavel',
              title: 'Risk Mitigation',
              desc: 'Proactive identification and neutralisation of regulatory vulnerabilities before they manifest as operational threats.',
              elevated: false,
            },
            {
              icon: 'policy',
              title: 'Policy Engineering',
              desc: 'Bespoke framework development that aligns global regulatory requirements with your unique organisational culture and goals.',
              elevated: true,
            },
            {
              icon: 'security_update_good',
              title: 'Continuous Audit',
              desc: 'Real-time monitoring systems that ensure compliance is a constant state, not just a periodic event.',
              elevated: false,
            },
          ].map(card => (
            <div
              key={card.title}
              className={`bg-white p-8 md:p-10 rounded-2xl flex flex-col justify-between group hover:bg-[#0a192f] transition-all duration-500 border border-slate-100 ${card.elevated ? 'shadow-2xl md:-translate-y-4' : 'shadow-sm'}`}
            >
              <div>
                <div className="w-12 h-12 bg-[#eceef1] rounded-full flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-300">
                  <span className="material-symbols-outlined text-[#0a192f] group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4 text-[#0a192f] group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-body text-[#5a5e6a] group-hover:text-[#b9c7e4] leading-relaxed transition-colors duration-300">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Large image card */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#eceef1] rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col justify-end relative overflow-hidden min-h-[360px] lg:min-h-[480px]">
            <img
              alt="Framework Planning"
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCd3gzjK3q4fuhRdvHYPAWEnoT3HGMGPCpzCK1IqZeLU1alAZD4pa4Y2UZeNtcgikVjZKWicPr8uVtpo-eQsDqNMBY-IBgze7AGwVzxJ7D6CqR9WQm1Uy6rqxnDMqvSojKSs7tizHGCYnQy5b7gZCWdbzLXPDDzfWq1l8Xj0YnEMwCtS6fatUtd8ZIhJWtiBetPLwqTJJiaJNtfLqJWZLyl_ZX2_wd2vXrKCRs3wwkpXRufVzfJZXA1uUc1wOV6w99CimnGpRkclKM"
              onError={e => { e.target.style.display = 'none' }}
            />
            <div className="relative z-10">
              <h2 className="font-headline text-4xl font-bold mb-5 tracking-tight text-[#0a192f]">
                The Framework of Trust
              </h2>
              <p className="font-body text-lg text-[#5a5e6a] max-w-md leading-relaxed">
                Our Ensure Compliance protocol is built on decades of navigating the world's most complex regulatory landscapes.
              </p>
            </div>
          </div>

          {/* Institutional Integrity */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-10 flex items-center gap-8 shadow-sm">
            <div className="w-20 h-20 flex-shrink-0 bg-[#0a192f] rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-4xl">account_balance</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-xl mb-2 text-[#0a192f]">Institutional Integrity</h4>
              <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">
                Systems designed to exceed ISO, GDPR, and sector-specific global standards.
              </p>
            </div>
          </div>

          {/* Stat — Global Audits */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-center shadow-sm">
            <p className="font-headline text-5xl font-extrabold text-[#0a192f] mb-2">500+</p>
            <p className="font-body text-xs uppercase tracking-widest text-[#5a5e6a] font-semibold">Global Audits</p>
          </div>

          {/* Stat — Critical Failures */}
          <div className="bg-[#0a192f] rounded-3xl p-8 flex flex-col justify-center">
            <p className="font-headline text-5xl font-extrabold text-white mb-2">0</p>
            <p className="font-body text-xs uppercase tracking-widest text-[#76849f] font-semibold">Critical Failures</p>
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
