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
    title: 'Ranked-Choice Voting for All Federal Elections',
    body: 'House, Senate, and presidential primaries adopt instant-runoff ranked-choice. Voters rank candidates in order of preference. Lowest finisher eliminated, ballots redistributed until someone clears 50%. Ends spoiler dynamics. Third parties — including ours — compete on policy, not ballot-access fear. Already proven in Maine, Alaska, NYC.',
  },
  {
    num: '02',
    title: 'Automatic Registration at 18 + Free Secure ID',
    body: 'Every citizen automatically registered to vote on their 18th birthday using existing federal records (Social Security, Selective Service, IRS). Every registered voter gets a free, secure, photo voter ID — no DMV trip, no fee, no excuses. Ends the false fight between access and integrity. Both at once.',
  },
  {
    num: '03',
    title: '15-Day Early Voting + Mail Standard Nationwide',
    body: 'Federal floor: minimum 15 days of in-person early voting in every state. No-excuse absentee mail voting available to every registered voter. Drop boxes monitored 24/7. States can exceed; none can go below. Removes "could not get to polls on Tuesday" as a reason democracy fails.',
  },
  {
    num: '04',
    title: 'Paper Audit Trail Required + Risk-Limiting Audits',
    body: 'Every federal vote leaves a voter-verified paper record. Mandatory post-election risk-limiting audits in every congressional district. No more black-box machines, no more "we believe the machines worked." If a recount is needed, the paper exists.',
  },
  {
    num: '05',
    title: 'Election Day = Federal Holiday',
    body: 'Federal Election Day declared a national holiday. Federal employees off. Private-sector mandate: paid time off to vote, no carve-outs. Pairs with the 15-day early window — the holiday matters most for working-class voters who cannot take time off mid-shift.',
  },
  {
    num: '06',
    title: 'Independent Redistricting Commissions',
    body: 'Every state required to use a non-partisan independent commission for congressional district maps. Population, contiguity, communities-of-interest tests. Algorithmic compactness scores published. No more gerrymandering — neither party. Maps drawn for voters, not incumbents.',
  },
] as const

export default function VotingReformPage() {
  return (
    <div>
      <IssueHero
        badge="🗳️ Voting Reform"
        badgeColor="var(--teal)"
        title={<>Access <span style={{ color: 'var(--teal)' }}>and</span> Integrity. <br/>Not One or the Other.</>}
        subtitle="Both parties play this as a wedge — access vs. fraud. Both are necessary. Auto-registration + free ID + ranked-choice + paper audits + non-partisan maps. Voters get more than two bad options, and every vote is verifiable."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Expand access, automatic registration, oppose voter ID as suppression, federalize election rules."
          rep="Voter ID required, restrict mail voting, claim fraud risk, state-level control of rules."
          us="Auto-registration at 18 + free secure photo ID. Ranked-choice voting. 15-day early voting standard. Paper audit trails + risk-limiting audits. Federal Election Day holiday. Non-partisan redistricting."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--teal)" bg="color-mix(in srgb, var(--teal) 10%, transparent)" border="color-mix(in srgb, var(--teal) 30%, transparent)">📊 The Status Quo</SectionLabel>
          <h2 className="text-3xl font-black">Why Turnout Looks the Way It Does</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="66%" label="2024 presidential turnout" color="var(--gold)" />
          <StatCard num="45%" label="2022 midterm turnout" color="#c8102e" />
          <StatCard num="93%" label="House incumbent re-elect" color="#c8102e" />
          <StatCard num="3" label="States using ranked-choice federally" color="var(--teal)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Six Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Make voting easier. Make votes verifiable. Make incumbents compete.</p>
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
            <li>• <Link href="/issues/campaign-finance" className="underline hover:text-white">Campaign finance</Link>: ranked-choice + small-donor vouchers = third parties survive their first cycle.</li>
            <li>• <Link href="/issues/term-limits" className="underline hover:text-white">Term limits</Link>: independent redistricting + ranked-choice + term limits attack incumbent entrenchment from three directions.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: U.S. Election Assistance Commission, FairVote ranked-choice analysis, Maine + Alaska RCV implementation reports, Brennan Center voter ID studies, MIT Election Data & Science Lab.
          </p>
        </div>
      </section>
    </div>
  )
}
