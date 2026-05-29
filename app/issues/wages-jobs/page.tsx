import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'
import MechanismCard from '@/components/issue/MechanismCard'

export const revalidate = 60

const MECHANISMS = [
  {
    num: '01',
    title: 'Tiered Minimum Wage — Age + Hours + Region',
    body: 'Tier A (~$10/hr CPI-indexed): under 18 OR working less than 25 hrs/wk. Tier B (~$15/hr CPI + regional adjust): 18+ AND 25+ hrs/wk. BLS publishes a regional cost-of-living factor — high-cost metros adjust higher, rural stays at the floor. States can go higher than the federal floor. Mom-and-pop shops can hire high-schoolers and part-timers without union-grade cost. Career roles get a true living wage. Both tiers auto-index annually. No more 16-year freezes.',
  },
  {
    num: '02',
    title: 'New "Independent Worker" Federal Classification',
    body: 'Stop the binary employee-vs-contractor fight. Third federal class: Independent Worker. Keeps the flexibility gig workers cite (choose hours, work multiple platforms). Adds portable benefits: platforms pay into health + retirement + disability accounts per hour worked. Account is owned by the worker and moves across platforms.',
  },
  {
    num: '03',
    title: 'Non-Competes Banned Under $150K + Paid Garden Leave Above',
    body: 'Workers earning under $150K/yr: non-compete clauses unenforceable. Fast-food, retail, janitorial, most knowledge work get mobility back. Above $150K (real trade-secret protection): non-compete allowed for max 12 months AND employer must pay 100% of salary during the non-compete period.',
  },
  {
    num: '04',
    title: 'Apprenticeship Expansion in the Trades',
    body: 'Federal funding for paid apprenticeship programs in plumbing, electrical, HVAC, welding, nursing, lineman. AI-resistant jobs that built America. Apprentices earn while training — counter to the "everyone needs college" narrative.',
  },
  {
    num: '05',
    title: 'Universal Worker Account',
    body: 'Every worker gets a single tax-advantaged account funded by payroll. Holds: emergency fund + skills training + portable benefits + retirement. Follows the worker across every job, every gig, every career change. Same architecture as Universal HSA from birth (healthcare), Housing Savings Account (housing), and the sovereign-wealth-fund-backed Social Security trust. Theme: Americans own their financial future.',
  },
] as const

export default function WagesJobsPage() {
  return (
    <div>
      <IssueHero
        badge="👷 Wages + Jobs + Labor"
        badgeColor="#06d6a0"
        title={<>Federal Min Wage Frozen <span style={{ color: '#f5a623' }}>16 Years</span>.</>}
        subtitle="Real wages stagnant 50 years for non-college workers. Manufacturing jobs at 12.9M vs 19M peak. 36% of workers do gig work in some form. AI displacement looming. Tiered min wage + Independent Worker class + portable benefits + Universal Worker Account."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="$15–22 federal min wage flat, PRO Act, gig workers reclassified as employees."
          rep="State-level min wage, national right-to-work, contractors stay contractors."
          us="Tiered min wage (age + hours + region + CPI). New Independent Worker classification with portable benefits. Non-competes banned under $150K, allowed above with paid garden leave. Apprenticeship expansion. Universal Worker Account."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">📊 The Labor Picture</SectionLabel>
          <h2 className="text-3xl font-black">What&apos;s Actually Happening</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$7.25" label="Federal Min Wage Since 2009" color="#c8102e" />
          <StatCard num="10%" label="Union Membership (1950s: 35%)" color="#f5a623" />
          <StatCard num="36%" label="Workers Doing Gig Work" color="#f5a623" />
          <StatCard num="12.9M" label="US Mfg Jobs (Peak: 19M)" color="#c8102e" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Five Mechanisms</h2>
          <p className="text-[#8fa3bc] mt-2">Tiered floor. Portable benefits. Mobility. Real training paths.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.2)' }}>
          <h3 className="font-bold mb-3" style={{ color: '#f5a623' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: '#8fa3bc' }}>
            <li>• <Link href="/issues/healthcare-costs" className="underline hover:text-white">Healthcare Costs</Link>: Universal Worker Account is the same architecture as the Universal HSA from birth. One savings model, four life needs.</li>
            <li>• <Link href="/issues/housing" className="underline hover:text-white">Housing</Link>: the Housing Savings Account is another instance of the same pattern — tax-advantaged, federally seeded for low/middle income, portable.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: sovereign-wealth-fund-backed Social Security is the retirement leg of the same architecture. Americans own their financial future end to end.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: '#8fa3bc' }}>
            Sources: BLS Wage Statistics, BLS Union Membership Annual Report, Upwork Freelance Forward Survey, BLS Manufacturing Employment, FTC Non-Compete Rule (2024) and pending litigation, US DOL Apprenticeship data.
          </p>
        </div>
      </section>
    </div>
  )
}
