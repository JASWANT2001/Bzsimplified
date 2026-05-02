import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const PILLARS = [
  {
    icon: 'account_tree',
    title: 'Organisational Blueprinting',
    desc: 'Redefining reporting lines and functional silos into fluid, project-centric structural units designed for rapid pivoting and scalability.',
  },
  {
    icon: 'psychology',
    title: 'Cognitive Culture',
    desc: 'Building high-trust psychological safety nets within engineering and creative teams to maximise innovative output.',
  },
  {
    icon: 'analytics',
    title: 'Talent Calibration',
    desc: 'Data-driven performance assessment and bespoke leadership development tracks for mid-level managers.',
  },
  {
    icon: 'security',
    title: 'Operational Resilience',
    desc: 'Hardening internal processes against market volatility while maintaining the flexibility to capture emerging opportunities.',
  },
]

const METRICS = [
  { stat: '124',  label: 'Enterprises',  sub: 'Scaled Globally' },
  { stat: '98%',  label: 'Retention',    sub: 'Post-Restructure' },
  { stat: '3.4×', label: 'Revenue',      sub: 'Growth Momentum' },
]

const FAQS = [
  {
    q: 'What does "empowering a team" actually look like as a consulting engagement?',
    a: 'It starts with a structural audit of your org chart, role definitions, and decision-making hierarchy. We identify bottlenecks, unclear accountability, and under-utilised talent. From there we redesign org structure, define leadership cadences, and implement hiring and performance frameworks — all tailored to your growth stage.',
  },
  {
    q: 'We already have an HR team. How does this service complement them?',
    a: 'Our work is structural and strategic, not transactional. Your HR team handles day-to-day people operations. We design the architecture they operate within — org design, role frameworks, compensation bands, leadership development tracks — and then hand it over for them to run.',
  },
  {
    q: 'How long does an Empower Your Team engagement take?',
    a: 'The diagnostic and org design phase takes 2–3 weeks. Full implementation — role redesign, hiring framework, leadership cadence, and team playbook — typically runs 6–10 weeks depending on team size and the depth of restructuring required.',
  },
  {
    q: 'Can this service help if we are scaling fast and hiring aggressively?',
    a: 'This is exactly when it matters most. Fast hiring without structural clarity creates chaos. We build the hiring criteria, onboarding framework, and org design that lets you add 5 or 50 people without losing cohesion or speed.',
  },
  {
    q: 'What is the 72-hour diagnostic you mention?',
    a: 'It is a rapid-assessment process — a structured set of interviews, surveys, and document reviews — that identifies the top 3–5 structural friction points in your team within three business days. It serves as both a diagnostic and a proposal for where to focus the full engagement.',
  },
]

export default function ServiceET() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-12">
        <div className="flex items-center gap-2 font-body text-sm uppercase tracking-[0.2em] font-semibold text-[#606470]">
          <span>SCALE</span>
          <span className="text-[#e31e24]">/</span>
          <span className="text-[#0a192f]">Empower Your Team</span>
        </div>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <h1
              className="font-headline font-extrabold tracking-tight text-[#0a192f] leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              Engineering Elite<br />Performance Structures.
            </h1>
            <p className="font-body text-xl text-[#5a5e6a] font-light leading-relaxed max-w-3xl">
              Moving beyond traditional HR models to build resilient architectural frameworks for human capital. We curate talent ecosystems that thrive on structural clarity and operational excellence.
            </p>
          </div>

          {/* Stat card */}
          <div className="lg:col-span-4 lg:pt-4">
            <div className="bg-white p-10 rounded-xl border-l-4 border-[#e31e24] shadow-sm">
              <div
                className="font-headline font-black text-[#0a192f] mb-2 tracking-tighter"
                style={{ fontSize: '3.5rem', lineHeight: 1 }}
              >
                42%
              </div>
              <div className="font-body text-sm font-bold uppercase tracking-widest text-[#39475f]">
                Efficiency Gain in Team Velocity
              </div>
              <div className="mt-6 h-1 w-12 bg-[#e31e24]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Structural Pillars */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-headline text-xl font-bold uppercase tracking-widest text-[#0a192f] whitespace-nowrap">
            Structural Pillars
          </h2>
          <div className="h-px flex-grow bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(pillar => (
            <div
              key={pillar.title}
              className="group bg-[#f2f4f7] p-8 rounded-xl hover:bg-white transition-all duration-500 border border-transparent hover:border-slate-200 hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-[#0a192f] text-white flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#e31e24] transition-colors duration-300">
                <span className="material-symbols-outlined text-[22px]">{pillar.icon}</span>
              </div>
              <h3 className="font-headline text-lg font-bold mb-4 text-[#0a192f]">{pillar.title}</h3>
              <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA + Metrics split */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl shadow-2xl">

          {/* CTA — dark */}
          <div className="bg-[#0a192f] text-white p-12 lg:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-3xl font-bold text-white mb-6">
                Let's audit your team's current architecture.
              </h2>
              <p className="font-body text-[#76849f] mb-10 text-lg max-w-md leading-relaxed">
                Our diagnostics identify structural friction points and latent talent potential in under 72 hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c41920] text-white px-10 py-5 rounded-lg font-body font-bold text-sm uppercase tracking-widest transition-all duration-200 group"
              >
                Request Audit
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 border-8 border-white/5 rounded-full pointer-events-none" />
          </div>

          {/* Metrics — white */}
          <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
            <div className="space-y-10">
              {METRICS.map(m => (
                <div key={m.label} className="flex items-end gap-6">
                  <span
                    className="font-headline font-black text-[#0a192f] tracking-tighter leading-none"
                    style={{ fontSize: '3.5rem' }}
                  >
                    {m.stat}
                  </span>
                  <div className="pb-1">
                    <p className="font-body text-xs font-bold uppercase tracking-widest text-[#606470]">{m.label}</p>
                    <p className="font-body text-sm text-[#e31e24] font-semibold">{m.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Full-width image banner */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-32">
        <div className="rounded-3xl overflow-hidden h-[420px] md:h-[500px] relative">
          <img
            alt="High-end office architecture"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqaVNDgFB6L4GjIxjK9BEf293yFFieNQr_PKYJ2jQYXOOpKzBgOq4XCaqTYeocW_3pgPavSqGEY_BXfx4Lo89KLO6vULTrissAV3n2Xtjdi2hPTrIhRjCwn3zMzHmtI72SzTFwlQZ8hmUjrzG1HerP4zF68OWhECiDMV07JCxZWiH64CPkgKw7MAksUiEIN8aHgLYR79SnWvqR-CEY3zDAQOHOblBSytMCqF-jkhdHxGBAaYoA4WARaVQE8xfRMfr0YPU2h4SNjIEc"
            onError={e => { e.target.style.display = 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/70 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 lg:bottom-12 lg:left-12 max-w-xl">
            <h3 className="font-headline text-white text-2xl md:text-3xl font-bold leading-tight">
              Built for the future of work.<br />Every blueprint is bespoke.
            </h3>
          </div>
        </div>
      </section>

      {/* ── FAQ */}
      <FAQ items={FAQS} />

      {/* ── CTA bottom */}
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
