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

export type Shot = {
  src: string;
  caption: string;
  kind: 'desktop' | 'phone';
};

const D = (name: string, caption: string): Shot => ({ src: `/images/projects/${name}.webp`, caption, kind: 'desktop' });
const P = (name: string, caption: string): Shot => ({ src: `/images/projects/${name}.webp`, caption, kind: 'phone' });

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
  /** Card cover: small 16:10 screenshot (falls back to an illustrated preview). */
  cover?: string;
  /** Optional phone screenshot shown overlapping the cover. */
  coverPhone?: string;
  /** Screenshots for the lightbox gallery. */
  gallery?: Shot[];
};

export const projects: Project[] = [
  {
    slug: 'cbe-pro',
    title: 'CBE Pro',
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
    privateNote: 'Live at a partner school · demo on request',
    domain: 'cbe-pro · school portal',
    featured: true,
    cover: '/images/projects/cbe-teacher-marks-sm.webp',
    coverPhone: '/images/projects/cbe-parent-home.webp',
    gallery: [
      D('cbe-teacher-marks', 'Teacher view: subject marks, class mean and level distribution'),
      P('cbe-parent-home', 'Parent portal home with progress and achievements'),
      P('cbe-results', 'Learner results by learning area, live-updated'),
      P('cbe-fees', 'Next year’s fee structure for the learner’s grade (sample figures)'),
      P('cbe-newsletter', 'Newsletter and term dates for parents (sample data)'),
      P('cbe-login', 'Role-based sign-in for parents and staff'),
    ],
  },
  {
    slug: 'ecco',
    title: 'EduCareer Connect (ECCO)',
    tagline: 'Website rebuild for a Kenyan career guidance non-profit',
    description:
      'A full rebuild of the ECCO website: clean reusable components, real SEO, full responsiveness and an M-Pesa membership flow. I maintain and update it monthly for the organisation.',
    highlights: [
      'Full English and Swahili versions, plus a chat assistant',
      'Session booking, events, resources and M-Pesa donations',
      'Migrated off a no-code builder; maintained monthly',
    ],
    technologies: ['TanStack Start', 'React', 'Supabase', 'Tailwind', 'M-Pesa'],
    category: 'Non-profit · Web',
    accent: '#00d9f5',
    liveUrl: 'https://www.educareer-connect.org',
    sourceUrl: 'https://github.com/ManuCoDesigns/EduCareer-Connect',
    domain: 'educareer-connect.org',
    featured: true,
    cover: '/images/projects/ecco-home-sm.webp',
    coverPhone: '/images/projects/ecco-mobile-home.webp',
    gallery: [
      D('ecco-home', 'Home page hero'),
      D('ecco-quick-links', 'Next event and quick links'),
      D('ecco-events', 'Events: mentorship programme'),
      D('ecco-book', 'Book a guidance session'),
      D('ecco-donate', 'Donations via M-Pesa'),
      D('ecco-swahili', 'Full Swahili translation'),
      D('ecco-chat', 'Built-in chat assistant (Swahili)'),
      P('ecco-mobile-home', 'Mobile home page'),
      P('ecco-mobile-menu', 'Mobile navigation'),
    ],
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
    cover: '/images/projects/dp-overview-sm.webp',
    gallery: [
      D('dp-report-cover', 'Auto-generated delivery report (demo data)'),
      D('dp-overview', 'Overview: sources delivered and accuracy'),
      D('dp-delivery', 'Delivery timeline across batches'),
      D('dp-accuracy', 'How peer review lifts accuracy'),
      D('dp-batch-timeline', 'One batch from pull to approval'),
      D('dp-batches', 'Batches compared side by side'),
    ],
  },
  {
    slug: 'prograde',
    title: 'ProGrade Elites',
    tagline: 'Paid learning platform for a client',
    description:
      'A subscription LMS with three portals: students read notes, sit timed quizzes and submit labs; instructors build quizzes and mark; admins manage users, plans and payments.',
    highlights: [
      'Daily, weekly and monthly plans paid with M-Pesa',
      'Quiz builder, timed exams and a marking queue',
      'Admin revenue reports and admin-only accounts',
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'M-Pesa', 'Vercel'],
    category: 'EdTech · LMS',
    accent: '#f59e0b',
    liveUrl: 'https://prograde-nu.vercel.app',
    domain: 'prograde-nu.vercel.app',
    featured: true,
    cover: '/images/projects/pg-cover-sm.webp',
    gallery: [
      D('pg-landing', 'Landing page'),
      D('pg-pricing', 'Daily, weekly and monthly plans'),
      D('pg-student-dashboard', 'Student dashboard: labs, quizzes, notes'),
      D('pg-quiz-review', 'Quiz review with correct answers'),
      D('pg-mpesa', 'Subscription checkout with M-Pesa'),
      D('pg-instructor', 'Instructor dashboard'),
      D('pg-quiz-builder', 'Quiz builder'),
      D('pg-marking', 'Marking queue'),
      D('pg-admin-payments', 'Admin: payments and revenue (demo data)'),
      P('pg-mobile-dashboard', 'Mobile: lab schedule'),
      P('pg-mobile-quiz', 'Mobile: quiz results'),
    ],
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
    slug: 'school-web',
    title: 'School Website',
    tagline: 'Public website for a junior & senior school',
    description:
      "The school's public website: academic programmes, staff, news and admissions information, designed for parents browsing on their phones.",
    highlights: ['Mobile-first design', 'Programmes & admissions info'],
    technologies: ['React', 'Tailwind', 'Vercel'],
    category: 'Education · Web',
    accent: '#38bdf8',
    privateNote: 'Client site',
    domain: 'school-website',
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
    org: 'CBE Pro · school management SaaS',
    period: '2025 — Present',
    accent: '#10b981',
    points: [
      'Took the school from paper and spreadsheets to a full digital records system',
      'Shipped marks entry, a parent portal, e-learning and online exams',
    ],
  },
  {
    role: 'ICT & Computer Studies Teacher',
    org: 'Junior & senior secondary school, Bomet County',
    period: 'Present',
    accent: '#f59e0b',
    points: [
      'Teach Computer Studies across junior secondary and KCSE classes',
      'Build digital teaching materials and lead the school’s ICT work',
    ],
  },
];
