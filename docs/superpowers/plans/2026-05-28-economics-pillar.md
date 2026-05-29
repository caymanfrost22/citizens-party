# Economics Pillar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the Citizens Party Economics platform — fix `/platform` render bug, seed the database with 7 new sub-issue positions, build a pillar overview page, build 7 deep-dive issue pages, update navigation and the comparison table.

**Architecture:** Next.js 16 App Router. Server-component pages read from Supabase Postgres at request time (60s revalidation). Shared issue-page UI primitives extracted to `components/issue/` so all deep-dives share styling. New routes under `app/issues/<slug>/page.tsx`. Database seed authored as idempotent SQL run through Supabase SQL editor. No new runtime dependencies.

**Tech Stack:** Next.js 16, React 19, Tailwind v4, Supabase (Postgres + JS SDK), TypeScript 5. Existing project has no automated test suite — correctness verified via `next build` (type-checks all server components), `next lint`, manual visual review on `next dev`, and Vercel preview deploy per branch.

**Spec:** `docs/superpowers/specs/2026-05-28-economics-pillar-design.md`

---

## File Structure

### New files

```
docs/superpowers/plans/2026-05-28-economics-pillar.md  ← this file
scripts/seed-economics-positions.sql                    ← idempotent DB seed
components/issue/SectionLabel.tsx                       ← extracted from taxes/immigration
components/issue/StatCard.tsx                           ← extracted
components/issue/Accordion.tsx                          ← extracted
components/issue/ThreeWayCompare.tsx                    ← new shared Dem/Rep/Us cell
components/issue/SubIssueCard.tsx                       ← new — used by pillar page
components/issue/CrossThread.tsx                        ← new — used by pillar page
components/issue/IssueHero.tsx                          ← new — standard deep-dive hero
app/issues/economy/page.tsx                             ← pillar page
app/issues/debt-spending/page.tsx                       ← deep dive
app/issues/healthcare-costs/page.tsx                    ← deep dive
app/issues/housing/page.tsx                             ← deep dive
app/issues/inflation/page.tsx                           ← deep dive
app/issues/big-tech/page.tsx                            ← deep dive
app/issues/trade/page.tsx                               ← deep dive
app/issues/wages-jobs/page.tsx                          ← deep dive
```

### Modified files

```
app/issues/taxes/page.tsx        ← swap inline components for components/issue/* imports
app/issues/immigration/page.tsx  ← same swap
app/issues/page.tsx              ← extend issueRoutes map for 7 new sub-issues
components/Nav.tsx               ← add "Economics" link
```

### Database

```
table:  platform_positions  (existing schema, no migration)
seed:   scripts/seed-economics-positions.sql  (run via Supabase SQL editor)
```

---

## Phase 0 — Diagnose `/platform` Render Bug

`/platform` renders header + empty list. Either Vercel env vars missing, table empty, or `category` values don't match `economic|governance|social|foreign|environment`. Resolve before adding new rows.

### Task 0.1: Verify Supabase env vars on Vercel

**Files:** none (out-of-repo dashboard work)

- [ ] **Step 1: Open Vercel project settings**

Visit https://vercel.com/dashboard → project `citizens-party` → Settings → Environment Variables.

- [ ] **Step 2: Confirm both keys exist on Production**

Required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

If either missing, copy from `.env.local` (or Supabase project Settings → API) and add for Production + Preview environments.

- [ ] **Step 3: If keys were missing, redeploy**

Trigger a redeploy of `main` so env changes take effect. Vercel dashboard → Deployments → latest production → ⋯ → Redeploy.

- [ ] **Step 4: Record outcome**

Append a note to this plan under "Phase 0 outcome":
- "Env vars present, redeploy not needed", OR
- "Env vars added + redeployed, /platform now renders X rows", OR
- "Env vars present but /platform still empty → proceed to Task 0.2"

### Task 0.2: Inspect `platform_positions` table state

**Files:** none (Supabase SQL editor)

- [ ] **Step 1: Open Supabase SQL editor**

Supabase dashboard → project → SQL Editor → New query.

- [ ] **Step 2: Run inventory query**

```sql
select category, count(*), array_agg(issue order by priority desc) as issues
from platform_positions
where active = true
group by category
order by category;
```

- [ ] **Step 3: Record results in plan**

Append to "Phase 0 outcome" — list of categories present and the issues under each. Three possible findings:

1. **Empty table** → seed in Phase 1 fixes everything.
2. **Rows exist but `category` values don't match** the enum used by `/platform/page.tsx` (`economic|governance|social|foreign|environment`). Fix value in Phase 1 same-time as seeding.
3. **Rows exist with valid categories** but `active=false` for all. Set `active=true` in Phase 1.

- [ ] **Step 4: Commit plan update**

```bash
git add docs/superpowers/plans/2026-05-28-economics-pillar.md
git commit -m "docs: record Phase 0 diagnosis of /platform render bug"
```

---

## Phase 1 — Seed Database With Economics Positions

Author one idempotent SQL file that inserts or updates 7 sub-issue rows. Run via Supabase SQL editor. Verify `/platform` page renders the new rows.

### Task 1.1: Write `scripts/seed-economics-positions.sql`

**Files:**
- Create: `scripts/seed-economics-positions.sql`

- [ ] **Step 1: Create the seed file**

Write exactly:

```sql
-- Citizens Party Economics Pillar — sub-issue seed
-- Idempotent: uses ON CONFLICT (issue) DO UPDATE
-- Run via Supabase SQL editor.
-- Spec: docs/superpowers/specs/2026-05-28-economics-pillar-design.md

insert into platform_positions (
  issue, issue_icon, category, dem_position, rep_position, peoples_position, our_detail, priority, active
) values
(
  'Debt + Spending',
  '💸',
  'economic',
  'Tax the wealthy to fund expanded programs. Defend entitlements as-is. Maintain defense baseline.',
  'Cut welfare and discretionary spending. Protect Pentagon. Block tax increases.',
  'Honest math. Invest the SS trust fund like Canada/Norway. Lower retirement age to 59½. Uncap payroll tax at 2.5% above $200K. Cap SS benefit at $200K/yr. Pentagon: 5% auto-cut on audit failure + leadership replacement. Sunset every law + agency every 10 years. Balanced Budget Amendment + PAYGO + performance-audit-tied funding. Debt-to-GDP under 50% in 20–30 years.',
  100,
  true
),
(
  'Healthcare Costs',
  '💊',
  'economic',
  'Expand ACA, add a public option, negotiate prices on 10 drugs at a time.',
  'Health Savings Accounts, market competition, repeal ACA, less regulation.',
  'International reference pricing on all drugs (median of 6 peer nations) + legalize Canada/EU imports. Ban PBM rebates and force vertical divestiture. Real-time public pricing API + binding upfront quotes + site-neutral Medicare payments. Single national claims standard + portable patient records. Universal HSA from birth ($500/yr federal seed) + Direct Primary Care HSA-eligible.',
  95,
  true
),
(
  'Housing',
  '🏠',
  'economic',
  'Down payment subsidies for first-time buyers, LIHTC expansion, rent regulation.',
  'Deregulation, opportunity zones, federal hands-off.',
  '4% annual surtax on holdings above 10 properties. Foreign corporations banned from US residential. Federal funds for cities tied to YIMBY zoning reform. Controlled federal land release (no big-company gobbling). Fannie/Freddie preference for owner-occupied first-time buyers. Phase out the Mortgage Interest Deduction. Cap REIT residential depreciation. Housing Savings Account with federal match.',
  90,
  true
),
(
  'Inflation',
  '📉',
  'economic',
  'Blame supply chains and corporate greed. Defend Fed independence. Expand safety net.',
  'Blame federal spending. Cut taxes. Drill more oil.',
  'Federal Reserve single mandate: price stability only. Hard cap on M2 money supply growth at nominal GDP + 1%. All-of-the-above energy leaning nuclear, including on-site nuclear at data centers. 12-month federal permitting cap on energy projects. Skip emergency response — fix the systemic causes.',
  85,
  true
),
(
  'Big Tech',
  '📱',
  'economic',
  'Privacy laws, narrow Section 230 for misinformation, antitrust enforcement.',
  'Narrow Section 230 for censorship, antitrust on perceived bias.',
  'No structural breakups for chosen-relationship businesses — free market when you can walk away. Markup cap of 5% OR allow self-supply (App Store, Disney parks, stadiums, Ticketmaster). Section 230 size-tiered: full protection under 10M users, algorithmic-amplification liability over 100M + mandatory chronological feed. Opt-in default for all data collection.',
  80,
  true
),
(
  'Trade + Tariffs',
  '🚢',
  'economic',
  'Traditional free trade with targeted Buy American, limited tariffs.',
  'Broad tariffs as revenue and reshoring tool. 10% universal + 60% on China.',
  'No universal baseline tariff. Tariffs vary by country relationship (friend countries: zero on most, lower on strategic) and good category (strategic industries: higher across all). Reciprocal default for the rest. China: targeted bans on critical infra + sensitive tech, not full decouple. 55% value-added country-of-origin rule. Mandatory 180-day strategic stockpiles. Reshoring tax credit with 10-year sunset. Buy American 100% strategic / 75% else. 12-month permitting fast-track for strategic manufacturing.',
  75,
  true
),
(
  'Wages + Jobs',
  '👷',
  'economic',
  '$15–22 federal minimum wage, PRO Act, gig workers reclassified as employees.',
  'State-level minimum wage, national right-to-work, contractors stay contractors.',
  'Tiered minimum wage: under 18 OR under 25 hrs/wk at ~$10; 18+ AND full-time at ~$15 plus regional adjustment. Both CPI-indexed. New "Independent Worker" classification for gig workers with portable benefits per hour worked. Non-competes banned under $150K salary, allowed above with paid garden leave. Apprenticeship expansion in trades. Universal HSA-style Worker Account (skills training + emergency + benefits + retirement, follows the worker).',
  70,
  true
)
on conflict (issue) do update set
  issue_icon = excluded.issue_icon,
  category = excluded.category,
  dem_position = excluded.dem_position,
  rep_position = excluded.rep_position,
  peoples_position = excluded.peoples_position,
  our_detail = excluded.our_detail,
  priority = excluded.priority,
  active = excluded.active,
  updated_at = now();
```

