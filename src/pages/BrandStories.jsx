import { Link } from 'react-router-dom'

const STORIES = [
  {
    slug: 'streamlining-global-logistics',
    category: 'Operations',
    title: 'Streamlining Global Logistics',
    desc: 'Optimizing supply chain resilience for a Fortune 500 retailer using architectural systems thinking and real-time data modeling.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'the-digital-pivot',
    category: 'Strategy',
    title: 'The Digital Pivot',
    desc: 'Redesigning the core business model for a legacy financial institution to embrace decentralized digital infrastructure and client-centricity.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'incubating-tomorrow',
    category: 'Innovation',
    title: 'Incubating Tomorrow',
    desc: 'Facilitating an R&D framework that accelerated a renewable energy startup from prototype to market leadership in eighteen months.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'enterprise-scaling',
    category: 'Transformation',
    title: 'Enterprise Scaling',
    desc: 'Structural realignment for a European manufacturing giant to enable seamless cross-border collaboration and agile operations.',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'capital-restructuring',
    category: 'Finance',
    title: 'Capital Restructuring',
    desc: 'Guiding a multi-national conglomerate through a complex debt restructuring and equity positioning for a major IPO transition.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'sustainable-foundations',
    category: 'ESG Strategy',
    title: 'Sustainable Foundations',
    desc: 'Embedding decarbonization targets into the core operational DNA of a global logistics provider, achieving 40% emission reduction.',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
  },
]

export default function BrandStories() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Hero */}
      <section data-hero="true" className="relative overflow-hidden bg-[#0a192f] py-14 lg:py-20 min-h-[420px] lg:min-h-[480px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/88 to-[#0a192f]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a192f] to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="mb-6">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#e31e24]">Consulting Excellence</span>
          </div>
          <h1
            className="font-headline font-extrabold tracking-tighter leading-[1.1] text-white mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            Brand Stories
          </h1>
          <p className="font-body text-white/60 text-base sm:text-xl max-w-2xl leading-relaxed">
            Celebrating the visionary organisations and leadership teams that achieved transformative
            growth through precision consulting and strategic engineering.
          </p>
        </div>
        <button
          aria-label="Scroll to content"
          onClick={e => e.currentTarget.closest('[data-hero]')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 group"
        >
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">Scroll</span>
          <span className="material-symbols-outlined animate-bounce text-white/40 group-hover:text-white/70 transition-colors" style={{ fontSize: '30px' }}>keyboard_arrow_down</span>
        </button>
      </section>

      {/* ── Stories Grid */}
      <section className="bg-[#f2f4f7] py-14 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STORIES.map(story => (
              <article
                key={story.title}
                className="group flex flex-col bg-white border-b-4 border-transparent hover:border-[#e31e24] transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={story.img}
                    alt={story.title}
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <span className="font-body text-[#e31e24] font-bold text-[10px] tracking-[0.25em] uppercase mb-4 block">
                    {story.category}
                  </span>
                  <h3 className="font-headline font-extrabold text-[#0a192f] text-xl mb-4 leading-tight tracking-tight">
                    {story.title}
                  </h3>
                  <p className="font-body text-[#5a5e6a] text-sm leading-relaxed mb-8">
                    {story.desc}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/brand-stories/${story.slug}`}
                      className="inline-flex items-center gap-2 font-body font-bold text-sm text-[#0a192f] hover:text-[#e31e24] transition-colors group/link"
                    >
                      Read More
                      <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


    </main>
  )
}
