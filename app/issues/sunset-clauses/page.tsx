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
    title: '10-Year Default Sunset on Every Federal Law',
    body: 'Every federal statute carries a 10-year default expiration. Congress must affirmatively reauthorize — debate, vote, justify — or the law sunsets. This is the baseline forcing function: a Congress in 1994 should not bind the citizens of 2030 to laws nobody alive remembers passing. Same default for every kind of statute — entitlements, regulatory frameworks, tax provisions, criminal code. The conversation about whether the law still works is not optional anymore.',
  },
  {
    num: '02',
    title: 'Variable Cycles Allowed — With Explicit Justification and Vote',
    body: 'Some laws genuinely warrant a different cycle. A national-security authorization may need 5 years. A long-term infrastructure commitment may need 20. A core constitutional implementation may need permanence. Variance is allowed — but only by explicit clause inside the bill itself, with the chosen cycle stated, justification recorded in the floor debate, and a separate up-or-down vote on the cycle length. No silent permanence. No "this just stays" by tradition. Default is 10; anything else gets argued for, on the record, in public.',
  },
  {
    num: '03',
    title: '10-Year Default Sunset on Every Federal Agency',
    body: 'Same forcing function at the agency level. Every executive branch agency expires after 10 years unless Congress reauthorizes its mission, budget, and structure. Pairs with the bureaucracy reform plan — agencies that have outlived their purpose, drifted from their mandate, or duplicate another agency die through honest review. As with statutes, variable cycles allowed where justified (e.g. an agency whose purpose is inherently long-horizon — the National Archives — may carry a longer or permanent cycle by explicit vote).',
  },
  {
    num: '04',
    title: 'Narrow Carve-Outs — Bill of Rights, Civil Rights Floor, Core Constitutional Function',
    body: 'Three carve-outs only. (a) Bill of Rights and other constitutional amendments — not subject to statutory sunset. (b) Civil rights implementing statutes (Civil Rights Act, Voting Rights Act, Americans with Disabilities Act, similar) — ratchet treatment: Congress can amend or strengthen via the sunset process but cannot repeal. The floor is locked. The ceiling moves up only. (c) Entitlements (Social Security, Medicare, Medicaid benefits) — benefit promises are not subject to sunset; administering programs and funding mechanisms still sunset on the 10-year cycle. The DOJ, State, Treasury, and DoD agencies themselves persist; their programs, structures, and funding sunset like everything else.',
  },
  {
    num: '05',
    title: 'Standalone Votes by Default — Tightly Related Bundles Allowed',
    body: 'Default rule: each expiring law gets its own up-or-down floor vote. No omnibus packages where 400 reauthorizations ride on one must-pass bill. Limited exception: tightly related laws (multiple amendments to the same parent statute, narrow subject-area cleanups) may be bundled. Any single member can force a separate vote on any provision inside the bundle — the bundle survives only by member consent. Lobbyists cannot hide one bad provision inside a thousand-page omnibus. Members vote on each item, on the record, with full public debate.',
  },
  {
    num: '06',
    title: 'Staggered 10-Year Phase-In',
    body: 'Existing inventory of ~50,000 federal statutes and ~430 agencies cannot all expire on day one — that would crash the government. Phase in over the first decade: ~10% of the federal code resunsets each year, in priority order. The oldest, biggest-impact, least-reviewed laws hit the sunset clock first. Predictable schedule, published in advance, no surprises. By year 10 every statute and every agency operates on the standard cycle.',
  },
  {
    num: '07',
    title: 'Mandatory Public Sunset Hearings With GAO + IG Report 12 Months Prior',
    body: 'Twelve months before any law or agency expires, the GAO publishes a mandatory sunset report — performance against outcome metrics, comparison to alternatives, recommendation. The Inspector General network adds a parallel oversight report. Both reports public, searchable, and submitted to Congress. A public sunset hearing must follow — testimony, debate, full transcript archived. No reauthorization happens in the dark.',
  },
  {
    num: '08',
    title: 'Public Comment Period + AI-Summarized Citizen Input Into the Record',
    body: 'During the 12-month sunset window, a public comment period opens via the Federal Register. Any citizen can submit. Submissions are aggregated and AI-summarized — themes, frequency, geographic distribution, supporting evidence — and the summary is entered into the formal congressional record as part of the reauthorization debate. The summary is auditable: the raw inputs are public. Citizens are part of the sunset conversation, not bystanders.',
  },
  {
    num: '09',
    title: 'Hard Sunset on Congressional Failure to Act',
    body: 'If Congress fails to pass reauthorization by the deadline, the law dies. No continuing resolution. No auto-extension. No emergency carry-over. With 12 months of advance GAO + IG reporting, there is no excuse for surprise. The hard sunset is the entire point of the mechanism — soft sunsets become continuing resolutions become permanence again. Congress wanted the law to continue? Congress had a year. Pass the bill or the law expires.',
  },
  {
    num: '10',
    title: 'Federal Regulations Auto-Sunset at 10 Years',
    body: 'Every federal regulation auto-expires 10 years from promulgation unless the issuing agency republishes it with updated cost-benefit analysis and the public comment period required of any new rule. Major Questions Doctrine codification (bureaucracy reform) means Congress, not agencies, controls major economic-impact rules in the first place. The 185,000-page CFR shrinks by attrition as outdated rules age out and only the working ones get re-promulgated. Triple-locked with the bureaucracy reform regulatory mechanism.',
  },
  {
    num: '11',
    title: 'Executive Agreements Stay Article II — But Reviewed Every 10 Years',
    body: 'Treaties ratified under Article II remain in force per their own terms — sunsetting them would be constitutionally unprecedented and could destabilize standing international commitments. But every treaty and every executive agreement gets a mandatory 10-year congressional review. The review is a public report on continued relevance, cost, performance, and alternatives. Any member can call a floor vote to terminate or renegotiate based on the review. Treaties cannot sunset silently — they cannot drift unexamined either.',
  },
  {
    num: '12',
    title: 'No Automatic State Revival on Federal Preemption Sunset',
    body: 'Some federal laws preempt state law (drug scheduling, environmental standards, certain immigration rules). When a preemptive federal law sunsets, state law does not automatically revive in its place. States must affirmatively pass their own legislation — clean slate, deliberate choice. Avoids the chaos of dormant state statutes from 1972 suddenly springing back into force. States knew the federal sunset was coming — they had 12 months of advance GAO reporting. Act, or accept the absence.',
  },
  {
    num: '13',
    title: 'Statutory Sunset Act Now + Article V Amendment in Parallel',
    body: 'The Sunset Act passes through Congress as ordinary statute — fast, immediate, effective. In parallel, we run an Article V constitutional amendment to lock the principle in permanently. Statutory law a future Congress can repeal; constitutional law it cannot. Both tracks together, same as our term-limits and campaign-finance strategy. Statutory delivers now. The amendment delivers forever.',
  },
] as const

