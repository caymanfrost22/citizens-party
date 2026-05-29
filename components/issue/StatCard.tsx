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
