'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import JsonLd from '@/components/layout/JsonLd';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DEZAI",
    "url": "https://dezai.com",
    "logo": "https://dezai.com/logo-brand.png",
    "email": "team.dezaiai@gmail.com",
    "telephone": "+971552279475",
    "description": "UAE-registered technology company helping businesses launch digital products while empowering future professionals through mentorship and real-world experience. DEZAI is established as a leading AI solutions company, EdTech innovator, career intelligence platform, and student success ecosystem.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressLocality": "Dubai"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DEZAI",
    "url": "https://dezai.com"
  };

  return (
    <>
      <JsonLd schema={[orgSchema, websiteSchema]} />
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Gradient overlay for hero text readability — shader is global */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-surface/60" />

        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="z-10"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full glass-card-static border-tertiary/20 mb-6">
              <span className="label-caps text-tertiary">UAE Registered • Global Impact</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-glow"
              style={{ letterSpacing: '-0.04em' }}
            >
              Build Products.<br />
              Build People.<br />
              <span className="text-tertiary">Build The Future.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed"
            >
              UAE-registered technology company helping businesses launch digital products while empowering future professionals through mentorship and real-world experience.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(185,199,228,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                Start Your Project
              </Link>
              <Link
                href="/learners"
                className="glass-card px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5"
              >
                Join DEZAI Learners
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeInUp} className="mt-16 flex flex-wrap gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-sm">verified</span>
                <span className="text-sm label-caps">UAE Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-sm">public</span>
                <span className="text-sm label-caps">Remote-First</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-sm">visibility</span>
                <span className="text-sm label-caps">Transparent Workflow</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual — Floating Glass Cards */}
          <div className="relative hidden lg:block h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central App Shell */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-72 h-[520px] glass-card-static rounded-[40px] p-6 border border-white/20 relative z-20"
              >
                <div className="w-full h-32 bg-primary/20 rounded-2xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-tertiary/20" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-white/10 rounded" />
                  <div className="h-4 w-1/2 bg-white/10 rounded" />
                  <div className="h-20 w-full bg-white/5 rounded-xl" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-white/5 rounded-lg" />
                    <div className="h-12 bg-white/5 rounded-lg" />
                  </div>
                  <div className="h-16 w-full bg-tertiary/10 rounded-xl mt-2" />
                </div>
              </motion.div>

              {/* Floating Dashboard Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-10 -right-8 w-64 h-48 glass-card-static rounded-2xl p-4 border border-white/10 z-10"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="h-3 w-20 bg-tertiary/20 rounded" />
                  <span className="material-symbols-outlined text-tertiary text-xs">insights</span>
                </div>
                <div className="flex items-end gap-1 h-20">
                  <div className="flex-1 bg-tertiary/40 rounded-t" style={{ height: '60%' }} />
                  <div className="flex-1 bg-tertiary/40 rounded-t" style={{ height: '80%' }} />
                  <div className="flex-1 bg-tertiary/60 rounded-t" style={{ height: '100%' }} />
                  <div className="flex-1 bg-tertiary/40 rounded-t" style={{ height: '70%' }} />
                  <div className="flex-1 bg-tertiary/50 rounded-t" style={{ height: '90%' }} />
                </div>
              </motion.div>

              {/* Floating User Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute bottom-24 -left-12 w-56 h-40 glass-card-static rounded-2xl p-4 border border-white/10 z-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20" />
                  <div className="space-y-1">
                    <div className="h-2 w-16 bg-white/20 rounded" />
                    <div className="h-2 w-10 bg-white/10 rounded" />
                  </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded mb-2" />
                <div className="h-2 w-4/5 bg-white/5 rounded mb-4" />
                <div className="h-8 w-full bg-primary/20 rounded-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TWO WORLDS ==================== */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 -z-10 bg-white/[0.02] backdrop-blur-sm" />
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
              Two Missions. One Ecosystem.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              DEZAI operates at the intersection of world-class product development and next-generation talent empowerment.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Studio Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-10 md:p-12 group"
            >
              <span className="label-caps text-tertiary mb-4 block">DEZAI Studio</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Digital Solutions That Drive Growth.</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                We combine precision engineering with artistic vision to create digital experiences that set new industry standards. From MVPs to enterprise platforms.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {SERVICES.slice(0, 5).map((s) => (
                  <span key={s.title} className="px-3 py-1 text-xs label-caps rounded-full bg-primary/10 text-primary">
                    {s.title}
                  </span>
                ))}
              </div>
              <Link
                href="/studio"
                className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                Explore Services <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </motion.div>

            {/* Learners Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-10 md:p-12 group"
            >
              <span className="label-caps text-primary mb-4 block">DEZAI Learners</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Potential Into Capability.</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Our mentorship-first approach bridges the gap between learning and industry-level professional excellence. Real projects, real mentors, real results.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Mentorship', 'Real Projects', 'Certificates', 'Internships'].map((item) => (
                  <span key={item} className="px-3 py-1 text-xs label-caps rounded-full bg-tertiary/10 text-tertiary">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href="/learners"
                className="flex items-center gap-2 text-tertiary font-bold hover:gap-4 transition-all"
              >
                Start Learning <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== THE DEZAI EDGE ==================== */}
      <section className="py-[120px]">
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
              { icon: 'bolt', title: 'Fast Delivery', desc: 'Rapid development cycles without compromising on architectural integrity.', color: 'text-primary' },
              { icon: 'visibility', title: 'Full Transparency', desc: 'Real-time access to project management tools and developer progress.', color: 'text-tertiary' },
              { icon: 'rocket_launch', title: 'Startup Friendly', desc: 'Flexible engagement models designed for growth-stage businesses.', color: 'text-primary' },
              { icon: 'diversity_3', title: 'Expert Team', desc: 'Direct access to senior architects, designers, and growth experts.', color: 'text-tertiary' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="p-8 text-center group">
                <div className={`${item.color} text-4xl mb-6`}>
                  <span className="material-symbols-outlined text-5xl group-hover:scale-110 transition-transform inline-block">{item.icon}</span>
                </div>
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.03] backdrop-blur-sm -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1280px] mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-glow" style={{ letterSpacing: '-0.03em' }}>
            Ready To Build Something Amazing?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(185,199,228,0.5)] transition-all hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/learners"
              className="glass-card px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/5"
            >
              Apply as a Learner
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
