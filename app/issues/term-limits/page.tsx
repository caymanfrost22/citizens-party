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
    title: '12-Year House Cap (6 Terms)',
    body: 'House members capped at 6 two-year terms — 12 years total. Independent clock from the Senate. A member who serves the full 12 in the House can still run for Senate. Forces fresh House representation every cycle without burning institutional knowledge across chambers.',
  },
  {
    num: '02',
    title: '12-Year Senate Cap (2 Terms)',
    body: 'Senators capped at 2 six-year terms — 12 years total. Independent clock from the House. Same logic: enough time to learn the institution, not enough to ossify in it. A career-long public servant could theoretically serve 12 in the House plus 12 in the Senate — that is the ceiling, not the floor.',
  },
  {
    num: '03',
    title: 'SCOTUS: Lifetime Appointment, Mandatory Retirement at 80',
    body: 'The lifetime appointment stays — it is the bedrock of judicial independence. We add one rule: mandatory retirement on the justice\'s 80th birthday. Justices may take senior status earlier voluntarily. Ends the actuarial roulette of justices serving into cognitive decline and the political bet on which side of 80 a nomination falls.',
  },
  {
    num: '04',
    title: 'Presidency Stays at 8 Years',
    body: 'The 22nd Amendment works. Two terms, eight years total. No changes. Already term-limited, already durable. We extend the same logic only where it is missing — Congress and the high court.',
  },
  {
    num: '05',
    title: 'Citizens Party Self-Pledge — Effective Immediately',
    body: 'Every Citizens Party candidate for federal office signs a binding self-pledge to step down at the 12-year mark in their chamber, regardless of whether the constitutional amendment has passed. We lead by example. Voters can hold us to it at the next primary. We do not wait for the other parties to agree to the rule we believe in.',
  },
  {
    num: '06',
    title: 'Article V Amendment Campaign — In Parallel',
    body: 'The self-pledge binds our candidates. The amendment binds everyone. We run an Article V campaign — 2/3 of Congress plus 3/4 of states — for the durable, universal version. U.S. Term Limits v. Thornton (1995) closed the statutory path; the amendment is the only legitimate route. Hard to do. Permanent when done.',
  },
] as const

export default function TermLimitsPage() {
  return (
    <div>
      <IssueHero
        badge="⏰ Term Limits"
        badgeColor="var(--teal)"
        title={<>End the <span style={{ color: 'var(--teal)' }}>Career Politician.</span></>}
        subtitle="12-year cap in the House. 12-year cap in the Senate. Separate clocks. SCOTUS keeps lifetime appointment with mandatory retirement at 80. Presidency unchanged. Hard sell, durable fix — Article V amendment plus a Citizens Party self-pledge today."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="No platform plank. Opposed in practice — incumbency advantage favors safe urban seats. Progressive wing floats SCOTUS 18-year terms but leadership stays quiet."
          rep="Rhetorically supportive since 1994 Contract with America. Blocked in practice — every recent amendment proposal dies in committee. Hard opposition to SCOTUS limits."
          us="12-year House (6 terms) + 12-year Senate (2 terms), separate clocks. Presidency stays at 8. SCOTUS lifetime with mandatory retirement at 80. Lower federal courts untouched. Senior staff + cabinet untouched. State legislatures left to the states. Article V amendment + Citizens Party self-pledge today."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--teal)" bg="color-mix(in srgb, var(--teal) 10%, transparent)" border="color-mix(in srgb, var(--teal) 30%, transparent)">📊 The Status Quo</SectionLabel>
          <h2 className="text-3xl font-black">Who Actually Runs Washington</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="8.5 yrs" label="Average House tenure" color="var(--teal)" />
          <StatCard num="11 yrs" label="Average Senate tenure" color="var(--teal)" />
          <StatCard num="28 yrs" label="Average modern SCOTUS tenure" color="var(--gold)" />
          <StatCard num="93%" label="Incumbent re-election rate" color="#c8102e" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Six Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Clean amendment. Self-pledge today. Nothing more, nothing less.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor="var(--teal)" />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--gold) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>What We Are Not Proposing</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <strong className="text-white">No lower-court federal judge term limits.</strong> District and circuit courts keep lifetime appointment under "during good behaviour." Independence is the point.</li>
            <li>• <strong className="text-white">No SCOTUS term restructure.</strong> We reject the 18-year staggered proposal. Lifetime appointment plus a hard retirement age preserves independence without political churn every two years.</li>
            <li>• <strong className="text-white">No senior staff or cabinet caps.</strong> They are not elected — voters did not put them there, voters should not cap them. Different problem, different solution.</li>
            <li>• <strong className="text-white">No federal rule on state legislatures.</strong> Federalism. 15 states already self-imposed term limits. Let the rest decide for themselves.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/lobbying-ban" className="underline hover:text-white">Lobbying ban</Link>: 24-year ceiling on federal legislative service + lifetime lobbying ban removes the get-elected-then-cash-out incentive entirely.</li>
            <li>• <Link href="/issues/campaign-finance" className="underline hover:text-white">Campaign finance</Link>: term limits + small-donor vouchers = the duopoly cannot rely on incumbency or money. Has to win on policy.</li>
            <li>• <Link href="/issues/sunset-clauses" className="underline hover:text-white">Sunset clauses</Link>: same forcing function applied to laws and agencies. Nothing in Washington is permanent.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: U.S. Term Limits, Congressional Research Service tenure reports, U.S. Term Limits v. Thornton (1995), Brookings Vital Statistics on Congress, Federal Judicial Center, Article V of the U.S. Constitution, 22nd Amendment.
          </p>
        </div>
      </section>
    </div>
  )
}
