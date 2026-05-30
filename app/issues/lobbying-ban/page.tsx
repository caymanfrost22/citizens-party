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
    title: 'Lifetime Lobbying Ban for Former Members of Congress',
    body: 'Any person who has served in the House or Senate may never register as a lobbyist or accept lobbying-related compensation from any entity lobbying the federal government. Lifetime. No 1-year cool-off, no 5-year cool-off — never. Ends the central economic incentive for getting elected in the first place.',
  },
  {
    num: '02',
    title: '5-Year Revolving Door for Senior Executive Officials',
    body: 'Cabinet secretaries, Senate-confirmed officials, agency heads, and senior congressional staff (GS-15 equivalent +) face a 5-year ban on lobbying their former agency or congressional committee. Broaden the definition: "shadow lobbying" — strategy advice paid by registered lobbying firms — counts. No more "strategic advisor" rebranding.',
  },
  {
    num: '03',
    title: 'Congressional Stock Trading Ban',
    body: 'Members of Congress, their spouses, and senior staff prohibited from owning or trading individual stocks while in office. Required to hold only index funds, blind trusts, or US Treasuries. Existing portfolios divested within 90 days of taking office. Criminal penalties for violations — not slap-on-the-wrist ethics fines.',
  },
  {
    num: '04',
    title: '24-Hour Lobbying Contact Log',
    body: 'Every federal official, elected or appointed, publishes a daily log of every meeting, call, and substantive communication with registered lobbyists. Public, searchable, immutable, posted within 24 hours. No exception for "personal time" — if it touches policy, it gets logged. Sunlight on every contact.',
  },
  {
    num: '05',
    title: 'Close the FARA Gap — AIPAC, Saudi Lobby, Every Foreign Influence Op',
    body: 'Foreign governments influence US policy through US-registered 501(c)(4)s that dodge FARA disclosure by claiming domestic membership. AIPAC has done this since 1962 when the DOJ ordered its predecessor to register as a foreign agent. Saudi lobby firms, Qatar-funded think tanks, Russia, China, Taiwan, UK — every foreign-government influence operation gets the same rule. Any organization whose stated mission is advocating for the policy interests of a named foreign government — OR that has received more than $50K cumulatively in foreign-government funding over any 5-year window — must register under FARA. No exemptions. No exceptions. No "we are American-led" workaround.',
  },
  {
    num: '06',
    title: 'Ban PAC and SuperPAC Activity by Any FARA-Registered Org',
    body: 'FARA-registered organizations and their affiliates may not run PACs or SuperPACs targeting US federal elections. Period. AIPAC\'s United Democracy Project — which spent over $100M in the 2024 cycle targeting candidates critical of a foreign government — could not exist under this rule. Federal candidates may not accept any contribution from a FARA-org PAC. Closes the channel through which foreign-government policy preferences become US election outcomes.',
  },
  {
    num: '07',
    title: 'Felony FARA Enforcement + Mandatory Special Counsel for Repeat Violators',
    body: 'FARA currently relies on civil penalties routinely waived. We make willful FARA violation a felony — up to 5 years prison, no plea bargains for senior officials. Repeat violators (organizations or individuals with prior FARA enforcement actions) trigger automatic DOJ Special Counsel appointment, insulated from political appointees. Foreign-government-funded influence becomes a career-ending bet, not a fine-as-cost-of-business. Close the diplomatic carveout for foreign intelligence services — MSS, Mossad, MI6, Saudi GIP all must register if lobbying US Congress.',
  },
  {
    num: '08',
    title: 'Single Citizenship for Federal Politics, Clearance, and Major Donors',
    body: 'You can hold dual citizenship as a private American. But: any federal candidate, federal officeholder, federal employee with security clearance, or political donor giving more than $10K per cycle must hold only US citizenship. Pick: politics or two passports. Constitutional under Afroyim v. Rusk (rights waivable by voluntary conduct). Pairs with the naturalization renunciation rule already in our Immigration platform.',
  },
  {
    num: '09',
    title: 'Foreign Agent Registration Public Dashboard',
    body: 'State Department publishes a monthly FARA filings dashboard — searchable by country, agent, recipient, dollar amount, and US official contacted. Real-time, immutable, public. Every dollar of foreign-government influence visible to every American. Sunlight as enforcement.',
  },
] as const

