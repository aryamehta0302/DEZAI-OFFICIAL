'use client';

import { useState } from 'react';
import { pricingData } from '@/lib/studio-pricing';
import { Currency } from '@/types/studio';

export default function PricingCalculator() {
    const [selectedService, setSelectedService] = useState(pricingData.services[0].id);
    const [complexity, setComplexity] = useState<'starter' | 'growth' | 'enterprise'>('growth');
    const [region, setRegion] = useState<Currency>('USD');

    const activeService = pricingData.services.find(s => s.id === selectedService) || pricingData.services[0];
    const estimatedPrice = activeService.tiers[complexity].pricing[region] || 'Custom';
    
    // Simple heuristic timeline mapping
    const timeline = complexity === 'starter' ? '2 - 4 Weeks' : complexity === 'growth' ? '6 - 10 Weeks' : '3 - 6 Months';

    return (
        <section className="py-24 bg-surface-dim relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Estimate Your Project</h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto">
                        Get an immediate high-level investment estimate based on your specific requirements.
                    </p>
                </div>

                <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-[0_8px_40px_rgba(26,43,90,0.08)] border border-border flex flex-col md:flex-row gap-12">
                    
                    {/* Controls */}
                    <div className="flex-1 flex flex-col gap-8">
                        <div>
                            <label className="block text-sm font-bold text-on-surface mb-3 uppercase tracking-wide">1. Select Service Domain</label>
                            <select 
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="w-full bg-surface-dim border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors cursor-pointer appearance-none"
                            >
                                {pricingData.services.map(s => (
                                    <option key={s.id} value={s.id}>{s.title}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-on-surface mb-3 uppercase tracking-wide">2. Project Complexity</label>
                            <div className="grid grid-cols-3 gap-2">
                                {['starter', 'growth', 'enterprise'].map((tier) => (
                                    <button
                                        key={tier}
                                        onClick={() => setComplexity(tier as 'starter' | 'growth' | 'enterprise')}
                                        className={`px-3 py-2.5 rounded-lg text-sm font-semibold capitalize border transition-all ${
                                            complexity === tier 
                                            ? 'bg-primary border-primary text-on-primary' 
                                            : 'bg-surface border-border text-on-surface-variant hover:border-border-hover'
                                        }`}
                                    >
                                        {tier}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-on-surface mb-3 uppercase tracking-wide">3. Commercial Region</label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { id: 'USD', label: 'Global / US' },
                                    { id: 'AED', label: 'GCC / UAE' },
                                    { id: 'INR', label: 'India' }
                                ].map((reg) => (
                                    <button
                                        key={reg.id}
                                        onClick={() => setRegion(reg.id as Currency)}
                                        className={`px-3 py-2.5 rounded-lg text-xs md:text-sm font-semibold border transition-all ${
                                            region === reg.id 
                                            ? 'bg-on-surface border-on-surface text-surface' 
                                            : 'bg-surface border-border text-on-surface-variant hover:border-border-hover'
                                        }`}
                                    >
                                        {reg.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Result Panel */}
                    <div className="flex-1 bg-surface-dim rounded-2xl border border-border p-8 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none" />
                        
                        <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Estimated Investment</h3>
                        <div className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                            {estimatedPrice}
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-border/50">
                                <span className="text-on-surface-variant">Recommended Tier</span>
                                <span className="font-bold capitalize">{complexity}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-border/50">
                                <span className="text-on-surface-variant">Estimated Timeline</span>
                                <span className="font-bold">{timeline}</span>
                            </div>
                        </div>

                        <a href="mailto:info@dezai.org?subject=Formal Proposal Request" className="block text-center w-full mt-8 bg-on-surface text-surface font-bold py-4 rounded-xl hover:bg-on-surface/90 transition-colors">
                            Request Formal Proposal
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
