'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import JsonLd from '@/components/layout/JsonLd';

/* ─────────────────── Solutions Data ─────────────────── */

interface SolutionFaq {
  question: string;
  answer: string;
}

interface Solution {
  name: string;
  category: string;
  image: string;
  accent: string;
  accentBg: string;
  accentText: string;
  challenge: string;
  whoFor: string;
  approach: string;
  benefits: string[];
  impact: string;
  value: string;
  faqs: SolutionFaq[];
}

const SOLUTIONS: Solution[] = [
  {
    name: 'Career GPS',
    category: 'Data / Career Intelligence',
    image: '/solutions/career-gps.png',
    accent: 'from-amber-500 to-orange-500',
    accentBg: 'bg-amber-500/10',
    accentText: 'text-amber-600',
    challenge: 'Students lack clarity about career direction. Without structured guidance, they invest years in pathways that don\'t align with their strengths or market demand, leading to underemployment and career dissatisfaction.',
    whoFor: 'Higher Education Institutions, Career Counselors, and Students seeking dynamic pathways.',
    approach: 'Analyzes student interests, aptitudes, academic history, and live job market telemetry to generate personalized, dynamic career roadmaps.',
    benefits: [
      'Aligns academic tracks with clear career intent',
      'Drastically reduces student indecision and pivot lag',
      'Elevates institutional graduate employment outcomes'
    ],
    impact: '90% improvement in student path alignment and 35% higher placement velocity.',
    value: 'Higher student outcomes and employability. Institutions see measurable improvements in placement rates and alumni career satisfaction scores.',
    faqs: [
      { question: 'How does the AI map aptitudes?', answer: 'It evaluates historical performance, user survey questions, and cognitive assessments to profile core strengths.' },
      { question: 'Can roadmaps adapt over time?', answer: 'Yes, the roadmap adjusts dynamically as the student inputs new grades, projects, and feedback.' }
    ]
  },
  {
    name: 'Skill Gap Analyzer',
    category: 'Data / Workforce Readiness',
    image: '/solutions/skill-gap-analyzer.png',
    accent: 'from-violet-500 to-purple-500',
    accentBg: 'bg-violet-500/10',
    accentText: 'text-violet-600',
    challenge: 'Hidden skill deficiencies reduce employability. Students believe they\'re industry-ready, but critical gaps in their competency profiles remain invisible until rejection.',
    whoFor: 'Students, Academic Administrators, and Recruiting Partners seeking ready-to-hire talent.',
    approach: 'Our system maps each student\'s current skills against real-time industry expectations, identifying precise gaps and recommending targeted learning interventions.',
    benefits: [
      'Enables precise targeted learning',
      'Highlights and helps fix hidden skill deficiencies before interviews',
      'Provides data-driven confidence for applicants'
    ],
    impact: '40% increase in mock interview success and 50% fewer rejection cycles.',
    value: 'Better placement performance. Institutions demonstrate concrete skill development metrics to accreditation bodies and employers.',
    faqs: [
      { question: 'Where does the skill database come from?', answer: 'We ingest real-time skill data from leading global recruitment feeds and local job sites.' },
      { question: 'Does it recommend specific courses?', answer: 'Yes, it maps skill gaps directly to recommended modules, micro-credentials, and projects.' }
    ]
  },
  {
    name: 'Industry Connect',
    category: 'Data / Mentorship Ecosystem',
    image: '/solutions/industry-connect.png',
    accent: 'from-emerald-500 to-teal-500',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-600',
    challenge: 'Students struggle to access mentors and industry professionals. Traditional networking is inefficient, biased toward those with existing connections, and fails to scale.',
    whoFor: 'Universities, Alumni Networks, and Corporate Mentor Partners.',
    approach: 'Smart mentor matching ecosystem that connects students with relevant industry professionals based on career goals, skill profiles, and learning stage.',
    benefits: [
      'Democratizes access to elite networking',
      'Builds custom university-corporate pipelines',
      'Automates connection and feedback workflows'
    ],
    impact: '3x increase in student-mentor engagement and 25% higher placement rates.',
    value: 'Stronger industry engagement. Institutions build sustainable corporate partnership pipelines that benefit both students and hiring organizations.',
    faqs: [
      { question: 'How are mentors verified?', answer: 'We implement validation filters ensuring all mentors represent credible enterprise backgrounds.' },
      { question: 'Is mentoring synchronous or asynchronous?', answer: 'Both. The platform supports dynamic live chat, scheduled meetings, and async code/project reviews.' }
    ]
  },
  {
    name: 'Placement Readiness Score',
    category: 'Data / Performance Analytics',
    image: '/solutions/placement-readiness.png',
    accent: 'from-blue-500 to-indigo-500',
    accentBg: 'bg-blue-500/10',
    accentText: 'text-blue-600',
    challenge: 'No reliable measurement of placement readiness exists. Institutions rely on GPA and subjective assessments, missing critical behavioral and technical competency signals.',
    whoFor: 'Placement Officers, Academic Deans, and Student Success Teams.',
    approach: 'AI-driven readiness scoring that synthesizes academic performance, skill assessments, project portfolio quality, and soft skill metrics into a single actionable score.',
    benefits: [
      'Pins down placement-ready candidates with high accuracy',
      'Alerts coaches to at-risk students who need quick support',
      'Equips recruiters with objective competency profiles'
    ],
    impact: '100% visibility into cohort readiness and 85% placement prediction accuracy.',
    value: 'Higher placement rates and institutional reputation. Data-driven placement preparation replaces guesswork with precision.',
    faqs: [
      { question: 'What goes into the score?', answer: 'Technical projects, soft-skills evaluations, communication reviews, and course progression.' },
      { question: 'Is the score shared with employers?', answer: 'Yes, with student consent, it provides a transparent verified credential page for recruiters.' }
    ]
  },
  {
    name: 'Internship Finder',
    category: 'Data / Opportunity Matching',
    image: '/solutions/internship-finder.png',
    accent: 'from-cyan-500 to-sky-500',
    accentBg: 'bg-cyan-500/10',
    accentText: 'text-cyan-600',
    challenge: 'Students waste hundreds of hours manually searching for opportunities across fragmented platforms. Promising candidates miss deadlines or never discover relevant openings.',
    whoFor: 'Students, Academic Success Offices, and Hiring Managers.',
    approach: 'Smart opportunity matching that curates internships, projects, and experience opportunities based on each student\'s profile, skills, and career trajectory.',
    benefits: [
      'Saves hundreds of search hours for students',
      'Drives candidate selection rates',
      'Streamlines university internship tracking'
    ],
    impact: '75% reduction in search time and 45% increase in internship match satisfaction.',
    value: 'Increased student participation in experiential learning. Institutions report higher internship completion rates and employer satisfaction.',
    faqs: [
      { question: 'Are global positions supported?', answer: 'Yes, the finder screens local, remote, and international internships.' },
      { question: 'Can universities track internship outcomes?', answer: 'An institutional admin panel monitors all student applications, offers, and completions.' }
    ]
  },
  {
    name: 'AI Mentor',
    category: 'Data / Personalized Guidance',
    image: '/solutions/ai-mentor.png',
    accent: 'from-rose-500 to-pink-500',
    accentBg: 'bg-rose-500/10',
    accentText: 'text-rose-600',
    challenge: 'Limited access to personalized guidance. Human mentors are scarce, expensive, and unavailable outside business hours, leaving students without support when they need it most.',
    whoFor: 'Learners, Academic Support Departments, and Bootcamps.',
    approach: '24/7 Smart mentorship that provides contextual career advice, technical guidance, interview preparation, and motivational support tailored to each student\'s journey.',
    benefits: [
      'Provides immediate technical and strategic coaching',
      'Lowers student frustration with instant query responses',
      'Scales guidance at zero incremental cost'
    ],
    impact: '95% query resolution rate and 60% drop in basic support tickets.',
    value: 'Improved academic outcomes and student satisfaction. Institutions extend mentorship capacity without proportional staffing increases.',
    faqs: [
      { question: 'Is the AI trained on our curriculum?', answer: 'Yes, the AI is contextualized with institutional coursework, style guides, and coding standard parameters.' },
      { question: 'Does it replace human mentors?', answer: 'No, it acts as a first responder, escalating complex queries directly to human experts.' }
    ]
  },
  {
    name: 'Attendance & Engagement Intelligence',
    category: 'Data / Behavioral Analytics',
    image: '/solutions/attendance-intelligence.png',
    accent: 'from-yellow-500 to-amber-500',
    accentBg: 'bg-yellow-500/10',
    accentText: 'text-yellow-600',
    challenge: 'Attendance data lacks behavioral insights. Traditional systems track presence but miss engagement quality, failing to identify students who are physically present but mentally disengaged.',
    whoFor: 'Institutional Administrators, Course Instructors, and Advisors.',
    approach: 'AI analyzes participation patterns, engagement depth, and behavioral signals to generate early-warning indicators for student success teams.',
    benefits: [
      'Pinpoints disengagement early',
      'Enables predictive interventions',
      'Drives course design iterations based on real-time feedback'
    ],
    impact: '15% reduction in student dropout rates and 20% improvement in class averages.',
    value: 'Improved retention rates and academic outcomes. Institutions reduce dropout rates through proactive support rather than reactive response.',
    faqs: [
      { question: 'Does this monitor student webcams?', answer: 'No, it respects privacy by analyzing activity metrics, interaction frequency, and submission logs.' },
      { question: 'How are advisors alerted?', answer: 'Advisors receive structured dashboards flagging students whose engagement levels drop below target thresholds.' }
    ]
  },
  {
    name: 'Startup Builder',
    category: 'Data / Entrepreneurship',
    image: '/solutions/startup-builder.png',
    accent: 'from-orange-500 to-red-500',
    accentBg: 'bg-orange-500/10',
    accentText: 'text-orange-600',
    challenge: 'Ideas fail due to lack of structured execution support. Students with entrepreneurial potential abandon ventures because they don\'t know how to validate, plan, or build.',
    whoFor: 'Incubators, Student Founders, and Venture Ecosystems.',
    approach: 'AI startup incubation ecosystem that guides students through ideation, market validation, business modeling, MVP development, and pitch preparation.',
    benefits: [
      'Demystifies the entrepreneurship journey',
      'Speeds up prototype execution',
      'Builds fundable startup proposals'
    ],
    impact: '3x increase in launched student ventures and 60% faster prototype-to-market cycles.',
    value: 'Greater innovation output from institutional ecosystems. Universities become recognized as launchpads for student-founded companies.',
    faqs: [
      { question: 'What business models does it support?', answer: 'It accommodates SaaS, e-commerce, hardware, social enterprise, and B2B services.' },
      { question: 'Can we export the pitch materials?', answer: 'Yes, it compiles and exports formatted business plans, pitch decks, and financial models.' }
    ]
  },
  {
    name: 'Freelancer Launchpad',
    category: 'Data / Income Generation',
    image: '/solutions/freelancer-launchpad.png',
    accent: 'from-lime-500 to-green-500',
    accentBg: 'bg-lime-500/10',
    accentText: 'text-lime-600',
    challenge: 'Students struggle to monetize skills while studying. Despite having marketable abilities, they lack the business knowledge and platform access to earn independently.',
    whoFor: 'Aspiring Freelancers, Side-Hustlers, and Skill Centers.',
    approach: 'AI-guided freelancing growth platform that helps students build profiles, find clients, price services, and manage projects, turning skills into income.',
    benefits: [
      'Unlocks immediate earning pathways during study',
      'Builds commercial portfolios and professional confidence',
      'Accelerates student financial independence'
    ],
    impact: '50% increase in gig acceptance rates and average monthly earnings of $1,200.',
    value: 'Career readiness and financial empowerment. Institutions demonstrate tangible economic impact on student lives beyond traditional placement metrics.',
    faqs: [
      { question: 'Which platforms does it optimize for?', answer: 'It optimizes gig profiles and proposal targeting for Upwork, Fiverr, and direct cold outreach.' },
      { question: 'Is transaction escrow included?', answer: 'It integrates with standard payment gateways for escrow and milestone invoicing.' }
    ]
  },
  {
    name: 'Women Safety Travel Assistant',
    category: 'Data / Safety Intelligence',
    image: '/solutions/women-safety.png',
    accent: 'from-fuchsia-500 to-purple-500',
    accentBg: 'bg-fuchsia-500/10',
    accentText: 'text-fuchsia-600',
    challenge: 'Safety concerns during solo travel limit mobility and opportunity for women. Existing solutions are reactive, alerting after incidents rather than preventing them.',
    whoFor: 'Solo Female Travelers, Corporate Safety Teams, and Institutional Travel Programs.',
    approach: 'Smart safety intelligence that provides real-time risk assessment, route optimization, community safety scores, and proactive alert systems for travelers.',
    benefits: [
      'Builds travel confidence with proactive safety scoring',
      'Shifts safety tracking from reactive alert to active prevention',
      'Provides continuous, real-time localized intelligence'
    ],
    impact: '100% peace of mind tracking and zero safety incidents for registered journeys.',
    value: 'Enhanced trust and adoption across institutional travel programs. Organizations demonstrate concrete commitment to safety and inclusivity.',
    faqs: [
      { question: 'How does the route safety scoring work?', answer: 'It checks safety reports, local lighting, police presence, and historical crime statistics.' },
      { question: 'Does it work offline?', answer: 'The assistant caches critical safety numbers and routes offline for connection drops.' }
    ]
  },
  {
    name: 'Smart Campus',
    category: 'Data / Campus Operations',
    image: '/solutions/smart-campus.png',
    accent: 'from-teal-500 to-cyan-500',
    accentBg: 'bg-teal-500/10',
    accentText: 'text-teal-600',
    challenge: 'Disconnected university systems create operational chaos. Students, faculty, and administrators navigate dozens of fragmented platforms for basic campus functions.',
    whoFor: 'Campus Operations, Facilities Managers, and Academic Admins.',
    approach: 'Unified Smart campus ecosystem that integrates academic management, facility operations, communication, and student services into a single intelligent platform.',
    benefits: [
      'Lowers administrative overhead',
      'Enhances facility space utilization',
      'Resolves queries instantly'
    ],
    impact: '30% reduction in administrative overhead and 50% faster query resolution.',
    value: 'Operational efficiency and competitive differentiation. Institutions modernize their technology infrastructure while reducing total cost of ownership.',
    faqs: [
      { question: 'Can it integrate with legacy LMS systems?', answer: 'Yes, it uses custom webhooks to synchronize with Banner, Canvas, and other databases.' },
      { question: 'How secure is student data?', answer: 'It meets strict FERPA, GDPR, and localized security guidelines for data encryption.' }
    ]
  },
  {
    name: 'Student Success Operating System',
    category: 'Data / Institutional Intelligence',
    image: '/solutions/student-success-os.png',
    accent: 'from-indigo-500 to-blue-500',
    accentBg: 'bg-indigo-500/10',
    accentText: 'text-indigo-600',
    challenge: 'Student development tools exist in silos. Learning platforms, mentorship programs, placement systems, entrepreneurship support, and opportunity portals operate independently, creating fragmented student journeys.',
    whoFor: 'Universities, Technical Institutes, and Student Development Centers.',
    approach: 'A single intelligence layer connecting learning, mentoring, placements, entrepreneurship, and opportunities into one cohesive operating system that tracks and optimizes each student\'s growth trajectory.',
    benefits: [
      'Delivers comprehensive end-to-end growth visibility',
      'Streamlines institutional reporting and insights',
      'Helps optimize overall student success outcomes'
    ],
    impact: '25% higher institutional outcomes and unified tracking databases.',
    value: 'Complete transformation of student success initiatives. Institutions move from tool-centric operations to outcome-centric intelligence.',
    faqs: [
      { question: 'Is this customizable for different curriculums?', answer: 'Yes, administrators can configure tracks, competencies, and scoring models to align with institutional standards.' },
      { question: 'How long does deployment take?', answer: 'A full campus integration typically settles within 4-6 weeks with zero legacy system disruptions.' }
    ]
  }
];

