import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'Who is this service for?',
    a: 'Founders, startups, SMEs, clubs, professionals, and businesses looking to build stronger foundations.',
  },
  {
    q: 'Do I need an established business to start?',
    a: 'No. We support businesses from idea stage through growth and restructuring.',
  },
  {
    q: 'What support will I receive?',
    a: 'Support may include strategy, setup guidance, compliance, operations, finance, technology, and execution planning.',
  },
  {
    q: 'Can this help improve an existing business?',
    a: 'Yes. We support both new ventures and established businesses seeking growth or restructuring.',
  },
  {
    q: 'Is this a one-time consultation?',
    a: 'We offer both project-based support and ongoing advisory partnerships.',
  },
]

export default function ServiceLB() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-8">
        <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f] bg-[#eceef1] px-3 py-1.5 rounded-lg">
          START / Launch Your Business
        </span>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-end mb-12 md:mb-24">
        <div className="col-span-12 lg:col-span-8">
          <h1
            className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Launch Your Business.<br />
            <span className="text-[#515f78]">Structure It. Strengthen It. Scale It.</span>
          </h1>
          <p className="font-body text-xl text-[#5a5e6a] max-w-2xl leading-relaxed">
            Starting a business takes more than an idea. START helps founders build the right foundations — strategy, structure, systems, and execution — to launch with confidence and grow sustainably. From concept to operations, we help simplify the complexities of building a business.
          </p>
          {/* <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0a192f] text-white px-8 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-widest hover:bg-[#1a2f4f] transition-colors mt-8 group"
          >
            Book a Consultation
            <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link> */}
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end">
          <div className="w-full h-64 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
              alt="Professional workspace"
            />
          </div>
        </div>
      </section>

      {/* ── Services Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <h2
          className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-10"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
        >
          Build Your Business Foundation
        </h2>
        <div className="grid grid-cols-12 gap-4">

          {/* Business Strategy — primary dark card */}
          <div className="col-span-12 md:col-span-7 bg-[#0a192f] rounded-xl p-7 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden min-h-[260px] md:min-h-[300px]">
            <div className="relative z-10">
              <span className="font-body text-[#b9c7e4] text-xs uppercase tracking-widest mb-4 block">Business Model • Positioning • Growth Roadmap</span>
              <h3 className="font-headline text-white text-3xl lg:text-4xl font-bold mb-6">
                Business Strategy
              </h3>
              <p className="font-body text-[#b9c7e4] text-lg max-w-lg">
                Clarify your vision, define priorities, and create a practical roadmap for sustainable growth.
              </p>
            </div>
            <div className="flex gap-4 mt-8 relative z-10">
              <Link
                to="/contact"
                className="bg-white text-[#0a192f] px-8 py-3 rounded-lg font-body font-bold text-sm uppercase tracking-wider hover:bg-[#f7f9fc] transition-colors"
              >
                Book Consultation
              </Link>
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#e31e24]/20 blur-[100px] rounded-full pointer-events-none" />
          </div>

          {/* Business Setup & Structure */}
          <div className="col-span-12 md:col-span-5 bg-white border border-slate-200 rounded-xl p-10 flex flex-col">
            <span className="material-symbols-outlined text-[#0a192f] mb-6" style={{ fontSize: '36px' }}>corporate_fare</span>
            <h4 className="font-headline text-2xl font-bold mb-2 text-[#0a192f]">Business Setup &amp; Structure</h4>
            <p className="font-body text-[#39475f] text-xs uppercase tracking-wider font-bold mb-4">Foundation • Processes • Operational Framework</p>
            <p className="font-body text-[#5a5e6a]">
              Establish the systems and structures needed to run efficiently from day one.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
              <span className="font-body text-xs font-bold tracking-tight uppercase text-[#0a192f]">Operational Framework</span>
              <span className="material-symbols-outlined text-[#0a192f] text-[19px]">arrow_forward</span>
            </div>
          </div>

          {/* Compliance */}
          <div className="col-span-12 md:col-span-4 bg-[#f2f4f7] rounded-xl p-10 flex flex-col">
            <span className="material-symbols-outlined text-[#0a192f] mb-6" style={{ fontSize: '32px' }}>verified</span>
            <h4 className="font-headline text-2xl font-bold mb-2 text-[#0a192f]">Compliance &amp; Essential Requirements</h4>
            <p className="font-body text-[#39475f] text-xs uppercase tracking-wider font-bold mb-4">Registrations • Documentation • Advisory Support</p>
            <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">
              Navigate key business requirements with confidence and reduce operational risks.
            </p>
          </div>

          {/* Finance & Growth Planning */}
          <div className="col-span-12 md:col-span-8 bg-white border border-slate-200 rounded-xl p-10 lg:p-12 grid sm:grid-cols-2 gap-8">
            <div>
              <span className="material-symbols-outlined text-[#e31e24] mb-4" style={{ fontSize: '30px' }}>trending_up</span>
              <h4 className="font-headline text-2xl font-bold mb-2 text-[#0a192f]">Finance &amp; Growth Planning</h4>
              <p className="font-body text-[#39475f] text-xs uppercase tracking-wider font-bold mb-4">Budgeting • Financial Planning • Business Sustainability</p>
              <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">
                Build financial clarity and develop strategies for profitable growth.
              </p>
            </div>
            <div className="flex flex-col justify-center items-end text-right">
              <div className="mb-4">
                <div className="font-headline font-extrabold leading-none text-[#0a192f]" style={{ fontSize: '3rem' }}>14d</div>
                <div className="font-body text-xs uppercase tracking-widest text-[#39475f] font-bold mt-1">Average Setup Timeline</div>
              </div>
              <p className="font-body text-xs text-[#5a5e6a] max-w-[200px]">
                Structured timelines to help you move from planning to execution with clarity.
              </p>
            </div>
          </div>

          {/* Technology & Operational Support */}
          <div className="col-span-12 md:col-span-5 bg-white border border-slate-200 rounded-xl p-10 flex flex-col">
            <span className="material-symbols-outlined text-[#0a192f] mb-6" style={{ fontSize: '36px' }}>devices</span>
            <h4 className="font-headline text-2xl font-bold mb-2 text-[#0a192f]">Technology &amp; Operational Support</h4>
            <p className="font-body text-[#39475f] text-xs uppercase tracking-wider font-bold mb-4">Digital Tools • Process Improvement • Efficiency</p>
            <p className="font-body text-[#5a5e6a]">
              Identify and implement the right tools and workflows to simplify operations.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
              <span className="font-body text-xs font-bold tracking-tight uppercase text-[#0a192f]">Operational Efficiency</span>
              <span className="material-symbols-outlined text-[#0a192f] text-[19px]">arrow_forward</span>
            </div>
          </div>

          {/* Dedicated Consulting Support */}
          <div className="col-span-12 md:col-span-7 bg-[#0a192f] rounded-xl p-7 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
            <div className="relative z-10">
              <span className="font-body text-[#b9c7e4] text-xs uppercase tracking-widest mb-4 block">Guidance • Accountability • Structured Execution</span>
              <h3 className="font-headline text-white text-3xl lg:text-4xl font-bold mb-4">
                Dedicated Consulting Support
              </h3>
              <p className="font-body text-[#b9c7e4] text-lg max-w-lg">
                Work with experienced consultants who support your journey from planning to execution.
              </p>
            </div>
            <div className="absolute bottom-[-10%] left-[-5%] w-48 h-48 bg-[#e31e24]/15 blur-[80px] rounded-full pointer-events-none" />
          </div>

        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-10">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
            Outcomes That Matter
          </h2>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>30+</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Businesses Supported</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>14 Days</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Average Setup Timeline</div>
          </div>
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>100%</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Commitment to Structured Growth</div>
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
              Ready to build a business designed to last?
            </h3>
            <p className="font-body text-white/50 text-base">Create stronger foundations, simplify operations, and grow with confidence.</p>
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

      {/* ── Page Footer Text */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12 border-t border-slate-200">
        <p className="font-headline font-bold text-[#0a192f] text-lg mb-2">Structural clarity for ambitious growth.</p>
        <p className="font-body text-[#5a5e6a] text-sm leading-relaxed max-w-xl">
          We partner with founders and businesses to simplify operations, strengthen foundations, and enable sustainable growth.
        </p>
      </section>

    </main>
  )
}
