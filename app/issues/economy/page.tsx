import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import SubIssueCard from '@/components/issue/SubIssueCard'
import CrossThread from '@/components/issue/CrossThread'

export const revalidate = 60

const SUB_ISSUES = [
  {
    icon: '💸',
    title: 'Debt + Spending',
    oneLiner: 'Lower retirement age to 59½. Sovereign-wealth-fund the trust. Uncap payroll above $200K at 2.5%. Pentagon audit teeth. Sunset every law every 10 years.',
    href: '/issues/debt-spending',
  },
  {
    icon: '💰',
    title: 'Tax Reform',
    oneLiner: 'Abolish the IRS. 25% consumption tax + monthly prebate. Wealthy pay more, poor protected, $536B compliance cost eliminated.',
    href: '/issues/taxes',
  },
  {
    icon: '💊',
    title: 'Healthcare Costs',
    oneLiner: 'International reference pricing on all drugs. Ban PBM rebates + force divestiture. Universal HSA from birth + Direct Primary Care.',
    href: '/issues/healthcare-costs',
  },
  {
    icon: '🏠',
    title: 'Housing',
    oneLiner: 'Surtax holdings above 10 properties. Ban foreign corporate residential. Phase out the mortgage interest deduction. Housing Savings Account.',
    href: '/issues/housing',
  },
  {
    icon: '📉',
    title: 'Inflation',
    oneLiner: 'Fed single mandate: price stability only. Hard cap M2 growth at nominal GDP + 1%. Nuclear-led energy abundance. 12-month permitting cap.',
    href: '/issues/inflation',
  },
  {
    icon: '📱',
    title: 'Big Tech',
    oneLiner: 'No structural breakups when you can walk away. Markup cap OR self-supply. Section 230 size-tiered. Opt-in privacy by default.',
    href: '/issues/big-tech',
  },
  {
    icon: '🚢',
    title: 'Trade + Tariffs',
    oneLiner: 'No universal baseline. Friend countries: zero tariffs most goods. Strategic industries: higher across all. 180-day strategic stockpiles.',
    href: '/issues/trade',
  },
  {
    icon: '👷',
    title: 'Wages + Jobs',
    oneLiner: 'Tiered minimum wage by age + hours + region. New Independent Worker classification with portable benefits. Universal Worker Account.',
    href: '/issues/wages-jobs',
  },
] as const

const THREADS = [
  {
    icon: '🏦',
    title: 'Americans own their financial future',
    description: 'One tax-advantaged account architecture, four life needs. Sovereign-wealth-fund Social Security, Universal HSA from birth, Housing Savings Account, Universal Worker Account. Federally seeded for low-income, portable across jobs.',
    appliesTo: ['Debt + Spending', 'Healthcare Costs', 'Housing', 'Wages + Jobs'],
  },
  {
    icon: '⚡',
    title: '12-month federal permitting cap',
    description: 'Same rule, applied twice. Any energy project decision in 12 months. Any reshored strategic-manufacturing plant in 12 months. Removes the single biggest barrier to building in America.',
    appliesTo: ['Inflation', 'Trade + Tariffs'],
  },
  {
    icon: '💊',
    title: 'Drug price negotiation, stacked',
    description: 'Medicare negotiation list expansion gets the entitlement system the best rate. International reference pricing puts every other drug at the median peer-nation price. The two stack.',
    appliesTo: ['Debt + Spending', 'Healthcare Costs'],
  },
  {
    icon: '🛡️',
    title: 'Pentagon accountability + defense reshore',
    description: 'Failed audit = automatic 5% cut + leadership replacement. Reshored defense manufacturing + Buy American 100%. Same theme — accountable, domestic, smart military spending — two enforcement mechanisms.',
    appliesTo: ['Debt + Spending', 'Trade + Tariffs'],
  },
  {
    icon: '🔓',
    title: 'Captivity = Regulation. Choice = Market.',
    description: 'Citizens Party signature principle. If a business restricts your ability to self-supply, government caps markup at 5% or breaks the captivity. If you can freely choose, the market sets price. Reconciles our anti-monopoly instinct (PBM divestiture) with our libertarian instinct (no Big Tech structural breakups).',
    appliesTo: ['Healthcare Costs', 'Big Tech'],
  },
  {
    icon: '⏳',
    title: 'Sunset clauses + performance audits',
    description: 'Every federal law and agency expires after 10 years unless re-authorized. Programs missing measurable outcomes for 3 years lose funding. Reshoring tax credit hard-sunsets at 10 years. No permanent industrial policy, no permanent bureaucracy. Every policy has an expiration date.',
    appliesTo: ['Debt + Spending', 'Trade + Tariffs'],
  },
  {
    icon: '🚫',
    title: 'Donor-disclosed politics. No structural breakups for free relationships.',
    description: 'Citizens Party discloses every dollar above $200 within 24 hours and pre-complies with the corporate-PAC ban and donor caps we are fighting to make law for everyone. We do not reward consolidation, and we do not punish it ideologically. We regulate captive markets. We leave free markets alone.',
    appliesTo: ['Big Tech', 'Healthcare Costs'],
  },
] as const

export default function EconomyPillarPage() {
  return (
    <div>
      <IssueHero
        badge="💰 Economics Pillar"
        badgeColor="var(--gold)"
        title={<>Build Wealth From the<br/><span style={{ color: 'var(--gold)' }}>Bottom Up.</span></>}
        subtitle="The median American is the customer. Every donor disclosed in 24 hours, every rule we are fighting to make law applied to ourselves first. Captivity gets regulated, choice gets market. Eight sub-issues, one coherent platform."
      />

      <SignaturePrinciple />
      <SubIssuesGrid />
      <CrossThreadsGrid />
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
          Captivity = Regulation.<br/>
          <span style={{ color: 'var(--green)' }}>Choice = Market.</span>
        </h2>
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
          If a business restricts your ability to self-supply or walk away, government caps markup at 5% or breaks the captivity.
          If you can freely choose, market sets the price. Applies to Disney parks, App Stores, stadiums, Ticketmaster, hospital cafeterias, PBMs — and anywhere else the trick of the trade is preventing you from leaving.
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
          <h2 className="text-3xl font-black mb-3">The 8 Sub-Issues</h2>
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
          <p className="text-[var(--muted)] max-w-xl mx-auto">Seven threads that run across the sub-issues. The Economics platform is one design, not eight unrelated positions.</p>
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

function PillarCTA() {
  return (
    <section className="py-20 px-4 text-center" style={{ background: 'linear-gradient(135deg, var(--card), var(--navy))' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black mb-4">
          Done picking between <span style={{ color: 'var(--gold)' }}>two bad options</span>?
        </h2>
        <p className="text-[var(--muted)] text-lg mb-8">
          The Citizens Party Economics platform is the math, the mechanism, and the principle in one place.
        </p>
        <Link href="/join"
          className="inline-block px-10 py-4 rounded-full font-black text-xl text-[var(--navy)] transition-all hover:scale-105"
          style={{ background: 'var(--gold)' }}>
          Join the Movement 🦅
        </Link>
      </div>
    </section>
  )
}
