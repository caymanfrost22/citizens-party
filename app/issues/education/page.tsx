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
    title: 'A Department of Education That Actually Sets Standards',
    body: 'We keep the Department of Education — and we empower it. Both parties get this wrong: Republicans want to abolish it, Democrats want to fund it without fixing it. We do neither. The Department sets a modern national curriculum and graduation requirements that every public school meets, enforces civil rights (Title VI, IX, ADA), and administers Pell and federal aid. It does not micromanage how a teacher in Tulsa runs a Tuesday — states and districts own delivery. But the floor of what every American child learns is national, because a kid in rural Mississippi deserves the same shot as a kid in Palo Alto.',
  },
  {
    num: '02',
    title: 'Modernize the Core Curriculum for Real Life',
    body: 'The curriculum is stuck in 1955. We modernize it. Every student graduates having taken: personal finance and economics (how banking, credit, markets, taxes, and investing actually work), home economics (how to cook, eat healthy, shop, and run a household budget), and shop / vocational skills (real labor competence — basic mechanics, plumbing, electrical, building). Alongside the timeless core — reading, math, science, history, and civics. We are graduating kids who can solve for x but cannot change a tire, read a lease, or cook a meal. That ends.',
  },
  {
    num: '03',
    title: 'Technology Embedded in Every Class — Not Quarantined',
    body: 'Technology is not a separate elective you take once. It is woven through every subject — research and writing tools in English, modeling in science, spreadsheets and analysis in economics, design tools in shop. Students learn to use, question, and build with technology the way the actual working world does. No more treating "computer class" as the one room with screens while the rest of school pretends it is still 1990.',
  },
  {
    num: '04',
    title: 'Real History — Facts First, Sources First',
    body: 'History gets told honestly — neither the airbrushed patriotic version nor the grievance-only version. A nonpartisan commission of historians from across the spectrum sets factual standards: what happened, when, sourced. Paired with a primary-source mandate — students read the original documents (the Constitution, the speeches, the letters, the treaties, the court rulings) and reason from them, instead of memorizing one side\'s interpretation. The goal is citizens who can think, not citizens who can recite. Facts and original sources beat propaganda from either direction.',
  },
  {
    num: '05',
    title: 'End Zip-Code Apartheid — Pool School Funding Statewide',
    body: 'Today a child\'s education is funded by their neighbors\' property values, so rich districts get gold-plated schools and poor districts get leaking roofs. We kill that. School funding moves off local property tax and onto a statewide property tax that is pooled and distributed equally per student across the whole state — your address no longer decides your education. On top of that sits a federal per-student floor (no state can starve its kids below a national minimum) and a dedicated education lottery. Three layers, one principle: every student funded equally, the future invested in rather than sold off.',
  },
  {
    num: '06',
    title: 'A National Education Lottery — Invest in the Future, Don\'t Profit Off It',
    body: 'A federal education lottery dedicated entirely to schools — K-12 facilities, teacher pay, trade programs, and affordable public college. Several states already run education lotteries; we do it nationally and we ringfence every dollar so it cannot be raided for unrelated spending. The principle: we invest in our future instead of using our future as a way to make money. Transparent accounting, published annually, every dollar traceable from ticket to classroom.',
  },
  {
    num: '07',
    title: 'Pay Teachers a Living Wage — Reward Performance Honestly',
    body: 'Teaching is a profession and we pay it like one: a national living-wage floor for teachers, well above the embarrassing current starting salaries. On top of the floor sit performance incentives — but never tied to standardized test scores alone, which only teaches kids to fill in bubbles. Performance is measured on a basket: student attendance and engagement, classroom participation, year-over-year student growth, and peer and administrator review. Good teachers earn more. Test-prep mills do not get rewarded for it.',
  },
  {
    num: '08',
    title: 'Renewable Contracts Replace Lifetime Tenure',
    body: 'Lifetime tenure protects the worst teachers at the expense of every student stuck in their class. We replace it with renewable multi-year contracts — strong due process, real protection from arbitrary firing and political retaliation, but no guaranteed job for life regardless of performance. Great teachers have nothing to fear and everything to gain. The kids come first.',
  },
  {
    num: '09',
    title: 'Fund Trade Schools as a First-Class Path',
    body: 'College is not the only road to a good life, and we stop pretending it is. Major federal investment in trade and vocational schools — funded through the same lottery and federal dollars — so that becoming an electrician, welder, machinist, nurse, plumber, or coder is a fully respected, fully funded option straight out of high school. The shop-class curriculum in mechanism 2 feeds directly into this. We need people who can build and fix the country, and we should fund their training as seriously as we fund a four-year degree.',
  },
  {
    num: '10',
    title: 'Affordable Public Universities — Capped, Lean, No Ideological Bloat',
    body: 'Public universities stay public-serving: tuition kept genuinely affordable (not free, but reachable with Pell, scholarships, and capped aid), with hard caps on enrollment bloat and on administrative headcount — the part of the budget that has exploded while tuition tripled. Federal dollars do not fund DEI bureaucracies or admissions, hiring, and programs organized around race, sex, or religion. Public money funds instruction and opportunity, on the merits, period.',
  },
  {
    num: '11',
    title: 'Private Universities Go Fully Independent',
    body: 'Private universities are free — to set their own curriculum, their own admissions, their own priorities, and to charge whatever they want. In exchange, they receive zero federal funding and no federally backed student aid flows to them. If you are privileged enough to choose a private university, you (or your scholarships, your work-study, your corporate sponsor) pay for it. Taxpayers stop subsidizing $80,000-a-year institutions sitting on billion-dollar endowments.',
  },
  {
    num: '12',
    title: 'Hard-Capped Student Loans — $40K Max, 4% Rate',
    body: 'The unlimited federal loan spigot is what let tuition triple — colleges raise prices because the government guarantees students can always borrow more. We cap it. No student graduates owing more than $40,000 in federal loans, and the interest rate is capped at 4%. Above that cap, the money is not there, so universities have to keep prices in reach instead of betting on bottomless borrowing. Pairs with Pell grants and scholarships for need — loans become a bounded supplement, not a lifetime sentence.',
  },
  {
    num: '13',
    title: 'Fix Existing Debt Without a Bailout',
    body: 'We do not cancel student debt — cancellation is regressive (it rewards the highest earners most) and it does nothing to stop the next generation from drowning. Instead we make existing debt survivable: refinance every federal loan down to the 4% cap, and cap monthly repayment at 10% of discretionary income so no one is crushed. People pay what they borrowed, on fair terms, without a windfall and without ruin.',
  },
  {
    num: '14',
    title: 'Degrees Must Lead Somewhere — Publish the Outcomes',
    body: 'Every degree program publishes its real outcomes: graduate employment rate, median earnings, and earnings against debt, by major, updated yearly. Students choose with their eyes open instead of discovering at 22 that their degree has no market. We do not ban fields of study — we end the information asymmetry that lets schools sell expensive degrees to careers that do not exist. Sunlight on outcomes does what a ban cannot: it lets students vote with their tuition.',
  },
  {
    num: '15',
    title: 'School Choice Within Public — Private and Home Stay Self-Funded',
    body: 'Choice is real but it does not drain the public system. Inside public education, families get open enrollment — pick any public school, not just your zoned one — plus charters and magnets. Private schools and homeschooling remain fully legal and fully respected, but they receive no federal funds; if you opt out of the public system, you fund it yourself. Public dollars stay in public schools, strengthening the system every child is entitled to rather than bleeding it.',
  },
  {
    num: '16',
    title: 'Safe Schools — Security, Counselors, and Clear Discipline',
    body: 'Three layers, scaled to each school\'s actual need. (a) Security appropriate to the area and threat level — not a one-size mandate, but no school left defenseless. (b) Counselors in every school for both mental health and academic / career guidance — the support kids are missing today. (c) Principals get real authority to maintain order, bounded by strict, published enforcement guidelines and due process so discipline is firm, fair, and never arbitrary. Order and support are not opposites; kids need both to learn.',
  },
] as const

