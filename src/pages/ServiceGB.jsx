import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const FAQS = [
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
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-12 md:mb-24">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-headline font-extrabold leading-[1.05] tracking-tight text-[#0a192f] mb-12"
            >
              Expansion Without<br />
              <span className="text-[#515f78]">Complication.</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 pb-4">
            <p className="font-body text-fs-lead text-[#5a5e6a] leading-relaxed max-w-sm">
              Strategic frameworks designed to amplify your market presence while maintaining the operational integrity of your brand.
            </p>
          </div>
        </div>
      </section>

      {/* ── Full-width image */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] w-full rounded-xl overflow-hidden bg-[#eceef1]">
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
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
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
                <span className="material-symbols-outlined text-white text-[23px]">{item.icon}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#0a192f]">{item.title}</h3>
              <p className="font-body text-[#5a5e6a] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Growth benchmarks */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="bg-[#eceef1] rounded-xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-12 gap-12 items-center">

            {/* Stats */}
            <div className="col-span-12 lg:col-span-5">
              <h2
                className="font-headline font-extrabold text-[#0a192f] mb-10 leading-tight"
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
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Light card */}
          <div className="bg-white p-8 md:p-12 rounded-xl flex flex-col justify-between min-h-[280px] md:h-[360px] group hover:shadow-xl transition-all duration-300 border border-slate-100">
            <h3 className="font-headline text-3xl font-extrabold text-[#0a192f]">Grow Your Portfolio</h3>
            <p className="font-body text-[#5a5e6a] text-fs-body leading-relaxed">
              Diversify your assets and market reach with our proprietary investment and expansion frameworks.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-body font-bold text-[#0a192f] group-hover:gap-4 transition-all duration-300"
            >
              Explore Framework
              <span className="material-symbols-outlined text-[21px]">arrow_forward</span>
            </Link>
          </div>

          {/* Dark card */}
          <div className="bg-[#0a192f] p-8 md:p-12 rounded-xl flex flex-col justify-between min-h-[280px] md:h-[360px] group relative overflow-hidden">
            <h3 className="font-headline text-3xl font-extrabold text-white">Scale Your Impact</h3>
            <p className="font-body text-[#76849f] text-fs-body leading-relaxed">
              Measure and amplify your corporate social responsibility and market influence on a global scale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-body font-bold text-white group-hover:gap-4 transition-all duration-300"
            >
              View Case Studies
              <span className="material-symbols-outlined text-[21px]">arrow_forward</span>
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
              className="font-headline font-extrabold text-white tracking-tighter mb-2 text-2xl md:text-3xl"
            >
              Ready to build something lasting?
            </h3>
            <p className="font-body text-white/50 text-base">Transform your business with our consulting expertise.</p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#0a192f] px-10 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-widest border-2 border-white transition-colors duration-200 hover:bg-transparent hover:text-white group"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
