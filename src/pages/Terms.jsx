import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement to Terms',
        text: 'By accessing or using the Bzsimplified website and services, you confirm that you are at least 18 years of age and agree to be bound by these Terms of Usage. If you do not agree with any part of these terms, you may not access or use our services.',
      },
      {
        subtitle: 'Changes to Terms',
        text: 'We reserve the right to modify these terms at any time. We will notify users of significant changes by updating the effective date at the top of this page. Your continued use of our services after any changes constitutes your acceptance of the new terms.',
      },
    ],
  },
  {
    title: 'Use of Our Services',
    content: [
      {
        subtitle: 'Permitted Use',
        text: 'You may use our website and services for lawful purposes only, in accordance with these Terms. You agree not to use our services in any way that violates applicable laws or regulations, or that harms or could harm Bzsimplified, its clients, or third parties.',
      },
      {
        subtitle: 'Prohibited Activities',
        text: 'You are strictly prohibited from: using our services for any unlawful purpose; attempting to gain unauthorised access to any portion of our website or systems; transmitting any harmful, offensive, or disruptive content; reverse engineering or attempting to extract our source code; or impersonating any person or entity.',
      },
      {
        subtitle: 'Account Responsibility',
        text: 'If you create an account or provide information through our contact forms, you are responsible for maintaining the confidentiality of that information and for all activities that occur under your interaction with us.',
      },
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      {
        subtitle: 'Ownership',
        text: 'All content on this website — including text, graphics, logos, icons, images, audio clips, and software — is the property of Bzsimplified or its content suppliers and is protected by applicable intellectual property laws.',
      },
      {
        subtitle: 'Restricted Use',
        text: 'You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from our website without our prior written consent.',
      },
      {
        subtitle: 'Limited Licence',
        text: 'We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use our website for your personal, non-commercial use only.',
      },
    ],
  },
  {
    title: 'Consulting Services',
    content: [
      {
        subtitle: 'Nature of Services',
        text: 'Bzsimplified provides business consulting and advisory services. All recommendations, analyses, and deliverables are based on information provided by the client and our professional judgement. Results may vary and are not guaranteed.',
      },
      {
        subtitle: 'Client Responsibilities',
        text: 'Clients are responsible for providing accurate, complete, and timely information necessary for the delivery of our services. Bzsimplified shall not be liable for any delays or deficiencies in our services resulting from incomplete or inaccurate client information.',
      },
      {
        subtitle: 'Confidentiality',
        text: 'Both parties agree to keep confidential all proprietary or sensitive information disclosed during the course of the engagement. This obligation survives the termination of any service agreement.',
      },
    ],
  },
  {
    title: 'Disclaimers & Limitations',
    content: [
      {
        subtitle: 'No Warranties',
        text: 'Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.',
      },
      {
        subtitle: 'Limitation of Liability',
        text: 'To the fullest extent permitted by law, Bzsimplified shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, our website or services.',
      },
      {
        subtitle: 'Professional Advice Disclaimer',
        text: 'Content on our website is for informational purposes only and does not constitute professional legal, financial, or regulatory advice. Always seek the advice of qualified professionals with respect to your specific circumstances.',
      },
    ],
  },
  {
    title: 'Third-Party Links & Services',
    content: [
      {
        subtitle: 'External Links',
        text: 'Our website may contain links to third-party websites or services that are not owned or controlled by Bzsimplified. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.',
      },
    ],
  },
  {
    title: 'Governing Law',
    content: [
      {
        subtitle: 'Jurisdiction',
        text: 'These Terms of Usage shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Dubai, UAE.',
      },
    ],
  },
  {
    title: 'Termination',
    content: [
      {
        subtitle: 'Our Rights',
        text: 'We reserve the right to terminate or suspend your access to our website and services immediately, without prior notice, for any conduct that we believe violates these Terms or is harmful to other users, third parties, or our business interests.',
      },
    ],
  },
]

export default function Terms() {
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
            Terms of Usage
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
              <p className="font-body text-[12px] text-slate-400 leading-relaxed mb-3">Questions about these terms?</p>
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
                Welcome to <span className="font-semibold text-[#0a192f]">Bzsimplified</span>. These Terms of Usage govern your access to and use of our website and consulting services. Please read these terms carefully before using our platform.
              </p>
              <p className="font-body text-slate-600 text-[14px] md:text-[15px] leading-[1.9] mt-4">
                These terms apply to all visitors, clients, and others who access or use our services. By using our website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Usage.
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
              <h3 className="font-headline font-bold text-white text-lg mb-2">Questions or Concerns?</h3>
              <p className="font-body text-white/50 text-[13px] leading-relaxed mb-6">
                If you have any questions about these Terms of Usage or need clarification on any clause, please do not hesitate to get in touch with our team.
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
