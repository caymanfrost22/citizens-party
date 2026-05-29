import { supabase } from '@/lib/supabase'
import type { PlatformPosition } from '@/lib/supabase'

const categoryLabels: Record<string, string> = {
  economic: '💰 Economic Justice',
  governance: '🏛️ Government Reform',
  social: '🤝 Social Policy',
  foreign: '🌍 Foreign Policy',
  environment: '🌿 Environment',
}

const categoryColors: Record<string, string> = {
  economic: 'var(--gold)',
  governance: 'var(--teal)',
  social: 'var(--green)',
  foreign: '#7b2d8b',
  environment: '#52b788',
}

export const revalidate = 60

export default async function PlatformPage() {
  const { data: positions } = await supabase
    .from('platform_positions')
    .select('*')
    .eq('active', true)
    .order('priority', { ascending: false })

  const byCategory: Record<string, PlatformPosition[]> = {}
  ;(positions || []).forEach((p: PlatformPosition) => {
    if (!byCategory[p.category]) byCategory[p.category] = []
    byCategory[p.category].push(p)
  })

  return (
    <div>
      {/* Header */}
      <div className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, var(--navy), var(--card))' }}>
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          style={{ background: 'color-mix(in srgb, var(--gold) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--gold) 30%, transparent)', color: 'var(--gold)' }}>
          📋 Official Platform
        </div>
        <h1 className="text-5xl font-black mb-3">Our Platform</h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          Not a wish list — a work order. Every position is live from our database,
          updated as we refine our thinking with new data.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {Object.entries(categoryLabels).map(([cat, label]) => {
          const catPositions = byCategory[cat] || []
          if (catPositions.length === 0) return null
          const color = categoryColors[cat] || 'var(--gold)'

          return (
            <div key={cat}>
              <h2 className="text-2xl font-black mb-6 pb-3 border-b border-white/10"
                style={{ color }}>
                {label}
              </h2>
              <div className="space-y-6">
                {catPositions.map(pos => (
                  <div key={pos.id} className="rounded-2xl overflow-hidden"
                    style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {/* Issue header */}
                    <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                      <span className="text-3xl">{pos.issue_icon}</span>
                      <h3 className="text-xl font-bold" style={{ color }}>{pos.issue}</h3>
                    </div>

                    {/* Three-way comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
                      style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <div className="px-5 py-4" style={{ background: 'var(--card)' }}>
                        <div className="text-xs font-bold mb-2 flex items-center gap-1" style={{ color: '#3b82f6' }}>
                          🔵 Democrats Say
                        </div>
                        <p className="text-sm" style={{ color: '#93c5fd' }}>{pos.dem_position}</p>
                      </div>
                      <div className="px-5 py-4" style={{ background: 'var(--card)' }}>
                        <div className="text-xs font-bold mb-2 flex items-center gap-1" style={{ color: '#ef4444' }}>
                          🔴 Republicans Say
                        </div>
                        <p className="text-sm" style={{ color: '#fca5a5' }}>{pos.rep_position}</p>
                      </div>
                      <div className="px-5 py-4 rounded-br-2xl" style={{ background: 'color-mix(in srgb, var(--green) 8%, transparent)' }}>
                        <div className="text-xs font-bold mb-2 flex items-center gap-1" style={{ color: 'var(--green)' }}>
                          🟢 We Say
                        </div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--green)' }}>{pos.peoples_position}</p>
                      </div>
                    </div>

                    {/* Detail */}
                    {pos.our_detail && (
                      <div className="px-6 py-4 border-t border-white/5">
                        <p className="text-sm" style={{ color: 'var(--muted)' }}>{pos.our_detail}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
