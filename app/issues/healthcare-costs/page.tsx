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
    title: 'International Reference Pricing — All Drugs, Not Just Medicare',
    body: 'Every drug sold in the US is capped at the median price of 6 peer nations (UK, Germany, France, Canada, Australia, Japan). Applies to the private market, not just Medicare. Pharma can\'t charge Americans 3x the rest of the developed world.',
  },
  {
    num: '02',
    title: 'Legalize Drug Imports from Canada + EU',
    body: 'FDA currently blocks personal and commercial imports. Lift the block for any drug approved in a peer regulator (Health Canada, EMA, MHRA). Pharmacies can source from any approved jurisdiction. Real competition.',
  },
  {
    num: '03',
    title: 'PBMs: Ban Rebates + Force Vertical Divestiture',
    body: 'Pharmacy Benefit Managers extract rent because the employer/insurer picks them for you — captivity. Ban manufacturer rebate kickbacks (pass-through pricing only — all discounts hit the patient at the counter). Force divestiture of insurer-owns-PBM-owns-pharmacy chains (UnitedHealth/Optum, CVS/Aetna/Caremark).',
  },
  {
    num: '04',
    title: 'Real-Time Public Pricing API + Binding Quotes',
    body: 'Every hospital, insurer, provider publishes actual negotiated rates in machine-readable format. (Already required by 2021 rule, near-universally ignored.) Non-compliance = 5% Medicare reimbursement cut. Plus: every non-emergency procedure comes with a binding upfront written quote.',
  },
  {
    num: '05',
    title: 'Site-Neutral Payments + Unified Claims + Portable Records',
    body: 'Medicare pays the same rate for the same procedure regardless of facility type — kills the hospital-outpatient arbitrage. One national standardized claims format across all insurers eliminates billions in admin friction. Your full medical record portable in a federal-standard format. Your data, not theirs.',
  },
  {
    num: '06',
    title: 'Universal HSA from Birth + Direct Primary Care',
    body: 'Every American gets a tax-advantaged Health Savings Account from birth. Federal seed of $500/yr for kids, higher match for low-income families. Direct Primary Care subscriptions ($50–100/mo flat for unlimited PCP visits) are HSA-eligible and tax-deductible. Insurance shifts toward catastrophic-only; routine care is direct patient-provider.',
  },
] as const

export default function HealthcareCostsPage() {
  return (
    <div>
      <IssueHero
        badge="💊 Healthcare Costs"
        badgeColor="#06d6a0"
        title={<>Americans Pay <span style={{ color: '#f5a623' }}>2–3x</span> for the Same Drugs.</>}
        subtitle="US spends $4.5T/yr on healthcare — 18% of GDP, vs 9–12% in peer nations. The system isn't broken. It's working exactly as the middlemen designed it. We break the captivity."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Expand ACA, add a public option, negotiate prices on 10 drugs at a time."
          rep="Health Savings Accounts, market competition, repeal ACA, less regulation."
          us="International reference pricing on all drugs + Canada/EU imports. Ban PBM rebates + force vertical divestiture. Public pricing API + binding quotes + site-neutral Medicare. Unified claims + portable records. Universal HSA from birth + Direct Primary Care."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">📊 The Cost Problem</SectionLabel>
          <h2 className="text-3xl font-black">Math That Should Not Exist</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$4.5T" label="US Healthcare Spend / Year" color="#c8102e" />
          <StatCard num="18%" label="Of GDP (Peers: 9–12%)" color="#f5a623" />
          <StatCard num="2–3x" label="US Drug Prices vs Peers" color="#c8102e" />
          <StatCard num="80%" label="PBM Market Held by 3 Firms" color="#f5a623" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Break the Captivity</h2>
          <p className="text-[#8fa3bc] mt-2">Drugs, PBMs, hospitals, admin — every layer of the cost stack.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.2)' }}>
          <h3 className="font-bold mb-3" style={{ color: '#f5a623' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: '#8fa3bc' }}>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: drug negotiation here stacks with Medicare expansion there.</li>
            <li>• PBM divestiture follows our signature principle: when the consumer is captive (employer/insurer picks for you), captivity gets regulated. When the consumer chooses freely (<Link href="/issues/big-tech" className="underline hover:text-white">Big Tech</Link>), market sets the price.</li>
            <li>• Universal HSA from birth is the same architecture as the <Link href="/issues/housing" className="underline hover:text-white">Housing Savings Account</Link> and the <Link href="/issues/wages-jobs" className="underline hover:text-white">Universal Worker Account</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: '#8fa3bc' }}>
            Sources: CMS National Health Expenditure data, OECD Health Statistics, RAND International Price Index, FTC PBM Interim Report (2024), Kaiser Family Foundation, Yale Budget Lab.
          </p>
        </div>
      </section>
    </div>
  )
}