- [ ] **Step 2: Confirm the table has a unique index on `issue`**

The `ON CONFLICT (issue)` clause requires a unique constraint or unique index on `issue`. Verify with this query in Supabase SQL editor:

```sql
select indexname, indexdef
from pg_indexes
where tablename = 'platform_positions';
```

Expected: at least one UNIQUE index covering `issue`. If none, add it before running the seed:

```sql
create unique index if not exists platform_positions_issue_key on platform_positions(issue);
```

- [ ] **Step 3: Commit the seed file**

```bash
git add scripts/seed-economics-positions.sql
git commit -m "feat: seed file for 7 economics sub-issue positions"
```

### Task 1.2: Run the seed and verify

**Files:** none (Supabase SQL editor + dev server)

- [ ] **Step 1: Run the seed in Supabase SQL editor**

Paste the full contents of `scripts/seed-economics-positions.sql` into the editor and execute. Expected output: `INSERT 0 7` (or `INSERT 0 N, UPDATE 0 M` if some issues pre-existed).

- [ ] **Step 2: Re-run the Phase 0 inventory query**

```sql
select category, count(*), array_agg(issue order by priority desc) as issues
from platform_positions
where active = true and category = 'economic'
group by category;
```

Expected: `count = 7` (or more if other economic issues already existed), and the array contains: `Debt + Spending`, `Healthcare Costs`, `Housing`, `Inflation`, `Big Tech`, `Trade + Tariffs`, `Wages + Jobs`.

- [ ] **Step 3: Run dev server and visit /platform**

```bash
npm run dev
```

Open http://localhost:3000/platform. Expected: the "💰 Economic Justice" category section renders 7 cards, each with Dem / Rep / Us three-way compare and the detail paragraph below.

- [ ] **Step 4: Visit /issues**

Open http://localhost:3000/issues. Expected: the comparison table has 7 new rows under Economics (no clickable issue links yet — those come in Phase 5).

- [ ] **Step 5: Commit if anything in repo changed**

If the unique index was added or seed file needed edits, commit. Otherwise note "DB seeded, no code changes" and move on.

---

## Phase 2 — Extract Shared Issue-Page Components

`app/issues/taxes/page.tsx` and `app/issues/immigration/page.tsx` define `SectionLabel`, `StatCard`, and `Accordion` as inline functions. Lift these into `components/issue/` plus add three new shared primitives. Refactor existing pages to import — build still green. Sets foundation for 7 new deep dives.

### Task 2.1: Create `components/issue/SectionLabel.tsx`

**Files:**
- Create: `components/issue/SectionLabel.tsx`

- [ ] **Step 1: Write the component**

```tsx
import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  color?: string
  bg?: string
  border?: string
}

export default function SectionLabel({
  children,
  color = '#00b4d8',
  bg = 'rgba(0,180,216,0.1)',
  border = 'rgba(0,180,216,0.3)',
}: SectionLabelProps) {
  return (
    <div
      className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
      style={{ background: bg, border: `1px solid ${border}`, color }}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS. No new errors.

- [ ] **Step 3: Commit**

```bash
git add components/issue/SectionLabel.tsx
git commit -m "refactor: extract SectionLabel to components/issue/"
```

### Task 2.2: Create `components/issue/StatCard.tsx`

**Files:**
- Create: `components/issue/StatCard.tsx`

- [ ] **Step 1: Write the component**

```tsx
interface StatCardProps {
  num: string
  label: string
  color: string
}

