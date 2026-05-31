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
    title: 'NATO Reaffirmed — Restructured on Pay-to-Play, Open Door to Former Adversaries',
    body: 'The North Atlantic Treaty Organization is the most successful military alliance in modern history and the United States stays in it. We do not withdraw, we do not threaten withdrawal as a negotiating prop, and we do not undermine Article 5 with rhetorical ambiguity. What we change is the rule set the alliance runs on. NATO becomes a pay-to-play alliance under the same doctrine our Military Posture page applies across the board — formal cost-shares priced to actual capability, mutual-defense only and never offensive support, and a long-term open door to former adversaries on conditions (including Russia, on the partner-status terms laid out below). The reaffirmation and the restructure are the same act, not opposing ones; an alliance worth defending is worth defending honestly, with shared costs and clear rules.',
  },
  {
    num: '02',
    title: 'Raise the Floor — 3% of GDP, Hard Rule',
    body: 'The 2% defense-spending target has been a polite suggestion for fifteen years. Roughly a third of NATO members still fail it, including some at the geographic front line of European security. We raise the floor to 3% of GDP, written into US statute as the condition of Article 5 coverage for any NATO member. Three percent is closer to the actual cost of credible defense in the threat environment Europe is currently in, it brings the floor in line with what frontline states (Poland, the Baltics, Greece) already spend, and it ends the structural free-rider problem that has defined the alliance for a generation. Member states are given a phased timeline to reach it — measured in years, not decades — with bilateral payment plans available for catch-up. The point is honest cost-sharing in an alliance worth keeping, not punishment.',
  },
  {
    num: '03',
    title: 'Tiered Protection — Pay More, Get More',
    body: 'A flat-floor model treats every ally the same regardless of contribution. We add a tier above the floor. Members spending above 3% — at 3.5%, at 4%, at 5% — get progressively expanded US capability committed to their defense: more forward-deployed forces, priority on extended-deterrence coverage under our Military Posture nuclear-umbrella mechanism, faster munitions resupply pipelines, deeper integration into US planning and intelligence streams. This is the same logic we apply on Military Posture mechanism 10 to extended deterrence, scaled across conventional commitments. Defense at scale is a product the United States can supply, and an honest market for it is fairer to both sides than the unspoken arrangement we have now where US capability flows to every NATO member equally regardless of what they put in. Pay more, get more. The floor is the entry; tiers are the upgrade.',
  },
  {
    num: '04',
    title: 'Miss the Floor, Lose Article 5 — Until Current',
    body: 'A floor without enforcement is the target we already have. We make the enforcement concrete: a NATO member that misses the 3% floor for two consecutive years loses Article 5 coverage until current, with annual public reporting on every member\'s contribution status. The lapse is not permanent expulsion — it is a suspension that ends when the member catches up under a published payment plan. The political effect is what matters. Free-riding is no longer free. Members can no longer count on the US security guarantee while running budget surpluses on welfare programs Americans cannot afford for themselves. This is the law American taxpayers should have had thirty years ago, and the alliance is more honest with it than without.',
  },
  {
    num: '05',
    title: 'NATO–Russia — A Concrete Partner-Status Offer, Tied to a Settlement',
    body: 'The open door to former adversaries means nothing until it is written down as an actual offer with actual terms. The United States proposes — through NATO mechanisms, jointly with the European Allies who are most affected — a conditional upgrade of Russia\'s relationship with the alliance to formal Partner-status under a revived Partnership for Peace–style framework, with a defined path to full membership consideration on a multi-decade horizon. The offer is conditional on three concrete steps: (a) a verified negotiated settlement of the Ukraine war with Ukrainian sovereignty preserved and Russian forces withdrawn under monitoring, (b) restoration of arms-control architecture starting with a New START successor treaty and INF-equivalent verification regime, and (c) decade-long, measurable, externally verified markers on rule of law and political opening inside Russia itself. If Moscow refuses, the United States and the alliance have lost nothing and the moral position is ours. If Moscow accepts the terms, we have ended a war and started rewiring European security for the next century.',
  },
  {
    num: '06',
    title: 'NATO–Ukraine — Armed Neutrality + EU Path + Bilateral Guarantees, Membership After Settlement',
    body: 'The Ukraine NATO question has divided the alliance for fifteen years and is at the center of the war we are now in. We resolve it cleanly. Ukraine\'s path to NATO membership activates only after a negotiated settlement with Russia is in place and holding. In the interim, Ukraine receives the substantive equivalent of NATO security on a different track: armed neutrality with treaty-level commitments to its defense capability, an explicit EU integration path with full European political and economic membership, and bilateral US and European security guarantees with concrete force-deployment commitments short of Article 5. This is more security than ambiguity provides today, less than fast-tracked membership which we will not deliver under fire, and structured so that the alliance and the settlement reinforce each other rather than the membership question itself becoming the obstacle to peace.',
  },
  {
    num: '07',
    title: 'Pacific Bilateral Alliances — Same Pay-to-Play Rule Applied',
    body: 'Japan, South Korea, the Philippines, and Australia carry the US security architecture across the Pacific the way NATO carries it across the Atlantic. The same rule applies. Bilateral cost-shares get renegotiated to defense-spending floors priced to deployed US capability — for Japan and South Korea, both already at or near the threshold; for the Philippines, modernizing the 1951 mutual-defense treaty for grey-zone realities and with cost-share calibrated to capability provided; for Australia, ANZUS reaffirmed and AUKUS milestones held. The mutual-defense-only doctrine from our Military Posture page applies here as everywhere: we help defend an ally under attack, we do not commit US forces to offensive operations on behalf of an ally that picked the fight. Cost-shares are paid, bases are host-supported, the relationship is durable because it is honest.',
  },
  {
    num: '08',
    title: 'Quad, AUKUS, Chip 4 — Institutionalized Beyond Summits',
    body: 'The Pacific multilateral coalitions — the Quad (US, Japan, India, Australia), AUKUS (US, UK, Australia), and Chip 4 (US, Japan, South Korea, Taiwan) — have produced a great deal of summit theater and a small amount of binding cooperation. We institutionalize them. Each gets a defined working secretariat, signed cost-share agreements among the members, binding deliverables with public progress tracking, and shared-budget mechanisms for joint projects (AUKUS submarine production, Quad maritime domain awareness, Chip 4 semiconductor supply-chain coordination). Members who fail to perform against signed commitments get downgraded participation. The point of these coalitions is to deliver real capability, not to produce communiqués; we structure them so that delivery is the metric.',
  },
  {
    num: '09',
    title: 'Status of Forces Agreements — Renegotiate Every One Over Twenty Years Old',
    body: 'Status of Forces Agreements govern the legal, financial, and operational terms under which US forces operate on foreign soil. Many of them were written under conditions and assumptions that no longer apply — some predate the end of the Cold War. We renegotiate every SOFA over twenty years old to the host-pays-or-strategic-use standard from our Military Posture bases doctrine: the host country pays the costs of US presence that exists for their benefit, the United States pays for presence that exists for US strategic interests, and overlapping costs get split honestly. Every renegotiated SOFA gets a 10-year sunset under our Sunset Clauses pillar, forcing periodic review. The Visiting Forces Agreement with the Philippines, the agreements with Japan and South Korea, the agreement with Germany, agreements across the Gulf, and the array of small-print arrangements across Africa and Latin America are all in scope.',
  },
  {
    num: '10',
    title: 'Five Eyes Preserved + Limited Expansion to China-Specific Tracks',
    body: 'The Five Eyes intelligence-sharing alliance (US, UK, Canada, Australia, New Zealand) is one of the most consequential and least visible US foreign-policy assets. We preserve it intact and we strengthen it. We add limited, China-specific intelligence-sharing tracks with Quad partners Japan and India under separate, narrowly scoped arrangements that do not dilute the core Five Eyes membership. Counterintelligence reciprocity is a condition of any expanded sharing: partners who fail to protect shared intelligence from compromise get downgraded access. The framework is preserved deliberately small because that is what has made it work. We expand at the margin, on the issues where the strategic value is highest and the membership change is least disruptive.',
  },
  {
    num: '11',
    title: 'Rio Treaty + OAS Reformed — Hemispheric Coordination That Actually Works',
    body: 'The Inter-American Treaty of Reciprocal Assistance (the Rio Treaty) and the Organization of American States have become alliance architecture in name and dysfunctional in practice. We keep them and reform them under the same pay-to-play standard applied elsewhere. Hemispheric coordination focuses on the three issues that actually matter: cartel and fentanyl supply-chain enforcement, in coordination with the framework on our Drug Policy plan; managed migration cooperation among regional governments; and economic security including coordinated defense against dedollarization campaigns referenced on our China Policy page. Member states pay cost-shares calibrated to capability and benefit. Members that fail to meet basic governance and security obligations face graduated downgrading. The hemisphere is a strategic asset the United States has underused for thirty years; the architecture exists, we make it work.',
  },
  {
    num: '12',
    title: 'Multilateral Institutions — Reform-or-Pullout, on a Defined Window',
    body: 'The United Nations, the World Trade Organization, the International Monetary Fund, and the World Bank are necessary instruments and broken ones. We stay engaged inside them and we drive concrete reform — UN Security Council enlargement to reflect the 21st-century world (Japan, India, Germany, Brazil, an African seat); WTO dispute-mechanism revival with binding appellate authority restored; IMF and World Bank quota reform reflecting current economic weight rather than 1945 weights; and rigorous accountability on every UN agency receiving US dues. The new piece: we set a defined window — five years — for meaningful reform inside each institution. Institutions that refuse to reform within that window lose US dues and US participation, and we lead the construction of new multilateral architecture built on our rules with allies that share them. We do not bankroll dysfunction indefinitely on the theory that the alternative is worse. The alternative we build is the alternative we build, and the deadline is what makes it real.',
  },
  {
    num: '13',
    title: 'Ten-Year Sunset on Every Treaty + Alliance Commitment',
    body: 'Every treaty and alliance commitment the United States holds is subject to a mandatory 10-year review under the same forcing function our Sunset Clauses pillar applies to every federal law. Each commitment expires unless explicitly reauthorized by Congress, on the record, with a published review of whether the commitment still serves US interests. NATO, the Pacific bilaterals, the Rio Treaty, every SOFA, every status-of-forces agreement, every formal cooperation framework — all of them on the same clock. This is not unilateral withdrawal by stealth; reauthorization is the expected path for commitments that still serve us. It is forcing the question every generation, on the record, rather than letting a 1951 commitment run on autopilot through 2051 because nobody ever called the vote. An Article V constitutional amendment runs in parallel to lock the doctrine in beyond ordinary statute.',
  },
  {
    num: '14',
    title: 'New Alliances — Article I Approval, Mutual-Defense Only, Defined Exit',
    body: 'Any new alliance commitment the United States enters going forward — whether a formal mutual-defense treaty, a Compact of Free Association, a binding framework agreement, or a security guarantee in any form — requires four conditions, codified in statute. First, Article I Congressional approval at adoption, not executive order. Second, mutual-defense-only doctrine written into the treaty text — we help defend an ally under attack, we never commit to offensive operations on behalf of the ally. Third, a cost-share floor at adoption priced to the capability the United States is committing. Fourth, a defined exit clause with notice and transition terms specified in the treaty itself. No more Article 5 commitments by accident, no more open-ended security guarantees buried in executive agreements, no more alliances the United States cannot leave without breaking faith. The standard is the same standard a private contract of equivalent gravity would carry: terms, price, exit.',
  },
  {
    num: '15',
    title: 'A Clean Withdrawal Procedure — Written Into Law, Not Improvised',
    body: 'The most dangerous moment in any alliance is the moment one party leaves. We write the procedure for US withdrawal from any alliance commitment into law, so it is honest and predictable rather than improvised. The President may initiate withdrawal. Congress has a defined 60-day window in which to block the withdrawal by joint resolution. Allies receive 12 months\' notice before withdrawal takes effect, with transition obligations — joint exercises completed, equipment transfers honored, intelligence-sharing wind-downs negotiated — specified in advance. The procedure applies equally whether the alliance was created by treaty or by executive agreement. The Trump-era pattern of withdrawal-by-tweet without process produced exactly the kind of allied uncertainty and adversary opportunism that the United States cannot afford. We codify the procedure once, and we use it consistently or not at all.',
  },
  {
    num: '16',
    title: 'The Open Alliance — Everyone Plays by the Rules, Everyone Wins',
    body: 'The most important rule under our doctrine is the one that resolves the entire question of who belongs in the US alliance system. The alliance is open. Any country, regardless of identity, geography, ideology, or historical relationship to the United States, may apply for membership in the US-led alliance architecture — NATO, the Pacific bilateral framework, hemispheric coordination, or new structures yet to be built — on the same published rules every existing member follows. The criteria are universal: meet the 3% defense-spending floor, accept the mutual-defense-only doctrine in treaty text, sign the cost-share priced to capability, accept the defined exit clause, and pass the rule-of-law and verification markers. No country is permanently excluded. Russia is eligible if it meets the terms. China is eligible if it meets the terms. Iran, Saudi Arabia, India, Brazil, every state currently outside or in the system are evaluated against the same standard. The rule replaces the implicit identity-based gatekeeping that has shaped alliance composition for seventy-five years with a published rule that any nation can read and decide for itself whether to meet. This is the deepest version of "no permanent enemies." Alliances become a club anyone can join who plays by the rules, and the rules are the same for everyone. Everyone plays by the rules. Everyone wins.',
  },
] as const

