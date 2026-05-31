import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import SubIssueCard from '@/components/issue/SubIssueCard'
import CrossThread from '@/components/issue/CrossThread'

export const revalidate = 60

const ENV = '#52b788'

const SUB_ISSUES = [
  {
    icon: '⚡',
    title: 'Energy Policy',
    oneLiner: 'Energy abundance — build everything that works. Nuclear at scale (SMRs + Gen IV + license reform + 80-year extensions + restart shutdowns). Gas as bridge + baseload, LNG export freeze lifted. Domestic oil where economic + federal-land moratoriums ended + SPR refilled. Coal exits on market terms, runs clean where it earns its place. Renewables compete on price, IRA credits sunsetted. 12-month permitting cap on every energy source. Interstate transmission + FERC primacy + grid hardening. EV mandate repealed, charging infrastructure as public good. Geothermal at scale + fusion R&D + advanced fission. Strategic reserves (oil, gas, critical minerals, uranium, onshore fuel cycle). Technology-neutral sunset-based subsidies. Moonshot research including the wireless-power-transmission long tail Tesla never got to finish. Hyperscaler accountability — big tech builds the power it uses.',
    href: '/issues/energy',
  },
] as const

const UPCOMING = [
  { icon: '🌡️', title: 'Climate / Emissions', note: 'Honest accounting of emissions on top of the energy stack. Carbon pricing or alternatives, methane enforcement, international cooperation tracks (cross-link China Policy M10). Adaptation and resilience funded.' },
  { icon: '🏞️', title: 'Public Lands & Environmental Regulation', note: 'NPS + USFS + BLM stewardship, conservation that respects multi-use, sound EPA regulation without precautionary creep, water rights modernized, wildfire policy that prevents not just suppresses.' },
] as const

const THREADS = [
  {
    icon: '🏗️',
    title: 'Build everything that works',
    description: 'Energy abundance is the foundation of every other promise on this platform. AI training, electrification, reshored manufacturing, the grid the next century will run on — every one of them depends on cheap reliable power at scale. We refuse the single-bet partisan positions and build the stack that the math actually supports: nuclear at scale, gas as the bridge, domestic oil where economic, coal exiting on market terms, renewables competing on price, geothermal and fusion seriously funded, the grid built to carry it all.',
    appliesTo: ['Energy Policy'],
  },
  {
    icon: '🕐',
    title: 'Twelve months. Every project. Same rule.',
    description: 'Permitting is the largest barrier to building energy in America. The same 12-month federal permitting cap our Economics pillar already applies to energy and reshored manufacturing extends here uniformly across every source — solar farm, nuclear reactor, gas pipeline, transmission line, geothermal plant. NEPA streamlined, judicial review on a six-month clock, categorical exclusions for proven technology. Same rule, every source, every project.',
    appliesTo: ['Energy Policy'],
  },
  {
    icon: '💰',
    title: 'Sunset the subsidies. Fund the research.',
    description: 'Every permanent energy subsidy on the federal books gets a defined sunset under our technology-neutral doctrine — IRA renewable credits, fossil-fuel depletion allowances, every production credit. R&D funding stays and expands (ARPA-E, DOE national labs, loan guarantees for first-of-a-kind deployments). The federal government funds the research that produces the next leap; it does not prop up incumbent industries indefinitely.',
    appliesTo: ['Energy Policy'],
  },
  {
    icon: '🏢',
    title: 'Big tech builds the power it uses',
    description: 'Data centers are the fastest-growing source of US electricity demand. Under the current system, that load is socialized onto residential ratepayers. We end that. Above a threshold, every new or expanded data center must either co-locate with dedicated generation it pays for in full, or sign long-term contracts at full long-run marginal cost. Microsoft restarting Three Mile Island is the proof case. The user-pays-for-load principle — same captivity-vs-choice logic the Economics pillar applies to every other captive market.',
    appliesTo: ['Energy Policy'],
  },
  {
    icon: '🚀',
    title: 'Fund the moonshots — including the ones the consensus dismissed',
    description: 'The next energy leap will not come from what we already build; it will come from research we are not seriously funding. We expand ARPA-E significantly and explicitly fund the long-tail research — including the wireless power transmission Nikola Tesla pioneered (resonant induction is settled engineering at short range; the long-range version was defunded out for political rather than scientific reasons), space-based solar, room-temperature superconductors, advanced battery chemistry, direct air capture. Most moonshots fail. The few that do not are why the United States is still a frontier-technology economy.',
    appliesTo: ['Energy Policy'],
  },
] as const

export default function EnvironmentPillarPage() {
  return (
    <div>
      <IssueHero
        badge="🌿 Environment Pillar"
        badgeColor={ENV}
        title={<>Energy Abundance. <span style={{ color: ENV }}>Real Stewardship.</span></>}
        subtitle="Both parties have run the same energy-and-environment failure mode for a generation — single-bet politics that builds nothing, costs everything, and leaves the country less secure. We change the frame. Build everything that works at speed. Sunset the subsidies. Fund the moonshots. Build the grid. Hyperscaler pays for hyperscaler load. Honest accounting on emissions, real stewardship on public lands, conservation that respects multi-use. One sub-issue shipped — Energy Policy. The rest queued below."
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
          style={{ background: `color-mix(in srgb, ${ENV} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${ENV} 35%, transparent)`, color: ENV }}>
          ★ Signature Principle
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          Energy Abundance.<br/>
          <span style={{ color: ENV }}>Honest Accounting. American Grid.</span>
        </h2>
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
          The honest math says US electricity demand roughly doubles by 2050. The only policy that meets that demand is everything that works — nuclear, gas, oil, renewables, geothermal, hydro, and the next generation of moonshot research. Built on a grid we actually build, with permitting that takes twelve months instead of seven years, with subsidies that sunset, and with big tech paying for the load it creates. That is the foundation. Climate accounting and public-land stewardship build on top of it.
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
          <p className="text-[var(--muted)]">One shipped. Two queued.</p>
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

function UpcomingGrid() {
  return (
    <section className="py-12 px-4" style={{ background: '#0d1f38' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
            style={{ background: 'color-mix(in srgb, var(--gold) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 30%, transparent)', color: 'var(--gold)' }}>
            🚧 In Development
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-2">Queued Sub-Issues</h2>
          <p className="text-[var(--muted)] text-sm">Climate accounting and public-land stewardship build on top of the energy stack.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {UPCOMING.map(u => (
            <div key={u.title} className="rounded-2xl p-5"
              style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{u.icon}</span>
                <h3 className="font-bold text-sm">{u.title}</h3>
              </div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{u.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CrossThreadsGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-3">How It All Connects</h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">Threads running through the Environment platform. One design, growing sub-issue by sub-issue.</p>
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
          Want a country that <span style={{ color: ENV }}>builds what it needs</span>?
        </h2>
        <p className="text-[var(--muted)] text-lg mb-8">
          The Environment platform starts with energy abundance — the foundation every other promise depends on — and builds out from there.
        </p>
        <Link href="/join"
          className="inline-block px-10 py-4 rounded-full font-black text-xl text-[var(--navy)] transition-all hover:scale-105"
          style={{ background: ENV }}>
          Join the Movement 🦅
        </Link>
      </div>
    </section>
  )
}
