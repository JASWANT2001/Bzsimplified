import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What does "managing operations" actually mean in practice?',
    a: 'It means documenting how your business runs — every repeatable process, decision tree, and performance metric — and then optimising those systems so the business can function consistently without depending on any single person. The output is a set of SOPs, KPI dashboards, and a daily execution rhythm your team can follow.',
  },
  {
    q: 'Our business is still small. Do we really need formal SOPs?',
    a: 'The best time to document processes is before you scale, not after. Small teams often run on tribal knowledge — which breaks the moment someone leaves or you hire fast. A lightweight SOP library built at 10 people saves enormous pain at 50.',
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
    a: 'We build your SOP library in editable formats your team controls. We also document a process for updating processes — so governance is self-sustaining. Ongoing retainer options are available if you want continued optimisation support.',
  },
]

export default function ServiceMO() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-12">
        <div className="flex items-center gap-2 font-body text-xs tracking-widest uppercase font-semibold text-[#39475f]">
          <span>STABILIZE</span>
          <span className="text-[#75777e]">/</span>
          <span className="text-[#0a192f]">Manage Your Operations</span>
        </div>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1
              className="font-headline font-extrabold tracking-tighter text-[#0a192f] leading-[0.95] mb-8"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              Precision Control<br />for Modern Assets.
            </h1>
            <p className="font-body text-xl text-[#5a5e6a] max-w-2xl leading-relaxed font-light">
              We provide the structural integrity required to scale. Our Manage Your Operations suite transforms chaotic workflows into architectural precision, ensuring your business remains grounded while reaching new heights.
            </p>
          </div>

          {/* Stat + quote card */}
          <div className="lg:col-span-4 flex justify-end">
            <div className="bg-[#eceef1] p-8 rounded-xl w-full">
              <div className="font-headline font-bold text-[#0a192f] mb-1" style={{ fontSize: '3rem' }}>99.8%</div>
              <div className="font-body text-xs font-bold uppercase tracking-widest text-[#39475f]">Operational Uptime</div>
              <div className="mt-6 pt-6 border-t border-slate-300">
                <p className="font-body text-sm text-[#5a5e6a] italic leading-relaxed">
                  "The stability we found with Bzsimplified allowed us to pivot during the market shifts without losing a single day of productivity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-14 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Large image card */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-[#0a192f] min-h-[460px]">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMPTz04LVdJON7aEaESeh6RGt2RI9otFCtbGoLr6kUgzqGrG8l9ej7MWCm58zmzjxko7R6hpFTV35KAF3iBBi8hD09zE3-RcNSC8LxiU_6rkAhlDztkXnXNlAZLy0D3zKOnZvAgoFmG5H9B8La8cK3vQuxGMlBiqNvpTciG4TNeiZGaAGtZSEPBTxHj7sKN4_q-VjgRzwq5IFDfbtRUN_iQ7tXCLESpxkE-1VqAjS4ekSR_nw5bWnILE9Jztr94d0EiKzSr2Z0gvP0"
              alt="Operations interior"
              onError={e => { e.target.style.display = 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 lg:p-12">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-body font-bold uppercase tracking-[0.2em] mb-4 rounded-full">
                Core Competency
              </span>
              <h3 className="font-headline text-3xl font-bold text-white mb-3 tracking-tight">
                Infrastructure Rationalisation
              </h3>
              <p className="font-body text-[#b9c7e4] max-w-md text-sm leading-relaxed">
                Eliminate redundancy and optimise resource allocation through our proprietary operational mapping framework.
              </p>
            </div>
          </div>

          {/* Process Blueprinting */}
          <div className="bg-white border border-slate-100 p-10 flex flex-col justify-between rounded-xl shadow-sm">
            <div>
              <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>architecture</span>
              <h4 className="font-headline text-xl font-bold text-[#0a192f] mb-3">Process Blueprinting</h4>
              <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">
                We document and refine every touchpoint of your operation, creating a scalable manual for growth.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest text-[#0a192f] group"
            >
              View Methodology
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {/* Risk Mitigation */}
          <div className="bg-[#f2f4f7] p-10 flex flex-col justify-between rounded-xl">
            <div>
              <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>security</span>
              <h4 className="font-headline text-xl font-bold text-[#0a192f] mb-3">Risk Mitigation</h4>
              <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">
                Identifying structural weaknesses before they become failures. We build resilience into your DNA.
              </p>
            </div>
            <div className="flex -space-x-2 mt-8">
              {['JD', 'AS', '+4'].map((label, i) => (
                <div
                  key={label}
                  className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold ${i === 2 ? 'bg-[#0a192f] text-white' : 'bg-[#eceef1] text-[#0a192f]'}`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── How We Stabilize */}
      <section className="bg-[#f2f4f7] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Steps */}
            <div>
              <h2
                className="font-headline font-extrabold tracking-tight text-[#0a192f] mb-12"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
              >
                How We Stabilise<br />Your Future.
              </h2>
              <div className="space-y-12">
                {[
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
                ].map(step => (
                  <div key={step.num} className="flex gap-6 group">
                    <div className="font-headline text-4xl font-bold text-slate-200 group-hover:text-[#0a192f] transition-colors duration-300 flex-shrink-0 leading-none pt-1">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-headline text-lg font-bold text-[#0a192f] mb-2">{step.title}</h4>
                      <p className="font-body text-[#5a5e6a] leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image + floating card */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#e0e3e6]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhjjoqbwRVp8DbKIUzObsZOVgD9EcfqBO67Na81rxUFzm0lYkg3bfZ9OlwNWBuggH_Z7cbQMROPUmqE80vtmcHD6FaUpHvTPuLrAYxrZBGo3XmKX73ptM8zKnbnX43o9G0hqray_spq-i7Xvn82dM2-lj8LEKrzcvaEdNlxkR-nV8wZf7bGyd1V47JDD22XK6V06WqrPjQUu0W5JYB_vWX22_LbISv1sK2oZ9XKiKgUrvQPA0e4rJMUcGOifDsKAIi6Q3vVrVVkr8B"
                  alt="Corporate building"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
              {/* Floating card */}
              <div className="hidden md:block absolute -bottom-8 -left-6 bg-white p-8 rounded-xl shadow-xl max-w-xs border border-slate-100">
                <h5 className="font-body text-xs font-bold uppercase tracking-widest text-[#0a192f] mb-4">
                  Operations Hub
                </h5>
                <p className="font-body text-xs text-[#5a5e6a] leading-relaxed mb-5">
                  Access our unified dashboard to monitor every metric of your operational stability in real-time.
                </p>
                <Link
                  to="/contact"
                  className="font-body text-xs font-bold text-[#0a192f] border-b border-[#0a192f] pb-0.5 hover:text-[#e31e24] hover:border-[#e31e24] transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>

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
