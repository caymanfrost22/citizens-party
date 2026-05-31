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
    title: 'One National Line — Legal Through 15 Weeks, Everywhere',
    body: 'Abortion is legal nationwide through the first 15 weeks of pregnancy. This is the line most of the developed world draws — France allows it to 14 weeks, Germany to 12 — and it is where American public opinion has sat, stably, for fifty years: a strong majority supports legal early abortion and a strong majority supports restricting it later. About 93% of US abortions already occur before 13 weeks, so a 15-week line keeps the vast majority of real-world cases fully legal while drawing an honest boundary. We end the chaotic 50-state patchwork that Dobbs created — the "abortion tourism," the woman who is legal in one state and a criminal across the line — and replace it with one clear national standard.',
  },
  {
    num: '02',
    title: 'After 15 Weeks — Enforced Through Medicine, Not Handcuffs',
    body: 'After 15 weeks, elective abortion is no longer an available procedure — but here is the crucial design choice that resolves the false dilemma both sides fight over: the limit is enforced the way Europe enforces it, through the medical system and provider licensing, not the criminal courts. A clinic that performs elective abortions past the line faces regulatory and licensing consequences. The woman is never charged with a crime. No one goes to prison. "Illegal" means "not offered as an elective procedure past the line," not "we prosecute people" — exactly how the 12-to-15-week European systems operate, where the limits are real and yet no one is sitting in a cell over them.',
  },
  {
    num: '03',
    title: 'Real Exceptions That Apply at Any Stage',
    body: 'The genuinely hard cases are always legal, at any point in the pregnancy: the life of the mother, a serious threat to her health, rape, incest, and a fatal fetal anomaly where the baby cannot survive. These are rare, they are morally heavy, and they dominate the debate precisely because they are where good people of conscience agree the answer cannot be "no." A near-total ban with no real exceptions — the thing several states passed after Dobbs — polls underwater even among pro-life voters because it forces the cruelest outcomes. We refuse that. The line at 15 weeks governs the elective decision; it never traps a woman in a medical catastrophe or punishes a victim.',
  },
  {
    num: '04',
    title: 'Never Prosecute the Woman. Never Prosecute the Good-Faith Doctor.',
    body: 'No woman is ever criminally prosecuted for an abortion — not before the line, not after it. And no physician acting in good faith is prosecuted for performing a procedure within the law, exercising medical judgment on an exception, or treating an emergency. The post-Dobbs nightmare — doctors consulting lawyers before treating a hemorrhaging patient, women investigated over miscarriages — ends. The enforcement of the 15-week line lives entirely in medical regulation of elective providers, and it is built so that fear of prosecution can never stand between a woman and the care she needs.',
  },
  {
    num: '05',
    title: 'Emergency and Miscarriage Care Is Always Protected',
    body: 'Treating a miscarriage, an ectopic pregnancy, or any maternal emergency is medical care, full stop — never an abortion question, never prosecutable, never delayed by legal fear. Several state bans were written so carelessly that emergency rooms turned away women with non-viable or life-threatening pregnancies because doctors feared prosecution. That is indefensible and we end it explicitly: a clear, statutory guarantee that emergency and miscarriage management is always lawful, regardless of the elective line. No woman should ever bleed in a parking lot while a hospital lawyer reads a statute.',
  },
  {
    num: '06',
    title: 'Government Otherwise Stays Out',
    body: 'Below the line, the decision is between a woman, her doctor, and her conscience — not the government\'s. We are not interested in surveilling pregnancies, tracking women across state lines, policing private medical decisions, or turning the early-term choice into a criminal matter. Government draws exactly one honest line — the 15-week elective limit with real exceptions — and otherwise gets out of the most personal decision a person can face. One clear boundary, then restraint. That is the whole of the government\'s role.',
  },
  {
    num: '07',
    title: 'No Taxpayer Funding — Including Planned Parenthood',
    body: 'Federal taxpayer dollars do not fund abortion. We codify the long-standing Hyde principle into permanent law rather than leaving it to an annual fight, and we end federal funding flowing to Planned Parenthood and other abortion providers. People who believe abortion is the taking of a life should not be compelled to pay for it, and an organization at the center of the most divisive issue in the country should not be on the federal payroll. This is the funding side of "government stays out" — out of the decision, and out of subsidizing it.',
  },
  {
    num: '08',
    title: 'Fund the Things That Actually Reduce Abortion',
    body: 'If the goal is fewer abortions — and across the spectrum, almost everyone agrees fewer is better — then fund what actually achieves it. Real access to contraception, and honest, evidence-based sex education in the school health curriculum, prevent unplanned pregnancies in the first place; the data on this is overwhelming, and it is the single most effective abortion-reduction policy that exists. This is where our dollars go instead of into the abortion fight itself: upstream, at the cause, where prevention is cheaper and less divisive than anything that happens later.',
  },
  {
    num: '09',
    title: 'Make Adoption Radically Easier',
    body: 'For too many women, abortion feels like the only option because the alternatives are broken. Adoption in America is slow, wildly expensive, and tangled in bureaucracy and uncertainty. We fix it: streamline and dramatically lower the cost of adoption, cut the wait times, support birth mothers through pregnancy, and make placing a child for adoption a genuinely viable, supported, honorable choice rather than a daunting maze. A country that wants women to choose life has an obligation to make life-affirming alternatives real, not just rhetorical.',
  },
  {
    num: '10',
    title: 'Support the Mother and Child Who Choose Life',
    body: 'It is not pro-life to demand a birth and then abandon the mother and child. Choosing to carry a pregnancy and raise a child has to be a survivable choice, which means real support: prenatal and maternal care through our Healthcare Access plan, child care, and the family economic supports that make raising a child possible rather than ruinous. The pro-life position and the pro-family position are the same position only if the support is real — so we make it real. Fewer abortions follow from more support, not just from a tighter line.',
  },
  {
    num: '11',
    title: 'The Honest Middle the Poles Refuse to Name',
    body: 'This is the hardest issue in American life, and we will not pretend otherwise or pretend the tradeoff away. We hold two things most Americans hold at once: that the early decision belongs to the woman and not the government, and that there is a point in a pregnancy where the state has a legitimate interest in protecting a life that is increasingly a person. The 15-week line with real exceptions, enforced through medicine and not prison, paired with funding the alternatives that actually reduce abortion — that is the position the loud poles refuse to name and the quiet majority has held all along. Rare, early, supported, and out of the criminal courts. Honest about the weight of it, and honest about where most Americans actually are.',
  },
] as const

