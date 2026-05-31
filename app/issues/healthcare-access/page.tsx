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
    title: 'A Universal Critical-Care Floor — Funding What We Already Do',
    body: 'Everyone gets life-threatening and critical care. No one dies in the street and no one goes bankrupt from a heart attack or a car wreck. This is not a new handout — and here is the part nobody says out loud: emergency rooms have been legally required to treat everyone regardless of ability to pay since 1986 (the EMTALA law). The uninsured already walk in, get treated, and do not pay — and hospitals recover that loss by padding everyone else\'s bills, so you already pay for it through a hidden tax baked into inflated charges and higher premiums. A funded critical-care floor does not add a giveaway; it replaces that dishonest cost-shift with an honest, cheaper system. We already pay for this. We should pay for it on purpose, and pay less.',
  },
  {
    num: '02',
    title: 'Comprehensive Coverage You Earn by Paying In',
    body: 'Above the critical floor sits comprehensive coverage — routine care, chronic-disease management, preventive medicine, elective procedures. You get it if you contribute, through your employer or directly. If you do not contribute, you still have the critical-care floor — you will never be left to die — but you do not receive full comprehensive coverage for free. This is the anti-handout principle built into the architecture itself: catastrophe is covered for everyone as a matter of basic decency and honest accounting, but comprehensive care is earned by paying into the system like everyone else.',
  },
  {
    num: '03',
    title: 'Who Contributes, and Who Is Covered Without It',
    body: 'Contribution is expected from able-bodied working-age adults — the people who can pay in. It is not expected from those who cannot: children, the seriously disabled, the elderly, and full-time caregivers are covered without a work-based contribution, because they are not free-riders, they are the people a decent system exists to protect. The line is drawn at capacity, not at circumstance: if you can contribute, you do, and you get comprehensive coverage for it. If you genuinely cannot, you are covered anyway. What ends is the middle case — the able adult who chooses not to pay in and expects full coverage for free.',
  },
  {
    num: '04',
    title: 'Employers Pay Per Head Into a Portable Pool',
    body: 'Employers contribute a per-employee amount into a general healthcare pool. Two deliberate design choices fix what is broken about today\'s employer insurance. First, the money funds a portable pool, not a job-locked plan — your coverage follows you, so getting laid off or changing jobs never means losing your healthcare at the exact moment you need it most. Second, the contribution is graduated to protect hiring: small businesses get a carve-out or reduced rate so the system does not punish a five-person shop the way it would a corporation, and a predictable per-head charge means hiring one more worker carries a known cost rather than an open-ended payroll penalty.',
  },
  {
    num: '05',
    title: 'Individual Buy-In + Redirecting Money We Already Spend',
    body: 'The self-employed, gig workers, and anyone without an employer buy into the same pool directly, on the same terms. And we fund the floor largely by restructuring, not just taxing: the United States already spends enormous public money on Medicare, Medicaid, ACA subsidies, and the tax exclusion for employer insurance — collectively more than enough to anchor a universal critical floor. We redirect that existing spend into a coherent system instead of a fragmented patchwork, and fill only the real gap rather than bolting a brand-new entitlement on top of the old ones.',
  },
  {
    num: '06',
    title: 'Kill the Cost-Shift',
    body: 'The single most infuriating thing about American healthcare is that you are quietly billed for other people\'s unpaid care. Hospitals treat the uninsured at a loss (as the law requires), then recover it by inflating the bills of everyone with insurance — a $40 aspirin, a $9,000 stitch. Once the critical floor is funded, that justification disappears, and we hold hospitals to it: no more padding insured patients\' bills to cover uncompensated care, because the care is now compensated. The hidden tax everyone pays through absurd charges comes off the books.',
  },
  {
    num: '07',
    title: 'Honest Prices — Especially Where You Cannot Shop',
    body: 'Healthcare is not a normal market — you cannot comparison-shop during a heart attack, which makes the emergency room the ultimate captive market. So we apply the same principle as the rest of our economic platform: where the patient is captive, price is regulated; where the patient can genuinely choose, the market sets it. That means a ban on surprise billing, real up-front price transparency, and markup caps on captive-market care. The detailed pricing machinery — drug reference pricing, PBM reform, site-neutral payments, the HSA architecture — lives on the Economics healthcare-costs plan; this page guarantees that the access system is built on honest prices instead of the chargemaster fiction.',
  },
  {
    num: '08',
    title: 'Treat the Cause, Not Just the Symptom — Including Alternative Medicine',
    body: 'American medicine is built to bill for managing symptoms forever rather than curing the underlying problem. We shift the incentive toward root-cause care: covered, evidence-backed preventive and functional medicine, nutrition and metabolic health, and emerging treatments like peptide therapies brought through a real FDA evaluation pathway so they are available as legitimate medicine rather than gray-market guesswork. The guardrail is evidence — we cover what can be shown to work, not snake oil — and these treatments are HSA-usable. A system that fixes the cause is both more humane and far cheaper than one that bills monthly for the symptom.',
  },
  {
    num: '09',
    title: 'Coverage Is Not Access — Fix the Care Desert',
    body: 'A coverage card means nothing if there is no doctor within fifty miles. Rural hospitals are closing, whole regions have no specialists, and the doctor shortage is worsening. We attack access directly: support to keep rural hospitals open, full telehealth expansion so a specialist is a video call away, scope-of-practice reform so nurse practitioners and physician assistants can practice to the top of their training, and scholarship-for-service programs that pay for medical and nursing school in exchange for years served in underserved areas. Real access means a provider you can actually reach, not just a plan you are enrolled in.',
  },
  {
    num: '10',
    title: 'Keep Medicare, Fold Medicaid Into the Floor',
    body: 'Medicare stays intact for seniors. It fits the contributory principle exactly — people paid into it across an entire working life and earned it, and we do not break that promise. Medicaid, the patchwork safety-net program with a coverage gap that swallows millions in non-expansion states, is folded into the universal critical-care floor plus subsidized buy-in to comprehensive coverage. One coherent floor for everyone replaces the state-by-state lottery of whether a poor person in one state is covered while an identical person across the state line is not.',
  },
  {
    num: '11',
    title: 'Mental Health and Chronic Care Are Real Medicine',
    body: 'Mental-health and chronic-disease care are part of comprehensive coverage, at full parity with physical and acute care — not a carved-out afterthought with separate, stingier rules. This connects directly to the treatment courts and rebuilt mental-health facilities on the Crime & Criminal Justice plan and the addiction-treatment system on the Drug Policy plan: the same coverage that treats diabetes treats depression and addiction, because they are the same kind of problem — chronic conditions that are cheaper to manage well than to ignore until they become emergencies.',
  },
  {
    num: '12',
    title: 'The Line on Comprehensive Coverage',
    body: 'The critical-care floor is for every human being physically present — that is both the law and basic decency, and it is the one thing no one is ever denied. Taxpayer-funded comprehensive coverage is not. People in the country illegally, and able adults who simply choose not to contribute, receive emergency and life-saving care but not free comprehensive coverage funded by everyone else. This is the same standard nearly every developed nation applies, and it is the honest reconciliation of the two things most Americans believe at once: that no one should die for lack of care, and that comprehensive healthcare is something you pay into rather than something you are simply handed.',
  },
] as const

