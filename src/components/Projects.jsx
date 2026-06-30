import { useState } from 'react'
import Modal from './Modal.jsx'
import pptpdf from '../assets/Power Platforms Project.pdf';
const projects = [
  {
    id: 'nrtr',
    title: 'NRTR – LTTS Internship Project',
    stack: ['Power Apps', 'Power Automate', 'Dataverse','SharePoint','Power Fx'],
    description:
      'Architected and deployed the NRTR solution using Canvas and Model-Driven Power Apps to digitize manual enterprise processes.',
    action: 'pdf',
    actionLabel: 'View document',
    icon: 'pdf',
    src: pptpdf,
    fileName: 'project1-document.pdf',
    accent: 'from-rose-500/80 to-orange-500/80',
  },
  {
    id: 'agri',
    title: 'Strategic Agriculture Performance Dashboard',
    stack: ['Tableau', 'SQL', 'Excel'],
    description:
      'Consolidated agricultural datasets across crop yields, farming methodologies, and regional climate data. Designed Tableau visualizations with multi-currency revenue mapping.',
    action: 'link',
    actionLabel: 'Open on Tableau',
    icon: 'link',
    src: 'https://public.tableau.com/app/profile/mayur.mojidra/viz/StrategicAgriculturePerformanceDashboard/StrategicAgriculturePerformanceDashboard',
    accent: 'from-cyan-400/80 to-blue-500/80',
  },
  {
    id: 'tender',
    title: 'Automated Tender Data Extraction Bot',
    stack: ['Power Automate Desktop', 'Excel'],
    description:
      'Built an RPA workflow to auto-navigate the nProcure portal, extract live daily tender listings, and write structured data into Excel workbooks — saving 5 hours of manual work per week.',
    action: 'video',
    actionLabel: 'Watch demo',
    icon: 'video',
   // src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    fileName: 'project3-demo.mp4',
    accent: 'from-purple-500/80 to-pink-500/80',
  },
]

function IconBadge({ kind }) {
  const common = 'w-7 h-7'
  if (kind === 'pdf')
    return (
      <span title="Opens PDF" className="inline-flex">
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6M9 17h4"/></svg>
      </span>
    )
  if (kind === 'link')
    return (
      <span title="Opens external link" className="inline-flex">
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    )
  return (
    <span title="Opens video" className="inline-flex">
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
    </span>
  )
}

function ActionEmoji({ kind }) {
  if (kind === 'pdf') return <span aria-label="PDF">📄</span>
  if (kind === 'link') return <span aria-label="External link">🔗</span>
  return <span aria-label="Video">🎥</span>
}

export default function Projects() {
  const [active, setActive] = useState(null)

  const onClick = (p) => {
    if (p.action === 'link') {
      window.open(p.src, '_blank', 'noopener,noreferrer')
      return
    }
    setActive(p)
  }

  return (
    <section id="projects" className="section">
      <div className="reveal max-w-3xl">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Selected work.</h2>
        <p className="mt-4 text-soft/60">
          A taste of recent builds — click any card to preview the deliverable.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => onClick(p)}
            className="reveal text-left glass glass-hover p-6 group relative overflow-hidden"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Accent halo */}
            <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-40 group-hover:opacity-70 transition-opacity`} />

            <div className="relative flex items-start justify-between gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.accent} grid place-items-center text-white shadow-glow`}>
                <IconBadge kind={p.icon} />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-soft/75">
                <ActionEmoji kind={p.icon} />
                {p.action === 'pdf' && 'PDF'}
                {p.action === 'link' && 'External'}
                {p.action === 'video' && 'Video'}
              </span>
            </div>

            <h3 className="relative mt-5 text-lg sm:text-xl font-bold text-soft group-hover:text-white">
              {p.title}
            </h3>
            <p className="relative mt-3 text-sm text-soft/70 leading-relaxed">
              {p.description}
            </p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-soft/75">
                  {s}
                </span>
              ))}
            </div>

            <div className="relative mt-6 flex items-center gap-1.5 text-accent font-semibold text-sm">
              {p.actionLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </button>
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title || ''}
        maxWidth="max-w-5xl"
      >
        {active?.action === 'pdf' && (
          <div className="bg-ink-950">
            <div className="flex items-center justify-end gap-2 px-5 py-3 border-b border-white/10">
              <a
                href={active.src}
                download={active.fileName}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !px-4 !py-2 text-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download PDF
              </a>
            </div>
            <iframe
              src={active.src}
              title={active.title}
              className="w-full h-[70vh] bg-white"
            />
          </div>
        )}
        {active?.action === 'video' && (
          <div className="bg-black">
            <video
              src={active.src}
              controls
              autoPlay
              className="w-full max-h-[75vh] bg-black"
            />
          </div>
        )}
      </Modal>
    </section>
  )
}
