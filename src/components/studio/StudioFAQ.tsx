'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingData } from '@/lib/studio-pricing';

export default function StudioFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-surface relative">
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-on-surface-variant">
                        Everything you need to know about engaging with Dezai Studio.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {pricingData.faqs.map((faq, idx) => (
                        <div 
                            key={idx}
                            className={`border rounded-2xl overflow-hidden transition-colors ${
                                openIndex === idx ? 'border-primary/30 bg-primary/5' : 'border-border bg-surface hover:border-border-hover'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-base"
                                aria-expanded={openIndex === idx}
                            >
                                <span>{faq.question}</span>
                                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                                    keyboard_arrow_down
                                </span>
                            </button>
                            
                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-on-surface-variant leading-relaxed text-sm">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
