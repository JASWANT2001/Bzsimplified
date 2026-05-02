import { Link, useParams } from 'react-router-dom'

export default function BrandDetail() {
  const { slug } = useParams()

  const name = slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      {/* Hero */}
      <section className="bg-[#0a192f] pt-36 pb-24">
        <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
          <Link
            to="/#wall-of-fame"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white font-body text-xs tracking-widest uppercase mb-10 transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Wall of Fame
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 font-body font-semibold text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full">
              <span className="material-symbols-outlined text-[13px]">check_circle</span>
              Success Story
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight mb-6">
            {name}
          </h1>
          <p className="font-body text-slate-400 text-lg max-w-2xl leading-relaxed">
            Full case study coming soon. Our team is putting together the complete story — challenges, strategy, execution, and results.
          </p>
        </div>
      </section>

      {/* Placeholder body */}
      <section className="py-24">
        <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-[1440px]">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content placeholder */}
            <div className="lg:col-span-2 space-y-8">
              {['The Challenge', 'Our Approach', 'The Outcome'].map(heading => (
                <div key={heading} className="bg-white rounded-2xl p-10 border border-slate-100">
                  <h2 className="text-xl font-headline font-bold text-[#0a192f] mb-4">{heading}</h2>
                  <div className="space-y-3">
                    <div className="h-3 bg-slate-100 rounded-full w-full" />
                    <div className="h-3 bg-slate-100 rounded-full w-5/6" />
                    <div className="h-3 bg-slate-100 rounded-full w-4/5" />
                    <div className="h-3 bg-slate-100 rounded-full w-full" />
                    <div className="h-3 bg-slate-100 rounded-full w-3/4" />
                  </div>
                  <p className="font-body text-slate-400 text-sm mt-6 italic">Content being prepared…</p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0a192f] rounded-2xl p-8 text-white">
                <p className="font-body text-white/40 text-[10px] tracking-widest uppercase mb-4">Key Stats</p>
                {[
                  { label: 'Duration', value: '—' },
                  { label: 'Sector', value: '—' },
                  { label: 'Services Used', value: '—' },
                  { label: 'Outcome', value: '—' },
                ].map(item => (
                  <div key={item.label} className="py-3 border-b border-white/10 last:border-0 flex justify-between">
                    <span className="font-body text-white/50 text-xs">{item.label}</span>
                    <span className="font-body font-semibold text-white/30 text-xs">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-100 text-center">
                <p className="font-body text-slate-500 text-sm mb-5 leading-relaxed">
                  Want results like this for your brand?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a192f] text-white font-body font-semibold text-xs rounded-full hover:bg-[#0f2240] transition-colors duration-200"
                >
                  Let's Talk
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
