'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function MissionSection() {
  return (
    <section className="py-[120px] relative overflow-hidden bg-surface-dim">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Our Mission: Building Technology, Empowering People
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg leading-relaxed">
            DEZAI operates as a dual-force ecosystem. We architect enterprise-grade software engineering solutions for businesses, while simultaneously training the next generation of engineers through hands-on mentorship on production codebases.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Business Side */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-elevated p-8 md:p-10 rounded-2xl group flex flex-col items-start text-left"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">
                domain
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Engineering Enterprise Platforms</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              From growth-stage startups to established enterprises, we engineer scalable SaaS platforms, robust architectures, and AI-driven products that deliver measurable business outcomes.
            </p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                Full-stack dedicated squads
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                Rigorous architectural standards
              </li>
            </ul>
          </motion.article>

          {/* Student Side */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated p-8 md:p-10 rounded-2xl group flex flex-col items-start text-left"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">
                school
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-World Engineering Mentorship</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              We bridge the gap between academic theory and professional capability. Our mentors embed students into actual product engineering workflows, equipping them with industry-ready skills.
            </p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                Production codebase training
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                Direct senior mentorship
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