export default function EducationPage() {
  return (
    <div>
      <IssueHero
        badge="🎓 Education"
        badgeColor="var(--green)"
        title={<>Educate for <span style={{ color: 'var(--green)' }}>Real Life.</span><br/>Fund Every Kid Equally.</>}
        subtitle="America spends the 3rd-most per pupil on Earth and ranks ~30th in math. We pay #1 prices for ~30th results — then bury graduates in debt. Democrats protect the unions. Republicans protect the vouchers. Neither modernized the curriculum or stopped tuition from tripling. We do both."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Fully fund public schools, cancel student debt, universal pre-K. In practice: bow to NEA/AFT (top donors, $40M+/cycle), block accountability tied to outcomes, defend test-driven Common Core. Biden canceled $189B in debt by executive action — tuition kept rising, the cause untouched."
          rep="Parent rights, school choice, abolish the Department of Education, college 'isn't for everyone.' In practice: vouchers that mostly subsidize already-private families, underfund the rural public schools their own voters use, culture-war book fights over actual curriculum quality, no real plan for college cost."
          us="Empower the Department of Education to set a modernized national curriculum — personal finance, home ec, shop/trades, real history, tech in every class. Pool school funding statewide + federal floor + a national education lottery to end zip-code apartheid. Living-wage teacher pay on multi-metric performance, renewable contracts. Fund trade schools as a first-class path. Affordable, lean public universities — no DEI/identity bloat. Private universities fully independent and self-funded. Cap loans at $40K / 4%, refinance existing debt, no bailout. Publish every degree's real outcomes. Open enrollment + charters; private and home self-funded. Security, counselors, and clear discipline in every school."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">📊 The Numbers</SectionLabel>
          <h2 className="text-3xl font-black">#1 Prices, ~30th Results</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$17K" label="US K-12 spending per pupil — 3rd-highest on Earth" color="var(--gold)" />
          <StatCard num="~30th" label="US global rank in math (PISA)" color="#c8102e" />
          <StatCard num="+180%" label="College tuition since 2000 — wages up 67%" color="#c8102e" />
          <StatCard num="+88%" label="K-12 administrator headcount since 2000" color="#c8102e" />
          <StatCard num="$1.7T" label="Outstanding federal student debt" color="#c8102e" />
          <StatCard num="$40K" label="Citizens Party hard cap on student debt" color="var(--green)" />
          <StatCard num="4%" label="Capped student-loan interest rate" color="var(--green)" />
          <StatCard num="Equal" label="Per-student funding — statewide pool, not zip code" color="var(--green)" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="var(--green)" bg="color-mix(in srgb, var(--green) 10%, transparent)" border="color-mix(in srgb, var(--green) 30%, transparent)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Sixteen Mechanisms</h2>
          <p className="text-[var(--muted)] mt-2">From kindergarten curriculum to the last student loan payment. One coherent design.</p>
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
          <h3 className="font-bold mb-3" style={{ color: 'var(--gold)' }}>Why Cap Loans Instead of Banning Them?</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            A total ban on federal student loans sounds clean, but it locks the non-rich out of college entirely — only families who can pay cash get in. A hard cap does the opposite: it keeps the door open for working-class kids while removing the bottomless-borrowing dynamic that let universities triple their prices. With a $40,000 lifetime ceiling and a 4% rate, colleges can no longer assume students will simply borrow whatever they charge. They have to keep tuition within reach. Loans become a bounded supplement to Pell grants and scholarships — not a lifetime sentence, and not a blank check that fuels the next tuition spiral.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--green) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--green)' }}>What This Looks Like in Practice</h3>
          <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
            <strong className="text-white">Today:</strong> A kid in a poor district learns from 20-year-old textbooks in a building with no AC, never takes a personal-finance or shop class, graduates unable to read a lease or wire an outlet, then borrows $90,000 for a degree with no job market and spends 25 years paying it off.
          </p>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            <strong className="text-white">Under our plan:</strong> That same kid attends a public school funded equally with every other school in the state, learns personal finance, cooking, and a trade alongside math and real history, can pick a better public school across town if theirs is failing, and either trains as a funded electrician or attends an affordable public university — borrowing at most $40,000 at 4%, with every degree&apos;s real earnings published before they choose it.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--green) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 20%, transparent)' }}>
          <h3 className="font-bold mb-3" style={{ color: 'var(--green)' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <li>• <Link href="/issues/wages-jobs" className="underline hover:text-white">Wages + jobs</Link>: funded trade schools and a personal-finance curriculum feed directly into a workforce that can build, fix, and budget — the supply side of good jobs.</li>
            <li>• <Link href="/issues/healthcare-costs" className="underline hover:text-white">Healthcare costs</Link>: home economics teaching nutrition and healthy cooking is upstream preventive health — the cheapest medicine is the meal.</li>
            <li>• <Link href="/issues/bureaucracy-reform" className="underline hover:text-white">Bureaucracy reform</Link>: the administrative-headcount cap on universities is the same outcomes-over-overhead principle applied to government agencies.</li>
            <li>• <Link href="/issues/taxes" className="underline hover:text-white">Taxes</Link>: a dedicated, ringfenced education lottery funds schools without raising income tax — the future invested in, not borrowed against.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 text-center" style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="py-8">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Sources: OECD Education at a Glance (per-pupil spending), PISA 2022 international rankings, NCES Digest of Education Statistics (administrator headcount, teacher pay), Federal Reserve Bank of New York studies on the Bennett hypothesis (loan availability and tuition), Federal Reserve student-debt totals, College Board Trends in College Pricing, state education-lottery program reports (GA, FL, TN), 50-state survey of school-finance equity litigation, Students for Fair Admissions v. Harvard (2023).
          </p>
        </div>
      </section>
    </div>
  )
}
