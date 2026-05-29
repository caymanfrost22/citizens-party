@AGENTS.md



# Platform Build — Pillar Status

Rank-first path. Build one pillar at a time. Hub page + sub-issue pages + Supabase `platform_positions` rows.

## ✅ Completed pillars

### 💰 Economics (DONE)
Hub: `/issues/economy`. 8 sub-issues, all shipped as deep-dive pages:
- `/issues/taxes` · `/issues/debt-spending` · `/issues/healthcare-costs` · `/issues/housing` · `/issues/inflation` · `/issues/big-tech` · `/issues/trade` · `/issues/wages-jobs`

### 🏛️ Governance (DONE)
Hub: `/issues/governance`. 6 sub-issues, all shipped:
- `/issues/term-limits` · `/issues/campaign-finance` · `/issues/voting-reform` · `/issues/lobbying-ban` · `/issues/bureaucracy-reform` · `/issues/sunset-clauses`

Pairs with `/reform` (100-day execution timeline) — cross-linked both directions.

### 🛡️ Immigration (DONE, standalone deep-dive)
`/issues/immigration` — pre-dates the pillar pattern. Lives in Social pillar conceptually but ships as a single rich page.

## Active queue

### 🤝 Social (NEXT after Governance — partially seeded by Immigration)
Master sub-issue list (revisit when starting):
| # | Sub-issue | Status |
|---|-----------|--------|
| 1 | Immigration | done (`/issues/immigration`) |
| 2 | Education (K-12, college debt, school choice) | not started |
| 3 | Crime & criminal justice | not started |
| 4 | Drug policy (fentanyl, cannabis) | not started |
| 5 | Abortion | not started — sensitive framing required |
| 6 | Second Amendment / guns | not started — sensitive framing required |
| 7 | Healthcare access (Medicare, single-payer) | not started |

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
