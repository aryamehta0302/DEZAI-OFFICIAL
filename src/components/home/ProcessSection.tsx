'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    phase: '01',
    title: 'Discover & Strategize',
    description: 'We align our software development expertise with your business goals. We analyze requirements, define user journeys, and architect a scalable foundation for your digital product.',
  },
  {
    phase: '02',
    title: 'UX/UI Design',
    description: 'Our design team crafts intuitive, user-centric interfaces. We focus on premium aesthetics and seamless interactions that elevate the user experience across all devices.',
  },
  {
    phase: '03',
    title: 'Build & Engineer',
    description: 'Leveraging modern stacks like Next.js, React, Node.js, and Python, we engineer robust, secure, and highly performant applications. Quality code and architectural integrity are our standard.',
  },
  {
    phase: '04',
    title: 'Launch & Iterate',
    description: 'We deploy your product to secure cloud environments with zero downtime. Post-launch, we monitor analytics and user feedback to continuously optimize and refine the solution.',
  },
  {
    phase: '05',
    title: 'Scale & Integrate AI',
    description: 'As your business grows, we seamlessly integrate Artificial Intelligence and Machine Learning solutions to automate processes, enhance decision-making, and unlock new capabilities.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProcessSection() {
  return (
    <section className="py-[120px] relative overflow-hidden bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Our Development Process
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg leading-relaxed">
            A transparent, client-centric workflow designed to turn complex challenges into elegant digital solutions.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line for desktop */}
          <div className="hidden md:block absolute left-[28px] top-4 bottom-4 w-[2px] bg-border z-0" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="flex flex-col gap-10 md:gap-16 relative z-10"
          >
            {processSteps.map((step) => (
              <motion.article key={step.phase} variants={fadeInUp} className="flex flex-col md:flex-row gap-6 md:gap-10 group">
                <div className="flex-shrink-0 flex items-center md:items-start gap-4 md:gap-0">
                  <div className="w-14 h-14 bg-surface border-2 border-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_0_4px_var(--color-surface)] z-10 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    {step.phase}
                  </div>
                  <span className="text-2xl font-bold md:hidden block">{step.title}</span>
                </div>
                
                <div className="card-elevated p-6 md:p-8 rounded-2xl flex-1 bg-surface group-hover:border-primary/30 transition-colors">
                  <h3 className="text-2xl font-bold mb-3 hidden md:block">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