export default function NatoAlliancesPage() {
  return (
    <div>
      <IssueHero
        badge="🤝 NATO & Alliances"
        badgeColor={FOREIGN}
        title={<>Real Allies. Real Rules. <span style={{ color: FOREIGN }}>Real Exits.</span></>}
        subtitle={`The alliance architecture that won the Cold War, restructured for the next century. NATO reaffirmed and put on a 3% floor with tiered protection — pay more, get more. Miss the floor, lose Article 5 until current. Concrete partner-status offer to Russia tied to a Ukraine settlement and arms-control restoration. Ukraine to armed neutrality + EU path + bilateral guarantees, NATO membership after settlement. Pacific bilaterals on the same pay-to-play terms. Quad, AUKUS, and Chip 4 institutionalized beyond summits. Every Status of Forces Agreement over twenty years old renegotiated. Five Eyes preserved and selectively strengthened. Hemispheric coordination through a reformed Rio Treaty and OAS. UN, WTO, IMF, and World Bank engaged and pushed to reform — or replaced. Ten-year sunset on every treaty and alliance commitment. New alliances require Congressional approval, mutual-defense-only doctrine, a cost-share floor, and a defined exit. A clean withdrawal procedure written into law instead of improvised. And the deepest version of "no permanent enemies" — the alliance is open. Any country that meets the published rules is eligible. Everyone plays by the rules. Everyone wins.`}
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="NATO sacred, expand toward Ukraine eventually, multilateralism universally good, UN + WTO + IMF + World Bank preserved as-is. In practice: defended Article 5 against Trump-era pressure, championed Quad and AUKUS but rarely made them binding, declined to push reform inside any multilateral institution that needed it, kept the 2% target a polite suggestion."
          rep="Split. Establishment: Reagan NATO posture, Pacific alliances strong, multilaterals tolerated. MAGA: treat alliances transactionally, threaten withdrawal as leverage, condition Article 5 on payment, blame multilateralism for sovereignty losses. In practice: same alliance architecture, more friction, no actual structural change."
          us="NATO reaffirmed and restructured on pay-to-play terms — 3% of GDP floor, hard rule, tiered protection above it (pay more, get more), lose Article 5 for two-year non-payers until current. Concrete NATO partner-status offer to Russia tied to Ukraine settlement + arms-control restoration + decade rule-of-law markers. Ukraine: armed neutrality + EU path + bilateral guarantees, membership activates after settlement. Pacific bilaterals on same pay-to-play rule. Quad, AUKUS, Chip 4 institutionalized beyond summits. Every SOFA over 20 years old renegotiated under bases doctrine with 10-year sunsets. Five Eyes preserved + limited Quad-partner expansion on China tracks. Rio Treaty + OAS reformed for cartels + migration + dedollarization defense. UN/WTO/IMF/World Bank: stay engaged, reform-or-pullout on a 5-year window — if they refuse meaningful reform, we lead new architecture built on our rules. Mandatory 10-year sunset on every treaty + alliance commitment, Article V amendment in parallel. New alliances require Article I approval + mutual-defense-only doctrine + cost-share floor + defined exit clause. Clean withdrawal procedure written into law — President initiates, Congress 60-day block window, allies 12-month notice, transition obligations specified. And the deepest version of no-permanent-enemies — the alliance is open to any country that meets the published rules, regardless of identity or history. Everyone plays by the rules. Everyone wins."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={FOREIGN} bg={`color-mix(in srgb, ${FOREIGN} 12%, transparent)`} border={`color-mix(in srgb, ${FOREIGN} 35%, transparent)`}>📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">What the Architecture Actually Looks Like</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="32" label="NATO members — roughly ⅓ still below the 2% target" color="#c8102e" />
          <StatCard num="3%" label="Our new floor — closer to the actual cost of credible defense" color={FOREIGN} />
          <StatCard num="1949" label="NATO founded — never put on a 10-year review cycle" color="#c8102e" />
          <StatCard num="1951" label="Philippines mutual-defense treaty — unmodernized since the Cold War" color="#c8102e" />
          <StatCard num="5 yrs" label="Reform window for UN/WTO/IMF/World Bank before pullout + replace" color={FOREIGN} />
          <StatCard num="10 yrs" label="Mandatory sunset on every treaty + alliance commitment" color={FOREIGN} />
          <StatCard num="12 mo" label="Allied notice before any US withdrawal takes effect" color={FOREIGN} />
          <StatCard num="0" label="Permanent enemies under this doctrine" color={FOREIGN} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={FOREIGN} bg={`color-mix(in srgb, ${FOREIGN} 12%, transparent)`} border={`color-mix(in srgb, ${FOREIGN} 35%, transparent)`}>🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Sixteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">The alliance architecture that won the Cold War, restructured for the next century.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Won&apos;t a 3% Floor with Real Enforcement Break the Alliance?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            The reflex objection assumes the alliance is currently working and any pressure on it risks collapse. The reality is the opposite: the alliance has been one bad election away from collapse for a decade precisely because the structural unfairness has gone unaddressed. Free-riding produces resentment that produces erosion that produces the kind of withdrawal-by-tweet politics the United States flirted with in 2017–2020 and may flirt with again. Putting the cost-share on an honest, statutory, enforceable footing is what protects the alliance, not what threatens it. Frontline states (Poland at 4%+, the Baltics, Greece) are already above 3%. France and the United Kingdom are within reach. Germany has begun moving after a generation of neglect. A phased timeline with bilateral payment plans gives every member a credible path. The point of an enforceable floor is to make the alliance survive the next thirty years, not the next news cycle.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: `color-mix(in srgb, ${FOREIGN} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${FOREIGN} 25%, transparent)` }}>
          <h3 className="font-bold mb-3" style={{ color: FOREIGN }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/military-posture" className="underline hover:text-white">Military Posture & Defense Doctrine</Link>: pay-to-play, mutual-defense only, tiered extended deterrence — the doctrine this page concretizes for the full alliance architecture.</li>
            <li>• <Link href="/issues/foreign-wars" className="underline hover:text-white">Ukraine / Israel / Foreign Wars</Link>: the Ukraine settlement framework the NATO–Russia partner-status offer is tied to, and the Taiwan ambiguity that informs Pacific bilateral structure.</li>
            <li>• <Link href="/issues/china-policy" className="underline hover:text-white">China Policy</Link>: Quad, AUKUS, and Chip 4 institutionalization, dedollarization-defense hemispheric coordination, and Five Eyes China-track expansion.</li>
            <li>• <Link href="/issues/sunset-clauses" className="underline hover:text-white">Sunset clauses</Link>: the 10-year sunset on every treaty and alliance commitment, and the Article V amendment running in parallel, are the same doctrine applied here.</li>
            <li>• <Link href="/issues/legislative-process" className="underline hover:text-white">Legislative process</Link>: new-alliance Article I approval requirement is the same single-subject standalone-bill rule applied to security commitments.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + spending</Link>: dollar reserve defense (the security floor under multilateral-institution reform) runs on the fiscal-discipline architecture.</li>
            <li>• <Link href="/issues/drug-policy" className="underline hover:text-white">Drug policy</Link>: hemispheric cartel coordination through the reformed Rio Treaty and OAS, including the multi-front fentanyl supply war.</li>
            <li>• <Link href="/issues/lobbying-ban" className="underline hover:text-white">Lobbying ban</Link>: FARA universal rule and single-citizenship-for-federal-office close the foreign-influence loopholes that have shaped US alliance policy in the worst directions.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: NATO defense-spending data (2% target compliance by member), the North Atlantic Treaty (1949) and Article 5, the Partnership for Peace framework (1994), the New START Treaty (2010), the Intermediate-Range Nuclear Forces Treaty (1987, US withdrawal 2019), the US-Japan Treaty of Mutual Cooperation and Security (1960), the US-Republic of Korea Mutual Defense Treaty (1953), the Australia New Zealand United States Security Treaty (ANZUS 1951), the US-Philippines Mutual Defense Treaty (1951) and the Visiting Forces Agreement, the Inter-American Treaty of Reciprocal Assistance (Rio Treaty 1947) and the OAS Charter, the United Nations Charter and Security Council composition debates, World Trade Organization Appellate Body status, IMF and World Bank quota-reform proposals (2010 onward), the Five Eyes intelligence-sharing arrangement, the Quad Foreign Ministers framework, the AUKUS trilateral security partnership (2021), the Chip 4 alliance, the Compact of Free Association framework, and historical scholarship on alliance withdrawal procedures and treaty sunset doctrine.
          </p>
        </div>
      </section>
    </div>
  )
}
