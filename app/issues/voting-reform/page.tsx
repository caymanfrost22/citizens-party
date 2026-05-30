import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'
import MechanismCard from '@/components/issue/MechanismCard'

export const revalidate = 60

const VOTING_MECHANISMS = [
  {
    num: '01',
    title: 'Ranked-Choice Voting for All Federal Races',
    body: 'House, Senate, presidential primaries, and presidential general. Voters rank candidates in order of preference. Lowest finisher eliminated, ballots redistributed until someone clears 50%. Kills the spoiler dynamic that locks the two-party system in place — Citizens Party voters rank us #1 and a major party #2 without electing their opposite. Winners hold majority support, not 32% plurality. Proven in Maine and Alaska statewide, NYC + 60 cities locally, Australia and Ireland nationally for decades.',
  },
  {
    num: '02',
    title: '7-Day Early Voting — Federal Floor',
    body: 'Minimum 7 days of in-person early voting in every state for every federal election. Drop boxes monitored 24/7. States can exceed; none can go below. Honest compromise — long enough to remove "could not get to polls" as a reason, short enough that R-leaning states will tolerate the mandate.',
  },
  {
    num: '03',
    title: 'No-Excuse Mail Voting + Signature/ID Integrity Layer',
    body: 'Any registered voter may request a mail ballot. No excuse required. But: signature match against on-file signature, plus voter ID number printed on the return envelope, plus county-level signature audit. Cures must be available within 7 days of the deficiency notice. Resolves the access/integrity fight — both sides get what they actually need.',
  },
  {
    num: '04',
    title: 'Federal Election Day Holiday + Paid PTO Mandate',
    body: 'Federal Election Day declared a national holiday. Federal employees off. Private-sector mandate: paid time off to vote, no carve-outs, no "comp time" workaround. Pairs with the 7-day early window — the holiday matters most for working-class voters who cannot take time off mid-shift. Tuesday stays — moving Election Day creates calendar conflicts with religious observance for several constituencies.',
  },
] as const

const REG_AND_ID_MECHANISMS = [
  {
    num: '05',
    title: 'Auto-Registration at 18 + Same-Day Backup',
    body: 'Every US citizen automatically registered to vote on their 18th birthday using existing federal records (SSA, USCIS for naturalized citizens). Citizenship verified back-end at the moment of registration — no paperwork burden on the voter. Same-day registration available as backup for anyone the system misses: homeless voters, new residents, naturalized day-of mismatches, system errors. The auto-registration moment also triggers the federal voter ID mailing.',
  },
  {
    num: '06',
    title: 'Free Federal Photo ID — Replaces State Driver License',
    body: 'A single federal photo ID, free, secure-chip, mailed automatically to every registered voter. Replaces the patchwork of state driver licenses (federal preempts under Commerce Clause for driving privileges and Elections Clause for voting). One card: drives your car, votes your ballot, boards your flight, opens your bank account. Ends the "DMV-trip-for-voter-ID" access fight and the "fake-ID-at-the-poll" integrity fight in one move.',
  },
  {
    num: '07',
    title: 'Biometric Tier — Opt-In Only',
    body: 'Baseline federal ID has no biometric data. It works for voting, driving, and TSA. Voters who choose may opt in to a biometric tier (fingerprint, facial template) that unlocks digital signature, banking KYC, federal benefits self-service, and other digital identity uses. Strict guardrails: biometric data stored only on the card chip, never centrally. Federal database aggregation prohibited by statute and a parallel constitutional amendment. Hardware kill-switch lets the holder revoke biometric enrollment at any time. Criminal penalties for any unauthorized aggregation or surveillance use. 10-year sunset per our sunset-clauses platform — Congress must affirmatively reauthorize the program or it ends.',
  },
  {
    num: '08',
    title: 'Citizenship Verification — Back-End, Not Voter-Burden',
    body: 'Citizenship verified server-side at two moments: (a) at auto-registration via SSA citizenship flag (already encoded at SSN issuance) plus USCIS naturalization records, and (b) again at ID issuance as a redundant check. Voter carries no paperwork, makes no DMV trip, produces no birth certificate. Solves the R-side concern (no non-citizens on rolls) without the D-side concern (document-poor disenfranchisement). The SAVE Act model — requiring voters to physically produce birth certificates — is rejected as both unnecessary (the data already exists in federal systems) and discriminatory in effect (~9% of US-born citizens lack ready access to passport/birth-cert).',
  },
] as const

