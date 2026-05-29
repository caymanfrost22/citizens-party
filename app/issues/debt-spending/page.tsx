import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'

export const revalidate = 60

const MECHANISMS = [
  {
    num: '01',
    title: 'Social Security: Lower the Age, Invest the Trust',
    body: 'Retirement age drops to 59½ — matches the 401(k) penalty-free withdrawal age. Trust fund moves out of Treasuries-only into a sovereign wealth fund (Canada CPPIB / Norway model) with diversified global holdings. Independent professional management, firewalled from Congress raiding.',
  },
  {
    num: '02',
    title: 'Uncap Payroll Above $200K at 2.5%',
    body: 'Standard 6.2% on wages up to $200K. Above $200K: 2.5%, no cap. CEO making $20M pays into SS on every dollar — just at a lower rate above the threshold. Trust fund infusion without crushing the upper-middle.',
  },
  {
    num: '03',
    title: 'Cap SS Benefit at $200K/yr',
    body: 'The trade for the uncapped payroll above $200K: max SS payout is $200K/yr. Generous ceiling — about 4x today\'s maximum benefit — but finite. Wealthy retirees built their own wealth; SS isn\'t their pension.',
  },
  {
    num: '04',
    title: 'Pentagon: Audit Failure Has Teeth',
    body: 'DoD has failed every audit since 2018. Mandatory annual audit. Failure triggers automatic 5% next-year budget cut and replacement of SecDef + service chiefs. Congress can waive the cut by majority vote in declared force-majeure (war, natural disaster). No more failed-audit shrug.',
  },
  {
    num: '05',
    title: 'Sunset Every Law + Every Agency, 10-Year Clock',
    body: 'Every federal law and every agency automatically expires after 10 years unless Congress affirmatively re-authorizes. Existing inventory phased in over the first decade. Forces continuous review. The single biggest forcing function for bureaucracy cleanup ever attempted.',
  },
  {
    num: '06',
    title: 'Balanced Budget Amendment + PAYGO + Performance Funding',
    body: 'Constitutional amendment requiring a balanced budget except in declared war or recession. PAYGO with no emergency loopholes for non-emergencies. Every federal program gets measurable outcome metrics — miss for 3 years, funding cut.',
  },
] as const

export default function DebtSpendingPage() {
  return (
    <div>
      <IssueHero
        badge="💸 Debt + Federal Spending"
        badgeColor="#c8102e"
        title={<>The <span style={{ color: '#f5a623' }}>$39 Trillion</span> Problem.</>}
        subtitle="$1T/yr in interest builds nothing. Both parties pretend their half of the budget is untouchable. Honest math + sovereign-wealth Social Security + Pentagon audit teeth + sunset everything = debt-to-GDP under 50% in 20–30 years."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Tax the wealthy to fund expanded programs. Defend entitlements as-is. Maintain defense baseline."
          rep="Cut welfare and discretionary spending. Protect Pentagon. Block tax increases."
          us="Honest math. Sovereign-wealth-fund the SS trust. Lower retirement age to 59½. Uncap payroll above $200K at 2.5%. Cap benefits at $200K/yr. Pentagon audit teeth. Sunset every law every 10 years. BBA + PAYGO + performance funding."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#c8102e" bg="rgba(200,16,46,0.1)" border="rgba(200,16,46,0.3)">📊 The Problem in Numbers</SectionLabel>
          <h2 className="text-3xl font-black">Where The Money Goes</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$39T" label="Total National Debt" color="#c8102e" />
          <StatCard num="127%" label="Debt-to-GDP Ratio" color="#f5a623" />
          <StatCard num="$1T+" label="Annual Interest on Debt" color="#c8102e" />
          <StatCard num="47%" label="Budget = SS + Medicare + Medicaid" color="#00b4d8" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Six Mechanisms, One Goal</h2>
          <p className="text-[#8fa3bc] mt-2">Debt-to-GDP under 50% in 20–30 years.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <div key={m.num} className="rounded-2xl p-6"
              style={{ background: '#1a2a44', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex gap-4 items-start">
                <div className="text-2xl font-black shrink-0" style={{ color: '#f5a623' }}>{m.num}</div>
                <div style={{ borderLeft: '2px solid #f5a623', paddingLeft: '1rem' }}>
                  <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                  <p className="text-sm" style={{ color: '#8fa3bc' }}>{m.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.2)' }}>
          <h3 className="font-bold mb-3" style={{ color: '#f5a623' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: '#8fa3bc' }}>
            <li>• <Link href="/issues/taxes" className="underline hover:text-white">Tax reform</Link> handles the revenue side. This page handles the spending side. Together they balance the equation.</li>
            <li>• <Link href="/issues/healthcare-costs" className="underline hover:text-white">Healthcare costs</Link>: drug-price negotiation here applies to Medicare; international reference pricing in healthcare-costs applies to everyone else.</li>
            <li>• <Link href="/issues/trade" className="underline hover:text-white">Trade + Tariffs</Link>: Buy American 100% on strategic goods + reshored defense manufacturing is the supply-side companion to Pentagon audit accountability.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: '#8fa3bc' }}>
            Sources: CBO Budget Outlook, Treasury Direct, GAO Annual Audit Report, OECD Government Debt-to-GDP, Canada Pension Plan Investment Board (CPPIB) Annual Report, Norges Bank Investment Management.
          </p>
        </div>
      </section>
    </div>
  )
}
