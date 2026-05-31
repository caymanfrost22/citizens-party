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
    title: 'Budget + Pentagon Audit — Cross-Linked, Not Duplicated',
    body: 'The Pentagon has failed every audit since the first one was legally required in FY2018 — seven straight failures, with roughly 61% of $3.8 trillion in assets still unaccountable as of FY2023. The Department of Defense is the only federal department that has never passed a full audit. The fix — pass-or-cut audit consequences, a cap on the top-line at roughly 3 to 3.5% of GDP, and the same forcing functions we apply to every other agency — already lives in our /issues/debt-spending plan as part of the broader fiscal-discipline package. This page is doctrine: who we defend, when we fight, what allies pay. The money side is the same fight every other agency loses on debt-spending. We are not redrafting it here — we are pointing at it and moving on.',
  },
  {
    num: '02',
    title: 'Pay-to-Play Alliances — 2% Becomes a Floor, Not a Target',
    body: 'NATO\'s 2%-of-GDP defense-spending target has been a polite suggestion for fifteen years — about a third of NATO members still miss it. We end the suggestion. The 2% becomes a hard statutory floor for any nation receiving the US Article 5 guarantee. Miss it for two consecutive years and you lose Article 5 coverage until you catch up — not "we issue a strongly worded statement," actually lose it. Bilateral allies (Japan, South Korea, the Gulf states) sign equivalent cost-share agreements priced to the actual deployed US capability protecting them. The free-rider era ends the day we pass the law. This is not isolationism — it is alliance discipline, and it is how alliances survive past the patience of the American taxpayer.',
  },
  {
    num: '03',
    title: 'Mutual-Defense Only — We Defend, We Don\'t Attack',
    body: 'An alliance is not a blank check. The new US doctrine — written into law, not just stated in speeches — is mutual-defense only. If a treaty ally is attacked, we help defend them; that is what the treaty was for. If a treaty ally wants to attack someone else and asks us to come along, the answer is no. We never start wars, and we never join wars of choice that an ally picked. This single line resolves most of the foreign-policy disasters of the last thirty years: every place the US got dragged into combat we should not have been in started as an offensive choice some other government wanted backed by American power. We back the defense. We do not back the offense.',
  },
  {
    num: '04',
    title: 'Bases — US Strategic Use, or the Host Pays, or We Close Them',
    body: 'The US runs roughly 750 military bases across about 80 countries — most inherited from Cold War posture decisions made before half the people serving in them were born. Every base now gets one of two justifications or it closes: (a) it is positioned for a current US strategic mission and we run it because we need it, or (b) the host country is paying for it because they want US forces there as part of their own defense. Bases that are neither — kept open by inertia, by the host country\'s tourism, or by a contractor lobby in Washington — get consolidated and shut. The decision rule is honest: would we put this base here today if it did not exist? If no, and no host is paying, it closes.',
  },
  {
    num: '05',
    title: 'War Powers — Split Doctrine, Article I Restored',
    body: 'The Constitution gave Congress the power to declare war. Two generations of presidents — both parties — have run wars indefinitely on stale Authorizations for Use of Military Force, including ones written for fights that ended a generation ago. We split the doctrine cleanly. Defensive response — repelling an imminent armed attack on US territory, US forces deployed under existing treaty, or US-flagged assets — is the President\'s authority, no permission slip needed; this is what Article II commander-in-chief power actually covers. Offensive operations — initiating war, joining another nation\'s war, sustained kinetic action beyond the immediate defensive response — require a fresh Article I declaration by Congress, with a hard 60-day clock on any executive operation that does not get one. The 2001 and 2002 AUMFs get repealed, with a sunset on every future authorization. Twenty-four years of forever war end.',
  },
  {
    num: '06',
    title: 'The Bright Line — What "Threatened" Means',
    body: 'A defensive-response doctrine collapses back into the same blank check it replaces if "threatened" is left undefined. So we define it in the statute. "Imminent attack" means one of three things and nothing else: (a) an armed attack on US territory in progress or operationally imminent, (b) an armed attack on US military forces deployed under an existing congressional authorization or ratified treaty, or (c) an armed attack on US-flagged civilian or commercial assets. Saber-rattling, sanctions evasion, cyber espionage short of destructive attack, a hostile leader\'s rhetoric — none of these meet the bar. Anything outside the bright line requires Congress to declare. The point is to make the President\'s defensive authority real and the offensive authority Congress\'s, with no semantic exit ramp in between.',
  },
  {
    num: '07',
    title: 'No Permanent Enemies — Alliance Expansion, Including Russia',
    body: 'Alliances keep peace; refusing to expand them creates the next war. We change US doctrine to an open-door policy for former adversaries, on conditions: no active aggression, market access and rule-of-law commitments, arms-control compliance. That includes Russia. Had NATO admitted Russia in the years after the Cold War — when several Russian leaders openly asked — Europe today would be importing Russian energy as alliance trade instead of fighting a war over a country caught between blocs. The same long-term logic applies to China. This is heterodox to both Washington parties and we are honest about that: the foreign-policy establishment built its careers on the enemies list. We are saying out loud that the enemies list itself is the policy failure.',
  },
  {
    num: '08',
    title: 'A Concrete Russia Reset — Partner Status Tied to a Ukraine Settlement',
    body: 'Open-door doctrine has to mean something concrete or it is just rhetoric. The first move: offer Russia conditional NATO partner status (the existing Partnership for Peace framework or its successor), with a path to full membership consideration, conditioned on (a) a negotiated Ukraine settlement with verified withdrawal and security guarantees for Kyiv, (b) restoration of arms-control architecture starting with a New START successor treaty, and (c) measurable steps on rule of law and political opening over a decade-long horizon. This is not appeasement and it is not a reward — it is the price extraction the West never made when the window was open. If Moscow refuses, we have lost nothing. If they accept, we have ended a war and started rewiring European security for the next generation.',
  },
  {
    num: '09',
    title: 'Modernize the Triad — Hold at ~1,550 Deployed Warheads',
    body: 'The strategic deterrent stays. We modernize all three legs of the nuclear triad — the Columbia-class submarines, the Sentinel ICBM replacement, the B-21 bomber and air-launched cruise missile — on the schedules already approved, because aging warheads and delivery systems are themselves a destabilization risk. The deployed-warhead count holds at roughly 1,550 — the New START ceiling — for the United States, and we pursue a successor treaty rather than letting the arms-control architecture collapse. We are not interested in a numbers race we already won; we are interested in keeping the deterrent credible, the systems modern, and the stockpile size held at a number the public can actually defend.',
  },
  {
    num: '10',
    title: 'Extended Deterrence as a Paid Service',
    body: 'Several allies want a US nuclear umbrella over them — South Korea, Japan, Taiwan, Saudi Arabia, Poland have all signaled it. The current arrangement is informal and unpriced, which means the cost falls on the US taxpayer and the political risk falls on a US president who never campaigned on it. We rewrite it. Extended deterrence becomes a formal paid product: an ally who wants the umbrella signs a cost-share agreement covering the warheads and delivery systems sized to their threat — without proliferating beyond US control. We don\'t hand out nukes; we extend the deterrent on contract. This keeps the Non-Proliferation Treaty regime intact, prevents the cascade of independent nuclear programs that an unpriced umbrella would otherwise trigger, and makes the cost honest. Allies who want the protection pay for the protection.',
  },
  {
    num: '11',
    title: 'Procurement Reform — Apply the Bureaucracy-Reform E-All Pattern',
    body: 'Defense procurement is the single largest cost-overrun engine in the federal government. The fix is not new — it is exactly what we apply in /issues/bureaucracy-reform across every agency: fixed-price contracts as the default with cost-plus reserved for genuinely novel R&D, commercial-first acquisition before bespoke programs, Other Transaction Authority (OTA) expanded with the existing $500 million cap, pre-qualified vendor pools and 30-day mini-bids replacing multi-year acquisition cycles, prize-model awards for breakthrough capabilities, outcome-based contracts with performance bonds on programs over $50 million, and a 5-year sunset on every program. The Big 5 prime contractors stay competitive only by competing — not by lobbying. The same forcing functions, applied to the agency that needs them most.',
  },
  {
    num: '12',
    title: 'Onshore + Friendshore the Critical Supply Chain',
    body: 'A country at war cannot import what it needs to fight in time. Semiconductors, rare-earth minerals, munitions and propellants, pharmaceuticals, shipbuilding capacity, large transformers — every category currently dependent on Chinese or vulnerable foreign sourcing gets a strategic plan: onshore where the workforce and economics allow, friendshore (Mexico, Canada, allied Asia) where they don\'t, and rebuild the National Defense Stockpile to wartime durations rather than peacetime token reserves. The Jones Act gets an honest review for naval logistics realities — preserving US maritime capacity without strangling allied resupply. This is real industrial policy where national security actually demands it, not a slush fund for whichever district has the right committee chair.',
  },
  {
    num: '13',
    title: 'Take Care of the People We Send — GI Bill Restored and Modernized',
    body: 'We do not get to deploy Americans into combat if we will not take care of them when they come home. The Post-9/11 GI Bill gets restored to its original generosity and modernized: full coverage at any accredited public university, full coverage at the funded trade-school path our Education plan stands up, transferable to spouse or children, with a stipend tier indexed to actual living costs. The VA stays — and gets paired with funded community-care choice when the VA system falls short rather than as a privatization wedge. Mental-health funding scaled to the actual veteran suicide crisis — roughly 17 to 22 vets a day, more than combat has ever killed. Housing-first for homeless vets, with the same wraparound services our Healthcare Access plan provides. This is the deal: you fight for the country, the country has your back. Not a slogan — a budget line.',
  },
  {
    num: '14',
    title: 'IG Independence + Waste Dashboard — Same Package as Bureaucracy Reform',
    body: 'The Pentagon\'s Inspector General gets the same statutory independence we give every other federal IG in /issues/bureaucracy-reform — for-cause-only removal, direct congressional reporting, criminal penalty for retaliating against a whistleblower. A public real-time DoD spending dashboard with AI-flagged anomaly detection joins the broader federal spending transparency package. The contractors who have spent thirty years burying overruns in classified annexes lose the cover. Whistleblowers inside the building who have tried to surface waste — and lost their careers for it — finally have a system that protects them. The audit cannot pass if the people who could make it pass are afraid to speak.',
  },
] as const

