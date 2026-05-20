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
    desc: 'Technology projects often involve multiple vendors, agencies, and service providers. We become the single point of coordination — ensuring everyone works toward the same outcome.',
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
  { title: 'Independent & Practical Advice', desc: 'We recommend what fits — not what sells.' },
  { title: 'Vendor-Neutral Coordination', desc: 'We bridge all stakeholders and simplify implementation.' },
  { title: 'Built for Growth', desc: 'Technology decisions today should support where your business will be tomorrow.' },
]

export default function ServiceST() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-8">
        <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f] bg-[#eceef1] px-3 py-1.5 rounded-lg">
          START / Set Up Your Tech
        </span>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-end mb-12 md:mb-24">
        <div className="col-span-12 lg:col-span-8">
          <h1
            className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Set Up Your Tech.<br />
            <span className="text-[#515f78]">With Clarity. With Confidence.</span>
          </h1>
          <p className="font-body text-xl text-[#5a5e6a] max-w-2xl leading-relaxed mb-4">
            Technology should simplify your business — not complicate it. We help founders identify the right software, ERP solutions, and digital tools tailored to their operations, then act as the bridge between all vendors involved to ensure seamless implementation.
          </p>
          <p className="font-body text-base font-semibold text-[#0a192f] max-w-2xl leading-relaxed">
            From selection to setup, we make technology work together — so your business can move faster.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col">
          <div className="w-full h-64 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
              alt="Technology setup"
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

      {/* ── Services — horizontal strips */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="space-y-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`relative rounded-xl overflow-hidden ${s.dark ? 'bg-[#0a192f]' : 'bg-white border border-slate-200'}`}
            >
              <div className="relative z-10 p-7 md:p-8 lg:p-10 grid grid-cols-12 gap-6 items-start">

                {/* Icon + title + desc */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
                  <span className={`material-symbols-outlined ${s.dark ? 'text-white/60' : 'text-[#0a192f]'}`} style={{ fontSize: '30px' }}>{s.icon}</span>
                  <h3 className={`font-headline text-xl font-bold ${s.dark ? 'text-white' : 'text-[#0a192f]'}`}>{s.title}</h3>
                  <p className={`font-body text-sm leading-relaxed ${s.dark ? 'text-[#b9c7e4]' : 'text-[#5a5e6a]'}`}>{s.desc}</p>
                  {s.tag && (
                    <p className={`font-body text-xs font-bold uppercase tracking-wider mt-1 ${s.dark ? 'text-[#e31e24]' : 'text-[#e31e24]'}`}>{s.tag}</p>
                  )}
                </div>

                {/* Divider */}
                <div className="hidden lg:flex col-span-1 justify-center pt-2">
                  <div className={`h-24 w-px ${s.dark ? 'bg-white/10' : 'bg-slate-200'}`} />
                </div>

                {/* Points */}
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-3">
                  <p className={`font-body text-xs font-bold uppercase tracking-[0.15em] mb-1 ${s.dark ? 'text-[#b9c7e4]/60' : 'text-[#39475f]/60'}`}>{s.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.points.map(pt => (
                      <span
                        key={pt}
                        className={`px-4 py-2 rounded-full font-body text-xs font-bold tracking-wide ${s.dark ? 'bg-white/10 text-[#b9c7e4]' : 'bg-[#f2f4f7] text-[#0a192f]'}`}
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
      </section>

      {/* ── Why Our Tech Setup Is Different */}
      <section className="bg-[#0a192f] py-16 md:py-24 mb-16 md:mb-32 relative overflow-hidden">
        {/* Glow accents */}
        <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-[#e31e24]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-5%] w-72 h-72 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2
              className="font-headline font-extrabold tracking-tighter text-white"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              Why Our Tech Setup Is Different
            </h2>
            <p className="font-body text-white/40 text-sm max-w-sm md:text-right leading-relaxed">
              Independent advice. Vendor-neutral coordination. Built around your business goals.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY.map((item, i) => (
              <div
                key={item.title}
                className={`relative rounded-xl p-8 flex flex-col gap-4 border overflow-hidden
                  ${i === 0 ? 'bg-white/8 border-white/15' : 'bg-white/4 border-white/8'}`}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-6 font-headline font-black text-white/5 leading-none select-none pointer-events-none"
                  style={{ fontSize: '5rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Red accent bar on first card */}
                {i === 0 && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#e31e24] rounded-l-xl" />
                )}

                <h4 className="font-headline font-bold text-lg text-white relative z-10">{item.title}</h4>
                <p className="font-body text-sm text-[#b9c7e4] leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>1500+</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Business Systems Reviewed</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>Multi</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Vendor Implementations Coordinated</div>
          </div>
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>1 Goal</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Technology That Works For Your Business</div>
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
              Ready to simplify your technology ecosystem?
            </h3>
            <p className="font-body text-white/50 text-base">Identify the right tools. Coordinate the right partners. Build systems that scale with confidence.</p>
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
