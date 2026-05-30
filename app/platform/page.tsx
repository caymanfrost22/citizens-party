import Link from 'next/link'

export const revalidate = 60

interface Pillar {
  icon: string
  title: string
  color: string
  catchphrase: string
  subtitle: string
  status: 'shipped' | 'in_progress' | 'planned'
  subIssueCount: number
  href: string | null
}

const PILLARS: Pillar[] = [
  {
    icon: '💰',
    title: 'Economics',
    color: 'var(--gold)',
    catchphrase: 'Captivity = Regulation. Choice = Market.',
    subtitle: 'Build wealth from the bottom up. Median American is the customer. Eight deep-dive sub-issues — taxes, debt, healthcare, housing, inflation, big tech, trade, wages.',
    status: 'shipped',
    subIssueCount: 8,
    href: '/issues/economy',
  },
  {
    icon: '🏛️',
    title: 'Governance',
    color: 'var(--teal)',
    catchphrase: 'We Play By the Rules We\'re Fighting to Change.',
    subtitle: 'Government works for citizens, not careers or donors. Seven sub-issues — term limits, campaign finance, voting reform, lobbying ban, bureaucracy reform, sunset clauses, legislative process.',
    status: 'shipped',
    subIssueCount: 7,
    href: '/issues/governance',
  },
  {
    icon: '🛡️',
    title: 'Immigration',
    color: 'var(--green)',
    catchphrase: 'Single citizenship. Single standard. Single line.',
    subtitle: 'Standalone deep-dive, pre-pillar. Closes the dual-loyalty loophole. Single citizenship requirement for federal office, clearance, $10K+ donors.',
    status: 'shipped',
    subIssueCount: 1,
    href: '/issues/immigration',
  },
  {
    icon: '🤝',
    title: 'Social',
    color: 'var(--green)',
    catchphrase: 'Invest in the future. Don\'t profit off it.',
    subtitle: 'In active development — education shipped first. Modern curriculum, equal statewide funding, capped affordable college. Queued: crime + criminal justice, drug policy, healthcare access, second amendment, abortion. Immigration shipped standalone.',
    status: 'in_progress',
    subIssueCount: 6,
    href: '/issues/social',
  },
  {
    icon: '🌍',
    title: 'Foreign',
    color: '#7b2d8b',
    catchphrase: 'Honest alliances, audited Pentagon, no forever wars.',
    subtitle: 'Planned. Sub-issues queued: military spending + Pentagon audit, Ukraine/Israel/foreign wars, China policy, NATO + alliances.',
    status: 'planned',
    subIssueCount: 4,
    href: null,
  },
  {
    icon: '🌿',
    title: 'Environment',
    color: '#52b788',
    catchphrase: 'Energy abundance. Clean accounting. Real stewardship.',
    subtitle: 'Planned. Sub-issues queued: climate + emissions, energy policy (oil/gas/nuclear/renewables), public lands + environmental regulation.',
    status: 'planned',
    subIssueCount: 3,
    href: null,
  },
]

interface Catchphrase {
  text: string
  context: string
  pillar: string
  color: string
}

