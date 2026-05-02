import { Link } from 'react-router-dom'

const PARTNERS = [
  {
    name: 'Equinox Labs',
    category: 'Research & Quality',
    icon: 'science',
    accent: '#e31e24',
    description:
      'Setting the gold standard in analytical excellence. Providing rigorous quality controls and specialised laboratory services that empower data-driven decision-making processes.',
    cta: 'Explore Collaboration',
  },
  {
    name: 'Haboteck',
    category: 'IT Infrastructure',
    icon: 'memory',
    accent: '#0a192f',
    description:
      'Global scale IT AMC service provider. Optimising operational continuity through precision engineering in servers, networks, and enterprise storage across multiple continents.',
    cta: 'Infrastructure Specs',
  },
  {
    name: 'Purple Infotech',
    category: 'Digital Transformation',
    icon: 'cloud_done',
    accent: '#e31e24',
    description:
      'A premier Salesforce and Odoo Gold Partner, catalysing enterprise-wide digital transformation through seamless ERP integration and specialised cloud consulting.',
    cta: 'View Portfolio',
  },
]

const STANDARDS = [
  {
    icon: 'verified',
    title: 'Domain Expertise',
    desc: 'Proven leadership and documented success within a specialised industry vertical or technological domain.',
    large: true,
  },
  {
    icon: 'architecture',
    title: 'Operational Rigor',
    desc: 'Adherence to international quality standards and robust internal governance processes.',
    large: false,
  },
  {
    icon: 'hub',
    title: 'Integration Synergy',
    desc: 'Technical and cultural compatibility with the Bzsimplified ecosystem to ensure seamless client delivery.',
    large: false,
  },
  {
    icon: 'groups_3',
    title: 'Strategic Alignment',
    desc: 'A long-term commitment to ethical consulting and sustainable business transformation practices.',
    wide: true,
  },
]

export default function Partners() {
  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">

      {/* ── Hero */}
      <section className="relative overflow-hidden bg-[#0a192f] py-14 lg:py-20 min-h-[420px] lg:min-h-[480px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate lobby"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/70 to-[#0a192f]/90" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(227,30,36,0.06) 10px, rgba(227,30,36,0.06) 20px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <h1
            className="font-headline font-extrabold tracking-tighter leading-none text-white mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Collaborating<br />
            <span className="text-[#b9c7e4]">for Excellence.</span>
          </h1>
          <p className="font-body text-white/60 text-xl max-w-xl leading-relaxed">
            Forging powerful connections with industry leaders to deliver unprecedented value
            and transformative solutions across the global consulting landscape.
          </p>
        </div>
      </section>

      {/* ── Partners Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-24 relative">
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#75777e 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }}
        />

        <div className="relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-[2px] w-10 bg-[#e31e24]" />
              <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#39475f]">Network Ecosystem</span>
            </div>
            <h2
              className="font-headline font-extrabold tracking-tighter text-[#0a192f]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
            >
              Our Strategic Domain Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARTNERS.map(p => (
              <div key={p.name} className="group bg-white border border-slate-200 rounded-xl p-10 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
                style={{ borderTop: `4px solid ${p.accent}` }}
              >
                <div
                  className="absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl transition-colors duration-500 pointer-events-none"
                  style={{ background: `${p.accent}08` }}
                />
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-[#f2f4f7] rounded-xl">
                    <span className="material-symbols-outlined" style={{ fontSize: '40px', color: p.accent, fontVariationSettings: "'FILL' 1" }}>
                      {p.icon}
                    </span>
                  </div>
                  <span className="font-body text-[10px] font-black text-[#75777e] uppercase tracking-[0.35em] pt-2">{p.category}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline font-extrabold text-[#0a192f] text-2xl mb-4 tracking-tighter">{p.name}</h3>
                  <p className="font-body text-[#5a5e6a] text-sm leading-relaxed">{p.description}</p>
                </div>
                <div className="mt-10 pt-6 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-body font-bold text-sm text-[#0a192f] hover:gap-3 transition-all duration-200"
                  >
                    {p.cta}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Selection Standards */}
      <section className="bg-[#0a192f] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(227,30,36,0.1) 10px, rgba(227,30,36,0.1) 20px)' }}
        />

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* Header column */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-10 bg-[#e31e24]" />
                <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-white/50">How We Collaborate</span>
              </div>
              <h2
                className="font-headline font-extrabold tracking-tighter text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Partner Selection Standards
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed">
                Our network is built on a foundation of uncompromising quality and shared vision.
                We partner only with those who meet our rigorous standards for excellence.
              </p>
            </div>

            {/* Standards cards */}
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Domain Expertise — tall */}
              <div className="group md:row-span-2 p-10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] transition-all duration-500 flex flex-col justify-between relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#e31e24]/10 rounded-full blur-3xl group-hover:bg-[#e31e24]/20 transition-all pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-8 border border-white/20">
                    <span className="material-symbols-outlined text-[#e31e24]" style={{ fontSize: '30px' }}>verified</span>
                  </div>
                  <h4 className="font-headline font-bold text-white text-xl mb-3 tracking-tight">Domain Expertise</h4>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    Proven leadership and documented success within a specialised industry vertical or technological domain.
                  </p>
                </div>
                <span className="material-symbols-outlined text-white/5 mt-8 group-hover:text-white/10 transition-colors" style={{ fontSize: '56px' }}>verified</span>
              </div>

              {/* Operational Rigor */}
              <div className="group p-8 bg-white/5 border-l-4 border-l-[#e31e24] border-y border-r border-white/10 rounded-xl hover:bg-white/[0.08] transition-all">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/10 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-[#e31e24]" style={{ fontSize: '22px' }}>architecture</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-white text-base mb-2">Operational Rigor</h4>
                    <p className="font-body text-white/50 text-sm leading-relaxed">
                      Adherence to international quality standards and robust internal governance processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Integration Synergy */}
              <div className="group p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/[0.08] transition-all relative overflow-hidden">
                <span className="material-symbols-outlined absolute top-3 right-3 text-white/5" style={{ fontSize: '52px' }}>hub</span>
                <div className="relative z-10">
                  <h4 className="font-headline font-bold text-white text-base mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e31e24]" style={{ fontSize: '20px' }}>hub</span>
                    Integration Synergy
                  </h4>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    Technical and cultural compatibility with the Bzsimplified ecosystem to ensure seamless client delivery.
                  </p>
                </div>
              </div>

              {/* Strategic Alignment — wide */}
              <div className="md:col-span-2 group p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center gap-6 hover:bg-white/[0.08] transition-all">
                <div className="shrink-0 w-16 h-16 bg-[#e31e24]/10 rounded-full flex items-center justify-center border border-[#e31e24]/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#e31e24]" style={{ fontSize: '32px' }}>groups_3</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-white text-base mb-2">Strategic Alignment</h4>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    A long-term commitment to ethical consulting and sustainable business transformation practices.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="bg-[#0a192f] rounded-2xl px-10 py-10 lg:px-14 lg:py-12 text-center relative overflow-hidden">
          <div className="absolute bottom-[-20%] right-[-5%] w-80 h-80 bg-[#e31e24]/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2
              className="font-headline font-extrabold tracking-tighter mb-3 text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
            >
              Ready to scale your influence?
            </h2>
            <p className="font-body text-white/50 text-base mb-8 max-w-md mx-auto">
              Join our elite network and help redefine consulting excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="bg-white text-[#0a192f] px-8 py-3 rounded-lg font-body font-bold text-sm uppercase tracking-widest hover:bg-[#f7f9fc] transition-colors"
              >
                Become a Partner
              </Link>
              <Link
                to="/#partners"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-body font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
