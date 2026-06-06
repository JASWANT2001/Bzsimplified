import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What does protecting our brand actually include?',
    a: 'Brand protection includes governance frameworks, reputation safeguards, compliance structures, trademark registration coordination, and IP protection support to secure your business assets.',
  },
  {
    q: 'Why should we secure trademarks early?',
    a: 'Early trademark registration reduces risks of disputes, duplication, and loss of brand equity while strengthening your position during expansion and fundraising.',
  },
  {
    q: 'What does "protecting your brand" actually involve?',
    a: 'It covers four pillars: trademark registration, contract frameworks, brand governance policies, and crisis response protocols. Together these ensure no external party can dilute or misuse your identity, and your internal teams maintain consistent standards.',
  },
  {
    q: 'How long does trademark registration take in India?',
    a: 'Filing itself is done within a week. The registration process with the Trade Marks Registry typically takes 18–24 months, but a filed trademark gives you legal standing from the date of application, so protection begins immediately.',
  },
  {
    q: 'We are a small business. Do we really need brand governance?',
    a: 'Especially at the small business stage. Brand dilution is hardest to reverse once it sets in. Establishing governance early, even a lightweight policy document, prevents costly corrections as your team and distribution channels grow.',
  },
  {
    q: 'What if our brand name or logo is already being used by someone else?',
    a: 'We conduct a conflict search before filing. If conflicts exist, we assess severity, advise on modification strategies, and in serious cases coordinate with IP attorneys for opposition proceedings or coexistence negotiations.',
  },
  {
    q: 'Does this service include legal representation?',
    a: 'We manage the process and documentation end-to-end in coordination with empanelled IP attorneys. Legal representation in any dispute or opposition is handled by those attorneys. We facilitate and project-manage the entire engagement.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Audit & Assessment',
    desc: 'Evaluate current brand equity, trademark exposure, IP vulnerabilities, and identify risks affecting long-term brand security.',
  },
  {
    num: '02',
    title: 'Framework Design',
    desc: 'Develop governance structures, protection protocols, and IP safeguarding strategies aligned with your industry and growth ambitions.',
  },
  {
    num: '03',
    title: 'Deployment & Integration',
    desc: 'Embed compliance, trademark coordination, and protection systems into your operational workflows for ongoing brand resilience.',
  },
]

