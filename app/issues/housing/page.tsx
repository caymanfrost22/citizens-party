import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'

export const revalidate = 60

const MECHANISMS = [
  {
    num: '01',
    title: '4% Annual Surtax on Holdings Above 10 Properties',
    body: 'Anyone — individual or corporation, US or foreign-resident — can own up to 10 single-family homes free of penalty. Above 10 = "holding" status, subject to 4% annual surtax on assessed value. BlackRock, Blackstone, Invitation Homes face real cost. Family landlords untouched.',
  },
  {
    num: '02',
    title: 'Foreign Corporations Banned from US Residential',
    body: 'Foreign corporate entities cannot purchase US residential property. Foreign individuals legally resident in the US are treated as US families (10-property threshold like everyone else). Closes the offshore-money loophole driving up coastal prices.',
  },
  {
    num: '03',
    title: 'YIMBY Zoning Reform — Federal Carrot, Local Control',
    body: 'HUD + DOT dollars contingent on: legalize duplex/triplex/ADU by-right on single-family lots, eliminate parking minimums, 6-month max permit review. Federal incentives, not preemption. Cities that don\'t reform don\'t get the money.',
  },
  {
    num: '04',
    title: 'Controlled Federal Land Release',
    body: 'Federal government owns 28% of US land (640M acres). Release tracts near growing metros, but in controlled, allocation-capped tranches — lottery or first-come for builders meeting size + affordability constraints. No large companies gobbling federal land to rent-extract.',
  },
  {
    num: '05',
    title: 'Fannie/Freddie Prioritize Owner-Occupied First-Time Buyers',
    body: 'Preferred mortgage rates (1pt below market) for owner-occupied first-time-buyer purchases. De-prioritize investor mortgages. Federal credit subsidy finally aligned with the stated goal of homeownership.',
  },
  {
    num: '06',
    title: 'Phase Out the Mortgage Interest Deduction',
    body: 'MID is regressive — $600K-plus subsidy benefit flows to the top 20% of earners. Phase out over 5 years. Redirect the federal savings into the Housing Savings Account match.',
  },
  {
    num: '07',
    title: 'Cap REIT Residential Depreciation',
    body: 'Real Estate Investment Trusts deduct "phantom" depreciation on rental property, making rental more profitable than owning. Cap or eliminate the depreciation deduction for residential REITs. Levels the playing field between renters and owners.',
  },
  {
    num: '08',
    title: 'Housing Savings Account — 1:1 Federal Match',
    body: 'Tax-deferred savings specifically for a first home down payment. Federal 1:1 match up to $5K/yr for low/middle income. Patient + market-aligned — no subsidy to the seller, no price-capitalization effect.',
  },
] as const

export default function HousingPage() {
  return (
    <div>
      <IssueHero
        badge="🏠 Housing"
        badgeColor="#00b4d8"
        title={<>Median Home: <span style={{ color: '#f5a623' }}>$420K</span>. Median Income: $78K.</>}
        subtitle="5.4x price-to-income ratio. Healthy = 3x. Supply gap of 4–7 million units. 26% of single-family purchases are investors. Fix the supply, cap the captivity, give first-time buyers a savings account."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Down payment subsidies ($25K first-time buyer), LIHTC expansion, rent regulation."
          rep="Deregulation, opportunity zones, federal hands-off."
          us="4% surtax above 10 properties. Foreign corp ban. YIMBY federal carrot. Controlled federal land release. Fannie/Freddie owner-occupied priority. Phase out MID. Cap REIT residential depreciation. Housing Savings Account with federal match."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#00b4d8" bg="rgba(0,180,216,0.1)" border="rgba(0,180,216,0.3)">📊 The Supply Gap</SectionLabel>
          <h2 className="text-3xl font-black">The Numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$420K" label="Median Home Price" color="#c8102e" />
          <StatCard num="5.4x" label="Price-to-Income (Healthy: 3x)" color="#f5a623" />
          <StatCard num="4–7M" label="Housing Unit Shortage" color="#c8102e" />
          <StatCard num="75%" label="US Land Zoned SF-Only" color="#00b4d8" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Eight Mechanisms</h2>
          <p className="text-[#8fa3bc] mt-2">Fix supply. Cap investor captivity. Help first-time buyers save.</p>
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
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: phasing out the MID redirects federal savings into the Housing Savings Account match — fiscally disciplined.</li>
            <li>• Housing Savings Account is the same architecture as the <Link href="/issues/healthcare-costs" className="underline hover:text-white">Universal HSA</Link> and the <Link href="/issues/wages-jobs" className="underline hover:text-white">Universal Worker Account</Link>. One savings model, four life needs.</li>
            <li>• <Link href="/issues/inflation" className="underline hover:text-white">Inflation</Link>: housing supply is the biggest single CPI component. Fixing supply fixes shelter inflation at the root.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: '#8fa3bc' }}>
            Sources: National Association of Realtors, Freddie Mac PMMS, Census Bureau ACS, Joint Center for Housing Studies (Harvard), Urban Institute Housing Finance Chartbook, BLM Land Statistics.
          </p>
        </div>
      </section>
    </div>
  )
}
