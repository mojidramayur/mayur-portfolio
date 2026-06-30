export default function Education() {
  return (
    <section id="education" className="section">
      <div className="reveal max-w-3xl">
        <span className="section-eyebrow">Education</span>
        <h2 className="section-title">Academic background.</h2>
      </div>

      <div className="reveal mt-10 glass glass-hover p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/95 grid place-items-center overflow-hidden border border-white/10">
            <img
              src="https://via.placeholder.com/100x100.png?text=GMIT+Logo"
              alt="gmit-logo.png — GyanManjari Institute of Technology"
              className="w-full h-full object-contain p-1.5"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-soft">
              GyanManjari Institute of Technology
            </h3>
            <p className="text-sm text-soft/55">Affiliated to GTU</p>

            <p className="mt-3 text-accent font-semibold">
              B.E. in Information Technology
            </p>

            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-soft/65">
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                June 2022 – May 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Bhavnagar, India
              </span>
            </div>

            <div className="mt-5 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-accent/30 bg-accent/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-accent"><path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              <span className="text-sm font-semibold text-soft">
                CGPA: <span className="text-white">8.78 / 10</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
