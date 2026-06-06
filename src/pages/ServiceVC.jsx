import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What does a Virtual COO do?',
    a: 'A Virtual COO provides strategic and operational leadership without requiring a full-time executive hire. We oversee processes, systems, execution, and operational efficiency.',
  },
  {
    q: 'Our business is still small. Do we need structured processes?',
    a: 'Yes. Early-stage businesses benefit most from process clarity because it prevents chaos as growth accelerates.',
  },
  {
    q: 'Do you help implement ERP, software, and operational tools?',
    a: 'Absolutely. We act as a bridge between stakeholders, software providers, and internal teams to ensure smooth implementation.',
  },
  {
    q: 'Will processes become rigid?',
    a: 'No. Good processes evolve with business needs. We design systems for adaptability and scale.',
  },
  {
    q: 'How long does engagement last?',
    a: 'Engagements vary from short-term operational restructuring to ongoing Virtual COO partnerships.',
  },
]

const CAPABILITIES = [
  {
    icon: 'account_tree',
    title: 'Process Architecture & Operational Design',
    desc: 'Create scalable operating frameworks that remove dependency on individuals and enable predictable execution.',
  },
  {
    icon: 'tune',
    title: 'Workflow Optimisation',
    desc: 'Identify bottlenecks, streamline operations, and align teams, technology, and resources toward measurable outcomes.',
  },
  {
    icon: 'description',
    title: 'SOP & Process Blueprinting',
    desc: 'Document, standardise, and refine every critical process to ensure continuity, consistency, and scalability.',
  },
  {
    icon: 'hub',
    title: 'Technology & Vendor Coordination',
    desc: 'Bridge gaps between ERP providers, software vendors, consultants, and teams to ensure seamless implementation and adoption.',
  },
  {
    icon: 'monitoring',
    title: 'Governance & Performance Tracking',
    desc: 'Build dashboards, accountability systems, and review mechanisms to maintain operational excellence.',
  },
  {
    icon: 'shield',
    title: 'Risk Mitigation & Continuity Planning',
    desc: 'Strengthen business resilience by identifying operational vulnerabilities before they become disruptions.',
  },
]

const PHILOSOPHY = [
  'People perform better when expectations are clear.',
  'Teams collaborate better when workflows are defined.',
  'Businesses scale better when systems are repeatable.',
  'Strong businesses are not built on individual dependency.',
  'They are built on process discipline.',
]

const STEPS = [
  {
    num: '01',
    title: 'Operational Diagnostic',
    sub: 'A deep assessment of your current operations, structures, workflows, financial visibility, and execution gaps.',
  },
  {
    num: '02',
    title: 'Process Design & Alignment',
    sub: 'We establish SOPs, governance systems, reporting structures, and operational workflows that connect strategy with execution.',
  },
  {
    num: '03',
    title: 'Execution Oversight',
    sub: 'Acting as an operational partner, we coordinate stakeholders, vendors, teams, and technology to drive implementation.',
  },
  {
    num: '04',
    title: 'Continuous Optimisation',
    sub: 'Monitor, review, improve, and refine operations continuously as your business evolves.',
  },
]

const DASHBOARD_ITEMS = [
  'Operational performance',
  'Workflow efficiency',
  'Team accountability',
  'Financial alignment',
  'Project progress',
  'Vendor coordination',
  'Process compliance',
]

