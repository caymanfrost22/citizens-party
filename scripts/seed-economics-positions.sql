-- Citizens Party Economics Pillar — sub-issue seed
-- Idempotent: uses ON CONFLICT (issue) DO UPDATE
-- Run via Supabase SQL editor.
-- Spec: docs/superpowers/specs/2026-05-28-economics-pillar-design.md

-- Ensure unique constraint exists so ON CONFLICT works
create unique index if not exists platform_positions_issue_key on platform_positions(issue);

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
