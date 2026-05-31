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
    title: 'Ukraine — Drive a Negotiated Settlement, Not a Forever War',
    body: 'The United States has sent roughly $175 billion to Ukraine through 2024 with no defined end state, no Article I declaration, and no exit ramp written into any policy document. We change the goal. The US objective is a negotiated settlement — a ceasefire on near-current lines, Ukrainian sovereignty preserved, Western-led reconstruction, security guarantees short of NATO Article 5, and a clear EU integration path. Not unconditional victory back to 1991 borders (military reality says no), and not abandonment (handing Moscow the precedent that invasions work). We use the same diplomatic leverage as the Russia partner-status offer on our Military Posture page — settlement first, arms-control restoration paired with it, no-permanent-enemies doctrine applied here too. We end the war that nobody at the table has a plan to actually end.',
  },
  {
    num: '02',
    title: 'Ukraine — Defensive Weapons + Lend-Lease + EU Integration, Conditional on Negotiating',
    body: 'Aid continues but the posture changes. Weapons stay defensive — air defense, anti-armor, mobility, ISR — and no US-supplied long-range strike weapons hit inside pre-2014 Russian territory. There are no US troops in Ukraine in any combat role, period. The financial side gets restructured from a blank check into a lend-lease model: accountable, repayable from reconstruction funds and frozen Russian assets, end-use monitored quarterly, conditioned on Ukraine entering and sustaining good-faith negotiations. Reconstruction support flows alongside the European Bank for Reconstruction and Development and the EU rather than as a unilateral US program, and the United States does not write blank checks for rebuilding what others are most affected by — Europe pays for European reconstruction, with US support proportional to US interest.',
  },
  {
    num: '03',
    title: 'Israel — Longstanding Ally, Defensive Aid Stays Unconditional',
    body: 'Israel is a longstanding US ally, the only stable democracy in its neighborhood, and a country under direct existential threat from state and non-state actors who have stated those intentions in public. The US-Israel security relationship continues, full stop. Defensive systems — Iron Dome, David\'s Sling, Arrow, the qualitative military edge guaranteed in the 2008 Memorandum of Understanding architecture — stay unconditional and fully funded. The right of Israel to defend itself, including the rights to repel an attack from any source and to disable an enemy\'s military capacity, is not in question. Anti-Semitism dressed up as policy gets called what it is and rejected. This is the floor of the relationship.',
  },
  {
    num: '04',
    title: 'Israel — Offensive Aid Conditioned on Civilian-Protection + Humanitarian-Access Standards',
    body: 'A real ally tells the truth. The Gaza war has produced a civilian death toll of over thirty thousand (Gaza Ministry of Health, broadly accepted within reasonable bounds by multiple independent sources), large-scale displacement, and humanitarian access failures that have damaged the moral case the relationship needs to survive. The United States applies the same standard here it applies to every other recipient of US military aid under existing law (the Leahy laws, Section 620I, NSM-20): offensive weapons packages — bombs, artillery shells, the items used in territorial campaigns — are conditioned on documented civilian-protection measures and verified humanitarian access. This is not a cut to defensive support; this is enforcement of standards that already exist on paper for every other country and that we owe an ally honest enough to tell. Allies share the same rules; only enemies are exempt from them.',
  },
  {
    num: '05',
    title: 'Gaza — Hostage Deal, Sustainable Ceasefire, No US Troops',
    body: 'The active war ends with a hostage-for-prisoners exchange returning all remaining hostages, a phased ceasefire that holds long enough to become permanent, demilitarization of Gaza administered by a credible multinational arrangement that explicitly does not include US ground forces, and humanitarian access at scale through neutral implementers. The United States uses its diplomatic and financial leverage — pressure on Hamas through Qatar and Egypt, pressure on the Israeli government through aid conditioning, pressure on regional actors to backstop the post-war administration — to drive this outcome. We do not put American troops on the ground in Gaza, and we do not commit to a US-led occupation or US-funded reconstruction. The day after is built by the parties closest to it, with US support proportional to US interest.',
  },
  {
    num: '06',
    title: 'Post-War — Abraham Accords + Saudi Normalization, Tied to a Real Palestinian Track',
    body: 'The strategic prize is regional normalization — Saudi Arabia, the UAE\'s deepened presence, and a path that ends the cycle. The US uses its diplomatic capital to drive a phase-two Abraham Accords expansion that pairs Israeli-Saudi normalization with a credible Palestinian governance track: a reformed Palestinian Authority with elections, accountable institutions, and a defined political horizon — not imposed from outside, but conditioned on US capital and diplomatic backing flowing to the parties that make it real. The two-state idea has been rhetorical for thirty years because no US administration has made the diplomacy expensive to refuse. We do.',
  },
  {
    num: '07',
    title: 'Iran — Diplomacy + Trade Integration, Not Sanctions and Strikes',
    body: 'We change the entire posture toward Iran, because thirty years of sanctions-and-pressure has accelerated rather than prevented Iran\'s nuclear progress and produced a more hostile, more isolated, more dangerous regional actor than we started with. The new doctrine: stop manufacturing enemies. The United States pursues a phased normalization track — diplomatic relations restored, secondary sanctions on Iranian civilian trade lifted, banking reconnection, a path to WTO membership — tied to International Atomic Energy Agency verification, hard caps on enrichment, and verified non-weaponization. We use carrots, not sticks, because carrots have a track record on non-proliferation (Libya, post-Soviet states, Brazil-Argentina) and sticks do not. The Iran-Saudi détente that China helped broker in 2023 gets US blessing rather than US sabotage. A prosperous, integrated Iran has less incentive to build a bomb than a sanctioned, encircled one. The goal is the same — Iran without nuclear weapons — and the tool is the one that has actually worked.',
  },
  {
    num: '08',
    title: 'Iran — Israel Decides Israel\'s Response. The US Does Not Fight That War.',
    body: 'Israel has stated, with full credibility, that it will not accept a nuclear-armed Iran and will act on its own to prevent one. That is Israel\'s sovereign decision and it is not the United States\' to make. Our doctrine is clear in both directions: the United States does not preemptively strike Iranian nuclear infrastructure, and the United States does not commit US forces to an Israeli-initiated strike. We back Israel\'s defense if Iran retaliates against Israel — that is the mutual-defense-only floor — but we do not commit American troops to an offensive war Israel chose to start. The Article I doctrine applies here as everywhere else: an offensive US military operation against Iran would require a Congressional declaration of war, not an executive order, not a War Powers Resolution notification, not a coalition statement.',
  },
  {
    num: '09',
    title: 'Proxy Network — Defensive Force Protection + Withdraw US Forces from Range',
    body: 'The cycle is dishonest: the US stations forces in Syria and Iraq on stale authorities, Iranian-backed militias attack them, the US conducts retaliatory strikes that satisfy nobody, and the cycle continues. We exit the cycle. US forces that exist primarily to be targets — small-footprint missions in Syria, Iraq, and similar postures whose original purpose has expired — get reviewed for withdrawal under the same bases-doctrine test on our Military Posture page: does this presence serve a current US strategic mission, and is the host paying for what they want from it? Where the answer is no on both, we close. Forces that remain get full defensive force protection — air defense, hardening, electronic warfare. Any broader campaign against Iranian proxies — sustained kinetic action, expansion of the target list — requires Article I authorization, not unilateral executive escalation under a 23-year-old AUMF.',
  },
  {
    num: '10',
    title: 'The General Rule — When the US Joins a War, and How',
    body: 'We write the rule down, in statute, so it cannot be papered over by the next executive: an attack on a treaty ally triggers the President\'s authority to repel under existing mutual-defense commitments, with a 60-day clock and Article I declaration required for any sustained operation beyond the initial defensive response. An attack on a non-treaty partner is grounds for the US to provide aid — weapons, intelligence, financial support — but not for US forces to enter combat, which requires a Congressional declaration of war. No more two-decade wars run on 60-word post-9/11 authorizations. No more coalition statements substituting for Congress. The Constitution put the war power in Article I for a reason; we restore it.',
  },
  {
    num: '11',
    title: 'Aid Accountability — Standalone Bills, Single Subject, Sunset, IG Teeth',
    body: 'Every foreign-war aid package gets the same treatment our Governance pillar applies to every other expenditure: each package is a standalone bill, single subject (no Ukraine-aid-bundled-with-Israel-aid-bundled-with-Taiwan-aid omnibus), 72-hour read time, CBO score, end-use monitoring published quarterly, and a 12-to-24-month sunset requiring a fresh vote to renew. The Inspectors General overseeing each package get statutory independence and criminal penalties for retaliation against whistleblowers, same package as our broader bureaucracy-reform plan. Aid that cannot survive an honest re-vote does not deserve to keep flowing. Aid that can survive a re-vote should not be hidden in a thousand-page bill that no member read.',
  },
  {
    num: '12',
    title: 'Humanitarian Aid — Separated from Military, Delivered Through Neutral Implementers',
    body: 'Civilian humanitarian aid is not the same instrument as military aid and we stop treating it as one. Humanitarian funding gets a separate vote on a separate bill, gets delivered through neutral implementers (the International Committee of the Red Cross, the World Food Programme, Médecins Sans Frontières, established UN humanitarian agencies subject to audit), and is not used as political leverage in the underlying conflict. The principle is real and old — civilians caught in wars they did not start get food, medicine, and shelter regardless of which side their government is on. Tying humanitarian relief to military objectives violates that principle and produces the worst of both: civilians who starve when politics shifts, and a US reputation that erodes every time we do it.',
  },
  {
    num: '13',
    title: 'Rebuild State Department Diplomacy — and Stop Paying to Rebuild Other Countries',
    body: 'Two-thirds of the foreign-policy fixes on this page run through diplomats we no longer have. Three administrations of cuts, hiring freezes, and political appointee bloat have gutted the State Department\'s regional-expertise bench at the exact moment we need it most. We rebuild it: staff up career Foreign Service, restore regional-expertise tracks, fund language training and country desks, and treat negotiation as the first instrument of national power rather than the failed-last-resort. And we change the rule on US-funded reconstruction. The United States does not pay to rebuild other countries unless the host pays a meaningful share, or there is a clear US strategic benefit that justifies the spending. The same logic our Military Posture page applies to bases applies here to dollars: strategic use, or host-paid, or it does not happen. Humanitarian relief (mechanism 12) is separate and continues — keeping civilians alive in a war is not the same instrument as nation-building after one.',
  },
  {
    num: '14',
    title: 'Taiwan — Strategic Ambiguity Stays, Costs Get Split Honestly',
    body: 'Taiwan sits at a strategic position the US cares about deeply for US reasons: TSMC produces roughly 90% of the world\'s leading-edge semiconductors, the first island chain anchors deterrence against Chinese power projection, and the alliance signal to Japan, South Korea, and the Philippines depends on credibility here. Strategic ambiguity stays as the public posture — neither a binding defense commitment nor a green light to abandon. But the cost gets split honestly. The portion of US presence that exists for Taiwan-specific defense (advise-and-assist, defensive weapons sales, training) is paid by Taiwan, at rates priced to actual delivered capability. The portion that exists for US strategic interest — semiconductor supply chain protection, China-pacing, alliance signaling — is paid by the United States, because that part is ours. Same bases-doctrine logic, applied to a country: who benefits, who pays.',
  },
  {
    num: '15',
    title: 'Africa — Consolidate AFRICOM, Same Bases Test Everywhere',
    body: 'US Africa Command runs roughly 6,000 troops across about 29 outposts in 15 African countries, much of it counter-terror missions inherited from the post-9/11 expansion. We apply the same test we apply everywhere else: does this presence serve a current US strategic mission, and is the host paying for what they want from it? Where the answer is no on both — and across much of AFRICOM today, it is — we consolidate and close. Where the answer is yes (intelligence partnerships with willing African states, a small Djibouti footprint tied to the China-pacing logic that justifies it, training relationships paid for by the recipient) we keep, scaled to actual mission. We do not run a counter-terror franchise across a continent on autopilot because that is how it was set up in 2003.',
  },
  {
    num: '16',
    title: 'Latin America — Cartels Handled on the Drug-Policy Plan',
    body: 'Hemispheric security — the cartels driving fentanyl, methamphetamine, and migration pressure — is a real foreign-policy issue, and our position on it lives where the policy machinery actually sits: on the Drug Policy plan. There, we designate the major cartels as Foreign Terrorist Organizations, sanction Chinese precursor producers, fund port-of-entry scanning, prosecute fatal-dose dealers as accomplices to the death, and explicitly do not put US military forces inside Mexico without that government\'s invitation. This page acknowledges the issue and points to the page where the mechanism actually exists, so neither side of this conversation gets duplicated and neither gets ignored. See the Drug Policy plan for the full framework.',
  },
] as const

