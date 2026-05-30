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
    body: 'The Government Accountability Office issues 700+ recommendations per year and tracks ~5,000 currently open. Congress and agencies ignore most. We make implementation mandatory: each open GAO recommendation must be implemented within 18 months or the responsible agency must publish a formal public rejection with reasoning. Agencies that repeatedly ignore recommendations trigger an automatic 2% next-year budget cut. The audit becomes the budget.',
  },
  {
    num: '02',
    title: 'Maximum Program Consolidation — Review-Driven, Not Quota-Driven',
    body: '2,400 overlapping federal assistance programs (up from ~1,000 in 1970). The honest answer is not "cut to exactly 800" — that is a slogan. Every program gets reviewed against the GAO duplication catalog and the results-based budgeting metrics. Programs that duplicate, fail to deliver outcomes, or have no measurable purpose get consolidated or eliminated. Programs that work, stay. No preset number — the number is whatever survives honest review. Single citizen-facing application portal per consolidated category.',
  },
  {
    num: '03',
    title: 'Results-Based Budgeting: Outcome Metrics or Funding Cut',
    body: 'Every federal program publishes measurable outcome metrics — not activity metrics, not "dollars spent." Miss the metric three years running: funding cut 10% the next cycle. Miss five years: zero out, program ends. Replaces the "we increased spending therefore we cared" theater of both parties. Outcomes are the budget. Pairs with the program-consolidation review — failing programs identify themselves.',
  },
  {
    num: '04',
    title: '10-Year Agency Sunset (Pairs With Sunset Clauses + Economic Plan)',
    body: 'Every federal agency auto-expires after 10 years unless Congress affirmatively reauthorizes through the sunset hearing process. Existing inventory phases in over the first decade on a staggered schedule. Forces real review of whether an agency\'s mission still exists, whether it is achieving it, and whether two agencies are doing the same thing. Devolution decision (kill / block-grant to states / federal-floor + state flexibility) is made program-by-program in the sunset hearing — no across-the-board rule.',
  },
  {
    num: '05',
    title: 'Federal Contracts: Commercial-First, OTA Expansion, Pre-Qualified Pools',
    body: 'Federal procurement averages 18 months from RFP to award. Tech moves in 6. We rebuild the entire $760B contract system: (a) commercial-item-first statute — if it exists on the open market, agencies must buy it, no custom builds; (b) expand Other Transaction Authority to every agency, raise caps to $500M — vendors picked in weeks, not months; (c) pre-qualified vendor pools by domain, mini-bids close in 30 days, new entrants apply quarterly; (d) prize-model procurement for innovation — post the problem and payout, pay on delivery, garage startups compete with Lockheed.',
  },
  {
    num: '06',
    title: 'Federal Contracts: Outcomes, Bonds, 5-Year Sunset',
    body: 'Continuing the contract rebuild: (e) performance-based outcomes, not specs — buy "99.99% uptime" not "server with X RAM"; (f) performance bonds on every contract over $50M — contractor posts the bond, forfeits on failure; (g) all federal contracts auto-sunset at 5 years, mandatory re-compete — no incumbent rides forever; (h) single-source contracts allowed up to $25M with 24-hour disclosure and mandatory IG review — speed for small buys, transparency catches favoritism; (i) GAO protest reform — frivolous protests force the bidder to pay the government\'s legal costs.',
  },
  {
    num: '07',
    title: 'Civil Service: Simplified Termination + Workforce Cap + Pay-for-Performance',
    body: 'Three reforms together replace the chainsaw-vs-defend false choice. (a) Performance-based termination on a 90-day due-process timeline replaces the current 12-month firing process — fair, fast, and real. (b) Each agency capped at its FY2019 workforce level. No backsliding to 2024 bloat, no DOGE chainsaw. (c) Pay-for-performance pilot programs expanded across all agencies — outcome-based bonuses, real reward for federal employees who deliver. Keeps the good people, removes the dead weight, stops the political-weapon game both parties played.',
  },
  {
    num: '08',
    title: 'Unified Inspector General Network — Statutory Independence',
    body: '74 federal Inspectors General currently report up through political appointees. The 2025 firing of 17 IGs in a single day showed why that structure fails. We restructure into a unified IG network with statutory independence: presidential nomination, Senate confirmation, removal only for cause with mandatory 30-day notice to Congress and written justification. Direct congressional reporting. Coordinated cross-agency investigations. Real watchdog teeth, not "advisory" reports filed and ignored.',
  },
  {
    num: '09',
    title: 'Regulatory Flow: Cost-Benefit + Sunset on New Rules, Major Questions Codified',
    body: 'Federal CFR currently runs 185,000 pages with ~3,500 new rules added each year. Two reforms control the flow. (a) Every new regulation must include a published cost-benefit analysis AND a 10-year sunset clause — no rule lives forever without re-vote. (b) Major Questions Doctrine codified into statute — Congress, not agencies, makes major economic policy decisions. Codifies West Virginia v. EPA. Stops the executive-branch policymaking-by-rulemaking cycle that flips with every administration.',
  },
  {
    num: '10',
    title: 'Real-Time Federal Spending Dashboard With AI Anomaly Flagging',
    body: 'Every federal contract, grant, and expenditure over $100K published to a unified public dashboard within 24 hours. Searchable by agency, recipient, ZIP code, program, and contract type. AI anomaly detection automatically flags suspicious patterns — sudden contract concentration, unusual cost escalations, repeat-vendor capture signals — and routes flagged items to the Inspector General network for review. Citizens see where the money goes in real time. Algorithms see the patterns humans miss.',
  },
  {
    num: '11',
    title: 'Workforce Caps Tied to Sunset Cycle — Vote for Increases',
    body: 'Each agency carries a workforce cap that is reproposed in every 10-year sunset hearing. The default starting cap is FY2019 staffing. If an agency genuinely needs more headcount — new mission, new threat, new program — it can request an increase via a recorded congressional vote tied to specific outcome metrics. No more silent staffing creep. No more chainsaw-and-defend yelling. Caps live in daylight, votes on the record, agencies justify their size every decade.',
  },
] as const

