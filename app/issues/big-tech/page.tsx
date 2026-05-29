import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'

export const revalidate = 60

const MECHANISMS = [
  {
    num: '01',
    title: 'No Structural Breakups for Chosen Relationships',
    body: 'Meta can own WhatsApp + Instagram. Amazon can sell its own products on Amazon. Apple can pre-install Apple apps. Free market when you can walk away. Citizens Party stance: platforms must follow universal laws (speech, contracts, fraud), but government does not dictate corporate structure of businesses you freely choose.',
  },
  {
    num: '02',
    title: 'Markup Cap OR Self-Supply — Cross-Industry Rule',
    body: 'If a business restricts your ability to self-supply, markup is capped at 5%. If the business allows alternatives, markup is free. XOR — cap-or-choice, never both. Disney parks: 5% cap on food prices OR let guests bring outside food. App Store: 5% cap on in-app purchases OR allow third-party stores + sideloading. Stadiums, theaters, Ticketmaster, hospital cafeterias, prison commissary, anywhere the trick is preventing you from leaving.',
  },
  {
    num: '03',
    title: 'Section 230 Size-Tiered + Algorithmic-Amplification Liability',
    body: 'Small platforms (< 10M US users): full 230 protection. Innovation, indie services, new entrants are safe. Mega-platforms (> 100M US users): liable for content their algorithm actively amplifies. Posts users discover organically still shielded. Posts the algorithm pushed to millions: platform is responsible.',
  },
  {
    num: '04',
    title: 'Mandatory Chronological Feed Option',
    body: 'Every mega-platform must offer a chronological / no-algorithm feed. The default is chronological. Users opt INTO the algorithmic feed. Restores user control over their own attention.',
  },
  {
    num: '05',
    title: 'Opt-In Privacy by Default',
    body: 'No data collection without explicit user opt-in. Pre-checked boxes illegal. Major shift from the current opt-out world. Privacy is a default state, not a privilege you have to fight for.',
  },
] as const

export default function BigTechPage() {
  return (
    <div>
      <IssueHero
        badge="📱 Big Tech + Antitrust"
        badgeColor="#7b2d8b"
        title={<><span style={{ color: '#f5a623' }}>Captivity</span> = Regulation.<br/><span style={{ color: '#06d6a0' }}>Choice</span> = Market.</>}
        subtitle="Top 5 tech firms = 25% of the S&P 500. Apple + Google take 15–30% on every app sale. Meta + Google own 50% of digital ads. We don't break free relationships. We break captive markets."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Privacy laws, narrow Section 230 for misinformation, antitrust enforcement on monopolies."
          rep="Narrow Section 230 for censorship, antitrust on perceived bias."
          us="No structural breakups for chosen relationships. Markup cap of 5% OR self-supply across industries. Section 230 size-tiering + algorithmic-amplification liability. Mandatory chronological feed. Opt-in privacy by default."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#7b2d8b" bg="rgba(123,45,139,0.12)" border="rgba(123,45,139,0.3)">📊 Concentration</SectionLabel>
          <h2 className="text-3xl font-black">The Concentration Stack</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="25%" label="Top 5 Tech = % of S&P 500" color="#f5a623" />
          <StatCard num="15–30%" label="App Store Cut on Every Sale" color="#c8102e" />
          <StatCard num="90%" label="Google Share of US Search" color="#c8102e" />
          <StatCard num="50%" label="Meta + Google Share of Digital Ads" color="#c8102e" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Free Markets For Free People</h2>
          <p className="text-[#8fa3bc] mt-2">Regulate the captive. Leave the free alone.</p>
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
            <li>• <Link href="/issues/healthcare-costs" className="underline hover:text-white">Healthcare Costs</Link>: PBM divestiture is the same principle — the consumer is captive there, so the market is regulated. Here you can walk away, so the market is free.</li>
            <li>• See the <Link href="/issues/economy" className="underline hover:text-white">Economics Pillar</Link> for the full Captivity = Regulation, Choice = Market signature principle.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: '#8fa3bc' }}>
            Sources: S&P 500 market cap data (Slickcharts), Apple + Google developer agreements, StatCounter Global Stats, GroupM Digital Ad Spend Forecast, DOJ v. Google (Case 1:20-cv-03010), EU Digital Markets Act.
          </p>
        </div>
      </section>
    </div>
  )
}
