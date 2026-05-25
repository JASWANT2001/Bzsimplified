import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TEAM = [
  {
    id: '01',
    name: 'Kalyan',
    role: 'Founder & CEO',
    dept: 'Leadership',
    bio: 'Kalyan is a business growth consultant and strategic advisor with 25+ years of experience helping organizations simplify complexity, build scalable structures, and drive sustainable growth. Through Business Simplified, he partners with founders and leaders to turn ambition into execution and strategy into measurable outcomes. His expertise spans business strategy, operational excellence, retail ecosystems, organizational development, and leadership enablement, combining clarity with execution to deliver lasting impact.',
    philosophy: 'Simplify operations. Strengthen execution. Scale with confidence.',
    expertise: ['Business Strategy', 'Operational Excellence', 'Leadership Enablement'],
    photo: 'https://ik.imagekit.io/ux5g9gl0h/bottom_left.png',
    photoPosition: 'center calc(35% + 10px)',
    flip: false,
  },
  {
    id: '02',
    name: 'Sunil Jose',
    role: 'Consultant – IP & Copyright',
    dept: 'Legal & IP',
    bio: 'Sunil is a strategic advisor on Intellectual Property (IP) Advisory at Business Simplified, helping founders and businesses protect brands, ideas, and creative assets through strategic trademark and copyright solutions. With expertise in IP law and legal advisory, he enables organizations to secure intellectual assets and strengthen long-term business value.',
    philosophy: 'Protect ideas. Secure brands. Strengthen value.',
    expertise: ['IP Advisory', 'Trademark & Copyright', 'Legal Advisory'],
    photo: 'https://ik.imagekit.io/ux5g9gl0h/sunil%20jose.png',
    flip: true,
  },
  {
    id: '03',
    name: 'Arunkumar Rajaram',
    role: 'Learning & Training Excellence Lead',
    dept: 'Learning & Development',
    bio: 'Arun leads Training and Capability Development at Business Simplified, helping individuals and organizations build skills that drive performance, leadership, and long-term growth. Through practical, impact-focused learning, he enables teams to strengthen capabilities and translate learning into action.',
    philosophy: 'Develop people. Strengthen capabilities. Enable growth.',
    expertise: ['Training & Development', 'Capability Building', 'Leadership Development'],
    photo: 'https://ik.imagekit.io/ux5g9gl0h/top_left.png',
    photoPosition: 'center top',
    flip: false,
  },
  {
    id: '04',
    name: 'Dinesh',
    role: 'Financial Strategy & Project Funding Lead',
    dept: 'Finance',
    bio: 'Dinesh leads Financial Restructuring and Project Funding Solutions at Business Simplified, helping businesses strengthen financial foundations, optimize structures, and unlock growth through strategic funding support. With expertise in financial planning, restructuring, and capital facilitation, he enables organizations to improve financial health, secure funding, and scale with confidence.',
    philosophy: 'Strengthen finances. Unlock funding. Enable growth.',
    expertise: ['Financial Restructuring', 'Project Funding', 'Capital Facilitation'],
    photo: 'https://ik.imagekit.io/ux5g9gl0h/top_right.png',
    photoPosition: '30% top',
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

function PhotoCard({ flip, photo, name, photoPosition = 'center top' }) {
  return (
    <div className="relative h-[380px] sm:h-[440px] lg:h-[480px]">
      <div
        className="absolute inset-0 bg-[#e31e24]/8 rounded-xl"
        style={{ transform: flip ? 'translate(-8px, 8px)' : 'translate(8px, 8px)' }}
      />
      <div className="relative h-full bg-white rounded-xl overflow-hidden border border-[#0a192f]/8">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
            style={{ objectPosition: photoPosition }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#0a192f]/10" style={{ fontSize: '72px' }}>person</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a192f]/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e31e24]" />
      </div>
    </div>
  )
}

function MemberSection({ member }) {
  const { id, name, role, dept, bio, philosophy, expertise, photo, photoPosition, flip } = member

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

          {/* Photo */}
          <div className="w-full lg:w-5/12">
            <PhotoCard flip={flip} photo={photo} name={name} photoPosition={photoPosition} />
          </div>

          {/* Content */}
          <div className="lg:w-7/12 w-full">
            {/* Eyebrow row: number + dept */}
            <div className="flex items-center gap-3 mb-7">
              <span className="font-headline font-black text-[#e31e24] text-xl leading-none">{id}</span>
              <span className="h-px w-8 bg-slate-200" />
              <span className="font-body font-bold text-[11px] tracking-[0.22em] uppercase text-slate-400">{dept}</span>
            </div>

            <h2
              className="font-headline font-black text-[#0a192f] tracking-tight leading-none mb-3"
            >
              {name}
            </h2>
            <p className="font-body font-bold text-[#e31e24] text-[12px] tracking-[0.22em] uppercase mb-8">
              {role}
            </p>

            <p className="font-body text-slate-500 text-[16px] leading-[1.9] mb-7 max-w-[520px]">
              {bio}
            </p>

            {/* Philosophy / focus line */}
            <div className="flex items-start gap-3 mb-8 pl-4 border-l-[3px] border-[#e31e24]">
              <p className="font-body font-semibold text-[#0a192f] text-[14px] leading-relaxed italic">
                {philosophy}
              </p>
            </div>

            {/* Expertise pills */}
            <div className="flex flex-wrap gap-2 mb-9">
              {expertise.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-slate-200 font-body font-semibold text-[12px] text-[#0a192f] tracking-wide cursor-default hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all duration-200"
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
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0a192f] text-white font-body font-semibold text-[14px] rounded-full border border-[#0a192f] transition-all duration-200 hover:bg-transparent hover:text-[#0a192f]"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                WhatsApp
              </a>
              <a
                href="tel:+919841027220"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0a192f] border border-[#0a192f] font-body font-semibold text-[14px] rounded-full transition-all duration-200 hover:bg-transparent hover:text-[#0a192f]"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                Call
              </a>
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
        {/* Dark gradient overlay, keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/88 to-[#0a192f]/60" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a192f] to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <p className="font-body font-bold text-[14px] tracking-[0.28em] uppercase text-[#e31e24] mb-6">
            Our People
          </p>
          <h1
            className="font-headline font-black text-white tracking-tight leading-[1.05] mb-6"
          >
            The minds behind every move
          </h1>
          <p className="font-body text-white/45 text-[15px] sm:text-[16px] leading-relaxed mb-8 md:mb-10 max-w-[520px]">
            A lean team of operators, strategists, and builders, who've built, scaled, and fixed businesses across industries.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#team"
              onClick={e => { e.preventDefault(); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a192f] font-body font-semibold text-[14px] rounded-xl border border-white transition-all duration-200 hover:bg-transparent hover:text-white group"
            >
              Meet the Team
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-body font-semibold text-[14px] rounded-xl transition-all duration-200 hover:bg-transparent hover:text-white"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              Get in Touch
            </Link>
          </div>
        </div>
        <button
          aria-label="Scroll to content"
          onClick={e => e.currentTarget.closest('[data-hero]')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 group"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">Scroll</span>
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
