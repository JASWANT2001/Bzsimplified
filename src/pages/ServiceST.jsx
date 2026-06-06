import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'Do you recommend specific software or remain vendor-neutral?',
    a: 'We remain solution-focused and recommend tools based on your business requirements, scale, and budget.',
  },
  {
    q: 'What if we already use some software?',
    a: 'We assess your existing ecosystem and improve, integrate, or optimise where needed.',
  },
  {
    q: 'Do you implement software directly?',
    a: 'We coordinate with implementation partners and vendors while guiding the process end-to-end.',
  },
  {
    q: 'Will you manage multiple vendors involved?',
    a: 'Yes. We act as the bridge between stakeholders to streamline communication and execution.',
  },
  {
    q: 'Do you offer support after setup?',
    a: 'Yes. We provide continued advisory and optimisation support as your business grows.',
  },
]

const SERVICES = [
  {
    icon: 'dns',
    title: 'Software & ERP Advisory',
    desc: 'Choosing the right systems can determine how efficiently your business scales. We assess your workflows and recommend software, ERP platforms, CRMs, accounting tools, HR systems, and operational technology that fit your stage and goals.',
    label: 'What we help with:',
    points: ['ERP & Business Management Solutions', 'CRM & Sales Tools', 'Accounting & Finance Software', 'HRMS & Payroll Platforms', 'Project & Workflow Management Tools', 'Industry-Specific Software Selection'],
    dark: true,
  },
  {
    icon: 'hub',
    title: 'Vendor Coordination & Implementation Support',
    desc: 'Technology projects often involve multiple vendors, agencies, and service providers. We become the single point of coordination, ensuring everyone works toward the same outcome.',
    label: 'We help bridge communication between:',
    points: ['Software Providers', 'ERP Partners', 'IT Vendors', 'Developers', 'Digital Agencies', 'Infrastructure & Hardware Teams'],
    tag: 'One business. One direction. Zero confusion.',
    dark: false,
  },
  {
    icon: 'account_tree',
    title: 'Process Mapping & Integration',
    desc: 'Technology should align with operations. We map your workflows and ensure tools integrate effectively to avoid duplication, delays, and inefficiencies.',
    label: 'Outcome:',
    points: ['Connected systems', 'Better visibility', 'Reduced manual work', 'Scalable processes'],
    dark: false,
  },
  {
    icon: 'support_agent',
    title: 'Ongoing Tech Guidance',
    desc: 'Technology evolves. Businesses evolve. We stay alongside you to evaluate improvements, recommend upgrades, and ensure your systems continue supporting growth.',
    label: 'Support includes:',
    points: ['Software optimisation', 'Vendor review & management', 'Process improvements', 'New tool recommendations'],
    dark: true,
  },
]

const WHY = [
  { title: 'Business First, Technology Second', desc: "We don't push tools. We identify solutions that support your business goals." },
  { title: 'Independent & Practical Advice', desc: 'We recommend what fits, not what sells.' },
  { title: 'Vendor-Neutral Coordination', desc: 'We bridge all stakeholders and simplify implementation.' },
  { title: 'Built for Growth', desc: 'Technology decisions today should support where your business will be tomorrow.' },
]

export default function ServiceST() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-4 md:gap-8 items-stretch mt-8 md:mt-16 mb-10 md:mb-24">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-5 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#0a192f]">Set Up Your Tech.</span>
            <span className="block text-[#515f78]">With Clarity. With Confidence.</span>
          </h1>
          <p className="font-body text-base text-[#5a5e6a] max-w-2xl leading-relaxed mb-6">
            Technology should simplify your business, not complicate it. We help founders identify the right software, ERP solutions, and digital tools tailored to their operations, then act as the bridge between all vendors involved to ensure seamless implementation.
          </p>
          <div className="border-l-2 border-[#e31e24] pl-4 mt-2 self-start">
            <p className="font-body text-[#39475f] font-medium text-sm leading-relaxed">From selection to setup.</p>
            <p className="font-headline font-extrabold text-[#0a192f] text-base leading-snug mt-1">We make technology work together, so your business can move faster.</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-end">
          <div className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-full lg:min-h-[420px] mt-6 lg:mt-0 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
              alt="Technology setup"
            />
          </div>
        </div>
      </section>

      {/* ── Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-10 text-2xl sm:text-3xl md:text-4xl">
            What We Help You Set Up
          </h2>
          <div className="space-y-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className={`relative rounded-xl overflow-hidden ${s.dark ? 'bg-[#0a192f]' : 'bg-[#f2f4f7]'}`}
              >
                <div className="relative z-10 p-7 md:p-8 lg:p-10 grid grid-cols-12 gap-6 items-start">

                  <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                    <span className={`material-symbols-outlined ${s.dark ? 'text-white/60' : 'text-[#0a192f]'}`} style={{ fontSize: '30px' }}>{s.icon}</span>
                    <h3 className={`font-headline text-xl font-bold ${s.dark ? 'text-white' : 'text-[#0a192f]'}`}>{s.title}</h3>
                    <p className={`font-body text-sm leading-relaxed ${s.dark ? 'text-[#b9c7e4]' : 'text-[#5a5e6a]'}`}>{s.desc}</p>
                    {s.tag && (
                      <p className="font-body text-xs font-bold uppercase tracking-wider mt-1 text-[#e31e24]">{s.tag}</p>
                    )}
                  </div>

                  <div className="hidden lg:flex col-span-1 justify-center pt-2">
                    <div className={`h-24 w-px ${s.dark ? 'bg-white/10' : 'bg-slate-300'}`} />
                  </div>

                  <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
                    <p className={`font-body text-xs font-bold uppercase tracking-[0.15em] mb-1 ${s.dark ? 'text-[#b9c7e4]/60' : 'text-[#39475f]/60'}`}>{s.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.points.map(pt => (
                        <span
                          key={pt}
                          className={`px-4 py-2 rounded-full font-body text-xs font-bold tracking-wide ${s.dark ? 'bg-white/10 text-[#b9c7e4]' : 'bg-white text-[#0a192f]'}`}
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Our Tech Setup Is Different */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-12 text-2xl sm:text-3xl md:text-4xl">
            Why Our Tech Setup Is Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY.map((item, i) => (
              <div
                key={item.title}
                className="relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-4 overflow-hidden"
              >
                <span
                  className="absolute top-4 right-6 font-headline font-black text-[#0a192f]/5 leading-none select-none pointer-events-none"
                  style={{ fontSize: '5rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="font-headline font-bold text-lg text-[#0a192f] relative z-10">{item.title}</h4>
                <p className="font-body text-sm text-[#5a5e6a] leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
          <div className="border-l-4 border-[#0a192f] pl-8 pb-6 border-b border-slate-200 last:border-b-0 md:border-b-0 md:pb-0">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2 text-3xl md:text-4xl">1500+</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Business Systems Reviewed</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8 pb-6 border-b border-slate-200 last:border-b-0 md:border-b-0 md:pb-0">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2 text-3xl md:text-4xl">Multi</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Vendor Implementations Coordinated</div>
          </div>
          <div className="border-l-4 border-[#0a192f] pl-8 pb-6 border-b border-slate-200 last:border-b-0 md:border-b-0 md:pb-0">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2 text-3xl md:text-4xl">1 Goal</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Technology That Works For Your Business</div>
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
                Ready to simplify your technology ecosystem?
              </h3>
              <p className="font-body text-white text-sm sm:text-base">Identify the right tools. Coordinate the right partners. Build systems that scale with confidence.</p>
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
