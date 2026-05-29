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