const CATCHPHRASES: Catchphrase[] = [
  {
    text: 'We play by the rules we\'re fighting to change.',
    context: '24-hour disclosure on every dollar above $200. Pre-compliance with our own proposed corporate-PAC ban and donor caps. Unilateral disarmament loses elections — you cannot change laws you cannot win under.',
    pillar: 'Governance',
    color: 'var(--teal)',
  },
  {
    text: 'Captivity = Regulation. Choice = Market.',
    context: 'If a business restricts your ability to self-supply or walk away, government caps markup at 5% or breaks the captivity. If you can freely choose, the market sets price. Disney parks, App Stores, stadiums, Ticketmaster, hospital cafeterias, PBMs.',
    pillar: 'Economics',
    color: 'var(--gold)',
  },
  {
    text: 'One bill, one subject.',
    context: 'No more 4,000-page omnibus packages. Single-subject rule modeled on 43 state constitutions. Overall budget OK as one bill; every specific NGO/agency/contractor funding gets its own standalone vote.',
    pillar: 'Governance',
    color: 'var(--teal)',
  },
  {
    text: 'The audit is the budget.',
    context: 'GAO recommendations must be implemented within 18 months or the agency loses 2% next-year funding. Programs missing measurable outcomes three years running lose 10%, five years zero. Outcomes are the budget.',
    pillar: 'Governance',
    color: 'var(--teal)',
  },
  {
    text: 'Nothing in Washington is permanent.',
    context: '10-year default sunset on every federal law, agency, and regulation. Variable cycles allowed only with explicit clause + recorded vote. Hard sunset on congressional failure.',
    pillar: 'Governance',
    color: 'var(--teal)',
  },
  {
    text: 'Americans own their financial future.',
    context: 'One tax-advantaged account architecture, four life needs. Sovereign-wealth-fund Social Security, Universal HSA from birth, Housing Savings Account, Universal Worker Account. Federally seeded for low-income, portable across jobs.',
    pillar: 'Economics',
    color: 'var(--gold)',
  },
  {
    text: 'Close the K Street pipeline.',
    context: 'Lifetime lobbying ban on ex-members of Congress. 5-year cool-off for senior officials with shadow-lobbying captured. Congressional stock trading ban with criminal penalties.',
    pillar: 'Governance',
    color: 'var(--teal)',
  },
  {
    text: 'Same rule, every nation.',
    context: 'AIPAC, Saudi, Qatar, Russia, China, Taiwan, UK — every foreign-government influence operation registers under FARA. Singling out one country is bigotry. Applying the same rule to every country is principle.',
    pillar: 'Governance',
    color: 'var(--teal)',
  },
  {
    text: '12-month federal permitting cap.',
    context: 'Same rule, applied twice. Any energy project decision in 12 months. Any reshored strategic-manufacturing plant in 12 months. Removes the single biggest barrier to building in America.',
    pillar: 'Economics',
    color: 'var(--gold)',
  },
  {
    text: 'Single citizenship. Single standard.',
    context: 'Dual citizenship fine as a private American. But federal office, security clearance, or political donations above $10K require single US citizenship. Pick: politics or two passports.',
    pillar: 'Immigration',
    color: 'var(--green)',
  },
  {
    text: 'Invest in the future, don\'t profit off it.',
    context: 'Equal per-student funding pooled statewide + federal floor + a national education lottery to end zip-code apartheid. Modern curriculum — personal finance, home ec, shop/trades, real history, tech in every class. Capped college loans ($40K / 4%), no bailout, no bloat.',
    pillar: 'Social',
    color: 'var(--green)',
  },
]

function statusBadge(status: Pillar['status']) {
  if (status === 'shipped') {
    return { label: '✅ Shipped', bg: 'color-mix(in srgb, var(--green) 12%, transparent)', border: 'color-mix(in srgb, var(--green) 40%, transparent)', color: 'var(--green)' }
  }
  if (status === 'in_progress') {
    return { label: '🚧 In Progress', bg: 'color-mix(in srgb, var(--gold) 12%, transparent)', border: 'color-mix(in srgb, var(--gold) 40%, transparent)', color: 'var(--gold)' }
  }
  return { label: '📋 Planned', bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.15)', color: 'var(--muted)' }
}

