'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StudioCTA() {
    return (
        <section className="py-32 bg-on-surface relative overflow-hidden">
            {/* Subtle glow for dark CTA section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-surface"
                >
                    Let&apos;s Build Something <br className="hidden md:block" />
                    <span className="text-primary">Extraordinary</span>
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-surface-dim/80 text-lg md:text-xl max-w-2xl mx-auto mb-12"
                >
                    Ready to scale your product? Speak directly with our lead architects to discuss your technical requirements and business goals.
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="h-14 px-8 bg-primary text-on-primary rounded-xl flex items-center justify-center font-bold text-lg transition-all shadow-lg hover:bg-primary-dim w-full sm:w-auto"
                    >
                        Schedule Consultation
                    </Link>
                    <Link
                        href="/contact?type=proposal"
                        className="h-14 px-8 flex items-center justify-center font-bold text-lg text-surface hover:bg-surface/10 transition-colors border border-surface/20 hover:border-surface/50 rounded-xl w-full sm:w-auto"
                    >
                        Request Proposal
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
