import { useEffect, useState } from 'react'
import { about, experience, profile, projects, skills } from './data'

const sections = ['about', 'experience', 'projects', 'skills', 'contact'] as const

function useActiveSection() {
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))] as const
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  const active = useActiveSection()
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <header className="nav">
        <a href="#top" className="nav-name">
          {profile.name}
        </a>
        <nav className="nav-links">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : undefined}>
              {id}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'light' ? '◐' : '◑'}
          </button>
        </nav>
      </header>

      <main id="top" className="container">
        <div className="hero">
          <p className="eyebrow">
            hi, i'm <span className="wave" aria-hidden="true" />
          </p>
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <div className="hero-links">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith('http') || l.href.endsWith('.pdf') ? '_blank' : undefined} rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        <Section id="about" title="About">
          {about.map((p, i) => (
            <p key={i} className="prose">
              {p}
            </p>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company + job.period} className="entry">
                <div className="entry-meta">{job.period}</div>
                <div>
                  <h3>
                    {job.role} <span className="muted">· {job.company}</span>
                  </h3>
                  {job.note && <p className="note">{job.note}</p>}
                  {job.points.length > 0 && (
                    <ul className="points">
                      {job.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="card">
                <header className="card-head">
                  <h3>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noreferrer">
                        {p.name} ↗
                      </a>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <p className="muted">{p.summary}</p>
                </header>
                <ul className="points">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-row">
                <dt>{s.group}</dt>
                <dd>{s.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="prose">
            I'm open to new-grad and internship opportunities. The best way to reach me is by email.
          </p>
          <a className="cta" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Section>

        <footer className="footer">
          © {new Date().getFullYear()} {profile.name} · Built with React &amp; TypeScript
        </footer>
      </main>
    </>
  )
}