export default function ServicePB() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-4 md:gap-8 items-stretch mt-8 md:mt-16 mb-10 md:mb-24">
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
          <h1 className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-5 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#0a192f]">Preserve your identity.</span>
            <span className="block text-[#515f78]">Secure your legacy.</span>
          </h1>
          <p className="font-body text-base text-[#5a5e6a] max-w-2xl leading-relaxed mb-6">
            Your brand is more than a logo. It is reputation, trust, and commercial value. In an evolving market, protecting your intellectual assets is as critical as growing them.
          </p>
          <div className="border-l-2 border-[#e31e24] pl-4 mt-2 self-start">
            <p className="font-body text-[#39475f] font-medium text-sm leading-relaxed">Built to last. Built to protect.</p>
            <p className="font-headline font-extrabold text-[#0a192f] text-base leading-snug mt-1">We protect your brand.</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end">
          <div className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-full lg:min-h-[420px] mt-6 lg:mt-0 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
              alt="Brand protection"
            />
          </div>
        </div>
      </section>

      {/* ── Bento Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-10 text-2xl sm:text-3xl md:text-4xl">
            How We Protect Your Brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Large card — Risk Mitigation */}
            <div className="md:col-span-2 bg-[#f2f4f7] rounded-xl p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[240px] md:min-h-[360px]">
              <div>
                <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>verified_user</span>
                <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#0a192f]">Risk Mitigation &amp; Brand Protection</h3>
                <p className="font-body text-[#5a5e6a] leading-relaxed">
                  Identify vulnerabilities before they become liabilities. We build safeguards that protect your reputation, strengthen governance, and preserve market trust during growth, expansion, or transition.
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="group self-start inline-flex items-center gap-2 bg-[#0a192f] text-white border-2 border-[#0a192f] px-8 py-3 rounded-lg font-headline font-semibold text-[15px] tracking-wide transition-all duration-200 hover:bg-transparent hover:text-[#0a192f]"
                >
                  Book Consultation
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                </Link>
                <div className="flex flex-wrap gap-3">
                  {['Proactive', 'Structural'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white font-body text-xs font-bold uppercase tracking-widest rounded-full text-[#0a192f]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dark card — Trademark & IP */}
            <div className="bg-[#0a192f] text-white rounded-xl p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-6 block" style={{ fontSize: '32px' }}>monitoring</span>
                <h4 className="font-headline text-xl font-bold mb-3">Trademark &amp; Intellectual Property Protection</h4>
                <p className="font-body text-[#b9c7e4] text-sm leading-relaxed">
                  Secure your Trademarks and IP across the Indian Subcontinent, ensuring your brand names, logos, and proprietary assets remain protected as your business scales. We coordinate with legal and registration partners, acting as the single bridge between your business and the ecosystem involved.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Small card — Compliance */}
            <div className="bg-[#f2f4f7] rounded-xl p-6 md:p-10 flex flex-col justify-center">
                <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '32px' }}>gavel</span>
                <h4 className="font-headline text-xl font-bold mb-3 text-[#0a192f]">Compliance &amp; Governance</h4>
                <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">
                  Institutionalising brand standards through robust policy frameworks and governance models that support long-term stability.
                </p>
            </div>

            {/* Wide card — Strategic Brand Insurance */}
            <div className="md:col-span-2 bg-[#0a192f] rounded-xl p-6 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
              <div className="relative z-10">
                <span className="font-body text-[#b9c7e4] text-xs uppercase tracking-widest mb-4 block">Stability through Growth</span>
                <h3 className="font-headline text-white text-2xl lg:text-3xl font-bold mb-4">
                  Strategic Brand Insurance
                </h3>
                <p className="font-body text-[#b9c7e4] text-sm leading-relaxed max-w-lg">
                  Our stabilisation methodology ensures that during scaling, restructuring, or partnerships, the core identity of your brand remains protected and commercially valuable.
                </p>
              </div>
              <div className="flex gap-4 mt-8 relative z-10">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-white text-[#0a192f] border-2 border-white px-8 py-3 rounded-lg font-headline font-semibold text-[15px] tracking-wide transition-all duration-200 hover:bg-transparent hover:text-white"
                >
                  Book Consultation
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
              <div className="absolute bottom-[-10%] left-[-5%] w-48 h-48 bg-[#e31e24]/15 blur-[80px] rounded-full pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* ── The Stabilize Protocol */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-10 text-2xl sm:text-3xl md:text-4xl">
            The Stabilize Protocol
          </h2>
          <div className="space-y-3">
            {STEPS.map(step => (
              <div key={step.num} className="relative rounded-xl overflow-hidden bg-white border border-slate-200">
                <div className="relative z-10 p-7 md:p-8 lg:p-10 grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-12 lg:col-span-4 flex flex-row items-center gap-4">
                    <span className="font-headline font-extrabold leading-none text-[#e31e24] shrink-0" style={{ fontSize: '2.2rem' }}>
                      {step.num}
                    </span>
                    <h3 className="font-headline text-xl font-bold text-[#0a192f]">{step.title}</h3>
                  </div>
                  <div className="hidden lg:flex col-span-1 justify-center">
                    <div className="h-16 w-px bg-slate-200" />
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
          <div className="border-l-4 border-[#0a192f] pl-8 pb-6 border-b border-slate-200 sm:border-b-0 sm:pb-0">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2 text-3xl md:text-4xl">200+</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Brands Protected</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8 pb-6 border-b border-slate-200 sm:border-b-0 sm:pb-0">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2 text-3xl md:text-4xl">98%</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Trademark Success Rate</div>
          </div>
          <div className="border-l-4 border-[#0a192f] pl-8 pb-6 border-b border-slate-200 sm:border-b-0 sm:pb-0">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2 text-3xl md:text-4xl">7d</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Average Filing Initiation Time</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8 pb-6 border-b border-slate-200 last:border-b-0 sm:border-b-0 sm:pb-0">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2 text-3xl md:text-4xl">100%</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">IP Coordination Support Across Registration Lifecycle</div>
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
                Secure your legacy. Protect what you've built.
              </h3>
              <p className="font-body text-white text-sm sm:text-base">Business Simplified ensures businesses do not just grow. They grow with protection, ownership, and long-term resilience.</p>
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
