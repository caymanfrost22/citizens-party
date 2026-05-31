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
    title: 'Energy Abundance — Build Everything That Works',
    body: 'The honest math: US electricity demand is projected to roughly double by 2050 driven by AI data centers, electrification of transport, and reshoring of manufacturing. The only policy that meets that demand is everything that works — nuclear, natural gas, oil where economic, renewables where they compete on price, geothermal, hydro, and the next generation of moonshot research. We reject the false single-bet frames both legacy parties keep producing. Renewables-only does not pencil out under current storage and transmission realities. Fossil-only ignores the price collapse renewables and gas have already produced. Climate-first that drives prices up loses every election and never builds anything. We choose abundance — technology-neutral, market-tested, permitting-fixed, grid-built. The goal is the cheapest reliable clean kilowatt-hour, sourced from whichever stack delivers it, with the regulatory and capital architecture to scale.',
  },
  {
    num: '02',
    title: 'Nuclear at Scale — SMRs, Gen IV, License Reform',
    body: 'Nuclear is the highest-density clean baseload available, and the United States has spent fifty years strangling it with a licensing regime that treats every new reactor like a one-off custom build. We change the rule. We license small modular reactors and Generation IV designs in fleets, not one at a time — the way the FAA certifies aircraft types rather than re-inspecting every plane. We extend operating licenses on the existing ~93 reactors to 80 years where the engineering supports it, and we restart shuttered plants where feasible (the Three Mile Island Unit 1 restart for Microsoft is the proof case, not the exception). We fund the loan guarantees and the federal-land siting needed to build the first dozen SMR deployments at speed, and we let the cost curve come down from there the way solar\'s did. Targeted Nuclear Regulatory Commission reform restores the original Atomic Energy Act mandate of "adequate protection" without the precautionary-creep that has produced licensing timelines measured in decades. Nuclear by default for new baseload, full stop.',
  },
  {
    num: '03',
    title: 'Natural Gas + LNG — Keep the Bridge, Lift the Freeze',
    body: 'Natural gas displaced coal as US baseload over the last twenty years, cut US power-sector emissions more than any single policy in history, and gave the United States the lowest industrial energy prices among major economies. The bridge stays. We end the Biden-era pause on LNG export terminal permitting and let the export infrastructure expand to meet demand from allies (notably Europe, Japan, South Korea — direct dollar-denominated alternatives to Russian gas and Middle Eastern crude). Pipeline permitting falls under the same 12-month cap that applies to every energy project on mechanism 07 below. We do not subsidize gas; we let it compete. We do not phase it out on a political timeline; we let it earn its place on price and reliability against the alternatives that are catching up.',
  },
  {
    num: '04',
    title: 'Oil — Produce Where Economic, End Federal-Land Moratoriums, Refill the SPR',
    body: 'Domestic oil production continues at the level US shale, Permian, and Gulf reservoirs can economically support. We end the federal-land drilling moratoriums imposed for political rather than environmental reasons, restore the lease sales the Mineral Leasing Act has required since 1920, and refill the Strategic Petroleum Reserve to its 750-million-barrel statutory capacity (it sits at roughly 386 million as of the most recent reporting — the lowest in forty years). What we do not do: new offshore Arctic leasing, where the cost curve does not justify the environmental risk; new subsidies for fossil fuels beyond what every energy source qualifies for under the technology-neutral sunset doctrine on mechanism 12. Domestic production is a strategic asset and we treat it like one — produced, stockpiled, exported to allies, never subsidized indefinitely.',
  },
  {
    num: '05',
    title: 'Coal — Market Discipline, Honest Emissions Standards',
    body: 'Coal is being out-competed on price by gas and renewables in most US markets, and that competition is producing the cleanest US power mix in fifty years. We do not force coal off the grid on a political timeline, and we do not subsidize it to keep running. We let the market decide. Plants that can run cleanly under existing Clean Air Act standards — controlling for sulfur, nitrogen oxides, mercury, and particulates the way the technology already supports — keep running as long as they earn their place. Plants that cannot compete on price or cannot meet emissions standards shut down on the same timeline the market is already producing. Coal communities (West Virginia, eastern Kentucky, southern Illinois, Wyoming) get a fair transition — funded retraining, infrastructure investment, the same trade-school path our Education plan stands up, and explicit priority for SMR siting in the regions losing coal capacity. The exit is real and it is market-driven; what we refuse to do is either accelerate it through political mandate or block it through subsidy.',
  },
  {
    num: '06',
    title: 'Renewables — Compete on Price, Sunset the Subsidies',
    body: 'Solar and onshore wind have crossed the cost-curve threshold where they compete with gas on price in most US markets without subsidies. That is good news, and it changes the policy. We sunset the Inflation Reduction Act\'s renewable-energy production and investment tax credits on a defined window — five to ten years, calibrated to each technology\'s mature-cost trajectory — and let renewables earn their continued growth on price rather than tax expenditure. Offshore wind, where the cost curve has stalled and project economics have collapsed, does not get a separate subsidy carve-out either. What we do for renewables is remove the barriers that are still in their way — permitting reform under mechanism 07, transmission buildout under mechanism 08, domestic component manufacturing where it is strategically warranted under our China Policy plan. The deal is honest: we will build the rails so that renewables can compete, and we will let them compete.',
  },
  {
    num: '07',
    title: '12-Month Permitting Cap — Same Rule, Every Energy Source',
    body: 'Permitting is the single largest barrier to building energy in America. The same federal permitting cap our Economics pillar already proposes on the Inflation sub-issue applies here, applied uniformly across every energy source: every federal energy-project permitting decision rendered within 12 months of application. The National Environmental Policy Act review process gets streamlined to one lead agency with binding deadlines on every cooperating agency. Judicial review of permitting decisions runs on a six-month statutory clock — the existing pattern where a single district court can stall a multi-billion-dollar project for years on procedural challenges ends. Categorical exclusions expand for proven technologies (additional reactor units at existing nuclear sites, gas pipelines paralleling existing rights-of-way, transmission lines along existing corridors). The rule applies the same way to a solar farm, a nuclear reactor, a gas pipeline, a transmission line, or a geothermal plant. Same cap, every source, every project.',
  },
  {
    num: '08',
    title: 'The Grid Is the Bottleneck — Interstate Transmission, Federal Backstop, Hardened',
    body: 'The cheapest electron in Wyoming is worthless if it cannot reach demand in Chicago. The US transmission system has been chronically underbuilt for thirty years — projects of national interest get vetoed by individual states whose political math does not include the consumers two states downstream. We change that. Transmission projects designated by the Federal Energy Regulatory Commission as projects of national interest get federal backstop siting authority that overrides individual state vetoes where the project crosses state lines — the same Article I commerce-clause logic that built the interstate highway system. Grid hardening — for extreme weather, for cyber attack, for cascading-failure resilience — becomes a mandatory ratepayer-recovered investment supervised by FERC rather than left to each state\'s political appetite. Every Independent System Operator and Regional Transmission Organization runs with statutorily mandated baseload reserve margins so that the Texas-2021 and 2024-summer near-blackout pattern stops being the recurring news event. The grid is the platform every energy mechanism on this page depends on; we treat it like one.',
  },
  {
    num: '09',
    title: 'Repeal the EV Mandate — Market Decides, Charging Infrastructure Is the Public Good',
    body: 'The federal vehicle-emissions standards that effectively mandate EV adoption by 2032 get repealed. The state-level internal-combustion-engine bans (California, several others) lose federal preemption support. Consumers decide what to drive based on price, range, and use case — not a regulatory deadline written by people who do not drive the routes the mandate covers. We sunset the EV purchase tax credits on the same window as the renewable credits on mechanism 06 — phased down, not eliminated overnight, calibrated to where the EV cost curve actually sits relative to gasoline vehicles by class. What we do treat as a legitimate public good: charging infrastructure, federally funded at the trunk-route level so that range anxiety is solved by network density rather than by subsidy of any particular vehicle. EV adoption is going to be substantial regardless; mandates that overshoot what the cost curve supports just produce political backlash and bad cars. We get out of the mandate business and let the engineering decide.',
  },
  {
    num: '10',
    title: 'Geothermal at Scale + Fusion R&D + Advanced Fission',
    body: 'The technologies that are not yet fully commercial but could be transformative get serious federal R&D, the way the Department of Energy funded the original shale-gas research that produced the entire US fracking boom. First, geothermal — the United States sits on what may be the largest commercially recoverable geothermal resource in the developed world, and the oil-and-gas industry already has the drilling expertise needed to access it. Enhanced geothermal systems, closed-loop drilling, and supercritical geothermal get accelerated through targeted research funding and the same 12-month permitting cap on mechanism 07. Second, fusion — the Department of Energy\'s fusion energy program scales up significantly, with public-private partnership funding for the half-dozen credible commercial-fusion teams now operating. We do not pretend fusion is "30 years away" the way the field has joked for fifty years; we fund it as if we mean to have it. Third, advanced fission — molten salt reactors, sodium-cooled fast reactors, traveling wave reactors, and other Gen IV designs get NRC pathways that match the engineering rather than treating every novel design as if it were a 1970s pressurized water reactor.',
  },
  {
    num: '11',
    title: 'Strategic Reserves — Oil, Gas, Critical Minerals, Uranium, Onshore Fuel Cycle',
    body: 'Energy security is the foundation of every other security. The Strategic Petroleum Reserve gets refilled to its 750-million-barrel statutory capacity and held there as a genuine strategic stockpile rather than a political release valve. We add a Strategic Natural Gas Reserve at scale, leveraging existing salt-cavern storage infrastructure. We add a Strategic Critical Minerals Reserve covering rare earths, lithium, cobalt, nickel, and the other inputs the energy stack and the defense stack share — sized to wartime durations rather than peacetime tokens, sourced through the onshoring program our Military Posture page details. And we stand up domestic uranium enrichment and reactor-fuel fabrication so that the US nuclear fleet does not depend on Russian, Kazakh, or Chinese fuel-cycle inputs — Centrus Energy\'s HALEU pilot plant is the proof of concept; we scale it to fleet capacity. Same logic as the Military Posture critical-supply doctrine, applied to the energy stack.',
  },
  {
    num: '12',
    title: 'Technology-Neutral, Sunset-Based Subsidy Doctrine',
    body: 'Every energy subsidy on the federal books gets evaluated against one rule: is it technology-neutral, and does it sunset on a defined window? Production tax credits, investment tax credits, manufacturing credits, transmission credits, hydrogen credits, carbon-capture credits — every one of them gets a 5-to-10-year statutory expiration. Research and development funding (ARPA-E, DOE national lab core funding, loan guarantees for first-of-a-kind deployments) remains the legitimate federal role and is preserved and expanded. Permanent production subsidies for any energy source — fossil, renewable, or nuclear — end. The Inflation Reduction Act\'s permanent credits get rewritten under this doctrine. Coal\'s legacy subsidies end on the same timeline. Oil-and-gas depletion allowances and master-limited-partnership treatment get reviewed against the same rule. We do not pick winners and we do not protect losers; we fund the research, we build the rails, and we let the market decide the rest. This is the same forcing-function our Governance pillar applies to every federal program, applied here to energy.',
  },
  {
    num: '13',
    title: 'Energy Moonshot Research — Including the Long-Tail Tesla Never Got to Finish',
    body: 'The next leap in energy will not come from what we are already building; it will come from research we are not currently funding seriously. We expand the ARPA-E moonshot model significantly and we explicitly fund the long-tail research the political consensus has dismissed for a century. Wireless power transmission — the resonant inductive coupling Nikola Tesla pioneered, already commercialized at short range in EV charging pads, mobile-phone chargers, and medical implants — gets serious federal research funding for the long-range distribution applications Tesla\'s Wardenclyffe program pursued and was defunded out of for political rather than scientific reasons. Space-based solar power, fully developed by the Naval Research Laboratory at proof-of-concept scale, gets the next-stage demonstration funding it needs. Room-temperature superconductors get the National Science Foundation flagship program treatment. Direct air capture of carbon dioxide gets accelerated. Advanced battery chemistry beyond lithium-ion (solid state, sodium-ion, iron-air) gets DOE breakthrough-program funding. Heat-engine and refrigeration-cycle efficiency improvements get the boring-but-massive research support that has been declining for forty years. We fund what could change everything, not just what already works. The country that funded transistor research in 1947 and the Apollo program in 1961 can fund the next breakthrough; we just have to choose to.',
  },
  {
    num: '14',
    title: 'Hyperscaler Accountability — Big Tech Builds the Power It Uses',
    body: 'Data centers are now the fastest-growing source of US electricity demand. Microsoft, Google, Amazon, Meta, OpenAI, and the rest of the hyperscaler tier are projecting power requirements that will roughly double total US data-center load by 2030. Under the current architecture, that load is socialized onto every residential ratepayer in the same grid region — meaning Americans on fixed incomes subsidize artificial-intelligence training runs through their electricity bills. We end that. Any new or expanded data center above a defined threshold (a reasonable starting threshold is 100 megawatts of installed load) must either (a) co-locate with dedicated generation it pays for in full — small modular reactors, dedicated geothermal, dedicated hydro, dedicated combined-cycle gas — or (b) sign long-term power purchase agreements at full long-run marginal cost (including transmission build-out, including dispatchable backup, including reserve margin) rather than at average residential or industrial rate. Microsoft\'s contract to restart Three Mile Island Unit 1 is the proof case and the model. The user-pays-for-load principle is the same captivity-vs-choice logic our Economics pillar applies to every other captive market: when the demand is concentrated and the price signal is missing, we restore the price signal. Big tech builds the power it uses.',
  },
] as const

