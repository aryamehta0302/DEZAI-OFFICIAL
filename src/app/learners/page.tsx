'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LEARNING_PATHS, LEARNER_FAQ } from '@/lib/constants';
import ReviewsMarquee from '@/components/ui/ReviewsMarquee';
import { LEARNER_REVIEWS } from '@/lib/reviews';
import JsonLd from '@/components/layout/JsonLd';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ─────────────────── Hall of Learners Data ─────────────────── */

interface Learner {
  name: string;
  path: string;
  level: number;
  skills: string[];
  accent: string;
  glowColor: string;
  avatarBg: string;
  badges: string[];
  commits: number;
  projects: number;
  bio: string;
}

const HALL_OF_LEARNERS: Learner[] = [
  {
    name: 'Deep Kayastha',
    path: 'Cloud & Mobile Engineering',
    level: 5,
    skills: ['AWS', 'Flutter', 'Node.js', 'Docker'],
    accent: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    avatarBg: 'bg-amber-500/10 text-amber-600',
    badges: ['AWS Cloud Specialist', 'Mobile Lead'],
    commits: 462,
    projects: 6,
    bio: 'Architecting robust AWS cloud topologies, cross-platform mobile interfaces, and secure backend microservices.'
  },
  {
    name: 'Hitarth Khatiwala',
    path: 'AI & Machine Learning',
    level: 5,
    skills: ['PyTorch', 'LangGraph', 'FastAPI', 'ChromaDB'],
    accent: 'from-violet-500 to-purple-500',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    avatarBg: 'bg-violet-500/10 text-violet-600',
    badges: ['NVIDIA Certified', 'IIT Madras SIH Leader'],
    commits: 490,
    projects: 7,
    bio: 'Engineering multilingual speech agents, deterministic LangGraph chains, and chest X-ray classifiers.'
  },
  {
    name: 'Krish Singh',
    path: 'Full Stack Development',
    level: 5,
    skills: ['Next.js', 'FastAPI', 'MongoDB', 'LangGraph'],
    accent: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    avatarBg: 'bg-emerald-500/10 text-emerald-600',
    badges: ['IBM AI Professional', 'AIML Club Research Head'],
    commits: 340,
    projects: 6,
    bio: 'Designing safety-enforced modular agent pipelines, OCR expense builders, and convolutional crack classifiers.'
  },
  {
    name: 'Ansh Dhanani',
    path: 'Full Stack Development',
    level: 4,
    skills: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
    accent: 'from-blue-500 to-indigo-500',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    avatarBg: 'bg-blue-500/10 text-blue-600',
    badges: ['Open Source Contributor', 'UI Specialist'],
    commits: 320,
    projects: 5,
    bio: 'Developing Git-connected PR review tools and high-performance gradual blur animations for react-bits.'
  },
  {
    name: 'Varun Pansheriya',
    path: 'Backend Development',
    level: 4,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
    accent: 'from-cyan-500 to-sky-500',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    avatarBg: 'bg-cyan-500/10 text-cyan-600',
    badges: ['IIT Gandhinagar Finalist', 'Backend Architect'],
    commits: 210,
    projects: 3,
    bio: 'Deploying real-time sports score engines and designing structured MVC architectures.'
  },
  {
    name: 'Krish Parmar',
    path: 'AI & Machine Learning',
    level: 4,
    skills: ['Python', 'FastAPI', 'Streamlit', 'Supervised Learning'],
    accent: 'from-rose-500 to-pink-500',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    avatarBg: 'bg-rose-500/10 text-rose-600',
    badges: ['IIIT Dharwad Top 60', 'IBM AI Certified'],
    commits: 367,
    projects: 5,
    bio: 'Building empathetic NLP mental health chatbots and physics-informed asteroid impact calculators.'
  },
  {
    name: 'MANAN PANCHAL',
    path: 'AI & Machine Learning',
    level: 5,
    skills: ['PyTorch', 'FastAPI', 'Computer Vision', 'RAG Systems'],
    accent: 'from-yellow-500 to-amber-500',
    glowColor: 'rgba(234, 179, 8, 0.15)',
    avatarBg: 'bg-yellow-500/10 text-yellow-600',
    badges: ['SSIP Grant Recipient', 'GDG Core Member'],
    commits: 512,
    projects: 6,
    bio: 'Developing Meta TRIBE-powered brain simulators and GenAI regulatory Technical Standard compliance workspaces.'
  },
  {
    name: 'Nil Lad',
    path: 'Mobile & Web Development',
    level: 5,
    skills: ['Flutter', 'FastAPI', 'React', 'MongoDB'],
    accent: 'from-fuchsia-500 to-purple-500',
    glowColor: 'rgba(217, 70, 239, 0.15)',
    avatarBg: 'bg-fuchsia-500/10 text-fuchsia-600',
    badges: ['NVIDIA Certified', 'Open Source Builder'],
    commits: 310,
    projects: 7,
    bio: 'Shipping full-stack attendance systems, automated video workers, and Smart Udhaar Flutter apps.'
  },
  {
    name: 'Tirth Bhanderi',
    path: 'Mobile App Development',
    level: 5,
    skills: ['Flutter', 'Android SDK', 'Java', 'WebRTC'],
    accent: 'from-teal-500 to-cyan-500',
    glowColor: 'rgba(20, 184, 166, 0.15)',
    avatarBg: 'bg-teal-500/10 text-teal-600',
    badges: ['9Brainz Intern', 'Mobile Architect'],
    commits: 240,
    projects: 4,
    bio: 'Engineering offline MobileNet CNN breed classifiers and custom peer-to-peer WebRTC video calling systems.'
  }
];

