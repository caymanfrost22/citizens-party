import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'
import MechanismCard from '@/components/issue/MechanismCard'

export const revalidate = 60

const ENV = '#52b788'

const MECHANISMS = [
  {
    num: '01',
    title: 'Honest Framing — Climate Is Changing. The Attribution Is Less Certain Than Either Side Pretends.',
    body: 'The climate is changing — measurably, observably, in the instrumental record. That much is not in serious dispute and we will not pretend otherwise. What is genuinely debated, and what catastrophist political rhetoric papers over, is the attribution: how much of the change is the natural variability the Earth has produced across every prior epoch on record (Milankovitch cycles, solar forcing, ocean-circulation shifts, volcanic activity, the multi-decade oscillations geology shows over and over), and how much is anthropogenic CO2 forcing on top of that baseline. Our honest position is that natural cycles are doing most of the work, with a real but smaller human contribution than the loudest forecasts have claimed — and that thirty-five years of "ten years to act" predictions that never came true earn the skepticism the political class refuses to extend. That position does not lead to inaction. It leads to a different action: we take care of the country we live in — cleaner air, cleaner water, cleaner soil, healthier communities — because stewardship is its own justification, and we let the climate question resolve on the time scale climate questions actually resolve on, with humility about what we do and do not know.',
  },
  {
    num: '02',
    title: 'Revenue-Neutral Carbon Dividend — Pricing Without a Slush Fund',
    body: 'If we are going to price emissions at all — and we will, modestly, to let the market do the work mandates cannot — we do it the one way that does not become a permanent government revenue grab. A carbon fee is levied at the point of extraction (domestic wellhead, domestic mine mouth) or import, set at a moderate starting rate and rising on a published schedule slow enough for industry to plan around. One hundred percent of revenue is returned to American households as a quarterly per-capita dividend — every legal adult resident gets the same check, children at half-rate. The structure is progressive in effect (lower-income households consume less carbon-intensive goods and net out positive on the dividend), it builds direct constituent ownership of the policy (every household sees the check), and it forecloses the central political failure of every other pricing mechanism, which is that the revenue becomes a slush fund the government spends on whatever the majority party wanted to spend on anyway. The fee floats; the dividend tracks the fee. No carve-outs for political-donor industries, no exemptions, no second tier. Revenue-neutral, household-rebated, market-mechanism, end of story.',
  },
  {
    num: '03',
    title: 'No Hard Net-Zero Mandates — Directional Goals, Honest Measurement',
    body: 'The "net-zero by 2050" frame is the central conceit of contemporary climate policy and it has produced more political backlash than emissions reductions. Dates pulled from international conferences become statutory mandates, the mandates run into engineering and economic reality, the engineering and economic reality produces missed targets, the missed targets produce credibility collapse. We reject the framework. The United States sets directional emissions-intensity goals — emissions per unit of GDP, measured honestly, declining on a multi-decade trajectory that the technology actually supports — and we hit them through the market mechanisms on this page rather than through statutory dates that bind future Congresses. The goal is real decarbonization at the speed the engineering and the cost curve allow, not theatrical compliance with a deadline that nobody believed when it was set. We do not promise net-zero by 2050. We promise honest measurement, market-driven reductions, and adaptation funded for the warming that has already happened and the warming that will happen regardless.',
  },
  {
    num: '04',
    title: 'Paris — Stay Engaged. Stop Making Commitments We Cannot Deliver. Reform From Inside.',
    body: 'The United States stays at the Paris table, because withdrawing produces neither emissions reductions nor diplomatic leverage. But we stop making binding commitments that the US economy cannot actually deliver under any realistic policy combination — the pattern of both Democratic and Republican administrations submitting and then renouncing Nationally Determined Contributions destroys credibility in both directions. From inside the Paris framework we push three reforms: (a) NDC commitments are made enforceable by being scoped to what each country can actually deliver and audited against actual delivery, (b) top-emitter accountability — China, India, the European Union are held to the same delivery standard the United States is held to, not a development-status discount that exempts the world\'s largest emitter, and (c) border carbon adjustment is recognized as a legitimate enforcement tool against carbon leakage to non-pricing jurisdictions. We use the same shared-interest-tracks logic our China Policy page applies to global commons: climate cooperation is a real interest we work at the working level even when broader relations are difficult, but we do not write commitments we will not honor and we do not honor commitments others write without delivering theirs.',
  },
  {
    num: '05',
    title: 'Border Carbon Adjustment — Stop Leaking Emissions to Cheaper Pollution',
    body: 'The unspoken failure of US climate policy for thirty years has been carbon leakage: domestic emissions reductions paired with manufacturing that moved to jurisdictions (China above all) with no carbon price, dirtier grid, and weaker environmental enforcement. Global emissions did not fall; they relocated, often with higher net intensity than the US production they replaced. We end the leakage. A Border Carbon Adjustment is applied to imports from non-pricing jurisdictions, calibrated to the embedded carbon content of the imported good versus what the US-produced equivalent would have emitted under the domestic carbon-dividend price. This protects US manufacturers from being undercut by dirtier foreign production, creates real leverage to bring trade partners into carbon-pricing alignment, and pairs cleanly with the sector-by-sector reciprocity rule our China Policy page applies elsewhere. The European Union\'s Carbon Border Adjustment Mechanism is the proof of concept and the precedent; we implement a US version that protects US industry without the EU\'s bureaucratic overreach.',
  },
  {
    num: '06',
    title: 'Methane — Enforce the Easy Wins, Plug the Abandoned Wells',
    body: 'Methane is a far more potent greenhouse gas than CO2 over short time horizons, the oil and gas industry already supports most of the leak-reduction technology that captures it (because captured methane is sellable product), and the abandoned-well problem across the country is large and well-documented (the United States has roughly three million abandoned wells, hundreds of thousands of which are leaking detectable methane and contaminating groundwater). We enforce hard on the largest emitters under technology-based emissions standards that the industry can actually meet, we fund the abandoned-well plugging program the bipartisan infrastructure framework already started but at sufficient scale to actually finish the job within a generation, and we treat methane leak reduction as the cleanest-air-and-water win in the entire climate portfolio. This is the rare climate mechanism that does not require trade-offs against energy abundance — methane reduction grows energy supply (captured gas is sold), protects groundwater, and reduces emissions, all at once.',
  },
  {
    num: '07',
    title: 'Fund Adaptation Seriously — The Win Regardless of Mitigation',
    body: 'Adaptation is the climate spending that always pays off. Sea walls and coastal-flood infrastructure for the cities that need them, inland flood-control modernization where systems are sixty-plus years old and failing, wildfire prevention through forest-thinning and prescribed burns (cross-link our public-lands plan), water-infrastructure upgrades for drought-stressed regions, heat-resilient urban design, agricultural adaptation through drought-resistant cultivars and water-efficient irrigation. We fund all of it at the scale the engineering actually requires, because adaptation is the win regardless of whether mitigation succeeds — if the climate warms further, we are protected; if it warms less than feared, we still have cleaner air, more reliable water, fewer destroyed homes, and more resilient agriculture. Adaptation is the boring policy that produces measurable outcomes; mitigation is the gamble that produces political theater. We do both, but we do not let theater crowd out outcomes.',
  },
  {
    num: '08',
    title: 'Carbon Capture, DAC, Industrial Decarbonization — Fund the Research, Sunset the Deployment Subsidies',
    body: 'Direct Air Capture of CO2, point-source carbon capture from cement and steel and refineries, and industrial decarbonization technology (hydrogen reduction of iron ore, electrification of process heat, novel cement chemistry) are exactly the kind of technologies the federal government should fund the research on and let the market scale. DOE programs continue and ARPA-E DAC funding scales up significantly. The 45Q production tax credit and equivalent deployment subsidies get sunsetted under the technology-neutral doctrine our Energy page details, on a defined window timed to cost-curve maturation. We fund what could change everything (the lab-to-pilot transition where the public good is largest) and we let what already works find its own market (the deployment phase where private capital should carry the risk). Same rule as every other energy technology.',
  },
  {
    num: '09',
    title: 'Solar-Radiation-Management Research — Develop the Option, Reserve the Decision',
    body: 'Geoengineering — specifically the family of solar-radiation-management techniques (stratospheric aerosol injection, marine cloud brightening, cirrus cloud thinning) — is the break-glass-in-case-of-emergency option that climate policy has not been honest about. The current establishment posture is to refuse to fund research on it because researching it might normalize it. That posture is exactly backwards: we fund the research, rigorously, internationally coordinated, so that the option exists if mitigation falls short and so that the safety and side-effect questions are characterized in advance of any decision to deploy. Research only. Not deployment. The deployment question is one for international governance to resolve under any future scenario where it becomes relevant, not one for a future US administration to make unilaterally. But we will not be the country that left the world without the option because we refused to study it.',
  },
  {
    num: '10',
    title: 'No Climate-Emergency Executive Powers — Ever',
    body: 'Climate is a multi-decade engineering and economic problem. It is not an emergency in the legal sense the National Emergencies Act and emergency-powers doctrines were designed to address. We codify this in statute: no president may invoke climate-emergency powers to bypass Congress on spending, mandate, expropriation, or any other authority traditionally reserved to the legislature. The pattern of progressive scholars and activists urging presidential climate-emergency declarations as a means of doing what Congress will not authorize represents exactly the kind of executive overreach our Governance pillar is built to reject. Climate policy goes through Congress, on the record, with a vote, the same way every other policy does. The forcing function for climate progress is the dividend, the BCA, the research, the adaptation funding, and the permitting reform — not emergency powers.',
  },
  {
    num: '11',
    title: 'Uniform Clean-Air and Clean-Water Standards — Same Benchmark, Every Zip Code',
    body: 'Environmental Protection Agency air-quality and water-quality benchmarks apply uniformly by geography and measured pollution exposure, not by demographic identity. The environmental-justice overlay introduced over the last fifteen years — where regulatory enforcement gets weighted by race, ethnicity, or income composition of affected communities — gets replaced with a single, race-neutral standard: an area with elevated PM2.5 exposure, lead in drinking water, contaminated groundwater, or unsafe drinking-water standards gets enforcement priority because the pollution is bad, full stop. The standard does not get stronger or weaker based on who lives there. The same clean-air-and-water expectation applies in rural West Virginia, in inner-city Detroit, in suburban Phoenix, and in an Indigenous community in New Mexico. This is the stewardship frame applied honestly: take care of the country, every part of it, on the merits of the pollution itself.',
  },
  {
    num: '12',
    title: 'Direct-Emissions Reporting Only — No Scope-3 Compliance Theater',
    body: 'Mandatory public emissions reporting applies to large stationary sources and large fleet operators under a single national standard: direct emissions (Scope 1) and purchased electricity-related emissions (Scope 2) are reported, audited, and published. Scope 3 emissions reporting — the value-chain-wide framework that requires every company to estimate emissions of its suppliers and customers all the way through the global economy — is rejected as compliance theater that produces inconsistent estimates, drives ESG consulting overhead, and adds nothing to actual measurement. The Securities and Exchange Commission climate-disclosure rule gets rewritten to this standard. Companies report what they actually emit. Auditors verify it. The public sees it. Investors and customers make decisions on real data rather than on the modeling artifacts that Scope 3 frameworks produce.',
  },
  {
    num: '13',
    title: 'Fund the Science Honestly — Including the Studies the Consensus Discourages',
    body: 'Climate science gets serious federal research funding, including the lines of inquiry the current funding consensus deprioritizes: natural-variability research at the scale the question deserves (solar variability, ocean-circulation oscillations, cloud feedback, Milankovitch and orbital forcing across the full Quaternary record), attribution science that quantifies uncertainty honestly rather than averaging it away, and skeptical-hypothesis testing that does not get funded because grant-review panels treat skeptical questions as ideological rather than scientific. Science advances by testing hypotheses, not by enforcing consensus on contested attribution. We fund the testing. The result, twenty years out, is a more honest scientific understanding of natural versus anthropogenic forcing — and a public that trusts the result because the testing was real. Suppressing inquiry produced the credibility collapse the field is now living with; we reverse it.',
  },
  {
    num: '14',
    title: 'Stewardship First — Take Care of the Country We Live In',
    body: 'The honest reason to do every one of the mechanisms on this page is not catastrophist climate emergency. It is stewardship. We breathe the air, we drink the water, we farm the soil, we live in the country. Cleaner air at every elevation, cleaner water in every aquifer, healthier soil on every farm, fewer abandoned wells leaking into groundwater, fewer cities choking on PM2.5, more resilient infrastructure against the floods and fires that come every year regardless of attribution — these are good for Americans alive today, good for our children, good for the country we want to hand them. We do not need the apocalyptic frame to justify the work. The Judeo-Christian heritage our Education page treats as part of the American civic inheritance includes a stewardship obligation older than any climate model: leave the place better than you found it. That is the frame. Everything else on this page is the implementation.',
  },
] as const

