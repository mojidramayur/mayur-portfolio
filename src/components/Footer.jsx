export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-soft/60 text-center sm:text-left">
          © 2026 Mayur Mojidra. Built with passion for technology.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:mojidramayurp@gmail.com"
            aria-label="Email"
            className="w-9 h-9 grid place-items-center rounded-lg border border-white/10 text-soft/70 hover:text-white hover:border-accent hover:bg-accent/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mayurmojidra/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 grid place-items-center rounded-lg border border-white/10 text-soft/70 hover:text-white hover:border-accent hover:bg-accent/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
          </a>
          <a
            href="tel:+919173885386"
            aria-label="Phone"
            className="w-9 h-9 grid place-items-center rounded-lg border border-white/10 text-soft/70 hover:text-white hover:border-accent hover:bg-accent/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
