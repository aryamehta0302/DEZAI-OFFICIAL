'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingData, getCurrencySymbol, getCurrencyName } from '@/lib/studio-pricing';
import { Currency, PricingTier } from '@/types/studio';

const TierCard = ({ tier, type, selectedCurrency }: { tier: PricingTier; type: 'starter' | 'growth' | 'enterprise'; selectedCurrency: Currency }) => {
    const isGrowth = type === 'growth';
    const priceString = tier.pricing[selectedCurrency];
    const hasPrice = priceString && priceString !== '-';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative flex flex-col p-8 rounded-3xl ${
                isGrowth 
                    ? 'bg-surface shadow-[0_8px_40px_rgba(26,43,90,0.12)] border-2 border-primary z-10' 
                    : 'bg-surface-dim border border-border mt-4 mb-4'
            }`}
        >
            {isGrowth && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md whitespace-nowrap">
                    Most Popular
                </div>
            )}
            
            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
            <div className="mb-6 flex items-baseline gap-1">
                {hasPrice ? (
                    <>
                        <span className="text-4xl font-extrabold tracking-tight">{priceString}</span>
                    </>
                ) : (
                    <span className="text-2xl font-bold text-on-surface-variant">Custom Quote</span>
                )}
            </div>

            <div className="w-full h-px bg-border mb-6" />

            <div className="flex-1">
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                    {tier.deliverables}
                </p>
            </div>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                isGrowth
                    ? 'bg-primary text-on-primary hover:bg-primary-dim shadow-md hover:shadow-lg'
                    : 'bg-surface text-on-surface border border-border hover:border-primary/50 hover:bg-primary/5'
            }`}>
                Select {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
        </motion.div>
    );
};

export default function PricingExperience() {
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');
    const [selectedService, setSelectedService] = useState<string>(pricingData.services[0].id);

    const activeService = pricingData.services.find(s => s.id === selectedService) || pricingData.services[0];

    return (
        <section id="pricing" className="py-24 bg-surface relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Transparent Global Pricing</h2>
                    <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                        Premium engineering at purchasing power parity. Select your region to view adjusted rates.
                    </p>
                </div>

                {/* Currency Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {pricingData.meta.currencies.map(currency => (
                        <button
                            key={currency}
                            onClick={() => setSelectedCurrency(currency)}
                            className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all ${
                                selectedCurrency === currency 
                                    ? 'text-on-surface' 
                                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-dim'
                            }`}
                        >
                            {selectedCurrency === currency && (
                                <motion.div
                                    layoutId="currency-pill"
                                    className="absolute inset-0 bg-surface-dim border border-border rounded-full -z-10 shadow-sm"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="flex items-center gap-2">
                                <span className="text-primary">{getCurrencySymbol(currency)}</span>
                                {getCurrencyName(currency)}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Service Tabs */}
                <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide snap-x justify-start md:justify-center">
                    {pricingData.services.map(service => (
                        <button
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all snap-center whitespace-nowrap ${
                                selectedService === service.id
                                    ? 'bg-primary text-on-primary shadow-md'
                                    : 'bg-surface border border-border text-on-surface-variant hover:border-border-hover'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">{service.icon}</span>
                                {service.title}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Pricing Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedService + selectedCurrency}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        <TierCard tier={activeService.tiers.starter} type="starter" selectedCurrency={selectedCurrency} />
                        <TierCard tier={activeService.tiers.growth} type="growth" selectedCurrency={selectedCurrency} />
                        <TierCard tier={activeService.tiers.enterprise} type="enterprise" selectedCurrency={selectedCurrency} />
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
