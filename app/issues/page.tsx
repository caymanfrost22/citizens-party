import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import type { PlatformPosition } from '@/lib/supabase'

export const revalidate = 60

const issueRoutes: Record<string, string> = {
  'Taxes': '/issues/taxes',
  'Tax Reform': '/issues/taxes',
  'Debt + Spending': '/issues/debt-spending',
  'National Debt': '/issues/debt-spending',
  'Immigration': '/issues/immigration',
  'Border Security': '/issues/immigration',
  'Illegal Immigration': '/issues/immigration',
  'Healthcare Costs': '/issues/healthcare-costs',
  'Housing': '/issues/housing',
  'Inflation': '/issues/inflation',
  'Big Tech': '/issues/big-tech',
  'Trade + Tariffs': '/issues/trade',
  'Wages + Jobs': '/issues/wages-jobs',
  // Governance pillar
  'Term Limits': '/issues/term-limits',
  'Campaign Finance': '/issues/campaign-finance',
  'Voting Reform': '/issues/voting-reform',
  'Voting Rights': '/issues/voting-reform',
  'Lobbying Ban': '/issues/lobbying-ban',
  'Bureaucracy Reform': '/issues/bureaucracy-reform',
  'Government Waste': '/issues/bureaucracy-reform',
  'Sunset Clauses': '/issues/sunset-clauses',
  'Legislative Process Reform': '/issues/legislative-process',
  'Single Subject Rule': '/issues/legislative-process',
  // Social pillar
  'Education': '/issues/education',
  'K-12 Education': '/issues/education',
  'Student Debt': '/issues/education',
  'School Choice': '/issues/education',
  'Crime': '/issues/crime',
  'Crime & Criminal Justice': '/issues/crime',
  'Criminal Justice': '/issues/crime',
  'Policing': '/issues/crime',
  'Public Safety': '/issues/crime',
  'Drug Policy': '/issues/drug-policy',
  'Drugs': '/issues/drug-policy',
  'Fentanyl': '/issues/drug-policy',
  'Cannabis': '/issues/drug-policy',
  'Marijuana': '/issues/drug-policy',
}

export default async function IssuesPage() {
  const { data: positions } = await supabase
    .from('platform_positions')
    .select('*')
    .eq('active', true)
    .order('priority', { ascending: false })

  return (
    <div>
      {/* Header */}
      <div className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, var(--navy), var(--card))' }}>
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          style={{ background: 'color-mix(in srgb, var(--teal) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--teal) 30%, transparent)', color: 'var(--teal)' }}>
          ⚡ Side By Side
        </div>
        <h1 className="text-5xl font-black mb-3">Issues Breakdown</h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          See exactly where both parties agree (and fail), and how we&apos;d do it differently.
          Click any issue to see our full reform plan.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', color: '#93c5fd' }}>
            🔵 Democrats
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
            style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5' }}>
            🔴 Republicans
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
            style={{ background: 'color-mix(in srgb, var(--green) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--green) 30%, transparent)', color: 'var(--green)' }}>
            🟢 Citizens Party
          </div>
        </div>

        {/* Mobile cards view */}
        <div className="space-y-4 md:hidden">
          {(positions || []).map((pos: PlatformPosition) => {
            const route = issueRoutes[pos.issue]
            const card = (
              <div className="rounded-2xl overflow-hidden"
                style={{ background: 'var(--card)', border: `1px solid ${route ? 'color-mix(in srgb, var(--gold) 30%, transparent)' : 'rgba(255,255,255,0.07)'}` }}>
                <div className="px-4 pt-4 pb-2 flex items-center gap-2">
                  <span className="text-2xl">{pos.issue_icon}</span>
                  <h3 className="font-bold" style={{ color: 'var(--gold)' }}>{pos.issue}</h3>
                  {route && <span className="ml-auto text-xs" style={{ color: 'var(--gold)' }}>See plan →</span>}
                </div>
                <div className="px-4 pb-4 space-y-3 text-sm">
                  <div><span className="font-bold" style={{ color: '#3b82f6' }}>🔵 </span><span style={{ color: '#93c5fd' }}>{pos.dem_position}</span></div>
                  <div><span className="font-bold" style={{ color: '#ef4444' }}>🔴 </span><span style={{ color: '#fca5a5' }}>{pos.rep_position}</span></div>
                  <div className="p-3 rounded-xl" style={{ background: 'color-mix(in srgb, var(--green) 8%, transparent)' }}>
                    <span className="font-bold" style={{ color: 'var(--green)' }}>🟢 </span>
                    <span className="font-semibold" style={{ color: 'var(--green)' }}>{pos.peoples_position}</span>
                  </div>
                </div>
              </div>
            )
            return route
              ? <Link key={pos.id} href={route}>{card}</Link>
              : <div key={pos.id}>{card}</div>
          })}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ background: '#0d1f38' }}>
                <th className="text-left p-4 text-sm font-bold w-32" style={{ color: 'var(--gold)' }}>Issue</th>
                <th className="p-4 text-sm font-bold" style={{ color: '#3b82f6' }}>🔵 Democrats</th>
                <th className="p-4 text-sm font-bold" style={{ color: '#ef4444' }}>🔴 Republicans</th>
                <th className="p-4 text-sm font-bold" style={{ color: 'var(--green)' }}>🟢 Citizens Party</th>
              </tr>
            </thead>
            <tbody>
              {(positions || []).map((pos: PlatformPosition, i: number) => {
                const route = issueRoutes[pos.issue]
                return (
                  <tr key={pos.id}
                    style={{ background: i % 2 === 0 ? 'var(--card)' : '#162236', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{pos.issue_icon}</span>
                        {route ? (
                          <Link href={route} className="font-bold text-sm hover:underline" style={{ color: 'var(--gold)' }}>
                            {pos.issue} →
                          </Link>
                        ) : (
                          <span className="font-bold text-sm">{pos.issue}</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-center align-top" style={{ color: '#93c5fd' }}>{pos.dem_position}</td>
                    <td className="p-4 text-sm text-center align-top" style={{ color: '#fca5a5' }}>{pos.rep_position}</td>
                    <td className="p-4 text-sm text-center align-top font-semibold" style={{ color: 'var(--green)' }}>{pos.peoples_position}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom callout */}
        <div className="mt-10 p-5 rounded-2xl"
          style={{ background: 'color-mix(in srgb, var(--gold) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 20%, transparent)' }}>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            <strong className="text-white">The Pattern:</strong> Both parties have taken corporate-donor positions dressed up as ideology.
            Democrats protect trial lawyers and public unions. Republicans protect Wall Street and defense contractors.
            Neither actually serves median Americans. The Citizens Party plays by the rules we&apos;re <strong className="text-white">fighting to change — every dollar disclosed in 24 hours, pre-complying with our own proposed reforms.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
