-- Citizens Party — Platform card cleanup
-- 1. Deactivate old duplicate cards (covered by new Economics pillar rows)
-- 2. Update Taxes + Wall Street Reform to reflect current platform
-- Idempotent — safe to run multiple times.

-- ── 1. Deactivate old duplicates ──────────────────────────────────────────
update platform_positions
  set active = false, updated_at = now()
  where issue in ('Federal Debt', 'Trade & Tariffs');

-- ── 2. Taxes → Simple Tax Act ─────────────────────────────────────────────
update platform_positions set
  issue_icon    = '💰',
  dem_position  = 'Raise top marginal rates, expand credits and ACA subsidies, close corporate loopholes — but keep the income tax framework.',
  rep_position  = 'Cut all rates, extend TCJA cuts permanently, simplify brackets — but keep the income tax framework.',
  peoples_position = 'Abolish federal income tax, payroll tax, estate tax, and capital gains tax. Replace with a 23% consumption tax + monthly prebate for every household. 15% flat corporate rate — no loopholes. Abolish the IRS.',
  our_detail    = 'The current tax code has 2.4 million words and costs Americans $536B/year to comply. The Simple Tax Act abolishes all federal income and payroll taxes — you keep 100% of your paycheck. A 23% consumption tax replaces them. A monthly prebate covers the tax on poverty-level spending so no one pays federal tax on necessities. 15% flat corporate rate, globally competitive, no exceptions.',
  priority      = 65,
  updated_at    = now()
  where issue = 'Taxes';

-- ── 3. Wall Street Reform → current platform ─────────────────────────────
update platform_positions set
  issue_icon    = '🏦',
  dem_position  = 'Expand Dodd-Frank, strengthen CFPB, regulate hedge funds and private equity, push for higher capital requirements.',
  rep_position  = 'Repeal or gut Dodd-Frank, deregulate banks, trust markets to self-regulate.',
  peoples_position = 'No taxpayer bailouts — ever. Restore Glass-Steagall separation between deposit and investment banking. Capital requirements scaled to bank size so TBTF ends organically. Mandatory fiduciary duty for all financial advisors. Annual GAO audit of the Federal Reserve. 5-year revolving door ban: regulators cannot join the industries they regulated.',
  our_detail    = 'The 2008 crash was caused by removing the firewall between commercial and investment banking. We restore it. Capital requirements scale with bank size so no single institution can threaten the economy and demand a rescue — making "too big to fail" structurally impossible. Every financial advisor must legally act in your interest, not theirs. The Fed gets audited annually, publicly.',
  priority      = 60,
  updated_at    = now()
  where issue = 'Wall Street Reform';
