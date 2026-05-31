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
    title: 'Certainty Over Severity — The Frame That Actually Deters',
    body: 'The single most robust finding in criminology: people are deterred by the probability of getting caught, not by the harshness of the punishment if they are. A 90% chance of a swift, proportionate consequence stops crime; a 5% chance of a brutal one does not. So we flip both parties\' instincts. We do not chase ever-longer sentences (the Republican reflex) and we do not stop enforcing (the Democratic drift). We make consequences certain, swift, and proportionate — and we rebuild the clearance rates that make certainty real.',
  },
  {
    num: '02',
    title: 'Violent Stays In, Nonviolent Gets Diverted — With an Escalation Ladder',
    body: 'A sharp, honest line. Violent and predatory offenders — and repeat offenders — face hard accountability and stay incarcerated. Nonviolent first-time offenders are diverted into restitution, treatment, and work programs instead of being sent to crime college. On top of that sits an escalation ladder: each new offense ratchets the consequence up by the offender\'s actual history. The chronic cycle — arrest, release, reoffend, release — ends, because the system finally remembers what someone has already done. A long violent history that culminates in murder reaches the most serious penalties the law allows.',
  },
  {
    num: '03',
    title: 'Fund and Professionalize the Police — Measured on Crimes Solved',
    body: 'We fund the police more, not less — and we demand more in return. More officers, better paid, with higher hiring and training standards, because understaffed departments cannot solve crimes and burned-out cops make bad calls. But federal grant money is tied to clearance-rate improvement and national accreditation — solving crimes and meeting professional standards — never to arrest quotas, which only criminalize the poor to hit a number. We reject "defund." We also reject "fund and ask nothing."',
  },
  {
    num: '04',
    title: 'Expel Bad Cops Permanently — Protect Good Ones',
    body: 'Real accountability that neither party delivers. (a) Reform qualified immunity: keep good-faith protection for genuine split-second judgment calls, strip it for clear, established rights violations. (b) A national decertification registry — an officer fired for misconduct in one state can never quietly rehire in another. (c) Body cameras mandatory, with discipline for tampering. (d) Every death in custody investigated by an independent body, not the officer\'s own department. (e) End the union arbitration contracts that automatically reinstate fired officers. Good cops have nothing to fear; bad cops are gone for good.',
  },
  {
    num: '05',
    title: 'End Mandatory Minimums for Nonviolent — Keep Them for Violent and Repeat',
    body: 'Mandatory minimums took sentencing discretion away from judges and handed it to prosecutors, filling prisons with low-level offenders serving decades. We end them for nonviolent crimes — judges regain discretion to fit the sentence to the person and the facts. For violent crimes and repeat offenders we keep and strengthen them, so the worst actors cannot plea their way to a slap on the wrist. Discretion where it makes us more just; certainty where it makes us safer.',
  },
  {
    num: '06',
    title: 'End Private Prisons',
    body: 'No one should profit from a human being in a cell. Private prisons have a financial incentive to keep beds full, lobby for harsher sentencing, and cut corners on safety and rehabilitation to protect margins. We end the federal use of private prisons and condition federal corrections funding on states phasing them out. Incarceration is a power the state wields on behalf of justice — never a revenue line on a corporation\'s balance sheet.',
  },
  {
    num: '07',
    title: 'Make Prison Rehabilitate — Or It Is Just Crime College',
    body: 'Roughly 68% of released prisoners are rearrested within three years. That is a system manufacturing repeat customers. We fix it: GED, trade certification, and job training mandatory inside prison; a guaranteed job-placement program and housing transition on the way out; and earned-time credits that shorten sentences for completing real programs (the First Step Act model, expanded). Paired with ban-the-box for nonviolent offenders who have served their time — employers cannot auto-reject them, while keeping access to records for genuinely relevant roles. A person who leaves prison with a skill, a job, and a place to live does not come back.',
  },
  {
    num: '08',
    title: 'Risk-Based Pretrial — End Cash Bail Without Releasing the Dangerous',
    body: 'Cash bail means a rich defendant walks and a poor defendant sits in jail for weeks awaiting trial on the identical charge — wealth, not danger, decides freedom. But the Democratic answer, blanket no-cash-bail, released genuinely dangerous people who reoffended. We do neither. Pretrial release or detention is decided by a flight-risk and danger assessment: low-risk defendants are released, often with monitoring; high-risk and violent defendants are held. The question becomes "are you dangerous," not "are you rich."',
  },
  {
    num: '09',
    title: 'Stop Using Jails as Asylums — Real Mental-Health and Addiction Treatment',
    body: 'Deinstitutionalization emptied the mental hospitals and quietly made jails and the streets the new asylums. We reverse it. (a) Trained crisis-response teams handle non-violent mental-health calls, alongside or instead of armed police. (b) Treatment courts — drug courts, mental-health courts — divert addiction and mental illness into supervised treatment instead of incarceration. (c) Secure mental-health facilities are rebuilt for the seriously mentally ill who cannot safely live unsupervised. (d) We fund and legalize psychedelic-assisted therapy (psilocybin, MDMA) where the evidence supports it for addiction, PTSD, and treatment-resistant conditions, with an opt-in pathway into supervised experimental treatment trials. The cheapest way to cut crime is to treat the illness driving it.',
  },
  {
    num: '10',
    title: 'Victims First — Fair, Achievable Restitution',
    body: 'Victims are the forgotten party in both parties\' systems. We put them first: guaranteed victim services, the right to be notified and heard, and restitution paid by the offender — garnished from prison and post-release work wages over time. Restitution runs on a fair, standardized schedule, not open-ended lawsuits demanding amounts no one could ever pay. The formula accounts for what an offender can realistically earn, so restitution is actually collected rather than becoming a symbolic number that helps no one. Real money to real victims, on terms that work.',
  },
  {
    num: '11',
    title: 'The Death Penalty — Narrowed, Certain, and Proof-Proofed',
    body: 'We keep the death penalty but reserve it for the worst of the worst — mass murder, terrorism, the murder of a child — and for the violent habitual offender whose escalating record culminates in murder. And we close the nightmare scenario of executing an innocent person: a conviction is death-eligible only under a conclusive-evidence standard (DNA or equivalently definitive proof), not on contested circumstantial cases. Reserved, certain, and guarded against the one mistake that can never be undone.',
  },
  {
    num: '12',
    title: 'Enforce Gun Crimes Hard — Rights Debate Lives Elsewhere',
    body: 'This is the criminal-justice piece, not the ownership debate. We enforce the gun laws already on the books, hard: straw purchases, trafficking rings that funnel firearms to prohibited buyers, and felon-in-possession cases are prosecuted seriously instead of pled away. Going after the actual pipeline of crime guns is something the overwhelming majority of gun owners support. The question of lawful ownership and Second Amendment rights is its own platform — see the Second Amendment sub-issue.',
  },
  {
    num: '13',
    title: 'Juveniles — Never Tried as Adults, Redirected Through a Service Corps',
    body: 'Children are not adults and we stop sentencing them as if they were — no minor is tried in adult court. Instead, the court can divert a juvenile offender into a structured military-style service corps modeled on the National Guard Youth ChalleNGe program: discipline, physical training, GED and job skills, and mentorship. It is offered as a real alternative to detention and chosen by the juvenile (a chosen alternative, not unconstitutional forced labor) — but the alternative is genuine consequences. Graduates who qualify can roll into actual military service. Nonviolent juvenile records are sealed so a teenage mistake does not become a life sentence on a job application. We catch kids before they are lost, instead of finishing the job of losing them.',
  },
  {
    num: '14',
    title: 'Federal Standards, Local Enforcement',
    body: 'Crime fighting is overwhelmingly a local job, and it stays that way. The federal role is to set the accountability floor — the national decertification registry, body-camera and in-custody-death-investigation standards, clearance-rate-based grant criteria — and to tie federal dollars to meeting it. Washington incentivizes and standardizes; your local police department and district attorney, accountable to your community, run the actual work.',
  },
] as const

