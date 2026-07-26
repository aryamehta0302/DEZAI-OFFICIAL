'use client';

import { motion } from 'framer-motion';

const industries = [
  'Startups',
  'Small & Medium Businesses',
  'Enterprises',
  'Educational Institutions',
  'Universities',
  'AI-Driven Organizations',
  'SaaS Companies',
  'EdTech',
  'Product Companies'
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function IndustriesSection() {
  return (
    <section className="py-[120px] bg-surface-dim border-t border-b border-border/50">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.h2 
            variants={fadeInUp} 
            className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
          >
            Industries We Serve
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-2xl mx-auto mb-12">
            Delivering scalable architecture and AI-driven solutions tailored for diverse ecosystems.
          </motion.p>
          
          <motion.div 
            variants={stagger}
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry}
                variants={fadeInUp}
                className="px-5 py-2.5 rounded-full border border-border bg-surface text-sm font-semibold text-on-surface-variant shadow-sm hover:border-primary/40 hover:text-primary transition-colors cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
