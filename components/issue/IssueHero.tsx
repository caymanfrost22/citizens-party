import type { ReactNode } from 'react'

interface IssueHeroProps {
  badge: string
  badgeColor?: string
  title: ReactNode
  subtitle: string
}

export default function IssueHero({ badge, badgeColor = 'var(--gold)', title, subtitle }: IssueHeroProps) {
  return (
    <div
      className="py-16 px-4 text-center"
      style={{ background: 'linear-gradient(135deg, var(--navy), var(--card))' }}
    >
      <div
        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
        style={{
          background: `${badgeColor}1A`,
          border: `1px solid ${badgeColor}4D`,
          color: badgeColor,
        }}
      >
        {badge}
      </div>
      <h1 className="text-5xl font-black mb-3">{title}</h1>
      <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
}
