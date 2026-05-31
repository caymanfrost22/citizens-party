import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'
import MechanismCard from '@/components/issue/MechanismCard'

export const revalidate = 60

const FOREIGN = '#7b2d8b'

const MECHANISMS = [
  {
    num: '01',
    title: 'Strategic Competition + Structured Coexistence',
    body: 'The frame matters before any specific policy. The United States and China are strategic competitors — for technology leadership, economic gravity, regional influence, and the rules of the next world economy. They are not, and we will not treat them as, an inevitable enemy in a new Cold War. Competition does not mean every channel closes; it means we compete vigorously where interests clash, cooperate where they genuinely align, and build the diplomatic, economic, and military rails to manage both at once. The honest goal is a stable equilibrium — not victory, not capitulation, not collapse. Both legacy parties have drifted toward an enemy framing that polls well in primaries and ages badly in history; the same no-permanent-enemies doctrine we apply to Russia on our Military Posture page applies here, on a generational time horizon.',
  },
  {
    num: '02',
    title: 'The Dollar Is the Homeland — Defend It Like One',
    body: 'Strategic coexistence has one hard limit: organized efforts to displace the US dollar as the world\'s reserve currency are treated as an economic security threat, on par with a kinetic threat to critical infrastructure. The dollar reserve is not just a financial convenience — it is the foundation of US sanctions power, US borrowing costs, and the postwar international order the US underwrites. Coordinated dedollarization campaigns — BRICS settlement systems explicitly designed to bypass the dollar, sovereign digital-currency adoption pushed as a dollar alternative, oil contracts deliberately repriced out of dollars as policy — get treated for what they are: economic warfare on the US economic security architecture. We respond with the full instruments of statecraft (financial, diplomatic, technological) the way we would respond to any other coordinated attack on the homeland. Trade with China otherwise stays open; this is the one bright line.',
  },
  {
    num: '03',
    title: 'Targeted Tariffs + Reciprocity, Not Blanket Theater',
    body: 'Both parties have drifted into blanket-tariff posture — Trump-era tariffs maintained by Biden, then doubled with EV and solar tariffs, then proposed at 60% across-the-board by the next Trump administration. Tariffs are taxes Americans pay. They are not free; they show up at the checkout. We use them precisely. Strategic-sector tariffs (semiconductors, dual-use technology, critical minerals, certain steel and shipbuilding categories) are kept and enforced where they actually buy the US something — domestic capacity, national-security insulation, leverage in negotiation. Everywhere else, trade with China runs on a sector-by-sector reciprocity rule: where Beijing tariffs US goods, we mirror; where their market opens, we open. The point is honest pricing and matching, not theater that taxes Americans while doing nothing for them.',
  },
  {
    num: '04',
    title: 'Small Yard, High Fence — Leading-Edge Tech Stays In',
    body: 'A narrow set of technologies — advanced AI training compute, leading-edge semiconductor lithography (EUV from ASML), the most sophisticated chip-design and manufacturing equipment, certain biotech and quantum capabilities — sit at the head of the competition for the next several decades, and their proliferation to a state actively pursuing tech leadership against the US is a strategic giveaway. Export controls on this short list stay tight and get enforced — third-country diversion closed, US person rules tightened, allied coordination through Chip 4 and equivalents real rather than rhetorical. Everything outside that yard — commodity chips, consumer electronics, ordinary industrial goods, the things consumers actually buy — trades freely on the reciprocity rule above. The frame is "small yard, high fence" rather than the big-yard, low-fence decoupling both parties keep gesturing at and never actually doing.',
  },
  {
    num: '05',
    title: 'Build Our Own — Onshore the Strategic Stack',
    body: 'Export controls buy time. They do not buy independence. Independence comes from building the strategic stack at home and across allied geographies. We accelerate semiconductor fabrication on US soil and in Chip 4 partner countries, rebuild the rare-earth processing capacity the US ceded to China over thirty years, onshore advanced battery and grid-scale energy storage manufacturing, restore shipbuilding capacity (cargo and naval), rebuild a domestic pharmaceutical active-ingredient base, and stand up large-scale precision-manufacturing tooling so the US can build the things it currently has to import. This is the same onshoring program our Military Posture page details for the defense supply chain, expanded to the civilian-strategic categories that the next twenty years will turn on. We do not whine about Chinese capability. We build our own.',
  },
  {
    num: '06',
    title: 'Data Sovereignty — Applied to Every Foreign-Adversary App, Not One',
    body: 'TikTok is a real concern. Singling out a single Chinese app while ignoring data flows from every other foreign-adversary-controlled platform is half-measured policy that loses First Amendment challenges and looks like protectionism. We replace TikTok-specific legislation with a Data Sovereignty Act applied equally to every social platform with over 100 million US users, regardless of country of origin: US-user data stored and processed inside the United States and subject to US legal process, algorithmic transparency at a sufficient level that independent auditors can evaluate manipulation and foreign influence, audited content-moderation policies, no foreign-adversary-government access to engagement metadata. The rule survives constitutional scrutiny because it applies uniformly. It catches the actual risk because the risk is data and algorithmic influence, not the headquarters address.',
  },
  {
    num: '07',
    title: 'Taiwan — Strategic Ambiguity, Costs Split Honestly',
    body: 'The Taiwan position is settled and lives on the Ukraine / Israel / Foreign Wars sub-issue page so it stays in one place rather than getting duplicated and slowly drifting apart across pages. The summary: strategic ambiguity stays as the public posture. The portion of US presence that exists for Taiwan-specific defense (advise-and-assist, defensive weapons, training) is paid for by Taiwan at rates priced to delivered capability. The portion that exists for US strategic interest — semiconductor supply security, first-island-chain deterrence, alliance signal to Japan, South Korea, and the Philippines — is paid for by the United States, because that part is ours. Same bases-doctrine logic from our Military Posture page applied to a country. See the full mechanism at /issues/foreign-wars.',
  },
  {
    num: '08',
    title: 'South China Sea — FONOPS + Interop + UNCLOS, No Article 5 to Disputed Islands',
    body: 'The Pacific commons are kept open through the same instruments that have worked since 1945: US Navy freedom-of-navigation operations under existing authority, deepened interoperability with Philippines (mutual-defense treaty modernized, on pay-to-play terms), Japan, Australia, Vietnam, and Indonesia, joint patrols in disputed waters, and diplomatic pressure to resolve overlapping claims under the United Nations Convention on the Law of the Sea. We do not extend Article 5–style defense commitments to disputed rocks, reefs, and artificial islands; that is the kind of overcommitment that drags allies into shooting wars over real estate that does not justify them. The bright line is the international commons, the trade routes, and treaty allies under attack. Disputed sovereignty over Spratly and Paracel features gets resolved at the diplomatic table.',
  },
  {
    num: '09',
    title: 'Compete in the Market — Beat the Belt-and-Road, Don\'t Sanction It',
    body: 'China\'s Belt and Road, port investments across Africa and Latin America, and infrastructure financing across the Global South are the result of one fact: they showed up with capital and terms while the United States spent twenty-five years not bothering. The fix is to compete, not to sanction third countries for accepting Chinese terms. The US Development Finance Corporation gets recapitalized and authorized at scale to write infrastructure deals on better terms — quality, sustainability, transparency, anti-corruption — that compete with BRI on substance rather than on lectures. Private capital follows where the DFC opens the path. Inside the United States, restrictions on Chinese ownership of critical infrastructure (ports, energy grid, farmland adjacent to military installations, sensitive technology firms) run through case-by-case CFIUS-style national-security review, not blanket country-of-origin bans that look like the racial-restrictive covenants this country spent fifty years repealing.',
  },
  {
    num: '10',
    title: 'Keep Cooperation Tracks Open Where They Matter',
    body: 'Competition does not mean every channel closes. The shared-interest tracks — global climate emissions, pandemic surveillance and reporting, North Korean and Iranian non-proliferation, AI safety and lethal autonomous weapons, fissile-material security — stay open and worked at the working level, regardless of friction elsewhere in the relationship. The pattern of "suspend everything when relations sour, restart nothing when they improve" produces the worst of both: real cooperation lost in places it actually helps, and no actual leverage gained in the places where the friction is real. We separate the issues, staff the channels, and use them. China benefits when the planet does not burn or get plagued. So do we.',
  },
  {
    num: '11',
    title: 'Fentanyl Precursors — Handled on the Drug-Policy Plan',
    body: 'The fentanyl supply chain runs through Chinese precursor producers, Mexican cartel manufacturing, and US distribution networks. Our position is built and detailed on the Drug Policy plan, where the mechanism actually lives: sanction Chinese precursor producers, designate the major cartels as Foreign Terrorist Organizations, fund port-of-entry scanning, prosecute fatal-dose dealers as accomplices to the death, and explicitly do not put US military forces inside Mexico without invitation. This page acknowledges the China precursor link and points to the page where the policy is written, rather than duplicating it and inviting drift. See /issues/drug-policy for the full framework.',
  },
  {
    num: '12',
    title: 'Counterintelligence — Smart, Reciprocal, Not Ethnic',
    body: 'Chinese state-directed industrial espionage, talent recruitment programs targeting US national-security research, and intelligence operations on US soil are real and require real counterintelligence resources. The Department of Justice "China Initiative" launched in 2018 was the wrong tool — it disproportionately swept up Chinese-American researchers on grant-disclosure technicalities with little national-security relevance, damaged the very recruitment pipeline that gives US science its edge, and was wound down in 2022 for exactly those reasons. We strengthen FBI counterintelligence focused on actual espionage cases, restrict Chinese-government-affiliated researchers at the narrow set of sensitive US institutions on case-by-case review, and on press access we apply the same reciprocity rule we apply to trade — when Beijing expels US journalists, we expel theirs proportionately; when they open, we open. We never revive blanket ethnic profiling. The threat is operational, not racial.',
  },
  {
    num: '13',
    title: 'Students and Scientists — Open by Default, No Federal Money for Non-Citizens',
    body: 'Chinese and other foreign students at US universities are, on net, a strategic asset for the United States: many stay and fill STEM positions the US labor market cannot fill alone, and those who return carry exposure to American institutions and ideas back with them. We keep that pipeline open by default. But we draw the lines that have been blurred for thirty years. First, federal money — federal student aid, federally subsidized student loans, federal research stipends, taxpayer-subsidized in-state tuition rates — is for US citizens, period. Foreign students pay full freight or attend private institutions on private funding. Second, publicly funded public university admissions prioritize US citizens for the publicly subsidized seats; foreign enrollment caps at public institutions are set so that no American is displaced from a seat the American taxpayer is paying to subsidize. Private universities, fully self-funded under our Education plan, may set their own foreign enrollment as they see fit. Third, narrow national-security fields (advanced hypersonics, certain AI capabilities, sensitive nuclear research) restrict foreign access on case-by-case clearance review — same standard already applied to US citizens in those fields. Open exchange, paid honestly, with the strategic guardrails written down.',
  },
  {
    num: '14',
    title: 'Pacific Alliances — Strengthen on Pay-to-Play Terms',
    body: 'The Pacific alliance architecture — Japan, South Korea, the Philippines, Australia (and the Quad including India, AUKUS, Chip 4) — is the single most valuable strategic asset the United States has in the China relationship. We strengthen it, but on the same pay-to-play terms our Military Posture page applies to NATO and to every other alliance: host nations pay for the bases they want, formal allies meet defense-spending floors priced to deployed US capability protecting them, and the doctrine is mutual-defense only — we help defend an ally under attack, we do not commit US forces to offensive operations against China on behalf of an ally that picked the fight. The Quad gets institutionalized beyond summits. AUKUS submarine production hits its milestones with US, UK, and Australian shipyard capacity each carrying its share. Chip 4 coordination becomes binding rather than aspirational. The Philippines mutual-defense treaty gets modernized for grey-zone realities.',
  },
  {
    num: '15',
    title: 'Defend the Dollar Through Fiscal Honesty + Digital-Dollar Framework',
    body: 'The deepest threat to dollar reserve status is not a Chinese policy; it is US fiscal indiscipline. Annual deficits in the trillions, interest payments crossing $1 trillion per year, and the Federal Reserve\'s monetization of debt erode reserve credibility faster than any BRICS settlement system can attack it. Defense of the dollar therefore begins on the Debt + Spending page (deficit reduction, pass-or-cut audit consequences across every agency, GDP-cap discipline) and continues here with three additional pieces. First, we restrain casual SWIFT weaponization — every secondary sanction imposed for marginal foreign-policy purposes accelerates the alternatives China and Russia are already building. We reserve SWIFT exclusion for cases of strategic gravity. Second, the United States builds a regulated digital-dollar framework — not a Federal Reserve retail CBDC that breaks consumer banking, but a digital-dollar standard usable in international settlement, paired with stablecoin regulation that keeps the dollar dominant in the digital settlement layer the next decade will run on. Third, we treat coordinated dedollarization for what it is under mechanism 02 above. The dollar wins by being the better instrument, defended by fiscal honesty, secured against attack.',
  },
  {
    num: '16',
    title: 'Long Arc — Door Open on Conditions, Generational Horizon',
    body: 'The doctrine on the Russia page applies here on a longer timeline. Permanent enemies are a choice both parties keep making. We refuse to. The long-term door to deeper US-China cooperation — and eventually to the kind of integration that simply takes war off the table the way US-Japan integration eventually did — stays open, on conditions: peaceful resolution of the Taiwan question, end to systemic IP theft and forced technology transfer, real market access reciprocity, verifiable steps on labor and rule-of-law conditions over a multi-decade horizon. We are honest about the time frame. This is a generational project, not a one-administration deliverable. But we will not write off a fifth of humanity as a permanent enemy because the politics of doing so is easier than the diplomacy of not. Rivals today. Not enemies forever.',
  },
] as const

