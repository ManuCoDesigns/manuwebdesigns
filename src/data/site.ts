// Single source of truth for the site's content.
// Edit this file to update contact details, links and projects.

export const contact = {
  email: 'manuwebdesigns@gmail.com',
  phoneDisplay: '+254 714 749 123',
  phoneTel: '+254714749123',
  whatsapp: '254714749123', // international format, no + or spaces
  location: 'Bomet, Kenya · Working remotely worldwide',
};

export const socials = {
  github: 'https://github.com/ManuCoDesigns',
  whatsapp: `https://wa.me/${contact.whatsapp}`,
  email: `mailto:${contact.email}`,
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: string;
  accent: string;
  liveUrl?: string;
  sourceUrl?: string;
  /** Shown instead of links for client/private work */
  privateNote?: string;
  domain: string;
  featured: boolean;
  /** Optional real screenshot in /public/images/projects (16:10 works best). Falls back to an illustrated preview. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: 'cbe-pro',
    title: "St. Mary's CBE Pro",
    tagline: 'School management SaaS for Kenyan CBE schools',
    description:
      'An end-to-end school system I architected and built solo. It replaced paper marks, spreadsheets and mail-merged report forms with one platform that teachers, administrators and parents use daily, mostly from their phones.',
    highlights: [
      'Automated marks entry, exam analysis and report forms',
      'Parent portal with results, fee balances and library records',
      'Virtual classes with attendance tracking and online exams',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase'],
    category: 'EdTech · SaaS',
    accent: '#10b981',
    liveUrl: 'https://stmaryscbepro.vercel.app',
    domain: 'stmaryscbepro.vercel.app',
    featured: true,
  },
  {
    slug: 'ecco',
    title: 'EduCareer Connect (ECCO)',
    tagline: 'Website rebuild for a Kenyan career guidance non-profit',
    description:
      'A full rebuild of the ECCO website: clean reusable components, real SEO, full responsiveness and an M-Pesa membership flow. I maintain and update it monthly for the organisation.',
    highlights: [
      'Migrated off a no-code builder to a maintainable codebase',
      'M-Pesa membership payments flow',
      'Ongoing monthly maintenance and content updates',
    ],
    technologies: ['TanStack Start', 'React', 'Supabase', 'Tailwind', 'M-Pesa'],
    category: 'Non-profit · Web',
    accent: '#00d9f5',
    liveUrl: 'https://www.educareer-connect.org',
    sourceUrl: 'https://github.com/ManuCoDesigns/EduCareer-Connect',
    domain: 'educareer-connect.org',
    featured: true,
  },
  {
    slug: 'extraction-platform',
    title: 'Critical Materials Data Platform',
    tagline: 'Data extraction & QA platform for a knowledge graph',
    description:
      'As contractor and technical lead, I build and run a platform where a team of extractors pulls structured data on critical materials from government and industry sources, with peer review, QA and admin approval built into the workflow.',
    highlights: [
      'Batch assignment, peer review and admin approval workflow',
      'SOP-compliant Python extraction scripts',
      'Team lead: QA, reporting and delivery across extractors',
    ],
    technologies: ['FastAPI', 'PostgreSQL', 'Python', 'React', 'TypeScript'],
    category: 'Data · Platform',
    accent: '#7c3aed',
    privateNote: 'Client work · private',
    domain: 'data-extraction-platform',
    featured: true,
  },
  {
    slug: 'prograde',
    title: 'ProGrade Elites',
    tagline: 'Learning management system for a client',
    description:
      'A standalone LMS with notes, exams and discussion posts. Accounts are created by admins only, and it is set up as a paid, subscription-based product.',
    highlights: ['Notes, exams & discussions', 'Admin-managed accounts'],
    technologies: ['React', 'Supabase', 'Vercel'],
    category: 'EdTech · LMS',
    accent: '#f59e0b',
    liveUrl: 'https://prograde-nu.vercel.app',
    domain: 'prograde-nu.vercel.app',
    featured: false,
  },
  {
    slug: 'hybrid-scanner',
    title: 'Hybrid RF + Network Scanner',
    tagline: 'M.Sc. research project',
    description:
      'A standalone Windows desktop tool that combines RF and network scanning in one interface, built as my M.Sc. thesis project.',
    highlights: ['RF + network discovery', 'Standalone Windows app'],
    technologies: ['Python', 'Tkinter', 'Networking'],
    category: 'Research · Desktop',
    accent: '#f43f5e',
    privateNote: 'Thesis project',
    domain: 'hybrid-scanner',
    featured: false,
  },
  {
    slug: 'stmarys-web',
    title: "St. Mary's School Website",
    tagline: 'Public website for a junior & senior school',
    description:
      "The school's public website: academic programmes, staff, news and admissions information, designed for parents browsing on their phones.",
    highlights: ['Mobile-first design', 'Programmes & admissions info'],
    technologies: ['React', 'Tailwind', 'Vercel'],
    category: 'Education · Web',
    accent: '#38bdf8',
    liveUrl: 'https://stmarysjssweb.vercel.app/',
    domain: 'stmarysjssweb.vercel.app',
    featured: false,
  },
];

export const experience = [
  {
    role: 'Contractor & Technical Lead',
    org: 'Critical materials data extraction platform',
    period: '2026 — Present',
    accent: '#7c3aed',
    points: [
      'Lead platform development (FastAPI, PostgreSQL, React) and deployment',
      'Coordinate extractors, run QA reviews and produce monthly compliance reports',
    ],
  },
  {
    role: 'Founder & Lead Developer',
    org: 'ManuWebDesigns',
    period: 'Ongoing',
    accent: '#00d9f5',
    points: [
      'Design, build and maintain websites and web apps for organisations and businesses',
      'Clients include EduCareer Connect and ProGrade Elites',
    ],
  },
  {
    role: 'Sole Developer & Architect',
    org: "St. Mary's CBE Pro",
    period: '2025 — Present',
    accent: '#10b981',
    points: [
      'Took the school from paper and spreadsheets to a full digital records system',
      'Shipped marks entry, a parent portal, e-learning and online exams',
    ],
  },
  {
    role: 'ICT & Computer Studies Teacher',
    org: "St. Mary's Mixed Junior & Senior School, Bomet",
    period: 'Present',
    accent: '#f59e0b',
    points: [
      'Teach Computer Studies across junior secondary and KCSE classes',
      'Build digital teaching materials and lead the school’s ICT work',
    ],
  },
];