export default function LearnersPage() {
  const [activeLearnerIndex, setActiveLearnerIndex] = useState(0);
  const activeLearner = HALL_OF_LEARNERS[activeLearnerIndex];
  const courseSchemas = LEARNING_PATHS.map((path) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": path.title,
    "description": `Mentorship-driven talent development path for ${path.title} mastering ${path.technologies.join(', ')}.`,
    "provider": {
      "@type": "Organization",
      "name": "DEZAI",
      "url": "https://dezai.com"
    }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": LEARNER_FAQ.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dezai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Learners",
        "item": "https://dezai.com/learners"
      }
    ]
  };

  return (
    <>
      <JsonLd schema={[...courseSchemas, faqSchema, breadcrumbSchema]} />
      {/* Hero */}
      <section className="pt-32 pb-[120px] relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="label-caps text-primary mb-4 block">DEZAI Learners</motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              Transform Potential<br />Into <span className="text-primary">Capability.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
              We don&apos;t just teach code; we build careers. Our mentorship-first approach bridges the gap between learning and industry-level professional excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
          >
            What You Get
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: 'school', title: 'Structured Learning', desc: 'Industry-aligned curriculum designed by senior engineers and designers.' },
              { icon: 'code', title: 'Real Projects', desc: 'Contribute to live commercial projects under senior mentorship.' },
              { icon: 'work', title: 'Portfolio Building', desc: 'Graduate with a professional portfolio that impresses employers.' },
              { icon: 'group', title: 'Mentorship', desc: 'Direct 1-on-1 guidance from industry professionals.' },
              { icon: 'workspace_premium', title: 'Certificates & Letters', desc: 'Earn certificates and recommendation letters upon completion.' },
              { icon: 'business_center', title: 'Internship Opportunities', desc: 'Top performers get placed on real DEZAI Studio projects.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="card-elevated rounded-2xl p-8 group">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-[120px] bg-surface-dim">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeInUp} className="label-caps text-primary mb-4 block">Your Journey</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Learn. Build. Grow.
              </motion.h2>

              <div className="space-y-8">
                {[
                  { icon: 'school', title: 'Foundational Training', desc: 'Master the core technologies through hands-on labs and guided projects.', color: 'bg-primary', iconColor: 'text-on-primary', lineColor: 'bg-primary/20' },
                  { icon: 'code', title: 'Real-World Projects', desc: 'Contribute to live commercial projects under senior supervision.', color: 'bg-primary', iconColor: 'text-on-tertiary', lineColor: 'bg-primary/20' },
                  { icon: 'trending_up', title: 'Professional Growth', desc: 'Job placement support, mentorship continuation, and lifelong network access.', color: 'bg-primary', iconColor: 'text-on-primary', lineColor: '' },
                ].map((step) => (
                  <motion.div key={step.title} variants={fadeInUp} className="flex gap-6 relative">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center z-10 shrink-0`}>
                        <span className={`material-symbols-outlined text-sm ${step.iconColor}`}>{step.icon}</span>
                      </div>
                      {step.lineColor && <div className={`w-0.5 flex-1 ${step.lineColor} mt-2`} />}
                    </div>
                    <div className="pb-4">
                      <h4 className="font-bold text-xl mb-1">{step.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: 'terminal', label: 'Frontend Dev', isPrimary: true, offset: '' },
                { icon: 'database', label: 'Backend Dev', isPrimary: false, offset: 'mt-12' },
                { icon: 'psychology', label: 'AI & ML', isPrimary: true, offset: '-mt-6' },
                { icon: 'palette', label: 'UI/UX Design', isPrimary: false, offset: 'mt-6' },
              ].map((card) => (
                <motion.div
                  key={card.label}
                  variants={fadeInUp}
                  className={`card-elevated p-6 rounded-2xl text-center group ${card.isPrimary ? 'hover:border-primary' : 'hover:border-primary'} ${card.offset}`}
                >
                  <span className={`material-symbols-outlined text-4xl mb-4 block group-hover:scale-110 transition-transform ${card.isPrimary ? 'text-primary' : 'text-primary'}`}>{card.icon}</span>
                  <div className="label-caps text-xs">{card.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies You Can Learn */}
      <section className="py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Technologies You Can Learn
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-xl mx-auto">
              Choose your path and master the technologies that power the modern digital economy.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {LEARNING_PATHS.map((path) => (
              <motion.div
                key={path.title}
                variants={fadeInUp}
                className={`card-elevated rounded-2xl p-6 group cursor-pointer ${path.color === 'primary' ? 'hover:border-primary' : 'hover:border-primary'}`}
              >
                <span className={`material-symbols-outlined text-3xl mb-4 block group-hover:scale-110 transition-transform ${path.color === 'primary' ? 'text-primary' : 'text-primary'}`}>
                  {path.icon}
                </span>
                <h4 className="font-bold text-sm mb-3">{path.title}</h4>
                <div className="flex flex-wrap gap-2 mt-4 relative">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -z-10" />
                  {path.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] label-caps px-2 py-0.5 bg-surface text-on-surface-variant font-medium relative group-hover:text-primary transition-colors">
                      <span className="absolute -left-[3px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                      <span className="pl-2">{tech}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hall of Learners */}
      <section className="py-[120px] relative overflow-hidden bg-surface-dim">
        {/* Isometric Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(30deg, #1a2b5a 12%, transparent 12.5%, transparent 87%, #1a2b5a 87.5%, #1a2b5a), linear-gradient(150deg, #1a2b5a 12%, transparent 12.5%, transparent 87%, #1a2b5a 87.5%, #1a2b5a), linear-gradient(30deg, #1a2b5a 12%, transparent 12.5%, transparent 87%, #1a2b5a 87.5%, #1a2b5a), linear-gradient(150deg, #1a2b5a 12%, transparent 12.5%, transparent 87%, #1a2b5a 87.5%, #1a2b5a), linear-gradient(60deg, #1a2b5a77 25%, transparent 25.5%, transparent 75%, #1a2b5a77 75%, #1a2b5a77), linear-gradient(60deg, #1a2b5a77 25%, transparent 25.5%, transparent 75%, #1a2b5a77 75%, #1a2b5a77)', backgroundSize: '20px 35px', backgroundPosition: '0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px' }} />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="label-caps text-primary mb-4 block text-[11px] tracking-[0.25em]">Talent Directory</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
              Hall of Learners
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Celebrating our top achievers, system builders, and future tech leaders in our high-growth ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Active Learner Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-5 h-full"
            >
              <div className="card-elevated rounded-2xl p-8 flex flex-col justify-between min-h-[560px] relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] group/profile border border-border hover:border-primary/30 transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover/profile:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-full ${activeLearner.avatarBg} flex items-center justify-center font-bold text-xl border border-border font-mono shadow-sm relative`}>
                      <div className="absolute inset-[-4px] rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                      {activeLearner.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-on-surface leading-tight tracking-tight">{activeLearner.name}</h3>
                      <p className="text-xs text-on-surface-variant font-semibold label-caps mt-1.5 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {activeLearner.path}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-on-surface-variant leading-relaxed italic bg-surface-dim border border-border p-4 rounded-xl">
                    &ldquo;{activeLearner.bio}&rdquo;
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-dim border border-border p-4 rounded-2xl group/stat hover:border-primary/40 transition-colors relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-full group-hover/stat:translate-x-full transition-transform duration-1000" />
                      <span className="text-[9px] label-caps text-outline block mb-1 group-hover/stat:text-primary transition-colors">Ecosystem Commits</span>
                      <div className="text-lg font-mono font-bold text-on-surface tracking-wide">{activeLearner.commits}</div>
                    </div>
                    <div className="bg-surface-dim border border-border p-4 rounded-2xl group/stat hover:border-primary/40 transition-colors relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-full group-hover/stat:translate-x-full transition-transform duration-1000" />
                      <span className="text-[9px] label-caps text-outline block mb-1 group-hover/stat:text-primary transition-colors">Production Projects</span>
                      <div className="text-lg font-mono font-bold text-on-surface tracking-wide">{activeLearner.projects}</div>
                    </div>
                  </div>

                  {/* Progression meter */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs label-caps text-on-surface-variant font-semibold">
                      <span>Capability Level</span>
                      <span>L{activeLearner.level} / L5</span>
                    </div>
                    <div className="w-full bg-surface-high rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        key={activeLearner.name + '-level'}
                        initial={{ width: 0 }}
                        animate={{ width: `${(activeLearner.level / 5) * 100}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${activeLearner.accent} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Skills - Technical Matrix */}
                  <div>
                    <span className="text-[10px] label-caps text-outline block mb-3">Verified Skill Stack</span>
                    <div className="grid grid-cols-2 gap-2">
                      {activeLearner.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2 group/skill">
                          <div className="w-1.5 h-1.5 rounded-sm bg-border group-hover/skill:bg-primary transition-colors" />
                          <span className="text-[11px] font-mono font-medium text-on-surface-variant group-hover/skill:text-on-surface transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Badges */}
                  <div>
                    <span className="text-[10px] label-caps text-outline block mb-2">Distinguished Achievements</span>
                    <div className="flex flex-wrap gap-2">
                      {activeLearner.badges.map((badge) => (
                        <div key={badge} className="flex items-center gap-1.5 bg-surface-dim border border-border px-2.5 py-1 rounded-lg text-xs text-on-surface-variant font-medium">
                          <span className="material-symbols-outlined text-primary text-xs">workspace_premium</span>
                          {badge}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Learner Grid Selection */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {HALL_OF_LEARNERS.map((learner, index) => {
                  const isActive = index === activeLearnerIndex;
                  const initials = learner.name.split(' ').map(n => n[0]).join('');

                  return (
                    <button
                      key={learner.name}
                      onClick={() => setActiveLearnerIndex(index)}
                      className={`relative text-left p-5 rounded-2xl border transition-all duration-300 overflow-hidden group focus:outline-none focus-ring flex flex-col justify-between h-36 ${
                        isActive
                          ? 'bg-white border-primary/20 shadow-[0_4px_20px_rgba(26,43,90,0.08)]'
                          : 'bg-white border-border hover:border-border-hover hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-3 relative z-10 w-full">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          isActive
                            ? `bg-gradient-to-br ${learner.accent} text-white`
                            : `${learner.avatarBg} border border-border`
                        }`}>
                          {initials}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-sm text-on-surface truncate group-hover:text-primary transition-colors">{learner.name}</h4>
                          <p className="text-[9px] label-caps text-on-surface-variant truncate mt-1">{learner.path}</p>
                        </div>
                      </div>

                      {/* Progress meter */}
                      <div className="w-full relative z-10 mt-auto">
                        <div className="flex justify-between text-[8px] label-caps text-outline mb-1.5">
                          <span>Progress</span>
                          <span>L{learner.level}</span>
                        </div>
                        <div className="w-full bg-surface-high rounded-full h-1 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${learner.accent} transition-all duration-500 rounded-full`}
                            style={{ width: `${(learner.level / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learner Testimonials */}
      <section className="py-[120px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="label-caps text-primary mb-4 block">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Success Stories</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">See how aspiring professionals build portfolios, gain mentorship, and land roles through DEZAI Learners.</p>
          </motion.div>
        </div>
        <ReviewsMarquee reviews={LEARNER_REVIEWS} speed="medium" />
      </section>

      {/* FAQ */}
      <section className="py-[120px] bg-surface-dim">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
          >
            Learner FAQs
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {LEARNER_FAQ.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-static p-6 rounded-2xl group cursor-pointer"
              >
                <summary className="font-bold flex justify-between items-center list-none">
                  {faq.question}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-on-surface-variant">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1280px] mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Ready To Start Your Journey?
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">
            Apply now and take the first step towards becoming a world-class digital professional.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-tertiary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-primary-dim hover:shadow-[0_12px_40px_rgba(212,168,83,0.2)] transition-all"
          >
            Apply as a Learner
          </Link>
        </motion.div>
      </section>
    </>
  );
}
