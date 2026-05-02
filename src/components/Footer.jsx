import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: 'About Us',      href: '/',              isLink: true },
  { label: 'Teams',         href: '/teams',          isLink: true },
  { label: 'Partners',      href: '/#partners'                   },
  { label: 'Brands',        href: '/#brands'                     },
  { label: 'Wall of Fame',  href: '/#industries'                 },
  { label: 'Brand Stories', href: '/#brand-stories'              },
  { label: 'Contact',       href: '/contact',        isLink: true },
]

const SERVICES = [
  { label: 'Launch Your Brand',      href: '/service/lb' },
  { label: 'Build Your Business',    href: '/service/bb' },
  { label: 'Set Up Your Tech',       href: '/service/st' },
  { label: 'Protect Your Brand',     href: '/service/pb' },
  { label: 'Fix Your Finances',      href: '/service/ff' },
  { label: 'Ensure Compliance',      href: '/service/ec' },
  { label: 'Manage Operations',      href: '/service/mo' },
  { label: 'Empower Your Team',      href: '/service/et' },
  { label: 'Grow Your Business',     href: '/service/gb' },
]

const CONTACT = [
  { icon: 'location_on', lines: ['Bzsimplified HQ', 'hello@bzsimplified.com'] },
  { icon: 'phone',       lines: ['+1 (800) 000-0000'] },
  { icon: 'schedule',    lines: ['Response: Within 48 hrs', 'Mon – Fri, 9 am – 6 pm'] },
]

function ColHeader({ children }) {
  return (
    <div className="mb-6">
      <h4 className="font-headline font-bold text-white text-[13px] tracking-[0.12em] uppercase">{children}</h4>
      <div className="mt-2 w-8 h-[2px] bg-[#e31e24] rounded-full" />
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a192f] w-full">

      {/* ── Main grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.4fr_1.4fr] gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              {/* B mark */}
              <div className="relative flex items-end leading-none">
                <span className="font-headline font-black tracking-tighter text-white select-none" style={{ fontSize: '2.4rem', lineHeight: 1 }}>B</span>
                <span className="absolute bg-[#e31e24]" style={{ width: 10, height: 10, top: 2, right: -3 }} />
              </div>
              {/* Divider */}
              <div className="w-px self-stretch my-1 bg-white/30" />
              {/* Word-mark */}
              <div className="flex flex-col justify-center gap-0.5">
                <span className="font-headline font-extrabold text-[13px] tracking-tight leading-none text-white">Business</span>
                <span className="font-headline font-extrabold text-[13px] tracking-tight leading-none text-white">Simplified</span>
              </div>
            </Link>
            <p className="font-body text-white/50 text-[13px] leading-[1.75] max-w-[240px]">
              Structural clarity for ambitious growth. We partner with founders and leaders to simplify operations and scale with confidence.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <ColHeader>Quick Links</ColHeader>
            <ul className="space-y-3">
              {QUICK_LINKS.map(link => (
                <li key={link.label}>
                  {link.isLink ? (
                    <Link to={link.href} className="font-body text-white/55 text-[13px] hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="font-body text-white/55 text-[13px] hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <ColHeader>Our Services</ColHeader>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.label}>
                  <Link to={s.href} className="font-body text-white/55 text-[13px] hover:text-white transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <ColHeader>Contact Info</ColHeader>
            <ul className="space-y-5 mb-6">
              {CONTACT.map(item => (
                <li key={item.icon} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#e31e24] text-[18px] mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    {item.lines.map(line => (
                      <p key={line} className="font-body text-white/55 text-[13px] leading-[1.6]">{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-[140px]">
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1600000000000"
                width="100%"
                height="140"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-body text-white/30 text-[12px]">
            © {year} Bzsimplified. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="font-body text-white/30 text-[12px] hover:text-white/60 transition-colors duration-200">Privacy Policy</a>
            <span className="w-px h-3 bg-white/15" />
            <a href="#" className="font-body text-white/30 text-[12px] hover:text-white/60 transition-colors duration-200">Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
