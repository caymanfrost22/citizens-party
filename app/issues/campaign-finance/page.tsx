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
    title: 'Statutory Ban on Corporate PAC Contributions',
    body: 'No corporation, trade association, or registered foreign-influenced entity may contribute to any federal candidate or party committee. Extends the Tillman Act (1907) to close every modern PAC workaround. Statutory — no constitutional amendment required, because direct contributions are not protected speech under Citizens United. Until this passes, we operate under existing law like every other party.',
  },
  {
    num: '02',
    title: '$10,000 Individual Cap Per Cycle, Indexed to Inflation',
    body: 'Honest about how money flows. Raise the individual cap to $10K per candidate per two-year cycle — no primary + general doubling, no party soft-money workaround. Indexed to CPI, resets automatically. The point is not to pretend small amounts move politics; the point is to disclose every dollar in real time and make megadonor influence visible.',
  },
  {
    num: '03',
    title: 'Force SuperPACs Back to PAC Rules: $5K Per Donor Cap',
    body: 'Direct statutory challenge to SpeechNow v. FEC (D.C. Circuit, 2010) — the ruling that birthed unlimited-money SuperPACs. We treat SuperPACs as PACs: $5,000 per individual donor per cycle, no corporate or union donations, full FEC disclosure. Lets the Supreme Court revisit whether SpeechNow survives without the Citizens United premise it depended on.',
  },
  {
    num: '04',
    title: 'DISCLOSE Act: Dark Money Donors >$10K Public',
    body: 'Any 501(c)(4), 501(c)(6), or shell entity engaged in political activity must disclose every donor contributing more than $10K within 24 hours. Bipartisan support pre-2010, blocked since. We pass it. Donor lists become public the moment political spending starts — no more Arabella-style ~$1.5B dark networks on either side.',
  },
  {
    num: '05',
    title: 'Democracy Vouchers: $200 Per Citizen Per Cycle',
    body: 'Every eligible voter receives $200 in federal democracy vouchers each two-year cycle, assignable to any qualifying federal candidate. Funded by a 0.5% surcharge on registered lobbying expenditures — lobbyists literally pay for citizen-funded politics. Seattle\'s municipal voucher program tripled small-donor participation. We scale it federal.',
  },
  {
    num: '06',
    title: '24-Hour Public Disclosure on Every Dollar Above $200',
    body: 'Every contribution over $200 disclosed within 24 hours, searchable by donor, recipient, employer, and ZIP code. SuperPAC funder disclosure within 24 hours of any expenditure. Real-time public dashboard at fec.gov. Quarterly filings are a relic of paper-mail government — disclosure tech is solved.',
  },
  {
    num: '07',
    title: 'Coordination Ban With Criminal Teeth',
    body: 'SuperPACs cannot coordinate with candidate campaigns — period. Strict statutory definitions: no shared consultants within 12 months, no public-data signaling, no "redboxing" tactics. FEC granted criminal referral authority. Independent expenditures stay independent or they become felonies. Neuters the practical effect of Citizens United without waiting for the amendment.',
  },
  {
    num: '08',
    title: '28th Amendment Campaign — In Parallel',
    body: 'Statutory work-arounds get us most of the way. The 28th Amendment finishes the job — declaring that constitutional rights belong to natural persons, not corporations, and that money is not speech. Long Article V fight. We run it in parallel with the statutory reforms. Both tracks. No waiting.',
  },
  {
    num: '09',
    title: 'Lead by Example: We Pre-Comply With Our Own Rules',
    body: 'Citizens Party operates today under the rules we are fighting to make universal. Same-day disclosure on every dollar over $200. No coordination with any allied SuperPAC. We accept corporate PAC contributions where the law allows it — because unilateral disarmament loses elections, and you cannot change laws you cannot win under. But every dollar comes with the receipt we want to be law. The day Congress bans corporate PACs, we stop taking them — that day, not before.',
  },
] as const

export default function CampaignFinancePage() {
  return (
    <div>
      <IssueHero
        badge="💵 Campaign Finance"
        badgeColor="var(--teal)"
        title={<>We Play By the Rules <br/>We&apos;re <span style={{ color: 'var(--teal)' }}>Fighting to Change.</span></>}
        subtitle="$16B spent on the 2024 federal cycle. 99% from 1% of donors. Both parties built this. We disclose every dollar above $200 today and run on the rules we want to make law for everyone tomorrow."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Overturn Citizens United via 28th Amendment. DISCLOSE Act. 6:1 small-donor match. Take corporate PAC money anyway — $240M to DNC + candidates in 2024."
          rep={`Defend Citizens United, McCutcheon, SpeechNow. Block DISCLOSE Act. Oppose donor disclosure as "harassment." Take corporate PAC money — $280M to RNC + candidates in 2024.`}
          us="Statutory corp PAC ban. $10K individual cap indexed. Force SuperPACs to $5K/donor PAC rules. DISCLOSE Act. $200 democracy vouchers funded by lobbying surcharge. 24hr disclosure >$200. Coordination ban with criminal teeth. 28th Amendment campaign in parallel. We pre-comply with our own proposed rules today."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--teal)" bg="color-mix(in srgb, var(--teal) 10%, transparent)" border="color-mix(in srgb, var(--teal) 30%, transparent)">📊 The Money Problem</SectionLabel>
          <h2 className="text-3xl font-black">Whose Voice Actually Gets Heard</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$16B" label="2024 federal cycle total" color="#c8102e" />
          <StatCard num="1%" label="Donors providing 99% of $$" color="#c8102e" />
          <StatCard num="$2T" label="Annual lobbying-influenced spend" color="var(--gold)" />
          <StatCard num="100%" label="Citizens Party donor disclosure" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Nine Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Statutory work-arounds, constitutional fight, lead-by-example today.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor="var(--teal)" />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--gold) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Why We Take Legal Money While Fighting To Ban It</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            A campaign-finance reform party that loses every race accomplishes nothing. Unilateral disarmament hands the field to the parties that built the broken system. We will not pretend purity by losing. Instead: we follow the rules we want to be law — same-day disclosure, no coordination, transparency on every dollar — while we run real candidates competitive with Democrat and Republican war chests. The day the statutory bans pass, our practice becomes universal. Until that day, we win elections so we can change laws.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/lobbying-ban" className="underline hover:text-white">Lobbying ban</Link>: PAC money + the K Street post-career are one captive system. Cut both ends or neither matters. The same page closes the FARA gap — AIPAC, Saudi lobby, Qatar, Russia, China, Taiwan, UK all required to register, FARA-org PACs banned from federal elections.</li>
            <li>• <Link href="/issues/voting-reform" className="underline hover:text-white">Voting reform</Link>: ranked-choice voting + small-donor vouchers = third parties can actually compete on policy, not just donor scale.</li>
            <li>• <Link href="/issues/term-limits" className="underline hover:text-white">Term limits</Link>: capped service + capped money = nobody runs to get rich, nobody stays to protect donors.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: OpenSecrets 2024 cycle totals, FEC contribution data, Seattle Democracy Voucher Program evaluation, Buckley v. Valeo (1976), Citizens United v. FEC (2010), SpeechNow v. FEC (2010), McCutcheon v. FEC (2014), Brennan Center for Justice, Tillman Act (1907).
          </p>
        </div>
      </section>
    </div>
  )
}
