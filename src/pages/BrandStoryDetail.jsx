import { useState, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function BrandStoryDetail() {
  const { slug } = useParams()
  const [story, setStory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function fetchStory() {
      if (!supabase) {
        setNotFound(true)
        setLoading(false)
        return
      }
      const { data, error } = await supabase
        .from('brand_stories')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (error || !data) setNotFound(true)
      else setStory(data)
      setLoading(false)
    }
    fetchStory()
  }, [slug])

  if (loading) {
    return (
      <main className="pt-[82px] bg-[#f7f9fc] min-h-screen flex items-center justify-center gap-3">
        <div className="w-5 h-5 border-2 border-[#e31e24] border-t-transparent rounded-full animate-spin" />
        <span className="font-body text-[#75777e] text-sm">Loading story…</span>
      </main>
    )
  }

  if (notFound) return <Navigate to="/brand-stories" replace />

  const tags = Array.isArray(story.tags) ? story.tags : []
  const body = Array.isArray(story.body) ? story.body : []

  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-16 md:pb-24">

        {/* ── Back link */}
        <div className="mb-10">
          <Link
            to="/brand-stories"
            className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#39475f] hover:text-[#0a192f] transition-colors"
          >
            <span className="material-symbols-outlined text-[17px]">arrow_back</span>
            Back to Brand Stories
          </Link>
        </div>

        {/* ── Header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#e31e24] block" />
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.3em] text-[#e31e24]">{story.category}</span>
            </div>
            <h1
              className="font-headline font-extrabold text-[#0a192f] leading-tight tracking-tighter mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
            >
              {story.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 pb-5 border-b border-slate-200">
              {story.published_at && (
                <span className="flex items-center gap-1.5 font-body text-xs text-[#75777e]">
                  <span className="material-symbols-outlined text-[15px] text-slate-400">calendar_today</span>
                  {story.published_at}
                </span>
              )}
              {story.read_time && (
                <span className="flex items-center gap-1.5 font-body text-xs text-[#75777e]">
                  <span className="material-symbols-outlined text-[15px] text-slate-400">schedule</span>
                  {story.read_time}
                </span>
              )}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#39475f] bg-[#eceef1] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author */}
            <div className="flex items-center gap-5 py-4">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-[#b9c7e4]/30 rounded-full blur-sm" />
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                  <img src={story.author_avatar} alt={story.author_name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="inline-block self-start font-body text-[10px] uppercase tracking-[0.2em] text-[#39475f] font-bold mb-1 italic px-2 py-0.5 bg-[#eceef1] rounded">
                  Perspective By
                </span>
                <h4 className="font-headline font-extrabold text-[#0a192f] text-lg leading-none mb-0.5">{story.author_name}</h4>
                <p className="font-body text-xs text-[#75777e] tracking-wide">{story.author_role}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* ── Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Quote */}
            {story.quote && (
              <div className="bg-[#f2f4f7] border-l-4 border-[#e31e24] p-8 relative overflow-hidden">
                <span className="material-symbols-outlined absolute -top-3 -left-3 text-[#e31e24]/10 select-none" style={{ fontSize: '64px', fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <blockquote className="font-headline font-bold text-[#0a192f] text-lg md:text-2xl lg:text-3xl italic leading-snug relative z-10">
                  {story.quote}
                </blockquote>
              </div>
            )}

            {/* Article */}
            <div>
              {story.heading && (
                <h2 className="font-headline font-extrabold text-[#0a192f] text-2xl md:text-3xl mb-6 tracking-tight">{story.heading}</h2>
              )}
              <div className="space-y-5">
                {body.map((para, i) => (
                  <p key={i} className="font-body text-[#5a5e6a] text-base leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Share */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-headline font-bold text-sm text-[#0a192f]">Spread the Insight</h4>
                <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <p className="font-body text-xs text-[#75777e] mb-4 leading-relaxed">Share this story with your professional network on LinkedIn.</p>
              <a
                href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(`📖 "${story.title}" — ${story.category}\n\nA perspective from ${story.author_name}, ${story.author_role} at Bzsimplified.\n\n${story.quote ? story.quote.replace(/^"|"$/g, '') : ''}\n\nRead the full story: ${window.location.href}\n\n#BusinessStrategy #Consulting #Bzsimplified`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0077b5] text-white py-2.5 rounded-lg font-body font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#005e93] transition-colors"
              >
                Share on LinkedIn
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Connect */}
            <div className="bg-[#0a192f] p-6 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-[#e31e24]/20 rounded-xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[#e31e24]" style={{ fontSize: '22px' }}>handshake</span>
                </div>
                <h4 className="font-headline font-bold text-white text-base mb-2">Let's Connect</h4>
                <p className="font-body text-white/50 text-xs mb-6 leading-relaxed">{story.connect}</p>
                <Link
                  to="/contact"
                  className="block w-full bg-[#e31e24] text-white py-3 rounded-lg font-body font-bold text-xs uppercase tracking-widest text-center hover:bg-red-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Bottom CTA */}
        <div className="mt-16 bg-[#0a192f] rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h3 className="font-headline font-extrabold text-white tracking-tighter mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
              Ready to build something lasting?
            </h3>
            <p className="font-body text-white/50 text-base">Transform your business with our consulting expertise.</p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#0a192f] px-10 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-widest hover:bg-[#f7f9fc] transition-colors group"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

      </div>
    </main>
  )
}
