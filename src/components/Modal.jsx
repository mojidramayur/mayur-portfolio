import { useEffect } from 'react'

export default function Modal({ open, onClose, title, children, maxWidth = 'max-w-4xl' }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm backdrop-enter"
      />
      <div
        className={`relative w-full ${maxWidth} max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-card modal-enter flex flex-col`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h3 className="font-semibold text-soft truncate pr-4">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-lg text-soft/70 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  )
}
