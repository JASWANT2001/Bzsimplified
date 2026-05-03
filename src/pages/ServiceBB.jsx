import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What legal structures do you advise on?',
    a: 'We cover the full range — sole proprietorships, LLPs, private limited companies, and partnership structures. Our recommendations are based on your funding plans, liability preferences, tax efficiency, and long-term growth ambitions.',
  },
  {
    q: 'Do I need existing revenue or funding to use this service?',
    a: 'No. This service is designed for businesses at the pre-revenue or early-revenue stage. In fact, getting the structural foundation right before scale is exactly where the value is greatest — fixing it later is far more expensive.',
  },
  {
    q: 'How long does the Build Your Business engagement take?',
    a: 'Typically 3 to 5 weeks for the core deliverables. This includes the operational blueprint, governance setup, process documentation, and initial HR framework. Complex multi-entity structures may take longer.',
  },
  {
    q: 'Do you handle registrations and government filings directly?',
    a: 'We provide guidance, documentation, and coordination support for registrations. Actual filings are done through empanelled legal and CA partners — we manage the process end-to-end so you don\'t have to navigate it alone.',
  },
  {
    q: 'What happens after the engagement ends?',
    a: 'You receive a complete Operations Handbook — all documented processes, entity paperwork, governance policies, and a 90-day action plan. We also offer a 30-day post-engagement support window and optional ongoing advisory retainers.',
  },
]

export default function ServiceBB() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen pb-24">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-12">
        <span className="font-body text-xs tracking-widest uppercase text-[#44474d]/60 font-semibold">
          START / Build Your Business
        </span>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-12 md:mb-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7">
            <h1
              className="font-headline font-extrabold tracking-tighter leading-[0.9] text-[#0a192f] mb-8"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
            >
              Build Your <br /> Business
            </h1>
            <p className="font-body text-xl text-[#44474d] max-w-xl leading-relaxed">
              Transition from vision to operation. We provide the architectural blueprint for your commercial
              success through precision-engineered strategy and structural excellence.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end items-start lg:items-end">
            <div className="w-full h-80 bg-[#f2f4f7] overflow-hidden rounded-xl">
              <img
                alt="Professional Business Environment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Foundation Card */}
          <div className="md:col-span-2 bg-white border border-slate-100 p-10 lg:p-12 rounded-xl flex flex-col justify-between group shadow-sm">
            <div>
              <span className="material-symbols-outlined text-[#0a192f] mb-8 block" style={{ fontSize: '36px' }}>architecture</span>
              <h3 className="font-headline text-3xl font-bold mb-4 text-[#0a192f]">Strategic Foundation</h3>
              <p className="font-body text-[#44474d] leading-relaxed max-w-lg">
                We don't just launch businesses; we engineer market leaders. Our methodology begins with
                deep-tissue market analysis and structural planning to ensure your business stands on an
                unshakeable foundation of data and design.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#eceef1] font-body text-xs font-bold rounded-full tracking-wider uppercase text-[#0a192f]">Market Analysis</span>
              <span className="px-4 py-2 bg-[#eceef1] font-body text-xs font-bold rounded-full tracking-wider uppercase text-[#0a192f]">Structural Design</span>
            </div>
          </div>

          {/* Accent Image Card */}
          <div className="bg-[#0a192f] p-1 rounded-xl overflow-hidden relative group min-h-[280px]">
            <img
              alt="Architectural detail"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 absolute inset-0"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            />
            <div className="absolute bottom-8 left-8 z-10">
              <p className="text-white font-headline text-2xl font-extrabold leading-tight">
                Precision <br /> Engineering
              </p>
            </div>
          </div>

          {/* Process Card */}
          <div className="bg-[#f2f4f7] p-10 lg:p-12 rounded-xl flex flex-col justify-center">
            <h4 className="font-headline font-bold text-[#0a192f]/10 mb-6" style={{ fontSize: '3rem' }}>01</h4>
            <h3 className="font-headline text-xl font-bold mb-4 text-[#0a192f]">Operational Blueprint</h3>
            <p className="font-body text-sm text-[#44474d] leading-relaxed">
              Establishing the internal workflows, governance models, and technical stacks required
              for seamless daily execution and rapid scalability.
            </p>
          </div>

          {/* Growth Card */}
          <div className="md:col-span-2 bg-white border border-slate-100 p-10 lg:p-12 rounded-xl flex flex-col md:flex-row gap-12 items-center shadow-sm">
            <div className="flex-1">
              <h4 className="font-headline font-bold text-[#0a192f]/10 mb-6" style={{ fontSize: '3rem' }}>02</h4>
              <h3 className="font-headline text-xl font-bold mb-4 text-[#0a192f]">Growth Integration</h3>
              <p className="font-body text-sm text-[#44474d] leading-relaxed">
                Implementing high-performance marketing and sales frameworks that are natively integrated
                into your core business operations.
              </p>
            </div>
            <div className="w-full md:w-64 h-48 bg-[#eceef1] rounded-lg overflow-hidden flex-shrink-0">
              <img
                alt="Planning Workspace"
                className="w-full h-full object-cover grayscale"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Metrics */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="bg-[#0a192f] text-white p-8 md:p-12 lg:p-16 rounded-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative z-10">
            <div>
              <p className="font-headline font-extrabold tracking-tighter mb-2" style={{ fontSize: '3.5rem' }}>150+</p>
              <p className="font-body text-xs tracking-widest uppercase opacity-60">Architectures Built</p>
            </div>
            <div>
              <p className="font-headline font-extrabold tracking-tighter mb-2" style={{ fontSize: '3.5rem' }}>4.2B</p>
              <p className="font-body text-xs tracking-widest uppercase opacity-60">Capital Optimized</p>
            </div>
            <div>
              <p className="font-headline font-extrabold tracking-tighter mb-2" style={{ fontSize: '3.5rem' }}>12</p>
              <p className="font-body text-xs tracking-widest uppercase opacity-60">Global Markets</p>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
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
