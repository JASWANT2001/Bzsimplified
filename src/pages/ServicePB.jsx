import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What does "protecting your brand" actually involve?',
    a: 'It covers four pillars: trademark registration, contract frameworks, brand governance policies, and crisis response protocols. Together these ensure no external party can dilute or misuse your identity, and your internal teams maintain consistent standards.',
  },
  {
    q: 'How long does trademark registration take in India?',
    a: 'Filing itself is done within a week. The registration process with the Trade Marks Registry typically takes 18–24 months, but a filed trademark gives you legal standing from the date of application — so protection begins immediately.',
  },
  {
    q: 'We are a small business. Do we really need brand governance?',
    a: 'Especially at the small business stage. Brand dilution is hardest to reverse once it sets in. Establishing governance early — even a lightweight policy document — prevents costly corrections as your team and distribution channels grow.',
  },
  {
    q: 'What if our brand name or logo is already being used by someone else?',
    a: 'We conduct a conflict search before filing. If conflicts exist, we assess severity, advise on modification strategies, and in serious cases coordinate with IP attorneys for opposition proceedings or coexistence negotiations.',
  },
  {
    q: 'Does this service include legal representation?',
    a: 'We manage the process and documentation end-to-end in coordination with empanelled IP attorneys. Legal representation in any dispute or opposition is handled by those attorneys — we facilitate and project-manage the entire engagement.',
  },
]