export default function BureaucracyReformPage() {
  return (
    <div>
      <IssueHero
        badge="⚙️ Bureaucracy Reform"
        badgeColor="var(--teal)"
        title={<>Honest Reform. <br/><span style={{ color: 'var(--teal)' }}>Not Chainsaw, Not Defend.</span></>}
        subtitle="2,400 federal programs. $250B documented GAO waste per year. 18-month average to award a contract. Both parties have one move each — Republicans swing the chainsaw, Democrats defend the building. Neither fixes it. We do the boring work."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Defend agency workforce, oppose mass cuts, modest evidence-based reform via OMB. Performance Reporting Act (1993) and GPRA Modernization (2010) on paper — dead in practice. IGs restored on principle."
          rep="Schedule F reclassifies ~50K career civil servants as at-will. DOGE workforce chainsaw — claimed $1T savings, GAO-verified ~$140B. Fired 17 IGs in one day Jan 2025. Hit-list of departments to eliminate rotates every cycle."
          us="Mandatory GAO implementation in 18 months with auto budget cut. Program consolidation by honest review, not quota. Results-based budgeting with hard triggers. 10-year agency sunset. Full federal contract rebuild — commercial-first, OTA expansion, pre-qualified pools, prize-model, outcome contracts, performance bonds, 5-year contract sunset. Simplified performance termination + FY2019 workforce cap + pay-for-performance. Unified IG network. Cost-benefit + sunset on every new reg. Major Questions Doctrine codified. Real-time spending dashboard with AI anomaly flagging. Per-agency caps voted in each sunset cycle."
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
          <StatCard num="5,000" label="Open GAO recommendations" color="var(--gold)" />
          <StatCard num="$760B" label="Annual federal contract spend" color="var(--gold)" />
          <StatCard num="18mo" label="Avg RFP-to-award timeline" color="#c8102e" />
          <StatCard num="185K" label="Pages in the CFR" color="#c8102e" />
          <StatCard num="74" label="Federal Inspectors General" color="var(--teal)" />
          <StatCard num="10yr" label="Agency sunset cycle" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Eleven Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Forcing functions, not slogans. Built for the actual federal government we have.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Why We Reject Both the Chainsaw and the Defense</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            The 2025 DOGE cycle proved both parties have nothing real to offer. Republicans claimed $1T in cuts, delivered $140B, mostly by renegotiating existing contracts — and broke the civil-service trust in the process. Democrats spent the same year defending offices nobody could justify and IGs nobody could name. Our approach is neither. We accept that the federal government does things citizens need. We also accept that it has 2,400 programs where 1,000 would do, 18-month contract cycles in a 6-month-product world, and 5,000 open audit recommendations the people in charge just decided to ignore. The fix is not a slogan. The fix is a forcing function on every step — GAO must be implemented, programs must show outcomes, contracts must deliver, agencies must justify themselves every decade, workforce must be voted on, and every dollar visible in 24 hours. Boring. Durable. Real.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/sunset-clauses" className="underline hover:text-white">Sunset clauses</Link>: the same 10-year forcing function applied at the law level. Bureaucracy reform handles agencies and programs; sunset clauses handle the statutes themselves.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: GAO waste cuts + results-based budgeting + contract reform are the discretionary-spending half of the debt math. Same 10-year agency sunset already in the economic plan.</li>
            <li>• <Link href="/issues/term-limits" className="underline hover:text-white">Term limits</Link>: career caps for politicians, sunset caps for agencies, contract caps for vendors. No part of the federal government rides forever.</li>
            <li>• <Link href="/reform" className="underline hover:text-white">100-Day Action Plan</Link>: full federal audit order day 1, open spending dashboard day 5, contract reform EO day 14.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: GAO High Risk List, GAO Duplication & Cost Savings Annual Report, GAO Open Recommendations Tracker, Congressional Budget Office discretionary spending tables, FAR Part 12 (commercial items), 10 U.S.C. § 4022 (Other Transaction Authority), CIGIE Inspector General reports, USAspending.gov, GPRA Modernization Act (2010), West Virginia v. EPA (2022), DOGE Executive Order (Feb 2025), Schedule F Executive Order history.
          </p>
        </div>
      </section>
    </div>
  )
}
