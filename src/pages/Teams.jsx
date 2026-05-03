import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TEAM = [
  {
    id: '01',
    name: 'Kalyan',
    role: 'Founder & Managing Director',
    dept: 'Leadership',
    bio: 'An alumnus of the Indian School of Business (ISB), Kalyan brings over 18 years of cross-functional expertise across Retail, Real Estate, Food & Beverage, and Technology. As a former CEO of a multi-million dollar business, he specialises in steering complex organisations through pivotal growth phases with architectural precision.',
    expertise: ['Strategic Leadership', 'Business Transformation', 'Market Expansion'],
    website: 'kalyan.com',
    flip: false,
  },
  {
    id: '02',
    name: 'Sunil Jose',
    role: 'Director – Growth & Strategy',
    dept: 'Strategy',
    bio: 'With an MBA from a premier institute and over 15 years of experience across high-growth startups and established corporations, Sunil specialises in market-entry strategies and operational scaling. His editorial approach ensures every tactical move aligns with long-term brand integrity and sustainable profitability.',
    expertise: ['GTM Strategy', 'Growth Hacking', 'Corporate Venture'],
    flip: true,
  },
  {
    id: '03',
    name: 'Dinesh',
    role: 'Head of Operations & Logistics',
    dept: 'Operations',
    bio: 'Dinesh is the operational anchor of Bzsimplified. With a deep background in supply chain management and lean operations, he has optimised logistics for national retail chains. His focus is on the "Sustainable" side of Sustainable Scale — ensuring backend infrastructure is as sophisticated as the front-end brand promise.',
    expertise: ['Supply Chain', 'Operational Excellence', 'Efficiency Audit'],
    flip: false,
  },
  {
    id: '04',
    name: 'Sanal',
    role: 'Lead – Technology & Integration',
    dept: 'Technology',
    bio: "Sanal bridges the gap between vision and execution through technology. With a background in software architecture and digital transformation, he ensures our clients' tech stacks are robust, scalable, and intuitive — approached with an editorial eye for simplicity and performance.",
    expertise: ['Digital Transformation', 'SaaS Integration', 'Tech Roadmap'],
    flip: true,
  },
]


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function PhotoCard({ flip }) {
  return (
    <div className="relative h-full min-h-[240px] sm:min-h-[280px]">
      <div
        className="absolute inset-0 bg-[#e31e24]/8 rounded-xl"
        style={{ transform: flip ? 'translate(-8px, 8px)' : 'translate(8px, 8px)' }}
      />
      <div className="relative h-full bg-gradient-to-br from-[#0a192f]/8 to-[#0a192f]/3 rounded-xl overflow-hidden border border-[#0a192f]/8">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a192f]/15 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#0a192f]/10" style={{ fontSize: '72px' }}>person</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e31e24]" />
      </div>
    </div>
  )
}

function MemberSection({ member }) {
  const { id, name, role, dept, bio, expertise, website, flip } = member

  return (
    <section className={`relative py-14 md:py-24 overflow-hidden reveal ${flip ? 'bg-white' : 'bg-slate-50/80'}`}>
      {/* Watermark number */}
      <span
        className="absolute font-headline font-black select-none pointer-events-none leading-none text-[#0a192f]/[0.03]"
        style={{
          fontSize: 'clamp(8rem, 18vw, 16rem)',
          top: '10%',
          [flip ? 'left' : 'right']: '-1rem',
        }}
      >
        {id}
      </span>

      {/* Thin red side accent */}
      <div
        className="absolute top-1/3 bottom-1/3 w-[3px] bg-[#e31e24]/25"
        style={{ [flip ? 'right' : 'left']: 0 }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 ${flip ? 'lg:flex-row-reverse' : ''}`}>

          {/* Photo — full width, height matches content */}
          <div className="w-full lg:w-5/12">
            <PhotoCard flip={flip} />
          </div>

          {/* Content */}
          <div className="lg:w-7/12 w-full">
            {/* Eyebrow row: number + dept */}
            <div className="flex items-center gap-3 mb-7">
              <span className="font-headline font-black text-[#e31e24] text-xl leading-none">{id}</span>
              <span className="h-px w-8 bg-slate-200" />
              <span className="font-body font-bold text-[10px] tracking-[0.22em] uppercase text-slate-400">{dept}</span>
            </div>

            <h2
              className="font-headline font-black text-[#0a192f] tracking-tight leading-none mb-3"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
            >
              {name}
            </h2>
            <p className="font-body font-bold text-[#e31e24] text-[11px] tracking-[0.22em] uppercase mb-8">
              {role}
            </p>

            <p className="font-body text-slate-500 text-[15px] leading-[1.9] mb-9 max-w-[520px]">
              {bio}
            </p>

            {/* Expertise pills (rounded — different from reference's square chips) */}
            <div className="flex flex-wrap gap-2 mb-9">
              {expertise.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-slate-200 font-body font-semibold text-[11px] text-[#0a192f] tracking-wide cursor-default hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0a192f] text-white font-body font-semibold text-[13px] rounded-full border-l-[3px] border-[#e31e24] hover:shadow-[0_8px_28px_rgba(10,25,47,0.28)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[15px]">chat</span>
                WhatsApp
              </a>
              <a
                href="tel:+910000000000"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0a192f] border border-slate-200 font-body font-semibold text-[13px] rounded-full hover:border-[#0a192f] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[15px]">call</span>
                Call
              </a>
              {website && (
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[#0a192f] border border-slate-200 bg-white font-body font-semibold text-[13px] rounded-full hover:border-[#0a192f] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-[15px]">language</span>
                  {website}
                </a>
              )}
              <button className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[#0a192f] font-body font-bold text-[13px] group hover:text-[#e31e24] transition-colors duration-200">
                Insights
                <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function Teams() {
  useReveal()

  return (
    <div className="pt-[82px]">

      {/* ── Hero */}
      <div data-hero="true" className="relative bg-[#0a192f] overflow-hidden py-14 lg:py-20 min-h-[420px] lg:min-h-[480px]">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/88 to-[#0a192f]/60" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a192f] to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <p className="font-body font-bold text-[13px] tracking-[0.28em] uppercase text-[#e31e24] mb-6">
            Our People
          </p>
          <h1
            className="font-headline font-black text-white tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 4.2rem)' }}
          >
            The minds behind every move
          </h1>
          <p className="font-body text-white/45 text-[14px] sm:text-[15px] leading-relaxed mb-8 md:mb-10 max-w-[520px]">
            A lean team of operators, strategists, and builders — who've built, scaled, and fixed businesses across industries.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#team"
              onClick={e => { e.preventDefault(); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a192f] font-body font-semibold text-[13px] rounded-xl hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
            >
              Meet the Team
              <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 font-body font-semibold text-[13px] rounded-xl hover:bg-white/8 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              Get in Touch
            </Link>
          </div>
        </div>
        <button
          aria-label="Scroll to content"
          onClick={e => e.currentTarget.closest('[data-hero]')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 group"
        >
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">Scroll</span>
          <span className="material-symbols-outlined animate-bounce text-white/40 group-hover:text-white/70 transition-colors" style={{ fontSize: '30px' }}>keyboard_arrow_down</span>
        </button>
      </div>

      {/* ── Team sections */}
      <div id="team">
        {TEAM.map(member => (
          <MemberSection key={member.id} member={member} />
        ))}
      </div>


    </div>
  )
}
