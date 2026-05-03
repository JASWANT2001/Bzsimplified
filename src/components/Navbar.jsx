import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'About Us',      href: '/', isLink: true },
  { label: 'Services',      hasDropdown: true },
  { label: 'Teams',         href: '/teams', isLink: true },
  { label: 'Partners',      href: '/partners', isLink: true },
  { label: 'Brands',        href: '/#brands'        },
  { label: 'Wall of Fame',  href: '/wall-of-fame', isLink: true },
  { label: 'Brand Stories', href: '/brand-stories', isLink: true },
]

const SERVICES = [
  { stage: 'START', code: 'LB', num: '01', title: 'Launch Your Brand', desc: 'Identity, positioning, and go-to-market.' },
  { stage: 'START', code: 'BB', num: '02', title: 'Build Your Business', desc: 'Legal structure, ops, and funding systems.' },
  { stage: 'START', code: 'ST', num: '03', title: 'Set Up Your Tech', desc: 'Core stack to run and measure your business.' },
  { stage: 'STABILIZE', code: 'PB', num: '04', title: 'Protect Your Brand', desc: 'Trademarks, contracts, and brand governance.' },
  { stage: 'STABILIZE', code: 'FF', num: '05', title: 'Fix Your Finances', desc: 'Books, cash flow, and profitability controls.' },
  { stage: 'STABILIZE', code: 'EC', num: '06', title: 'Ensure Compliance', desc: 'Statutory, regulatory, and internal policy.' },
  { stage: 'SCALE',     code: 'MO', num: '07', title: 'Manage Your Operations', desc: 'SOPs, KPIs, and daily rhythm of execution.' },
  { stage: 'SCALE', code: 'ET', num: '08', title: 'Empower Your Team', desc: 'Org design, hiring, and leadership cadence.' },
  { stage: 'SCALE', code: 'GB', num: '09', title: 'Grow Your Business', desc: 'Expansion strategy, capital, and new markets.' },
]

const STAGES = ['START', 'STABILIZE', 'SCALE']