export default function ChinaPolicyPage() {
  return (
    <div>
      <IssueHero
        badge="🇨🇳 China Policy"
        badgeColor={FOREIGN}
        title={<>Out-Build at Home. Out-Compete Abroad.<br/><span style={{ color: FOREIGN }}>Out-Last in Time.</span></>}
        subtitle="The relationship that defines the next fifty years. Strategic competition, structured coexistence — not a new Cold War, not capitulation. Targeted tariffs where they buy something, reciprocity everywhere else. Small yard around the leading-edge tech, high fence around it, open trade on everything else. Onshore the strategic stack so we depend less. Defend the dollar as a national-security interest. Compete in markets instead of sanctioning third countries. Keep cooperation tracks open on climate, pandemics, AI safety. Smart counterintelligence, not ethnic profiling. Foreign students welcome, on private money, never displacing Americans from subsidized seats. Pacific alliances strengthened on pay-to-play terms. Long-arc door open on conditions. Rivals today. Not enemies forever."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="'Extreme competition, not Cold War.' Small-yard-high-fence chip controls, climate cooperation, allied coalitions (Quad, AUKUS, Chip 4). In practice: kept every Trump tariff, added EV + solar tariffs, expanded chip export controls three rounds, signed TikTok divest-or-ban, expanded first-island-chain deployments — most of the substance of the hawk position, dressed in softer language."
          rep="Hawk consensus, two flavors. Establishment: decouple, harden Taiwan, AUKUS-Quad-Chip 4. MAGA: 60%+ universal tariffs, revoke PNTR, blame China for fentanyl + COVID + manufacturing decline, ban Chinese land + TikTok + students. In practice: tariffs are taxes Americans pay and most of these never get reciprocity, and 'tough' theater has produced an Iran-style situation where pressure-without-strategy makes the rival stronger."
          us="Strategic competition + structured coexistence. Targeted tariffs strategic + reciprocity elsewhere — no blanket theater. Small-yard-high-fence on leading-edge tech + active onshore build of the strategic stack so we depend less. Data-sovereignty law applied to every foreign-adversary app equally, not TikTok singled out. FONOPS + Pacific interop + UNCLOS, no Article 5 to disputed islands. Compete in the market against BRI via the US Development Finance Corporation, not sanctions on third countries. Keep cooperation tracks open on climate, pandemics, AI safety, North Korea. Smart counterintelligence, never ethnic profiling. Foreign students welcome on private money — no federal aid for non-citizens, no displacement of Americans from publicly subsidized seats. Pacific alliances strengthened on pay-to-play terms. Defend the dollar as national-security interest — fiscal honesty + restrained SWIFT use + regulated digital-dollar framework + countermeasures against coordinated dedollarization. Long-arc door open on conditions. Generational horizon. Rivals today. Not enemies forever."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={FOREIGN} bg={`color-mix(in srgb, ${FOREIGN} 12%, transparent)`} border={`color-mix(in srgb, ${FOREIGN} 35%, transparent)`}>📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">What the Real Competition Looks Like</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="~17%" label="Of global GDP — China today, second-largest economy on earth" color={FOREIGN} />
          <StatCard num="~60%" label="Of US reserve-currency dominance in global FX reserves (declining slowly)" color={FOREIGN} />
          <StatCard num="$1T+" label="Annual US interest on the debt — the real threat to dollar reserve status" color="#c8102e" />
          <StatCard num="~90%" label="Of leading-edge semiconductor production in Taiwan — why the chip race matters" color={FOREIGN} />
          <StatCard num="0" label="DOJ China Initiative espionage convictions that actually involved espionage at the rate the program claimed" color="#c8102e" />
          <StatCard num="~290K" label="Chinese students in US universities — strategic asset, paid privately" color={FOREIGN} />
          <StatCard num="BRICS+" label="Coordinated dedollarization push — treated as economic security threat" color="#c8102e" />
          <StatCard num="Long arc" label="Generational horizon. Rivals today, not enemies forever." color={FOREIGN} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={FOREIGN} bg={`color-mix(in srgb, ${FOREIGN} 12%, transparent)`} border={`color-mix(in srgb, ${FOREIGN} 35%, transparent)`}>🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Sixteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Out-build them at home. Out-compete them abroad. Out-last them in time.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor={FOREIGN} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--gold) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Why Not Just Decouple? Why Not Treat China as the Enemy They Are?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Because the math does not work, the history does not work, and the politics does not work. The math: the US economy and the Chinese economy are interwoven at a scale (roughly $700 billion in annual goods trade, deep capital-market exposure, supply chains that took thirty years to build and would take twenty to unwind) that means full decoupling means a global depression Americans live through first. The history: every Cold War the United States has actually fought (the original, the proxy wars, the long Soviet contest) ended with enormous cost to American lives and treasure, and the one we "won" we won partly because we kept communication channels open at the moments they mattered most. The politics: an enemy framing produces enemy behavior in return, and the rivals who become enemies generally do so because both sides decided they were. We are choosing structured competition because it is harder, more honest, and more likely to leave the United States in a stronger position fifty years from now than the alternative both parties are sleepwalking toward. Strength is not the same as belligerence. Confidence is not the same as fear. We out-build them at home, out-compete them abroad, and out-last them in time.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: `color-mix(in srgb, ${FOREIGN} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${FOREIGN} 25%, transparent)` }}>
          <h3 className="font-bold mb-3" style={{ color: FOREIGN }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/military-posture" className="underline hover:text-white">Military Posture & Defense Doctrine</Link>: pay-to-play alliances, mutual-defense only, onshore critical supply — the framework this page applies to the Pacific.</li>
            <li>• <Link href="/issues/foreign-wars" className="underline hover:text-white">Ukraine / Israel / Foreign Wars</Link>: Taiwan position (strategic ambiguity + honest cost split) lives there and is referenced here, not duplicated.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + spending</Link>: the deepest defense of the dollar reserve status is US fiscal honesty — pass-or-cut audits, GDP-cap discipline, deficit reduction. The China page assumes those reforms.</li>
            <li>• <Link href="/issues/drug-policy" className="underline hover:text-white">Drug policy</Link>: fentanyl precursor sanctions, cartel FTO designation, port scanning — the China link in the fentanyl supply chain handled where the mechanism actually lives.</li>
            <li>• <Link href="/issues/trade" className="underline hover:text-white">Trade + tariffs</Link>: the targeted-strategic + reciprocity rule applied here is the broader trade doctrine from the Economics pillar.</li>
            <li>• <Link href="/issues/education" className="underline hover:text-white">Education</Link>: no federal aid for non-citizens, no displacement of Americans from publicly subsidized university seats, capped college costs — the same architecture applied here to foreign students.</li>
            <li>• <Link href="/issues/big-tech" className="underline hover:text-white">Big tech</Link>: data-sovereignty law applies uniformly to all major platforms, foreign and domestic — captivity-vs-choice and platform accountability extend to foreign-adversary apps.</li>
            <li>• <Link href="/issues/immigration" className="underline hover:text-white">Immigration</Link>: single citizenship for federal office and security clearance — the dual-loyalty problem that complicates China-related decisions in Washington gets cleaned up at the structural level.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: US Census Bureau and US Trade Representative data on US-China goods trade (~$700B), IMF Composition of Official Foreign Exchange Reserves (dollar share trending), US Treasury reports on debt-service projections (crossing $1T annual interest), TrendForce and SEMI data on Taiwan share of leading-edge semiconductor production (~90% sub-10nm), Department of Education and SEVIS data on Chinese student enrollment (~290K), Department of Justice retrospective on the China Initiative (wound down 2022, GAO assessment of espionage-conviction rate), CFIUS reform debates, ASML and SIA reporting on EUV lithography concentration, Belt and Road Initiative tracking via AidData and Boston University Global Development Policy Center, Quad and AUKUS founding documents, the CHIPS and Science Act of 2022, the United Nations Convention on the Law of the Sea, the Philippines Mutual Defense Treaty of 1951, the Taiwan Relations Act of 1979, the Foreign Investment Risk Review Modernization Act (CFIUS framework), BRICS settlement-system reporting, and the Graham Allison framing of the Thucydides Trap (rejected here as deterministic).
          </p>
        </div>
      </section>
    </div>
  )
}
