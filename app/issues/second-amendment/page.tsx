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
    title: 'The Right Is Settled — Start There',
    body: 'The Second Amendment protects an individual right to keep and bear arms. The Supreme Court settled it in Heller (2008) and Bruen (2022), and we are not going to relitigate it or pretend otherwise. Honest gun policy starts by accepting the constitutional reality both parties play games with: the right is real, and so are the long-standing limits the same rulings affirmed — felons, domestic abusers, and the dangerously mentally ill can be prohibited, and "dangerous and unusual" weapons can be regulated. The lane is well-defined. We legislate inside it instead of grandstanding at its edges.',
  },
  {
    num: '02',
    title: 'Aim the Policy Where the Deaths Actually Are',
    body: 'Roughly 48,000 Americans die by guns each year — and about 55% of those are suicides, not homicides. Of the homicides, the overwhelming majority are committed with handguns by repeat offenders, gangs, and trafficked guns — not with legally owned rifles. Yet nearly every political fight is about rifles that account for a low single-digit share of gun homicides. We refuse the theater. We aim the money and the law at where the deaths actually happen: suicide prevention, repeat-offender and trafficking enforcement, and school security. Policy measured by lives saved, not by which scary-looking gun made the news.',
  },
  {
    num: '03',
    title: 'Fix the Background-Check System — Checks Without a Registry',
    body: 'The background-check system is broken in a way both parties ignore: the Sutherland Springs shooter passed his check because the Air Force never uploaded his conviction. So first, we fix NICS — mandatory, complete record upload, accurate and instant, with a hard time limit so a delay can never become a backdoor denial. Then we extend background checks to all sales, including private transfers, to close the gap that lets prohibited people buy with no check at all. The critical guardrail: this is a check, not a registry. The system verifies the buyer is not a prohibited person and returns yes or no — it does not log which gun was bought or build a federal list of who owns what. Confiscation requires a list; we never build the list. Prevention without the registry the confiscation fear is actually about.',
  },
  {
    num: '04',
    title: 'No Cosmetic Bans — Honesty About "Assault Weapons"',
    body: 'We reject feature-based "assault weapon" bans and magazine-capacity limits, because they are theater that does not track lethality. The AR-15 is defined as an "assault weapon" by pistol grips, adjustable stocks, and flash hiders — cosmetic features — while a wooden-stocked rifle firing the identical cartridge at the identical rate is left untouched. The 1994 federal ban produced no measurable effect on crime, by the Justice Department\'s own study, because rifles of all kinds are involved in a low single-digit percentage of gun homicides. Banning a gun by how it looks is a way to claim action without taking any. We will not do it, and we will say plainly why.',
  },
  {
    num: '05',
    title: 'Red-Flag Removal — But Due Process First, Always',
    body: 'When someone is a genuine danger to themselves or others — a credible suicide threat, a specific threat of violence — a court can temporarily remove their firearms. This is the single highest-leverage life-saver available, given the suicide majority and the long record of mass shooters who broadcast warning signs. But it happens only with ironclad due process: a judicial hearing before a real judge, a clear evidence standard, the right to counsel, a defined and limited duration with automatic return, and serious penalties for anyone who files a false claim. We reject both the Republican refusal to have any such tool and the blue-state versions that let guns be seized on thin process. The danger is real; so is the right. Due process is how we honor both.',
  },
  {
    num: '06',
    title: 'Center Suicide Prevention — The 55% No One Talks About',
    body: 'More than half of all gun deaths are suicides, and they are nearly absent from the political debate. We put them at the center. Free and subsidized safe-storage devices; partnerships with gun shops and ranges on suicide-prevention awareness (a model gun owners themselves have led); and programs focused on veterans, who are tragically overrepresented and connect directly to our veterans and mental-health commitments. We will fund and study voluntary cooling-off options for impulse suicides without mandating waiting periods that burden lawful purchasers — following the evidence on what actually saves lives rather than imposing blanket delays.',
  },
  {
    num: '07',
    title: 'National Concealed-Carry Reciprocity',
    body: 'A concealed-carry permit valid in one state should be valid in all of them, the same way a driver\'s license is. A law-abiding permit holder should not become a felon for crossing a state line. National reciprocity recognizes that the right does not stop at a state border, while still running through the permit system — background check, training where a state requires it — rather than the absolutist no-permit-anywhere approach. Your rights, and your responsibilities, travel with you.',
  },
  {
    num: '08',
    title: 'Prohibited Persons — Enforce Hard, With an Honest Restoration Path',
    body: 'The existing prohibited-person categories — violent felons, domestic abusers, the adjudicated dangerously mentally ill — are kept and enforced hard. This is the same felon-in-possession and trafficking enforcement that the Crime & Criminal Justice plan prosecutes seriously instead of pleading away — the actual driver of gun homicide. But we pair enforcement with an honest restoration pathway: a nonviolent felon who has served their sentence and stayed clean can petition to have their rights restored, because a permanent rights-stripping for a decades-old nonviolent offense is not justice. Enforce the line hard; keep a fair door back through it.',
  },
  {
    num: '09',
    title: 'Safe Storage — Incentivize, Never Punish the Victim',
    body: 'We promote safe storage the right way: free and subsidized lock boxes, safes, and trigger locks, and voluntary safety and marksmanship training encouraged and made accessible. What we do not do is build a mandatory-storage criminal scheme that turns a gun-theft victim into a criminal, or that dictates how a citizen stores a firearm in their own home in a way the courts have questioned. Make the safe choice the easy, cheap, well-understood choice — and trust responsible adults to make it.',
  },
  {
    num: '10',
    title: 'Harden Schools and Fix the Response Failures',
    body: 'School security ties to the scaled-security mechanism on the Crime & Criminal Justice plan — security matched to each school\'s actual need, not a one-size mandate. On top of that, we fix the failure points the recent massacres exposed: single, controlled points of entry and physical hardening funded by federal grants; behavioral threat-assessment teams that act on warning signs before a shooting (most school shooters telegraph intent); anonymous tip lines that actually get followed up; and clear, drilled law-enforcement response protocols with accountability, because Uvalde was not a gun-law failure — it was 77 minutes of officers standing in a hallway while children died. Prevention upstream, hardening at the door, and a response that actually responds.',
  },
  {
    num: '11',
    title: 'Fund Mental Health — Because That Is the Actual Problem',
    body: 'The gun-death problem is, to a remarkable degree, a mental-health and suicide problem wearing a gun-policy costume. So we fund the thing that addresses it: the mental-health parity in our Healthcare Access plan, the crisis-response teams and rebuilt mental-health facilities in our Crime plan, and the veteran mental-health focus throughout. A country that funded mental-health care the way it funds gun-control press conferences would save far more lives. We would rather treat the despair and the crisis than stage another debate over rifle furniture.',
  },
  {
    num: '12',
    title: 'The Crime Side Lives Next Door',
    body: 'This page is about the rights of lawful owners and the policies that actually reduce death. The enforcement war on the criminal gun supply — straw purchasers, trafficking rings that funnel handguns to prohibited buyers, and felon-in-possession prosecution — is carried in full on the Crime & Criminal Justice plan, because that is where the homicides actually come from. The two plans are one design: protect the law-abiding owner, and relentlessly pursue the criminal supply. Most gun owners support exactly that combination, and so do we.',
  },
] as const

