'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import JsonLd from '@/components/layout/JsonLd';
import BrandsMarquee from '@/components/ui/BrandsMarquee';

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
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="z-10"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface-dim mb-6">
              <span className="label-caps text-primary">UAE Registered • Global Impact</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-on-surface"
              style={{ letterSpacing: '-0.04em' }}
            >
              Build Products.<br />
              Build People.<br />
              <span className="text-primary">Build The Future.</span>
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
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dim transition-all hover:shadow-[0_8px_24px_rgba(26,43,90,0.2)]"
              >
                Start Your Project
              </Link>
              <Link
                href="/learners"
                className="border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-dim hover:border-border-hover transition-all"
              >
                Join DEZAI Learners
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeInUp} className="mt-16 flex flex-wrap gap-8 text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-sm label-caps">UAE Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">public</span>
                <span className="text-sm label-caps">Remote-First</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">visibility</span>
                <span className="text-sm label-caps">Transparent Workflow</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual — Clean Product Preview */}
          <div className="relative hidden lg:block h-[580px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central App Shell */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-72 h-[500px] card-elevated rounded-[32px] p-6 relative z-20 shadow-[0_16px_64px_rgba(0,0,0,0.08)]"
              >
                <div className="w-full h-28 bg-gradient-to-br from-primary/8 to-primary/20 rounded-2xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-surface-dim rounded" />
                  <div className="h-4 w-1/2 bg-surface-dim rounded" />
                  <div className="h-20 w-full bg-surface-dim rounded-xl" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-surface-dim rounded-lg" />
                    <div className="h-12 bg-surface-dim rounded-lg" />
                  </div>
                  <div className="h-14 w-full bg-primary/8 rounded-xl mt-2" />
                </div>
              </motion.div>

              {/* Floating Dashboard Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-10 -right-4 w-60 h-44 card-elevated rounded-2xl p-4 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="h-3 w-20 bg-primary/15 rounded" />
                  <span className="material-symbols-outlined text-primary text-xs">insights</span>
                </div>
                <div className="flex items-end gap-1 h-20">
                  <div className="flex-1 bg-primary/15 rounded-t" style={{ height: '60%' }} />
                  <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '80%' }} />
                  <div className="flex-1 bg-primary/30 rounded-t" style={{ height: '100%' }} />
                  <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '70%' }} />
                  <div className="flex-1 bg-primary/25 rounded-t" style={{ height: '90%' }} />
                </div>
              </motion.div>

              {/* Floating User Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute bottom-24 -left-8 w-52 h-36 card-elevated rounded-2xl p-4 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10" />
                  <div className="space-y-1">
                    <div className="h-2 w-16 bg-surface-high rounded" />
                    <div className="h-2 w-10 bg-surface-dim rounded" />
                  </div>
                </div>
                <div className="h-2 w-full bg-surface-dim rounded mb-2" />
                <div className="h-2 w-4/5 bg-surface-dim rounded mb-4" />
                <div className="h-8 w-full bg-primary/10 rounded-lg" />
              </motion.div>
            </div>
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
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
