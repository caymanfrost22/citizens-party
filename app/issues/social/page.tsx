import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import SubIssueCard from '@/components/issue/SubIssueCard'
import CrossThread from '@/components/issue/CrossThread'

export const revalidate = 60

const SUB_ISSUES = [
  {
    icon: '🎓',
    title: 'Education',
    oneLiner: 'Empower the Department of Education to set a modernized national curriculum — personal finance, home ec, shop/trades, real history, tech in every class. Pool school funding statewide + federal floor + national education lottery to end zip-code apartheid. Living-wage teacher pay, renewable contracts. Fund trade schools. Affordable lean public universities, no DEI bloat. Private universities self-funded. Cap loans $40K / 4%, refinance existing debt, no bailout.',
    href: '/issues/education',
  },
] as const

const UPCOMING = [
  { icon: '⚖️', label: 'Crime + Criminal Justice' },
  { icon: '💊', label: 'Drug Policy' },
  { icon: '🏥', label: 'Healthcare Access' },
  { icon: '🔫', label: 'Second Amendment' },
  { icon: '🤰', label: 'Abortion' },
] as const

const THREADS = [
  {
    icon: '🎯',
    title: 'Invest in the future, don\'t profit off it',
    description: 'Equal per-student funding pooled statewide, a dedicated education lottery, funded trade schools, and capped affordable college. We treat the next generation as the investment that pays for everything else — not as a revenue stream to be borrowed against and billed back with interest.',
    appliesTo: ['Education'],
  },
  {
    icon: '🛠️',
    title: 'Real skills for real life',
    description: 'Personal finance, home economics, shop and trade skills, and technology embedded in every class. We graduate citizens who can budget, cook, build, fix, and reason from primary sources — not just pass a standardized test.',
    appliesTo: ['Education'],
  },
  {
    icon: '📊',
    title: 'Outcomes and accountability over bureaucracy',
    description: 'Multi-metric teacher performance pay, renewable contracts instead of lifetime tenure, hard caps on university administrative bloat, and published earnings outcomes for every degree. The same outcomes-over-overhead principle the Governance pillar applies to federal agencies.',
    appliesTo: ['Education'],
  },
  {
    icon: '🚪',
    title: 'Choice that strengthens the commons',
    description: 'Open enrollment and charters inside the public system give families real options — while private schools and homeschooling stay fully legal but fully self-funded. Public dollars stay in public schools, lifting the system every child is entitled to instead of draining it.',
    appliesTo: ['Education'],
  },
  {
    icon: '🇺🇸',
    title: 'Shared identity and honest heritage',
    description: 'The Pledge of Allegiance every morning (opt-out preserved per Barnette), the founding\'s Judeo-Christian heritage taught as history not doctrine, and fairness in girls\' sports decided on a sex-based standard. A diverse country still needs a shared civic identity — restored honestly, within the Constitution, not weaponized as a culture war.',
    appliesTo: ['Education'],
  },
] as const

export default function SocialPillarPage() {
  return (
    <div>
      <IssueHero
        badge="🤝 Social Pillar"
        badgeColor="var(--green)"
        title={<>Strong People. <span style={{ color: 'var(--green)' }}>Strong Country.</span></>}
        subtitle="The issues that shape daily life — education, crime, drugs, healthcare access, guns, and the hardest debates. We start with the one that decides everything downstream: how we raise and equip the next generation. More sub-issues ship on a rolling basis."
      />

      <SignaturePrinciple />
      <SubIssuesGrid />
      <UpcomingGrid />
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
          Invest in People.<br/>
          <span style={{ color: 'var(--green)' }}>Equip Them to Thrive.</span>
        </h2>
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
          Both parties treat social policy as a culture war to win. We treat it as a build order: give every American — regardless of zip code — the education, skills, safety, and fair shot to live a good life. We fund the future instead of selling it, and we measure outcomes instead of slogans.
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
          <h2 className="text-3xl font-black mb-3">Shipped Sub-Issues</h2>
          <p className="text-[var(--muted)]">Each links to the full plan.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 max-w-3xl mx-auto">
          {SUB_ISSUES.map(s => (
            <SubIssueCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UpcomingGrid() {
  return (
    <section className="pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>In Development</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {UPCOMING.map(u => (
            <span key={u.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--muted)' }}>
              <span>{u.icon}</span>{u.label}
            </span>
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
          <p className="text-[var(--muted)] max-w-xl mx-auto">The threads that run through the Social platform. One design, growing sub-issue by sub-issue.</p>
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
          Want a country that <span style={{ color: 'var(--green)' }}>equips its people</span>?
        </h2>
        <p className="text-[var(--muted)] text-lg mb-8">
          The Social platform starts with education — the issue that decides everything downstream — and builds out from there.
        </p>
        <Link href="/join"
          className="inline-block px-10 py-4 rounded-full font-black text-xl text-[var(--navy)] transition-all hover:scale-105"
          style={{ background: 'var(--green)' }}>
          Join the Movement 🦅
        </Link>
      </div>
    </section>
  )
}
