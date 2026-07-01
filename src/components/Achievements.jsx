import { useState } from 'react'
import Modal from './Modal.jsx'
import A1_1 from '../assets/Dewang_mehta_IT_award_3rd_year.jpg';
import A1 from '../assets/Dewang_mehta_IT_award.pdf';
import A2 from '../assets/1st_Rank.jpg';
import A3 from '../assets/MILOPLE_HACKATHON_WINNER_Certificate.jpg';
import A4 from '../assets/SEM8_RESULT.pdf';
const items = [
  {
    id: 'top-ranker',
    emoji: '🏆',
    title: 'Top Ranker 2023, 2024 & 2025',
    org: 'Dewang Mehta Foundation Trust',
    description: 'Academic excellence in IT — 3 years running.',
    image: A1,
    alt: A1_1,
  },
  {
    id: 'gmit',
    emoji: '🥇',
    title: 'Academic Achiever — GMIT Sem 1, 2 & 3',
    org: 'Gyanmanjari Innovative University',
    description: '1st Rank with medals and certificate of academic excellence.',
    image: A2,
    alt: A2,
  },
  {
    id: 'milople',
    emoji: '🥇',
    title: '1st Rank — Milople District Hackathon',
    org: 'Bhavnagar, 2025',
    description: 'Recognized for innovative problem-solving and technical execution.',
    image: A3,
    alt: A3,
  },
  {
    id: 'spi10',
    emoji: '🎓',
    title: 'Perfect 10/10 SPI — Semester 8',
    org: 'Final Semester',
    description: 'Achieved a flawless SPI in the final semester of B.E. IT.',
    image: A4 ,
    alt: A4,
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
              <img
                src={a.image}
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
        maxWidth="max-w-3xl"
      >
        {active && (
          <div className="p-4 sm:p-6 bg-ink-950">
            <img src={active.image} alt={active.alt} className="w-full h-auto rounded-lg border border-white/10" />
            <div className="mt-4">
              <div className="text-sm text-accent font-semibold">{active.org}</div>
              <p className="mt-1 text-soft/75">{active.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
