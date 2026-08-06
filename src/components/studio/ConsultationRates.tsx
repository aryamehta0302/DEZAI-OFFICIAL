'use client';

import { motion } from 'framer-motion';
import { pricingData } from '@/lib/studio-pricing';

export default function ConsultationRates() {
    return (
        <section className="py-24 bg-surface relative">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Advisory & Discovery Sprints</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto">
                        For ad-hoc features, technical architecture reviews, or specialized discovery sprints.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface-dim border border-border p-8 rounded-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-2xl text-primary">public</span>
                            <h3 className="font-bold text-lg">US / Global</h3>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">
                            {pricingData.consultation.global.split(' (')[0]}
                        </div>
                        <div className="text-sm text-on-surface-variant">
                            {pricingData.consultation.global.split(' (')[1].replace(')', '')}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-surface-dim border border-border p-8 rounded-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-2xl text-primary">location_city</span>
                            <h3 className="font-bold text-lg">UAE / GCC</h3>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">
                            {pricingData.consultation.uae.split(' (')[0]}
                        </div>
                        <div className="text-sm text-on-surface-variant">
                            {pricingData.consultation.uae.split(' (')[1].replace(')', '')}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-surface-dim border border-border p-8 rounded-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-2xl text-primary">apartment</span>
                            <h3 className="font-bold text-lg">India</h3>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">
                            {pricingData.consultation.india.split(' (')[0]}
                        </div>
                        <div className="text-sm text-on-surface-variant">
                            {pricingData.consultation.india.split(' (')[1].replace(')', '')}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
