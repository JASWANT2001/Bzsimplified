/**
 * Seed script — inserts 5 brand stories into Supabase.
 * Run from project root: node seed-stories.mjs
 */

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://qryplxyqjldawnkcnrlc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyeXBseHlxamxkYXdua2NucmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTAxODUsImV4cCI6MjA5MzgyNjE4NX0.FhG3bIh4CTsuMtoua0RbrAZ0wZVlT10d5HlZs_mjPHU'
)

const stories = [
  {
    slug: 'scaling-fb-chain-12-outlets',
    title: 'Scaling a Regional F&B Brand from 3 Outlets to 12 in 18 Months',
    category: 'Growth Strategy',
    description:
      'A beloved South Indian restaurant group was at an inflection point — loyal customers, strong unit economics, but no blueprint for growth. We built the systems that turned one region\'s success into a national expansion story.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
    published_at: 'March 12, 2025',
    read_time: '6 min read',
    tags: ['Growth', 'F&B', 'Expansion', 'Operations', 'Strategy'],
    author_name: 'Kalyan',
    author_role: 'Founder & Managing Director',
    author_avatar: '',
    quote:
      '"The food was always exceptional. What was missing was the architecture to let more people experience it — consistently, at scale."',
    heading: 'From Three Tables to Twelve Locations — A Precision Playbook',
    body: [
      'When the founders of this South Indian restaurant group approached us, they had built something genuinely rare: a brand where every outlet felt personal, the food was consistent, and customers returned not once but weekly. With three thriving outlets across two cities and a growing waitlist for tables, the question on the table was simple — how do we grow without losing what made us great?',
      'Our first move was not to accelerate expansion, but to decelerate assumptions. We conducted a 60-day operational audit across all three locations, mapping everything from supplier relationships and kitchen workflows to staff training pipelines and peak-hour throughput. The audit revealed that the brand\'s strength — its founder-driven quality obsession — was also its fragility. Everything ran on instinct. There was no documented standard operating procedure, no supplier SLA, no cross-location training framework. Growth without fixing this would mean dilution.',
      'We designed what we call the Replicable Unit Model — a franchisable-grade operations blueprint even for an owned-outlet expansion. Every recipe was documented with preparation tolerances. A central commissary kitchen model was proposed to standardise sourcing and reduce per-outlet prep time by 34%. We rebuilt the hiring and training pipeline so that a new kitchen team could be certified in 21 days rather than 90. The result was a business that could open new locations without the founders needing to be physically present.',
      'Over the following 18 months, the group opened 9 new outlets across 5 cities — bringing the total to 12. Revenue grew from ₹4.2 Cr annually to ₹19.8 Cr. More importantly, the average customer satisfaction score across new outlets was within 4 points of the original flagship — proof that the quality had travelled. The founders, for the first time, stepped into a genuinely strategic role rather than an operational one.',
    ],
    connect:
      'If your business has proven unit economics but lacks the operational architecture to scale confidently, this is precisely the challenge we are built to solve.',
    published: true,
  },

  {
    slug: 'textile-manufacturing-turnaround',
    title: 'How We Turned Around a Loss-Making Textile Unit in 11 Months',
    category: 'Operational Turnaround',
    description:
      'Three years of declining margins, two failed audits, and a workforce close to attrition. This is the story of how a 200-person textile manufacturer went from the edge of closure to its most profitable quarter in a decade.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80',
    published_at: 'January 28, 2025',
    read_time: '7 min read',
    tags: ['Turnaround', 'Manufacturing', 'Operations', 'Efficiency', 'Textile'],
    author_name: 'Dinesh',
    author_role: 'Head of Operations & Logistics',
    author_avatar: '',
    quote:
      '"The machinery was not the problem. The data was not the problem. The problem was that no one had connected the two in a language the business could act on."',
    heading: 'Diagnosing the Real Cause of a Decade-Long Decline',
    body: [
      'When we walked into this textile manufacturing facility for the first time, the diagnosis seemed straightforward — ageing machinery, rising raw material costs, and a management team stretched too thin. The promoter had already heard these conclusions from two previous consultants. What he had not heard was why corrective investments had produced no measurable improvement. Our mandate was not to repeat the diagnosis. It was to find what everyone had missed.',
      'Over the first six weeks, our operations team embedded directly on the factory floor — not in the boardroom. What we found was a classic case of invisible waste: micro-delays that individually seemed trivial but collectively consumed 22% of production capacity. Changeover times between fabric batches were untracked and unoptimised. Maintenance was reactive rather than scheduled, causing an average of 3.4 unplanned stoppages per week. And critically, procurement was driven by relationships rather than data — the factory was paying 11–18% above market rate for core raw materials on 60% of its orders.',
      'We implemented a three-phase intervention. Phase one addressed procurement: we renegotiated 14 supplier contracts and introduced a real-time price benchmarking system that reduced input costs by ₹1.2 Cr in the first quarter alone. Phase two tackled floor operations — we introduced a lean production scheduling system, trained supervisors on root-cause analysis, and reduced changeover time by 41%. Phase three was people-focused: a retention programme was designed for key floor staff, reducing attrition from 28% annually to under 9% within 8 months.',
      'By month eleven, the unit had posted its first net-profitable quarter in four years. EBITDA margins recovered from -3.2% to +9.7%. The promoter chose not to sell — which had been his stated intention before the engagement. Instead, he signed a two-year expansion plan. That, more than any metric, was the real measure of the turnaround.',
    ],
    connect:
      'A business in decline is rarely failing because of a single cause. If your margins are shrinking and the conventional interventions have not worked, we bring the rigour to find the real lever.',
    published: true,
  },

  {
    slug: 'single-clinic-to-healthcare-network',
    title: 'From One Clinic to a 6-Location Healthcare Network in 3 Years',
    category: 'Healthcare Strategy',
    description:
      'A family physician with a 20-year reputation and a single clinic wanted to build something that outlasted him. We helped design the strategy, the brand, and the operating model for a regional multi-specialty network.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    published_at: 'February 18, 2025',
    read_time: '5 min read',
    tags: ['Healthcare', 'Expansion', 'Branding', 'Strategy', 'Network'],
    author_name: 'Sunil Jose',
    author_role: 'Director – Growth & Strategy',
    author_avatar: '',
    quote:
      '"He had spent 20 years building trust, one patient at a time. Our job was to make sure that trust could scale — without losing the feeling that made it real."',
    heading: 'The Architecture of Trust at Scale',
    body: [
      'Dr. Ramesh had spent two decades building one of the most trusted primary care practices in his district. His waiting room was always full. Referrals came without advertising. His patients called him by name and trusted him with their families. But at 52, he was thinking about the next chapter — not retirement, but legacy. Could the trust he had built in one room be replicated across a network? That was the question he brought to us.',
      'The first thing we established was that healthcare expansion is fundamentally a brand problem before it is a business problem. Patients do not choose a hospital — they choose a doctor they trust. Scaling a practice means building systems that transfer that trust to a team, a protocol, and an institution. We began by helping Dr. Ramesh articulate the clinical and service values that defined his practice — not as a marketing exercise, but as the foundation for every hiring decision, process design, and patient interaction across future locations.',
      'We then designed the expansion roadmap: three new locations in year one, each within 40km of the original clinic to leverage existing patient networks. A referral framework was established so that patients of the flagship clinic were introduced to the new locations through Dr. Ramesh himself — a deliberate trust-transfer mechanism. Standardised clinical protocols, patient record systems, and a unified appointment platform were put in place before the first new location opened. We also helped recruit and onboard three associate physicians whose clinical philosophies aligned with the practice\'s ethos.',
      'Three years on, the network comprises 6 clinics, 14 full-time physicians, and a patient base of over 28,000 active records. A diagnostic centre was added in year two, and specialist OPDs in orthopaedics and dermatology in year three. Revenue has grown from ₹90 lakhs annually to ₹4.8 Cr. But the number Dr. Ramesh returns to most often: patient satisfaction scores across all six locations remain above 4.7 out of 5 — nearly identical to his original clinic.',
    ],
    connect:
      'Healthcare businesses are built on trust, and trust does not scale by accident. If you are a founder-driven practice looking to grow without losing your identity, we have a framework for exactly this.',
    published: true,
  },

  {
    slug: 'digital-transformation-legacy-retail',
    title: 'Modernising a 30-Year-Old Retail Business for the Digital Era',
    category: 'Digital Transformation',
    description:
      'A third-generation retail business with strong brand equity but zero digital infrastructure. We designed and executed a full technology transformation — from inventory to customer experience — without disrupting daily operations.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    published_at: 'April 3, 2025',
    read_time: '6 min read',
    tags: ['Digital', 'Retail', 'Technology', 'Transformation', 'Ecommerce'],
    author_name: 'Sanal',
    author_role: 'Lead – Technology & Integration',
    author_avatar: '',
    quote:
      '"Their competitors were newer and louder. But this brand had 30 years of customer loyalty. Our job was to make sure the future could see it."',
    heading: 'Technology as the Bridge Between Heritage and Growth',
    body: [
      'The family-owned retail business had been a fixture of the city\'s shopping culture for three decades. The founder\'s son had taken over five years prior and inherited something valuable: a brand that older customers trusted and younger ones recognised. What he had also inherited was a business running entirely on paper-based inventory, no CRM, no e-commerce presence, and a billing system that could not produce a weekly sales report without a manual calculation. Competitors — both organised retail chains and nimble online brands — were closing in. The question was not whether to modernise, but how to do it without breaking what was working.',
      'Our technology audit identified four critical gaps: inventory visibility, customer data, digital sales channel, and internal reporting. Rather than recommending a single monolithic ERP system that would cost ₹40–60 lakhs and take 18 months to implement, we designed a modular stack of integrated tools — each best-in-class for its function, together forming a seamless operational backbone. The total implementation cost was ₹11 lakhs, with a phased rollout designed to ensure staff were never managing two systems simultaneously.',
      'We implemented a cloud-based POS system with real-time inventory tracking across all three store locations. A customer loyalty programme was built into the checkout flow, capturing phone numbers and purchase history for the first time in the business\'s history. Within 90 days, the business had a CRM with 14,000 customer profiles. An e-commerce storefront was launched in month four, starting with the top 120 SKUs by margin — not by volume. The site was designed to feel like a digital extension of the store, not a generic template.',
      'Twelve months after the engagement, online sales accounted for 22% of total revenue — a channel that had not existed before. Inventory write-offs dropped by 38% due to better visibility and demand forecasting. The founder\'s son now receives a daily business dashboard on his phone. And in the most telling sign of transformation: the business\'s oldest loyal customers — the ones who had shopped there for 25 years — began placing online orders, guided by their children.',
    ],
    connect:
      'Legacy businesses do not need to abandon what made them great — they need technology that amplifies it. If your business is carrying heritage without infrastructure, we know how to bridge that gap.',
    published: true,
  },

  {
    slug: 'franchise-expansion-home-services',
    title: 'Building a National Franchise Model for a Home Services Brand',
    category: 'Franchise Strategy',
    description:
      'A profitable home services business operating in one city wanted to franchise nationally. We built the complete franchise system — legal, operational, financial, and brand — that enabled them to onboard 22 franchise partners in 14 months.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    published_at: 'May 1, 2025',
    read_time: '7 min read',
    tags: ['Franchise', 'Expansion', 'Brand', 'Strategy', 'Services'],
    author_name: 'Sunil Jose',
    author_role: 'Director – Growth & Strategy',
    author_avatar: '',
    quote:
      '"Franchising is not about selling a business model. It is about replicating a culture — and culture cannot be written in a single document."',
    heading: 'The Five Pillars of a Franchise System That Actually Works',
    body: [
      'This home services company had cracked something that most businesses spend years chasing: a repeatable, profitable service model with strong word-of-mouth and a 91% customer retention rate. Operating across one metro city with a team of 60, the promoters had been approached informally by entrepreneurs in three other cities who wanted to operate under their brand. They had the demand signal. What they lacked was the system to say yes safely.',
      'Franchise readiness is rarely about brand strength. It is about whether the business can survive being run by someone who is not the founder. Our first phase was an honest readiness assessment: we mapped every process that existed only in the founding team\'s heads and documented it. We ran a mock franchise onboarding internally — simulating what a new city partner would need to know in their first 90 days with zero access to the founding team. The gaps that exercise revealed shaped the entire system we built.',
      'The franchise system we designed comprised five components: a 180-page operations manual covering every service standard, customer interaction, and escalation protocol; a franchise financial model with city-specific unit economics, break-even timelines, and royalty structures; a franchise partner training programme spanning 30 days of in-person and digital learning; a legal franchise agreement drafted to protect both parties; and a franchise support system — a dedicated onboarding manager for each partner\'s first six months. We also built a proprietary technology platform for partner reporting and quality audits.',
      'The brand launched its franchise programme formally in Q3 of the following year. Within 14 months, 22 franchise partners had been onboarded across 14 cities. The franchise division contributed 31% of total brand revenue by month 18. More significantly, the average franchisee NPS — measuring how likely partners were to recommend the model to other entrepreneurs — was 74. In a sector where franchise partner churn is a persistent problem, zero partners exited in the first year. The founders had not just built a franchise — they had built one that partners chose to stay in.',
    ],
    connect:
      'Franchising is one of the fastest paths to national scale — but only when the system underneath is genuinely ready. If you are considering franchising your business, we can tell you honestly whether you are ready and exactly what it will take.',
    published: true,
  },
]

console.log(`\nInserting ${stories.length} brand stories into Supabase…\n`)

const { data, error } = await supabase.from('brand_stories').insert(stories).select('slug, title')

if (error) {
  console.error('❌  Insert failed:', error.message)
  process.exit(1)
}

console.log('✅  Successfully inserted:')
data.forEach(s => console.log(`   • [${s.slug}] ${s.title}`))
console.log('\nDone. Refresh your admin panel to see the stories.\n')
