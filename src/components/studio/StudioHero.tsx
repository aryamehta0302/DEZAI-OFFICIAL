'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StudioHero() {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-surface overflow-hidden pt-32 pb-20">
            {/* Elegant Background Gradients */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dim border border-border mb-8 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-semibold tracking-wide text-on-surface-variant">DEZAI STUDIO</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-on-surface leading-[1.05]"
                >
                    Premium Product <br className="hidden md:block" />
                    <span className="text-primary">Engineering</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 font-medium leading-relaxed"
                >
                    Build SaaS platforms, AI products, mobile apps, cloud infrastructure, and growth systems with a globally distributed engineering team.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                >
                    <Link
                        href="/contact"
                        className="h-14 px-8 bg-primary text-on-primary rounded-xl flex items-center justify-center font-bold text-lg transition-all shadow-[0_4px_24px_rgba(26,43,90,0.15)] hover:shadow-[0_4px_32px_rgba(26,43,90,0.25)] hover:bg-primary-dim w-full sm:w-auto group"
                    >
                        <span>Book Discovery Call</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                    <button
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        className="h-14 px-8 flex items-center justify-center font-bold text-lg text-on-surface hover:bg-surface-dim transition-colors border border-border hover:border-border-hover rounded-xl w-full sm:w-auto"
                    >
                        View Pricing
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