export default function PlatformPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, var(--navy), var(--card))' }}>
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          style={{ background: 'color-mix(in srgb, var(--gold) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 30%, transparent)', color: 'var(--gold)' }}>
          📋 The Platform
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4 max-w-4xl mx-auto leading-tight">
          Five Pillars.<br/>
          <span style={{ color: 'var(--gold)' }}>One Coherent Plan.</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
          Not a wish list — a work order. Each pillar is a fully designed platform with deep-dive sub-issues,
          measurable outcomes, and the same forcing functions applied consistently. Skim the catchphrases.
          Click any pillar for the full plan.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/issues"
            className="px-6 py-3 rounded-full text-sm font-bold transition-colors"
            style={{ background: 'color-mix(in srgb, var(--gold) 15%, transparent)', border: '1px solid var(--gold)', color: 'var(--gold)' }}>
            See Side-by-Side Comparison →
          </Link>
          <Link href="/reform"
            className="px-6 py-3 rounded-full text-sm font-bold transition-colors"
            style={{ background: 'color-mix(in srgb, var(--teal) 15%, transparent)', border: '1px solid var(--teal)', color: 'var(--teal)' }}>
            100-Day Execution Plan →
          </Link>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3">The Five Pillars</h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">Each pillar is one design, not a collection of unrelated positions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PILLARS.map(p => {
              const badge = statusBadge(p.status)
              const card = (
                <div className="h-full rounded-2xl p-6 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'var(--card)',
                    border: `1px solid color-mix(in srgb, ${p.color} 30%, transparent)`,
                  }}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{p.icon}</span>
                      <h3 className="text-2xl font-black" style={{ color: p.color }}>{p.title}</h3>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ background: badge.bg, border: `1px solid ${badge.border}`, color: badge.color }}>
                      {badge.label}
                    </span>
                  </div>
                  <p className="text-lg font-bold mb-3 leading-snug" style={{ color: p.color }}>
                    &ldquo;{p.catchphrase}&rdquo;
                  </p>
                  <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                    {p.subtitle}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--muted)' }}>
                      {p.subIssueCount} {p.subIssueCount === 1 ? 'sub-issue' : 'sub-issues'}
                    </span>
                    {p.href && (
                      <span className="font-bold" style={{ color: p.color }}>
                        See full plan →
                      </span>
                    )}
                  </div>
                </div>
              )
              return p.href
                ? <Link key={p.title} href={p.href}>{card}</Link>
                : <div key={p.title}>{card}</div>
            })}
          </div>
        </div>
      </section>

      {/* Catchphrases */}
      <section className="py-16 px-4" style={{ background: '#0d1f38' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
              style={{ background: 'color-mix(in srgb, var(--gold) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 30%, transparent)', color: 'var(--gold)' }}>
              ⭐ Catchphrases We Stand On
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">The Phrases You&apos;ll Hear Us Say.</h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">
              Each one is a position, not a slogan. Each one links to the mechanism behind it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATCHPHRASES.map(c => (
              <div key={c.text} className="rounded-2xl p-5"
                style={{
                  background: 'var(--card)',
                  border: `1px solid color-mix(in srgb, ${c.color} 25%, transparent)`,
                }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: c.color }}>
                  {c.pillar}
                </div>
                <h3 className="text-xl font-black mb-3 leading-snug">
                  &ldquo;{c.text}&rdquo;
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  {c.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Frame */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto rounded-2xl p-8"
          style={{ background: 'color-mix(in srgb, var(--gold) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 30%, transparent)' }}>
          <div className="text-center mb-4">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
              style={{ background: 'color-mix(in srgb, var(--gold) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 40%, transparent)', color: 'var(--gold)' }}>
              🦅 The Frame
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Honest Politics. <span style={{ color: 'var(--gold)' }}>Built for the Median American.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
            Both legacy parties have taken corporate-donor positions dressed up as ideology. Democrats protect trial lawyers and public unions.
            Republicans protect Wall Street and defense contractors. Neither actually serves the median American.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            The Citizens Party platform is the rewrite — at the statute level, at the constitutional level, and in the rules of our own party.
            Every dollar disclosed in 24 hours. Every program ships measurable outcomes. Every law sunsets unless reauthorized.
            Every pillar built around one principle: <strong className="text-white">government works for citizens, not careers or donors.</strong>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ background: 'linear-gradient(135deg, var(--card), var(--navy))' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ready to <span style={{ color: 'var(--gold)' }}>Build Something Better</span>?
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8">
            Read the side-by-side comparison. Read the 100-day execution plan. Then join.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/issues"
              className="px-6 py-3 rounded-full text-sm font-bold transition-colors"
              style={{ background: 'color-mix(in srgb, var(--gold) 15%, transparent)', border: '1px solid var(--gold)', color: 'var(--gold)' }}>
              Side-by-Side Comparison →
            </Link>
            <Link href="/reform"
              className="px-6 py-3 rounded-full text-sm font-bold transition-colors"
              style={{ background: 'color-mix(in srgb, var(--teal) 15%, transparent)', border: '1px solid var(--teal)', color: 'var(--teal)' }}>
              100-Day Plan →
            </Link>
            <Link href="/join"
              className="px-10 py-3 rounded-full font-black text-lg text-[var(--navy)] transition-all hover:scale-105"
              style={{ background: 'var(--gold)' }}>
              Join the Movement 🦅
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
