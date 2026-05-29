import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  color?: string
  bg?: string
  border?: string
}

export default function SectionLabel({
  children,
  color = '#00b4d8',
  bg = 'rgba(0,180,216,0.1)',
  border = 'rgba(0,180,216,0.3)',
}: SectionLabelProps) {
  return (
    <div
      className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
      style={{ background: bg, border: `1px solid ${border}`, color }}
    >
      {children}
    </div>
  )
}
