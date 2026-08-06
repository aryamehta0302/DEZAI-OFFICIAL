'use client';

import { motion, Variants } from 'framer-motion';
import { pricingData } from '@/lib/studio-pricing';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function ServiceGrid() {
    return (
        <section className="py-24 bg-surface-dim">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Core Disciplines</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto">
                        End-to-end product engineering services designed to take you from initial concept to enterprise scale.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {pricingData.services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            variants={item}
                            className={`p-6 rounded-2xl bg-surface border border-border group hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(26,43,90,0.06)] transition-all duration-300 ${
                                idx === pricingData.services.length - 1 && pricingData.services.length % 4 !== 0 
                                ? 'lg:col-span-2 xl:col-span-1' 
                                : ''
                            }`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-surface-dim border border-border flex items-center justify-center mb-6 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
