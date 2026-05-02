import { useParams, Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const GENERIC_FAQS = [
  {
    q: 'How long does a typical engagement take?',
    a: 'Most engagements run between 2 and 6 weeks depending on scope and complexity. We agree on a clear timeline and milestone plan before starting so there are no surprises.',
  },
  {
    q: 'Do I need to prepare anything before we start?',
    a: 'A brief onboarding call is all we need to begin. We then run a structured discovery process to gather what\'s needed — you won\'t be handed a long questionnaire to fill out on your own.',
  },
  {
    q: 'How are deliverables handed over?',
    a: 'All work is delivered in a structured format — documented, editable, and built to be owned by your team. We don\'t create black-box outputs that only we can interpret.',
  },
  {
    q: 'Can services be combined or run in parallel?',
    a: 'Yes. Many clients run multiple services in parallel or sequence them across a 3–6 month roadmap. We design a phased plan that maximises impact without overloading your internal capacity.',
  },
  {
    q: 'What kind of ongoing support is available after the engagement?',
    a: 'We offer a standard 30-day post-engagement support window on all services. For clients who want continued advisory access, monthly retainer options are available.',
  },
]

const SERVICES_DATA = {
  lb: {
    code: 'LB',
    num: '01',
    stage: 'START',
    title: 'Launch Your Brand',
    description: 'Identity, positioning, and go-to-market.',
    fullDescription: 'Establish a compelling brand identity that resonates with your target market. We guide you through positioning strategy, brand architecture, and creating a go-to-market plan that sets you up for rapid growth.',
    benefits: [
      'Clear brand positioning statement',
      'Comprehensive brand guidelines',
      'Go-to-market strategy',
      'Target audience analysis',
      'Competitive positioning framework',
    ],
  },
  bb: {
    code: 'BB',
    num: '02',
    stage: 'START',
    title: 'Build Your Business',
    description: 'Legal structure, ops, and funding systems.',
    fullDescription: 'Establish the legal and operational foundations of your business. From entity structure and governance to initial process documentation, we ensure your business is built on solid ground.',
    benefits: [
      'Entity structure recommendations',
      'Governance framework setup',
      'Initial process documentation',
      'HR & payroll foundation',
      'Insurance & risk assessment',
    ],
  },
  st: {
    code: 'ST',
    num: '03',
    stage: 'START',
    title: 'Set Up Your Tech',
    description: 'Core stack to run and measure your business.',
    fullDescription: 'Build the technical foundation for scalable growth. We help you select and implement the core technology stack needed to operate efficiently and gather meaningful business intelligence.',
    benefits: [
      'Core stack selection',
      'System architecture design',
      'Analytics framework setup',
      'Integration planning',
      'Scalability roadmap',
    ],
  },
  pb: {
    code: 'PB',
    num: '04',
    stage: 'STABILIZE',
    title: 'Protect Your Brand',
    description: 'Trademarks, contracts, and brand governance.',
    fullDescription: 'Safeguard your intellectual property and brand assets. We establish comprehensive brand governance, secure necessary trademarks, and implement contract frameworks that protect your interests.',
    benefits: [
      'Trademark registration strategy',
      'Brand governance framework',
      'Contract template library',
      'IP protection audit',
      'Legal compliance review',
    ],
  },
  ff: {
    code: 'FF',
    num: '05',
    stage: 'STABILIZE',
    title: 'Fix Your Finances',
    description: 'Books, cash flow, and profitability controls.',
    fullDescription: 'Establish financial discipline and clarity. We implement accounting systems, cash flow management, and profitability controls that give you real-time visibility into your financial health.',
    benefits: [
      'Accounting systems setup',
      'Cash flow forecasting',
      'Profitability analysis',
      'Budget & variance tracking',
      'Financial reporting framework',
    ],
  },
  ec: {
    code: 'EC',
    num: '06',
    stage: 'STABILIZE',
    title: 'Ensure Compliance',
    description: 'Statutory, regulatory, and internal policy.',
    fullDescription: 'Build a robust compliance framework that meets regulatory requirements and minimizes risk. We establish policies, procedures, and monitoring systems appropriate to your industry and jurisdiction.',
    benefits: [
      'Regulatory audit',
      'Policy documentation',
      'Compliance monitoring system',
      'Training program development',
      'Risk mitigation framework',
    ],
  },
  mo: {
    code: 'MO',
    num: '07',
    stage: 'STABILIZE',
    title: 'Manage Your Operations',
    description: 'SOPs, KPIs, and daily rhythm of execution.',
    fullDescription: 'Establish operational excellence through systematic processes and performance metrics. We document SOPs, define KPIs, and create the daily rhythm that ensures consistent, high-quality execution.',
    benefits: [
      'SOP documentation',
      'KPI framework design',
      'Operational dashboard setup',
      'Team playbook creation',
      'Quality assurance process',
    ],
  },
  et: {
    code: 'ET',
    num: '08',
    stage: 'SCALE',
    title: 'Empower Your Team',
    description: 'Org design, hiring, and leadership cadence.',
    fullDescription: 'Build a high-performance organization through strategic talent decisions. We design organizational structures, implement hiring frameworks, and establish leadership rhythms that scale with your growth.',
    benefits: [
      'Organizational design',
      'Hiring criteria & framework',
      'Leadership development program',
      'Compensation strategy',
      'Succession planning',
    ],
  },
  gb: {
    code: 'GB',
    num: '09',
    stage: 'SCALE',
    title: 'Grow Your Business',
    description: 'Expansion strategy, capital, and new markets.',
    fullDescription: 'Execute scalable growth across new markets and customer segments. We develop expansion strategies, optimize capital allocation, and identify high-ROI opportunities for growth.',
    benefits: [
      'Market expansion strategy',
      'Product diversification roadmap',
      'Capital allocation framework',
      'M&A opportunity assessment',
      'Growth metrics dashboard',
    ],
  },
}

export default function Service() {
  const { code } = useParams()
  const service = SERVICES_DATA[code?.toLowerCase()]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f7f9fc] to-white">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-black text-[#0a192f] mb-4">Service Not Found</h1>
          <p className="text-slate-600 font-body mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#f7f9fc] to-white overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 font-body text-[11px] text-slate-400 mb-12">
              <Link to="/" className="hover:text-slate-600 transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-[12px]">chevron_right</span>
              <Link to="/#services" className="hover:text-slate-600 transition-colors">
                Services
              </Link>
              <span className="material-symbols-outlined text-[12px]">chevron_right</span>
              <span className="text-slate-500">{service.title}</span>
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#0a192f]">
                  <span className="font-headline font-bold text-white text-lg">{service.code}</span>
                </div>
                <div>
                  <p className="font-body text-[11px] text-slate-500 uppercase tracking-widest">
                    {service.stage} — Service {service.num}
                  </p>
                </div>
              </div>

              <h1 className="font-headline font-black text-[#0a192f] mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {service.title}
              </h1>

              <p className="font-body font-light text-slate-600 text-lg leading-relaxed max-w-2xl mb-10">
                {service.fullDescription}
              </p>

              <Link to="/contact" className="btn-primary inline-flex items-center gap-2.5">
                Get Started
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="font-headline font-bold text-[#0a192f] text-3xl mb-16">What You'll Get</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:border-[#0a192f] hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0a192f] flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-white text-[18px]">check_circle</span>
                    </div>
                    <p className="font-body text-slate-700 text-[15px] leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ items={GENERIC_FAQS} />

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[#0a192f] to-[#0f2240]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center">
            <h2 className="font-headline font-bold text-white text-4xl mb-6">Ready to get started?</h2>
            <p className="font-body text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how {service.title.toLowerCase()} can drive growth and efficiency for your business.
            </p>
            <Link to="/contact" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#0a192f] font-body font-semibold text-[14px] rounded-full transition-all duration-300 hover:shadow-[0_16px_48px_rgba(255,255,255,0.2)] hover:-translate-y-1">
              Let's Talk
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </section>
    </main>
  )
}
