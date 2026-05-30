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
    title: 'Single-Subject Rule — One Bill, One Subject',
    body: 'Every bill addresses one subject only, with the subject clearly stated in the title. Every provision must be germane to the named subject. Modeled on the constitutional single-subject rule that exists in 43 of 50 states for state legislatures. Ends the 4,000-page omnibus package, the Christmas-tree bill, the must-pass-disaster-relief-with-Ukraine-funding-stuffed-inside. If it does not belong to the bill\'s subject, it is its own bill.',
  },
  {
    num: '02',
    title: 'Dual Enforcement — Parliamentarian Pre-Floor + Member Point of Order',
    body: 'Belt-and-suspenders enforcement. (a) The Parliamentarian reviews every bill before it reaches the floor and certifies single-subject compliance; non-compliant bills are returned to committee. (b) Any individual member may raise a point of order on the floor if a non-compliant bill slips through — sustained point of order kills the bill. Two independent chokepoints. Neither can be captured by leadership alone.',
  },
  {
    num: '03',
    title: 'Funding Bills — Overall Budget OK, Specific Funding Separate',
    body: 'The honest carve-out. Congress passes one annual overall federal budget bill — macro topline, appropriations buckets, agency totals — under single-subject "the federal budget." But every specific recipient of federal money — a named NGO grant, a contractor earmark, a district-level project, a single-program funding line — is its own standalone bill with its own vote. Citizens see who voted yes on the Sierra Club grant separately from who voted yes on Pentagon procurement separately from who voted yes on the SNAP reauthorization. No more $200M for a state senator\'s alma mater hidden in a defense appropriations bill.',
  },
  {
    num: '04',
    title: '72-Hour Minimum Read Time Before Floor Vote',
    body: 'Final bill text must be published in its final form at least 72 hours before any floor vote. No exceptions for "emergency" except by recorded supermajority vote naming the specific emergency. One workday plus a weekend — every member, every staffer, every citizen, every journalist has time to actually read the bill. Ends the 3am floor vote on a bill nobody has read.',
  },
  {
    num: '05',
    title: 'Mandatory CBO Score Published 72 Hours Before Vote',
    body: 'Every bill receives a Congressional Budget Office score — full cost projection over 10 years, dynamic and static scoring, per-citizen cost calculation — published at the same 72-hour mark. No more "we have to pass it to find out what is in it." If the CBO has not scored it, the vote does not happen. Pairs with the 72-hour read-time as the minimum information floor below which no vote is legitimate.',
  },
  {
    num: '06',
    title: 'Germaneness in Both Chambers + Conference Committee',
    body: 'Amendments must be germane to the bill\'s subject in both the House AND the Senate — closes the Senate non-germane amendment loophole that lets unrelated provisions ride. Germaneness also applies to conference committee changes — no "ghost provisions" introduced at conference that were never in either chamber\'s passed version. Whatever comes out of conference, every provision in it must trace back to the bill\'s single subject.',
  },
  {
    num: '07',
    title: 'AI-Generated Plain-Language Summary Into the Congressional Record',
    body: 'Every bill ships with a CBO-certified one-page plain-language summary AND a separately published AI-generated reader-grade-eight summary — both entered into the formal congressional record. The AI summary is auditable: the raw bill text is public, the prompt is published, anyone can verify. Citizens who cannot read a 1,000-page statute can read a one-page summary. Members cannot claim "I did not know that was in there" — the summary is in the record.',
  },
  {
    num: '08',
    title: 'All Earmarks Banned — Specific Recipient Funding Is Its Own Bill',
    body: 'No earmarks of any kind in any bill. Pairs directly with mechanism 3. If a member wants federal money flowing to a specific recipient — a hospital in their district, an NGO, a contractor, a research institute, an alma mater — that funding is a standalone bill that passes or fails on its own merits, with the sponsor named, the recipient named, the dollar amount named, and a recorded vote. No more horse-trading earmarks for vote support. No more vote-yes-on-the-omnibus-because-your-district-got-a-bridge.',
  },
  {
    num: '09',
    title: 'Conference Committee + Reconciliation Reform',
    body: 'Two of the biggest single-subject loopholes today. (a) Conference committee changes must be germane to the bill subject AND face the same 72-hour read-time + CBO-score requirement before re-vote. (b) Reconciliation bills — currently exempt from filibuster and effectively exempt from subject limits under the Byrd Rule — are made subject to the single-subject rule like everything else. Ends the ACA/TCJA/IRA pattern of mashing healthcare + tax + energy + IRS funding into one reconciliation vehicle. Major Senate-rules change. Worth the fight.',
  },
  {
    num: '10',
    title: 'Plain-Language Summary Read Aloud on the Floor',
    body: 'Before any floor vote, the CBO-certified plain-language summary is read aloud in full. Replaces the symbolic-but-impractical "read the entire bill aloud" tradition with the practical "every member and every C-SPAN viewer hears what they are voting on in plain English." Theater that actually works. Six minutes of reality before a recorded vote.',
  },
  {
    num: '11',
    title: 'Statutory Rules Change Now + Article V Amendment in Parallel',
    body: 'The single-subject rule, germaneness rule, 72-hour read-time, CBO-score requirement, and earmark ban all pass first as House and Senate rules changes — fast, immediate, effective in the next Congress. In parallel, we run an Article V constitutional amendment writing the single-subject rule into the U.S. Constitution permanently — matching the constitutional protection that already exists in 43 states. Statutory rules a future Congress can repeal; constitutional rules it cannot. Same parallel-track playbook as term limits, campaign finance, and sunset clauses. Statutory delivers now. The amendment delivers forever.',
  },
] as const