export default function ServicePB() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-8">
        <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f] bg-[#eceef1] px-3 py-1.5 rounded-lg">
          STABILIZE / Protect Your Brand
        </span>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-end mb-12 md:mb-24">
        <div className="col-span-12 lg:col-span-8">
          <h1
            className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Preserve your identity.<br />
            <span className="text-[#515f78]">Secure your legacy.</span>
          </h1>
          <p className="font-body text-xl text-[#5a5e6a] max-w-2xl leading-relaxed">
            In a volatile market, brand stability is your most valuable asset. Our Protect Your Brand framework ensures your market positioning remains unshakeable against internal shifts and external pressures.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end">
          <div className="w-full h-64 bg-[#eceef1] rounded-xl overflow-hidden group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj7MFdVXCuN37-bUUrXLh9bDO4Vedv7LRr3sBOshMCauVFaYku2bUUrXLh9bDO4Vedv7LRr3sBOshMCauVFaYku2QO1Re6MNl9RRwrwGSXGrVy0CX3CDLAQiOgQvlrEF3_-E-Ivp6oFQLuwWr71MOPKTK7eJikfi9DzVGilafCkWLDQOpS6KlQ5XU18aR1W67Rt6Zen1SKbwixUC9uKBxQbvCsWFRcC3PyUMXFQlEV9Zra-qJ7wFLcwf45ZEWfNyqNxV81boGieBuGp7lFJOEHcZigijpCylfBwPfsD4L8pu39UJtY9"
              alt="Brand protection"
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
        </div>
      </section>

      {/* ── Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Large card — Risk Mitigation */}
          <div className="md:col-span-2 bg-white border border-slate-100 rounded-xl p-10 lg:p-12 flex flex-col justify-between min-h-[360px] shadow-sm">
            <div>
              <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>verified_user</span>
              <h3 className="font-headline text-3xl font-bold mb-4 text-[#0a192f]">Risk Mitigation Strategy</h3>
              <p className="font-body text-[#5a5e6a] leading-relaxed max-w-md">
                Identify vulnerabilities in your brand architecture before they become liabilities. We develop comprehensive crisis response protocols and structural safeguards that keep your reputation pristine during market transitions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Proactive', 'Structural'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-[#eceef1] font-body text-xs font-bold uppercase tracking-widest rounded-full text-[#0a192f]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Dark card — Market Sentiment */}
          <div className="bg-[#0a192f] text-white rounded-xl p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-6 block" style={{ fontSize: '32px' }}>monitoring</span>
              <h4 className="font-headline text-xl font-bold mb-3">Market Sentiment Tracking</h4>
              <p className="font-body text-[#b9c7e4] text-sm leading-relaxed">
                Real-time analysis of brand perception across markets to ensure alignment with core values.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white text-xs font-body font-bold uppercase tracking-widest hover:gap-4 transition-all duration-200"
              >
                Explore Metrics
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Small card — Compliance */}
          <div className="bg-[#f2f4f7] rounded-xl p-10 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '32px' }}>gavel</span>
              <h4 className="font-headline text-xl font-bold mb-3 text-[#0a192f]">Compliance &amp; Governance</h4>
              <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">
                Institutionalising brand standards through rigorous internal policy frameworks and governance models.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200 mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#0a192f] text-xs font-body font-bold uppercase tracking-widest hover:gap-4 transition-all duration-200"
              >
                Policy Review
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Wide card — Strategic Brand Insurance */}
          <div className="md:col-span-2 bg-white border border-slate-100 rounded-xl p-10 lg:p-12 flex items-center gap-12 shadow-sm overflow-hidden">
            <div className="flex-1">
              <h3 className="font-headline text-2xl font-bold mb-4 text-[#0a192f]">Strategic Brand Insurance</h3>
              <p className="font-body text-[#5a5e6a] leading-relaxed text-sm">
                Our proprietary stabilisation methodology ensures that even during rapid scaling or mergers, the core identity of your brand remains the central anchor of your business operations.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3 bg-[#0a192f] text-white font-body font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-black transition-colors"
              >
                Download Framework
              </Link>
            </div>
            <div className="hidden lg:block w-1/3 aspect-video bg-[#eceef1] rounded-lg overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxJQlDZA_AAjokirj7q6XZhgz_MjGA-poFsF0_iniahlYEOUqjOXT8i_2c56rUKCu8OOdWNcvbh9XtEhA2TzLMncuKXNw6o7qasUML_n0cXUWXu2ARvvRsFv379ZRjiJ4KQAY41Lu-5fbNZVbIJBtZEINAUDfG3xAJJ8MUIiLF9Khgne2S-jBLehE2whyTelwV9Ie4TwCTX9ynfr9F8-PJ9Dj3B1WZi4kcVymjctzJXf4y38x2tUXp0ZeEYKpw0yaYmJTc5ZWVUpAj"
                alt="Brand protection strategy"
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── The Stabilize Protocol */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left — steps */}
            <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-100">
              <h2 className="font-headline text-4xl font-bold mb-12 tracking-tight text-[#0a192f]">
                The Stabilize Protocol
              </h2>
              <div className="space-y-12">
                {[
                  {
                    num: '01',
                    title: 'Audit & Assessment',
                    desc: 'Deep-dive analysis of current brand equity and identifying friction points in your market presence.',
                  },
                  {
                    num: '02',
                    title: 'Framework Design',
                    desc: 'Architecting the custom governance and protection layers specific to your industry vertical.',
                  },
                  {
                    num: '03',
                    title: 'Deployment & Integration',
                    desc: 'Seamlessly embedding the stabilisation protocols into your existing corporate operational flow.',
                  },
                ].map(step => (
                  <div key={step.num} className="flex gap-6">
                    <span className="font-headline font-black text-4xl text-slate-100 flex-shrink-0 leading-none">
                      {step.num}
                    </span>
                    <div>
                      <h5 className="font-headline font-bold text-[#0a192f] text-base uppercase tracking-tight mb-2">
                        {step.title}
                      </h5>
                      <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — testimonial over image */}
            <div className="relative min-h-[420px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFg4ztpzsTIliD6TTwialw_beE40IgvNg390iuTEFhxf1Vo0kMGa3oqLqxnC4rOL6cqEgxqGShoJ0mlkQZtNWp1y6nJpWuabmnHy9MzTK-JIZlg88YhMZEhHUXjNJzYtvvHiX1kaEuOqvp0ptXm_W1vebXd8GTEF1M3oBVRwdMg3iRR_LNyHO73l5YqYNSYceTfac8yA71H5ZC32IEgYLBlgysGVTcW1jxh8ulmsuobEvOzSlxN04pYJA2vcInR1DybFULHSkMr-HP"
                alt="Executive boardroom"
                onError={e => { e.target.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-[#0a192f]/40 backdrop-blur-[2px] flex items-center justify-center p-10">
                <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full">
                  <p className="font-headline font-bold text-[#0a192f] italic text-[16px] leading-relaxed mb-6">
                    "Stability is not the absence of change, but the mastery of it. Bzsimplified transformed our defensive posture into a strategic asset."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#eceef1] flex-shrink-0" />
                    <div>
                      <p className="font-body text-xs font-bold uppercase tracking-widest text-[#0a192f]">Marcus Vane</p>
                      <p className="font-body text-[11px] text-[#5a5e6a]">Chief Operations, Global Logistics Co.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>200+</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Brands Protected</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>98%</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Trademark Success Rate</div>
          </div>
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>7d</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Average Filing Time</div>
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
            <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
