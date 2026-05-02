import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'Do you recommend specific software or are you tool-agnostic?',
    a: 'We are tool-agnostic by philosophy. Our recommendations are driven entirely by your business model, team size, and scalability requirements — not vendor partnerships. We present options with clear trade-offs so you make an informed decision.',
  },
  {
    q: 'What if we already have some tools in place?',
    a: 'We start with an audit of your existing stack. Where tools are working well, we keep them and build around them. Where there are gaps or inefficiencies, we recommend targeted replacements or integrations rather than a full overhaul.',
  },
  {
    q: 'How long does a typical tech setup engagement take?',
    a: 'Most engagements run between 3 to 6 weeks depending on complexity. A greenfield setup for a new business is typically faster; migrating or restructuring an existing stack takes longer due to data integrity and continuity requirements.',
  },
  {
    q: 'Will my team need technical knowledge to manage the systems afterwards?',
    a: 'No. We specifically select tools that your team can own and operate without engineering resources. Every engagement includes a handover session, documented SOPs, and short video walkthroughs tailored to your team\'s skill level.',
  },
  {
    q: 'Do you provide ongoing support after the setup is complete?',
    a: 'Yes. We offer a 30-day post-launch support window as standard. Beyond that, ongoing retainer arrangements are available for businesses that want continuous optimisation, system monitoring, or future integrations.',
  },
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
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-8 items-end mb-24">
        <div className="col-span-12 lg:col-span-8">
          <h1
            className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Set Up Your Tech<br />
            <span className="text-[#515f78]">With Precision.</span>
          </h1>
          <p className="font-body text-xl text-[#5a5e6a] max-w-2xl leading-relaxed">
            Modern businesses require modern infrastructure. We architect your digital workspace to ensure seamless connectivity, bulletproof security, and effortless scalability from day one.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end">
          <div className="w-full h-64 bg-[#eceef1] rounded-xl overflow-hidden group">
            <img
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVRKnp8k0SSr_ETXQ-4KrP5F33sCKdwWHsbNb8M2ozD3TtINV95S_zh1zsq3WxpDik0HtaYtm4sOT4aOP6nrvMrrwpRs_0KTYgO-EctRn8PMycgxk1rg5RZCcR0B466XztX_uGogD8xdb6DVeJgn3zTYoO7zZzhpHzPYedjFnu0wWFG5hxrL597KAjyRCUBox7fNDRZgtLDBS8pYLv3X_wWei7xAntJbK4YegyqlCeU_9uZD1n30Za6WtZ5y6hAF9gXAo9uIEuLauH"
              alt="Modern workstation"
            />
          </div>
        </div>
      </section>

      {/* ── Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Large card — Cloud Infrastructure */}
          <div className="md:col-span-2 bg-white border border-slate-100 rounded-xl p-10 lg:p-12 flex flex-col justify-between shadow-sm">
            <div>
              <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>cloud_done</span>
              <h3 className="font-headline text-3xl font-bold mb-5 text-[#0a192f]">Cloud Infrastructure &amp; Migration</h3>
              <p className="font-body text-[#5a5e6a] leading-relaxed max-w-lg">
                Transitioning your business to the cloud doesn't have to be complex. We handle everything from architectural design to the final data migration, ensuring zero downtime and maximum efficiency.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['AWS', 'Azure', 'Google Cloud'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-[#eceef1] font-body text-xs font-bold uppercase tracking-widest rounded-full text-[#0a192f]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Dark card — Cybersecurity */}
          <div className="bg-[#0a192f] text-white rounded-xl p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-6 block" style={{ fontSize: '36px', fontVariationSettings: "'FILL' 1" }}>security</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Cybersecurity Audit</h3>
              <p className="font-body text-[#b9c7e4] text-sm leading-relaxed">
                Bulletproof protection for your intellectual property. We implement end-to-end encryption and multi-factor authentication protocols.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-white text-xs font-body font-bold uppercase tracking-widest hover:gap-4 transition-all duration-200 relative z-10"
            >
              Explore Security
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Small card — Workspace Sync */}
          <div className="bg-white border border-slate-100 rounded-xl p-10 shadow-sm">
            <span className="material-symbols-outlined text-[#0a192f] mb-6 block" style={{ fontSize: '36px' }}>devices</span>
            <h3 className="font-headline text-2xl font-bold mb-4 text-[#0a192f]">Workspace Sync</h3>
            <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">
              Unify your hardware ecosystem. Seamless hand-off between mobile, tablet, and desktop environments.
            </p>
          </div>

          {/* Wide card — Dedicated Tech Support */}
          <div className="md:col-span-2 bg-[#f2f4f7] rounded-xl p-10 lg:p-12 flex items-center gap-12">
            <div className="flex-1">
              <h3 className="font-headline text-2xl font-bold mb-4 text-[#0a192f]">Dedicated Tech Support</h3>
              <p className="font-body text-[#5a5e6a] text-sm leading-relaxed mb-8">
                Personalised concierge service for all your technical hurdles. We don't just fix problems; we prevent them from occurring.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-[#0a192f] text-white font-body font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-black transition-colors"
              >
                Book Session
              </Link>
            </div>
            <div className="hidden lg:block w-1/3 aspect-video bg-[#eceef1] rounded-lg overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR6mtQgMtT6MEtO8gTKGfY2YQA3KUttUjMF3YFswnjWTNbvTygkqAw2B2XygYUP_FQkl70ubAQau6XIg1Ade7A-ZyC4ub_uBijlHCWBXQF_b3PiuLUAO907sc2LX7TWrEztPjSZHhUiQgaLod4nKpB6yOTNpmcfelTXHozxjGpacyga8ivIDGXVnojCV1IDMhS89nytI8m7Un4H1W-xAjyH3R4ZDtU17FlwDQrl0qdzjFB60KzRfHTG8hNav9rHHFcHBPTrD2s3RsX"
                alt="Server room"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Why We're Different */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-40">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-[#0a192f] mb-6">
              Why our tech setup is different.
            </h2>
            <p className="font-body text-[#5a5e6a] leading-loose">
              We don't believe in one-size-fits-all solutions. Every business has a unique rhythm, and your technology should be the conductor, not the friction.
            </p>
          </div>
          <div className="space-y-12">
            {[
              {
                title: 'Zero Friction Onboarding',
                desc: 'We handle the entire stack so your team can focus on their actual work from minute one.',
                active: true,
              },
              {
                title: 'Future-Proof Architecture',
                desc: 'We select tools and hardware that scale with you, preventing costly migrations down the line.',
                active: false,
              },
              {
                title: 'Continuous Optimisation',
                desc: 'Our relationship doesn\'t end at setup. We monitor and tweak your systems for peak performance.',
                active: false,
              },
            ].map(item => (
              <div
                key={item.title}
                className={`border-l-2 pl-8 ${item.active ? 'border-[#0a192f]' : 'border-slate-200'}`}
              >
                <h4 className="font-headline font-bold text-lg text-[#0a192f] mb-2">{item.title}</h4>
                <p className="font-body text-sm text-[#5a5e6a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrics */}
      <section className="bg-[#eceef1] py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>50+</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Tech Stacks Built</div>
          </div>
          <div className="border-l-4 border-[#e31e24] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>3wk</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Average Setup Time</div>
          </div>
          <div className="border-l-4 border-[#0a192f] pl-8">
            <div className="font-headline font-extrabold text-[#0a192f] mb-2" style={{ fontSize: '3.5rem' }}>0</div>
            <div className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Downtime Incidents</div>
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
