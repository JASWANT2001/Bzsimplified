import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
  {
    q: 'What does a market expansion engagement actually involve?',
    a: 'We begin with a market opportunity assessment — identifying the highest-ROI geographies or customer segments to enter next. From there we build an entry playbook: positioning, pricing, distribution channel strategy, and a 90-day launch plan with milestones and owners.',
  },
  {
    q: 'How do you help with capital for growth?',
    a: 'We prepare your business for capital — financial model, investor narrative, data room, and pitch materials. We also help you identify the right type of capital (debt vs. equity, VC vs. strategic) based on your growth profile and the dilution you are willing to accept.',
  },
  {
    q: 'We are already growing. Why do we need outside help?',
    a: 'Unstructured growth is one of the most common causes of business failure. Revenue growing faster than your systems, team, or cash flow can support creates fragility. We build the infrastructure that lets growth compound rather than destabilise.',
  },
  {
    q: 'Can you help us evaluate an acquisition or partnership opportunity?',
    a: 'Yes. We conduct commercial due diligence, strategic fit analysis, and integration planning for M&A opportunities. For partnerships and distribution deals, we structure the commercial terms and governance framework to protect your interests.',
  },
  {
    q: 'How long does a Grow Your Business engagement typically take?',
    a: 'The strategy and planning phase runs 3–4 weeks. Execution support — where we work alongside your team to implement the expansion plan — typically runs 3–6 months. The scope depends entirely on how many markets or growth vectors you are pursuing simultaneously.',
  },
]

export default function ServiceGB() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-8">
        <p className="font-body text-xs tracking-widest uppercase text-[#39475f] font-semibold">
          SCALE / Grow Your Business
        </p>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-24">
        <div className="grid grid-cols-12 gap-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-headline font-extrabold leading-[1.05] tracking-tight text-[#0a192f] mb-12"
              style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
            >
              Expansion Without<br />
              <span className="text-[#515f78]">Complication.</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 pb-4">
            <p className="font-body text-xl text-[#5a5e6a] leading-relaxed max-w-sm">
              Strategic frameworks designed to amplify your market presence while maintaining the operational integrity of your brand.
            </p>
          </div>
        </div>
      </section>

      {/* ── Full-width image */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="relative h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden bg-[#eceef1]">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_jwRx8GORsKZJaOTVuiFEjsx8Fu1HhAccY5A3VJ4IYlJvHQqCcpEHhjywBeETo7embteOhsJliejAdPcX6-ro4MgYJz3A0MCE3QFJPBwxV9okRfPV92ZeQ17OnEPS0MU1HXb6NM5tKGm1mtL2tobmLE7mNK24-HB7jhu6XlK1Lzk_0jP4ludHh-jAsJvZtmjPnoWzFtTRNTC2L11XPWlLNMewi3r8uTa3ECaFkcByoX9_UwvPbzCYDnw6uWG0JMAB6sYL5gMJcdj4"
            alt="Office architecture"
            onError={e => { e.target.style.display = 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 to-transparent" />
        </div>
      </section>

      {/* ── Three pillars */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: 'trending_up',
              title: 'Market Penetration',
              desc: 'Systematic entry strategies for new demographics and geographic regions, backed by deep data analytics and consumer behaviour profiling.',
            },
            {
              icon: 'hub',
              title: 'Operational Scaling',
              desc: 'Restructuring your internal systems to handle increased demand without sacrificing service quality or employee well-being.',
            },
            {
              icon: 'architecture',
              title: 'Brand Architecture',
              desc: 'Developing a cohesive visual and narrative identity that evolves as your business grows, ensuring long-term market authority.',
            },
          ].map(item => (
            <div key={item.title} className="space-y-6">
              <div className="w-12 h-12 bg-[#0a192f] rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[22px]">{item.icon}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#0a192f]">{item.title}</h3>
              <p className="font-body text-[#5a5e6a] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Growth benchmarks */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="bg-[#eceef1] rounded-xl p-12 lg:p-16">
          <div className="grid grid-cols-12 gap-12 items-center">

            {/* Stats */}
            <div className="col-span-12 lg:col-span-5">
              <h2
                className="font-headline font-extrabold text-[#0a192f] mb-10 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                Quantifiable Growth Benchmarks
              </h2>
              <div className="space-y-10">
                {[
                  { stat: '142%', label: 'Average Revenue Increase' },
                  { stat: '24',   label: 'Global Markets Reached' },
                ].map(item => (
                  <div key={item.label}>
                    <span
                      className="font-headline font-extrabold text-[#0a192f] tracking-tighter block mb-1"
                      style={{ fontSize: '3.5rem', lineHeight: 1 }}
                    >
                      {item.stat}
                    </span>
                    <span className="font-body text-xs font-bold uppercase tracking-widest text-[#39475f]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="col-span-12 lg:col-span-7">
              <div className="aspect-square bg-white rounded-xl overflow-hidden p-6 shadow-sm">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFBHpNfHsoKfEJUgsFgRKiCJVWKvFNLN8TpLMkJUh-gkLOJZt0geAruWhz_SgopWH7As_aTvTAlsTqewHwb3sJlop-ZTumVr9z9kJE4p6FeSojU1xoSRWKqGUvHMLG6nESfBkbCiXdIFuG2In3ciUg22C4kNjEG19rBFzFJcm8bWz_tfV-sVEzhvFVWKFYtAQjwQ4ZgVxy4VCDz8hPEhNlBo3sd2G2CED-tfnKAvjEb8aQVtfImFlZCNxqfe9LO64A7ivaXKtaJy1_"
                  alt="Data dashboard"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Two CTA cards */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Light card */}
          <div className="bg-white p-12 rounded-xl flex flex-col justify-between h-[360px] group hover:shadow-xl transition-all duration-300 border border-slate-100">
            <h3 className="font-headline text-3xl font-extrabold text-[#0a192f]">Grow Your Portfolio</h3>
            <p className="font-body text-[#5a5e6a] text-lg leading-relaxed">
              Diversify your assets and market reach with our proprietary investment and expansion frameworks.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-body font-bold text-[#0a192f] group-hover:gap-4 transition-all duration-300"
            >
              Explore Framework
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </div>

          {/* Dark card */}
          <div className="bg-[#0a192f] p-12 rounded-xl flex flex-col justify-between h-[360px] group relative overflow-hidden">
            <h3 className="font-headline text-3xl font-extrabold text-white">Scale Your Impact</h3>
            <p className="font-body text-[#76849f] text-lg leading-relaxed">
              Measure and amplify your corporate social responsibility and market influence on a global scale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-body font-bold text-white group-hover:gap-4 transition-all duration-300"
            >
              View Case Studies
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
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