export default function HealthcareAccessPage() {
  return (
    <div>
      <IssueHero
        badge="🏥 Healthcare Access"
        badgeColor="var(--green)"
        title={<>Critical Care for All.<br/><span style={{ color: 'var(--green)' }}>Comprehensive Care You Earn.</span></>}
        subtitle="The US spends ~18% of GDP on healthcare — roughly double our peers — for worse outcomes and ~26 million still uninsured. Democrats want a single-payer handout that dies every time they hold power; Republicans spent fifteen years trying to repeal with nothing to replace it. We do neither: a funded critical-care floor so no one dies in the street, comprehensive coverage you earn by paying in, and honest prices instead of the chargemaster fiction."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Healthcare is a right, Medicare for All, public option, protect the ACA. In practice: Medicare for All dies even with full control of government, the public option gets dropped every time, the ACA expanded coverage but let premiums and deductibles soar without controlling cost, and the model subsidizes the existing overpriced system rather than restructuring it."
          rep="Repeal the ACA, market competition, choice, block-grant to states. In practice: tried to repeal with no replacement (failed by one vote in 2017), produced no coherent coverage plan in fifteen years, left ~26 million uninsured, and kept the WWII-accident of job-locked insurance that vanishes the moment you are laid off."
          us="A three-layer model. (1) A funded universal critical-care floor — no one dies in the street, replacing the dishonest cost-shift we already pay through EMTALA. (2) Comprehensive coverage earned by contributing, through an employer or directly — not a free handout. (3) Funded by a graduated per-head employer contribution into a portable pool + individual buy-in + redirecting the money we already spend. Plus: kill the cost-shift, regulate captive-market prices, cover root-cause and evidence-backed alternative medicine, fix rural and access deserts, keep Medicare intact, fold Medicaid into the floor. The floor is for everyone; free comprehensive coverage is not."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">Most Spending, Worst Value</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="~18%" label="Of US GDP spent on healthcare — ~2x peer nations" color="#c8102e" />
          <StatCard num="~26M" label="Americans uninsured" color="#c8102e" />
          <StatCard num="#1" label="Medical debt — leading cause of US bankruptcy" color="#c8102e" />
          <StatCard num="1986" label="Year ERs were required to treat all — and never funded for it" color="#c8102e" />
          <StatCard num="Floor" label="Critical care for everyone — no one dies in the street" color="var(--green)" />
          <StatCard num="Earn it" label="Comprehensive coverage by contributing, not by handout" color="var(--green)" />
          <StatCard num="Portable" label="Coverage follows the person, not the job" color="var(--green)" />
          <StatCard num="Root cause" label="Cover what cures, not just what bills monthly" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Twelve Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Critical care for all. Comprehensive care you earn. Honest prices for everyone.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Is the Critical Floor Just Single-Payer in Disguise?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            No — and the difference is the whole point. Single-payer makes the government the only insurer for everything, comprehensive care included, funded by everyone whether they contribute or not. Our model guarantees only the critical floor universally — the catastrophic, life-or-death care that emergency rooms are already legally forced to provide and that we already pay for through inflated bills. Above that floor, comprehensive coverage is earned by contributing, and private insurance and the HSA system still operate. We are not nationalizing medicine; we are funding honestly the one thing we already do dishonestly, ending the hidden cost-shift, and keeping comprehensive care on an earn-it basis. It is a floor, not a ceiling — and it is built on the conviction that no one should die for lack of care while no one should get a free comprehensive ride either.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--green) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--green)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/healthcare-costs" className="underline hover:text-white">Healthcare costs</Link> (Economics): the pricing engine — drug reference pricing, PBM reform, site-neutral payments, the universal HSA from birth. This page is the coverage architecture; that page is how we make care affordable underneath it.</li>
            <li>• <Link href="/issues/drug-policy" className="underline hover:text-white">Drug policy</Link>: addiction treatment with full insurance parity, plus the captured-FDA critique behind the opioid epidemic, tie straight into comprehensive coverage and the root-cause approach.</li>
            <li>• <Link href="/issues/crime" className="underline hover:text-white">Crime &amp; criminal justice</Link>: mental-health parity here funds the treatment courts and rebuilt mental-health facilities there — the same coverage that treats the illness keeps it out of the jail system.</li>
            <li>• <Link href="/issues/immigration" className="underline hover:text-white">Immigration</Link>: the line between universal critical care and earned comprehensive coverage is consistent with the broader single-standard immigration framework.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: CMS National Health Expenditure data (~18% of GDP), Census Bureau uninsured estimates, EMTALA (Emergency Medical Treatment and Labor Act, 1986) and uncompensated-care cost-shift studies, Consumer Financial Protection Bureau on medical debt and bankruptcy, OECD health-outcome comparisons, Kaiser Family Foundation on Medicaid expansion gaps and employer-sponsored insurance, rural-hospital-closure tracking (Sheps Center), scope-of-practice outcome research, FDA peptide and compounding guidance.
          </p>
        </div>
      </section>
    </div>
  )
}