export default function SunsetClausesPage() {
  return (
    <div>
      <IssueHero
        badge="⏳ Sunset Clauses"
        badgeColor="var(--teal)"
        title={<>Nothing in Washington <br/>Is <span style={{ color: 'var(--teal)' }}>Permanent.</span></>}
        subtitle="One Congress should not bind the next five. Every federal law expires in 10 years. Every agency expires in 10 years. Every regulation expires in 10 years. Reauthorize or it dies. Narrow carve-outs only. Standalone votes by default. Hard sunset on failure."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Oppose blanket sunsets — 'destabilizes safety net,' 'forces re-litigation of settled rights.' Defend permanent authorizations. Fight every year to extend expiring credits the IRA already structured with cliffs."
          rep="Rhetorical fans — Tea Party era ran on it. PATRIOT Act sunsets extended 6 times without real debate. Tax cuts written with sunsets to game CBO scoring then made permanent. REINS Act passes House, dies in Senate every cycle."
          us="10-year default sunset on every federal law, every agency, every regulation. Variable cycles allowed only with explicit clause + vote. Narrow carve-outs — Bill of Rights, civil rights floor (ratchet), entitlement benefits. Standalone votes by default, tightly-related bundles allowed with member-veto. 12-month advance GAO + IG report. AI-summarized citizen comment into the record. Hard sunset on failure — no continuing resolutions. Treaties reviewed every 10 years, terminable by floor vote. No automatic state revival on preemption sunset. Statutory Act now + Article V amendment in parallel."
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
          <StatCard num="$300B" label="Expired authorizations still funded annually" color="#c8102e" />
          <StatCard num="6" label="Times PATRIOT Act sunset 'extended'" color="#c8102e" />
          <StatCard num="81" label="Agencies abolished by Texas sunset commission since 1977" color="var(--green)" />
          <StatCard num="10yr" label="Default sunset cycle" color="var(--green)" />
          <StatCard num="0" label="Built-in obsolescence today" color="var(--gold)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Thirteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">One forcing function, calibrated honestly. Default to sunset, justify any exception, publish everything, deliver on the deadline.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>The Honest Answer to &quot;Sunset Everything&quot;</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            A pure &quot;everything sunsets&quot; rule is a slogan. The Bill of Rights cannot sunset. The Civil Rights Act cannot be allowed to sunset by neglect. Social Security benefits cannot be allowed to evaporate because a Congress missed a deadline. Equally, a system riddled with carve-outs is the status quo with extra steps — every interest group lobbies for permanent-status and nothing ever expires. Our answer is the narrowest possible carve-out: the Bill of Rights and constitutional amendments are not statutes and do not sunset. Civil rights implementing statutes operate on a ratchet — they can be strengthened but not weakened by the sunset process. Entitlement benefit promises persist; administering programs and funding mechanisms still face the cycle. Everything else defaults to 10 years. If a law deserves longer, Congress argues for it in the open, votes on the record, and the cycle is named in the bill. Default to sunset. Justify any exception. Publish everything. Deliver on the deadline.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: the agency-level half of the same forcing function. The reg-level sunset in mechanism 10 is the same mechanism locked from the bureaucracy side. Per-agency workforce caps voted each sunset cycle.</li>
            <li>• <Link href="/issues/term-limits" className="underline hover:text-white">Term limits</Link>: people cap + law cap + agency cap = no part of the federal government rides forever. Same Article V + statutory parallel-track strategy.</li>
            <li>• <Link href="/issues/campaign-finance" className="underline hover:text-white">Campaign finance</Link>: same parallel-track playbook — statutory Sunset Act now, constitutional amendment campaign in parallel.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: $300B in expired authorizations still funded annually is the discretionary half of the debt math. Sunset enforces the line.</li>
            <li>• <Link href="/reform" className="underline hover:text-white">100-Day Action Plan</Link>: Sunset Act introduced day 10, GAO sunset-report mandate day 21.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: U.S. Code (Office of the Law Revision Counsel), Code of Federal Regulations, Texas Sunset Advisory Commission performance reports 1977–2024, Congressional Research Service R44663 (sunset-clause analyses), CBO 2024 expired-authorization tables, GAO sunset and reauthorization studies, REINS Act legislative history, Office of Management and Budget agency reports, U.S. Constitution Article V.
          </p>
        </div>
      </section>
    </div>
  )
}
