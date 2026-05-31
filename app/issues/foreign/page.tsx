import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import SubIssueCard from '@/components/issue/SubIssueCard'
import CrossThread from '@/components/issue/CrossThread'

export const revalidate = 60

const FOREIGN = '#7b2d8b'

const SUB_ISSUES = [
  {
    icon: '🛡️',
    title: 'Military Posture & Defense Doctrine',
    oneLiner: 'Peace through strength — strength through honest alliances. Allies who want US protection pay for it: NATO 2% becomes a hard floor, non-payers lose Article 5. Mutual-defense only — if an ally is attacked we help defend, if they want to attack we sit out. We never start wars. War powers split: defensive response to an imminent armed attack on US territory, forces, or flagged assets is the President\'s call; offensive war or joining another nation\'s fight requires Article I declaration. Repeal the 2001 + 2002 AUMFs. Open door to former adversaries including Russia — no permanent enemies, alliances keep the peace. Modernize the triad, hold ~1,550 warheads, expand only if allies pay for the extended-deterrence umbrella they want. Onshore the critical supply chain. Restore + modernize the GI Bill. Budget + Pentagon audit live on /issues/debt-spending.',
    href: '/issues/military-posture',
  },
] as const

const UPCOMING = [
  { icon: '🇺🇦', title: 'Ukraine / Israel / Foreign Wars', note: 'Apply the mutual-defense-only doctrine to active conflicts. Defensive aid yes, blank checks no. No US ground forces in another country\'s war without Article I declaration.' },
  { icon: '🇨🇳', title: 'China Policy', note: 'Strategic competition without forever war. Hard onshore critical supply, technology export controls on dual-use, hold Taiwan deterrence within mutual-defense limits, open door to alliance expansion long-term.' },
  { icon: '🤝', title: 'NATO & Alliances', note: 'Pay-to-play formalized — 2% hard floor or out. Mutual-defense only. Expand to former adversaries on conditions. Renegotiate Status of Forces agreements to host-pays-or-strategic-use standard.' },
] as const

const THREADS = [
  {
    icon: '💪',
    title: 'Peace through strength — honest strength',
    description: 'A modernized triad, hardened critical-supply chains, and a force posture sized to real US strategic needs — not to whoever in Washington wants the contract. We keep the deterrent strong enough that no one tries, and we keep the books honest enough that the country can afford it. Strength that prevents war is cheaper than strength that fights one.',
    appliesTo: ['Military Posture & Defense Doctrine'],
  },
  {
    icon: '🤝',
    title: 'Allies pay their share — and we earn it back',
    description: 'Formal allies pay for the US security guarantee. NATO 2% becomes a hard floor, not a target. Host nations pay for the bases or those bases close. Allies who want a nuclear umbrella pay for the warheads and the delivery systems sized to their threat. The alliance system stays — but the free-rider era ends.',
    appliesTo: ['Military Posture & Defense Doctrine'],
  },
  {
    icon: '🕊️',
    title: 'We defend. We don\'t attack.',
    description: 'A bright line both legacy parties refuse to draw: an imminent armed attack on US territory, US forces, or US-flagged assets is the President\'s to repel — no permission slip needed. Any other use of force, including joining an ally\'s fight, requires an Article I declaration. The 2001 and 2002 AUMFs get repealed. Twenty-four years of forever war end.',
    appliesTo: ['Military Posture & Defense Doctrine'],
  },
  {
    icon: '🌐',
    title: 'No permanent enemies',
    description: 'Alliances keep peace; refusing to expand them creates the next war. We open the door — on conditions — to former adversaries, including Russia. Had NATO admitted Russia after the Cold War, Europe would buy Russian energy instead of fearing Russian tanks. The same principle goes long-term for China. Stop manufacturing enemies. Use diplomacy as the front line, force as the last.',
    appliesTo: ['Military Posture & Defense Doctrine'],
  },
  {
    icon: '⚙️',
    title: 'Build what we depend on',
    description: 'Chips, rare earths, munitions, pharmaceuticals, shipbuilding — the things a country at war cannot import in time. We onshore or friendshore the critical supply chain, rebuild the strategic stockpile, and review the Jones Act for naval logistics realities. Industrial policy where national security actually demands it, not as a slush fund.',
    appliesTo: ['Military Posture & Defense Doctrine'],
  },
  {
    icon: '🎖️',
    title: 'Take care of who we send',
    description: 'A modernized GI Bill that pays for trade school or college, a VA that uses community-care choice when its own system falls short, real mental-health funding for the suicide crisis that kills more veterans than combat ever did, and housing-first for homeless vets. We don\'t get to send Americans to fight if we won\'t take care of them when they come home.',
    appliesTo: ['Military Posture & Defense Doctrine'],
  },
] as const

export default function ForeignPillarPage() {
  return (
    <div>
      <IssueHero
        badge="🌍 Foreign Pillar"
        badgeColor={FOREIGN}
        title={<>Strong Enough That <span style={{ color: FOREIGN }}>No One Tries.</span></>}
        subtitle="Peace through strength — and strength through honest alliances. Allies pay their share. We defend, we don't attack. We never start wars, and we don't join other nations' wars without an Article I declaration. No permanent enemies — alliances keep the peace. Modernized deterrent, onshore critical supply, restored GI Bill. One sub-issue shipped — the rest queued below."
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
          style={{ background: `color-mix(in srgb, ${FOREIGN} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${FOREIGN} 35%, transparent)`, color: FOREIGN }}>
          ★ Signature Principle
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          Strong Enough That No One Tries.<br/>
          <span style={{ color: FOREIGN }}>Honest Enough That No One Pays for Wars They Didn&apos;t Pick.</span>
        </h2>
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
          Both parties have run the same playbook for thirty years — endless wars, free-rider allies, a Pentagon that has failed every audit since 2018, and a manufactured-enemies list that keeps growing. We end all of it. Real deterrent, paid alliances, mutual-defense only, no first strikes, Article I restored. The strongest country in the world doesn&apos;t need to bully — and it doesn&apos;t need to be lied to about why its sons and daughters are deploying.
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
          <p className="text-[var(--muted)]">One shipped. Three queued.</p>
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
          <p className="text-[var(--muted)] text-sm">Coming next. The doctrine on the shipped page applies to each.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <p className="text-[var(--muted)] max-w-xl mx-auto">Threads running through the Foreign platform. One doctrine, growing sub-issue by sub-issue.</p>
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
          Want a country that <span style={{ color: FOREIGN }}>defends without bullying</span>?
        </h2>
        <p className="text-[var(--muted)] text-lg mb-8">
          The Foreign platform starts with the doctrine — who we defend, when we use force, what allies owe — and builds out from there.
        </p>
        <Link href="/join"
          className="inline-block px-10 py-4 rounded-full font-black text-xl text-[var(--navy)] transition-all hover:scale-105"
          style={{ background: FOREIGN, color: 'white' }}>
          Join the Movement 🦅
        </Link>
      </div>
    </section>
  )
}