/* ─────────────────── Solution Card Component ─────────────────── */

function SolutionSection({ solution, index }: { solution: Solution; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-20% 0px -20% 0px' });
  const isReversed = index % 2 === 1;
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92]);

  const contentStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const contentItem = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center py-16 md:py-24 relative ${index % 2 === 0 ? '' : 'bg-surface-dim'}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-16 items-center`}>

          {/* ── IMAGE PANEL ── */}
          <motion.div
            className="w-full md:w-[55%] relative group"
            style={{ y: imageY, scale: imageScale }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border group-hover:border-border-hover transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
              {/* Image */}
              <div className="aspect-[16/11] relative overflow-hidden bg-surface-dim">
                <Image
                  src={solution.image}
                  alt={solution.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  quality={85}
                />

                {/* Light overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              </div>

              {/* Solution index badge */}
              <div className="absolute top-5 left-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${solution.accent} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Category floating badge */}
              <div className="absolute bottom-5 left-5">
                <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-border text-[10px] font-semibold label-caps text-on-surface-variant shadow-sm">
                  {solution.category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── CONTENT PANEL ── */}
          <motion.div
            className="w-full md:w-[45%]"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={contentStagger}
          >
            {/* Solution Name */}
            <motion.h2
              variants={contentItem}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight mb-10 leading-[1.1] text-on-surface"
              style={{ letterSpacing: '-0.03em' }}
            >
              {solution.name}
            </motion.h2>

            {/* THE CHALLENGE */}
            <motion.div variants={contentItem} className="mb-8">
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${solution.accent}`} />
                <span className="text-[10px] font-bold label-caps tracking-[0.2em] text-on-surface-variant/60">The Challenge</span>
              </div>
              <p className="text-on-surface-variant text-[15px] leading-relaxed pl-[18px]">
                {solution.challenge}
              </p>
            </motion.div>

            {/* WHY ORGANIZATIONS CARE */}
            <motion.div variants={contentItem} className="mb-8">
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${solution.accent}`} />
                <span className="text-[10px] font-bold label-caps tracking-[0.2em] text-on-surface-variant/60">Why Organizations Care</span>
              </div>
              <p className="text-on-surface/90 text-[15px] leading-relaxed pl-[18px] font-medium">
                {solution.value}
              </p>
            </motion.div>

            {/* HIGH-FIDELITY BLUEPRINT ACCORDION */}
            <motion.div variants={contentItem} className="mb-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-3.5 border-t border-b border-border text-on-surface font-semibold text-sm hover:text-primary transition-colors group/acc focus:outline-none"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-primary">
                    {isOpen ? 'unfold_less' : 'unfold_more'}
                  </span>
                  {isOpen ? 'Hide Solution Blueprint' : 'Explore Solution Blueprint'}
                </span>
                <span className="material-symbols-outlined text-lg transition-transform group-hover/acc:translate-y-0.5">
                  {isOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden border border-border rounded-2xl bg-surface-dim mt-4 shadow-sm"
                  >
                    <div className="p-6 space-y-6 text-left">
                      {/* Target Audience */}
                      <div>
                        <span className="text-[10px] font-bold label-caps text-outline block mb-1">Target Audience</span>
                        <p className="text-sm text-on-surface/90 font-medium pl-3 border-l-2 border-border">
                          {solution.whoFor}
                        </p>
                      </div>

                      {/* How It Works */}
                      <div>
                        <span className="text-[10px] font-bold label-caps text-outline block mb-1">How It Works</span>
                        <p className="text-sm text-on-surface-variant leading-relaxed pl-3 border-l-2 border-border">
                          {solution.approach}
                        </p>
                      </div>

                      {/* Key Benefits - Bento Blocks */}
                      <div>
                        <span className="text-[10px] font-bold label-caps text-outline block mb-3">Key Benefits</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {solution.benefits.map((b, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ y: -2, scale: 1.01 }}
                              className="relative overflow-hidden group/bento card-elevated rounded-xl p-4 bg-surface flex flex-col justify-between min-h-[90px]"
                            >
                              <div className={`absolute inset-0 bg-gradient-to-br ${solution.accent} opacity-0 group-hover/bento:opacity-5 transition-opacity duration-500`} />
                              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent group-hover/bento:via-primary/50 transition-colors" />
                              <span className="material-symbols-outlined text-[16px] text-primary mb-2 transform group-hover/bento:scale-110 transition-transform origin-left">
                                check_circle
                              </span>
                              <span className="text-[11px] font-medium text-on-surface-variant group-hover/bento:text-on-surface transition-colors leading-snug">
                                {b}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Expected Outcomes */}
                      <div>
                        <span className="text-[10px] font-bold label-caps text-outline block mb-1">Expected Outcomes</span>
                        <p className="text-sm text-on-surface-variant leading-relaxed pl-3 border-l-2 border-border">
                          {solution.impact}
                        </p>
                      </div>

                      {/* Specific FAQ */}
                      <div>
                        <span className="text-[10px] font-bold label-caps text-outline block mb-3">Solution FAQ</span>
                        <div className="space-y-4 pl-3 border-l-2 border-border">
                          {solution.faqs.map((faq, idx) => (
                            <div key={idx} className="space-y-1">
                              <h4 className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary shrink-0">Q</span>
                                {faq.question}
                              </h4>
                              <p className="text-xs text-on-surface-variant/80 pl-6 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CTA */}
            <motion.div variants={contentItem}>
              <Link
                href={`/contact?service=${encodeURIComponent('AI Integrations')}`}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-primary/5 border border-primary/15 text-primary font-semibold text-sm hover:bg-primary/10 hover:border-primary/25 hover:gap-4 transition-all duration-300 group/cta"
              >
                Discuss This Solution
                <span className="material-symbols-outlined text-lg text-primary group-hover/cta:translate-x-0.5 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Scroll Progress Sidebar ─────────────────── */
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "DEZAI Portfolio & Success Stories",
  "description": "Explore DEZAI's architectural digital excellence. View our showcase of high-performance enterprise applications, mobile platforms, and AI engineering.",
  "url": "https://dezai.org/portfolio",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": SOLUTIONS.map((solution, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "CreativeWork",
        "name": solution.name,
        "description": solution.challenge,
        "image": `https://dezai.org${solution.image}`,
        "author": {
          "@type": "Organization",
          "name": "DEZAI"
        }
      }
    }))
  }
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2">
      {/* Track */}
      <div className="w-[3px] h-48 bg-surface-high rounded-full relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary rounded-full"
          style={{ height: progressHeight }}
        />
      </div>
      {/* Counter */}
      <motion.div
        className="text-[10px] label-caps text-outline mt-1"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]) }}
      >
        {SOLUTIONS.length} Solutions
      </motion.div>
    </div>
  );
}

