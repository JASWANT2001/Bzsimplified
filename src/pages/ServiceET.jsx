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
    a: 'Engagement timelines vary depending on objectives, ranging from focused workshops and leadership programs to long-term capability-building initiatives.',
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

      {/* ── Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-4 md:gap-8 items-stretch mt-8 md:mt-16 mb-10 md:mb-24">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-headline font-extrabold leading-[1.1] tracking-tighter text-[#0a192f] mb-5 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#0a192f]">Empowered Teams.</span>
            <span className="block text-[#515f78]">Stronger Execution.</span>
          </h1>
          <p className="font-body text-base text-[#5a5e6a] max-w-2xl leading-relaxed mb-6">
            Growth happens when people perform with clarity, confidence, and capability. We help organizations empower teams through structured learning, leadership development, performance enablement, and execution-focused interventions designed to strengthen business outcomes.
          </p>
          <div className="border-l-2 border-[#e31e24] pl-4 mt-2 self-start">
            <p className="font-body text-[#39475f] font-medium text-sm leading-relaxed">People first. Performance always.</p>
            <p className="font-headline font-extrabold text-[#0a192f] text-base leading-snug mt-1">We build teams that are ready to scale with your business.</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-end">
          <div className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-full lg:min-h-[420px] mt-6 lg:mt-0 bg-[#eceef1] rounded-xl overflow-hidden">
            <img
              alt="Team empowerment"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
            />
          </div>
        </div>
      </section>

      {/* ── Capability Pillars */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-headline font-extrabold text-[#0a192f] tracking-tighter mb-10 text-2xl sm:text-3xl md:text-4xl">
            Capability Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map(pillar => (
              <div
                key={pillar.title}
                className="group bg-[#f2f4f7] p-6 md:p-8 rounded-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-md"
              >
                <div className="w-12 h-12 bg-[#0a192f] text-white flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#e31e24] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[23px]">{pillar.icon}</span>
                </div>
                <h3 className="font-headline text-lg font-bold mb-4 text-[#0a192f]">{pillar.title}</h3>
                <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment CTA + Metrics */}
      <section className="bg-[#eceef1] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl">
            <div className="bg-[#0a192f] text-white p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-6">
                  Let's assess your team's growth potential.
                </h2>
                <p className="font-body text-[#b9c7e4] mb-10 text-base max-w-md leading-relaxed">
                  Our rapid diagnostic identifies capability gaps, performance barriers, and opportunities to strengthen team effectiveness within 72 hours.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-white text-[#0a192f] border-2 border-white px-8 py-3 rounded-lg font-headline font-semibold text-[15px] tracking-wide transition-all duration-200 hover:bg-transparent hover:text-white"
                >
                  Request Assessment
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
              <div className="absolute -right-20 -bottom-20 w-96 h-96 border-8 border-white/5 rounded-full pointer-events-none" />
            </div>
            <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-10">
                {METRICS.map(m => (
                  <div key={m.label} className="flex items-end gap-6">
                    <span className="font-headline font-black text-[#0a192f] tracking-tighter leading-none text-3xl md:text-4xl">
                      {m.stat}
                    </span>
                    <div className="pb-1">
                      <p className="font-body text-xs font-bold uppercase tracking-widest text-[#39475f]">{m.label}</p>
                      <p className="font-body text-sm text-[#e31e24] font-semibold">{m.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image banner */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="rounded-2xl overflow-hidden h-[280px] sm:h-[360px] md:h-[420px] relative">
            <img
              alt="Team empowerment"
              className="w-full h-full object-cover object-[center_30%]"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-[#0a192f]/40 to-transparent" />
            <div className="absolute bottom-10 left-10 lg:bottom-12 lg:left-12 max-w-xl">
              <h3 className="font-headline text-white font-bold leading-tight">
                <span className="block text-2xl md:text-3xl">Learning built for real-world performance.</span>
                <span className="block text-base md:text-lg text-white/70 mt-2">Every engagement is tailored. Every outcome is measurable.</span>
              </h3>
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
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#e31e24]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="text-left relative z-10">
              <h3 className="font-headline font-extrabold text-white tracking-tighter mb-2 text-xl sm:text-2xl md:text-3xl">
                Ready to build teams that perform and grow?
              </h3>
              <p className="font-body text-white text-sm sm:text-base">Transform capability into confidence. Strengthen execution. Empower lasting growth.</p>
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
