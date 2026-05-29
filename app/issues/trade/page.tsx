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
    title: 'Tariffs Vary by Country Relationship AND Good Category',
    body: 'No universal baseline. Two axes determine the tariff. (1) Country: friend countries (reciprocal access, IP respect, security alliance) get zero tariffs on most goods + lower tariffs on strategic. Reciprocal countries: we match what they charge us. Adversarial: higher tariffs. (2) Good category: strategic industries (defense, semiconductors, pharma APIs, rare earths, energy, food staples) get higher tariffs across all countries. Non-strategic: country-relationship-based.',
  },
  {
    num: '02',
    title: 'China: Targeted Bans on Critical Infra + Sensitive Tech',
    body: 'Ban Chinese ownership of US critical infrastructure (farmland near bases, ports, telecom, data centers near military). Ban sensitive tech imports (military-applicable). Force divestiture of mass-surveillance apps (TikTok-class) by Chinese owners. Do NOT decouple all trade. Do NOT impose a 60% tariff wall on everything. Captures vulnerabilities; lets non-strategic trade continue.',
  },
  {
    num: '03',
    title: '55% Value-Added Country-of-Origin Rule',
    body: 'A product\'s country of origin is where more than 55% of value is added. Closes the transhipment loophole: Chinese goods lightly processed in Mexico or Vietnam currently enter as "Mexican" to dodge China tariffs. Customs audits with penalty teeth.',
  },
  {
    num: '04',
    title: 'Mandatory 180-Day Strategic Stockpiles',
    body: 'Government-owned + rotated 180-day domestic inventory of: pharma APIs, semiconductors, rare earths, ammunition, fertilizer, baby formula. Strategic Petroleum Reserve model expanded across the supply-chain choke points that broke during COVID.',
  },
  {
    num: '05',
    title: 'Reshoring Tax Credit — 10-Year Sunset',
    body: '25% of capex for any company reshoring strategic manufacturing. Hard sunset at 10 years. No permanent industrial policy. The credit exists to bridge the rebuild, not to fund permanent rent.',
  },
  {
    num: '06',
    title: 'Buy American 100% Strategic / 75% Else',
    body: 'Federal procurement (DOD, VA, GSA, etc.) sources 100% domestic for strategic goods + 75% domestic for everything else. Government as anchor customer creates the demand floor that lets US manufacturers scale.',
  },
  {
    num: '07',
    title: '12-Month Permitting Fast-Track for Strategic Manufacturing',
    body: 'Same rule as energy: any reshored strategic-manufacturing plant gets federal permitting decisions in 12 months max. Removes the single biggest barrier to building in America.',
  },
] as const

export default function TradePage() {
  return (
    <div>
      <IssueHero
        badge="🚢 Trade + Tariffs"
        badgeColor="var(--teal)"
        title={<>Trade Should Be <span style={{ color: 'var(--gold)' }}>Fair</span>, Not Free or Closed.</>}
        subtitle="$900B annual trade deficit. Manufacturing at 10% of GDP, down from 28% peak. 90% of semis come from Asia. Tariffs are revenue and leverage, not a baseline tax on consumers. Friend countries get free trade; adversaries don't."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Traditional free trade with targeted Buy American, limited tariffs."
          rep="Broad tariffs as revenue + reshoring tool. 10% universal + 60% on China."
          us="Tariffs vary by country + good category, no universal baseline. China: targeted bans on critical infra + sensitive tech, not full decouple. 55% value-added origin rule. 180-day strategic stockpiles. Reshoring credit with 10-yr sunset. Buy American 100% strategic / 75% else. 12-mo permitting fast-track."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--teal)" bg="color-mix(in srgb, var(--teal) 10%, transparent)" border="color-mix(in srgb, var(--teal) 30%, transparent)">📊 The Imbalance</SectionLabel>
          <h2 className="text-3xl font-black">Strategic Vulnerabilities</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$900B" label="Annual US Trade Deficit" color="#c8102e" />
          <StatCard num="10%" label="Manufacturing % of GDP (Peak: 28%)" color="#c8102e" />
          <StatCard num="90%" label="Semis Sourced from Asia" color="var(--gold)" />
          <StatCard num="180 days" label="Strategic Stockpile Target" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Seven Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Fair trade with friends. Strategic discipline at home. No isolationism, no naïveté.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--gold) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: Buy American 100% on strategic goods + reshored defense manufacturing is the supply-side companion to Pentagon audit accountability.</li>
            <li>• <Link href="/issues/inflation" className="underline hover:text-white">Inflation</Link>: the 12-month permitting cap applies twice — energy projects there, reshored strategic manufacturing here. Same rule, same effect: build things in America fast.</li>
            <li>• <Link href="/issues/taxes" className="underline hover:text-white">Tax Reform</Link>: tariff revenue is a complement to the consumption tax, not a substitute. The reshoring credit hard-sunsets at 10 years so it never becomes permanent rent.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: US Census Foreign Trade Statistics, BEA Industry Economic Accounts, Semiconductor Industry Association, USTR Tariff Schedule, CHIPS Act implementation reports, USMCA Article 4 (rules of origin).
          </p>
        </div>
      </section>
    </div>
  )
}
