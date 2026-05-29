import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4 text-center"
      style={{ background: '#070f1d' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-2xl font-black mb-1" style={{ color: 'var(--gold)' }}>
          🦅 The Citizens Party
        </div>
        <p className="text-[var(--muted)] text-sm mb-4">
          Not Left. Not Right. <strong className="text-white">Forward.</strong>
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
          {[
            { href: '/', label: 'Home' },
            { href: '/platform', label: 'Platform' },
            { href: '/issues', label: 'Issues' },
            { href: '/reform', label: 'Reform Plan' },
            { href: '/join', label: 'Join Us' },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} The Citizens Party · Research sources: CBO, GAO, Tax Foundation, Brookings, Yale Budget Lab, FEC
        </p>
      </div>
    </footer>
  )
}