export default function SecondAmendmentPage() {
  return (
    <div>
      <IssueHero
        badge="🔫 Second Amendment"
        badgeColor="var(--green)"
        title={<>The Right Is Settled.<br/><span style={{ color: 'var(--green)' }}>Aim Policy Where the Deaths Are.</span></>}
        subtitle="~48,000 Americans die by guns each year — and ~55% are suicides almost no policy addresses. Democrats fight cosmetic 'assault weapon' bans that the government's own study found had no effect; Republicans block even due-process red-flag tools and refuse to fund mental health. We affirm the individual right the Supreme Court already confirmed, restrict only the genuinely dangerous with real due process, and put the money where the dying actually happens."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Common-sense gun safety, ban assault weapons, universal background checks, weapons of war off our streets. In practice: bans defined by cosmetic features that do not track lethality, a 1994 ban the DOJ found had no measurable effect, and a focus on the law-abiding rifle owner while the handgun homicides driven by repeat offenders they decline to prosecute go unaddressed."
          rep="Shall not be infringed, good guy with a gun, constitutional carry, defend the 2A absolutely. In practice: strong on rights but near-zero on prevention — block red-flag laws even with due process, resist fixing the background-check system's known gaps, and offer thoughts and prayers instead of funding mental health, suicide prevention, or the school-response failures."
          us="Affirm the individual right (Heller, Bruen). Fix the background-check system and extend checks to all sales — but as a check, never a registry. No cosmetic 'assault weapon' bans or magazine limits — they are theater. Due-process-first red-flag removal (judicial hearing, counsel, automatic return, penalties for false claims). Center the suicide majority with safe storage + veteran focus. National concealed-carry reciprocity. Keep + enforce prohibited-person categories with a restoration path for nonviolent felons. Incentivize safe storage, never punish the victim. Harden schools + fix the response failures. Fund mental health — the actual problem. The criminal-supply war lives on the Crime plan next door."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">Where the Debate Isn&apos;t Looking</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="~48K" label="US gun deaths per year" color="#c8102e" />
          <StatCard num="~55%" label="Of gun deaths that are suicides" color="#c8102e" />
          <StatCard num="~3%" label="Of gun homicides involving rifles of any kind" color="#c8102e" />
          <StatCard num="$0 effect" label="DOJ-measured crime effect of the 1994 'assault weapon' ban" color="#c8102e" />
          <StatCard num="Settled" label="Individual right — Heller (2008), Bruen (2022)" color="var(--green)" />
          <StatCard num="No registry" label="Background checks verify the buyer, not log the gun" color="var(--green)" />
          <StatCard num="Due process" label="Required before any red-flag removal" color="var(--green)" />
          <StatCard num="77 min" label="Uvalde police delay — a response failure, not a gun-law one" color="var(--gold)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Twelve Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Rights affirmed. Dangerous restricted with due process. Money where the deaths actually are.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Universal Background Checks Without a Registry — How?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            The honest fear behind opposition to universal checks is not the check itself — it is that a record of every sale becomes a federal list of who owns what, and a list is what confiscation requires. So we separate the two. Extending checks to private sales means a private seller runs the buyer through the same instant system a dealer uses and gets back a simple yes or no: is this person prohibited? What we do not do is record the make, model, or serial number of the gun, or store the transaction in a federal database. Several mechanisms make this real — point-of-sale verification that logs only the check result, not the firearm; legal prohibition on any federal gun registry (already law, and we keep it); and audited penalties for any official who tries to build one. Gun owners get what they actually want — no list — and the public gets what it actually wants — prohibited people stopped at the point of sale. The registry fear is legitimate; we resolve it by design rather than dismissing it.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--green) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--green)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/crime" className="underline hover:text-white">Crime &amp; criminal justice</Link>: the enforcement war on straw purchases, trafficking, and felon-in-possession — the actual source of gun homicide — lives there. This page handles lawful ownership and rights.</li>
            <li>• <Link href="/issues/healthcare-access" className="underline hover:text-white">Healthcare access</Link>: mental-health parity funds the suicide-prevention and crisis care that the majority of gun deaths actually require.</li>
            <li>• <Link href="/issues/education" className="underline hover:text-white">Education</Link>: the scaled school-security mechanism and threat-assessment teams connect school hardening to the broader safe-schools plan.</li>
            <li>• <Link href="/issues/drug-policy" className="underline hover:text-white">Drug policy</Link>: gang and trafficking violence overlaps the illegal-drug supply war — the same criminal networks, pursued the same way.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: District of Columbia v. Heller (2008), New York State Rifle &amp; Pistol Association v. Bruen (2022), CDC gun-death and suicide data, FBI Uniform Crime Report on weapon types in homicide, National Institute of Justice / DOJ evaluation of the 1994 Federal Assault Weapons Ban, NICS background-check audits and the Sutherland Springs reporting failure, Robb Elementary (Uvalde) Texas House investigative report, extreme-risk-protection-order due-process research, VA veteran-suicide statistics, federal Firearm Owners Protection Act prohibition on a national registry.
          </p>
        </div>
      </section>
    </div>
  )
}
