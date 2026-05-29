'use client'
import { useId, useState, type ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  return (
    <div
      className="rounded-2xl overflow-hidden mb-3"
      style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'var(--card)' }}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-sm hover:bg-white/5 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{title}</span>
        <span style={{ color: 'var(--gold)', fontSize: '1.2rem', lineHeight: 1 }} aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="px-5 pb-5 text-sm"
        style={{ color: 'var(--muted)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="pt-4">{children}</div>
      </div>
    </div>
  )
}
