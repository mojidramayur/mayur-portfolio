import { useState } from 'react'
import Modal from './Modal.jsx'
import c1 from '../assets/TCS_iON_IT_Primer_Course_Certificate.png';
import c2 from '../assets/PowerBI_Course_Certificate.png';
import c3 from '../assets/Sql_Course_Certificate.png';
import c4 from '../assets/Data_Funda_ibm_Course_Certificate.png';
import c5 from '../assets/Data_Funda_ibmskill_Course_Certificate.png';
import c6 from '../assets/Python_Course_Certificate.png';
import c7 from '../assets/AWS_JOB_SIMU_Course_Certificate.png';
import c8 from '../assets/Sawit_Ai_Learnathon_Certificate.png';
import c9 from '../assets/Canva_100_Design_Certificate.jpg';
import c10 from '../assets/Chatgtp_Course_Certificate.png';
import c11 from '../assets/ENARGY_LITERACY_TRAINING_Certificate.PNG';
import c12 from '../assets/Grasshopper_Coding_Certificate.png';

const certs = [
  {
    id: 'certificate-1',
    title: 'TCS iON IT Primer Course Certificate',
    org: 'TCS iON',
    date: 'Issued 27 Jun 2026',
    image: c1,
    alt: c1,
    verifyLink: 'https://www.tcsion.com/courses/career-edge-it-course/',
  },
  {
    id: 'certificate-2',
    title: 'Power BI Course',
    org: 'SkillCourse',
    date: 'Issued 19 Jan 2026',
    image: c2,
    alt: c2,
    verifyLink: 'https://exam.skillcourse.in/student/view_certificate.php?uid=SC-7FC3A8BBBF',
  },
  {
    id: 'certificate-3',
    title: 'SQL Course',
    org: 'SkillCourse',
    date: 'Issued 07 Jan 2026',
    image: c3,
    alt: c3,
    verifyLink: 'https://exam.skillcourse.in/student/view_certificate.php?uid=SC-03FCB5C379',
  },
  {
    id: 'certificate-4',
    title: 'Data Fundamental',
    org: 'IBM SkillsBuild',
    date: 'Issued 09 Jul 2025',
    image: c4,
    alt: c4,
    verifyLink: 'https://www.credly.com/badges/c19e70cc-7844-48f1-bce9-c488cd1a6145',
  },
  {
    id: 'certificate-5',
    title: 'The Data Pathway: From Learner to Data Professional',
    org: 'IBM SkillsBuild',
    date: 'Issued 09 Jul 2025',
    image: c5,
    alt: c5,
    verifyLink: 'https://www.credly.com/badges/c19e70cc-7844-48f1-bce9-c488cd1a6145',
  },
  {
    id: 'certificate-6',
    title: 'Python Certificate Course',
    org: 'HCL GUVI',
    date: 'Issued 24 Feb 2025',
    image: c6,
    alt: c6,
    verifyLink: 'https://www.guvi.in/verify-certificate?id=e16sq534I197oY3046',
  },
  {
    id: 'certificate-7',
    title: 'AWS Solutions	Architecture	Job	Simulation',
    org: 'Forage',
    date: 'Issued 29 Dec 2024',
    image: c7,
    alt: c7,
    verifyLink: 'https://www.theforage.com/',
  },
  {
    id: 'certificate-8',
    title: 'SaWiT.AI Challenge Learnathon ',
    org: 'HCL GUVI',
    date: 'Issued 28 Dec 2024',
    image: c8,
    alt: c8,
    verifyLink: 'https://www.guvi.in/verify-certificate?id=9I58e14436P7hy83wT',
  },
  {
    id: 'certificate-9',
    title: 'Canva 100 Design ',
    org: 'Canva',
    date: 'Issued 2024',
    image: c9,
    alt: c9,
    verifyLink: 'https://www.canva.in/',
  },
  {
    id: 'certificate-10',
    title: 'ChatGPT for Everyone: Complete Generative AI & Prompt Engineering Course',
    org: 'HCL GUVI',
    date: 'Issued 14 Aug 2023',
    image: c10,
    alt: c10,
    verifyLink: 'https://www.guvi.in/verify-certificate?id=998Vy6871ma04129KB',
  },
  {
    id: 'certificate-11',
    title: 'ENERGY LITERACY TRAINING',
    org: 'Energy Swaraj Foundation',
    date: 'Issued 24 Mar 2023',
    image: c11,
    alt: c11,
    verifyLink: 'https://energyswaraj.org/verify-certificate/',
  },
  {
    id: 'certificate-12',
    title: 'Coding Fundamental Certificate',
    org: 'Grasshopper (Google)',
    date: 'Issued 20 Jan 2023',
    image: c12,
    alt: c12,
    //verifyLink: 'https://coursera.org/verify/your-id',
  }
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
                {/* Updated Verify Link */}
                <a
                  href={c.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-accent/30 bg-accent/10 text-accent text-xs font-semibold hover:bg-accent/20 transition-colors"
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
            {/* Added onContextMenu and onDragStart to prevent downloading */}
            <img 
              src={active.image} 
              alt={active.alt} 
              className="w-full h-auto rounded-lg border border-white/10 select-none"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="mt-4 text-sm text-soft/70">
              <span className="font-semibold text-accent">{active.org}</span> · {active.date}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
