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
    title: 'Federal Reserve: Single Mandate, Price Stability Only',
    body: 'Strip the "max employment" half of the 1977 Humphrey-Hawkins dual mandate. The Fed gets one job: 2% inflation. ECB and Bank of England model. Employment is a fiscal/regulatory outcome, not monetary policy. Removes the most common excuse for keeping rates too low too long.',
  },
  {
    num: '02',
    title: 'Hard Cap on M2 Growth: ≤ Nominal GDP + 1%',
    body: 'The Fed cannot grow the money supply faster than nominal GDP plus 1%. Prevents what happened 2020–22: M2 grew 40% in two years, then inflation spiked 25% cumulative through 2025. Rule-based discipline on the supply side of the equation.',
  },
  {
    num: '03',
    title: 'Energy Abundance — Nuclear-Led, All-of-the-Above',
    body: 'Small Modular Reactors, restart shutdown plants, advanced reactor approvals. Data center campuses host on-site nuclear (their power demand justifies dedicated generation). All other sources continue: oil, gas, geothermal, renewables, grid modernization. Cheap abundant energy lowers the cost of literally everything.',
  },
  {
    num: '04',
    title: '12-Month Federal Permitting Cap on Energy Projects',
    body: 'Current federal permitting timelines: 4–7 years. New cap: 12 months max for any energy project. NEPA streamlining, single lead agency, mandatory deadlines. Same rule that applies to reshored strategic manufacturing.',
  },
  {
    num: '05',
    title: 'Skip Emergency Response. Fix the Systemic Causes.',
    body: 'No CPI auto-indexed safety net beyond what already exists. No emergency tax-pause schemes. No price-gouging laws. Every emergency mechanism encourages more inflationary spending and political abuse. Fix the Fed + supply + spending. The shocks stop happening.',
  },
] as const

export default function InflationPage() {
  return (
    <div>
      <IssueHero
        badge="📉 Inflation"
        badgeColor="#f5a623"
        title={<>25% Cumulative Inflation in <span style={{ color: '#f5a623' }}>5 Years</span>.</>}
        subtitle="M2 money supply grew 40% during COVID. Fed called rising prices 'transitory.' Real wages still haven't caught up. Fix the Fed, cap the money supply, unlock energy. Don't subsidize the symptoms."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Blame supply chains and corporate greed. Defend Fed independence. Expand safety net."
          rep="Blame federal spending. Cut taxes. Drill more oil."
          us="Fed single mandate (price stability only). Hard cap M2 ≤ nominal GDP + 1%. All-of-the-above leaning nuclear including data-center on-site reactors. 12-month federal permitting cap. Skip emergency response."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#f5a623" bg="rgba(245,166,35,0.1)" border="rgba(245,166,35,0.3)">📊 The Damage</SectionLabel>
          <h2 className="text-3xl font-black">Five Years of Loose Money</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="25%" label="Cumulative Inflation 2020–25" color="#c8102e" />
          <StatCard num="40%" label="M2 Growth 2020–22" color="#c8102e" />
          <StatCard num="2%" label="Fed Inflation Target" color="#06d6a0" />
          <StatCard num="4–7 yr" label="Current Federal Energy Permit Timeline" color="#f5a623" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Five Mechanisms</h2>
          <p className="text-[#8fa3bc] mt-2">Tight money. Cheap energy. Permitting reform. No bailouts of the symptom.</p>
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
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: fiscal discipline (BBA + PAYGO) is the partner to monetary discipline (M2 cap). Loose money + loose spending = the last 5 years.</li>
            <li>• <Link href="/issues/housing" className="underline hover:text-white">Housing</Link>: shelter is the biggest single CPI component. Fixing housing supply attacks inflation at the root.</li>
            <li>• <Link href="/issues/trade" className="underline hover:text-white">Trade + Tariffs</Link>: the 12-month permitting cap applies twice — energy projects here, reshored strategic manufacturing there.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: '#8fa3bc' }}>
            Sources: BLS Consumer Price Index, Federal Reserve H.6 Money Stock release, CBO Long-Term Budget Outlook, EIA Annual Energy Outlook, ECB and Bank of England statutory frameworks.
          </p>
        </div>
      </section>
    </div>
  )
}
