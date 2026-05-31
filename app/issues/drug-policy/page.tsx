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
    title: 'The Dividing Line — Acute Lethality, Not Vibes',
    body: 'The 50-year War on Drugs treated cannabis like heroin and lost. We draw the line where the science draws it: by how easily a drug kills by accident. A substance an informed adult can dose without a microgram-margin-of-death gets regulated like alcohol. A substance that kills at near-invisible doses stays prohibited and gets hunted. Three tiers result — legal and regulated (cannabis, cocaine, LSD, psilocybin, MDMA, mescaline and similar), medical-prescription-only (pharmaceutical opioids and other legitimate controlled medicines), and still-illegal Schedule I (fentanyl, heroin, methamphetamine). The principle is honest and consistent, not a culture-war reflex.',
  },
  {
    num: '02',
    title: 'Legalize and Regulate the Safe-to-Dose Tier — The Alcohol Model',
    body: 'Prohibition of drugs that adults can use without dying by accident has failed exactly the way alcohol prohibition failed: it hands a massive market to cartels, fills prisons with users, and guarantees the product is unregulated, unlabeled, and contaminated. We legalize and regulate that tier like alcohol and tobacco: licensed producers and sellers, sales to adults 21 and over only, mandatory purity and potency testing, honest labeling, and a clean, legal, taxed supply. A known dose of a tested product kills far fewer people than a mystery bag from a dealer — regulation is itself the harm reduction.',
  },
  {
    num: '03',
    title: 'Strong Guardrails — Adults Only, Sober Behind the Wheel',
    body: 'Legal does not mean a free-for-all. Hard guardrails on the regulated tier: no marketing to children, ever; strict enforcement against any sale to minors; clear impaired-operation standards so driving, operating machinery, or working safety-critical jobs while impaired is prosecuted like drunk driving; and continued enforcement against any black-market product that skips the testing and tax system. The same framework that lets a responsible adult buy a tested product makes selling to a 17-year-old or driving high a serious offense.',
  },
  {
    num: '04',
    title: 'The Crime Is the Unlicensed Sale',
    body: 'Once there is a legal, regulated, taxed channel, the enforcement target shifts cleanly: the crime is selling outside the licensed system. Unlicensed sale, untested product, sale to minors, and tax evasion are prosecuted hard — that is where the cartels and the dangers live. A regulated market starves the black market of customers, and enforcement concentrates on the people who refuse to play by the rules instead of on ordinary users. Police and prosecutors stop chasing possession and start dismantling the illegal supply that remains.',
  },
  {
    num: '05',
    title: 'Tax It to Treat It',
    body: 'Every legal, regulated drug is taxed, and that revenue is dedicated to addiction treatment, recovery infrastructure, and prevention. The people and products that create demand for treatment help fund it — the same self-funding logic behind a tobacco tax paying for cancer care. This is how we pay for the on-demand treatment system without raising income taxes: the legal market we create funds the recovery system the country has never built.',
  },
  {
    num: '06',
    title: 'Schedule I Stays — A Multi-Front War on the Killers',
    body: 'Fentanyl, heroin, and methamphetamine stay illegal and we go after their supply chains with everything. Designate the trafficking cartels as foreign terrorist organizations. Sanction the Chinese precursor labs feeding them. Fund port-of-entry scanning technology, because most fentanyl crosses through legal ports, not empty desert. Attack the money-laundering and financial networks that move the profits. And a dealer who sells a fatal dose can be charged for the death it causes. These drugs kill ~107,000 Americans a year — they get treated like the mass-casualty threat they are.',
  },
  {
    num: '07',
    title: 'Users of the Deadly Tier Get Treatment, Not a Prison Cell',
    body: 'For the drugs that stay illegal, simple possession by a user routes into mandatory treatment through the drug-court system — not a criminal record that ends a life, and not a free pass either. Treatment is compelled, supervised, and real. We separate the trafficker from the addict: the supply chain faces the full weight of enforcement, the person caught in addiction faces a structured path to recovery. (This connects directly to the treatment courts on the Crime & Criminal Justice plan.)',
  },
  {
    num: '08',
    title: 'On-Demand Treatment + Recovery Infrastructure',
    body: 'Today roughly one in ten Americans who need addiction treatment can actually get it — months-long waits, insurance denials, no beds. We fix the bottleneck: federally funded treatment-on-request with no waitlist, full insurance parity (addiction covered like any other disease), plus the recovery infrastructure that makes treatment stick — sober housing, job placement, and long-term support. Funded by the drug-tax revenue from mechanism 5. A person ready to quit should never be turned away because the system is full.',
  },
  {
    num: '09',
    title: 'Narcan as a Bridge, Not a Lifestyle',
    body: 'Because the regulated tier is tested and labeled, accidental overdoses there collapse — regulation does the work that harm-reduction programs try to do around contaminated street drugs. So we concentrate overdose-reversal where the accidental deaths actually are: Narcan widely available to counter fentanyl and heroin overdoses, treated as a bridge that keeps someone alive long enough to enter mandatory treatment. We do not build government-run injection sites or a permanent maintenance apparatus around the legal drugs — regulation already handles their safety. Keep people alive, then move them toward recovery.',
  },
  {
    num: '10',
    title: 'Prescription Opioids — Tightly Controlled Medicine',
    body: 'Pharmaceutical opioids and similar controlled medicines occupy their own category: legitimate medicine, neither retail-legal nor Schedule I. They stay tightly prescription-controlled — real pain gets treated, while prescribing is monitored to prevent the over-prescription pipeline that seeded the opioid epidemic in the first place. The lesson of OxyContin is not that opioids have no medical use; it is that a captured FDA and a sales-driven prescribing culture turned medicine into a mass-addiction machine. We treat the medicine as medicine, with the controls that history proved necessary.',
  },
  {
    num: '11',
    title: 'Honest, Limited Cannabis-Justice Relief',
    body: 'Where the records conclusively show a person was incarcerated for nothing more than simple possession of a drug that is now legal, that conviction is expunged and that person is released. But we do not grant blanket amnesty: many "drug" charges were pleaded down from more serious offenses, and there is no honest way to tell from a possession line on a rap sheet whether it was the whole story. Relief is real but evidence-based — granted only where the record is clear, not handed out wholesale on an assumption.',
  },
  {
    num: '12',
    title: 'Intoxication Is No Excuse — Harsher, Not Softer',
    body: 'Legalizing a drug is a grant of freedom that comes with full responsibility. Voluntary intoxication is never a defense to a crime, and we make it an explicit aggravating factor in sentencing: commit a crime while impaired and the consequence is worse, not lighter. "I was high and didn\'t know what I was doing" is the opposite of a mitigation — you chose to impair yourself, and you own everything that followed. The freedom to use comes paired with zero tolerance for using it as an alibi.',
  },
  {
    num: '13',
    title: 'Evidence-Based Prevention, Not "Just Say No"',
    body: 'DARE-style scare programs failed because kids could see they were lying. We replace them with honest, evidence-based prevention woven into the school health and personal-wellness curriculum — real information about risk, addiction, and the sharp difference between a regulated substance and a fatal one, plus early intervention for kids already at risk. Targeted especially at the 18-45 demographic that overdose is now killing faster than anything else. Honesty prevents more harm than fear ever did.',
  },
] as const

