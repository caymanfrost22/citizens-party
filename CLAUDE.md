@AGENTS.md



# Platform Build — Pillar Status

Rank-first path. Build one pillar at a time. Hub page + sub-issue pages + Supabase `platform_positions` rows.

## ✅ Completed pillars

### 💰 Economics (DONE)
Hub: `/issues/economy`. 8 sub-issues, all shipped as deep-dive pages:
- `/issues/taxes` · `/issues/debt-spending` · `/issues/healthcare-costs` · `/issues/housing` · `/issues/inflation` · `/issues/big-tech` · `/issues/trade` · `/issues/wages-jobs`

### 🏛️ Governance (DONE — merged to main PR #4 on 2026-05-29)
Hub: `/issues/governance`. 6 sub-issues, all shipped + locked via full deep-dive walkthrough with explicit user picks per dimension:
- `/issues/term-limits` — 12yr House (6 terms) + 12yr Senate (2 terms) separate clocks, SCOTUS lifetime + age-80 mandatory retirement, presidency stays 8, Article V + Citizens Party self-pledge
- `/issues/campaign-finance` — 9 mechanisms. Statutory corp PAC ban, $10K individual cap indexed, force SuperPACs to $5K/donor, DISCLOSE Act, $200 democracy vouchers funded by lobbying surcharge, 24hr disclosure, coordination ban with criminal teeth, 28th Amendment campaign, lead-by-example pre-compliance
- `/issues/voting-reform` — 13 mechanisms in 3 sections. RCV all federal, 7-day early voting, no-excuse mail + signature/ID verify, federal holiday + paid PTO, auto-reg at 18 + same-day backup, federal photo ID replacing state DL with biometric opt-in, back-end SSA + USCIS verify at registration AND ID issuance, paper trail + risk-limiting audits, algorithmic redistricting, felons restored post-supervision, internet voting overseas military only, Elections Clause federal floor. 7-point civil liberties guardrails + voter-test sidebar
- `/issues/lobbying-ban` — 9 mechanisms. Lifetime ban on ex-members, 5yr senior cool-off w/ shadow lobbying captured, congressional stock trading ban, 24hr contact log, close FARA gap (AIPAC + Saudi + Qatar + Russia + China + Taiwan + UK universal rule), ban FARA-org PACs/SuperPACs, felony FARA + mandatory Special Counsel for repeat violators, single citizenship for federal office/clearance/$10K+ donors (Afroyim v. Rusk-compliant), FARA public dashboard
- `/issues/bureaucracy-reform` — 11 mechanisms. Mandatory GAO impl 18mo + 2% budget cut, review-driven program consolidation (no quota), results budgeting (miss 3yr 10% cut, miss 5yr zero), 10yr agency sunset, E-all contract rebuild (commercial-first + OTA to all agencies $500M cap + pre-qualified vendor pools 30-day mini-bids + prize-model + outcome contracts + performance bonds >$50M + 5yr contract sunset + single-source ≤$25M with IG review + GAO protest reform), 90-day perf termination + FY2019 workforce cap + pay-for-performance, unified IG network statutory independence, cost-benefit + 10yr sunset on every new reg + Major Questions Doctrine codified, real-time spending dashboard + AI anomaly flagging, per-agency workforce caps voted each sunset cycle, case-by-case devolution
- `/issues/sunset-clauses` — 13 mechanisms. 10yr default sunset on every law + agency + reg, variable cycles allowed only with explicit clause and recorded vote, narrow carve-outs (Bill of Rights + civil rights ratchet + entitlement benefits), standalone votes default + tightly-related bundles allowed with single-member veto, 10yr staggered phase-in, mandatory public hearing + GAO + IG report 12mo prior + AI-summarized citizen comment into record, hard sunset on failure (no continuing resolutions), treaties stay Article II but mandatory 10yr review terminable by floor vote, no automatic state revival on preemption sunset, statutory Sunset Act now + Article V constitutional amendment in parallel

Pairs with `/reform` (100-day execution timeline) — cross-linked both directions.