const INTEGRITY_AND_FAIRNESS = [
  {
    num: '09',
    title: 'Paper Trail Required + Mandatory Risk-Limiting Audits',
    body: 'Every federal vote leaves a voter-verified paper record. Mandatory post-election risk-limiting audits (RLAs) in every congressional district — statistical sampling to confirm the reported winner is mathematically the actual winner. No more black-box machines, no more "we believe the machines worked." If a recount is needed, the paper exists; if a fraud claim is made, the math answers it.',
  },
  {
    num: '10',
    title: 'Algorithmic Redistricting Standards',
    body: 'Federal floor on redistricting: every congressional map must pass published algorithmic compactness, contiguity, and communities-of-interest tests. Maps that fail the math are invalid as a matter of federal law and trigger an automatic court-supervised redraw. We do not mandate independent commissions — states design their own process, but every process must produce maps that pass the math. Removes partisan gerrymandering from both parties (IL, NY, MD Dems and NC, OH, FL Rs alike) without dictating state administrative structure.',
  },
  {
    num: '11',
    title: 'Felon Voting Rights Restored Post-Supervision',
    body: 'Federal floor: voting rights automatically restored when supervision (parole or probation) is fully completed. Department of Corrections triggers re-registration and federal ID re-issue at the moment of release-from-supervision. People who have served their sentence and met their obligations are citizens again — full citizens, including the vote.',
  },
  {
    num: '12',
    title: 'Internet Voting — Overseas Military and Diplomats Only',
    body: 'Internet voting expanded only for UOCAVA voters (overseas military, military families, diplomats, intelligence officers stationed abroad) who routinely miss mail-ballot deadlines. Beyond that, internet voting stays off the table. Identity is not the only attack surface — device integrity, transmission integrity, vote secrecy from coercion, and the catastrophic-scale-of-compromise problem remain unsolved by any current cryptographic technology. CISA, NIST, ACM, and every major cybersecurity body align here. We may revisit in 10–20 years as verifiable computation and zero-knowledge proof tech matures; not now.',
  },
  {
    num: '13',
    title: 'Elections Clause Federal Floor',
    body: 'Article I §4 of the Constitution explicitly gives Congress authority to set "Times, Places, and Manner" of federal elections. We use it. The mechanisms above are a federal floor for federal races; states may exceed any of them but cannot go below. Does not federalize state and local elections — federalism stays intact for what is genuinely state business.',
  },
] as const

