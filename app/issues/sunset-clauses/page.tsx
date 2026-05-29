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
    title: '10-Year Auto-Sunset on Every Federal Law',
    body: 'Every federal statute carries an automatic 10-year expiration. Congress must affirmatively reauthorize — debate, vote, justify — or the law sunsets. No exceptions for "permanent" entitlements, regulatory frameworks, or tax provisions. Forces a real conversation about whether the law is still doing what it was supposed to.',
  },
  {
    num: '02',
    title: '10-Year Auto-Sunset on Every Federal Agency',
    body: 'Same forcing function at the agency level. Every executive branch agency expires after 10 years unless Congress reauthorizes its mission, budget, and structure. Agencies that have outlived their purpose, drifted from their mandate, or duplicate other agencies die quietly. Pairs with bureaucracy reform consolidation.',
  },
  {
    num: '03',
    title: 'No Omnibus Reauthorization Bundles',
    body: 'Each expiring law gets its own up-or-down floor vote. No omnibus packages where 400 reauthorizations ride on one must-pass bill. Forces members to vote individually on each item, on the record, with full public debate. Lobbyists cannot hide one bad provision inside a thousand-page bundle.',
  },
  {
    num: '04',
    title: 'Staggered 10-Year Phase-In',
    body: 'Existing inventory of ~50,000 federal statutes and ~430 agencies cannot all expire on day one — that would crash the government. Phase in over the first decade: 10% per year, in priority order. The biggest, oldest, least-reviewed laws and agencies hit the sunset clock first.',
  },
  {
    num: '05',
    title: 'Sunset Hearings Are Public, Recorded, Searchable',
    body: 'Every reauthorization debate published live, full transcripts archived, witness testimony preserved. Citizens can search every reauthorization conversation by topic, member, or agency. No backroom deals — sunset becomes the single biggest sunlight event in Washington every year.',
  },
] as const

export default function SunsetClausesPage() {
  return (
    <div>
      <IssueHero
        badge="⏳ Sunset Clauses"
        badgeColor="var(--teal)"
        title={<>Nothing in Washington <br/>is <span style={{ color: 'var(--teal)' }}>Permanent.</span></>}
        subtitle="The single biggest forcing function for bureaucracy cleanup ever attempted. Every law expires in 10 years. Every agency expires in 10 years. Reauthorize or it dies. No omnibus bundles. No exceptions."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Targeted sunsets on tax provisions, oppose blanket sunset of entitlement and regulatory programs."
          rep="Sunset regulations and discretionary spending, protect entrenched defense and entitlement priorities."
          us="Every federal law and every agency auto-expires after 10 years. No exceptions, no omnibus bundles, staggered 10-year phase-in. Reauthorize or it dies."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--teal)" bg="color-mix(in srgb, var(--teal) 10%, transparent)" border="color-mix(in srgb, var(--teal) 30%, transparent)">📊 The Inventory</SectionLabel>
          <h2 className="text-3xl font-black">What We&apos;re Forcing the Government to Look At</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="50K+" label="Federal statutes in force" color="var(--teal)" />
          <StatCard num="430+" label="Federal agencies" color="var(--teal)" />
          <StatCard num="185K" label="Pages in CFR" color="#c8102e" />
          <StatCard num="0" label="Built-in obsolescence today" color="var(--gold)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Five Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">One forcing function. Applied everywhere.</p>
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
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: agency sunset is the agency-level half. Results-based budgeting is the funding-level half. Same forcing function.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: sunset every law every 10 years is part of the discretionary-spending discipline.</li>
            <li>• <Link href="/issues/trade" className="underline hover:text-white">Trade + Tariffs</Link>: reshoring tax credits hard-sunset at 10 years. No permanent industrial policy.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: U.S. Code (Office of the Law Revision Counsel), Code of Federal Regulations, Texas Sunset Advisory Commission (state-level model), Congressional Research Service sunset-clause analyses, Office of Management and Budget agency reports.
          </p>
        </div>
      </section>
    </div>
  )
}