**Methodology established during this pillar (use for all future pillars):** For each sub-issue — (1) present Democrat and Republican positions with both rhetoric and behavior, (2) lay out the full policy option space across every relevant dimension with tradeoffs, (3) give recommended picks, (4) user picks per dimension, (5) rewrite the page + update Supabase platform_positions row + update hub one-liner. Never select stances autonomously.

### 🛡️ Immigration (DONE, standalone deep-dive)
`/issues/immigration` — pre-dates the pillar pattern. Lives in Social pillar conceptually but ships as a single rich page.

## Active queue

### 🤝 Social (NEXT — pick up here tomorrow)
Master sub-issue list. Suggested walkthrough order: easy-to-hard, save the two sensitive ones for last when the frame is locked.

| Order | Sub-issue | Status | Notes |
|---|-----------|--------|---|
| done | Immigration | `/issues/immigration` shipped | pre-pillar, standalone. Already cross-links to lobbying-ban single-citizenship rule |
| **1 (NEXT)** | Education (K-12, college debt, school choice) | not started | mid sensitivity |
| 2 | Crime & criminal justice | not started | mid sensitivity |
| 3 | Drug policy (fentanyl, cannabis) | not started | mid sensitivity |
| 4 | Healthcare access (Medicare, single-payer) | not started | mid sensitivity — distinct from `/issues/healthcare-costs` (Econ pillar) |
| 5 | Second Amendment / guns | not started | **HIGH sensitivity — careful framing required** |
| 6 | Abortion | not started | **HIGH sensitivity — careful framing required** |

**Resume protocol:** start tomorrow with Education sub-issue. Follow the methodology established in Governance pillar — present D/R positions + rhetoric vs. behavior, lay out full option space across every dimension, give recommended picks, wait for user picks per dimension, then write page + DB row + hub one-liner.

### 🌍 Foreign
Master sub-issue list:
| # | Sub-issue | Status |
|---|-----------|--------|
| 1 | Military spending / Pentagon audit | partial in `/issues/debt-spending` — needs own page |
| 2 | Ukraine / Israel / foreign wars | not started |
| 3 | China policy | not started |
| 4 | NATO / alliances | not started |

### 🌿 Environment
Master sub-issue list:
| # | Sub-issue | Status |
|---|-----------|--------|
| 1 | Climate / emissions | not started |
| 2 | Energy policy (oil/gas, nuclear, renewables) | partial in `/issues/inflation` — needs own page |
| 3 | Public lands / environment regulation | not started |

# Page model

**Hub page** (e.g. `/issues/{pillar}`): `IssueHero` (pillar color) + Signature Principle + `SubIssueCard` grid + `CrossThread` grid + optional execution-link callout + CTA.

**Sub-issue page** (e.g. `/issues/{slug}`): `IssueHero` + `ThreeWayCompare` + `StatCard` grid + 5–6 `MechanismCard`s + "How This Connects" cross-link block + sources footer.

Pillar accent colors (lib/supabase.ts `categoryColors`):
- Economic = `var(--gold)`
- Governance = `var(--teal)`
- Social = `var(--green)`
- Foreign = `#7b2d8b`
- Environment = `#52b788`

# Backlog — site features

- **Site polling infrastructure** (`/poll/<issue>`). Per-issue polls capturing ranked-choice preferences on Citizens Party policy mechanisms. Builds voter sentiment data + email list. NOT statistically valid — movement-building, not press-grade. Reuses existing Subscriber table. Stage 2: commission real YouGov/Civiqs poll once donor base supports it (~$15–30K, N=1,500).
- **Positioning frame locked**: "We play by the rules we are fighting to change." Citizens Party operates under current law (accepts corp PAC where legal, individual donations up to current cap) but pre-complies with the donor-cap + 24hr disclosure rules we are fighting to make universal. Do NOT reintroduce "no corporate donors" claim — that line was retired after honest review.

# Wiring checklist per pillar

1. Insert/update Supabase `platform_positions` rows (`category`, `priority`, `active=true`)
2. Add hub page `/app/issues/{pillar}/page.tsx`
3. Add 1 sub-issue page per row
4. Add slug routes to `issueRoutes` in `/app/issues/page.tsx`
5. Add link/banner from `/reform` if execution-relevant
6. Update this file's status table
