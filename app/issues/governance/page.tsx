import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import SubIssueCard from '@/components/issue/SubIssueCard'
import CrossThread from '@/components/issue/CrossThread'

export const revalidate = 60

const SUB_ISSUES = [
  {
    icon: '⏰',
    title: 'Term Limits',
    oneLiner: '12-year House (6 terms) + 12-year Senate (2 terms), separate clocks. Presidency stays at 8. SCOTUS lifetime with mandatory retirement at 80. Article V amendment + Citizens Party self-pledge today.',
    href: '/issues/term-limits',
  },
  {
    icon: '💵',
    title: 'Campaign Finance',
    oneLiner: 'Statutory corp PAC ban. $10K individual cap indexed. SuperPACs back to $5K/donor PAC rules. DISCLOSE Act. $200/citizen democracy vouchers. 24hr disclosure. We pre-comply today.',
    href: '/issues/campaign-finance',
  },
  {
    icon: '🗳️',
    title: 'Voting Reform',
    oneLiner: 'Ranked-choice all federal races. Auto-reg at 18 with back-end citizenship verify. Free federal ID replacing state DL (biometric opt-in). 7-day early voting. Paper trail + audits. Algorithmic redistricting. Felons restored post-supervision.',
    href: '/issues/voting-reform',
  },
  {
    icon: '🚪',
    title: 'Lobbying Ban',
    oneLiner: 'Lifetime ban on ex-members. 5-year revolving door. Close the FARA gap — AIPAC, Saudi, Qatar, Russia, China all must register. Ban FARA-org PACs. Single citizenship for federal office, clearance, $10K+ donors.',
    href: '/issues/lobbying-ban',
  },
  {
    icon: '⚙️',
    title: 'Bureaucracy Reform',
    oneLiner: 'Mandatory GAO implementation in 18 months with auto budget cut. Honest program consolidation, no quota. Results-based budgeting. 10yr agency sunset. Full contract rebuild — commercial-first, OTA, vendor pools, prize-model, performance bonds, 5yr contract sunset. Per-agency workforce caps voted each cycle. Unified IG network. Real-time spending dashboard with AI anomaly flagging.',
    href: '/issues/bureaucracy-reform',
  },
  {
    icon: '⏳',
    title: 'Sunset Clauses',
    oneLiner: '10yr default sunset on every law, agency, and regulation. Variable cycles allowed only with explicit vote. Narrow carve-outs — Bill of Rights, civil rights ratchet, entitlement benefits. Standalone votes default. 12mo advance GAO + IG report. AI-summarized citizen comment into record. Hard sunset on failure. Treaties reviewed every 10yr. Statutory Act now + Article V amendment in parallel.',
    href: '/issues/sunset-clauses',
  },
  {
    icon: '📜',
    title: 'Legislative Process Reform',
    oneLiner: 'One bill, one subject — modeled on 43 states. Overall budget OK, specific funding separate. 72hr read-time + CBO score before vote. Germaneness required both chambers + conference. Earmarks banned — each gets own bill. AI plain-language summary into the record. Reconciliation subject to single-subject. Statutory rules now + Article V amendment in parallel.',
    href: '/issues/legislative-process',
  },
] as const

const THREADS = [
  {
    icon: '🚫',
    title: 'Anti-capture by design',
    description: 'Citizens Party plays by the rules we are fighting to change — 24-hour disclosure on every dollar above $200, pre-compliance with our proposed corporate-PAC ban and donor caps. Every governance mechanism — statutory PAC ban, lifetime lobbying ban, ranked-choice, term limits — is built to make the system itself impossible to capture the way the other two parties have been.',
    appliesTo: ['Campaign Finance', 'Lobbying Ban', 'Term Limits'],
  },
  {
    icon: '⏳',
    title: 'Sunset everything, always',
    description: 'Every federal law and every agency expires after 10 years unless reauthorized. Same forcing function applied across the entire federal government. Pairs with results-based budgeting — programs missing measurable outcomes 3 years lose funding.',
    appliesTo: ['Sunset Clauses', 'Bureaucracy Reform'],
  },
  {
    icon: '🔓',
    title: 'Compete-or-collapse politics',
    description: 'Ranked-choice voting + lower ballot access barriers + small-donor democracy vouchers means the duopoly has to compete on policy, not just gerrymandering and donor money. Voters get more than two bad options.',
    appliesTo: ['Voting Reform', 'Campaign Finance'],
  },
  {
    icon: '👁️',
    title: 'Radical transparency',
    description: 'Same-day donor disclosure, mandatory GAO audit publication, federal spending dashboard, real-time lobbying contact logs. Every dollar and every meeting in the open within 24 hours. Sunlight as the default, not the exception.',
    appliesTo: ['Campaign Finance', 'Lobbying Ban', 'Bureaucracy Reform'],
  },
  {
    icon: '⚖️',
    title: 'Constitutional, not executive',
    description: 'Term limits, end of birthright citizenship loopholes, balanced-budget guardrails — pursued the legitimate way: Article V amendment. No executive orders that the next president flips back. Hard to do, durable when done.',
    appliesTo: ['Term Limits', 'Sunset Clauses'],
  },
  {
    icon: '📊',
    title: 'Outcomes, not appropriations',
    description: 'Every federal program ships measurable outcome metrics. Miss 3 years running — funding cut. Replaces the "we increased spending" theatrics of both parties with actual results, agency by agency, year by year.',
    appliesTo: ['Bureaucracy Reform', 'Sunset Clauses'],
  },
  {
    icon: '📜',
    title: 'One bill, one subject',
    description: 'No more 4,000-page omnibus packages. No more pet-project earmarks smuggled into disaster relief. Single-subject rule for every bill — modeled on 43 state constitutions. Overall budget allowed as one bill; specific funding to NGOs, agencies, contractors gets its own standalone vote. 72-hour read-time + CBO score required before any vote. Citizens see what their representatives are voting on.',
    appliesTo: ['Legislative Process Reform', 'Sunset Clauses', 'Lobbying Ban'],
  },
] as const

