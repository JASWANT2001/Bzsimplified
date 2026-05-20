import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const PILLARS = [
  {
    icon: 'military_tech',
    title: 'Leadership Development',
    desc: 'Building confident leaders who drive performance, navigate change, and inspire teams toward sustainable growth.',
  },
  {
    icon: 'school',
    title: 'Skill Enhancement',
    desc: 'Practical learning interventions designed to strengthen functional expertise, communication, execution, and problem-solving capabilities.',
  },
  {
    icon: 'groups',
    title: 'Team Alignment',
    desc: 'Creating shared understanding, stronger collaboration, and clear accountability structures that improve productivity across functions.',
  },
  {
    icon: 'rocket_launch',
    title: 'Performance Enablement',
    desc: 'Equipping teams with tools, frameworks, and execution systems that convert capability into measurable business impact.',
  },
]

const METRICS = [
  { stat: '124+', label: 'Organizations',        sub: 'Supported Through Capability Building' },
  { stat: '98%',  label: 'Program Impact',       sub: 'Reported Performance Improvement' },
  { stat: '3.4×', label: 'Execution Efficiency', sub: 'Post Intervention Growth' },
]

const FAQS = [
  {
    q: 'What does Team Empowerment actually involve?',
    a: 'Team Empowerment focuses on strengthening people, performance, and execution. We help organizations build capabilities through leadership development, learning programs, communication enhancement, and practical frameworks that improve business outcomes.',
  },
  {
    q: 'We already have HR or Learning teams. How does this complement them?',
    a: 'We are not an HR function. Our role is to strengthen capability, leadership, and execution by bringing structured interventions aligned with business growth and organizational goals.',
  },
  {
    q: 'How long does an Empower Your Team engagement take?',
    a: 'Engagement timelines vary depending on objectives — ranging from focused workshops and leadership programs to long-term capability-building initiatives.',
  },
  {
    q: 'Can this help if we are scaling quickly?',
    a: 'Yes. Rapid growth often creates capability gaps. We support organizations with leadership readiness, team effectiveness, onboarding structures, and performance enablement frameworks.',
  },
  {
    q: 'What is the 72-hour assessment?',
    a: 'It is a focused diagnostic involving discussions, capability reviews, and performance analysis to identify key opportunities for stronger execution and team effectiveness within three business days.',
  },
  {
    q: 'Do you provide customized training programs?',
    a: 'Yes. Every intervention is tailored to organizational needs, industry context, leadership levels, and desired outcomes to ensure practical application and measurable impact.',
  },
  {
    q: 'Who is this designed for?',
    a: 'Founders, leadership teams, growing organizations, SMEs, and enterprises seeking stronger execution, better alignment, and empowered teams capable of driving growth.',
  },
  {
    q: 'What outcomes can organizations expect?',
    a: 'Organizations typically experience stronger leadership, improved collaboration, enhanced execution capability, better communication, and teams that are more prepared to scale with business growth.',
  },
]

export default function ServiceET() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12 mb-12">
        <span className="font-body text-xs tracking-[0.2em] uppercase font-bold text-[#39475f] bg-[#eceef1] px-3 py-1.5 rounded-lg">
          SCALE / Empower Your Team
        </span>
      </div>

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-12 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <h1
              className="font-headline font-extrabold tracking-tighter text-[#0a192f] leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              Empowered Teams.<br />
              <span className="text-[#515f78]">Stronger Execution.</span>
            </h1>
            <p className="font-body text-xl text-[#5a5e6a] font-light leading-relaxed max-w-3xl">
              Growth happens when people perform with clarity, confidence, and capability. We help organizations empower teams through structured learning, leadership development, performance enablement, and execution-focused interventions designed to strengthen business outcomes.
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
                Increase in Team Effectiveness
              </div>
              <div className="mt-6 h-1 w-12 bg-[#e31e24]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Pillars */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2 className="font-headline text-xl font-bold uppercase tracking-widest text-[#0a192f]">
            Capability Pillars
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
                <span className="material-symbols-outlined text-[23px]">{pillar.icon}</span>
              </div>
              <h3 className="font-headline text-lg font-bold mb-4 text-[#0a192f]">{pillar.title}</h3>
              <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA + Metrics split */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl shadow-2xl">

          {/* CTA — dark */}
          <div className="bg-[#0a192f] text-white p-8 md:p-12 lg:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-3xl font-bold text-white mb-6">
                Let's assess your team's growth potential.
              </h2>
              <p className="font-body text-[#76849f] mb-10 text-lg max-w-md leading-relaxed">
                Our rapid diagnostic identifies capability gaps, performance barriers, and opportunities to strengthen team effectiveness within 72 hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c41920] text-white px-10 py-5 rounded-lg font-body font-bold text-sm uppercase tracking-widest transition-all duration-200 group"
              >
                Request Assessment
                <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 border-8 border-white/5 rounded-full pointer-events-none" />
          </div>

          {/* Metrics — white */}
          <div className="bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-center">
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
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-32">
        <div className="rounded-3xl overflow-hidden h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] relative">
          <img
            alt="Team empowerment"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/70 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 lg:bottom-12 lg:left-12 max-w-xl">
            <h3 className="font-headline text-white text-2xl md:text-3xl font-bold leading-tight">
              Learning built for real-world performance.<br />
              Every engagement is tailored. Every outcome is measurable.
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
              Ready to build teams that perform and grow?
            </h3>
            <p className="font-body text-white/50 text-base">Transform capability into confidence. Strengthen execution. Empower lasting growth.</p>
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

    </main>
  )
}
