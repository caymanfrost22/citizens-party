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
      className="block rounded-2xl p-6 transition-all hover:-translate-y-1"
      style={{ background: '#1a2a44', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-bold" style={{ color: '#f5a623' }}>{title}</h3>
      </div>
      <p className="text-sm mb-3" style={{ color: '#8fa3bc' }}>{oneLiner}</p>
      <span className="text-xs font-bold" style={{ color: '#06d6a0' }}>See the full plan →</span>
    </Link>
  )
}
