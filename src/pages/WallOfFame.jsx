import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { CLIENTS } from '../data/wallOfFameData'

export default function WallOfFame() {
  const [expandedId, setExpandedId] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Auto-expand + scroll when navigated here from Brand Stories
  useEffect(() => {
    const id = location.state?.expandId
    if (!id) return
    setExpandedId(id)
    setTimeout(() => {
      const el = document.getElementById(`story-${id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }, [location.state])

  const toggle = id => setExpandedId(prev => (prev === id ? null : id))

  const handleReadStory = id => {
    toggle(id)
    setTimeout(() => {
      const hero = document.querySelector('[data-hero="true"]')
      if (hero) {
        const top = hero.getBoundingClientRect().bottom + window.scrollY
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <main className="pt-[82px] min-h-screen bg-[#f2f4f7]">

      {/* ── Hero */}
      <section data-hero="true" className="relative overflow-hidden bg-[#0a192f] py-14 lg:py-20 min-h-[420px] lg:min-h-[480px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/88 to-[#0a192f]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a192f] to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <p className="font-body font-bold text-[14px] tracking-[0.28em] uppercase text-[#e31e24] mb-6">
            Wall of Fame
          </p>
          <h1
            className="font-headline font-black text-white tracking-tight leading-[1.05] mb-6"
          >
            Clients who trusted us to deliver.
          </h1>
          <p className="font-body text-white/45 text-[15px] sm:text-[16px] leading-relaxed max-w-[520px]">
            Real clients, real results, click any card to read their full story.
          </p>
        </div>
        <button
          aria-label="Scroll to content"
          onClick={e => e.currentTarget.closest('[data-hero]')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 group"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">Scroll</span>
          <span className="material-symbols-outlined animate-bounce text-white/40 group-hover:text-white/70 transition-colors" style={{ fontSize: '30px' }}>keyboard_arrow_down</span>
        </button>
      </section>

      {/* ── Back button */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-8">
        <button
          onClick={() => expandedId ? setExpandedId(null) : navigate('/')}
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#0a192f] font-body text-[13px] font-semibold transition-colors group"
        >
          <span className="material-symbols-outlined text-[17px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
          {expandedId ? 'Back to Wall of Fame' : 'Back to Home'}
        </button>
      </div>

      {/* ── Cards */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {CLIENTS.map((client, i) => {
            const isExpanded = expandedId === client.id
            return (
              <article
                key={client.id}
                id={`story-${client.id}`}
                className={`flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 ${
                  isExpanded ? 'md:col-span-3 order-first shadow-xl' : 'order-last hover:-translate-y-1 hover:shadow-md cursor-pointer'
                }`}
              >

                {/* ── Collapsed image */}
                {!isExpanded && (
                  <div
                    className="relative h-[220px] overflow-hidden cursor-pointer"
                    onClick={() => toggle(client.id)}
                  >
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-full h-full object-cover brightness-90 hover:brightness-100 hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/15 backdrop-blur-sm text-white font-body font-bold text-[11px] tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-white/20">
                      {client.category}
                    </span>
                    <span className="absolute top-4 right-4 font-headline font-black text-white/20 text-5xl leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                )}

                {/* ── Collapsed summary */}
                {!isExpanded && (
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-headline font-bold text-[#0a192f] text-[18px] mb-1.5">{client.name}</h3>
                    <p className="font-body text-slate-500 text-[14px] leading-relaxed flex-1 mb-5">{client.summary}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#e31e24] uppercase">{client.category}</span>
                      <button
                        onClick={() => handleReadStory(client.id)}
                        className="flex items-center gap-1.5 text-[13px] font-body font-semibold text-[#0a192f] hover:text-[#e31e24] transition-colors group"
                      >
                        Read Story
                        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0a192f] transition-colors">
                          <span className="material-symbols-outlined text-[12px] text-slate-500 group-hover:text-white transition-colors">add</span>
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* ── Expanded testimonial page */}
                {isExpanded && (
                  <div className="bg-white">

                    {/* Nav bar */}
                    <div className="flex items-center justify-between px-4 md:px-10 py-3.5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#e31e24] shrink-0" />
                        <span className="font-body font-bold text-[11px] uppercase tracking-[0.22em] text-slate-400">{client.videoId ? 'Video Testimonial' : 'Client Story'}</span>
                      </div>
                      <button
                        onClick={() => toggle(client.id)}
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#0a192f] font-body text-[13px] font-semibold transition-colors group shrink-0 ml-3"
                      >
                        <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
                        <span className="hidden sm:inline">Back to all</span>
                      </button>
                    </div>

                    {/* Client identity */}
                    <div className="px-4 md:px-16 lg:px-24 pt-7 pb-5 text-center">
                      <span className="inline-block bg-[#fff0f0] text-[#e31e24] font-body font-bold text-[11px] uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-3">
                        {client.category}
                      </span>
                      <h2 className="font-headline font-black text-[#0a192f] text-xl md:text-3xl tracking-tight">{client.name}</h2>
                    </div>

                    {/* Video, only shown when a videoId exists */}
                    {client.videoId && (
                      <div className="px-0 md:px-10 lg:px-20 pb-6">
                        <div className="relative w-full overflow-hidden bg-black md:rounded-2xl md:shadow-2xl aspect-video lg:max-w-[900px] lg:mx-auto">
                          <iframe
                            key={client.videoId}
                            src={`https://www.youtube.com/embed/${client.videoId}?rel=0&modestbranding=1&playsinline=1&fs=1&color=white`}
                            title={client.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                          />
                        </div>
                      </div>
                    )}

                    {/* Hero image when no video */}
                    {!client.videoId && (
                      <div className="px-0 md:px-10 lg:px-20 pb-6">
                        <div className="w-full overflow-hidden md:rounded-2xl md:shadow-2xl lg:max-w-[900px] lg:mx-auto aspect-video">
                          <img src={client.img} alt={client.name} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}

                    {/* Pull quote */}
                    <div className="px-4 md:px-16 lg:px-28 py-7 bg-[#f7f9fc] text-center">
                      <span className="font-headline font-black text-[#e31e24] text-5xl leading-none block -mb-1">"</span>
                      <p className="font-headline font-bold text-[#0a192f] text-base md:text-xl lg:text-2xl leading-snug tracking-tight max-w-3xl mx-auto">
                        {client.quote}
                      </p>
                      <div className="flex items-center justify-center gap-3 mt-4">
                        <span className="w-8 h-px bg-[#e31e24]" />
                        <span className="font-body font-bold text-[11px] uppercase tracking-[0.25em] text-slate-400">{client.name}</span>
                        <span className="w-8 h-px bg-[#e31e24]" />
                      </div>
                    </div>

                    {/* Metrics strip */}
                    <div className="grid grid-cols-3 divide-x divide-slate-100 border-y border-slate-100">
                      {client.metrics.map((m, idx) => (
                        <div key={m.label} className={`py-5 md:py-7 text-center px-2 ${idx === 1 ? 'bg-[#0a192f]' : 'bg-white'}`}>
                          <div className={`font-headline font-black text-xl sm:text-3xl md:text-4xl mb-1 ${idx === 1 ? 'text-white' : 'text-[#0a192f]'}`}>
                            {m.value}
                          </div>
                          <div className={`font-body text-[10px] sm:text-[11px] uppercase tracking-wider font-bold leading-tight ${idx === 1 ? 'text-white/40' : 'text-slate-400'}`}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Story + Pillars */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

                      {/* Story */}
                      <div className="lg:col-span-3 px-4 md:px-10 py-8">
                        <p className="font-body font-bold text-[11px] uppercase tracking-[0.25em] text-[#e31e24] mb-4">Their Story</p>
                        <p className="font-body text-slate-600 text-[14px] md:text-[16px] leading-[1.85]">{client.voice}</p>
                      </div>

                      {/* Pillars */}
                      <div className="lg:col-span-2 px-4 md:px-10 py-8 bg-[#f7f9fc] flex flex-col gap-5">
                        <p className="font-body font-bold text-[11px] uppercase tracking-[0.25em] text-slate-400">What We Focused On</p>
                        {client.pillars.map(p => (
                          <div key={p.title} className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                              <span className="material-symbols-outlined text-[#e31e24] text-[19px]">{p.icon}</span>
                            </div>
                            <div>
                              <h4 className="font-headline font-bold text-[#0a192f] text-[14px] mb-1">{p.title}</h4>
                              <p className="font-body text-slate-500 text-[13px] leading-relaxed">{p.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA footer */}
                    <div className="px-4 md:px-10 py-7 bg-[#0a192f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="font-headline font-bold text-white text-[16px] mb-1">Want results like these?</p>
                        <p className="font-body text-white/40 text-[13px]">Let's talk about your business goals.</p>
                      </div>
                      <Link
                        to="/contact"
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#e31e24] text-white font-body font-semibold text-[14px] rounded-xl border border-[#e31e24] transition-colors duration-200 hover:bg-transparent hover:text-[#e31e24] group w-full sm:w-auto justify-center"
                      >
                        Start the Conversation
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                      </Link>
                    </div>

                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>

      {/* ── CTA */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="bg-[#0a192f] rounded-2xl px-8 py-10 md:px-14 md:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-headline font-black text-white text-xl md:text-2xl tracking-tight mb-1">
              Ready to build your legacy?
            </h2>
            <p className="font-body text-white/40 text-[14px]">Join the brands that trusted us to transform their operations.</p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3 bg-white text-[#0a192f] font-body font-semibold text-[14px] rounded-xl border-2 border-white transition-colors duration-200 hover:bg-transparent hover:text-white"
          >
            Start Your Story
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </div>

    </main>
  )
}