export default function ServiceVC() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-4 md:gap-8 items-stretch mt-8 md:mt-16 mb-10 md:mb-24">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-headline font-extrabold tracking-tighter leading-[1.1] text-[#0a192f] mb-5 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#0a192f]">Your Virtual COO.</span>
            <span className="block text-[#515f78]">Because processes define performance,</span>
            <span className="block text-[#515f78]">not people.</span>
          </h1>
          <p className="font-body text-base text-[#5a5e6a] max-w-2xl leading-relaxed mb-6">
            Businesses don't fail because of people alone. They fail when processes are unclear, fragmented, or dependent on individuals. At Business Simplified, we function as your Virtual Chief Operating Officer, building the operational backbone, aligning teams, optimising workflows, and creating processes that enable people to perform at their best.
          </p>
          <div className="border-l-2 border-[#e31e24] pl-4 mt-2 self-start">
            <p className="font-body text-[#39475f] font-medium text-sm leading-relaxed">We don't just manage operations.</p>
            <p className="font-headline font-extrabold text-[#0a192f] text-base leading-snug mt-1">We design businesses that run with clarity, resilience, and precision.</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-end">
          <div className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-full lg:min-h-[420px] mt-6 lg:mt-0 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              alt="Operations and systems"
              className="w-full h-full object-cover object-top"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
            />
          </div>
        </div>
      </section>

      {/* ── Social proof stat */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="bg-[#0a192f] rounded-xl p-8 md:p-12 grid grid-cols-12 gap-8 items-center relative overflow-hidden">
            <span className="absolute -right-8 -top-8 font-headline font-black text-white/5 select-none leading-none pointer-events-none" style={{ fontSize: '14rem' }}>COO</span>
            <div className="col-span-12 lg:col-span-4 relative z-10">
              <span className="font-headline font-extrabold text-white tracking-tighter block leading-none mb-2" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                99.8%
              </span>
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#b9c7e4]">
                Operational Continuity Delivered
              </span>
            </div>
            <div className="col-span-12 lg:col-span-1 hidden lg:flex justify-center">
              <div className="h-24 w-px bg-white/10" />
            </div>
            <div className="col-span-12 lg:col-span-7 relative z-10">
              <span className="material-symbols-outlined text-[#e31e24] mb-4 block" style={{ fontSize: '28px' }}>format_quote</span>
              <p className="font-body text-white/80 text-base leading-relaxed italic">
                "The difference was not better people, it was better processes. Business Simplified helped us build systems that sustained growth without chaos."
              </p>
            </div>
            <div className="absolute bottom-[-15%] left-[-5%] w-64 h-64 bg-[#e31e24]/10 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Core Capabilities */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter text-2xl sm:text-3xl md:text-4xl">
              Acting as Your Virtual COO
            </h2>
            <Link
              to="/contact"
              className="self-start inline-flex items-center gap-2 border border-[#0a192f] text-[#0a192f] px-6 py-3 rounded-lg font-headline font-semibold text-xs tracking-widest transition-colors duration-200 hover:bg-[#0a192f] hover:text-white group"
            >
              View Methodology
              <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className={`rounded-xl p-6 md:p-8 flex flex-col gap-4 ${i === 0 ? 'bg-[#0a192f]' : 'bg-[#f2f4f7]'}`}
              >
                <span className={`material-symbols-outlined ${i === 0 ? 'text-[#e31e24]' : 'text-[#0a192f]'}`} style={{ fontSize: '30px' }}>
                  {cap.icon}
                </span>
                <h4 className={`font-headline text-base font-bold leading-snug ${i === 0 ? 'text-white' : 'text-[#0a192f]'}`}>
                  {cap.title}
                </h4>
                <p className={`font-body text-sm leading-relaxed ${i === 0 ? 'text-[#b9c7e4]' : 'text-[#5a5e6a]'}`}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy */}
      <section className="bg-[#0a192f] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5">
            <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#e31e24] block mb-4">Our Philosophy</span>
            <h2 className="font-headline font-extrabold text-white tracking-tighter leading-tight text-2xl sm:text-3xl md:text-4xl">
              Only processes can define people.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-1 hidden lg:flex justify-center">
            <div className="h-40 w-px bg-white/10" />
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-4">
            {PHILOSOPHY.map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[#e31e24] shrink-0" />
                <p className="font-body text-[#b9c7e4] leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Operate */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter text-2xl sm:text-3xl md:text-4xl">
              How We Operate as Your Virtual COO
            </h2>
            <p className="font-body text-[#5a5e6a] text-base max-w-md md:text-right leading-relaxed">
              A structured engagement that transforms how your business operates from the inside out.
            </p>
          </div>
          <div className="space-y-3">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-xl bg-white border border-slate-200"
              >
                <div className="p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
                  <span className="font-headline font-extrabold leading-none text-[#e31e24] shrink-0" style={{ fontSize: '2.2rem' }}>
                    {step.num}
                  </span>
                  <div className="hidden md:block h-12 w-px shrink-0 bg-slate-200" />
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-1 text-[#0a192f]">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-[#5a5e6a]">
                      {step.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Virtual COO Dashboard */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5">
            <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#e31e24] block mb-4">Virtual COO Dashboard</span>
            <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-4 text-2xl sm:text-3xl md:text-4xl">
              Gain visibility into what matters.
            </h2>
            <p className="font-body text-[#5a5e6a] leading-relaxed">
              One operational view across every function of your business, built for decision-makers who need clarity, not noise.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-[#0a192f] rounded-xl p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DASHBOARD_ITEMS.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4 ${i === DASHBOARD_ITEMS.length - 1 && DASHBOARD_ITEMS.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}
                  >
                    <span className="material-symbols-outlined text-[#e31e24] shrink-0" style={{ fontSize: '20px' }}>check_circle</span>
                    <span className="font-body text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#e31e24]/10 blur-[80px] rounded-full pointer-events-none" />
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
            <div className="text-center lg:text-left relative z-10">
              <h3 className="font-headline font-extrabold text-white tracking-tighter mb-2 text-xl sm:text-2xl md:text-3xl">
                Ready to build a business that runs beyond individuals?
              </h3>
              <p className="font-body text-white text-sm sm:text-base">Create systems. Align execution. Scale with confidence.</p>
              <p className="font-body text-white text-sm mt-1">Partner with Business Simplified as your Virtual COO.</p>
            </div>
            <Link
              to="/contact"
              className="relative z-10 w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 bg-white text-[#0a192f] px-8 py-4 rounded-full font-headline font-semibold text-sm tracking-wide border-2 border-white transition-colors duration-200 hover:bg-transparent hover:text-white group relative z-10"
            >
              Let's Discuss
              <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-[#e31e24]/10 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

    </main>
  )
}
