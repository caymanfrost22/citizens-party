import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  color?: string
  bg?: string
  border?: string
}

export default function SectionLabel({
  children,
  color = 'var(--teal)',
  bg = 'color-mix(in srgb, var(--teal) 10%, transparent)',
  border = 'color-mix(in srgb, var(--teal) 30%, transparent)',
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