export default function DrugPolicyPage() {
  return (
    <div>
      <IssueHero
        badge="💊 Drug Policy"
        badgeColor="var(--green)"
        title={<>Legalize What Can Be Dosed Safely.<br/><span style={{ color: 'var(--green)' }}>Hunt What Kills by Accident.</span></>}
        subtitle="Overdose is the leading cause of death for Americans 18-45 — a 9/11 every two weeks, ~70% from fentanyl. The War on Drugs treated cannabis like heroin and lost on both. Democrats decriminalized everything and watched Oregon repeal it; Republicans kept cannabis Schedule I and filled prisons with users. We draw the line by lethality, regulate the safe tier like alcohol, and treat the killers like the mass-casualty threat they are — then tax the legal market to fund the treatment system the country never built."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Harm reduction, treatment not jail, decriminalize, legalize cannabis. In practice: Oregon decriminalized all drugs in 2020, overdoses and disorder surged, and voters forced a repeal in 2024. Federal cannabis reform stalled even under a Democratic trifecta. Harm reduction without a recovery pathway became managed decline."
          rep="Secure the border to stop fentanyl, dealers are murderers, just say no, tough enforcement. In practice: a 50-year drug war that left drugs cheaper, purer and deadlier than ever, prisons full of users instead of kingpins, cannabis still Schedule I, and ideological opposition to overdose-reversal tools that demonstrably save lives."
          us="Draw the line by acute lethality. Legalize + regulate the safe-to-dose tier (cannabis, cocaine, LSD, psilocybin, MDMA, mescaline) like alcohol — licensed, 21+, purity-tested, labeled, taxed. The crime becomes unlicensed sale. Tax the legal market to fund on-demand treatment + recovery. Keep fentanyl, heroin, and meth illegal and wage a multi-front supply war (cartels as FTOs, China precursor sanctions, port scanning, fatal-dose dealer liability). Users of the deadly tier get mandatory treatment, not prison. Narcan as a bridge to treatment, no injection sites. Prescription opioids stay tightly controlled medicine. Honest, evidence-based, limited cannabis-justice relief. And voluntary intoxication is no excuse — it is an aggravating factor, never a defense."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">The War We Lost</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="~107K" label="US overdose deaths per year" color="#c8102e" />
          <StatCard num="~70%" label="Of those deaths involve fentanyl" color="#c8102e" />
          <StatCard num="#1" label="Cause of death for Americans 18-45" color="#c8102e" />
          <StatCard num="~10%" label="Of those needing treatment who actually get it" color="#c8102e" />
          <StatCard num="50 yrs" label="War on Drugs — drugs now cheaper, purer, deadlier" color="#c8102e" />
          <StatCard num="3 tiers" label="Legal+regulated / prescription / illegal — by lethality" color="var(--green)" />
          <StatCard num="Tax→Treat" label="Legal-market revenue funds on-demand treatment" color="var(--green)" />
          <StatCard num="0" label="Government injection sites" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Thirteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Legalize by lethality. Regulate like alcohol. Hunt the killers. Tax it to treat it.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <MechanismCard key={m.num} num={m.num} title={m.title} body={m.body} accentColor="var(--green)" />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--gold) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Isn&apos;t Legalizing Cocaine Radical?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            It is well outside where either party stands today — we will say that plainly. But the question is not whether it sounds radical; it is whether it works better than what we are doing, and the bar is on the floor. Alcohol is legal, regulated, taxed, and far more lethal in aggregate than several drugs we imprison people for — and we learned in the 1920s that prohibiting it created Al Capone, not sobriety. The same dynamic runs the modern drug war: prohibition does not eliminate a market, it hands the market to cartels, removes all quality control, and guarantees the product is contaminated. Drawing the line by lethality — regulating what can be dosed safely while hunting what kills by accident — is the consistent application of a principle we already accept for alcohol. It is radical only relative to a status quo that kills 107,000 Americans a year. We would rather be honest and effective than conventional and failing.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--green) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--green)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/crime" className="underline hover:text-white">Crime &amp; criminal justice</Link>: treatment courts, psychedelic-assisted therapy, and the escalation ladder live there — this page carries the legalize/regulate framework and the fentanyl supply war. The intoxication-as-aggravator rule plugs straight into the crime escalation ladder.</li>
            <li>• <Link href="/issues/education" className="underline hover:text-white">Education</Link>: evidence-based drug prevention rides inside the health and personal-wellness curriculum, not a separate failed scare program.</li>
            <li>• <Link href="/issues/healthcare-costs" className="underline hover:text-white">Healthcare costs</Link>: insurance parity for addiction treatment and a captured-FDA critique of the opioid pipeline tie directly to the healthcare plan.</li>
            <li>• <Link href="/issues/immigration" className="underline hover:text-white">Immigration</Link>: cartels-as-FTOs and port-of-entry fentanyl scanning connect to border and enforcement policy.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: CDC overdose mortality data, DEA National Drug Threat Assessment (fentanyl supply chain, precursors, ports of entry), Oregon Measure 110 implementation and 2024 repeal, SAMHSA treatment-gap statistics, National Academies of Sciences review of cannabis health effects, MAPS and Johns Hopkins psilocybin/MDMA trials, Portugal decriminalization outcomes, Prohibition-era enforcement history, opioid-epidemic and FDA/Purdue Pharma litigation record, voluntary-intoxication sentencing doctrine across US jurisdictions.
          </p>
        </div>
      </section>
    </div>
  )
}
