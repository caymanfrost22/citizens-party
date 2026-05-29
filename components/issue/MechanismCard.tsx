interface MechanismCardProps {
  num: string
  title: string
  body: string
  accentColor?: string
}

export default function MechanismCard({ num, title, body, accentColor = 'var(--gold)' }: MechanismCardProps) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex gap-4 items-start">
        <div className="text-2xl font-black shrink-0" style={{ color: accentColor }}>{num}</div>
        <div style={{ borderLeft: `2px solid ${accentColor}`, paddingLeft: '1rem' }}>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>{body}</p>
        </div>
      </div>
    </div>
  )
}
