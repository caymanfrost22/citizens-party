'use client'
import { useState, type ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden mb-3"
      style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#1a2a44' }}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-sm hover:bg-white/5 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span style={{ color: '#f5a623', fontSize: '1.2rem', lineHeight: 1 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div
          className="px-5 pb-5 text-sm"
          style={{ color: '#8fa3bc', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="pt-4">{children}</div>
        </div>
      )}
    </div>
  )
}
