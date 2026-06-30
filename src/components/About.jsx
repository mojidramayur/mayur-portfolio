export default function About() {
  return (
    <section id="about" className="section">
      <div className="reveal">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">A bit about my journey.</h2>
      </div>

      <div className="mt-10 grid lg:grid-cols-[2fr,1fr] gap-8">
        <div className="reveal glass p-7 sm:p-9">
          <p className="text-lg leading-relaxed text-soft/85">
            I'm an{' '}
            <span className="text-white font-semibold">IT graduate</span>{' '}
            specializing in the{' '}
            <span className="text-accent font-semibold">Microsoft Power Platform</span>{' '}
            and{' '}
            <span className="text-accent font-semibold">data analytics</span>.
            I build custom Power Apps, automated RPA workflows, and interactive
            Power BI dashboards that streamline enterprise operations.
            Passionate about data-driven problem-solving —{' '}
            <span className="text-white font-semibold">1st Rank winner</span>{' '}
            at a district-level hackathon.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-accent/30 bg-accent/10">
              <span className="text-accent text-lg">★</span>
              <span className="text-sm font-semibold text-soft">CGPA 8.78 / 10</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10">
              <span className="text-emerald-300 text-lg">★</span>
              <span className="text-sm font-semibold text-soft">Perfect SPI 10/10 — Final Semester</span>
            </span>
          </div>
        </div>

        {/* Stats stack */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '8.78', label: 'CGPA / 10' },
            { value: '10', label: 'Perfect SPI' },
            { value: '3+', label: 'Internships & Projects' },
            { value: '1st', label: 'Hackathon Rank' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="reveal glass glass-hover p-5 text-center"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-accent to-indigo-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-soft/65 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
