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
    title: 'Mandatory GAO Implementation Within 18 Months',
    body: 'The Government Accountability Office issues 700+ recommendations per year. Congress and agencies ignore most. We make implementation mandatory: each open GAO recommendation must be implemented within 18 months or the responsible agency must publish a public rejection with reasoning. Repeat ignored recommendations trigger automatic 2% next-year budget cut.',
  },
  {
    num: '02',
    title: 'Consolidate 2,400+ Federal Assistance Programs to ~800',
    body: '2,400 overlapping federal assistance programs (up from ~1,000 in 1970) waste billions in administrative overhead and confuse the citizens they\'re supposed to serve. Consolidate to ~800 outcome-focused programs using GAO duplication reports. Single application portal per category. Same dollars, less bureaucracy.',
  },
  {
    num: '03',
    title: 'Results-Based Budgeting: Outcome Metrics or Funding Cut',
    body: 'Every federal program publishes measurable outcome metrics — not activity metrics. Miss the metric three years running: funding cut 10% next cycle. Miss five years: zero out. Replaces the "we spent more, therefore we cared more" budgeting theater of both parties. Outcomes are the budget.',
  },
  {
    num: '04',
    title: '10-Year Agency Sunset (Pairs With Sunset Clauses)',
    body: 'Every federal agency auto-expires after 10 years unless Congress affirmatively reauthorizes. Existing inventory phases in over the first decade. Forces real review of whether an agency\'s mission still exists, whether it\'s achieving it, and whether two agencies are doing the same thing.',
  },
  {
    num: '05',
    title: 'Open Federal Spending Dashboard — Real Time',
    body: 'Every federal contract, grant, and expenditure over $100K published to data.gov within 24 hours. Searchable by agency, recipient, ZIP code, and program. Citizens see where their tax dollars go in real time. Pairs with the GAO mandate — public visibility makes ignored recommendations politically expensive.',
  },
  {
    num: '06',
    title: 'Single Inspector General Network',
    body: '74 federal Inspectors General currently report up through political appointees. We restructure into a unified IG network with statutory independence, presidential nomination but not removal except for cause, and direct congressional reporting. Real watchdog teeth, not "advisory" reports.',
  },
] as const

export default function BureaucracyReformPage() {
  return (
    <div>
      <IssueHero
        badge="⚙️ Bureaucracy Reform"
        badgeColor="var(--teal)"
        title={<>Fewer Programs. <br/><span style={{ color: 'var(--teal)' }}>Better Outcomes.</span></>}
        subtitle="2,400 federal assistance programs. $250B documented GAO waste per year. Both parties either defend it (Dems) or chainsaw it (GOP) — neither fixes it. We do the boring work: consolidate, mandate GAO, fund outcomes."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Targeted program cuts, protect social safety net, defend agency staffing, oppose mass reductions."
          rep="Broad cuts to federal agencies, deregulate, block grants to states, eliminate departments wholesale."
          us="Mandatory GAO implementation in 18 months. Consolidate 2,400 → 800 outcome-focused programs. Results-based budgeting with metric-cut triggers. Agency 10-year sunset. Real-time spending dashboard. Unified IG network."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--teal)" bg="color-mix(in srgb, var(--teal) 10%, transparent)" border="color-mix(in srgb, var(--teal) 30%, transparent)">📊 The Waste</SectionLabel>
          <h2 className="text-3xl font-black">What the GAO Already Told Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$250B" label="Annual GAO-documented waste" color="#c8102e" />
          <StatCard num="2,400+" label="Federal assistance programs" color="#c8102e" />
          <StatCard num="700+" label="GAO recommendations/year" color="var(--gold)" />
          <StatCard num="74" label="Federal Inspectors General" color="var(--teal)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Six Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Forcing functions, not slogans.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor="var(--teal)" />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/sunset-clauses" className="underline hover:text-white">Sunset clauses</Link>: same 10-year forcing function applied at the law level and the agency level.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: GAO waste cuts + results-based budgeting are the discretionary-spending half of the debt math.</li>
            <li>• <Link href="/reform" className="underline hover:text-white">100-Day Action Plan</Link>: full federal audit order day 1, open spending dashboard day 5.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: GAO High Risk List, GAO Duplication & Cost Savings Annual Report, Congressional Budget Office discretionary spending tables, CIGIE Inspector General reports, USAspending.gov.
          </p>
        </div>
      </section>
    </div>
  )
}