export default function ClimatePage() {
  return (
    <div>
      <IssueHero
        badge="🌡️ Climate / Emissions"
        badgeColor={ENV}
        title={<>Cleaner Air. Cleaner Water. <span style={{ color: ENV }}>Honest Accounting.</span></>}
        subtitle="The climate is changing — observably, measurably. We are honest about that. We are also honest about what the science actually says on attribution — natural cycles are doing most of the work, the human contribution is real but smaller than catastrophist rhetoric claims, and thirty-five years of 'ten years to act' forecasts that never came true have earned the skepticism the political class refuses to extend. The frame is stewardship — take care of the country we live in — not catastrophism. Revenue-neutral carbon dividend with the check going back to households, never to a government slush fund. No net-zero mandates. Paris engaged + reformed from inside, with border carbon adjustment to stop leakage to dirtier jurisdictions. Methane easy wins enforced. Adaptation funded seriously. Carbon capture and DAC research funded. Solar-radiation-management research as break-glass optionality. No climate-emergency powers, ever. Uniform clean-air-and-water standards, every zip code. Direct emissions reporting only — no Scope-3 compliance theater. Fund the science honestly, including the questions the consensus discourages."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Climate emergency framing, IRA permanent subsidies, Paris rejoin and lead, EV mandates by 2032, methane rules, GHG reporting, environmental-justice overlay weighted by demographic identity. In practice: Paris commitments US cannot meet, mandates that produced backlash and bad cars, $369B+ in subsidies that became permanent slush, kept fossil exports running anyway, leaked manufacturing emissions to China while declaring victory."
          rep="Skepticism on degree of human contribution, oppose carbon tax, withdraw Paris, oppose mandates, frame as adaptation rather than mitigation. In practice: protect fossil subsidies, kill any pricing mechanism, no serious DAC or carbon-capture funding, no abandoned-well plugging, treat the issue as culture war, leave the country with no honest framework to operate under either."
          us="Honest framing — climate changing, natural cycles dominant, real but smaller human contribution than catastrophist consensus claims, reject both denial AND emergency framing. Stewardship frame: cleaner air, water, soil, healthier country. Revenue-neutral carbon dividend — 100% back to households, never a government slush fund. No net-zero mandates, directional emissions-intensity goals instead. Paris engaged + reformed from inside, top-emitter accountability, BCA enforcement. Border carbon adjustment on non-pricing jurisdictions. Enforce methane on largest emitters + plug the three million abandoned wells. Adaptation funded seriously. Carbon-capture and DAC research scaled, deployment subsidies sunsetted. Solar-radiation-management research as break-glass optionality, NO deployment. No climate-emergency executive powers, ever. Uniform clean-air-and-water standards in every zip code, no identity-weighted enforcement. Direct emissions reporting only, no Scope-3 theater. Fund the science honestly including skeptical inquiry. Stewardship first."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={ENV} bg={`color-mix(in srgb, ${ENV} 12%, transparent)`} border={`color-mix(in srgb, ${ENV} 35%, transparent)`}>📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">Honest Accounting</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="35 yrs" label="Of 'ten years to act' predictions that never came true" color="#c8102e" />
          <StatCard num="100%" label="Of carbon-fee revenue returned to households as quarterly dividend" color={ENV} />
          <StatCard num="~3M" label="Abandoned wells in the US — the easy methane win we keep punting" color="#c8102e" />
          <StatCard num="$369B+" label="IRA permanent subsidies that became a slush fund" color="#c8102e" />
          <StatCard num="BCA" label="Border carbon adjustment — stops emissions leakage to China" color={ENV} />
          <StatCard num="0" label="Climate-emergency executive powers under our doctrine" color={ENV} />
          <StatCard num="Same" label="Clean-air + water standard — every zip code, no identity weighting" color={ENV} />
          <StatCard num="Scope 1+2" label="Direct emissions reporting only — no Scope-3 compliance theater" color={ENV} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={ENV} bg={`color-mix(in srgb, ${ENV} 12%, transparent)`} border={`color-mix(in srgb, ${ENV} 35%, transparent)`}>🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Fourteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Stewardship, not catastrophism. Market mechanisms, not mandates. Adaptation funded, research funded, honesty restored.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor={ENV} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--gold) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Are You Saying Climate Change Is Fake?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            No. The climate is measurably changing — the temperature record, sea-level record, glacier and ice-sheet observations, and ocean-heat-content data are real measurements made by real scientists with real instruments, and we trust the measurements. What we do not trust, because the historical record does not support it, is the catastrophist political framing that has been bolted onto the measurements. The Earth has gone through significant climate variations in every prior epoch — Milankovitch cycles produced the Pleistocene glaciation cycles, the Medieval Warm Period and Little Ice Age occurred within the last twelve hundred years without industrial emissions, and the instrumental record we have is short relative to the natural variability the geological record shows. We take seriously the possibility that anthropogenic CO2 forcing adds to that baseline — there is real physics behind it — and we also take seriously that the magnitude of the human contribution relative to natural variability is the contested question, not whether the climate is changing. Our policy works under either case. If natural variability dominates, we still get cleaner air, cleaner water, more resilient infrastructure, methane wins, and a more honest scientific community out of the mechanisms on this page. If anthropogenic forcing turns out to be larger than the moderate case suggests, the carbon dividend, the BCA, the DAC research, and the SRM optionality position the country to respond on the time scale the engineering allows. We refuse to choose between denialism and catastrophism, because the science does not require that choice and the policy stops working if we pretend it does. Cleaner air. Cleaner water. Honest accounting. That is the deal.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: `color-mix(in srgb, ${ENV} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${ENV} 25%, transparent)` }}>
          <h3 className="font-bold mb-3" style={{ color: ENV }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/energy" className="underline hover:text-white">Energy Policy</Link>: every emissions reduction on this page rides on top of the energy abundance + 12-month permitting cap + grid build-out + sunset-based subsidies the Energy plan delivers.</li>
            <li>• <Link href="/issues/china-policy" className="underline hover:text-white">China Policy</Link>: climate is a shared-interest track that stays open at the working level; border carbon adjustment pairs with the sector reciprocity rule applied to trade with non-pricing jurisdictions.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + spending</Link>: revenue-neutral carbon dividend is the only pricing mechanism that does not become a government slush fund; technology-neutral sunset doctrine ends permanent IRA subsidies.</li>
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: EPA enforcement runs on uniform standards and measurable outcomes, the same outcomes-and-accountability doctrine applied across federal agencies.</li>
            <li>• <Link href="/issues/governance" className="underline hover:text-white">Governance</Link>: no climate-emergency executive powers, ever — the same restoration of Article I that runs through the Foreign pillar applied here.</li>
            <li>• <Link href="/issues/legislative-process" className="underline hover:text-white">Legislative process</Link>: climate spending bills go through single-subject rule, 72-hour read time, CBO score — no more bundled climate-and-everything-else omnibus.</li>
            <li>• <Link href="/issues/education" className="underline hover:text-white">Education</Link>: the stewardship frame on this page is the same Judeo-Christian-heritage-as-civic-tradition the Education plan treats as American civic inheritance.</li>
            <li>• <Link href="/issues/wages-jobs" className="underline hover:text-white">Wages + jobs</Link>: methane plugging, grid hardening, adaptation infrastructure, and the broader energy build-out are skilled-trade jobs at scale.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: NASA GISS and NOAA NCEI instrumental temperature records, IPCC Assessment Reports (AR5 and AR6) with honest reading of the uncertainty intervals on attribution, paleoclimate reconstructions across the Holocene (Marcott et al. 2013) and the broader Quaternary record (Milankovitch cycle data), Hansen et al. 1988 testimony and subsequent comparison to observed trajectory, the Paris Agreement (2015) and Nationally Determined Contribution submissions, the EU Carbon Border Adjustment Mechanism (2023), Department of Energy methane-emissions inventories and abandoned-well surveys (~3 million wells), the Inflation Reduction Act of 2022, the 45Q carbon-capture tax credit, the Bipartisan Infrastructure Law abandoned-well plugging program, SEC climate-disclosure rule debates, scholarship on climate-emergency executive-powers proposals, scholarship on solar-radiation-management governance, carbon-fee-and-dividend literature (Citizens Climate Lobby and Climate Leadership Council frameworks), and the long literature on natural climate variability and solar forcing.
          </p>
        </div>
      </section>
    </div>
  )
}