export default function GovernancePillarPage() {
  return (
    <div>
      <IssueHero
        badge="🏛️ Governance Pillar"
        badgeColor="var(--teal)"
        title={<>Government Works for <span style={{ color: 'var(--teal)' }}>Citizens.</span><br/>Not Careers or Donors.</>}
        subtitle="Both parties built the rules to protect themselves. We rewrite them — and play by them first. 24-hour disclosure on every dollar. No lifetime seats. No K Street pipeline. One bill, one subject. Seven mechanisms, one principle."
      />

      <SignaturePrinciple />
      <SubIssuesGrid />
      <CrossThreadsGrid />
      <ExecutionLink />
      <PillarCTA />
    </div>
  )
}

function SignaturePrinciple() {
  return (
    <section className="py-16 px-4" style={{ background: '#0d1f38' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          style={{ background: 'color-mix(in srgb, var(--green) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 30%, transparent)', color: 'var(--green)' }}>
          ★ Signature Principle
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          We Play By the Rules<br/>
          <span style={{ color: 'var(--teal)' }}>We&apos;re Fighting to Change.</span>
        </h2>
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
          The two-party machine survives on three things: career politicians, corporate money, and the K Street pipeline. We strip all three at the statutory level — and pursue the constitutional ones the legitimate way. We operate today under the rules we want to be law tomorrow — 24-hour donor disclosure, pre-compliance with our own proposed caps — because unilateral disarmament loses elections, and you cannot change laws you cannot win under.
        </p>
      </div>
    </section>
  )
}

function SubIssuesGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-3">The 7 Sub-Issues</h2>
          <p className="text-[var(--muted)]">Each links to the full plan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SUB_ISSUES.map(s => (
            <SubIssueCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CrossThreadsGrid() {
  return (
    <section className="py-16 px-4" style={{ background: '#0d1f38' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-3">How It All Connects</h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">Six threads that run across the sub-issues. The Governance platform is one design, not six unrelated positions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {THREADS.map(t => (
            <CrossThread key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExecutionLink() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto p-6 rounded-2xl"
        style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 30%, transparent)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="text-4xl">🗓️</div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--teal)' }}>The Policy → The Plan</h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              This is the policy layer. See the day-by-day execution on the <Link href="/reform" className="underline hover:text-white" style={{ color: 'var(--teal)' }}>100-Day Action Plan</Link> — lobbying blackout day 2, congressional stock trading ban day 3, revolving door freeze day 7.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PillarCTA() {
  return (
    <section className="py-20 px-4 text-center" style={{ background: 'linear-gradient(135deg, var(--card), var(--navy))' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black mb-4">
          Tired of <span style={{ color: 'var(--teal)' }}>career politicians</span>?
        </h2>
        <p className="text-[var(--muted)] text-lg mb-8">
          The Citizens Party Governance platform is the rewrite — at the statute level, at the constitutional level, and in the rules of our own party.
        </p>
        <Link href="/join"
          className="inline-block px-10 py-4 rounded-full font-black text-xl text-[var(--navy)] transition-all hover:scale-105"
          style={{ background: 'var(--teal)' }}>
          Join the Movement 🦅
        </Link>
      </div>
    </section>
  )
}