export default function CrimePage() {
  return (
    <div>
      <IssueHero
        badge="⚖️ Crime & Criminal Justice"
        badgeColor="var(--green)"
        title={<>Certain Justice. <span style={{ color: 'var(--green)' }}>Safer Streets.</span></>}
        subtitle="America has the highest incarceration rate on Earth and solves barely half its murders. We lock up more people than anyone and deter crime worse than our peers. Democrats stopped enforcing; Republicans stopped reforming. We do the thing criminology actually proves works: make consequences certain, not just harsh — and make prison stop manufacturing repeat offenders."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Reform mass incarceration, end cash bail, address root causes, police accountability. In practice: the 2020 'defund' wave preceded crime spikes in cities they run, decline-to-prosecute DAs (two recalled/ousted), blanket no-cash-bail releases that freed reoffenders. Root-causes framing too often becomes an excuse for no enforcement now."
          rep="Back the blue, law and order, lock them up, victims first. In practice: built the highest incarceration rate on Earth without making us the safest, shielded bad officers behind full qualified immunity and union arbitration, warehoused low-level offenders for decades, and let private prisons profit from full beds."
          us="Certainty over severity — high clearance rates + swift proportionate consequences. Violent stay in, nonviolent diverted, escalation ladder for repeat offenders. Fund + professionalize police, grants tied to crimes solved. Reform qualified immunity + national decertification registry + body cams + independent in-custody-death review + no auto-reinstatement. End mandatory minimums for nonviolent, keep for violent/repeat. End private prisons. Mandatory in-prison rehab + reentry + earned time. Risk-based pretrial, no cash bail. Crisis teams + treatment courts + rebuilt secure mental-health facilities + psychedelic-assisted treatment. Victims first with fair, achievable restitution. Death penalty narrowed to the worst-of-worst under a conclusive-evidence standard. Enforce gun crimes hard. Juveniles never tried as adults — redirected through a service corps. Federal standards, local enforcement."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">Most Incarceration, Least Deterrence</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="~1.8M" label="People incarcerated in the US — highest rate on Earth" color="#c8102e" />
          <StatCard num="5% / 20%" label="US share of world population / world prisoners" color="#c8102e" />
          <StatCard num="~68%" label="Rearrested within 3 years of release" color="#c8102e" />
          <StatCard num="~50%" label="Murders that are actually solved (cleared)" color="#c8102e" />
          <StatCard num="~12%" label="Burglaries that are actually solved" color="#c8102e" />
          <StatCard num="Certainty" label="What deters crime — not severity (criminology consensus)" color="var(--green)" />
          <StatCard num="0" label="Private prisons under our plan" color="var(--green)" />
          <StatCard num="Victims" label="Put first — guaranteed services + fair restitution" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Fourteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Tough on violent crime. Smart on everything else. Honest about what actually deters.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Why Not Just &ldquo;Tough on Crime&rdquo; or Just &ldquo;Reform&rdquo;?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Both slogans fail on the evidence. &ldquo;Tough on crime&rdquo; gave America the highest incarceration rate on Earth and worse deterrence than peer nations — because severity is not what stops a would-be offender; the odds of getting caught are, and our collapsed clearance rates mean most crime goes unpunished entirely. &ldquo;Reform&rdquo; that stops enforcing or releases dangerous people produces the crime spikes that destroy the political coalition for any reform at all. The honest path uses each tool where the data says it works: certainty and rehabilitation drive recidivism down, hard accountability keeps violent predators off the street, and victims — forgotten by both camps — come first. Tough where toughness works. Smart where smartness works. Measured by results, not by which slogan wins the news cycle.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--green) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--green)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/education" className="underline hover:text-white">Education</Link>: funded trade schools, the service corps, and in-prison job training are the same idea — give people a skill and a path so crime is not the only option.</li>
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: clearance-rate-based police grants and outcome-measured corrections are the same outcomes-over-spending principle applied to public safety.</li>
            <li>• <Link href="/issues/healthcare-costs" className="underline hover:text-white">Healthcare costs</Link>: treatment courts and rebuilt mental-health facilities move addiction and mental illness out of the jail system and into the health system, where it is cheaper and works.</li>
            <li>• The <strong className="text-white">Second Amendment</strong> sub-issue (coming) carries the gun-ownership and rights debate; this page handles only the enforcement of gun crimes.</li>
            <li>• <strong className="text-white">Drug policy</strong> (coming) carries fentanyl and cannabis specifics; this page handles only the criminal-justice overlap.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: Bureau of Justice Statistics (incarceration counts, recidivism), FBI Uniform Crime Report / NIBRS (clearance rates), National Institute of Justice on certainty vs. severity of punishment, First Step Act outcomes data, National Registry of Exonerations (wrongful convictions), National Guard Youth ChalleNGe program evaluations, MAPS and Johns Hopkins trials on psilocybin- and MDMA-assisted therapy, Prison Policy Initiative (private prisons), West Virginia v. Barnette and qualified-immunity case law (Pierson v. Ray, Harlow v. Fitzgerald).
          </p>
        </div>
      </section>
    </div>
  )
}
