import { useState } from 'react'
import Modal from './Modal.jsx'

// Import your PDF here from the src/assets folder
import lttsPdf from '../assets/Mayur Internship Certificate.pdf';
import lttsLOGO from '../assets/logo.svg';
import csrPdf from '../assets/Mojidra Mayur Prakashbhai.pdf';
import csrLOGO from '../assets/csrbox_logo.svg';
const roles = [
  {
    id: 'ltts',
    company: 'L&T Technology Services (LTTS)',
    role: 'Software Developer Intern',
    period: 'March 2026 – June 2026',
    location: 'Vadodara, India',
    logo: lttsLOGO ,
    logoAlt: 'ltts-logo.png — L&T Technology Services',
    // Keep this as an image for the small thumbnail preview
    certificateThumb: 'https://via.placeholder.com/600x400.png?text=LTTS+Internship+Completion+Certificate',
    // The imported variable is used here (no quotation marks)
    certificatePdf: lttsPdf, 
    certificateAlt: 'LTTS Internship Completion Certificate',
    bullets: [
      'Built NRTR project solutions using Microsoft Power Platform suite.',
      'Developed Power Apps UI and managed databases in Dataverse.',
      'Automated real-time data processing with Power Automate (90% reduction in manual data entry).',
      'Leveraged Power Fx for formula logic and managed full ALM deployment.',
      'Authored technical internship reports for internal stakeholders.',
    ],
  },
  {
    id: 'csrbox',
    company: 'CSRBOX, Ahmedabad',
    role: 'Data Analytics Intern',
    period: 'July 2025',
    location: 'Ahmedabad, India',
    logo: csrLOGO ,
    logoAlt: 'csrbox-logo.png — CSRBOX',
    // Keep this as an image for the small thumbnail preview
    certificateThumb: 'https://via.placeholder.com/600x400.png?text=CSRBOX+Internship+Completion+Certificate',
    // Add the PDF path or imported variable for CSRBOX here later if you have one
    certificatePdf: csrPdf , 
    certificateAlt: 'CSRBOX Internship Completion Certificate',
    bullets: [
      'Analyzed and cleaned complex datasets using SQL and advanced Excel.',
      'Developed "Strategic Agriculture Performance Dashboard" in Tableau.',
      'Streamlined data reporting for improved analytical efficiency.',
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(null)

  return (
    <section id="experience" className="section">
      <div className="reveal max-w-3xl">
        <span className="section-eyebrow">Experience</span>
        <h2 className="section-title">Where I've worked.</h2>
        <p className="mt-4 text-soft/60">
          Hands-on experience shipping enterprise solutions on the Microsoft Power Platform.
        </p>
      </div>

      <div className="mt-14 relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" />

        <ol className="space-y-10">
          {roles.map((r, idx) => (
            <li
              key={r.id}
              className="reveal relative pl-14 sm:pl-20"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Dot */}
              <span className="absolute left-2.5 sm:left-4.5 top-3 w-4 h-4 rounded-full bg-accent dot-pulse" />

              <article className="glass glass-hover p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-white/95 grid place-items-center overflow-hidden border border-white/10">
                    <img src={r.logo} alt={r.logoAlt} className="w-full h-full object-contain p-1.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-soft">{r.role}</h3>
                      <span className="text-accent font-semibold">{r.company}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-soft/60">
                      <span className="inline-flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        {r.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        {r.location}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {r.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-soft/80 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Certificate thumb */}
                    <div className="mt-6">
                      <button
                        onClick={() => setActive(r)}
                        className="group inline-flex items-stretch gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-2 hover:border-accent/40 hover:bg-accent/10 transition-colors"
                        aria-label={`Open ${r.company} completion certificate`}
                      >
                        <img
                          src={r.certificateThumb} // Using the image thumbnail here
                          alt={r.certificateAlt}
                          className="w-24 h-16 object-cover rounded-md"
                        />
                        <div className="flex flex-col justify-center pr-3 text-left">
                          <span className="text-xs text-soft/60">Completion Certificate</span>
                          <span className="text-sm font-semibold text-soft group-hover:text-white inline-flex items-center gap-1">
                            View PDF Document
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M21 14v7H3V3h7"/></svg>
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active ? `${active.company} — Completion Certificate` : ''}
        maxWidth="max-w-4xl" 
      >
        {active && (
          <div className="p-4 sm:p-6 bg-ink-950 h-[70vh] sm:h-[80vh]">
            <iframe
              // CHANGE THIS LINE: Wrap it in backticks and add #toolbar=0
              src={`${active.certificatePdf}#toolbar=0`} 
              title={active.certificateAlt}
              className="w-full h-full rounded-lg border border-white/10"
            />
          </div>
        )}
      </Modal>
    </section>
  )
}