export default function VotingReformPage() {
  return (
    <div>
      <IssueHero
        badge="🗳️ Voting Reform"
        badgeColor="var(--teal)"
        title={<>Access <span style={{ color: 'var(--teal)' }}>and</span> Integrity.<br/>Both, Together.</>}
        subtitle="Both parties play this as a wedge — access vs. fraud. Both are real. Ranked-choice, auto-registration with citizenship verification, free federal ID, paper trail, mandatory audits, paid time off to vote, fair maps. Designed as one system, not thirteen separate fights."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Expand access. Auto-registration. No-excuse mail. Same-day registration. Restore VRA preclearance. Oppose voter ID as suppression."
          rep="Voter ID required. Restrict mail voting. Shorten early voting. Election integrity framing — fraud risk, non-citizen voting, mail ballot harvesting. SAVE Act citizenship documentation."
          us="Ranked-choice for all federal races. Auto-registration at 18 with back-end SSA/USCIS citizenship verification + same-day backup. Free federal photo ID replacing state driver license (biometric opt-in). 7-day early voting floor. No-excuse mail with signature + ID verification. Federal Election Day holiday with paid PTO mandate. Paper trail + mandatory risk-limiting audits. Algorithmic redistricting standards. Felon voting restored post-supervision. Internet voting limited to overseas military."
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
          <StatCard num="93%" label="House incumbent re-elect rate" color="#c8102e" />
          <StatCard num="3" label="States using ranked-choice federally" color="var(--teal)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 30%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>The Integrated Stack — One Design, Not Thirteen Fights</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
            Registration, ID, citizenship verification, and integrity are one system. Splitting them creates the very loopholes both parties exploit.
          </p>
          <pre className="text-xs whitespace-pre-wrap font-mono p-4 rounded-xl" style={{ background: 'var(--card)', color: 'var(--muted)' }}>{`Age 18 (or naturalization day)
   ↓
SSA + USCIS records auto-trigger federal voter registration
   ↓
Back-end citizenship check (SSA citizen flag — already exists)
   ↓
Secure photo federal ID mailed to registered address
   ↓
ID used at polls, for mail-ballot signature/ID verification,
  and to drive, fly, bank (replaces state driver license)
   ↓
Voter votes in person, by mail, or in 7-day early window
   ↓
Voter-verified paper ballot generated either way
   ↓
Risk-limiting audit confirms result is mathematically correct`}</pre>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🗳️ Voting Itself</SectionLabel>
          <h2 className="text-3xl font-black">How the Vote Gets Cast</h2>
        </div>
        <div className="space-y-5">
          {VOTING_MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor="var(--teal)" />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🪪 Registration + ID + Citizenship</SectionLabel>
          <h2 className="text-3xl font-black">One Federal ID, One Federal Roll</h2>
        </div>
        <div className="space-y-5">
          {REG_AND_ID_MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor="var(--teal)" />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🔒 Integrity + Fairness</SectionLabel>
          <h2 className="text-3xl font-black">Counting, Auditing, Mapping</h2>
        </div>
        <div className="space-y-5">
          {INTEGRITY_AND_FAIRNESS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor="var(--teal)" />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--gold) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Federal Biometric ID — The Civil Liberties Guardrails</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
            A general-purpose federal photo ID is a serious power. Built wrong, it is the infrastructure of a surveillance state. We are explicit about the constraints.
          </p>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <strong className="text-white">Biometric tier is opt-in only.</strong> Baseline ID has no biometric data.</li>
            <li>• <strong className="text-white">Biometric data stored on the card chip only.</strong> No central federal biometric database. Statute + constitutional amendment.</li>
            <li>• <strong className="text-white">Hardware kill-switch.</strong> Holder can revoke biometric enrollment at any time, at any participating location, instantly.</li>
            <li>• <strong className="text-white">No aggregation of ID-use data.</strong> Federal government may not record where, when, or how often the ID is used. Criminal penalties for violations.</li>
            <li>• <strong className="text-white">Enumerated uses only.</strong> Constitutional amendment limits federal use to voting, driving, federal employment, TSA, federal benefits, and voluntary digital signature. No mission creep without amendment.</li>
            <li>• <strong className="text-white">10-year sunset.</strong> Per our <Link href="/issues/sunset-clauses" className="underline">sunset-clauses</Link> platform. Congress must affirmatively reauthorize the program every decade or it ends.</li>
            <li>• <strong className="text-white">No social-credit linkage.</strong> The China comparison is not hypothetical — they used a national ID + biometric system to build it. Statute and amendment ban any linkage between this ID and behavior scoring, benefit conditioning, or speech tracking.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: '#0d1f38', border: '1px solid rgba(255,255,255,0.07)' }}>
          <h3 className="font-bold mb-3 text-white">Why We Do Not Propose Voter Tests or Taxpayer-Only Voting</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
            Two ideas come up often in any honest voting-reform conversation: requiring voters to pass a civics test, and limiting the vote to taxpayers. Both reflect real concerns — voters manipulated by elite messaging, and people voting for benefits paid by others. Both have implementations that are constitutionally and historically dead.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl" style={{ background: 'var(--card)' }}>
              <h4 className="font-bold mb-2 text-sm" style={{ color: '#fca5a5' }}>Civics Tests</h4>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>
                Used from 1890s–1965 as the primary tool of Black voter suppression in the Jim Crow South. Voting Rights Act of 1965 banned them. Any modern version would be written by whichever party controls Congress, graded under that party&apos;s standards, and used as a weapon. We reject it.
              </p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--card)' }}>
              <h4 className="font-bold mb-2 text-sm" style={{ color: '#fca5a5' }}>Taxpayer-Only Voting</h4>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>
                24th Amendment (1964) explicitly bans conditioning the vote on tax payment. Harper v. Virginia Board of Elections (1966) extended the ban to state elections. Our <Link href="/issues/taxes" className="underline hover:text-white">consumption-tax reform</Link> also makes the distinction moot — everyone who buys anything contributes.
              </p>
            </div>
          </div>
          <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
            The underlying concerns are addressed elsewhere in the platform:
          </p>
          <ul className="space-y-1 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <strong className="text-white">Uninformed voters →</strong> federally standardized voter info pamphlets (Oregon model), mandatory open debates with ballot disclaimer for refusers, planned Citizens Party <code className="text-xs px-1 rounded" style={{ background: 'var(--card)' }}>/poll/</code> policy-quiz infrastructure showing voters their alignment with each candidate&apos;s record.</li>
            <li>• <strong className="text-white">Vote-for-benefits-others-pay →</strong> <Link href="/issues/sunset-clauses" className="underline hover:text-white">sunset clauses</Link> force re-debate every 10 years, <Link href="/issues/taxes" className="underline hover:text-white">consumption tax</Link> means everyone contributes, <Link href="/issues/debt-spending" className="underline hover:text-white">balanced-budget amendment</Link> stops Congress writing checks the future has to cash, <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">results-based budgeting</Link> cuts programs missing metrics.</li>
            <li>• <strong className="text-white">Elite influence →</strong> <Link href="/issues/campaign-finance" className="underline hover:text-white">campaign finance reform</Link> + <Link href="/issues/lobbying-ban" className="underline hover:text-white">lobbying ban</Link> + <Link href="/issues/term-limits" className="underline hover:text-white">term limits</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/campaign-finance" className="underline hover:text-white">Campaign finance</Link>: ranked-choice + small-donor vouchers = third parties survive their first cycle. Citizens Party math depends on RCV.</li>
            <li>• <Link href="/issues/term-limits" className="underline hover:text-white">Term limits</Link>: ranked-choice + algorithmic redistricting + term limits attack incumbent entrenchment from three directions.</li>
            <li>• <Link href="/issues/immigration" className="underline hover:text-white">Immigration</Link>: SSA + USCIS citizenship verification at registration pairs with the naturalization renunciation rule there.</li>
            <li>• <Link href="/issues/lobbying-ban" className="underline hover:text-white">Lobbying ban</Link>: the single-citizenship rule for federal office, clearance, and major donors lives on that page; this page handles the universal voter version.</li>
            <li>• <Link href="/issues/sunset-clauses" className="underline hover:text-white">Sunset clauses</Link>: federal biometric ID program 10-year sunset is the constitutional guardrail against a permanent national-ID surveillance state.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: U.S. Election Assistance Commission, FairVote ranked-choice analysis, Maine + Alaska RCV implementation reports, NYC RCV mayoral primary 2021 data, Brennan Center voter ID + redistricting studies, MIT Election Data & Science Lab, Voting Rights Act of 1965 (52 U.S.C. § 10101 et seq.), 24th Amendment, Harper v. Virginia Board of Elections (1966), Article I §4 (Elections Clause), CISA + NIST internet voting risk assessments, Oregon Voter Pamphlet program, Australia + Ireland federal RCV history.
          </p>
        </div>
      </section>
    </div>
  )
}
