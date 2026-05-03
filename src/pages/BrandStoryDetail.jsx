import { Link, useParams, Navigate } from 'react-router-dom'

const STORIES = {
  'streamlining-global-logistics': {
    category: 'Operational Excellence',
    title: 'Streamlining Global Logistics',
    publishedAt: 'March 12, 2025',
    readTime: '6 min read',
    tags: ['Supply Chain', 'Logistics', 'Digital Infrastructure', 'Operations'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    author: { name: 'Kalyan', role: 'Principal Consultant, Logistics Strategy', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
    quote: '"Innovation in infrastructure isn\'t about more roads; it\'s about smarter paths. We don\'t just move products — we move potential across borders."',
    heading: "The 'Silent Efficiency' Model",
    body: [
      "The 'Silent Efficiency' model represents a paradigm shift in global logistics, moving away from reactive problem-solving toward a preemptive, data-driven architecture. At its core, this strategic framework operates on the principle that the most effective supply chains are those that function with such seamless precision they become invisible to the end consumer.",
      "Our methodology is built upon three non-negotiable pillars. First, Transparency creates a unified digital thread across the entire value chain, ensuring every stakeholder operates from a single source of truth. Second, Modularity allows for high-velocity adaptation; by decoupling logistics nodes, we ensure that local disruptions do not lead to systemic failure. Finally, Resilience is the emergent property of these systems working in concert, allowing the supply chain to not only withstand global shocks but to thrive within volatility.",
      "Through the decentralisation of decision-making via edge computing and the integration of real-time customs processing, we successfully reduced physical movement latency by over 22%. This model is not just about moving goods — it's about engineering a smarter, more responsive global infrastructure that anticipates the needs of tomorrow's markets.",
    ],
    connect: "Interested in how 'Silent Efficiency' can be applied to your specific supply chain needs?",
  },
  'the-digital-pivot': {
    category: 'Strategy',
    title: 'The Digital Pivot',
    publishedAt: 'February 5, 2025',
    readTime: '5 min read',
    tags: ['Digital Transformation', 'Fintech', 'Technology', 'Strategy'],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    author: { name: 'Arjun Mehta', role: 'Senior Strategy Consultant', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
    quote: '"Legacy institutions don\'t fail because they lack resources — they fail because they can\'t unlearn. Our job is to make unlearning safe."',
    heading: 'Redesigning the Core Model',
    body: [
      "Legacy financial institutions carry decades of embedded processes that once drove competitive advantage but now act as anchors in a fast-moving digital economy. Our engagement began with a deep diagnostic — mapping every friction point across the client journey, from onboarding to portfolio management.",
      "We restructured the institution's technology stack around a decentralised microservices architecture, enabling independent scaling of critical functions. This eliminated the monolithic bottlenecks that had slowed product iteration cycles from months to weeks. Simultaneously, we redesigned the client engagement model around data transparency and on-demand access.",
      "The outcome was a 34% improvement in client retention within the first year and a 2x increase in digital product adoption. The institution successfully launched three new digital-native offerings that competed directly with fintech challengers — all within an 18-month window.",
    ],
    connect: 'Want to understand how a structured digital pivot can unlock growth for your institution?',
  },
  'incubating-tomorrow': {
    category: 'Innovation',
    title: 'Incubating Tomorrow',
    publishedAt: 'January 20, 2025',
    readTime: '7 min read',
    tags: ['Startups', 'R&D', 'Renewable Energy', 'Ventures'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    author: { name: 'Priya Nair', role: 'Innovation & Ventures Lead', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80' },
    quote: '"A prototype is just a hypothesis with a power source. Our role is to turn that hypothesis into a market reality — before the window closes."',
    heading: 'From Prototype to Market Leadership',
    body: [
      "When the client first approached us, they had a functional prototype and a compelling vision — but no structured pathway to commercialisation. The renewable energy sector rewards speed and credibility in equal measure, and they needed both urgently.",
      "We designed a phased R&D framework that de-risked each stage of development through structured milestone gates, investor reporting, and regulatory pre-clearance. By embedding a commercial team alongside the technical team from day one, we ensured market feedback continuously informed product development rather than arriving after the fact.",
      "Within 18 months, the startup had secured Series B funding, established three strategic distribution partnerships, and achieved market leadership in its primary segment. The R&D framework we built became the operating blueprint for their subsequent product lines.",
    ],
    connect: 'Ready to bring structure to your innovation pipeline and accelerate your path to market?',
  },
  'enterprise-scaling': {
    category: 'Transformation',
    title: 'Enterprise Scaling',
    publishedAt: 'April 3, 2025',
    readTime: '6 min read',
    tags: ['Enterprise', 'Cross-Border', 'Operating Model', 'Manufacturing'],
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
    author: { name: 'Rajan Pillai', role: 'Enterprise Transformation Director', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
    quote: '"Scaling an enterprise isn\'t about replicating what works locally. It\'s about designing systems that thrive in contexts you haven\'t encountered yet."',
    heading: 'Structural Realignment for Cross-Border Growth',
    body: [
      "A European manufacturing giant with operations across 12 countries had grown through acquisition, leaving behind a fragmented operational landscape with siloed teams, duplicated functions, and inconsistent quality standards. The brief was clear: align the organisation without losing what made each regional unit strong.",
      "We began with a comprehensive operating model review, mapping interdependencies across business units and identifying where standardisation would unlock efficiency versus where local autonomy was a genuine competitive asset. The result was a federated operating model — centralised governance and shared services where it mattered, local autonomy where it added value.",
      "Cross-border collaboration improved measurably within the first quarter following realignment. Time-to-market for new product variants dropped by 40%, and the organisation realised €28M in operational savings in the first fiscal year post-implementation.",
    ],
    connect: 'Looking to realign your enterprise for scalable, cross-border growth without losing operational agility?',
  },
  'capital-restructuring': {
    category: 'Finance',
    title: 'Capital Restructuring',
    publishedAt: 'March 28, 2025',
    readTime: '5 min read',
    tags: ['IPO', 'Capital Markets', 'Debt Restructuring', 'Finance'],
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    author: { name: 'Sandeep Iyer', role: 'Financial Architecture Consultant', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
    quote: '"Capital structure is not a spreadsheet exercise — it\'s a signal to every stakeholder about where this organisation is going and how it intends to get there."',
    heading: 'Engineering the IPO Transition',
    body: [
      "The conglomerate had accumulated complex debt instruments across seven jurisdictions over a decade of aggressive expansion. Prior to the IPO, this structure posed a significant risk — both to institutional investor confidence and to the organisation's post-listing flexibility. Our mandate was to simplify, strengthen, and signal.",
      "We led a comprehensive debt restructuring programme that consolidated obligations, extended maturity profiles, and eliminated covenant triggers that had constrained strategic decision-making. Simultaneously, we repositioned the equity narrative to align with institutional investor expectations around governance, ESG reporting, and capital allocation discipline.",
      "The IPO successfully completed at a 22% premium to initial pricing guidance, raising $1.4B. Post-listing, the company's debt-to-equity ratio improved from 3.2x to 1.8x within two quarters, and the stock was included in two major institutional indices within six months.",
    ],
    connect: 'Planning a capital event or restructuring? Let\'s build a framework that earns market confidence.',
  },
  'sustainable-foundations': {
    category: 'ESG Strategy',
    title: 'Sustainable Foundations',
    publishedAt: 'April 18, 2025',
    readTime: '7 min read',
    tags: ['ESG', 'Sustainability', 'Decarbonisation', 'Green Finance'],
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    author: { name: 'Meera Krishnan', role: 'ESG & Sustainability Strategist', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
    quote: '"Sustainability embedded in operations is a competitive advantage. Sustainability bolted on as a reporting exercise is a liability waiting to be exposed."',
    heading: 'Embedding Decarbonisation into Operational DNA',
    body: [
      "The logistics provider had made ambitious public commitments on emissions reduction but lacked the operational architecture to deliver them. Sustainability targets existed at the corporate level but hadn't translated into procurement decisions, fleet management, route optimisation, or supplier selection criteria.",
      "We designed a three-layer ESG integration framework: strategic targets linked to capital allocation, operational KPIs embedded in management incentive structures, and supplier scorecards that made sustainability performance a contractual criterion. This ensured decarbonisation wasn't a parallel workstream — it was the operating standard.",
      "Within 24 months, the organisation achieved a 40% reduction in Scope 1 and 2 emissions, was awarded a top-tier sustainability rating by two independent bodies, and successfully attracted €180M in green-labelled financing at preferential rates. The sustainability programme paid for itself within the first 18 months through fuel savings and financing cost reductions alone.",
    ],
    connect: 'Ready to turn your sustainability commitments into operational reality and financial advantage?',
  },
}

export default function BrandStoryDetail() {
  const { slug } = useParams()
  const story = STORIES[slug]

  if (!story) return <Navigate to="/brand-stories" replace />

  return (
    <main className="pt-[82px] bg-[#f7f9fc] text-[#191c1e] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-16 md:pb-24">

        {/* ── Back link */}
        <div className="mb-10">
          <Link
            to="/brand-stories"
            className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#39475f] hover:text-[#0a192f] transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Brand Stories
          </Link>
        </div>

        {/* ── Header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#e31e24] block" />
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-[#e31e24]">{story.category}</span>
            </div>
            <h1
              className="font-headline font-extrabold text-[#0a192f] leading-tight tracking-tighter mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
            >
              {story.title}
            </h1>

            {/* Blog metadata */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 pb-5 border-b border-slate-200">
              <span className="flex items-center gap-1.5 font-body text-xs text-[#75777e]">
                <span className="material-symbols-outlined text-[14px] text-slate-400">calendar_today</span>
                {story.publishedAt}
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs text-[#75777e]">
                <span className="material-symbols-outlined text-[14px] text-slate-400">schedule</span>
                {story.readTime}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {story.tags.map(tag => (
                <span
                  key={tag}
                  className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-[#39475f] bg-[#eceef1] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-5 py-4">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-[#b9c7e4]/30 rounded-full blur-sm" />
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                  <img src={story.author.avatar} alt={story.author.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="inline-block self-start font-body text-[9px] uppercase tracking-[0.2em] text-[#39475f] font-bold mb-1 italic px-2 py-0.5 bg-[#eceef1] rounded">
                  Perspective By
                </span>
                <h4 className="font-headline font-extrabold text-[#0a192f] text-lg leading-none mb-0.5">{story.author.name}</h4>
                <p className="font-body text-xs text-[#75777e] tracking-wide">{story.author.role}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* ── Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Quote */}
            <div className="bg-[#f2f4f7] border-l-4 border-[#e31e24] p-8 relative overflow-hidden">
              <span className="material-symbols-outlined absolute -top-3 -left-3 text-[#e31e24]/10 select-none" style={{ fontSize: '64px', fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <blockquote className="font-headline font-bold text-[#0a192f] text-lg md:text-2xl lg:text-3xl italic leading-snug relative z-10">
                {story.quote}
              </blockquote>
            </div>

            {/* Article */}
            <div>
              <h2 className="font-headline font-extrabold text-[#0a192f] text-2xl md:text-3xl mb-6 tracking-tight">{story.heading}</h2>
              <div className="space-y-5">
                {story.body.map((para, i) => (
                  <p key={i} className="font-body text-[#5a5e6a] text-base leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Share */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-headline font-bold text-sm text-[#0a192f]">Spread the Insight</h4>
                <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <p className="font-body text-xs text-[#75777e] mb-4 leading-relaxed">Share this story with your professional network on LinkedIn.</p>
              <a
                href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(`📖 "${story.title}" — ${story.category}\n\nA perspective from ${story.author.name}, ${story.author.role} at Bzsimplified.\n\n${story.quote.replace(/^"|"$/g, '')}\n\nRead the full story: ${window.location.href}\n\n#BusinessStrategy #Consulting #Bzsimplified`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0077b5] text-white py-2.5 rounded-lg font-body font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#005e93] transition-colors"
              >
                Share on LinkedIn
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Connect */}
            <div className="bg-[#0a192f] p-6 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-[#e31e24]/20 rounded-xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[#e31e24]" style={{ fontSize: '22px' }}>handshake</span>
                </div>
                <h4 className="font-headline font-bold text-white text-base mb-2">Let's Connect</h4>
                <p className="font-body text-white/50 text-xs mb-6 leading-relaxed">{story.connect}</p>
                <Link
                  to="/contact"
                  className="block w-full bg-[#e31e24] text-white py-3 rounded-lg font-body font-bold text-xs uppercase tracking-widest text-center hover:bg-red-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Bottom CTA */}
        <div className="mt-16 bg-[#0a192f] rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h3 className="font-headline font-extrabold text-white tracking-tighter mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
              Ready to build something lasting?
            </h3>
            <p className="font-body text-white/50 text-base">Transform your business with our consulting expertise.</p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#0a192f] px-10 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-widest hover:bg-[#f7f9fc] transition-colors group"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

      </div>
    </main>
  )
}
