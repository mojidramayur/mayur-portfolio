const groups = [
  {
    title: 'Microsoft Power Platform',
    accent: 'from-accent to-indigo-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
    skills: [
      'Power Apps (Canvas & Model-Driven)',
      'Power Automate (Cloud & Desktop Flows)',
      'Power BI (Dashboards, DAX)',
      'Power Fx',
      'Dataverse',
      'SharePoint',
      'Copilot Studio (AI Builder)',
      'Power Virtual Agents',
    ],
  },
  {
    title: 'Data & Analytics',
    accent: 'from-emerald-400 to-teal-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
    ),
    skills: ['SQL', 'Python', 'Excel (Advanced)', 'Tableau'],
  },
  {
    title: 'Generative AI Tools',
    accent: 'from-purple-400 to-pink-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
    ),
    skills: ['Microsoft Copilot', 'ChatGPT', 'Google Gemini'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="reveal text-center max-w-3xl mx-auto">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">Tools & technologies I work with.</h2>
        <p className="mt-4 text-soft/60">
          A curated stack focused on enterprise low-code, analytics, and AI-augmented productivity.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <div
            key={g.title}
            className="reveal glass glass-hover p-6 sm:p-7"
            style={{ transitionDelay: `${gi * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${g.accent} grid place-items-center text-white shadow-glow`}>
                {g.icon}
              </div>
              <h3 className="font-bold text-lg text-soft">{g.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
