'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import JsonLd from '@/components/layout/JsonLd';
import BrandsMarquee from '@/components/ui/BrandsMarquee';
import WaitlistSection from '@/components/home/WaitlistSection';
import MissionSection from '@/components/home/MissionSection';
import ProcessSection from '@/components/home/ProcessSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import FAQSection from '@/components/home/FAQSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DEZAI",
    "url": "https://dezai.org",
    "logo": "https://dezai.org/logo-brand.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971552279475",
      "email": "info@dezai.org",
      "contactType": "customer service"
    },
    "description": "DEZAI builds AI-driven digital products for businesses and mentors students to become software engineering leaders.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressLocality": "Dubai"
    },
    "sameAs": [
      "https://twitter.com/dezaistudio",
      "https://linkedin.com/company/dezaistudio",
      "https://github.com/dezaistudio"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DEZAI",
    "url": "https://dezai.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dezai.org/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is DEZAI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DEZAI is a UAE-registered technology company that operates as a dual ecosystem: we build AI-driven digital products for businesses and run a mentorship platform that trains students to become industry-ready software engineering professionals."
        }
      },
      {
        "@type": "Question",
        "name": "What services does DEZAI provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For businesses, we provide end-to-end software development, including AI integration, custom SaaS engineering, web and mobile app development, and UX/UI design. For students, we offer immersive mentorship programs focused on real-world product development."
        }
      },
      {
        "@type": "Question",
        "name": "How does DEZAI help businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We partner with startups, SMEs, and enterprises to accelerate their digital transformation. By leveraging modern tech stacks and Artificial Intelligence, we engineer scalable, high-performance applications that solve complex challenges and drive growth."
        }
      },
      {
        "@type": "Question",
        "name": "How does DEZAI help students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our mentorship platform bridges the gap between theoretical learning and professional capability. Students work on actual production codebases, receiving hands-on guidance from senior engineers to build a strong career portfolio."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does DEZAI use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in modern, robust frameworks including React, Next.js, Node.js, and Python. We also integrate cutting-edge Machine Learning and AI solutions tailored to specific project requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Where is DEZAI based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DEZAI is officially registered and headquartered in Dubai, UAE, but we serve clients and mentor students globally."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={[orgSchema, websiteSchema, faqSchema]} />
      {/* ==================== HERO ==================== */}
      <section className="relative w-full min-h-[90vh] flex flex-col bg-surface overflow-hidden">

        {/* Content Container */}
        <div className="w-full h-full flex-1 flex flex-col items-center justify-center relative z-10 animate-moveUp max-w-[1280px] mx-auto px-6 py-20 mt-10">

          {/* Headline (H1 for SEO) */}
          <h1 className="text-on-surface text-center font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 pb-2">
            Engineering world-class products.<br />
            <span className="text-primary">Mentoring the engineers who build them.</span>
          </h1>

          {/* Subheadline (p for SEO) */}
          <p className="text-on-surface-variant text-center text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
            UAE-registered technology company helping businesses launch digital products while empowering future professionals through mentorship and real-world experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full">
            <Link 
              href="/contact"
              className="group h-12 sm:h-14 px-8 bg-primary text-on-primary rounded-xl flex items-center justify-center gap-2 font-bold text-lg transition-all shadow-[0_4px_24px_rgba(26,43,90,0.15)] hover:shadow-[0_4px_32px_rgba(26,43,90,0.25)] hover:bg-primary-dim"
            >
              <span>Explore Our AI Services</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <Link 
              href="/learners"
              className="h-12 sm:h-14 px-8 flex items-center justify-center font-bold text-lg text-on-surface hover:bg-surface-dim transition-colors border border-border hover:border-border-hover rounded-xl"
            >
              <span>Discover Our Programs</span>
            </Link>
          </div>
        </div>
      </section>

      <BrandsMarquee />

      {/* ==================== TWO WORLDS ==================== */}
      <section className="py-[120px] relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Two Missions. One Standard.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              DEZAI operates at the intersection of world-class product development and next-generation talent empowerment.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Studio Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated rounded-2xl p-10 md:p-12 group"
            >
              <span className="label-caps text-primary mb-4 block">DEZAI Studio</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Digital Solutions That Drive Growth.</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                We combine precision engineering with artistic vision to create digital experiences that set new industry standards. From MVPs to enterprise platforms.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {SERVICES.slice(0, 5).map((s) => (
                  <motion.div
                    key={s.title}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="relative group overflow-hidden border border-border/50 rounded-lg bg-surface-dim/50 p-3 flex flex-col gap-2 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-[0_4px_12px_rgba(26,43,90,0.06)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-lg">
                      {s.icon}
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors leading-tight">
                      {s.title}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/studio"
                className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all mt-auto inline-flex"
              >
                Explore Services <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </motion.div>

            {/* Learners Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated rounded-2xl p-10 md:p-12 group flex flex-col"
            >
              <span className="label-caps text-primary mb-4 block">DEZAI Learners</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Potential Into Capability.</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Our mentorship-first approach bridges the gap between learning and industry-level professional excellence. Real projects, real mentors, real results.
              </p>
              <div className="flex flex-col gap-2.5 mb-8">
                {['Mentorship', 'Real Projects', 'Certificates', 'Internships'].map((item, idx) => (
                  <motion.div 
                    key={item} 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 group/rail cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center w-7 h-7 rounded-md bg-surface-dim border border-border group-hover/rail:bg-primary/5 group-hover/rail:border-primary/30 transition-colors">
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover/rail:text-primary transition-colors">
                        {idx === 0 ? 'group' : idx === 1 ? 'architecture' : idx === 2 ? 'workspace_premium' : 'work'}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-on-surface-variant group-hover/rail:text-primary transition-colors">
                      {item}
                    </span>
                    <div className="flex-1 h-px bg-border/50 group-hover/rail:bg-primary/10 transition-colors mx-2" />
                    <span className="material-symbols-outlined text-[14px] text-border group-hover/rail:text-primary/50 transition-colors transform group-hover/rail:translate-x-1">
                      chevron_right
                    </span>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/learners"
                className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all mt-auto inline-flex"
              >
                Start Learning <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== THE DEZAI EDGE ==================== */}
      <section className="py-[120px] bg-surface-dim">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              The DEZAI Edge
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg">
              Why forward-thinking businesses and ambitious professionals choose us.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: 'bolt', title: 'Fast Delivery', desc: 'Rapid development cycles without compromising on architectural integrity.' },
              { icon: 'visibility', title: 'Full Transparency', desc: 'Real-time access to project management tools and developer progress.' },
              { icon: 'rocket_launch', title: 'Startup Friendly', desc: 'Flexible engagement models designed for growth-stage businesses.' },
              { icon: 'diversity_3', title: 'Expert Team', desc: 'Direct access to senior architects, designers, and growth experts.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="card-elevated rounded-2xl p-8 text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto bg-primary/8">
                  <span className="material-symbols-outlined text-2xl text-primary group-hover:scale-110 transition-transform inline-block">{item.icon}</span>
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== NEW SECTIONS ==================== */}
      <MissionSection />
      <WaitlistSection />
      <ProcessSection />
      <IndustriesSection />
      
      {/* ==================== FAQ ==================== */}
      <FAQSection />

      {/* ==================== CTA BANNER ==================== */}
      <section className="py-[120px] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1280px] mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8" style={{ letterSpacing: '-0.03em' }}>
            Ready To Build Something Amazing?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-primary-dim hover:shadow-[0_12px_40px_rgba(26,43,90,0.2)] transition-all"
            >
              Start Your Project
            </Link>
            <Link
              href="/learners"
              className="border border-border px-10 py-5 rounded-2xl font-bold text-xl hover:bg-surface-dim hover:border-border-hover transition-all"
            >
              Apply as a Learner
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
