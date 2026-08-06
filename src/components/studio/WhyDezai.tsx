'use client';

import { motion } from 'framer-motion';

const features = [
    {
        title: "AI-Native Engineering",
        description: "We don't just build apps; we integrate state-of-the-art LLMs, RAG architectures, and predictive analytics into your core product.",
        icon: "memory"
    },
    {
        title: "Product-First Thinking",
        description: "Engineers who understand business metrics. We build features that drive activation, retention, and MRR.",
        icon: "lightbulb"
    },
    {
        title: "Global Delivery",
        description: "Access top-tier engineering talent distributed across the UAE, India, and globally for maximum efficiency and velocity.",
        icon: "public"
    },
    {
        title: "Dedicated Squads",
        description: "Your project gets a dedicated product manager, lead architect, and engineering squad focused solely on your success.",
        icon: "group"
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade security standards, compliance audit logs, and rigorous penetration testing built-in.",
        icon: "shield"
    },
    {
        title: "Post-Launch Support",
        description: "We don't disappear after deployment. Guaranteed 30-day free support and structured long-term SLAs.",
        icon: "support_agent"
    }
];

export default function WhyDezai() {
    return (
        <section className="py-24 bg-surface-dim">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Why Dezai Studio</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto">
                        We combine the agility of a startup with the engineering rigor of an enterprise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-surface border border-border"
                        >
                            <span className="material-symbols-outlined text-3xl text-primary mb-6 block">
                                {feature.icon}
                            </span>
                            <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
