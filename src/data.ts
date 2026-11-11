// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Vivian Nguyen',
  role: 'Software Developer',
  tagline:
    'Software Engineering student at McMaster University. I build full-stack products, backend services in Go, and LLM-powered tools.',
  location: 'Ontario, Canada',
  email: 'vivnguyen1205@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/vivnguyen1205' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/vivnguyen1205' },
    { label: 'Email', href: 'mailto:vivnguyen1205@gmail.com' },
    { label: 'Resume', href: '/Vivian_Nguyen_Resume.pdf' },
  ],
}

export const about = [
  "I'm a Software Engineering (Co-op) student at McMaster University, graduating December 2027. I'm currently a Software Developer Intern at IBM, working on IBM Guardium Data Security across a React front end and Go backend services.",
  'Outside of work, I like building systems end to end. Recent projects include an LLM agent that answers questions about SEC filings with citations, and an observability platform load-tested with 2,000+ simulated agents.',
]

export type Experience = {
  role: string
  company: string
  period: string
  note?: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Developer Intern',
    company: 'IBM',
    period: 'May 2025 — Present',
    note: 'Full-time May 2025 – Aug 2026 · Part-time Sep 2026 – Present',
    points: [
      'Developed risk management, asset inventory, and vulnerability assessment features for IBM Guardium Data Security using React, TypeScript, TanStack Router/Query, and the Carbon Design System.',
      'Built and maintained Go backend services with gRPC, REST APIs, and MongoDB.',
      'Improved quality and release reliability via automated testing (Playwright, Jest, React Testing Library, accessibility), Docker dev environments, and Jenkins CI/CD.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Gene Solutions',
    period: 'May 2024 — Aug 2024',
    points: [
      'Built a responsive full-stack web application with an Angular front end using TypeScript, HTML, and CSS.',
      'Built REST APIs with ASP.NET and Entity Framework for data exchange between client and server.',
    ],
  },
  {
    role: 'Engineering Intern',
    company: 'Linamar, Camtac',
    period: 'May 2023 — Aug 2023',
    points: [
      'Analyzed production data — yield rates, cycle times, defect rates — to find improvement opportunities.',
      'Helped redesign workstations, equipment layout, and material flow to improve productivity and safety.',
    ],
  },
]

export type Project = {
  name: string
  summary: string
  stack: string[]
  highlights: string[]
  link?: string
}

export const projects: Project[] = [
  {
    name: 'Ledger',
    summary: 'LLM agent for SEC filing analysis',
    stack: ['Python', 'Google ADK', 'Gemini', 'PostgreSQL', 'pgvector'],
    highlights: [
      'Answers questions about company 10-K filings with source citations, using tool calling and vector search over 1,600+ document chunks.',
      'Pipeline turns 30 SEC EDGAR annual reports and XBRL data into searchable chunks and 177 normalized metrics.',
      'Handled inconsistent filing formats to reach full coverage of all 30 filings.',
    ],
  },
  {
    name: 'Pulse',
    summary: 'Server observability platform',
    stack: ['Go', 'PostgreSQL', 'Next.js', 'TypeScript', 'Docker'],
    highlights: [
      'Go agents, a Go API, PostgreSQL, and a live Next.js dashboard.',
      'Batching database writes raised throughput from 8.1K to 40K points/sec and cut p50 latency from 2.3s to under 1ms, tested with 2,000+ simulated agents.',
      'Anomaly detection (EWMA, CUSUM, z-score): on 3K simulated faults, EWMA caught 93.5% of drifts vs. 47% for z-score at equal false-alarm rates.',
    ],
  },
  {
    name: 'GemScan',
    summary: 'Android gem identification app',
    stack: ['React Native', 'Python', 'Flask', 'Firebase'],
    highlights: [
      'Identifies gemstones from photos using a CNN model served from a Flask backend.',
      'Image recognition, attribute-based search, user accounts, and secure storage in Firebase.',
    ],
  },
  {
    name: 'SwiftApps',
    summary: 'AI job application autofill assistant',
    stack: ['Python', 'Cohere API', 'Google Cloud Vision', 'Selenium'],
    highlights: [
      'Automatically fills in open-ended job application questions with personalized answers based on your resume.',
      'Extracts resume text from PDFs with Google Cloud Vision AI, then uses the Cohere API to write tailored responses.',
      'Uses Selenium to read the questions from a web form and fill in the generated answers.',
    ],
    link: 'https://github.com/vivnguyen1205/SwiftApps',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'Go', 'Java', 'TypeScript', 'SQL'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Spring Boot', 'Node.js'] },
  { group: 'Databases', items: ['PostgreSQL', 'pgvector', 'MongoDB', 'MySQL'] },
  { group: 'AI / ML', items: ['Google ADK', 'Gemini API', 'RAG', 'LLM Agents', 'Vector Search'] },
  { group: 'Tools', items: ['Git', 'Linux', 'Docker', 'Jenkins', 'gRPC', 'Jest', 'Playwright'] },
]