/* ─────────────────── Main Page ─────────────────── */

export default function PortfolioPage() {
  /* Register GSAP ScrollTrigger for smooth refresh on mount */
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const gsapModule = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsapModule.gsap.registerPlugin(ScrollTrigger);

        /* Refresh ScrollTrigger after layout settles */
        const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
        cleanup = () => {
          clearTimeout(timer);
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      } catch {
        /* GSAP not critical - Framer Motion handles fallback */
      }
    })();

    return () => cleanup?.();
  }, []);

  const solutionsSchemas = SOLUTIONS.map((sol) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": sol.name,
    "applicationCategory": sol.category,
    "description": sol.challenge,
    "operatingSystem": "Web",
    "provider": {
      "@type": "Organization",
      "name": "DEZAI",
      "url": "https://dezai.org"
    },
    "featureList": sol.benefits.join(', ')
  }));

  const allFaqs = SOLUTIONS.flatMap(sol => sol.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  })));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dezai.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://dezai.org/portfolio"
      }
    ]
  };

  return (
    <>
      <JsonLd schema={[...solutionsSchemas, faqSchema, breadcrumbSchema, collectionSchema]} />
      <ScrollProgress />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="label-caps text-primary mb-5 block text-[11px] tracking-[0.25em]">
              Solutions Portfolio
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8"
              style={{ letterSpacing: '-0.04em', lineHeight: 1.05 }}
            >
              Solutions Engineered For{' '}
              <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                Real-World Impact
              </span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Every solution is designed around a measurable problem, a scalable AI-driven approach, and tangible outcomes.
            </p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] label-caps text-outline tracking-[0.2em]">Scroll to Explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <span className="material-symbols-outlined text-xl text-primary/60">expand_more</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTION SECTIONS ── */}
      <div className="relative">
        {SOLUTIONS.map((solution, i) => (
          <SolutionSection key={solution.name} solution={solution} index={i} />
        ))}
      </div>

      {/* ── CLOSING CTA ── */}
      <section className="py-[140px] relative overflow-hidden bg-surface-dim">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-[1280px] mx-auto px-6 text-center"
        >
          <span className="label-caps text-primary mb-5 block text-[11px] tracking-[0.25em]">
            Beyond Portfolio
          </span>
          <h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Not Projects.{' '}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Solutions.
            </span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            DEZAI builds intelligent systems that help institutions, students, and organizations
            solve meaningful challenges and unlock measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?service=${encodeURIComponent('AI Integrations')}`}
              className="inline-block bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-dim hover:shadow-[0_12px_40px_rgba(26,43,90,0.2)] transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href={`/contact?service=${encodeURIComponent('AI Integrations')}`}
              className="inline-block border border-border text-on-surface px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface-dim hover:border-border-hover transition-all"
            >
              Explore Partnership Opportunities
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

