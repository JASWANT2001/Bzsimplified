import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CLIENTS = [
  {
    id: 'sathyam-grand',
    name: 'Sathyam Grand Resort',
    category: 'Hospitality',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    summary: 'Operational transformation through operations restructuring, food cost optimization, and process standardization, improving efficiency, reducing wastage, and strengthening profitability.',
    voice: 'Business Simplified enabled operational transformation through operations restructuring, food cost optimization, and process standardization, improving efficiency, reducing wastage, and strengthening profitability through scalable business systems.',
    pillars: [
      { icon: 'tune',           title: 'Operations Restructuring', desc: 'Redesigned operational workflows to eliminate inefficiencies and establish scalable processes across the resort.' },
      { icon: 'savings',        title: 'Food Cost Optimization',   desc: 'Implemented structured purchase controls and wastage reduction systems to strengthen profitability.' },
    ],
    metrics: [
      { value: 'F&B',   label: 'Cost Optimized'          },
      { value: 'SOPs',  label: 'Standardized'            },
      { value: 'Scale', label: 'Ready for Growth'        },
    ],
  },
  {
    id: 'leader-mojo',
    name: 'Leader Mojo',
    category: 'Leadership & Consulting',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    summary: 'GTM strategy and market positioning, strengthening market presence, refining messaging, and building a scalable approach to reach, engage, and transform leaders and teams.',
    voice: 'Business Simplified partnered with Leader Mojo to drive Go-To-Market (GTM) strategy and positioning, helping strengthen market presence, refine messaging, and build a scalable approach to reach, engage, and transform leaders and teams effectively.',
    pillars: [
      { icon: 'ads_click',     title: 'GTM Strategy',        desc: 'Developed a structured go-to-market approach to reach and engage leadership audiences at scale.' },
      { icon: 'record_voice_over', title: 'Brand Positioning', desc: 'Refined messaging and positioning to clearly communicate the Leader Mojo value proposition.' },
    ],
    metrics: [
      { value: 'GTM',      label: 'Strategy Deployed'    },
      { value: 'Brand',    label: 'Positioning Refined'  },
      { value: 'Reach',    label: 'Scaled Effectively'   },
    ],
  },
  {
    id: 'palagara-koodai',
    name: 'Palagara Koodai',
    category: 'F&B',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    summary: 'From Logo to Launch, a complete brand journey across all 7 service verticals, transforming a founder\'s vision into a structured, market-ready business.',
    voice: 'What began as an idea from Akash, inspired by his Karaikudi roots and passion for authentic food experiences, evolved into a complete brand journey through Business Simplified. From Logo to Launch, we led the entire process across all 7 service verticals, spanning branding, strategy, operations, market positioning, systems, growth enablement, and launch execution, transforming a vision into a structured, market-ready business.',
    pillars: [
      { icon: 'rocket_launch', title: 'Logo to Launch',       desc: 'End-to-end brand creation and launch execution across all 7 Business Simplified service verticals.' },
      { icon: 'storefront',    title: 'Market-Ready Systems', desc: 'Built operational foundations, market positioning, and growth systems to launch with confidence.' },
    ],
    metrics: [
      { value: '7',        label: 'Service Verticals'    },
      { value: 'Full',     label: 'Brand Journey'        },
      { value: 'Launch',   label: 'Executed End-to-End'  },
    ],
  },
  {
    id: 'muttram',
    name: 'Muttram – The Carnatic Canteen',
    category: 'F&B',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    summary: 'Menu engineering, food costing, and GTM strategy, optimizing profitability, refining pricing, and positioning the brand for sustainable growth while preserving authentic South Indian culinary identity.',
    voice: 'Business Simplified drove the transformation of Muttram through focused work on menu engineering, food costing, and Go-To-Market (GTM) strategy, optimizing profitability, refining pricing structures, and positioning the brand for sustainable growth while preserving the authenticity of South Indian culinary experiences.',
    pillars: [
      { icon: 'restaurant_menu', title: 'Menu Engineering',    desc: 'Restructured the menu for profitability and guest experience while maintaining authentic culinary identity.' },
      { icon: 'trending_up',     title: 'GTM & Pricing',       desc: 'Developed market positioning and refined pricing structures to drive sustainable growth.' },
    ],
    metrics: [
      { value: 'F&B',       label: 'Cost Engineered'       },
      { value: 'GTM',       label: 'Strategy Built'        },
      { value: 'Brand',     label: 'Authentically Scaled'  },
    ],
  },
  {
    id: 'hibiscus-ecr',
    name: 'Hibiscus on ECR',
    category: 'Hospitality',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    summary: 'Full-spectrum operational support, rota management, payroll restructuring, food cost optimization, purchase systems, GTM strategy, and Virtual COO, building operational discipline and enabling scalable growth.',
    voice: 'Business Simplified strengthened hospitality operations at Hibiscus on ECR through rota management, payroll restructuring, food cost optimization, purchase systems implementation, Go-To-Market (GTM) strategy, and virtual COO support, building operational discipline, improving profitability, and enabling scalable growth.',
    pillars: [
      { icon: 'account_tree', title: 'Virtual COO Support',    desc: 'Provided ongoing operational leadership across HR, finance, purchase, and systems as a virtual COO.' },
      { icon: 'savings',      title: 'Operational Discipline', desc: 'Implemented rota management, payroll restructuring, and food cost controls to improve profitability.' },
    ],
    metrics: [
      { value: 'COO',       label: 'Virtual Support'       },
      { value: 'Payroll',   label: 'Restructured'          },
      { value: 'Full',      label: 'Ops Transformation'    },
    ],
  },
  {
    id: 'jp-neuro-spine',
    name: 'JP Neuro Spine Hospital',
    category: 'Healthcare',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    summary: 'Concept to launch, complete healthcare enterprise built from the ground up, covering brand, operations, compliance, recruitment, accounts, GTM, and ongoing Virtual COO support.',
    voice: 'Business Simplified led the complete journey from concept to launch, working directly with the founder doctors to build the vision, brand, and operational foundation of the practice. From logo creation and brand positioning to end-to-end business setup, we executed every critical function, including purchase systems, employee recruitment, accounts management, process implementation, compliance, Go-To-Market (GTM) strategy, and ongoing Virtual COO support, creating a structured, scalable healthcare enterprise designed for sustainable growth.',
    pillars: [
      { icon: 'local_hospital', title: 'Concept to Launch',   desc: 'Led the full journey from vision to operational launch, brand, systems, compliance, and staffing.' },
      { icon: 'account_tree',   title: 'Virtual COO Support', desc: 'Ongoing operational leadership covering accounts, processes, GTM, and enterprise management.' },
    ],
    metrics: [
      { value: 'Full',      label: 'End-to-End Build'     },
      { value: 'GTM',       label: 'Strategy Executed'    },
      { value: 'COO',       label: 'Ongoing Support'      },
    ],
  },
]

export default function WallOfFame() {
  const [expandedId, setExpandedId] = useState(null)
  const toggle = id => setExpandedId(prev => (prev === id ? null : id))
  const navigate = useNavigate()

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
                        onClick={() => toggle(client.id)}
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