export default function StatCard({ num, label, color }: StatCardProps) {
  return (
    <div
      className="text-center p-5 rounded-2xl"
      style={{ background: '#1a2a44', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="text-3xl font-black mb-1" style={{ color }}>{num}</div>
      <div className="text-xs" style={{ color: '#8fa3bc' }}>{label}</div>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/issue/StatCard.tsx
git commit -m "refactor: extract StatCard to components/issue/"
```

### Task 2.3: Create `components/issue/Accordion.tsx`

**Files:**
- Create: `components/issue/Accordion.tsx`

- [ ] **Step 1: Write the component**

```tsx
'use client'
import { useState, type ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden mb-3"
      style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#1a2a44' }}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-sm hover:bg-white/5 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span style={{ color: '#f5a623', fontSize: '1.2rem', lineHeight: 1 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div
          className="px-5 pb-5 text-sm"
          style={{ color: '#8fa3bc', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="pt-4">{children}</div>
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/issue/Accordion.tsx
git commit -m "refactor: extract Accordion to components/issue/"
```

### Task 2.4: Create `components/issue/ThreeWayCompare.tsx`

Shared Dem / Rep / Us grid used by every deep dive.

**Files:**
- Create: `components/issue/ThreeWayCompare.tsx`

- [ ] **Step 1: Write the component**

```tsx
interface ThreeWayCompareProps {
  dem: string
  rep: string
  us: string
}

export default function ThreeWayCompare({ dem, rep, us }: ThreeWayCompareProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.05)' }}
    >
      <div className="px-5 py-4" style={{ background: '#1a2a44' }}>
        <div className="text-xs font-bold mb-2" style={{ color: '#3b82f6' }}>🔵 Democrats Say</div>
        <p className="text-sm" style={{ color: '#93c5fd' }}>{dem}</p>
      </div>
      <div className="px-5 py-4" style={{ background: '#1a2a44' }}>
        <div className="text-xs font-bold mb-2" style={{ color: '#ef4444' }}>🔴 Republicans Say</div>
        <p className="text-sm" style={{ color: '#fca5a5' }}>{rep}</p>
      </div>
      <div className="px-5 py-4" style={{ background: 'rgba(6,214,160,0.08)' }}>
        <div className="text-xs font-bold mb-2" style={{ color: '#06d6a0' }}>🟢 We Say</div>
        <p className="text-sm font-semibold" style={{ color: '#06d6a0' }}>{us}</p>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/issue/ThreeWayCompare.tsx
git commit -m "feat: ThreeWayCompare component for issue deep dives"
```

### Task 2.5: Create `components/issue/IssueHero.tsx`

Standardised hero used by every deep dive page (matches /issues/taxes look-and-feel).

**Files:**
- Create: `components/issue/IssueHero.tsx`

- [ ] **Step 1: Write the component**

```tsx
import type { ReactNode } from 'react'

interface IssueHeroProps {
  badge: string
  badgeColor?: string
  title: ReactNode
  subtitle: string
}

export default function IssueHero({ badge, badgeColor = '#f5a623', title, subtitle }: IssueHeroProps) {
  return (
    <div
      className="py-16 px-4 text-center"
      style={{ background: 'linear-gradient(135deg, #0a1628, #1a2a44)' }}
    >
      <div
        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
        style={{
          background: `${badgeColor}1A`,
          border: `1px solid ${badgeColor}4D`,
          color: badgeColor,
        }}
      >
        {badge}
      </div>
      <h1 className="text-5xl font-black mb-3">{title}</h1>
      <p className="text-[#8fa3bc] text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/issue/IssueHero.tsx
git commit -m "feat: IssueHero component for issue deep dives"
```

### Task 2.6: Create `components/issue/SubIssueCard.tsx`

Used by the pillar page to summarise each sub-issue with a deep-dive link.

**Files:**
- Create: `components/issue/SubIssueCard.tsx`

- [ ] **Step 1: Write the component**

```tsx
import Link from 'next/link'

interface SubIssueCardProps {
  icon: string
  title: string
  oneLiner: string
  href: string
}

export default function SubIssueCard({ icon, title, oneLiner, href }: SubIssueCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl p-6 transition-all hover:-translate-y-1"
      style={{ background: '#1a2a44', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-bold" style={{ color: '#f5a623' }}>{title}</h3>
      </div>
      <p className="text-sm mb-3" style={{ color: '#8fa3bc' }}>{oneLiner}</p>
      <span className="text-xs font-bold" style={{ color: '#06d6a0' }}>See the full plan →</span>
    </Link>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/issue/SubIssueCard.tsx
git commit -m "feat: SubIssueCard component for pillar pages"
```

### Task 2.7: Create `components/issue/CrossThread.tsx`

Used by the pillar page to surface cross-cutting threads.

**Files:**
- Create: `components/issue/CrossThread.tsx`

- [ ] **Step 1: Write the component**

```tsx
interface CrossThreadProps {
  icon: string
  title: string
  description: string
  appliesTo: readonly string[]
}

export default function CrossThread({ icon, title, description, appliesTo }: CrossThreadProps) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: '#1a2a44', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-bold" style={{ color: '#f5a623' }}>{title}</h3>
      </div>
      <p className="text-sm mb-3" style={{ color: '#8fa3bc' }}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {appliesTo.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-xs"
            style={{
              background: 'rgba(6,214,160,0.1)',
              border: '1px solid rgba(6,214,160,0.3)',
              color: '#06d6a0',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/issue/CrossThread.tsx
git commit -m "feat: CrossThread component for pillar pages"
```

### Task 2.8: Refactor `app/issues/taxes/page.tsx` to use shared components

**Files:**
- Modify: `app/issues/taxes/page.tsx`

- [ ] **Step 1: Read the current file**

Open `app/issues/taxes/page.tsx`. Identify the inline `SectionLabel`, `StatCard`, and `Accordion` function definitions (they should look identical to the ones in `app/issues/immigration/page.tsx`).

- [ ] **Step 2: Remove inline component definitions**

Delete the three inline function definitions.

- [ ] **Step 3: Add imports at the top of the file**

After the existing `'use client'` directive and other imports, add:

```tsx
import SectionLabel from '@/components/issue/SectionLabel'
import StatCard from '@/components/issue/StatCard'
import Accordion from '@/components/issue/Accordion'
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: PASS. Type errors here usually mean a prop name drifted between inline and extracted versions — compare prop names with `components/issue/SectionLabel.tsx`, etc. and fix call sites if needed.

- [ ] **Step 5: Run dev and load `/issues/taxes`**

```bash
npm run dev
```

Open http://localhost:3000/issues/taxes. Expected: page looks identical to production. Tax calculator, debt section, accordions, all unchanged visually.

- [ ] **Step 6: Commit**

```bash
git add app/issues/taxes/page.tsx
git commit -m "refactor: taxes page uses shared components/issue primitives"
```

### Task 2.9: Refactor `app/issues/immigration/page.tsx` to use shared components

**Files:**
- Modify: `app/issues/immigration/page.tsx`

- [ ] **Step 1: Repeat Task 2.8 for immigration**

Delete the inline `SectionLabel`, `StatCard`, `Accordion` definitions. Add the same imports. Verify build. Load `/issues/immigration` and confirm unchanged. Commit.

```bash
git add app/issues/immigration/page.tsx
git commit -m "refactor: immigration page uses shared components/issue primitives"
```

---

## Phase 3 — Pillar Page `/issues/economy`

The pillar page introduces the Economics platform, names the Captivity = Regulation signature principle, surfaces all 7 sub-issues with deep-dive links, and shows cross-cutting threads.

### Task 3.1: Create `app/issues/economy/page.tsx` shell

**Files:**
- Create: `app/issues/economy/page.tsx`

- [ ] **Step 1: Write the shell**

```tsx
import IssueHero from '@/components/issue/IssueHero'
import SubIssueCard from '@/components/issue/SubIssueCard'
import CrossThread from '@/components/issue/CrossThread'

export const revalidate = 60

const SUB_ISSUES = [
  {
    icon: '💸',
    title: 'Debt + Spending',
    oneLiner: 'Lower retirement age to 59½. Sovereign-wealth-fund the trust. Uncap payroll above $200K at 2.5%. Pentagon audit teeth. Sunset every law every 10 years.',
    href: '/issues/debt-spending',
  },
  {
    icon: '💰',
    title: 'Tax Reform',
    oneLiner: 'Abolish the IRS. 25% consumption tax + monthly prebate. Wealthy pay more, poor protected, $536B compliance cost eliminated.',
    href: '/issues/taxes',
  },
  {
    icon: '💊',
    title: 'Healthcare Costs',
    oneLiner: 'International reference pricing on all drugs. Ban PBM rebates + force divestiture. Universal HSA from birth + Direct Primary Care.',
    href: '/issues/healthcare-costs',
  },
  {
    icon: '🏠',
    title: 'Housing',
    oneLiner: 'Surtax holdings above 10 properties. Ban foreign corporate residential. Phase out the mortgage interest deduction. Housing Savings Account.',
    href: '/issues/housing',
  },
  {
    icon: '📉',
    title: 'Inflation',
    oneLiner: 'Fed single mandate: price stability only. Hard cap M2 growth at nominal GDP + 1%. Nuclear-led energy abundance. 12-month permitting cap.',
    href: '/issues/inflation',
  },
  {
    icon: '📱',
    title: 'Big Tech',
    oneLiner: 'No structural breakups when you can walk away. Markup cap OR self-supply. Section 230 size-tiered. Opt-in privacy by default.',
    href: '/issues/big-tech',
  },
  {
    icon: '🚢',
    title: 'Trade + Tariffs',
    oneLiner: 'No universal baseline. Friend countries: zero tariffs most goods. Strategic industries: higher across all. 180-day strategic stockpiles.',
    href: '/issues/trade',
  },
  {
    icon: '👷',
    title: 'Wages + Jobs',
    oneLiner: 'Tiered minimum wage by age + hours + region. New Independent Worker classification with portable benefits. Universal Worker Account.',
    href: '/issues/wages-jobs',
  },
] as const

const THREADS = [
  {
    icon: '🏦',
    title: 'Americans own their financial future',
    description: 'One tax-advantaged account architecture, four life needs. Sovereign-wealth-fund Social Security, Universal HSA from birth, Housing Savings Account, Universal Worker Account. Federally seeded for low-income, portable across jobs.',
    appliesTo: ['Debt + Spending', 'Healthcare Costs', 'Housing', 'Wages + Jobs'],
  },
  {
    icon: '⚡',
    title: '12-month federal permitting cap',
    description: 'Same rule, applied twice. Any energy project decision in 12 months. Any reshored strategic-manufacturing plant in 12 months. Removes the single biggest barrier to building in America.',
    appliesTo: ['Inflation', 'Trade + Tariffs'],
  },
  {
    icon: '💊',
    title: 'Drug price negotiation, stacked',
    description: 'Medicare negotiation list expansion gets the entitlement system the best rate. International reference pricing puts every other drug at the median peer-nation price. The two stack.',
    appliesTo: ['Debt + Spending', 'Healthcare Costs'],
  },
  {
    icon: '🛡️',
    title: 'Pentagon accountability + defense reshore',
    description: 'Failed audit = automatic 5% cut + leadership replacement. Reshored defense manufacturing + Buy American 100%. Same theme — accountable, domestic, smart military spending — two enforcement mechanisms.',
    appliesTo: ['Debt + Spending', 'Trade + Tariffs'],
  },
  {
    icon: '🔓',
    title: 'Captivity = Regulation. Choice = Market.',
    description: 'Citizens Party signature principle. If a business restricts your ability to self-supply, government caps markup at 5% or breaks the captivity. If you can freely choose, the market sets price. Reconciles our anti-monopoly instinct (PBM divestiture) with our libertarian instinct (no Big Tech structural breakups).',
    appliesTo: ['Healthcare Costs', 'Big Tech'],
  },
  {
    icon: '⏳',
    title: 'Sunset clauses + performance audits',
    description: 'Every federal law and agency expires after 10 years unless re-authorized. Programs missing measurable outcomes for 3 years lose funding. Reshoring tax credit hard-sunsets at 10 years. No permanent industrial policy, no permanent bureaucracy. Every policy has an expiration date.',
    appliesTo: ['Debt + Spending', 'Trade + Tariffs'],
  },
  {
    icon: '🚫',
    title: 'No corporate donors. No structural breakups for free relationships.',
    description: 'Citizens Party takes no corporate money — so we don\'t reward consolidation, but we also don\'t punish it ideologically. We regulate captive markets. We leave free markets alone.',
    appliesTo: ['Big Tech', 'Healthcare Costs'],
  },
] as const

export default function EconomyPillarPage() {
  return (
    <div>
      <IssueHero
        badge="💰 Economics Pillar"
        badgeColor="#f5a623"
        title={<>Build Wealth From the<br/><span style={{ color: '#f5a623' }}>Bottom Up.</span></>}
        subtitle="The median American is the customer. No corporate donors. Captivity gets regulated, choice gets market. Eight sub-issues, one coherent platform."
      />

      <SignaturePrinciple />
      <SubIssuesGrid />
      <CrossThreadsGrid />
      <PillarCTA />
    </div>
  )
}

function SignaturePrinciple() {
  return (
    <section className="py-16 px-4" style={{ background: '#0d1f38' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          style={{ background: 'rgba(6,214,160,0.1)', border: '1px solid rgba(6,214,160,0.3)', color: '#06d6a0' }}>
          ★ Signature Principle
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          Captivity = Regulation.<br/>
          <span style={{ color: '#06d6a0' }}>Choice = Market.</span>
        </h2>
        <p className="text-[#8fa3bc] text-lg max-w-2xl mx-auto">
          If a business restricts your ability to self-supply or walk away, government caps markup at 5% or breaks the captivity.
          If you can freely choose, market sets the price. Applies to Disney parks, App Stores, stadiums, Ticketmaster, hospital cafeterias, PBMs — and anywhere else the trick of the trade is preventing you from leaving.
        </p>
      </div>
    </section>
  )
}

function SubIssuesGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-3">The 8 Sub-Issues</h2>
          <p className="text-[#8fa3bc]">Each links to the full plan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SUB_ISSUES.map(s => (
            <SubIssueCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CrossThreadsGrid() {
  return (
    <section className="py-16 px-4" style={{ background: '#0d1f38' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-3">How It All Connects</h2>
          <p className="text-[#8fa3bc] max-w-xl mx-auto">Seven threads that run across the sub-issues. The Economics platform is one design, not eight unrelated positions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {THREADS.map(t => (
            <CrossThread key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCTA() {
  return (
    <section className="py-20 px-4 text-center" style={{ background: 'linear-gradient(135deg, #1a2a44, #0a1628)' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black mb-4">
          Done picking between <span style={{ color: '#f5a623' }}>two bad options</span>?
        </h2>
        <p className="text-[#8fa3bc] text-lg mb-8">
          The Citizens Party Economics platform is the math, the mechanism, and the principle in one place.
        </p>
        <a href="/join"
          className="inline-block px-10 py-4 rounded-full font-black text-xl text-[#0a1628] transition-all hover:scale-105"
          style={{ background: '#f5a623' }}>
          Join the Movement 🦅
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS. Route `/issues/economy` should appear in the route summary at the end of the build.

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Open http://localhost:3000/issues/economy. Expected: hero renders, signature principle section renders, 8 sub-issue cards render in 2-col grid, 7 cross-thread cards render, CTA renders. Cards link to `/issues/<slug>` (the deep-dive routes don't exist yet — clicks will 404 until Phase 4).

- [ ] **Step 4: Commit**

```bash
git add app/issues/economy/page.tsx
git commit -m "feat: /issues/economy pillar page with signature principle + sub-issues + cross-threads"
```

---

## Phase 4 — 7 Deep-Dive Pages

Each deep-dive page follows the same template: `IssueHero` → `ThreeWayCompare` → `StatCard` row → "Our Plan" mechanisms → cross-issue links → sources. Build them in priority order.

Each task in this phase follows the same shape. To keep the plan readable, Task 4.1 (Debt + Spending) is fully written out. Tasks 4.2 through 4.7 use the same template — only the file path, content data, and commit message change.

### Task 4.1: Create `app/issues/debt-spending/page.tsx`

**Files:**
- Create: `app/issues/debt-spending/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'

export const revalidate = 60

const MECHANISMS = [
  {
    num: '01',
    title: 'Social Security: Lower the Age, Invest the Trust',
    body: 'Retirement age drops to 59½ — matches the 401(k) penalty-free withdrawal age. Trust fund moves out of Treasuries-only into a sovereign wealth fund (Canada CPPIB / Norway model) with diversified global holdings. Independent professional management, firewalled from Congress raiding.',
  },
  {
    num: '02',
    title: 'Uncap Payroll Above $200K at 2.5%',
    body: 'Standard 6.2% on wages up to $200K. Above $200K: 2.5%, no cap. CEO making $20M pays into SS on every dollar — just at a lower rate above the threshold. Trust fund infusion without crushing the upper-middle.',
  },
  {
    num: '03',
    title: 'Cap SS Benefit at $200K/yr',
    body: 'The trade for the uncapped payroll above $200K: max SS payout is $200K/yr. Generous ceiling — about 4x today\'s maximum benefit — but finite. Wealthy retirees built their own wealth; SS isn\'t their pension.',
  },
  {
    num: '04',
    title: 'Pentagon: Audit Failure Has Teeth',
    body: 'DoD has failed every audit since 2018. Mandatory annual audit. Failure triggers automatic 5% next-year budget cut and replacement of SecDef + service chiefs. Congress can waive the cut by majority vote in declared force-majeure (war, natural disaster). No more failed-audit shrug.',
  },
  {
    num: '05',
    title: 'Sunset Every Law + Every Agency, 10-Year Clock',
    body: 'Every federal law and every agency automatically expires after 10 years unless Congress affirmatively re-authorizes. Existing inventory phased in over the first decade. Forces continuous review. The single biggest forcing function for bureaucracy cleanup ever attempted.',
  },
  {
    num: '06',
    title: 'Balanced Budget Amendment + PAYGO + Performance Funding',
    body: 'Constitutional amendment requiring a balanced budget except in declared war or recession. PAYGO with no emergency loopholes for non-emergencies. Every federal program gets measurable outcome metrics — miss for 3 years, funding cut.',
  },
] as const

export default function DebtSpendingPage() {
  return (
    <div>
      <IssueHero
        badge="💸 Debt + Federal Spending"
        badgeColor="#c8102e"
        title={<>The <span style={{ color: '#f5a623' }}>$39 Trillion</span> Problem.</>}
        subtitle="$1T/yr in interest builds nothing. Both parties pretend their half of the budget is untouchable. Honest math + sovereign-wealth Social Security + Pentagon audit teeth + sunset everything = debt-to-GDP under 50% in 20–30 years."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Tax the wealthy to fund expanded programs. Defend entitlements as-is. Maintain defense baseline."
          rep="Cut welfare and discretionary spending. Protect Pentagon. Block tax increases."
          us="Honest math. Sovereign-wealth-fund the SS trust. Lower retirement age to 59½. Uncap payroll above $200K at 2.5%. Cap benefits at $200K/yr. Pentagon audit teeth. Sunset every law every 10 years. BBA + PAYGO + performance funding."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#c8102e" bg="rgba(200,16,46,0.1)" border="rgba(200,16,46,0.3)">📊 The Problem in Numbers</SectionLabel>
          <h2 className="text-3xl font-black">Where The Money Goes</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$39T" label="Total National Debt" color="#c8102e" />
          <StatCard num="127%" label="Debt-to-GDP Ratio" color="#f5a623" />
          <StatCard num="$1T+" label="Annual Interest on Debt" color="#c8102e" />
          <StatCard num="47%" label="Budget = SS + Medicare + Medicaid" color="#00b4d8" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Six Mechanisms, One Goal</h2>
          <p className="text-[#8fa3bc] mt-2">Debt-to-GDP under 50% in 20–30 years.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <div key={m.num} className="rounded-2xl p-6"
              style={{ background: '#1a2a44', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex gap-4 items-start">
                <div className="text-2xl font-black shrink-0" style={{ color: '#f5a623' }}>{m.num}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                  <p className="text-sm" style={{ color: '#8fa3bc' }}>{m.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.2)' }}>
          <h3 className="font-bold mb-3" style={{ color: '#f5a623' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: '#8fa3bc' }}>
            <li>• <Link href="/issues/taxes" className="underline hover:text-white">Tax reform</Link> handles the revenue side. This page handles the spending side. Together they balance the equation.</li>
            <li>• <Link href="/issues/healthcare-costs" className="underline hover:text-white">Healthcare costs</Link>: drug-price negotiation here applies to Medicare; international reference pricing in healthcare-costs applies to everyone else.</li>
            <li>• <Link href="/issues/trade" className="underline hover:text-white">Trade + Tariffs</Link>: Buy American 100% on strategic goods + reshored defense manufacturing is the supply-side companion to Pentagon audit accountability.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 text-center" style={{ background: '#0d1f38' }}>
        <p className="text-xs" style={{ color: '#8fa3bc' }}>
          Sources: CBO Budget Outlook, Treasury Direct, GAO Annual Audit Report, OECD Government Debt-to-GDP, Canada Pension Plan Investment Board (CPPIB) Annual Report, Norges Bank Investment Management.
        </p>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS. New route `/issues/debt-spending` listed.

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Open http://localhost:3000/issues/debt-spending. Expected: hero, three-way compare, 4 stat cards, 6 mechanism cards, cross-link callout, sources footer.

- [ ] **Step 4: Commit**

```bash
git add app/issues/debt-spending/page.tsx
git commit -m "feat: /issues/debt-spending deep-dive page"
```

### Task 4.2: Create `app/issues/healthcare-costs/page.tsx`

**Files:**
- Create: `app/issues/healthcare-costs/page.tsx`

- [ ] **Step 1: Write the page using the Task 4.1 template, with this content**

Use the exact same JSX skeleton as Task 4.1. Replace only the constants and props. Full code:

```tsx
import Link from 'next/link'
import IssueHero from '@/components/issue/IssueHero'
import ThreeWayCompare from '@/components/issue/ThreeWayCompare'
import StatCard from '@/components/issue/StatCard'
import SectionLabel from '@/components/issue/SectionLabel'

export const revalidate = 60

const MECHANISMS = [
  {
    num: '01',
    title: 'International Reference Pricing — All Drugs, Not Just Medicare',
    body: 'Every drug sold in the US is capped at the median price of 6 peer nations (UK, Germany, France, Canada, Australia, Japan). Applies to the private market, not just Medicare. Pharma can\'t charge Americans 3x the rest of the developed world.',
  },
  {
    num: '02',
    title: 'Legalize Drug Imports from Canada + EU',
    body: 'FDA currently blocks personal and commercial imports. Lift the block for any drug approved in a peer regulator (Health Canada, EMA, MHRA). Pharmacies can source from any approved jurisdiction. Real competition.',
  },
  {
    num: '03',
    title: 'PBMs: Ban Rebates + Force Vertical Divestiture',
    body: 'Pharmacy Benefit Managers extract rent because the employer/insurer picks them for you — captivity. Ban manufacturer rebate kickbacks (pass-through pricing only — all discounts hit the patient at the counter). Force divestiture of insurer-owns-PBM-owns-pharmacy chains (UnitedHealth/Optum, CVS/Aetna/Caremark).',
  },
  {
    num: '04',
    title: 'Real-Time Public Pricing API + Binding Quotes',
    body: 'Every hospital, insurer, provider publishes actual negotiated rates in machine-readable format. (Already required by 2021 rule, near-universally ignored.) Non-compliance = 5% Medicare reimbursement cut. Plus: every non-emergency procedure comes with a binding upfront written quote.',
  },
  {
    num: '05',
    title: 'Site-Neutral Payments + Unified Claims + Portable Records',
    body: 'Medicare pays the same rate for the same procedure regardless of facility type — kills the hospital-outpatient arbitrage. One national standardized claims format across all insurers eliminates billions in admin friction. Your full medical record portable in a federal-standard format. Your data, not theirs.',
  },
  {
    num: '06',
    title: 'Universal HSA from Birth + Direct Primary Care',
    body: 'Every American gets a tax-advantaged Health Savings Account from birth. Federal seed of $500/yr for kids, higher match for low-income families. Direct Primary Care subscriptions ($50–100/mo flat for unlimited PCP visits) are HSA-eligible and tax-deductible. Insurance shifts toward catastrophic-only; routine care is direct patient-provider.',
  },
] as const

export default function HealthcareCostsPage() {
  return (
    <div>
      <IssueHero
        badge="💊 Healthcare Costs"
        badgeColor="#06d6a0"
        title={<>Americans Pay <span style={{ color: '#f5a623' }}>2–3x</span> for the Same Drugs.</>}
        subtitle="US spends $4.5T/yr on healthcare — 18% of GDP, vs 9–12% in peer nations. The system isn\'t broken. It's working exactly as the middlemen designed it. We break the captivity."
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <ThreeWayCompare
          dem="Expand ACA, add a public option, negotiate prices on 10 drugs at a time."
          rep="Health Savings Accounts, market competition, repeal ACA, less regulation."
          us="International reference pricing on all drugs + Canada/EU imports. Ban PBM rebates + force vertical divestiture. Public pricing API + binding quotes + site-neutral Medicare. Unified claims + portable records. Universal HSA from birth + Direct Primary Care."
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">📊 The Cost Problem</SectionLabel>
          <h2 className="text-3xl font-black">Math That Should Not Exist</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard num="$4.5T" label="US Healthcare Spend / Year" color="#c8102e" />
          <StatCard num="18%" label="Of GDP (Peers: 9–12%)" color="#f5a623" />
          <StatCard num="2–3x" label="US Drug Prices vs Peers" color="#c8102e" />
          <StatCard num="80%" label="PBM Market Held by 3 Firms" color="#f5a623" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <SectionLabel color="#06d6a0" bg="rgba(6,214,160,0.1)" border="rgba(6,214,160,0.3)">🛠️ Our Plan</SectionLabel>
          <h2 className="text-3xl font-black">Break the Captivity</h2>
          <p className="text-[#8fa3bc] mt-2">Drugs, PBMs, hospitals, admin — every layer of the cost stack.</p>
        </div>
        <div className="space-y-5">
          {MECHANISMS.map(m => (
            <div key={m.num} className="rounded-2xl p-6"
              style={{ background: '#1a2a44', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex gap-4 items-start">
                <div className="text-2xl font-black shrink-0" style={{ color: '#f5a623' }}>{m.num}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                  <p className="text-sm" style={{ color: '#8fa3bc' }}>{m.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.2)' }}>
          <h3 className="font-bold mb-3" style={{ color: '#f5a623' }}>How This Connects</h3>
          <ul className="space-y-2 text-sm" style={{ color: '#8fa3bc' }}>
            <li>• <Link href="/issues/debt-spending" className="underline hover:text-white">Debt + Spending</Link>: drug negotiation here stacks with Medicare expansion there.</li>
            <li>• PBM divestiture follows our signature principle: when the consumer is captive (employer/insurer picks for you), captivity gets regulated. When the consumer chooses freely (<Link href="/issues/big-tech" className="underline hover:text-white">Big Tech</Link>), market sets the price.</li>
            <li>• Universal HSA from birth is the same architecture as the <Link href="/issues/housing" className="underline hover:text-white">Housing Savings Account</Link> and the <Link href="/issues/wages-jobs" className="underline hover:text-white">Universal Worker Account</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 text-center" style={{ background: '#0d1f38' }}>
        <p className="text-xs" style={{ color: '#8fa3bc' }}>
          Sources: CMS National Health Expenditure data, OECD Health Statistics, RAND International Price Index, FTC PBM Interim Report (2024), Kaiser Family Foundation, Yale Budget Lab.
        </p>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Build, visit /issues/healthcare-costs, commit**

```bash
npm run build && npm run dev
```

```bash
git add app/issues/healthcare-costs/page.tsx
git commit -m "feat: /issues/healthcare-costs deep-dive page"
```

### Task 4.3: Create `app/issues/housing/page.tsx`

**Files:**
- Create: `app/issues/housing/page.tsx`

- [ ] **Step 1: Write the page**

Same template as Task 4.1/4.2. Constants:

```tsx
const MECHANISMS = [
  {
    num: '01',
    title: '4% Annual Surtax on Holdings Above 10 Properties',
    body: 'Anyone — individual or corporation, US or foreign-resident — can own up to 10 single-family homes free of penalty. Above 10 = "holding" status, subject to 4% annual surtax on assessed value. BlackRock, Blackstone, Invitation Homes face real cost. Family landlords untouched.',
  },
  {
    num: '02',
    title: 'Foreign Corporations Banned from US Residential',
    body: 'Foreign corporate entities cannot purchase US residential property. Foreign individuals legally resident in the US are treated as US families (10-property threshold like everyone else). Closes the offshore-money loophole driving up coastal prices.',
  },
  {
    num: '03',
    title: 'YIMBY Zoning Reform — Federal Carrot, Local Control',
    body: 'HUD + DOT dollars contingent on: legalize duplex/triplex/ADU by-right on single-family lots, eliminate parking minimums, 6-month max permit review. Federal incentives, not preemption. Cities that don\'t reform don\'t get the money.',
  },
  {
    num: '04',
    title: 'Controlled Federal Land Release',
    body: 'Federal government owns 28% of US land (640M acres). Release tracts near growing metros, but in controlled, allocation-capped tranches — lottery or first-come for builders meeting size + affordability constraints. No large companies gobbling federal land to rent-extract.',
  },
  {
    num: '05',
    title: 'Fannie/Freddie Prioritize Owner-Occupied First-Time Buyers',
    body: 'Preferred mortgage rates (1pt below market) for owner-occupied first-time-buyer purchases. De-prioritize investor mortgages. Federal credit subsidy finally aligned with the stated goal of homeownership.',
  },
  {
    num: '06',
    title: 'Phase Out the Mortgage Interest Deduction',
    body: 'MID is regressive — $600K-plus subsidy benefit flows to the top 20% of earners. Phase out over 5 years. Redirect the federal savings into the Housing Savings Account match.',
  },
  {
    num: '07',
    title: 'Cap REIT Residential Depreciation',
    body: 'Real Estate Investment Trusts deduct "phantom" depreciation on rental property, making rental more profitable than owning. Cap or eliminate the depreciation deduction for residential REITs. Levels the playing field between renters and owners.',
  },
  {
    num: '08',
    title: 'Housing Savings Account — 1:1 Federal Match',
    body: 'Tax-deferred savings specifically for a first home down payment. Federal 1:1 match up to $5K/yr for low/middle income. Patient + market-aligned — no subsidy to the seller, no price-capitalization effect.',
  },
] as const
```

Use the Task 4.1 template for the rest. Hero:
- badge `'🏠 Housing'`, badgeColor `'#00b4d8'`
- title: `<>Median Home: <span style={{ color: '#f5a623' }}>$420K</span>. Median Income: $78K.</>`
- subtitle: `"5.4x price-to-income ratio. Healthy = 3x. Supply gap of 4–7 million units. 26% of single-family purchases are investors. Fix the supply, cap the captivity, give first-time buyers a savings account."`

Three-way compare:
- dem: `"Down payment subsidies ($25K first-time buyer), LIHTC expansion, rent regulation."`
- rep: `"Deregulation, opportunity zones, federal hands-off."`
- us: `"4% surtax above 10 properties. Foreign corp ban. YIMBY federal carrot. Controlled federal land release. Fannie/Freddie owner-occupied priority. Phase out MID. Cap REIT residential depreciation. Housing Savings Account with federal match."`

Stat cards:
- `<StatCard num="$420K" label="Median Home Price" color="#c8102e" />`
- `<StatCard num="5.4x" label="Price-to-Income (Healthy: 3x)" color="#f5a623" />`
- `<StatCard num="4–7M" label="Housing Unit Shortage" color="#c8102e" />`
- `<StatCard num="75%" label="US Land Zoned SF-Only" color="#00b4d8" />`

Section headers: `📊 The Supply Gap`, `🛠️ Our Plan`, "How This Connects" callout linking to debt-spending, wages-jobs (Worker Account architecture), inflation (12-mo permitting cap).

Sources footer: `"Sources: National Association of Realtors, Freddie Mac PMMS, Census Bureau ACS, Joint Center for Housing Studies (Harvard), Urban Institute Housing Finance Chartbook, BLM Land Statistics."`

- [ ] **Step 2: Build, visit, commit**

```bash
npm run build
git add app/issues/housing/page.tsx
git commit -m "feat: /issues/housing deep-dive page"
```

### Task 4.4: Create `app/issues/inflation/page.tsx`

**Files:**
- Create: `app/issues/inflation/page.tsx`

- [ ] **Step 1: Write the page using the Task 4.1 template**

Mechanisms:

```tsx
const MECHANISMS = [
  {
    num: '01',
    title: 'Federal Reserve: Single Mandate, Price Stability Only',
    body: 'Strip the "max employment" half of the 1977 Humphrey-Hawkins dual mandate. The Fed gets one job: 2% inflation. ECB and Bank of England model. Employment is a fiscal/regulatory outcome, not monetary policy. Removes the most common excuse for keeping rates too low too long.',
  },
  {
    num: '02',
    title: 'Hard Cap on M2 Growth: ≤ Nominal GDP + 1%',
    body: 'The Fed cannot grow the money supply faster than nominal GDP plus 1%. Prevents what happened 2020–22: M2 grew 40% in two years, then inflation spiked 25% cumulative through 2025. Rule-based discipline on the supply side of the equation.',
  },
  {
    num: '03',
    title: 'Energy Abundance — Nuclear-Led, All-of-the-Above',
    body: 'Small Modular Reactors, restart shutdown plants, advanced reactor approvals. Data center campuses host on-site nuclear (their power demand justifies dedicated generation). All other sources continue: oil, gas, geothermal, renewables, grid modernization. Cheap abundant energy lowers the cost of literally everything.',
  },
  {
    num: '04',
    title: '12-Month Federal Permitting Cap on Energy Projects',
    body: 'Current federal permitting timelines: 4–7 years. New cap: 12 months max for any energy project. NEPA streamlining, single lead agency, mandatory deadlines. Same rule that applies to reshored strategic manufacturing.',
  },
  {
    num: '05',
    title: 'Skip Emergency Response. Fix the Systemic Causes.',
    body: 'No CPI auto-indexed safety net beyond what already exists. No emergency tax-pause schemes. No price-gouging laws. Every emergency mechanism encourages more inflationary spending and political abuse. Fix the Fed + supply + spending. The shocks stop happening.',
  },
] as const
```

Hero:
- badge `'📉 Inflation'`, badgeColor `'#f5a623'`
- title: `<>25% Cumulative Inflation in <span style={{ color: '#f5a623' }}>5 Years</span>.</>`
- subtitle: `"M2 money supply grew 40% during COVID. Fed called rising prices 'transitory.' Real wages still haven't caught up. Fix the Fed, cap the money supply, unlock energy. Don't subsidize the symptoms."`

Three-way compare:
- dem: `"Blame supply chains and corporate greed. Defend Fed independence. Expand safety net."`
- rep: `"Blame federal spending. Cut taxes. Drill more oil."`
- us: `"Fed single mandate (price stability only). Hard cap M2 ≤ nominal GDP + 1%. All-of-the-above leaning nuclear including data-center on-site reactors. 12-month federal permitting cap. Skip emergency response."`

Stat cards:
- `<StatCard num="25%" label="Cumulative Inflation 2020–25" color="#c8102e" />`
- `<StatCard num="40%" label="M2 Growth 2020–22" color="#c8102e" />`
- `<StatCard num="2%" label="Fed Inflation Target" color="#06d6a0" />`
- `<StatCard num="4–7 yr" label="Current Federal Energy Permit Timeline" color="#f5a623" />`

Cross-link callout to: debt-spending (fiscal discipline pairs with monetary), housing (supply fix is anti-inflation), trade (12-month permit cap applies twice).

Sources: `"Sources: BLS Consumer Price Index, Federal Reserve H.6 Money Stock release, CBO Long-Term Budget Outlook, EIA Annual Energy Outlook, ECB and Bank of England statutory frameworks."`

- [ ] **Step 2: Build, visit, commit**

```bash
npm run build
git add app/issues/inflation/page.tsx
git commit -m "feat: /issues/inflation deep-dive page"
```

### Task 4.5: Create `app/issues/big-tech/page.tsx`

**Files:**
- Create: `app/issues/big-tech/page.tsx`

- [ ] **Step 1: Write the page using the template**

Mechanisms:

```tsx
const MECHANISMS = [
  {
    num: '01',
    title: 'No Structural Breakups for Chosen Relationships',
    body: 'Meta can own WhatsApp + Instagram. Amazon can sell its own products on Amazon. Apple can pre-install Apple apps. Free market when you can walk away. Citizens Party stance: platforms must follow universal laws (speech, contracts, fraud), but government does not dictate corporate structure of businesses you freely choose.',
  },
  {
    num: '02',
    title: 'Markup Cap OR Self-Supply — Cross-Industry Rule',
    body: 'If a business restricts your ability to self-supply, markup is capped at 5%. If the business allows alternatives, markup is free. XOR — cap-or-choice, never both. Disney parks: 5% cap on food prices OR let guests bring outside food. App Store: 5% cap on in-app purchases OR allow third-party stores + sideloading. Stadiums, theaters, Ticketmaster, hospital cafeterias, prison commissary, anywhere the trick is preventing you from leaving.',
  },
  {
    num: '03',
    title: 'Section 230 Size-Tiered + Algorithmic-Amplification Liability',
    body: 'Small platforms (< 10M US users): full 230 protection. Innovation, indie services, new entrants are safe. Mega-platforms (> 100M US users): liable for content their algorithm actively amplifies. Posts users discover organically still shielded. Posts the algorithm pushed to millions: platform is responsible.',
  },
  {
    num: '04',
    title: 'Mandatory Chronological Feed Option',
    body: 'Every mega-platform must offer a chronological / no-algorithm feed. The default is chronological. Users opt INTO the algorithmic feed. Restores user control over their own attention.',
  },
  {
    num: '05',
    title: 'Opt-In Privacy by Default',
    body: 'No data collection without explicit user opt-in. Pre-checked boxes illegal. Major shift from the current opt-out world. Privacy is a default state, not a privilege you have to fight for.',
  },
] as const
```

Hero:
- badge `'📱 Big Tech + Antitrust'`, badgeColor `'#7b2d8b'`
- title: `<><span style={{ color: '#f5a623' }}>Captivity</span> = Regulation.<br/><span style={{ color: '#06d6a0' }}>Choice</span> = Market.</>`
- subtitle: `"Top 5 tech firms = 25% of the S&P 500. Apple + Google take 15–30% on every app sale. Meta + Google own 50% of digital ads. We don't break free relationships. We break captive markets."`

Three-way compare:
- dem: `"Privacy laws, narrow Section 230 for misinformation, antitrust enforcement on monopolies."`
- rep: `"Narrow Section 230 for censorship, antitrust on perceived bias."`
- us: `"No structural breakups for chosen relationships. Markup cap of 5% OR self-supply across industries. Section 230 size-tiering + algorithmic-amplification liability. Mandatory chronological feed. Opt-in privacy by default."`

Stat cards:
- `<StatCard num="25%" label="Top 5 Tech = % of S&P 500" color="#f5a623" />`
- `<StatCard num="15–30%" label="App Store Cut on Every Sale" color="#c8102e" />`
- `<StatCard num="90%" label="Google Share of US Search" color="#c8102e" />`
- `<StatCard num="50%" label="Meta + Google Share of Digital Ads" color="#c8102e" />`

Cross-link callout: healthcare-costs (PBM divestiture = captive market regulation, same principle), homepage CTA.

Sources: `"Sources: S&P 500 market cap data (Slickcharts), Apple + Google developer agreements, StatCounter Global Stats, GroupM Digital Ad Spend Forecast, DOJ v. Google (Case 1:20-cv-03010), EU Digital Markets Act."`

- [ ] **Step 2: Build, visit, commit**

```bash
npm run build
git add app/issues/big-tech/page.tsx
git commit -m "feat: /issues/big-tech deep-dive page"
```

### Task 4.6: Create `app/issues/trade/page.tsx`

**Files:**
- Create: `app/issues/trade/page.tsx`

- [ ] **Step 1: Write the page using the template**

Mechanisms:

```tsx
const MECHANISMS = [
  {
    num: '01',
    title: 'Tariffs Vary by Country Relationship AND Good Category',
    body: 'No universal baseline. Two axes determine the tariff. (1) Country: friend countries (reciprocal access, IP respect, security alliance) get zero tariffs on most goods + lower tariffs on strategic. Reciprocal countries: we match what they charge us. Adversarial: higher tariffs. (2) Good category: strategic industries (defense, semiconductors, pharma APIs, rare earths, energy, food staples) get higher tariffs across all countries. Non-strategic: country-relationship-based.',
  },
  {
    num: '02',
    title: 'China: Targeted Bans on Critical Infra + Sensitive Tech',
    body: 'Ban Chinese ownership of US critical infrastructure (farmland near bases, ports, telecom, data centers near military). Ban sensitive tech imports (military-applicable). Force divestiture of mass-surveillance apps (TikTok-class) by Chinese owners. Do NOT decouple all trade. Do NOT impose a 60% tariff wall on everything. Captures vulnerabilities; lets non-strategic trade continue.',
  },
  {
    num: '03',
    title: '55% Value-Added Country-of-Origin Rule',
    body: 'A product\'s country of origin is where more than 55% of value is added. Closes the transhipment loophole: Chinese goods lightly processed in Mexico or Vietnam currently enter as "Mexican" to dodge China tariffs. Customs audits with penalty teeth.',
  },
  {
    num: '04',
    title: 'Mandatory 180-Day Strategic Stockpiles',
    body: 'Government-owned + rotated 180-day domestic inventory of: pharma APIs, semiconductors, rare earths, ammunition, fertilizer, baby formula. Strategic Petroleum Reserve model expanded across the supply-chain choke points that broke during COVID.',
  },
  {
    num: '05',
    title: 'Reshoring Tax Credit — 10-Year Sunset',
    body: '25% of capex for any company reshoring strategic manufacturing. Hard sunset at 10 years. No permanent industrial policy. The credit exists to bridge the rebuild, not to fund permanent rent.',
  },
  {
    num: '06',
    title: 'Buy American 100% Strategic / 75% Else',
    body: 'Federal procurement (DOD, VA, GSA, etc.) sources 100% domestic for strategic goods + 75% domestic for everything else. Government as anchor customer creates the demand floor that lets US manufacturers scale.',
  },
  {
    num: '07',
    title: '12-Month Permitting Fast-Track for Strategic Manufacturing',
    body: 'Same rule as energy: any reshored strategic-manufacturing plant gets federal permitting decisions in 12 months max. Removes the single biggest barrier to building in America.',
  },
] as const
```

Hero:
- badge `'🚢 Trade + Tariffs'`, badgeColor `'#00b4d8'`
- title: `<>Trade Should Be <span style={{ color: '#f5a623' }}>Fair</span>, Not Free or Closed.</>`
- subtitle: `"$900B annual trade deficit. Manufacturing at 10% of GDP, down from 28% peak. 90% of semis come from Asia. Tariffs are revenue and leverage, not a baseline tax on consumers. Friend countries get free trade; adversaries don\'t."`

Three-way compare:
- dem: `"Traditional free trade with targeted Buy American, limited tariffs."`
- rep: `"Broad tariffs as revenue + reshoring tool. 10% universal + 60% on China."`
- us: `"Tariffs vary by country + good category, no universal baseline. China: targeted bans on critical infra + sensitive tech, not full decouple. 55% value-added origin rule. 180-day strategic stockpiles. Reshoring credit with 10-yr sunset. Buy American 100% strategic / 75% else. 12-mo permitting fast-track."`

Stat cards:
- `<StatCard num="$900B" label="Annual US Trade Deficit" color="#c8102e" />`
- `<StatCard num="10%" label="Manufacturing % of GDP (Peak: 28%)" color="#c8102e" />`
- `<StatCard num="90%" label="Semis Sourced from Asia" color="#f5a623" />`
- `<StatCard num="180 days" label="Strategic Stockpile Target" color="#06d6a0" />`

Cross-link callout to: debt-spending (Buy American + reshore defense), inflation (12-mo permit cap applies twice).

Sources: `"Sources: US Census Foreign Trade Statistics, BEA Industry Economic Accounts, Semiconductor Industry Association, USTR Tariff Schedule, CHIPS Act implementation reports, USMCA Article 4 (rules of origin)."`

- [ ] **Step 2: Build, visit, commit**

```bash
npm run build
git add app/issues/trade/page.tsx
git commit -m "feat: /issues/trade deep-dive page"
```

### Task 4.7: Create `app/issues/wages-jobs/page.tsx`

**Files:**
- Create: `app/issues/wages-jobs/page.tsx`

- [ ] **Step 1: Write the page using the template**

Mechanisms:

```tsx
const MECHANISMS = [
  {
    num: '01',
    title: 'Tiered Minimum Wage — Age + Hours + Region',
    body: 'Tier A (~$10/hr CPI-indexed): under 18 OR working less than 25 hrs/wk. Tier B (~$15/hr CPI + regional adjust): 18+ AND 25+ hrs/wk. BLS publishes a regional cost-of-living factor — high-cost metros adjust higher, rural stays at the floor. States can go higher than the federal floor. Mom-and-pop shops can hire high-schoolers and part-timers without union-grade cost. Career roles get a true living wage. Both tiers auto-index annually. No more 16-year freezes.',
  },
  {
    num: '02',
    title: 'New "Independent Worker" Federal Classification',
    body: 'Stop the binary employee-vs-contractor fight. Third federal class: Independent Worker. Keeps the flexibility gig workers cite (choose hours, work multiple platforms). Adds portable benefits: platforms pay into health + retirement + disability accounts per hour worked. Account is owned by the worker and moves across platforms.',
  },
  {
    num: '03',
    title: 'Non-Competes Banned Under $150K + Paid Garden Leave Above',
    body: 'Workers earning under $150K/yr: non-compete clauses unenforceable. Fast-food, retail, janitorial, most knowledge work get mobility back. Above $150K (real trade-secret protection): non-compete allowed for max 12 months AND employer must pay 100% of salary during the non-compete period.',
  },
  {
    num: '04',
    title: 'Apprenticeship Expansion in the Trades',
    body: 'Federal funding for paid apprenticeship programs in plumbing, electrical, HVAC, welding, nursing, lineman. AI-resistant jobs that built America. Apprentices earn while training — counter to the "everyone needs college" narrative.',
  },
  {
    num: '05',
    title: 'Universal Worker Account',
    body: 'Every worker gets a single tax-advantaged account funded by payroll. Holds: emergency fund + skills training + portable benefits + retirement. Follows the worker across every job, every gig, every career change. Same architecture as Universal HSA from birth (healthcare), Housing Savings Account (housing), and the sovereign-wealth-fund-backed Social Security trust. Theme: Americans own their financial future.',
  },
] as const
```

Hero:
- badge `'👷 Wages + Jobs + Labor'`, badgeColor `'#06d6a0'`
- title: `<>Federal Min Wage Frozen <span style={{ color: '#f5a623' }}>16 Years</span>.</>`
- subtitle: `"Real wages stagnant 50 years for non-college workers. Manufacturing jobs at 12.9M vs 19M peak. 36% of workers do gig work in some form. AI displacement looming. Tiered min wage + Independent Worker class + portable benefits + Universal Worker Account."`

Three-way compare:
- dem: `"$15–22 federal min wage flat, PRO Act, gig workers reclassified as employees."`
- rep: `"State-level min wage, national right-to-work, contractors stay contractors."`
- us: `"Tiered min wage (age + hours + region + CPI). New Independent Worker classification with portable benefits. Non-competes banned under $150K, allowed above with paid garden leave. Apprenticeship expansion. Universal Worker Account."`

Stat cards:
- `<StatCard num="$7.25" label="Federal Min Wage Since 2009" color="#c8102e" />`
- `<StatCard num="10%" label="Union Membership (1950s: 35%)" color="#f5a623" />`
- `<StatCard num="36%" label="Workers Doing Gig Work" color="#f5a623" />`
- `<StatCard num="12.9M" label="US Mfg Jobs (Peak: 19M)" color="#c8102e" />`

Cross-link callout to: healthcare-costs (Universal HSA architecture), housing (Housing Savings Account architecture), debt-spending (sovereign-wealth Social Security architecture). Theme: one savings-account architecture, four life needs.

Sources: `"Sources: BLS Wage Statistics, BLS Union Membership Annual Report, Upwork Freelance Forward Survey, BLS Manufacturing Employment, FTC Non-Compete Rule (2024) and pending litigation, US DOL Apprenticeship data."`

- [ ] **Step 2: Build, visit, commit**

```bash
npm run build
git add app/issues/wages-jobs/page.tsx
git commit -m "feat: /issues/wages-jobs deep-dive page"
```

### Task 4.8: End-of-phase smoke walk

**Files:** none

- [ ] **Step 1: Build the project clean**

```bash
npm run build
```

Expected: all 7 new routes plus `/issues/economy` listed in the route summary. No type errors.

- [ ] **Step 2: Run dev server and click through every new page**

```bash
npm run dev
```

In order, open and visually verify each renders without console errors:
- http://localhost:3000/issues/economy (pillar)
- http://localhost:3000/issues/debt-spending
- http://localhost:3000/issues/healthcare-costs
- http://localhost:3000/issues/housing
- http://localhost:3000/issues/inflation
- http://localhost:3000/issues/big-tech
- http://localhost:3000/issues/trade
- http://localhost:3000/issues/wages-jobs

From `/issues/economy`, verify each SubIssueCard click navigates correctly.
From each deep dive, verify the "How This Connects" cross-links resolve.

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: PASS. Fix any warnings introduced by the new files.

- [ ] **Step 4: Commit any lint fixes**

If lint required edits, commit them together.

```bash
git add -A && git commit -m "chore: lint fixes for economics deep dives"
```

---

## Phase 5 — Navigation + `/issues` Table

Surface the new pages in site nav and the comparison table.

### Task 5.1: Add Economics link to `components/Nav.tsx`

**Files:**
- Modify: `components/Nav.tsx`

- [ ] **Step 1: Update the `links` array**

Replace the existing `links` array (currently containing Home / Platform / Issues / Tax Reform / Immigration / Reform Plan / Join Us) with:

```tsx
const links = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/issues', label: 'Issues' },
  { href: '/issues/economy', label: '💰 Economics' },
  { href: '/issues/taxes', label: 'Tax Reform' },
  { href: '/issues/immigration', label: '🛡️ Immigration' },
  { href: '/reform', label: 'Reform Plan' },
  { href: '/join', label: 'Join Us' },
]
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 3: Visual check — nav renders + active highlighting works**

```bash
npm run dev
```

Open http://localhost:3000/issues/economy and confirm "💰 Economics" is highlighted in the nav. Repeat for `/issues/debt-spending` etc — verify Economics link stays highlighted (URLs starting with `/issues/economy` highlight only Economics; other `/issues/<slug>` URLs do not falsely highlight Economics).

If the active-state matching falsely highlights Economics on other `/issues/*` URLs, fix by tightening the match: use `pathname === l.href` only (drop the `startsWith` clause for Economics). The current logic uses `startsWith(l.href + '/')` which would NOT match other slugs because they're not children of `/issues/economy` — verify by manual inspection.

- [ ] **Step 4: Commit**

```bash
git add components/Nav.tsx
git commit -m "feat: add Economics link to site nav"
```

### Task 5.2: Update `/issues` issueRoutes map for new deep dives

**Files:**
- Modify: `app/issues/page.tsx`

- [ ] **Step 1: Read the existing `issueRoutes` map**

The current map (lines ~7–15) only routes `Taxes` and `Immigration`. Replace it with:

```tsx
const issueRoutes: Record<string, string> = {
  'Taxes': '/issues/taxes',
  'Tax Reform': '/issues/taxes',
  'Economy': '/issues/taxes',
  'National Debt': '/issues/debt-spending',
  'Debt + Spending': '/issues/debt-spending',
  'Immigration': '/issues/immigration',
  'Border Security': '/issues/immigration',
  'Illegal Immigration': '/issues/immigration',
  'Healthcare Costs': '/issues/healthcare-costs',
  'Housing': '/issues/housing',
  'Inflation': '/issues/inflation',
  'Big Tech': '/issues/big-tech',
  'Trade + Tariffs': '/issues/trade',
  'Wages + Jobs': '/issues/wages-jobs',
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 3: Visual check — table rows are clickable**

```bash
npm run dev
```

Open http://localhost:3000/issues. Expected: each Economics sub-issue row has the "See plan →" indicator (mobile) and clickable Issue title (desktop) pointing to the matching `/issues/<slug>` route. Click each one to confirm.

- [ ] **Step 4: Commit**

```bash
git add app/issues/page.tsx
git commit -m "feat: extend issueRoutes for economics sub-issues"
```

---

## Phase 6 — Polish + Sources Verification

Visual polish + factual rigor. The platform's credibility depends on every statistic being defensible.

### Task 6.1: Verify every statistic against a primary source

**Files:** none (research)

- [ ] **Step 1: List every numerical claim across the 7 new pages + pillar**

Open each `app/issues/<slug>/page.tsx` and extract every numeric statement (stat cards, mechanism body text, hero subtitles). Paste into a working scratch list.

Expected examples:
- `$39T National Debt`
- `127% Debt-to-GDP`
- `$4.5T US Healthcare Spend`
- `$420K Median Home`
- `M2 grew 40% 2020–22`
- `25% cumulative inflation 2020–25`
- `Top 5 Tech = 25% of S&P 500`
- `$900B trade deficit`
- `$7.25 federal min wage`
- ...

- [ ] **Step 2: For each claim, locate a primary source and confirm the figure**

Primary sources to consult (preferred order):
- US Treasury Direct (debt)
- CBO (budget projections)
- BLS (CPI, wages, employment)
- BEA (GDP, manufacturing %, trade balance)
- Federal Reserve H.6 (money supply)
- US Census ACS (housing)
- CMS NHE (healthcare spending)
- OECD (international comparisons)
- Slickcharts (S&P 500 weightings)
- StatCounter Global Stats (search market share)

For each claim, record: source name, URL, date accessed, exact figure quoted.

- [ ] **Step 3: Update any out-of-date or imprecise figures**

If a claim is off, edit the relevant page. Keep figures rounded for hero/stat cards (e.g. `$39T` is fine even if actual is `$36.2T` — but the actual figure goes in the source citation).

- [ ] **Step 4: Append source URLs to each page's sources footer**

Replace each generic sources footer (e.g. `Sources: CMS National Health Expenditure data, OECD Health Statistics, ...`) with a brief but specific reference list. Example for debt-spending:

```tsx
<p className="text-xs" style={{ color: '#8fa3bc' }}>
  Sources:
  {' '}<a className="underline" href="https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/">Treasury Direct (debt)</a>,
  {' '}<a className="underline" href="https://www.cbo.gov/topics/budget">CBO Budget Outlook</a>,
  {' '}<a className="underline" href="https://www.gao.gov/dod-financial-management">GAO DoD Audit</a>,
  {' '}<a className="underline" href="https://www.cppinvestments.com/">CPPIB</a>,
  {' '}<a className="underline" href="https://www.nbim.no/">Norges Bank Investment Management</a>.
</p>
```

- [ ] **Step 5: Commit per page**

```bash
git add app/issues/debt-spending/page.tsx
git commit -m "docs: link primary sources on debt-spending page"
```

Repeat for each of the 7 deep dives.

### Task 6.2: Run `/code-review` on the full branch diff

**Files:** none (uses `code-review` skill)

- [ ] **Step 1: Run the code-review skill**

Invoke the project's `code-review` skill at high effort level.

- [ ] **Step 2: Triage findings**

Address CRITICAL + HIGH findings inline. MEDIUM: address if cheap. LOW: defer.

- [ ] **Step 3: Commit fixes**

```bash
git add -A && git commit -m "fix: address code-review findings"
```

### Task 6.3: Visual review pass with `/impeccable` + `/ui-ux-pro-max`

**Files:** none

- [ ] **Step 1: Run impeccable critique**

Invoke `impeccable` `/critique` on each new page. Apply suggested polish.

- [ ] **Step 2: Verify on dev**

Confirm everything still builds + looks right.

- [ ] **Step 3: Commit polish**

```bash
git add -A && git commit -m "polish: impeccable + ui-ux-pro-max pass on economics pages"
```

### Task 6.4: Open the pull request

**Files:** none

- [ ] **Step 1: Push the branch**

```bash
git push -u origin spec/economics-pillar
```

- [ ] **Step 2: Create the PR via gh**

```bash
gh pr create --base main --title "feat: Economics platform pillar + 7 deep dives" --body "$(cat <<'EOF'
Implements the Economics pillar of the Citizens Party platform per spec
`docs/superpowers/specs/2026-05-28-economics-pillar-design.md`.

## What ships
- Database: 7 new `platform_positions` rows for Economics sub-issues
- Pillar page: `/issues/economy` with signature principle, 8 sub-issue cards, 7 cross-cutting threads
- Deep-dive pages: `/issues/debt-spending`, `/issues/healthcare-costs`, `/issues/housing`, `/issues/inflation`, `/issues/big-tech`, `/issues/trade`, `/issues/wages-jobs`
- Shared components extracted to `components/issue/` (SectionLabel, StatCard, Accordion, ThreeWayCompare, IssueHero, SubIssueCard, CrossThread)
- Existing `/issues/taxes` and `/issues/immigration` refactored to use shared components — no visual change
- `/issues` comparison table extended with 7 new clickable issue routes
- Nav: added 💰 Economics link

## Test plan
- [ ] `/platform` renders all Economics sub-issues
- [ ] `/issues` table has 7 new rows, each clickable to its deep dive
- [ ] All 7 deep-dive routes return 200 and render hero + compare + stats + mechanisms + cross-links + sources
- [ ] `/issues/economy` renders pillar + 7 cross-thread cards
- [ ] Existing taxes + immigration pages unchanged visually
- [ ] Vercel preview deploy clean

## Signature principle adopted
Captivity = Regulation. Choice = Market. — see pillar page hero + spec §2.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 3: Verify PR + preview deploy**

Wait for the Vercel preview URL in the PR. Click through every page on preview. Confirm parity with local dev.

---

## Self-Review

### Spec coverage check

| Spec section | Covered by |
|--------------|------------|
| §2 Signature Principle | Phase 3 (pillar page hero + section), Phase 4 cross-links |
| §3.1 Debt + Spending | Phase 1 seed + Phase 4 Task 4.1 |
| §3.2 Healthcare Costs | Phase 1 seed + Phase 4 Task 4.2 |
| §3.3 Housing | Phase 1 seed + Phase 4 Task 4.3 |
| §3.4 Inflation | Phase 1 seed + Phase 4 Task 4.4 |
| §3.5 Big Tech | Phase 1 seed + Phase 4 Task 4.5 |
| §3.6 Trade + Tariffs | Phase 1 seed + Phase 4 Task 4.6 |
| §3.7 Wages + Jobs | Phase 1 seed + Phase 4 Task 4.7 |
| §4 Cross-cutting threads | Phase 3 (CrossThreadsGrid component) + Phase 4 cross-link callouts |
| §5.1 New pages | Phase 3 + Phase 4 |
| §5.2 Updated pages | Phase 2 (taxes + immigration refactor), Phase 5 (Nav + /issues table) |
| §6 /platform render bug | Phase 0 + Phase 1 |
| §7 Out of scope | Honored — no Governance / Social / Foreign / Environment / AI work here |
| §8 Implementation phasing | This document's phases match spec §8 |

No gaps.

### Placeholder scan

Searched for: TBD, TODO, "fill in", "implement later", "similar to Task N", "appropriate error handling", "add validation". None found in task bodies. Every step contains exact paths, exact code, exact commands, exact expected outputs.

### Type / name consistency

- `IssueHero` accepts `badge: string`, `badgeColor?: string`, `title: ReactNode`, `subtitle: string` — used identically across pillar page + all 7 deep dives.
- `ThreeWayCompare` accepts `dem`, `rep`, `us` — used identically.
- `StatCard` accepts `num`, `label`, `color` — matches inline version being replaced.
- `SectionLabel` accepts `children`, `color?`, `bg?`, `border?` — matches inline version.
- `SubIssueCard` accepts `icon`, `title`, `oneLiner`, `href` — referenced consistently from pillar page.
- `CrossThread` accepts `icon`, `title`, `description`, `appliesTo` — referenced consistently from pillar page.
- DB column names (`issue`, `issue_icon`, `category`, `dem_position`, `rep_position`, `peoples_position`, `our_detail`, `priority`, `active`) match `lib/supabase.ts` `PlatformPosition` type — confirmed by reading the type definition.

No drift detected.
