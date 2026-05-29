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
      style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-bold" style={{ color: 'var(--gold)' }}>{title}</h3>
      </div>
      <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {appliesTo.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-xs font-medium"
            style={{
              background: 'color-mix(in srgb, var(--green) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--green) 30%, transparent)',
              color: 'var(--green)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
