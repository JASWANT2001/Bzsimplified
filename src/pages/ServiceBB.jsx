import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'Do I need an existing business?',
    a: 'No. We support both new ventures and established businesses seeking growth or restructuring.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We work across sectors, adapting frameworks to your business needs.',
  },
  {
    q: 'Do you assist with registrations and compliance?',
    a: 'Yes. We guide and support foundational business setup and compliance requirements.',
  },
  {
    q: 'How long does engagement take?',
    a: 'Timelines vary depending on complexity, scope, and growth objectives.',
  },
  {
    q: 'What happens after implementation?',
    a: 'We can continue with advisory, optimization, and growth support.',
  },
  {
    q: 'What does a Grow Your Business engagement typically include?',
    a: 'Our engagements focus on growth strategy, operational scaling, market expansion, financial readiness, and execution frameworks. We work alongside founders to simplify complexity and build sustainable growth pathways.',
  },
  {
    q: 'How do you help businesses scale without losing efficiency?',
    a: 'We assess existing systems, identify bottlenecks, and implement scalable processes that support growth while maintaining operational excellence and customer experience.',
  },
  {
    q: 'Can you support market expansion into new regions or industries?',
    a: 'Yes. We help businesses evaluate opportunities, understand market dynamics, develop entry strategies, and establish structures for successful expansion.',
  },
  {
    q: 'How do you help with capital and growth funding?',
    a: 'We prepare your business for funding through financial restructuring, investor readiness, business narratives, financial models, and identifying suitable funding pathways aligned with your growth goals.',
  },
  {
    q: 'Our business is already growing. Why do we need external support?',
    a: 'Growth often introduces complexity. External expertise provides strategic perspective, identifies blind spots, and ensures your business scales with stronger systems and sustainable foundations.',
  },
  {
    q: 'Can you help evaluate acquisitions, partnerships, or expansion opportunities?',
    a: 'Yes. We support strategic assessments, financial implications, operational fit, and long-term value creation before critical business decisions are made.',
  },
  {
    q: 'How long does a Grow Your Business engagement usually take?',
    a: 'Timelines vary based on objectives and complexity. Some engagements focus on short-term growth priorities, while others involve long-term scaling and transformation initiatives.',
  },
  {
    q: 'Do you work with startups or only established businesses?',
    a: 'We work with founders, startups, SMEs, and established organizations, adapting strategies to the stage, scale, and ambition of the business.',
  },
  {
    q: 'What makes Business Simplified different?',
    a: 'We combine strategy with execution. Our focus is not only on planning growth but also on simplifying operations and enabling businesses to scale with confidence.',
  },
  {
    q: 'What outcomes can we expect?',
    a: 'Depending on your goals, outcomes may include stronger systems, improved scalability, funding readiness, expansion strategies, operational efficiency, and sustainable growth frameworks.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Business Foundation',
    sub: 'Create the right structure for sustainable growth.',
    points: ['Business model refinement', 'Entity & registration guidance', 'Strategic planning', 'Market positioning', 'Revenue model development'],
  },
  {
    num: '02',
    title: 'Operational Systems',
    sub: 'Build systems that support growth.',
    points: ['Process design', 'SOP creation', 'Workflow optimization', 'Team structure planning', 'Governance frameworks'],
  },
  {
    num: '03',
    title: 'Financial & Compliance Readiness',
    sub: 'Strengthen your business backbone.',
    points: ['Financial planning', 'Budget frameworks', 'Compliance support', 'Risk identification', 'Documentation systems'],
  },
  {
    num: '04',
    title: 'Brand & Market Integration',
    sub: 'Align your operations with growth.',
    points: ['Brand positioning', 'Marketing strategy', 'Customer experience design', 'Growth planning', 'Launch support'],
  },
]

const WHY = [
  {
    icon: 'hub',
    title: 'We simplify complexity.',
    body: 'Business challenges often come from fragmented systems. We connect strategy, operations, finance, compliance, branding, and execution under one framework.',
  },
  {
    icon: 'person_check',
    title: 'Founder-first approach.',
    body: 'Every business is different. Solutions are designed around your stage, industry, and ambition.',
  },
  {
    icon: 'trending_up',
    title: 'Built for long-term growth.',
    body: "Our focus isn't short-term fixes. It's creating businesses capable of scaling with confidence.",
  },
]

const WHO = [
  'New Entrepreneurs',
  'Growing Businesses',
  'Family Businesses',
  'Professionals Building Independent Ventures',
  'Startups Preparing for Scale',
  'SMEs Seeking Structure & Growth',
]

const OUTCOMES = [
  'Greater operational clarity',
  'Stronger decision-making frameworks',
  'Improved execution systems',
  'Reduced compliance gaps',
  'Structured growth pathways',
  'Better readiness for expansion',
]

