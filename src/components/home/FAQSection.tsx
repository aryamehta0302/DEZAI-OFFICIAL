'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is DEZAI?",
    answer: "DEZAI is a UAE-registered technology company that operates as a dual ecosystem: we build AI-driven digital products for businesses and run a mentorship platform that trains students to become industry-ready software engineering professionals."
  },
  {
    question: "What services does DEZAI provide?",
    answer: "For businesses, we provide end-to-end software development, including AI integration, custom SaaS engineering, web and mobile app development, and UX/UI design. For students, we offer immersive mentorship programs focused on real-world product development."
  },
  {
    question: "How does DEZAI help businesses?",
    answer: "We partner with startups, SMEs, and enterprises to accelerate their digital transformation. By leveraging modern tech stacks and Artificial Intelligence, we engineer scalable, high-performance applications that solve complex challenges and drive growth."
  },
  {
    question: "How does DEZAI help students?",
    answer: "Our mentorship platform bridges the gap between theoretical learning and professional capability. Students work on actual production codebases, receiving hands-on guidance from senior engineers to build a strong career portfolio."
  },
  {
    question: "What technologies does DEZAI use?",
    answer: "We specialize in modern, robust frameworks including React, Next.js, Node.js, and Python. We also integrate cutting-edge Machine Learning and AI solutions tailored to specific project requirements."
  },
  {
    question: "Where is DEZAI based?",
    answer: "DEZAI is officially registered and headquartered in Dubai, UAE, but we serve clients and mentor students globally."
  },
  {
    question: "How can I join the waitlist?",
    answer: "You can join our waitlist by entering your email in the Early Access section above. We will notify you the moment new spots open for our platforms."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-[120px] bg-surface relative" id="faq">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant text-lg">
            Everything you need to know about DEZAI, our services, and our mission.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="card-elevated rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg text-on-surface pr-8">{faq.question}</span>
                  <span className={`material-symbols-outlined transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                    expand_more
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-on-surface-variant leading-relaxed border-t border-border/30 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