export default function MilitaryPosturePage() {
  return (
    <div>
      <IssueHero
        badge="🛡️ Military Posture & Defense Doctrine"
        badgeColor={FOREIGN}
        title={<>Peace Through Strength.<br/><span style={{ color: FOREIGN }}>Honest Strength.</span></>}
        subtitle="Both parties run the same forever-war, free-rider-ally, audit-failing Pentagon playbook. We change the doctrine. Allies pay their share — 2% becomes a floor, not a target. We defend, we don't attack — mutual-defense only, never offensive support. We never start wars. Defensive response is the President's; offensive war or joining someone else's fight requires Article I. No permanent enemies — open door to former adversaries, including Russia. Modernized triad, paid extended deterrence, onshore critical supply, restored GI Bill."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Strong NATO, support Ukraine, defend democracy, hold the line against Russia and China. In practice: vote for every NDAA increase, push DEI and climate add-ons inside DoD, accept the seven straight failed Pentagon audits without consequences, support every administration's AUMF expansion, never seriously force allied burden-sharing. Rhetorical multilateralism, status-quo budget growth, forever-war operations."
          rep="Peace through strength, more for warfighters, China-pacing, protect defense jobs. In practice: bigger NDAA every year, fight against any meaningful audit teeth, protect the F-35 jobs in 45 states by design, support every administration's AUMF expansion, never seriously force allied burden-sharing either. Rhetorical strength, status-quo budget growth, forever-war operations."
          us="Peace through strength — honest strength. Allies pay their share or lose Article 5. Mutual-defense only — we defend, we don't attack, and we never start wars. War-powers split: imminent attack on US territory, forces, or flagged assets is the President's response; offensive operations or joining another nation's war require Article I declaration. Repeal the 2001 + 2002 AUMFs. Open door to former adversaries including Russia — no permanent enemies. Modernize the triad, hold ~1,550 warheads, expand only if allies pay for extended deterrence. Procurement reform on the bureaucracy-reform pattern. Onshore critical supply. Restored + modernized GI Bill. Budget + audit teeth live on debt-spending."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={FOREIGN} bg={`color-mix(in srgb, ${FOREIGN} 12%, transparent)`} border={`color-mix(in srgb, ${FOREIGN} 35%, transparent)`}>📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">Where the Doctrine Actually Lands</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="7/7" label="Consecutive failed Pentagon audits since FY2018" color="#c8102e" />
          <StatCard num="~61%" label="Of $3.8T in DoD assets still unaccountable (FY23)" color="#c8102e" />
          <StatCard num="2%" label="NATO defense-spending floor — becomes hard rule, not target" color={FOREIGN} />
          <StatCard num="~750" label="US military bases worldwide — each justified or closed" color={FOREIGN} />
          <StatCard num="1550" label="Deployed warheads held — modernized triad, not expanded" color={FOREIGN} />
          <StatCard num="2001+2002" label="AUMFs repealed — twenty-four years of forever war end" color={FOREIGN} />
          <StatCard num="17–22" label="Veteran suicides per day — more than combat ever killed" color="#c8102e" />
          <StatCard num="0" label="Wars of choice we start under this doctrine" color={FOREIGN} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={FOREIGN} bg={`color-mix(in srgb, ${FOREIGN} 12%, transparent)`} border={`color-mix(in srgb, ${FOREIGN} 35%, transparent)`}>🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Fourteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Peace through strength. Honest alliances. Article I restored. No permanent enemies.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Isn&apos;t Opening the Door to Russia Naive?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            The reflex objection is the establishment objection, and it is exactly the one we are challenging. The Cold War ended in 1991. The window in which Russia could have been folded into the Western security architecture closed because the establishment decided not to fold it in — not because Russia refused. The result is the war we are now in: a nuclear-armed power, with the world&apos;s largest energy reserves, locked into a hostile posture toward a Europe it could have been supplying. Our doctrine is not that Russia is a good actor today; it is plainly not. Our doctrine is that &ldquo;no permanent enemies&rdquo; means we keep a door open under hard conditions — verified Ukraine settlement, arms-control restoration, decade-long rule-of-law markers — and we let the offer itself reframe the politics on both sides. If they refuse, we lose nothing and the moral high ground is ours. If they accept on the conditions, we have ended a war and started rewiring the next century. Both parties want you to believe the only options are forever-war or surrender. They are wrong.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: `color-mix(in srgb, ${FOREIGN} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${FOREIGN} 25%, transparent)` }}>
          <h3 className="font-bold mb-3" style={{ color: FOREIGN }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + spending</Link>: the Pentagon top-line cap, pass-or-cut audit consequences, and 3–3.5% of GDP discipline live in the broader fiscal package — this page is doctrine, that page is the budget.</li>
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: the procurement rewrite (fixed-price, OTA, commercial-first, 5-year sunset) and IG independence here are the same forcing functions we apply to every federal agency.</li>
            <li>• <Link href="/issues/lobbying-ban" className="underline hover:text-white">Lobbying ban</Link>: closing the K Street pipeline cuts the defense-contractor lobby that drives every overrun this doctrine cleans up.</li>
            <li>• <Link href="/issues/healthcare-access" className="underline hover:text-white">Healthcare access</Link>: the VA stays inside the critical-care floor, with community-care choice and mental-health parity built in — the veteran suicide crisis is a coverage problem we solve through the broader system.</li>
            <li>• <Link href="/issues/education" className="underline hover:text-white">Education</Link>: the restored GI Bill rides on top of the funded trade-school path and capped affordable public-college architecture — the deal we offer the people we send.</li>
            <li>• <Link href="/issues/immigration" className="underline hover:text-white">Immigration</Link>: single-citizenship-for-federal-office cleans up the foreign-influence problem this doctrine cannot solve alone — dual-loyalty defense officials are how bad procurement and bad alliances get cover.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: DoD Inspector General audit reports FY2018–FY2023 (seven consecutive failures, $3.8T asset accountability), NATO defense-spending data (2% target, member compliance), the 2001 and 2002 Authorizations for Use of Military Force, the War Powers Resolution of 1973, the New START Treaty (1,550 deployed-warhead ceiling), the Nuclear Non-Proliferation Treaty, the Post-9/11 GI Bill, the Jones Act (Merchant Marine Act of 1920), VA Mission Act 2018 (community care), VA suicide-prevention annual reports (17–22 per day), reporting on US overseas basing footprint (~750 bases, ~80 countries), historical record of post-Cold-War NATO-Russia diplomacy, and the Partnership for Peace framework.
          </p>
        </div>
      </section>
    </div>
  )
}
