'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
    } catch (error: unknown) {
      console.error('Waitlist error:', error);
      setStatus('error');
      const errorMessage = error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.';
      setErrorMessage(errorMessage);
    }
  };

  return (
    <section className="py-[120px] relative overflow-hidden bg-surface" aria-label="Waitlist">
      {/* Ambient glowing gradients for premium feel */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-ambient-1 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-ambient-2 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="card-elevated max-w-4xl mx-auto rounded-[2rem] p-8 sm:p-12 md:p-16 relative overflow-hidden"
        >
          {/* Inner subtle grid background */}
          <div className="absolute inset-0 bg-grid-white opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dim border border-border mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-wide text-on-surface-variant uppercase">DEZAI Microcredentials</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Future-proof Your Learning with <span className="text-primary">AI</span>.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium"
            >
              The future belongs to those who never stop learning. DEZAI Microcredentials are built to help you gain practical, in demand skills that employers value, powered by AI and designed for real world success. Join the waitlist today and be among the first to unlock a smarter way to learn, earn recognized credentials, and build a career that stands out.
            </motion.p>



            {/* Form Section */}
            <motion.div variants={fadeInUp} className="w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">🎉 You&apos;re on the list!</h3>
                    <p className="text-on-surface-variant">
                      Thanks for joining the Dezai waitlist. We&apos;ll notify you as soon as early access becomes available.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="relative flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address..."
                        disabled={status === 'loading'}
                        className="input-base flex-1 h-14 bg-surface text-lg rounded-xl pl-5 focus-ring"
                      />
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="h-14 px-8 bg-primary text-on-primary rounded-xl font-bold text-lg transition-all shadow-[0_4px_24px_rgba(26,43,90,0.15)] hover:shadow-[0_4px_32px_rgba(26,43,90,0.25)] hover:bg-primary-dim disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center min-w-[160px]"
                      >
                        {status === 'loading' ? (
                          <span className="material-symbols-outlined animate-spin">sync</span>
                        ) : (
                          'Join the Waitlist'
                        )}
                      </button>
                    </div>

                    {status === 'error' && (
                      <p className="text-error text-sm font-medium mt-1 text-center bg-error/10 py-2 rounded-lg">
                        {errorMessage}
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-10">
              {[
                'Expert Led Learning',
                'AI Powered Learning Assistant',
                'Hands On Projects',
                'Industry Relevant Skill Paths',
                'Verified Digital Certificates',
                'Career Portfolio Building',
                'Flexible Self Paced Learning',
                'Job Ready Skills'
              ].map((indicator, i) => (
                <div key={i} className="flex items-center gap-1.5 text-on-surface-variant text-sm font-medium">
                  <span className="material-symbols-outlined text-[16px] text-primary/70">check</span>
                  <span>{indicator}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
