import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'How long does the Launch Your Brand process take?',
    a: 'Most brand launch engagements are completed within 2 to 4 weeks. The timeline depends on the scope — a full identity system with a website takes longer than positioning and guidelines alone. We agree on a clear delivery schedule at the start.',
  },
  {
    q: 'Do I need a name or logo ready before starting?',
    a: 'No. We often work with clients from scratch — helping name the brand, define the visual language, and build the full identity system. If you already have a name or logo, we build on top of what exists or recommend a refinement if needed.',
  },
  {
    q: 'What deliverables will I receive at the end?',
    a: 'You receive a complete Brand Kit: logo files (all formats), typography guide, colour palette, brand usage guidelines, positioning statement, and a go-to-market summary. Everything is documented so your team or any agency can use it consistently.',
  },
  {
    q: 'Can this service be used for a rebrand, not just a new brand?',
    a: 'Absolutely. Rebrands are a significant part of our work. We begin with a brand audit of what exists, identify what is worth keeping, and build a transition plan that minimises disruption to your existing audience.',
  },
  {
    q: 'Is this service for startups only, or also for established businesses?',
    a: 'Both. Startups use it to launch with clarity. Established businesses use it when they\'ve outgrown their original brand, entered new markets, or need to unify inconsistent brand expressions across regions or product lines.',
  },
]

export default function ServiceLB() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-8">
        <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f] bg-[#eceef1] px-3 py-1.5 rounded-lg">
          START / Launch Your Brand
        </span>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-end mb-24">
        <div className="col-span-12 lg:col-span-8">
          <h1
            className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Launch Your Brand.<br />
            <span className="text-[#515f78]">Built For Impact.</span>
          </h1>
          <p className="font-body text-xl text-[#5a5e6a] max-w-2xl leading-relaxed">
            Transforming vision into market presence. Our "START" package is engineered for entrepreneurs
            ready to establish a dominant brand identity with speed, precision, and architectural order.
          </p>
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

      {/* ── Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="grid grid-cols-12 gap-4">

          {/* Primary dark card */}
          <div className="col-span-12 md:col-span-7 bg-[#0a192f] rounded-xl p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
            <div className="relative z-10">
              <span className="font-body text-[#b9c7e4] text-xs uppercase tracking-widest mb-4 block">Core Strategy</span>
              <h3 className="font-headline text-white text-3xl lg:text-4xl font-bold mb-6">
                Market Entry Strategy &amp; Architectural Foundation
              </h3>
              <p className="font-body text-[#b9c7e4] text-lg max-w-lg">
                We define your unique positioning through rigorous competitive analysis and blueprint your long-term scalability.
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

          {/* Visual Identity card */}
          <div className="col-span-12 md:col-span-5 bg-white border border-slate-200 rounded-xl p-10 flex flex-col">
            <span className="material-symbols-outlined text-[#0a192f] mb-6" style={{ fontSize: '36px' }}>architecture</span>
            <h4 className="font-headline text-2xl font-bold mb-4 text-[#0a192f]">Visual Identity System</h4>
            <p className="font-body text-[#5a5e6a] mb-8">
              A comprehensive design language including logo, typography hierarchy, and a color palette that evokes authority.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
              <span className="font-body text-xs font-bold tracking-tight uppercase text-[#0a192f]">Branding Kit Included</span>
              <span className="material-symbols-outlined text-[#0a192f] text-[18px]">arrow_forward</span>
            </div>
          </div>

          {/* Launchpad Website card */}
          <div className="col-span-12 md:col-span-4 bg-[#f2f4f7] rounded-xl p-10 flex flex-col">
            <h4 className="font-headline text-2xl font-bold mb-4 text-[#0a192f]">Launchpad Website</h4>
            <p className="font-body text-[#5a5e6a] text-sm leading-relaxed mb-6">
              A high-conversion landing page optimized for editorial precision and mobile-first performance.
            </p>
            <img
              className="w-full h-40 object-cover rounded-lg mt-auto shadow-sm"
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80"
              alt="Website design"
            />
          </div>

          {/* Narrative + metric card */}
          <div className="col-span-12 md:col-span-8 bg-white border border-slate-200 rounded-xl p-10 lg:p-12 grid sm:grid-cols-2 gap-8">
            <div>
              <span className="material-symbols-outlined text-[#e31e24] mb-4" style={{ fontSize: '30px' }}>campaign</span>
              <h4 className="font-headline text-2xl font-bold mb-2 text-[#0a192f]">Narrative Craft</h4>
              <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">
                We craft the copy and the story that bridges the gap between your vision and your audience's needs.
              </p>
            </div>
            <div className="flex flex-col justify-center items-end text-right">
              <div className="mb-4">
                <div className="font-headline font-extrabold leading-none text-[#0a192f]" style={{ fontSize: '3rem' }}>24h</div>
                <div className="font-body text-xs uppercase tracking-widest text-[#39475f] font-bold mt-1">Response Protocol</div>
              </div>
              <p className="font-body text-xs text-[#5a5e6a] max-w-[200px]">
                Dedicated project management to ensure your launch timeline is met with zero friction.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-[#eceef1] py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>30+</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Brands Launched</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>14d</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Average Deployment</div>
          </div>
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>100%</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Identity Integrity</div>
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