export default function LobbyingBanPage() {
  return (
    <div>
      <IssueHero
        badge="🚪 Lobbying Ban"
        badgeColor="var(--teal)"
        title={<>Close the <span style={{ color: 'var(--teal)' }}>K Street</span> and <span style={{ color: 'var(--teal)' }}>Foreign Influence</span> Pipelines.</>}
        subtitle="58% of ex-senators become lobbyists. AIPAC, Saudi lobby firms, Qatar think tanks dodge FARA. We end the lifetime cash-out, close the FARA gap, ban foreign-lobby PACs, criminalize willful violations, and require single citizenship to hold federal office, security clearance, or write a $10K+ political check."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Strengthen disclosure rules, modestly extend cooling-off periods, ban foreign-agent lobbying. Decline to touch AIPAC FARA loophole."
          rep="Free-speech protections, voluntary ethics, narrow disclosure expansions, deregulate. Decline to touch AIPAC FARA loophole."
          us="Lifetime ban on ex-members of Congress. 5-year senior-official cool-off + shadow-lobbying captured. Close FARA gap — AIPAC, Saudi, Qatar, Russia, China, Taiwan, UK all must register. Ban FARA-org PACs and SuperPACs. Felony enforcement + mandatory Special Counsel for repeat violators. Single citizenship to hold federal office, clearance, or donate >$10K. 24-hour contact logs. Congressional stock trading ban with criminal penalties."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--teal)" bg="color-mix(in srgb, var(--teal) 10%, transparent)" border="color-mix(in srgb, var(--teal) 30%, transparent)">📊 The Pipeline</SectionLabel>
          <h2 className="text-3xl font-black">The Job Is the Audition</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="58%" label="Ex-senators who become lobbyists" color="#c8102e" />
          <StatCard num="42%" label="Ex-House members who lobby" color="#c8102e" />
          <StatCard num="$4.3B" label="Annual federal lobbying spend" color="var(--gold)" />
          <StatCard num="$100M+" label="AIPAC SuperPAC 2024 cycle spend" color="#c8102e" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Nine Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Cut the K Street incentive. Close the foreign-influence loophole. Criminal teeth where it counts.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>The Rule Is Universal — Or It Isn&apos;t Real</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Singling out one country&apos;s lobby is bigotry. Applying the same rule to every country is principle. The FARA reform here treats AIPAC, the Saudi government&apos;s US lobbying network, Qatar Foundation International, the British Embassy&apos;s influence operations, the Taiwanese TECRO, the Chinese Communist Party&apos;s remaining cultural-exchange channels, and Russian-funded think tanks identically. If you advocate for a named foreign government&apos;s policy interests, you register under FARA. If you receive foreign-government money to do it, you register under FARA. No exemption for ally, ideology, or religion. Same rule, every nation.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--teal) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--teal)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/campaign-finance" className="underline hover:text-white">Campaign finance</Link>: corporate PAC ban + FARA-org PAC ban together cut both the domestic and foreign capture channels.</li>
            <li>• <Link href="/issues/term-limits" className="underline hover:text-white">Term limits</Link>: 12-year service cap + lifetime lobbying ban = no path to a Washington career, period.</li>
            <li>• <Link href="/issues/immigration" className="underline hover:text-white">Immigration</Link>: the single-citizenship requirement for federal politics + the naturalization renunciation rule together close the dual-loyalty loophole in federal service.</li>
            <li>• <Link href="/reform" className="underline hover:text-white">100-Day Action Plan</Link>: lobbying blackout day 2, congressional stock trading ban day 3, revolving door freeze day 7.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: Public Citizen Revolving Door Database, Senate Office of Public Records LDA filings, Lobbying Disclosure Act 2 U.S.C. § 1601 et seq., Foreign Agents Registration Act 22 U.S.C. § 611 et seq., DOJ FARA Unit registration records, OpenSecrets lobbying data, FEC United Democracy Project filings (2024 cycle), Afroyim v. Rusk (1967).
          </p>
        </div>
      </section>
    </div>
  )
}
