import type { ServiceItem, ConceptProject, LearningPath, FAQItem, NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Studio', href: '/studio' },
  { label: 'Learners', href: '/learners' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: 'dashboard',
    title: 'UI/UX Design',
    description: 'Intuitive, human-centric interfaces designed for conversion and user delight.',
    features: ['User Research', 'Prototyping', 'Visual Identity', 'Design Systems'],
    color: 'primary',
  },
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Performant, scalable web applications built with the most modern tech stacks.',
    features: ['React / Next.js', 'Backend Engineering', 'API Development', 'Performance'],
    color: 'tertiary',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that live on your users\' home screens.',
    features: ['iOS / Android', 'Flutter / React Native', 'App Store Optimization'],
    color: 'primary',
  },
  {
    icon: 'cloud',
    title: 'SaaS Development',
    description: 'End-to-end SaaS product development from architecture to deployment and scale.',
    features: ['Multi-tenancy', 'Billing Integration', 'Analytics Dashboards'],
    color: 'tertiary',
  },
  {
    icon: 'dns',
    title: 'Cloud Solutions',
    description: 'Enterprise-grade cloud infrastructure for maximum uptime and global performance.',
    features: ['AWS / GCP / Azure', 'DevOps / CI-CD', 'Auto-Scaling'],
    color: 'primary',
  },
  {
    icon: 'psychology',
    title: 'AI Integrations',
    description: 'Intelligent automation and predictive systems powered by cutting-edge AI models.',
    features: ['LLM Integration', 'Computer Vision', 'Custom ML Models'],
    color: 'tertiary',
  },
  {
    icon: 'trending_up',
    title: 'Digital Marketing',
    description: 'Growth-driven marketing strategies that amplify your brand\'s digital presence.',
    features: ['SEO & Content', 'Paid Acquisition', 'Analytics & CRO'],
    color: 'primary',
  },
];

export const CONCEPT_PROJECTS: ConceptProject[] = [
  {
    title: 'AI Learning Platform Concept',
    category: 'AI / EdTech',
    stack: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    description: 'An adaptive learning platform powered by AI that personalizes curriculum based on student performance and learning style.',
    gradient: 'from-blue-900/40 via-indigo-900/30 to-purple-900/20',
    filter: 'ai',
  },
  {
    title: 'Startup CRM Concept',
    category: 'SaaS',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    description: 'A lightweight CRM built for early-stage startups — pipeline management, contact tracking, and deal analytics.',
    gradient: 'from-emerald-900/40 via-teal-900/30 to-cyan-900/20',
    filter: 'saas',
  },
  {
    title: 'SaaS Analytics Dashboard Concept',
    category: 'FinTech / Analytics',
    stack: ['Next.js', 'D3.js', 'Stripe', 'Supabase'],
    description: 'A real-time analytics dashboard for SaaS businesses — MRR tracking, churn analysis, and cohort breakdowns.',
    gradient: 'from-violet-900/40 via-purple-900/30 to-fuchsia-900/20',
    filter: 'saas',
  },
  {
    title: 'E-Commerce Experience Concept',
    category: 'Mobile / E-Commerce',
    stack: ['Flutter', 'Firebase', 'Stripe', 'Algolia'],
    description: 'A premium mobile shopping experience with AI-powered recommendations, AR try-ons, and seamless checkout.',
    gradient: 'from-amber-900/40 via-orange-900/30 to-red-900/20',
    filter: 'mobile',
  },
  {
    title: 'Healthcare Portal Concept',
    category: 'HealthTech',
    stack: ['React', 'NestJS', 'FHIR API', 'Docker'],
    description: 'A patient-facing health portal with appointment scheduling, medical records, and telehealth integration.',
    gradient: 'from-cyan-900/40 via-sky-900/30 to-blue-900/20',
    filter: 'web',
  },
  {
    title: 'Smart City Dashboard Concept',
    category: 'IoT / GovTech',
    stack: ['Vue.js', 'AWS IoT', 'MapboxGL', 'TimescaleDB'],
    description: 'A real-time city operations dashboard monitoring traffic, energy, and environmental sensors across districts.',
    gradient: 'from-teal-900/40 via-emerald-900/30 to-green-900/20',
    filter: 'ai',
  },
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    icon: 'terminal',
    title: 'Frontend Development',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'primary',
  },
  {
    icon: 'database',
    title: 'Backend Development',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'REST / GraphQL'],
    color: 'tertiary',
  },
  {
    icon: 'stacks',
    title: 'Full Stack Development',
    technologies: ['React + Node.js', 'Next.js', 'Prisma', 'Supabase'],
    color: 'primary',
  },
  {
    icon: 'psychology',
    title: 'AI & Machine Learning',
    technologies: ['Python', 'TensorFlow', 'LangChain', 'OpenAI API'],
    color: 'tertiary',
  },
  {
    icon: 'cloud',
    title: 'Cloud Computing',
    technologies: ['AWS', 'GCP', 'Docker', 'Serverless'],
    color: 'primary',
  },
  {
    icon: 'settings',
    title: 'DevOps',
    technologies: ['CI/CD', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    color: 'tertiary',
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    technologies: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    color: 'primary',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    color: 'tertiary',
  },
  {
    icon: 'trending_up',
    title: 'Digital Marketing',
    technologies: ['SEO', 'Google Analytics', 'Growth Hacking', 'Content Strategy'],
    color: 'primary',
  },
  {
    icon: 'rocket_launch',
    title: 'Entrepreneurship',
    technologies: ['Product Strategy', 'Fundraising', 'Go-to-Market', 'Business Models'],
    color: 'tertiary',
  },
];

export const BUSINESS_FAQ: FAQItem[] = [
  {
    question: 'What is the typical project timeline?',
    answer: 'MVP development typically takes 6-10 weeks. Enterprise solutions depend on scope but follow a strict milestone-based delivery system with full transparency at every stage.',
  },
  {
    question: 'How do you handle intellectual property?',
    answer: 'You retain 100% ownership of all IP created during the project. All contracts include comprehensive IP transfer clauses.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We specialize in React, Next.js, Flutter, Node.js, Python, and cloud platforms (AWS, GCP). We choose the stack that best fits your project needs.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. We offer flexible maintenance and support packages post-launch. Many clients transition to long-term partnership models.',
  },
];

export const LEARNER_FAQ: FAQItem[] = [
  {
    question: 'Do I get to work on real projects?',
    answer: 'Yes. After initial certification, top-performing learners are placed on actual DEZAI Studio projects under senior mentorship.',
  },
  {
    question: 'What do I receive upon completion?',
    answer: 'Certificates, recommendation letters, portfolio projects, and for top performers — internship opportunities with DEZAI or our partner companies.',
  },
  {
    question: 'Is prior experience required?',
    answer: 'No. We have paths for complete beginners as well as working professionals looking to upskill. Our mentors adapt to your level.',
  },
  {
    question: 'How long is the program?',
    answer: 'Programs range from 8 weeks (focused tracks) to 6 months (comprehensive full-stack). You learn at your own pace with structured milestones.',
  },
];

export const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
  'Not sure yet',
];

export const BACKGROUND_OPTIONS = [
  'Student',
  'Fresh Graduate',
  'Working Professional',
  'Career Changer',
  'Self-Taught Developer',
];

export const PATH_OPTIONS = [
  'Frontend Development',
  'Backend Development',
  'Full Stack Development',
  'AI & Machine Learning',
  'Cloud Computing',
  'DevOps',
  'UI/UX Design',
  'Mobile App Development',
  'Digital Marketing',
  'Entrepreneurship',
];