export default function LegislativeProcessPage() {
  return (
    <div>
      <IssueHero
        badge="📜 Legislative Process Reform"
        badgeColor="var(--teal)"
        title={<>One Bill. <br/><span style={{ color: 'var(--teal)' }}>One Subject.</span></>}
        subtitle="The Consolidated Appropriations Act of 2023 was 4,155 pages. Average House member reads 5% of any bill over 500 pages before voting. Both parties built this — Democrats defend the omnibus, Republicans introduce the One Subject Act every Congress and let it die. We pass it. Modeled on 43 state constitutions."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Defend omnibus as 'necessary compromise vehicle.' ACA 906 pages. IRA 730 pages with energy + healthcare + tax + IRS funding mashed together. Build Back Better attempt 2,468 pages. Block One Subject at a Time Act every cycle."
          rep="Rhetorical fans — House Freedom Caucus pushes it constantly. Pass 4,155-page omnibus under R speaker (FY2023). TCJA 1,097 pages stuffed with industry-specific carve-outs. One Subject at a Time Act introduced every Congress since 1995, dies in committee."
          us="Single-subject rule for every bill — modeled on 43 state constitutions. Parliamentarian pre-floor cert + member point of order = dual enforcement. Overall federal budget allowed as one bill; specific NGO/agency/contractor funding gets standalone votes. 72-hour read-time + CBO score before any vote. Germaneness required both chambers AND conference committee. All earmarks banned — each recipient gets own bill. AI plain-language summary + CBO-certified summary into the record. Reconciliation subject to single-subject like everything else. Plain-language summary read aloud on the floor. Statutory rules change now + Article V amendment in parallel."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--teal)" bg="color-mix(in srgb, var(--teal) 10%, transparent)" border="color-mix(in srgb, var(--teal) 30%, transparent)">📊 The Omnibus Problem</SectionLabel>
          <h2 className="text-3xl font-black">What Both Parties Built</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="4,155" label="Pages — Consolidated Appropriations Act 2023" color="#c8102e" />
          <StatCard num="5%" label="Avg share of >500pg bill read before vote" color="#c8102e" />
          <StatCard num="280" label="Avg bill pages 2024 (up from ~10 in 1970)" color="#c8102e" />
          <StatCard num="43/50" label="State constitutions with single-subject rule" color="var(--green)" />
          <StatCard num="0" label="Federal single-subject rule today" color="var(--gold)" />
          <StatCard num="1995" label="One Subject Act first introduced — and every Congress since" color="var(--gold)" />
          <StatCard num="72hr" label="Citizens Party minimum read-time + CBO score" color="var(--teal)" />
          <StatCard num="1" label="Subject per bill" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Eleven Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Statutory rules change now. Constitutional amendment in parallel. Every loophole closed.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Do Amendments Still Exist Under Single-Subject?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Yes — bounded to the bill’s subject. Members can still amend numbers, scope, eligibility, and language. Members can strike provisions. Members can offer substitute amendments that replace the entire bill with a same-subject alternative. What members cannot do under single-subject + germaneness is smuggle unrelated provisions in as &quot;amendments,&quot; tack on earmarks for off-topic districts, or use the amendment process to bundle in other subjects. The amendment process becomes a tool for genuinely improving the bill in front of you — not a back door around the single-subject rule. Without germaneness applied to amendments, the rule could be gutted at the amendment stage. With it, the rule survives all the way through to final passage and out of conference.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--green) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--green)' }}>What This Looks Like in Practice</h3>
          <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
            <strong className="text-white">Today:</strong> A disaster-relief bill includes $40B in unrelated Ukraine aid, $200M for a new federal building in a senator&apos;s home district, and a carve-out for a specific defense contractor. Members vote yes because their state needs the disaster money. Citizens cannot tell who supported what.
          </p>
          <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
            <strong className="text-white">Under our plan:</strong> The disaster-relief bill is one bill, on one subject — disaster relief. The Ukraine aid is its own bill, voted separately, with a recorded yes/no on Ukraine aid. The federal building is its own bill, voted separately, with the sponsoring senator named. The defense contractor carve-out is its own bill, voted separately, with the contractor named and the dollar amount named. Citizens see exactly who voted yes on what, line by line.
          </p>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            <strong className="text-white">The trade-off, honestly:</strong> Congress passes a lot more bills. Floor time becomes scarce. Some compromise vehicles become harder to assemble. We accept that trade — because the existing &quot;compromise&quot; is mostly hidden tradeoffs that lobbyists exploit and citizens cannot see. Daylight beats efficiency built on opacity.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/sunset-clauses" className="underline hover:text-white">Sunset clauses</Link>: standalone-vote default for reauthorizations is the same principle applied to expiring laws. Bills and reauthorizations both get up-or-down votes on their own merits.</li>
            <li>• <Link href="/issues/lobbying-ban" className="underline hover:text-white">Lobbying ban</Link>: earmark ban + single-subject rule together cut the channel through which lobbyists get pet provisions slipped into must-pass bills.</li>
            <li>• <Link href="/issues/campaign-finance" className="underline hover:text-white">Campaign finance</Link>: 24-hour donor disclosure + recorded standalone votes on every specific funding line = citizens can match every dollar in to every vote out.</li>
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: real-time spending dashboard + AI anomaly flagging gets cleaner data when every funding line is its own bill with its own vote.</li>
            <li>• <Link href="/reform" className="underline hover:text-white">100-Day Action Plan</Link>: single-subject rule introduced as House + Senate rules change in the opening week.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: 43-state survey of constitutional single-subject rules (NCSL), One Subject at a Time Act legislative history (every Congress since 1995), Consolidated Appropriations Act 2023 page counts, Congressional Research Service R44742 (omnibus appropriations), Byrd Rule history (Senate Budget Committee), CBO scoring procedures, Brennan Center for Justice on legislative transparency, Florida and Colorado state constitutional single-subject case law, U.S. Constitution Article V.
          </p>
        </div>
      </section>
    </div>
  )
}
