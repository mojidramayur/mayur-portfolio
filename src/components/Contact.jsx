export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="reveal max-w-3xl mx-auto text-center">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Let's Connect.</h2>
        <p className="mt-4 text-soft/65">
          Open to full-time roles, freelance Power Platform projects, and collaborative
          opportunities. I'll respond within a day.
        </p>
      </div>

      <div className="reveal mt-12 max-w-4xl mx-auto glass p-7 sm:p-10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative grid sm:grid-cols-3 gap-4">
          <a
            href="mailto:mojidramayurp@gmail.com"
            className="group glass glass-hover p-5 text-center !rounded-xl"
          >
            <div className="mx-auto w-12 h-12 rounded-xl bg-accent/15 text-accent grid place-items-center group-hover:bg-accent group-hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            <div className="mt-3 text-xs uppercase tracking-wider text-soft/55">Email</div>
            <div className="mt-1 font-semibold text-soft break-all">mojidramayurp@gmail.com</div>
          </a>

          <a
            href="tel:+919173885386"
            className="group glass glass-hover p-5 text-center !rounded-xl"
          >
            <div className="mx-auto w-12 h-12 rounded-xl bg-accent/15 text-accent grid place-items-center group-hover:bg-accent group-hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <div className="mt-3 text-xs uppercase tracking-wider text-soft/55">Phone</div>
            <div className="mt-1 font-semibold text-soft">+91 9173885386</div>
          </a>

          <a
            href="https://www.linkedin.com/in/mayurmojidra/"
            target="_blank"
            rel="noreferrer"
            className="group glass glass-hover p-5 text-center !rounded-xl"
          >
            <div className="mx-auto w-12 h-12 rounded-xl bg-accent/15 text-accent grid place-items-center group-hover:bg-accent group-hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
            </div>
            <div className="mt-3 text-xs uppercase tracking-wider text-soft/55">LinkedIn</div>
            <div className="mt-1 font-semibold text-soft">/in/mayurmojidra</div>
          </a>
        </div>

        <div className="relative mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:mojidramayurp@gmail.com?subject=Let's%20connect%20—%20Mayur"
            className="btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/mayurmojidra/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
