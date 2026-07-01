import { useState } from 'react'
import Modal from './Modal.jsx'

import A1_1 from '../assets/Dewang_mehta_IT_award_3rd_year.jpg';
import A1 from '../assets/Dewang_mehta_IT_award.pdf';
import A2 from '../assets/1st_Rank.jpg';
import A3 from '../assets/MILOPLE_HACKATHON_WINNER_Certificate.jpg';
import A4_1 from '../assets/SEM8_RESULT.png';
import A4 from '../assets/SEM8_RESULT.pdf';

const items = [
  {
    id: 'top-ranker',
    emoji: '🏆',
    title: 'Top Ranker 2023, 2024 & 2025',
    org: 'Dewang Mehta Foundation Trust',
    description: 'Academic excellence in IT — 3 years running.',
    // thumb MUST be an image (.jpg, .png)
    thumb: A1_1, 
    // document is what opens in the modal (can be .pdf or .jpg)
    document: A1, 
    isPdf: true,
    alt: 'Dewang Mehta Foundation Trust Award',
  },
  {
    id: 'gmit',
    emoji: '🥇',
    title: 'Academic Achiever — GMIT Sem 1, 2 & 3',
    org: 'Gyanmanjari Innovative University',
    description: '1st Rank with medals and certificate of academic excellence.',
    thumb: A2,
    document: A2,
    isPdf: false,
    alt: 'GMIT Academic Achiever Medals',
  },
  {
    id: 'milople',
    emoji: '🥇',
    title: '1st Rank — Milople District Hackathon',
    org: 'Bhavnagar, 2025',
    description: 'Recognized for innovative problem-solving and technical execution.',
    thumb: A3,
    document: A3,
    isPdf: false,
    alt: 'Milople Hackathon Certificate',
  },
  {
    id: 'spi10',
    emoji: '🎓',
    title: 'Perfect 10/10 SPI — Semester 8',
    org: 'Final Semester',
    description: 'Achieved a flawless SPI in the final semester of B.E. IT.',
    // You need to import a JPG for your Semester 8 result to use here.
    // I am using a placeholder image for now so it doesn't break!
    thumb: A4_1, 
    document: A4,
    isPdf: true,
    alt: 'Semester 8 Result',
  },
]

export default function Achievements() {
  const [active, setActive] = useState(null)

  return (
    <section id="achievements" className="section">
      <div className="reveal max-w-3xl">
        <span className="section-eyebrow">Achievements</span>
        <h2 className="section-title">Wins worth highlighting.</h2>
        <p className="mt-4 text-soft/60">
          Recognitions that reflect consistency, curiosity, and execution.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((a, i) => (
          <article
            key={a.id}
            className="reveal glass glass-hover overflow-hidden flex flex-col"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <button
              onClick={() => setActive(a)}
              className="block relative overflow-hidden group"
              aria-label={`Open ${a.title} photo`}
            >
              {/* This img tag now uses a.thumb so it won't break on PDFs */}
              <img
                src={a.thumb}
                alt={a.alt}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
              <span className="absolute top-3 left-3 text-3xl drop-shadow-lg">{a.emoji}</span>
            </button>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-soft leading-snug">{a.title}</h3>
              <p className="mt-1 text-sm text-accent font-medium">{a.org}</p>
              <p className="mt-2 text-sm text-soft/65 leading-relaxed">{a.description}</p>
            </div>
          </article>
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title || ''}
        // Make the modal wider if it's a PDF for better reading
        maxWidth={active?.isPdf ? "max-w-4xl" : "max-w-3xl"} 
      >
        {active && (
          // Add a fixed height if it's a PDF so the iframe doesn't collapse
          <div className={`p-4 sm:p-6 bg-ink-950 ${active.isPdf ? 'h-[70vh] sm:h-[80vh] flex flex-col' : ''}`}>
            
            {/* Conditional Rendering: Iframe for PDFs, Img for JPGs */}
            {active.isPdf ? (
              <iframe
                src={`${active.document}#toolbar=0`}
                title={active.title}
                className="w-full flex-1 rounded-lg border border-white/10"
              />
            ) : (
              <img 
                src={active.document} 
                alt={active.alt} 
                className="w-full h-auto rounded-lg border border-white/10 select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            )}

            <div className="mt-4 shrink-0">
              <div className="text-sm text-accent font-semibold">{active.org}</div>
              <p className="mt-1 text-soft/75">{active.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
