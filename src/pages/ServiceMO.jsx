import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What does "managing operations" actually mean in practice?',
    a: 'It means documenting how your business runs, every repeatable process, decision tree, and performance metric, and then optimising those systems so the business can function consistently without depending on any single person. The output is a set of SOPs, KPI dashboards, and a daily execution rhythm your team can follow.',
  },
  {
    q: 'Our business is still small. Do we really need formal SOPs?',
    a: 'The best time to document processes is before you scale, not after. Small teams often run on tribal knowledge, which breaks the moment someone leaves or you hire fast. A lightweight SOP library built at 10 people saves enormous pain at 50.',
  },
  {
    q: 'How long does a Manage Your Operations engagement take?',
    a: 'The diagnostic audit takes 1–2 weeks. Full SOP documentation, KPI framework setup, and dashboard implementation typically runs 4–8 weeks depending on the complexity and number of departments involved.',
  },
  {
    q: 'Do you help with software tools like ERP or project management platforms?',
    a: 'Yes. We assess your current tooling, recommend fit-for-purpose platforms (we are tool-agnostic), and configure the workflows within those tools. We also train your team so they can own and adapt the systems going forward.',
  },
  {
    q: 'What happens if our processes change after the engagement ends?',
    a: 'We build your SOP library in editable formats your team controls. We also document a process for updating processes, so governance is self-sustaining. Ongoing retainer options are available if you want continued optimisation support.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Diagnostic Audit',
    desc: 'A deep-dive investigation into your current operational health, identifying friction points and hidden costs.',
  },
  {
    num: '02',
    title: 'Workflow Synchronicity',
    desc: 'Aligning human capital with technological assets to ensure every action contributes to the bottom line.',
  },
  {
    num: '03',
    title: 'Continuity Governance',
    desc: 'Implementing the policies and tools required to maintain operational excellence without constant intervention.',
  },
]

export default function ServiceMO() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-4 md:gap-8 items-stretch mt-8 md:mt-16 mb-10 md:mb-24">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-5 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#0a192f]">Precision Control</span>
            <span className="block text-[#515f78]">for Modern Assets.</span>
          </h1>
          <p className="font-body text-base text-[#5a5e6a] max-w-2xl leading-relaxed mb-6">
            We provide the structural integrity required to scale. Our Manage Your Operations suite transforms chaotic workflows into architectural precision, ensuring your business remains grounded while reaching new heights.
          </p>
          <div className="border-l-2 border-[#e31e24] pl-4 mt-2 self-start">
            <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">From chaos to clarity.</p>
            <p className="font-headline font-extrabold text-[#0a192f] text-base leading-snug mt-1">Systems that run your business, not the other way around.</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-end">
          <div className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-full lg:min-h-[420px] mt-6 lg:mt-0 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=900&q=80"
              alt="Operations management"
            />
          </div>
        </div>
      </section>

      {/* ── Bento Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-10 text-2xl sm:text-3xl md:text-4xl">
            How We Manage Your Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Large card */}
            <div className="md:col-span-2 bg-[#0a192f] rounded-xl p-6 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden min-h-[240px] md:min-h-[320px]">
              <div className="relative z-10">
                <span className="font-body text-[#b9c7e4] text-xs uppercase tracking-widest mb-4 block">Core Competency</span>
                <h3 className="font-headline text-white text-xl sm:text-2xl lg:text-4xl font-bold mb-4">
                  Infrastructure Rationalisation
                </h3>
                <p className="font-body text-[#b9c7e4] text-sm leading-relaxed max-w-lg">
                  Eliminate redundancy and optimise resource allocation through our proprietary operational mapping framework.
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

            {/* Process Blueprinting */}
            <div className="bg-[#f2f4f7] rounded-xl p-6 md:p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>architecture</span>
                <h4 className="font-headline text-xl font-bold text-[#0a192f] mb-3">Process Blueprinting</h4>
                <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">
                  We document and refine every touchpoint of your operation, creating a scalable manual for growth.
                </p>
              </div>
              <Link to="/contact" className="group mt-auto pt-6 border-t border-slate-200 flex justify-between items-center">
                <span className="font-body text-xs font-bold tracking-tight uppercase text-[#0a192f] group-hover:text-[#e31e24] transition-colors duration-200">View Methodology</span>
                <span className="material-symbols-outlined text-[#0a192f] text-[19px] group-hover:text-[#e31e24] group-hover:translate-x-1 transition-all duration-200">arrow_forward</span>
              </Link>
            </div>

            {/* Risk Mitigation */}
            <div className="bg-[#f2f4f7] rounded-xl p-6 md:p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>security</span>
                <h4 className="font-headline text-xl font-bold text-[#0a192f] mb-3">Risk Mitigation</h4>
                <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">
                  Identifying structural weaknesses before they become failures. We build resilience into your DNA.
                </p>
              </div>
            </div>

            {/* Stat card */}
            <div className="md:col-span-2 bg-[#0a192f] rounded-xl p-6 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden min-h-[200px]">
              <div className="relative z-10">
                <span className="font-body text-[#b9c7e4] text-xs uppercase tracking-widest mb-4 block">Operations Hub</span>
                <p className="font-body text-[#b9c7e4] text-sm leading-relaxed max-w-lg">
                  Access a unified view to monitor every metric of your operational stability. Built for decision-makers who need clarity, not noise.
                </p>
              </div>
              <div className="relative z-10 mt-8 flex items-end gap-10">
                <div>
                  <div className="font-headline font-extrabold text-white text-3xl md:text-4xl">99.8%</div>
                  <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#b9c7e4]">Operational Uptime</div>
                </div>
              </div>
              <div className="absolute bottom-[-10%] right-[-5%] w-48 h-48 bg-[#e31e24]/15 blur-[80px] rounded-full pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* ── How We Stabilise */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline font-extrabold tracking-tighter text-[#0a192f] mb-10 text-2xl sm:text-3xl md:text-4xl">
            How We Stabilise Your Future.
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
                Ready to build something lasting?
              </h3>
              <p className="font-body text-white text-sm sm:text-base">Transform your business with our consulting expertise.</p>
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