export default function ForeignWarsPage() {
  return (
    <div>
      <IssueHero
        badge="🇺🇦 Ukraine / Israel / Foreign Wars"
        badgeColor={FOREIGN}
        title={<>Defensive Aid Yes. <span style={{ color: FOREIGN }}>Blank Checks No.</span></>}
        subtitle="Apply the Military Posture doctrine to the wars we're actually in. Ukraine to a negotiated settlement, structured as accountable lend-lease — not unconditional victory, not abandonment. Israel as the ally it is — defensive aid unconditional, offensive aid held to the civilian-protection standards we apply to every other recipient. Iran without nuclear weapons through diplomacy and trade integration, not thirty more years of sanctions that never worked. Proxy fights left, US forces withdrawn from range. Article I restored. State Department rebuilt. The United States does not pay to rebuild other countries unless we benefit or they pay."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Unlimited Ukraine aid until Russia is defeated. Strong Israel support with Gaza civilian concerns voiced but not enforced. Rejoin JCPOA, diplomacy first with Iran. Rules-based order, NATO expansion. In practice: aid packages bundled into unreadable omnibuses, no defined end state in Ukraine, no leverage applied to Israel, no realistic Iran framework, no Article I declaration in any conflict."
          rep="Split. Establishment wing: Reagan-hawk on Ukraine + Israel, max pressure on Iran. MAGA wing: end Ukraine aid immediately, unconditional Israel support, Iran maximum pressure with strikes on the table. In practice: same omnibus aid bills, same absent Article I, same pretense that pressure works on Iran when forty-five years say otherwise."
          us="Ukraine to a negotiated settlement with defensive weapons + lend-lease + EU integration, no NATO yet. Israel: ally + Iron Dome unconditional, offensive aid conditioned on the civilian-protection standards in existing law. Gaza: hostage deal + sustainable ceasefire + Saudi normalization tied to a real Palestinian track, no US troops. Iran: diplomacy + trade integration, not sanctions + strikes — same goal, the tool that has actually worked. Proxy network: defensive only, US forces withdrawn from range. Every aid package standalone, sunsetted, audited. Humanitarian separated from military. State Department rebuilt. The US does not fund reconstruction unless we benefit or the host pays. Article I declaration required for any sustained US offensive operation, anywhere. Taiwan: strategic ambiguity stays, costs split honestly. AFRICOM: same bases test, consolidate the rest. Cartels: handled on the Drug Policy plan."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={FOREIGN} bg={`color-mix(in srgb, ${FOREIGN} 12%, transparent)`} border={`color-mix(in srgb, ${FOREIGN} 35%, transparent)`}>📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">What the Status Quo Has Produced</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$175B" label="US aid to Ukraine through 2024 with no defined end state" color="#c8102e" />
          <StatCard num="$17.9B" label="US military aid to Israel post-Oct 7" color="#c8102e" />
          <StatCard num="30K+" label="Reported civilian deaths in Gaza" color="#c8102e" />
          <StatCard num="45 yrs" label="Of sanctions-first Iran policy producing more enrichment, not less" color="#c8102e" />
          <StatCard num="0" label="Article I war declarations in any active US conflict" color="#c8102e" />
          <StatCard num="2001+2002" label="AUMFs still in force, used to justify operations across the region" color="#c8102e" />
          <StatCard num="6,000" label="US troops across ~29 AFRICOM outposts, mostly on autopilot" color="#c8102e" />
          <StatCard num="90%" label="Of leading-edge chips made in Taiwan — why we care for US reasons" color={FOREIGN} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={FOREIGN} bg={`color-mix(in srgb, ${FOREIGN} 12%, transparent)`} border={`color-mix(in srgb, ${FOREIGN} 35%, transparent)`}>🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Sixteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Apply the doctrine to the wars we&apos;re in. End the ones we shouldn&apos;t have joined. Prevent the next one.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Isn&apos;t the Iran Position Naive? Won&apos;t Trade Just Fund Their Weapons Program?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            The reflex objection has it backwards. Forty-five years of escalating sanctions, three rounds of regime-change rhetoric, and a torn-up nuclear deal have produced an Iran that is closer to a bomb than it has ever been, more aligned with China and Russia than it has ever been, and more entrenched as a regional actor than it has ever been. The policy did not fail at the margins; it failed on its own terms. Compare what actually has worked on non-proliferation: Libya gave up its program in exchange for normalization and sanctions relief. Brazil and Argentina shelved competing weapons programs in exchange for regional integration. The post-Soviet states surrendered thousands of warheads in exchange for security assurances, market access, and trade integration. South Africa dismantled its program as apartheid ended and the country re-entered the world economy. The pattern is consistent — countries give up weapons programs when isolation ends, not when it deepens. Our doctrine takes the goal both parties claim — Iran without nuclear weapons — and uses the instrument that has produced that outcome before. Israel still decides Israel&apos;s response, and the US is honest in both directions: we will not preemptively strike, and we will not fight an offensive war Israel chose to start.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: `color-mix(in srgb, ${FOREIGN} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${FOREIGN} 25%, transparent)` }}>
          <h3 className="font-bold mb-3" style={{ color: FOREIGN }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/military-posture" className="underline hover:text-white">Military Posture & Defense Doctrine</Link>: this page applies the doctrine — mutual-defense only, Article I split, no permanent enemies, allies pay their share — to the active conflicts the US is in.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + spending</Link>: every aid package on this page rides on the broader fiscal-discipline architecture — standalone bill, sunset, audit, CBO score.</li>
            <li>• <Link href="/issues/legislative-process" className="underline hover:text-white">Legislative process</Link>: single-subject rule means no more Ukraine-Israel-Taiwan omnibus aid bills.</li>
            <li>• <Link href="/issues/sunset-clauses" className="underline hover:text-white">Sunset clauses</Link>: the 12–24 month sunset on aid packages, and the repeal of the 2001 and 2002 AUMFs, are the same doctrine applied here.</li>
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: Inspector General independence and whistleblower protection for aid oversight come out of the same package.</li>
            <li>• <Link href="/issues/drug-policy" className="underline hover:text-white">Drug policy</Link>: the cartel and fentanyl supply-war framework, including FTO designation and Chinese precursor sanctions, lives on the Drug Policy plan rather than being duplicated here.</li>
            <li>• <Link href="/issues/immigration" className="underline hover:text-white">Immigration</Link>: single citizenship for federal office and security clearance closes the dual-loyalty loophole that compromises foreign-policy decision-making across this entire page.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: Kiel Institute Ukraine Support Tracker (~$175B US through 2024), Congressional Research Service reports on US-Israel aid (Memorandum of Understanding architecture, post-Oct 7 supplementals totaling ~$17.9B), Gaza Ministry of Health casualty figures (cross-referenced by independent monitors), the Leahy Laws (22 U.S.C. § 2378d), Section 620I of the Foreign Assistance Act, National Security Memorandum 20, the Abraham Accords (2020), the Iran-Saudi normalization agreement (Beijing 2023), the Joint Comprehensive Plan of Action (2015) and its subsequent breakdown, IAEA verification regime documentation, the 2001 and 2002 Authorizations for Use of Military Force, the War Powers Resolution of 1973, US AFRICOM force-posture reporting, Council on Foreign Relations and Brookings analysis on lend-lease structuring, historical record of non-proliferation success cases (Libya 2003, Brazil-Argentina 1991, post-Soviet states 1990s, South Africa 1989-1991), and the Partnership for Peace framework.
          </p>
        </div>
      </section>
    </div>
  )
}
