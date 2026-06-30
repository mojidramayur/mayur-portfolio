import { useState } from 'react'
import Modal from './Modal.jsx'

const certs = [
  {
    id: 'mppf',
    title: 'Microsoft Power Platform Fundamentals',
    org: 'Microsoft',
    date: 'Issued 2025',
    image: 'https://via.placeholder.com/400x300.png?text=Power+Platform+Fundamentals',
    alt: 'cert-power-platform-fundamentals.jpg',
  },
  {
    id: 'pbida',
    title: 'Power BI Data Analyst Associate',
    org: 'Microsoft',
    date: 'Issued 2025',
    image: 'https://via.placeholder.com/400x300.png?text=Power+BI+Data+Analyst',
    alt: 'cert-power-bi-data-analyst.jpg',
  },
  {
    id: 'sqlds',
    title: 'SQL for Data Science',
    org: 'Coursera',
    date: 'Issued 2024',
    image: 'https://via.placeholder.com/400x300.png?text=SQL+for+Data+Science',
    alt: 'cert-sql-for-data-science.jpg',
  },
  {
    id: 'tab',
    title: 'Tableau Desktop Specialist',
    org: 'Tableau',
    date: 'Issued 2025',
    image: 'https://via.placeholder.com/400x300.png?text=Tableau+Desktop+Specialist',
    alt: 'cert-tableau-desktop-specialist.jpg',
  },
]

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <section id="certifications" className="section">
      <div className="reveal max-w-3xl">
        <span className="section-eyebrow">Certifications</span>
        <h2 className="section-title">Licenses & certifications.</h2>
        <p className="mt-4 text-soft/60">
          Continuously upskilling across Microsoft, Coursera, and Tableau programs.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((c, i) => (
          <div
            key={c.id}
            className="reveal glass glass-hover overflow-hidden flex flex-col"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <button
              onClick={() => setActive(c)}
              className="block relative overflow-hidden group"
              aria-label={`Open ${c.title} certificate`}
            >
              <img
                src={c.image}
                alt={c.alt}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-ink-950/80 backdrop-blur text-xs font-medium text-soft/85 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                Preview
              </span>
            </button>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-soft leading-snug line-clamp-2">{c.title}</h3>
              <p className="mt-1 text-sm text-accent font-medium">{c.org}</p>
              <p className="text-xs text-soft/55 mt-0.5">{c.date}</p>

              <div className="mt-auto pt-4 flex items-center gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-accent/30 bg-accent/10 text-accent text-xs font-semibold hover:bg-accent/20 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>
                  Verify
                </a>
                <button
                  onClick={() => setActive(c)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-soft/75 text-xs font-semibold hover:text-white hover:border-white/30 transition-colors"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title || ''}
        maxWidth="max-w-3xl"
      >
        {active && (
          <div className="p-4 sm:p-6 bg-ink-950">
            <img src={active.image} alt={active.alt} className="w-full h-auto rounded-lg border border-white/10" />
            <div className="mt-4 text-sm text-soft/70">
              <span className="font-semibold text-accent">{active.org}</span> · {active.date}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
