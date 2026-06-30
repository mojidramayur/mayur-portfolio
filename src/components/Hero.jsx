export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-28 pb-20">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-20 -left-32 w-[420px] h-[420px] rounded-full bg-accent/20 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute top-40 -right-32 w-[380px] h-[380px] rounded-full bg-indigo-500/20 blur-[120px] animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full bg-purple-500/15 blur-[120px] animate-float-slow" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full grid lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mayur Mojidra
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-semibold text-soft/90 leading-snug">
            Software Developer <span className="text-soft/40 mx-1">|</span>{' '}
            Microsoft Power Platform Specialist <span className="text-soft/40 mx-1">|</span>{' '}
            Data Analytics
          </p>

          <p className="mt-4 text-base sm:text-lg text-soft/65 max-w-2xl">
            IT Graduate (8.78 CGPA) · Power Apps · Power Automate · Power BI · SQL · Tableau
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>

          {/* Social row */}
          <div className="mt-10 flex items-center gap-3">
            <a
              href="mailto:mojidramayurp@gmail.com"
              aria-label="Email Mayur"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-accent/40 hover:bg-accent/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <span className="text-sm font-medium text-soft/80 group-hover:text-white hidden sm:inline">mojidramayurp@gmail.com</span>
              <span className="text-sm font-medium text-soft/80 group-hover:text-white sm:hidden">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mayurmojidra/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-accent/40 hover:bg-accent/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
              <span className="text-sm font-medium text-soft/80 group-hover:text-white">LinkedIn</span>
            </a>
            <a
              href="tel:+919173885386"
              aria-label="Call"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-accent/40 hover:bg-accent/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>
              <span className="text-sm font-medium text-soft/80 group-hover:text-white">+91 9173885386</span>
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-tr from-accent via-indigo-500 to-purple-500 blur-md opacity-70" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-card">
              <img
                src="https://i.pravatar.cc/600?img=12"
                alt="profile-photo.jpg — Mayur Mojidra"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 sm:-left-10 top-12 glass px-4 py-3 shadow-card animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/20 grid place-items-center text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <div>
                  <div className="text-xs text-soft/60">CGPA</div>
                  <div className="font-bold text-soft">8.78 / 10</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 sm:-right-8 bottom-10 glass px-4 py-3 shadow-card animate-float-slow" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/20 grid place-items-center text-indigo-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 15l-3-3h6l-3 3z"/><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>
                </div>
                <div>
                  <div className="text-xs text-soft/60">Hackathon</div>
                  <div className="font-bold text-soft">1st Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-soft/40 text-xs flex flex-col items-center gap-2">
        <span className="tracking-widest uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  )
}
