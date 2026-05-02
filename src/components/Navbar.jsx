import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'About Us',      href: '/', isLink: true },
  { label: 'Services',      hasDropdown: true },
  { label: 'Teams',         href: '/teams', isLink: true },
  { label: 'Partners',      href: '/partners', isLink: true },
  { label: 'Brands',        href: '/#brands'        },
  { label: 'Wall of Fame',  href: '/#industries'    },
  { label: 'Brand Stories', href: '/brand-stories', isLink: true },
]

const SERVICES = [
  { stage: 'START', code: 'LB', num: '01', title: 'Launch Your Brand', desc: 'Identity, positioning, and go-to-market.' },
  { stage: 'START', code: 'BB', num: '02', title: 'Build Your Business', desc: 'Legal structure, ops, and funding systems.' },
  { stage: 'START', code: 'ST', num: '03', title: 'Set Up Your Tech', desc: 'Core stack to run and measure your business.' },
  { stage: 'STABILIZE', code: 'PB', num: '04', title: 'Protect Your Brand', desc: 'Trademarks, contracts, and brand governance.' },
  { stage: 'STABILIZE', code: 'FF', num: '05', title: 'Fix Your Finances', desc: 'Books, cash flow, and profitability controls.' },
  { stage: 'STABILIZE', code: 'EC', num: '06', title: 'Ensure Compliance', desc: 'Statutory, regulatory, and internal policy.' },
  { stage: 'STABILIZE', code: 'MO', num: '07', title: 'Manage Your Operations', desc: 'SOPs, KPIs, and daily rhythm of execution.' },
  { stage: 'SCALE', code: 'ET', num: '08', title: 'Empower Your Team', desc: 'Org design, hiring, and leadership cadence.' },
  { stage: 'SCALE', code: 'GB', num: '09', title: 'Grow Your Business', desc: 'Expansion strategy, capital, and new markets.' },
]


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [servicesHovered, setServicesHovered] = useState(false)
  const { pathname } = useLocation()
  const light = scrolled || pathname === '/contact' || pathname === '/teams' || pathname === '/partners' || pathname.startsWith('/brand-stories') || pathname.startsWith('/service')

  useEffect(() => {
    const onOutside = e => {
      if (!e.target.closest('[data-services-menu]')) setServicesHovered(false)
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [])

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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      light
        ? 'glass-nav border-b border-slate-200/60 shadow-sm'
        : 'bg-[#0a192f]/30 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-[82px] max-w-[1440px] mx-auto">

        {/* ── Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          {/* B mark */}
          <div className="relative flex items-end leading-none">
            <span className={`font-headline font-black tracking-tighter transition-colors duration-300 select-none ${
              light ? 'text-[#0a192f]' : 'text-white'
            }`} style={{ fontSize: '2.4rem', lineHeight: 1 }}>B</span>
            {/* Red square — top-right of the B */}
            <span
              className="absolute bg-[#e31e24]"
              style={{ width: 10, height: 10, top: 2, right: -3 }}
            />
          </div>

          {/* Divider */}
          <div className={`w-px self-stretch my-1 transition-colors duration-300 ${
            light ? 'bg-slate-300' : 'bg-white/30'
          }`} />

          {/* Word-mark */}
          <div className="flex flex-col justify-center gap-0.5">
            <span className={`font-headline font-extrabold text-[13px] tracking-tight leading-none transition-colors duration-300 ${
              light ? 'text-[#0a192f]' : 'text-white'
            }`}>Business</span>
            <span className={`font-headline font-extrabold text-[13px] tracking-tight leading-none transition-colors duration-300 ${
              light ? 'text-[#0a192f]' : 'text-white'
            }`}>Simplified</span>
          </div>
        </Link>

        {/* ── Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <div
              key={link.label}
              className="relative"
              data-services-menu={link.hasDropdown ? true : undefined}
              onMouseEnter={() => link.hasDropdown && setServicesHovered(true)}
              onMouseLeave={() => link.hasDropdown && setServicesHovered(false)}
            >
              {link.hasDropdown ? (
                <button
                  onClick={() => setServicesHovered(p => !p)}
                  className={`relative font-body font-medium text-[14px] transition-colors duration-150 py-2 inline-flex items-center gap-1 group bg-transparent border-0 cursor-pointer ${
                    light ? 'text-slate-600 hover:text-[#0a192f]' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`material-symbols-outlined text-[14px] transition-transform duration-300 ${servicesHovered ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#0a192f] group-hover:w-full transition-all duration-250 ease-out" />
                </button>
              ) : link.isLink ? (
                <Link
                  to={link.href}
                  className={`relative font-body font-medium text-[14px] transition-colors duration-150 py-2 inline-flex items-center gap-1 group ${
                    light ? 'text-slate-600 hover:text-[#0a192f]' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#0a192f] group-hover:w-full transition-all duration-250 ease-out" />
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`relative font-body font-medium text-[14px] transition-colors duration-150 py-2 block group ${
                    light ? 'text-slate-600 hover:text-[#0a192f]' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#0a192f] group-hover:w-full transition-all duration-250 ease-out" />
                </a>
              )}

              {/* Services Dropdown */}
              {link.hasDropdown && (
                <div
                  className={`absolute top-full left-0 mt-0 pt-4 bg-transparent transition-all duration-300 ${
                    servicesHovered ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
                  }`}
                >
                  <div className="p-8 min-w-[900px] bg-white rounded-2xl shadow-2xl border border-slate-100">
                    <div className="grid grid-cols-3 gap-8">
                      {['START', 'STABILIZE', 'SCALE'].map(stage => {
                        const stageServices = SERVICES.filter(s => s.stage === stage)
                        return (
                          <div key={stage}>
                            <div className="flex items-center gap-2 mb-6">
                              <div className="w-2 h-2 bg-[#0a192f] rounded-full" />
                              <h4 className="font-headline font-bold text-[#0a192f] text-xs tracking-widest">{stage}</h4>
                              <span className="text-slate-400 font-body text-xs ml-auto">
                                {stageServices[0].num} — {stageServices[stageServices.length - 1].num}
                              </span>
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
                                      <span className="font-headline font-bold text-[9px] text-[#0a192f] group-hover:text-white">
                                        {service.code}
                                      </span>
                                    </div>
                                    <div className="flex-1">
                                      <p className="font-headline font-bold text-[#0a192f] text-[12px] group-hover:text-[#0a192f] transition-colors">
                                        {service.title}
                                      </p>
                                      <p className="font-body text-slate-500 text-[10px] leading-tight mt-0.5">
                                        {service.desc}
                                      </p>
                                    </div>
                                    <span className="material-symbols-outlined text-[14px] text-slate-400 flex-shrink-0 group-hover:text-[#0a192f] transition-colors">
                                      arrow_forward
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

        {/* ── CTA pill + hamburger */}
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

          <button
            className={`lg:hidden p-2 -mr-1 transition-colors duration-300 ${
              light ? 'text-[#0a192f]' : 'text-white'
            }`}
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
        mobileOpen ? 'max-h-[560px]' : 'max-h-0'
      }`}>
        <div className="flex flex-col px-6 py-5 max-w-[1440px] mx-auto">
          {NAV_LINKS.map(link => (
            <div key={link.label}>
              {link.isLink ? (
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 font-body font-medium text-[14px] text-slate-600 hover:text-[#0a192f] border-b border-slate-50 last:border-0 transition-colors block"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 font-body font-medium text-[14px] text-slate-600 hover:text-[#0a192f] border-b border-slate-50 last:border-0 transition-colors block"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <div className="pt-5">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-pill w-full justify-center"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-[#e31e24] shrink-0" />
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