export default function EnergyPage() {
  return (
    <div>
      <IssueHero
        badge="⚡ Energy Policy"
        badgeColor={ENV}
        title={<>Energy Abundance. <span style={{ color: ENV }}>Honest Accounting. American Grid.</span></>}
        subtitle="The honest math: US electricity demand roughly doubles by 2050 driven by AI, electrification, and reshoring. The only policy that meets that demand is everything that works. We build nuclear at scale, keep gas as the bridge, produce domestic oil where economic, let coal exit on market terms, let renewables compete without subsidies, fund geothermal and fusion seriously, and put a 12-month permitting cap on every project. We build the interstate grid. We refill the strategic reserves. We onshore the fuel cycle. We end the EV mandate and let the market decide what to drive. We sunset every permanent energy subsidy on a defined window. We fund the moonshot research the political consensus has dismissed — including the wireless-power-transmission long tail Tesla never got to finish. And big tech builds the power it uses — no socializing the cost of artificial-intelligence training onto residential ratepayers."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="All-renewables push, IRA permanent subsidies for solar/wind/EV, EV mandates by 2032, restrict drilling on federal land, climate-first framing. In practice: kept Trump-era LNG export terminals running, blocked Keystone XL, slow-walked nuclear despite NRC reforms, banned offshore drilling in Atlantic and Pacific, paused LNG export permits, drove US energy prices up while grid reliability deteriorated in 2021 Texas and 2024 multi-state events."
          rep="Drill baby drill, oil + gas + coal, anti-EV mandates, anti-climate framing. In practice: protect fossil fuel subsidies and oil-state interests, tariff Chinese solar and EVs, ignore grid resilience, no serious nuclear push despite the rhetoric, treat renewables as a culture-war target. Trump 2026: 'energy dominance' plus Paris withdrawal, no permitting reform, no grid program."
          us="Energy abundance — build everything that works. Nuclear at scale (SMRs + Gen IV + license reform + 80-year extensions + restart shutdowns). Gas as bridge + baseload, LNG export freeze lifted. Domestic oil where economic + federal-land moratoriums ended + SPR refilled to 750M. Coal exits on market terms, runs clean where it earns its place. Renewables compete on price, IRA credits sunsetted. 12-month permitting cap on every energy source. Massive interstate transmission with FERC primacy and grid hardening. EV mandate repealed, charging infrastructure as public good. Geothermal at scale + fusion R&D + advanced fission. Strategic reserves: oil + gas + critical minerals + uranium + onshore fuel cycle. Technology-neutral sunset-based subsidies — R&D yes, permanent production subsidies no. Energy moonshot research including the wireless-power-transmission long tail Tesla never got to finish. Hyperscaler accountability — big tech builds the power it uses, no socializing AI training load onto residential ratepayers."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={ENV} bg={`color-mix(in srgb, ${ENV} 12%, transparent)`} border={`color-mix(in srgb, ${ENV} 35%, transparent)`}>📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">What Abundance Actually Looks Like</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="~2×" label="Projected US electricity demand by 2050 — AI + electrification + reshoring" color={ENV} />
          <StatCard num="~93" label="Operating US nuclear reactors — fleet stays + grows" color={ENV} />
          <StatCard num="12 mo" label="Permitting cap, every energy source, same rule" color={ENV} />
          <StatCard num="750M" label="Strategic Petroleum Reserve barrels — refilled to full" color={ENV} />
          <StatCard num="386M" label="Current SPR level — 40-year low we refill from" color="#c8102e" />
          <StatCard num="80 yrs" label="Operating-license extension target for existing reactors" color={ENV} />
          <StatCard num="100 MW" label="Threshold above which data centers fund their own dedicated generation" color={ENV} />
          <StatCard num="2024" label="Microsoft-Three Mile Island restart — the model we scale" color={ENV} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color={ENV} bg={`color-mix(in srgb, ${ENV} 12%, transparent)`} border={`color-mix(in srgb, ${ENV} 35%, transparent)`}>🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Fourteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Build everything that works. Permit it in twelve months. Sunset the subsidies. Let big tech pay for its own power.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Tesla&apos;s Wireless Power — Real Engineering, or Pseudoscience?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            The short answer is: the short-range version is settled engineering used in every wireless-charging pad and medical implant on the market, and the long-range version Tesla pursued at Wardenclyffe is unsolved physics that was defunded before its problems were fully characterized. What Tesla demonstrated at Colorado Springs in 1899 and proposed to build at Wardenclyffe was resonant inductive coupling at scale — using the Earth itself as a return path for high-frequency electrical energy. The engineering problems were and remain substantial: efficiency falls off rapidly with distance, the safety and atmospheric-effect questions are real, and the economics under the technology of 1903 did not justify the investment when J.P. Morgan pulled funding. But the underlying physics is not nonsense. Resonant induction works; it scales further than commercial use has needed it to scale; and the modern materials, computational tools, and superconducting technology Tesla did not have available may change the answer. We fund the research. We do not promise free energy and we do not pretend the problems are trivial. We fund it the way the country funded the original transistor research in 1947 — as a long-shot in a research portfolio that includes fusion, advanced batteries, room-temperature superconductors, and the half-dozen other technologies any one of which would change everything. Most moonshots fail. The few that do not are why the United States is still a frontier-technology economy a century after Tesla.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: `color-mix(in srgb, ${ENV} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${ENV} 25%, transparent)` }}>
          <h3 className="font-bold mb-3" style={{ color: ENV }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/inflation" className="underline hover:text-white">Inflation</Link>: the 12-month permitting cap, originally proposed there for energy and reshored manufacturing, is detailed here for the full energy stack.</li>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + spending</Link>: technology-neutral sunset-based subsidies are the same forcing-function our fiscal-discipline architecture applies to every federal program.</li>
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: NRC and FERC reform run on the same outcomes-and-accountability doctrine we apply across federal agencies.</li>
            <li>• <Link href="/issues/military-posture" className="underline hover:text-white">Military Posture</Link>: critical-minerals reserves, onshore uranium enrichment, domestic fuel cycle — the same supply-chain security doctrine applied to the energy stack.</li>
            <li>• <Link href="/issues/china-policy" className="underline hover:text-white">China Policy</Link>: onshore solar, wind, and battery manufacturing where strategic; the broader strategic-stack build the Foreign pillar details.</li>
            <li>• <Link href="/issues/big-tech" className="underline hover:text-white">Big tech</Link>: hyperscaler accountability for data-center load is the same captivity-vs-choice and platform-accountability logic the Economics pillar applies to other captive markets.</li>
            <li>• <Link href="/issues/wages-jobs" className="underline hover:text-white">Wages + jobs</Link>: nuclear, gas, geothermal, and grid build-out are skilled-trade jobs at scale; coal-community transition runs through the trade-school path.</li>
            <li>• <Link href="/issues/education" className="underline hover:text-white">Education</Link>: the funded trade-school path supplies the workforce that builds everything on this page.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: Energy Information Administration electricity-demand projections (AEO 2024–2025), Department of Energy Office of Nuclear Energy program data, NRC licensing-timeline analysis (Breakthrough Institute and NEI reporting), Strategic Petroleum Reserve historical inventory data, the Inflation Reduction Act of 2022 (renewable production and investment tax credits), the Mineral Leasing Act of 1920, the National Environmental Policy Act of 1969, FERC Order 2023 and transmission backstop authority debates, ERCOT February 2021 winter storm reporting, Texas and multi-state summer 2024 grid-stress reporting, Microsoft–Three Mile Island Constellation Energy power purchase agreement (September 2024), Department of Energy ARPA-E program reporting, Naval Research Laboratory space-based solar demonstration (PRAM module), Centrus Energy HALEU pilot plant documentation, the Atomic Energy Act of 1954, the original Tesla Colorado Springs experiments (1899) and Wardenclyffe Tower project documentation, the original J.P. Morgan correspondence on the project, and academic literature on resonant inductive coupling and wireless power transfer (Kurs et al. 2007 and subsequent).
          </p>
        </div>
      </section>
    </div>
  )
}