export default function AbortionPage() {
  return (
    <div>
      <IssueHero
        badge="🤰 Abortion"
        badgeColor="var(--green)"
        title={<>One Honest Line.<br/><span style={{ color: 'var(--green)' }}>Then Government Steps Back.</span></>}
        subtitle="The hardest issue in American life — and the one both parties least honestly address. Democrats avoid naming any limit; Republicans passed near-total bans with no real exceptions that even their own voters reject at the ballot box. Most Americans have held the same nuanced view for fifty years: legal early, restricted later, with real exceptions. We write that down — a national 15-week line, enforced through medicine not prison, with the government otherwise out of the most personal decision a person can face."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="My body, my choice, codify Roe, abortion is healthcare. In practice: the bill to 'codify Roe' went further than Roe, and most electeds will not name a gestational limit they would accept — leaving them out of step with a public that supports both early access and later restrictions, and ceding the 'no limits' caricature to opponents."
          rep="Pro-life, protect the unborn, leave it to the states. In practice: post-Dobbs near-total bans, several with no real exceptions for rape, incest, or maternal health, that left ER doctors afraid to treat miscarriages and ectopic pregnancies — and that lost at the ballot box even in red states like Kansas, Ohio, and Kentucky."
          us="One national standard: legal everywhere through 15 weeks (where most of the developed world and most Americans sit), restricted after — enforced through medical regulation, not the criminal courts. Real exceptions at any stage: life, health, rape, incest, fatal fetal anomaly. Never prosecute the woman or the good-faith doctor; emergency and miscarriage care always protected. Government otherwise stays out — no surveillance, no funding, no Planned Parenthood money. Instead fund what actually reduces abortion: contraception, honest sex ed, radically easier adoption, and real support for mothers who choose life."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">Where Americans Actually Are</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="~93%" label="Of US abortions that occur before 13 weeks" color="var(--green)" />
          <StatCard num="15 wks" label="Our national line — France is 14, Germany 12" color="var(--green)" />
          <StatCard num="50 yrs" label="Stable public view: legal early, restricted later" color="var(--green)" />
          <StatCard num="Always" label="Exceptions legal at any stage — life, health, rape, incest, fatal anomaly" color="var(--green)" />
          <StatCard num="2022" label="Dobbs — created the chaotic 50-state patchwork" color="#c8102e" />
          <StatCard num="0" label="Women prosecuted under our plan" color="var(--green)" />
          <StatCard num="KS·OH·KY" label="Red states where abortion-access measures still won" color="var(--gold)" />
          <StatCard num="Upstream" label="Funding goes to prevention + adoption, not the fight" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Eleven Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">Rare, early, supported — and out of the criminal courts. Honest about the weight of it.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>How Can It Be &ldquo;Illegal&rdquo; After 15 Weeks but No One Is Prosecuted?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Because a limit can be enforced two completely different ways, and Americans only ever picture one of them. The American instinct is to imagine &ldquo;illegal&rdquo; means police, charges, and prison — which is why the debate feels like a choice between unlimited access and jailing women. But that is not how the 12-to-15-week limits across Europe work. There, the limit is a rule on the medical system: licensed providers may perform elective abortions up to the line and may not past it, and the consequence for crossing it falls on the provider&apos;s license and regulatory standing — not on the patient, and not as a criminal matter. Women are never prosecuted. Good-faith doctors are never prosecuted. The limit is real, providers respect it because their licensure depends on it, and yet no one is in a cell. That is the model we adopt: a genuine boundary, enforced where medicine is already regulated, with the blunt instrument of the criminal law kept entirely out of it. It is how you draw a real line without building the surveillance-and-prosecution state that the issue&apos;s ugliest moments have produced.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--green) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--green)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/healthcare-access" className="underline hover:text-white">Healthcare access</Link>: prenatal and maternal care, plus the support that makes choosing life survivable, run through the coverage plan — the pro-life and pro-family positions only match when the support is real.</li>
            <li>• <Link href="/issues/education" className="underline hover:text-white">Education</Link>: honest, evidence-based sex education — the single most effective abortion-reduction policy — lives in the school health curriculum.</li>
            <li>• <Link href="/issues/immigration" className="underline hover:text-white">Immigration</Link>: the single-national-standard approach replaces a chaotic state-by-state patchwork, the same clarity-over-confusion principle applied across the platform.</li>
            <li>• <strong className="text-white">Adoption reform</strong> ties to the broader family agenda — making life-affirming alternatives genuinely viable rather than rhetorical.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: Dobbs v. Jackson Women&apos;s Health Organization (2022), CDC Abortion Surveillance (gestational-age distribution, ~93% before 13 weeks), comparative gestational limits across Western Europe (France 14 weeks, Germany 12 weeks), fifty-year Gallup and Pew polling on abortion attitudes, 2022-2023 state ballot-measure results (Kansas, Ohio, Kentucky, Michigan), the Hyde Amendment, reporting on post-Dobbs emergency-care denials (EMTALA conflicts), and Guttmacher and CDC data on contraception access and unintended-pregnancy reduction.
          </p>
        </div>
      </section>
    </div>
  )
}
