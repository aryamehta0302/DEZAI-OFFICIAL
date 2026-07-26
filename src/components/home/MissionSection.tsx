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
            DEZAI is a dual-force ecosystem. We architect enterprise-grade Software Engineering solutions and Artificial Intelligence platforms for businesses globally. Simultaneously, we fuel the next generation of tech leaders by providing hands-on mentorship, real-world project exposure, and career-accelerating guidance.
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
            <h3 className="text-2xl font-bold mb-4">Driving Digital Transformation</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              From high-growth startups to established enterprises, we engineer scalable SaaS platforms, automated cloud infrastructures, and AI-driven products that deliver measurable ROI. We build robust architectures that solve complex business challenges.
            </p>
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
            <h3 className="text-2xl font-bold mb-4">Cultivating Future Innovators</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              We believe in learning by doing. Our mentorship platform embeds students into actual product engineering workflows, equipping them with industry-ready skills in Next.js, React, Node.js, and UX/UI design. We shape professionals, not just graduates.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
