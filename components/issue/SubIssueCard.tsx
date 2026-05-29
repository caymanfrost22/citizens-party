import Link from 'next/link'

interface SubIssueCardProps {
  icon: string
  title: string
  oneLiner: string
  href: string
}

export default function SubIssueCard({ icon, title, oneLiner, href }: SubIssueCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/30"
      style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-bold" style={{ color: 'var(--gold)' }}>{title}</h3>
      </div>
      <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>{oneLiner}</p>
      <span className="text-xs font-bold" style={{ color: 'var(--green)' }}>See the full plan →</span>
    </Link>
  )
}
