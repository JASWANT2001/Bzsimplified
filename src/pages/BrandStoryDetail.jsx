import { Link, useParams, Navigate } from 'react-router-dom'
import { BRAND_STORIES } from '../data/brandStoriesData'

// import { useState, useEffect } from 'react'
// import { supabase } from '../lib/supabase'
//
// Supabase fetch (commented out — using static data)
// const { data, error } = await supabase
//   .from('brand_stories').select('*').eq('slug', slug).eq('published', true).single()

export default function BrandStoryDetail() {
  const { slug } = useParams()
  const story = BRAND_STORIES.find(s => s.slug === slug)

  if (!story) return <Navigate to="/brand-stories" replace />

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
            Brand Stories
          </p>
          <h1 className="font-headline font-black text-white tracking-tight leading-[1.05] mb-6">
            {story.title}
          </h1>
          <p className="font-body text-white/45 text-[15px] sm:text-[16px] leading-relaxed max-w-[520px]">
            {story.description}
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
        <Link
          to="/brand-stories"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#0a192f] font-body text-[13px] font-semibold transition-colors group"
        >
          <span className="material-symbols-outlined text-[17px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
          Back to Brand Stories
        </Link>
      </div>

      {/* ── Story card */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10">
        <article className="bg-white rounded-2xl overflow-hidden shadow-xl">

          {/* Nav bar */}
          <div className="flex items-center justify-between px-4 md:px-10 py-3.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e31e24] shrink-0" />
              <span className="font-body font-bold text-[11px] uppercase tracking-[0.22em] text-slate-400">Client Story</span>
            </div>
            <div className="flex items-center gap-4 shrink-0 ml-3">
              {story.published_at && (
                <span className="hidden sm:flex items-center gap-1.5 font-body text-[11px] text-slate-400">
                  <span className="material-symbols-outlined text-[13px]">calendar_today</span>
                  {story.published_at}
                </span>
              )}
              {story.read_time && (
                <span className="hidden sm:flex items-center gap-1.5 font-body text-[11px] text-slate-400">
                  <span className="material-symbols-outlined text-[13px]">schedule</span>
                  {story.read_time}
                </span>
              )}
            </div>
          </div>

          {/* Client identity */}
          <div className="px-4 md:px-16 lg:px-24 pt-7 pb-5 text-center">
            <span className="inline-block bg-[#fff0f0] text-[#e31e24] font-body font-bold text-[11px] uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-3">
              {story.category}
            </span>
            <h2 className="font-headline font-black text-[#0a192f] text-xl md:text-3xl tracking-tight">{story.title}</h2>
          </div>

          {/* Hero image */}
          <div className="px-0 md:px-10 lg:px-20 pb-6">
            <div className="w-full overflow-hidden md:rounded-2xl md:shadow-2xl lg:max-w-[900px] lg:mx-auto aspect-video">
              <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Pull quote */}
          <div className="px-4 md:px-16 lg:px-28 py-7 bg-[#f7f9fc] text-center">
            <span className="font-headline font-black text-[#e31e24] text-5xl leading-none block -mb-1">"</span>
            <p className="font-headline font-bold text-[#0a192f] text-base md:text-xl lg:text-2xl leading-snug tracking-tight max-w-3xl mx-auto">
              {story.quote}
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="w-8 h-px bg-[#e31e24]" />
              <span className="font-body font-bold text-[11px] uppercase tracking-[0.25em] text-slate-400">{story.author_name}</span>
              <span className="w-8 h-px bg-[#e31e24]" />
            </div>
          </div>

          {/* Metrics strip */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 border-y border-slate-100">
            {story.metrics.map((m, idx) => (
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
              <div className="space-y-4">
                {story.body.map((para, i) => (
                  <p key={i} className="font-body text-slate-600 text-[14px] md:text-[16px] leading-[1.85]">{para}</p>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md shrink-0">
                  <img src={story.author_avatar} alt={story.author_name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-headline font-bold text-[#0a192f] text-[14px] leading-none mb-1">{story.author_name}</p>
                  <p className="font-body text-slate-400 text-[12px]">{story.author_role}</p>
                </div>
              </div>

              {/* Tags */}
              {story.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {story.tags.map(tag => (
                    <span key={tag} className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#39475f] bg-[#eceef1] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Pillars */}
            <div className="lg:col-span-2 px-4 md:px-10 py-8 bg-[#f7f9fc] flex flex-col gap-5">
              <p className="font-body font-bold text-[11px] uppercase tracking-[0.25em] text-slate-400">What We Focused On</p>
              {story.pillars.map(p => (
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

              {/* Share */}
              <div className="mt-auto pt-6 border-t border-slate-200">
                <p className="font-body font-bold text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">Share This Story</p>
                <a
                  href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(`"${story.quote}"\n\n— ${story.author_name}, ${story.author_role}\n\n#BusinessStrategy #Consulting #Bzsimplified`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2.5 rounded-lg font-body font-bold text-[12px] hover:bg-[#005e93] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Share on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* CTA footer */}
          <div className="px-4 md:px-10 py-7 bg-[#0a192f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-headline font-bold text-white text-[16px] mb-1">Want results like these?</p>
              <p className="font-body text-white/40 text-[13px]">{story.connect}</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#e31e24] text-white font-body font-semibold text-[14px] rounded-xl border border-[#e31e24] transition-colors duration-200 hover:bg-transparent hover:text-[#e31e24] group w-full sm:w-auto justify-center"
            >
              Start the Conversation
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </Link>
          </div>

        </article>
      </div>

      {/* ── Bottom CTA */}
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