export default function ServiceBB() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-stretch mt-10 md:mt-16 mb-12 md:mb-24">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-5 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#0a192f]">Build Beyond an Idea.</span>
            <span className="block text-[#515f78]">Build With Structure.</span>
          </h1>
          <p className="font-body text-base text-[#5a5e6a] max-w-2xl leading-relaxed mb-6">
            At Business Simplified, we work with founders, professionals, startups, and growing enterprises to transform ideas into structured, scalable businesses with strategy, compliance, operations, branding, and growth working together from day one.
          </p>
          <div className="border-l-2 border-[#e31e24] pl-4 mt-2">
            <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">We don't just help you start.</p>
            <p className="font-headline font-extrabold text-[#0a192f] text-base leading-snug mt-1">We help you build businesses designed to last.</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-end">
          <div className="w-full min-h-[220px] md:min-h-[300px] h-full mt-6 lg:mt-0 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              alt="Business planning and strategy"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
            />
          </div>
        </div>
      </section>

      {/* ── From Vision to Execution */}
      <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter text-2xl sm:text-3xl md:text-4xl">
            From Vision to Execution
          </h2>
        </div>

        {/* Strips */}
        <div className="space-y-3">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="relative rounded-xl overflow-hidden bg-[#0a192f]"
            >
              <span
                className="absolute -top-6 -left-3 font-headline font-black leading-none select-none pointer-events-none text-white/5"
                style={{ fontSize: '11rem' }}
              >
                {step.num}
              </span>

              <div className="relative z-10 p-7 md:p-8 lg:p-10 grid grid-cols-12 gap-6 items-center">

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-2">
                  <span className="font-headline font-extrabold leading-none text-[#e31e24]" style={{ fontSize: '2.2rem' }}>
                    {step.num}
                  </span>
                  <h3 className="font-headline text-xl font-bold text-white">{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-[#b9c7e4]">{step.sub}</p>
                </div>

                <div className="hidden lg:flex col-span-1 justify-center">
                  <div className="h-20 w-px bg-white/10" />
                </div>

                <div className="col-span-12 lg:col-span-7 flex flex-wrap gap-2">
                  {step.points.map(pt => (
                    <span key={pt} className="px-4 py-2 rounded-full font-body text-xs font-bold tracking-wide bg-white/10 text-[#b9c7e4]">
                      {pt}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* ── Why Business Simplified */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <p className="font-body font-bold text-[13px] tracking-[0.25em] uppercase text-[#e31e24] mb-4">Our Difference</p>
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-12 text-2xl sm:text-3xl md:text-4xl">
            Why Business Simplified?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY.map((w, i) => (
              <div key={w.title} className="relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col overflow-hidden">
                <span className="absolute top-5 right-6 font-headline font-black text-[#0a192f]/5 leading-none select-none" style={{ fontSize: '5rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="material-symbols-outlined text-[#e31e24] mb-6" style={{ fontSize: '36px' }}>{w.icon}</span>
                <h4 className="font-headline text-xl font-bold text-[#0a192f] mb-3">{w.title}</h4>
                <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With + Engagement Outcomes */}
      <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex gap-1">
            <span className="block h-[3px] w-8 bg-[#e31e24] rounded-full" />
            <span className="block h-[3px] w-4 bg-[#eceef1] rounded-full" />
          </div>
          <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f]">Impact & Reach</span>
        </div>

        <div className="grid grid-cols-12 gap-4">

          {/* Who We Work With - dark card */}
          <div className="col-span-12 lg:col-span-5 bg-[#0a192f] rounded-xl p-8 lg:p-10 relative overflow-hidden flex flex-col">
            {/* Watermark */}
            <span className="absolute -bottom-6 -right-4 font-headline font-black text-white/5 select-none leading-none pointer-events-none" style={{ fontSize: '9rem' }}>WHO</span>

            <h3 className="font-headline text-2xl font-bold text-white mb-2 relative z-10">Who We Work With</h3>
            <p className="font-body text-[#b9c7e4] text-sm mb-8 relative z-10">Built for every stage of the business journey.</p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {WHO.map(w => (
                <span
                  key={w}
                  className="px-4 py-2.5 rounded-full border border-white/15 bg-white/8 font-body text-sm text-white/80 hover:bg-white/15 hover:text-white transition-colors cursor-default"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="absolute bottom-[-15%] left-[-10%] w-56 h-56 bg-[#e31e24]/15 blur-[80px] rounded-full pointer-events-none" />
          </div>

          {/* Engagement Outcomes - grid of numbered cards */}
          <div className="col-span-12 lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 lg:p-10">
            <h3 className="font-headline text-2xl font-bold text-[#0a192f] mb-1">Engagement Outcomes</h3>
            <p className="font-body text-sm text-[#5a5e6a] mb-8">Businesses we support gain:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OUTCOMES.map((o, i) => (
                <div key={o} className="flex items-start gap-4 bg-[#f7f9fc] rounded-xl p-4 border border-slate-100">
                  <span className="font-headline font-extrabold text-[#0a192f]/15 leading-none shrink-0 mt-0.5" style={{ fontSize: '1.6rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-sm text-[#39475f] leading-snug pt-1">{o}</span>
                </div>
              ))}
            </div>
          </div>

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
            <h3
              className="font-headline font-extrabold text-white tracking-tighter mb-2 text-xl sm:text-2xl md:text-3xl"
            >
              Ready to Build Something That Lasts?
            </h3>
            <p className="font-body text-white/50 text-sm sm:text-base">Build with clarity. Scale with confidence.</p>
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
