import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide',
        text: 'When you contact us, request a consultation, or fill out any form on our website, we collect information such as your name, email address, phone number, company name, and any details you choose to share about your business needs.',
      },
      {
        subtitle: 'Information Collected Automatically',
        text: 'When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and pages visited. This information is used to improve your experience and the performance of our website.',
      },
      {
        subtitle: 'Cookies & Tracking Technologies',
        text: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand where our visitors are coming from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Service Delivery',
        text: 'We use the information you provide to respond to your enquiries, schedule consultations, deliver our consulting services, and communicate with you about your engagement with Bzsimplified.',
      },
      {
        subtitle: 'Improving Our Services',
        text: 'We analyse usage data to understand how visitors interact with our website, which helps us improve our content, design, and overall user experience.',
      },
      {
        subtitle: 'Marketing Communications',
        text: 'With your consent, we may send you newsletters, updates, or information about services we believe may be of interest to you. You may opt out of these communications at any time by clicking the unsubscribe link in any email.',
      },
    ],
  },
  {
    title: 'How We Share Your Information',
    content: [
      {
        subtitle: 'We Do Not Sell Your Data',
        text: 'Bzsimplified does not sell, rent, or trade your personal information to third parties for their marketing purposes.',
      },
      {
        subtitle: 'Trusted Service Providers',
        text: 'We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services — such as email platforms, CRM tools, and analytics providers. These parties are contractually obligated to keep your information confidential.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as a court order or government agency.',
      },
    ],
  },
  {
    title: 'Data Security',
    content: [
      {
        subtitle: 'Our Commitment',
        text: 'We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include encrypted data transmission, access controls, and regular security reviews.',
      },
      {
        subtitle: 'Limitations',
        text: 'While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining the highest practical standards.',
      },
    ],
  },
  {
    title: 'Your Rights',
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You have the right to request access to the personal information we hold about you, and to request corrections if that information is inaccurate or incomplete.',
      },
      {
        subtitle: 'Deletion',
        text: 'You may request that we delete your personal information from our systems, subject to certain legal obligations that may require us to retain certain data.',
      },
      {
        subtitle: 'Data Portability',
        text: 'Where technically feasible, you have the right to receive your personal data in a structured, commonly used, machine-readable format.',
      },
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      {
        subtitle: 'External Websites',
        text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.',
      },
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      {
        subtitle: 'Updates',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.',
      },
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="pt-[82px] min-h-screen bg-[#f7f9fc]">

      {/* ── Hero */}
      <section data-hero="true" className="relative overflow-hidden bg-[#0a192f] py-14 lg:py-20 min-h-[340px] lg:min-h-[400px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 to-[#0a192f]/70" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <p className="font-body font-bold text-[13px] tracking-[0.28em] uppercase text-[#e31e24] mb-5">
            Legal
          </p>
          <h1
            className="font-headline font-black text-white tracking-tight leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
          >
            Privacy Policy
          </h1>
          <p className="font-body text-white/40 text-[13px] sm:text-[14px]">
            Effective Date: 1 January 2025 &nbsp;·&nbsp; Last Updated: 1 May 2025
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

      {/* ── Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">

          {/* Sticky sidebar — TOC */}
          <aside className="hidden lg:block sticky top-28">
            <p className="font-body font-bold text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-4">Contents</p>
            <nav className="space-y-1">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.title}
                  href={`#section-${i}`}
                  className="flex items-center gap-2 font-body text-[13px] text-slate-500 hover:text-[#0a192f] py-1.5 transition-colors group"
                >
                  <span className="font-headline font-black text-[10px] text-slate-300 group-hover:text-[#e31e24] w-5 shrink-0 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="font-body text-[12px] text-slate-400 leading-relaxed mb-3">Questions about this policy?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-body font-semibold text-[12px] text-[#0a192f] hover:text-[#e31e24] transition-colors group"
              >
                Contact us
                <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-10 md:space-y-14">

            {/* Intro */}
            <div className="bg-white rounded-2xl p-7 md:p-10 border border-slate-100 shadow-sm">
              <p className="font-body text-slate-600 text-[14px] md:text-[15px] leading-[1.9]">
                At <span className="font-semibold text-[#0a192f]">Bzsimplified</span>, we are committed to protecting your privacy and handling your personal information with transparency and respect. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>
              <p className="font-body text-slate-600 text-[14px] md:text-[15px] leading-[1.9] mt-4">
                By using our website, you consent to the practices described in this policy. Please read it carefully.
              </p>
            </div>

            {/* Sections */}
            {SECTIONS.map((section, i) => (
              <div key={section.title} id={`section-${i}`} className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-headline font-black text-[11px] text-[#e31e24]">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="font-headline font-black text-[#0a192f] text-lg md:text-xl tracking-tight">{section.title}</h2>
                </div>
                <div className="space-y-5">
                  {section.content.map(block => (
                    <div key={block.subtitle} className="bg-white rounded-xl p-6 md:p-8 border border-slate-100">
                      <h3 className="font-headline font-bold text-[#0a192f] text-[14px] mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e31e24] shrink-0" />
                        {block.subtitle}
                      </h3>
                      <p className="font-body text-slate-500 text-[13px] md:text-[14px] leading-[1.85]">{block.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact block */}
            <div className="bg-[#0a192f] rounded-2xl p-7 md:p-10">
              <h3 className="font-headline font-bold text-white text-lg mb-2">Contact Us</h3>
              <p className="font-body text-white/50 text-[13px] leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please reach out to us.
              </p>
              <div className="space-y-2 mb-6">
                <p className="font-body text-white/70 text-[13px]">
                  <span className="text-white/30 mr-2">Email</span> hello@bzsimplified.com
                </p>
                <p className="font-body text-white/70 text-[13px]">
                  <span className="text-white/30 mr-2">Location</span> Dubai · Mumbai · London
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0a192f] font-body font-semibold text-[13px] rounded-xl hover:bg-slate-100 transition-colors group"
              >
                Get in Touch
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