export default function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [scrolled, setScrolled]             = useState(false)
  const [servicesHovered, setServicesHovered] = useState(false)
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const { pathname } = useLocation()

  const hideTimer = useRef(null)
  const showServices = () => { clearTimeout(hideTimer.current); setServicesHovered(true) }
  const hideServices = () => { hideTimer.current = setTimeout(() => setServicesHovered(false), 180) }

  const light = scrolled || pathname === '/contact' || pathname === '/teams' || pathname === '/partners'
    || pathname === '/wall-of-fame' || pathname === '/privacy-policy' || pathname === '/terms-of-usage'
    || pathname.startsWith('/brand-stories') || pathname.startsWith('/service')

  /* ── close panel on route change */
  useEffect(() => {
    setMobileOpen(false)
    setServicesExpanded(false)
  }, [pathname])

  /* ── body scroll lock */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* ── desktop: close services on outside click */
  useEffect(() => {
    const onOutside = e => {
      if (!e.target.closest('[data-services-menu]')) setServicesHovered(false)
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [])

  /* ── scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const close = () => { setMobileOpen(false); setServicesExpanded(false) }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        light
          ? 'glass-nav border-b border-slate-200/60 shadow-sm'
          : 'bg-[#0a192f]/30 backdrop-blur-md border-b border-white/5'
      }`}>
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-[82px] max-w-[1440px] mx-auto">

          {/* ── Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={close}>
            <div className="relative flex items-end leading-none">
              <span className={`font-headline font-black tracking-tighter transition-colors duration-300 select-none ${
                light ? 'text-[#0a192f]' : 'text-white'
              }`} style={{ fontSize: '2.4rem', lineHeight: 1 }}>B</span>
              <span className="absolute bg-[#e31e24]" style={{ width: 10, height: 10, top: 2, right: -3 }} />
            </div>
            <div className={`w-px self-stretch my-1 transition-colors duration-300 ${light ? 'bg-slate-300' : 'bg-white/30'}`} />
            <div className="flex flex-col justify-center gap-0.5">
              <span className={`font-headline font-extrabold text-[13px] tracking-tight leading-none transition-colors duration-300 ${light ? 'text-[#0a192f]' : 'text-white'}`}>Business</span>
              <span className={`font-headline font-extrabold text-[13px] tracking-tight leading-none transition-colors duration-300 ${light ? 'text-[#0a192f]' : 'text-white'}`}>Simplified</span>
            </div>
          </Link>

          {/* ── Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <div
                key={link.label}
                className="relative"
                data-services-menu={link.hasDropdown ? true : undefined}
                onMouseEnter={() => link.hasDropdown && showServices()}
                onMouseLeave={() => link.hasDropdown && hideServices()}
              >
                {link.hasDropdown ? (
                  <button
                    onClick={() => setServicesHovered(p => !p)}
                    className={`relative font-body font-medium text-[14px] transition-colors duration-150 py-2 inline-flex items-center gap-1 group bg-transparent border-0 cursor-pointer ${
                      light ? 'text-slate-600 hover:text-[#0a192f]' : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className={`material-symbols-outlined text-[14px] transition-transform duration-300 ${servicesHovered ? 'rotate-180' : ''}`}>expand_more</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#0a192f] group-hover:w-full transition-all duration-250 ease-out" />
                  </button>
                ) : link.isLink ? (
                  <Link to={link.href} className={`relative font-body font-medium text-[14px] transition-colors duration-150 py-2 inline-flex items-center gap-1 group ${light ? 'text-slate-600 hover:text-[#0a192f]' : 'text-white/75 hover:text-white'}`}>
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#0a192f] group-hover:w-full transition-all duration-250 ease-out" />
                  </Link>
                ) : (
                  <a href={link.href} className={`relative font-body font-medium text-[14px] transition-colors duration-150 py-2 block group ${light ? 'text-slate-600 hover:text-[#0a192f]' : 'text-white/75 hover:text-white'}`}>
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#0a192f] group-hover:w-full transition-all duration-250 ease-out" />
                  </a>
                )}

                {/* Desktop Services Dropdown */}
                {link.hasDropdown && (
                  <div onMouseEnter={showServices} onMouseLeave={hideServices} className={`fixed top-[82px] left-1/2 -translate-x-1/2 pt-4 bg-transparent transition-all duration-300 ${servicesHovered ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
                    <div className="p-8 min-w-[900px] bg-white rounded-2xl shadow-2xl border border-slate-100">
                      <div className="grid grid-cols-3 gap-8">
                        {STAGES.map(stage => {
                          const stageServices = SERVICES.filter(s => s.stage === stage)
                          return (
                            <div key={stage}>
                              <div className="flex items-center gap-2 mb-6">
                                <div className="w-2 h-2 bg-[#0a192f] rounded-full" />
                                <h4 className="font-headline font-bold text-[#0a192f] text-xs tracking-widest">{stage}</h4>
                                <span className="text-slate-400 font-body text-xs ml-auto">{stageServices[0].num} — {stageServices[stageServices.length - 1].num}</span>
                              </div>
                              <div className="space-y-3">
                                {stageServices.map(service => (
                                  <Link
                                    key={service.code}
                                    to={`/service/${service.code.toLowerCase()}`}
                                    onClick={() => setServicesHovered(false)}
                                    className="group block p-3 rounded-lg hover:bg-slate-50 transition-all duration-200"
                                  >
                                    <div className="flex items-start gap-2">
                                      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 flex-shrink-0 group-hover:bg-[#0a192f] transition-colors duration-300">
                                        <span className="font-headline font-bold text-[9px] text-[#0a192f] group-hover:text-white">{service.code}</span>
                                      </div>
                                      <div className="flex-1">
                                        <p className="font-headline font-bold text-[#0a192f] text-[12px] group-hover:text-[#e31e24] transition-colors">{service.title}</p>
                                        <p className="font-body text-slate-500 text-[10px] leading-tight mt-0.5">{service.desc}</p>
                                      </div>
                                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a192f] transition-colors duration-200">
                                        <span className="material-symbols-outlined text-[11px] text-slate-500 group-hover:text-white transition-colors">arrow_forward</span>
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full font-body font-semibold text-[13px] tracking-wide border transition-all duration-200 group ${
                light
                  ? 'border-[#0a192f] bg-[#0a192f] text-white hover:bg-transparent hover:text-[#0a192f]'
                  : 'border-white/70 bg-transparent text-white hover:bg-white hover:text-[#0a192f] hover:border-white'
              }`}
            >
              Let's Talk
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
            </Link>

            {/* Hamburger */}
            <button
              className={`lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] transition-colors duration-300 ${light ? 'text-[#0a192f]' : 'text-white'}`}
              onClick={() => setMobileOpen(p => !p)}
              aria-label="Toggle navigation"
            >
              <span className={`block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile: Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-[#0a192f]/60 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Mobile: Side panel (slides from right) */}
      <div className={`lg:hidden fixed top-0 right-0 h-full z-[70] w-[78vw] max-w-[340px] bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>

        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-[82px] border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-end leading-none">
              <span className="font-headline font-black tracking-tighter text-[#0a192f] select-none" style={{ fontSize: '1.6rem', lineHeight: 1 }}>B</span>
              <span className="absolute bg-[#e31e24]" style={{ width: 7, height: 7, top: 1, right: -2 }} />
            </div>
            <div className="w-px h-4 bg-slate-200" />
            <span className="font-headline font-extrabold text-[11px] tracking-tight text-[#0a192f] leading-tight">Business<br />Simplified</span>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[#0a192f] text-[18px]">close</span>
          </button>
        </div>

        {/* Scrollable nav area */}
        <div className="flex-1 overflow-y-auto px-5 py-4">

          {/* Regular links + Services accordion */}
          <nav className="space-y-0.5">
            {NAV_LINKS.map(link => (
              <div key={link.label}>
                {link.hasDropdown ? (

                  /* ── Services accordion row */
                  <div>
                    <button
                      onClick={() => setServicesExpanded(p => !p)}
                      className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <span className="font-body font-semibold text-[15px] text-[#0a192f]">Services</span>
                      <span className={`material-symbols-outlined text-[20px] text-slate-400 group-hover:text-[#0a192f] transition-all duration-300 ${servicesExpanded ? 'rotate-180 text-[#0a192f]' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    {/* Expanded services — grouped by stage */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${servicesExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="ml-3 mt-1 mb-3 border-l-2 border-slate-100 pl-3">
                        {STAGES.map(stage => (
                          <div key={stage} className="mb-3">
                            {/* Stage label */}
                            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e31e24] px-2 py-1.5">
                              {stage}
                            </p>
                            {/* Service links */}
                            {SERVICES.filter(s => s.stage === stage).map(s => (
                              <Link
                                key={s.code}
                                to={`/service/${s.code.toLowerCase()}`}
                                onClick={close}
                                className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                              >
                                <span className="font-headline font-black text-[9px] text-slate-300 group-hover/item:text-[#0a192f] w-5 shrink-0 transition-colors">
                                  {s.num}
                                </span>
                                <span className="font-body text-[13px] text-slate-600 group-hover/item:text-[#0a192f] transition-colors leading-snug flex-1">
                                  {s.title}
                                </span>
                                <span className="material-symbols-outlined text-[15px] text-slate-300 group-hover/item:text-[#e31e24] transition-colors shrink-0">arrow_forward</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                ) : link.isLink ? (
                  <Link
                    to={link.href}
                    onClick={close}
                    className="flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <span className="font-body font-semibold text-[15px] text-[#0a192f]">{link.label}</span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0a192f] transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[13px] text-slate-500 group-hover:text-white transition-colors">arrow_forward</span>
                    </span>
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <span className="font-body font-semibold text-[15px] text-[#0a192f]">{link.label}</span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0a192f] transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[13px] text-slate-500 group-hover:text-white transition-colors">arrow_forward</span>
                    </span>
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Panel footer — CTA */}
        <div className="shrink-0 px-5 pb-8 pt-4 border-t border-slate-100">
          <Link
            to="/contact"
            onClick={close}
            className="flex items-center justify-center gap-2 w-full bg-[#0a192f] text-white px-6 py-3.5 rounded-xl font-body font-semibold text-[14px] hover:bg-[#0e2340] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#e31e24] shrink-0" />
            Let's Talk
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

      </div>
    </>
  )
}
