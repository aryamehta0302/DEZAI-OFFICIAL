export type Currency = 'USD' | 'AED' | 'INR' | 'EUR' | 'GBP';

export interface PricingTier {
    name: string;
    deliverables: string;
    pricing: Record<Currency, string>;
}

export interface ServiceCategory {
    id: string;
    title: string;
    icon: string;
    description: string;
    tiers: {
        starter: PricingTier;
        growth: PricingTier;
        enterprise: PricingTier;
    };
}

export interface ConsultationRates {
    global: string;
    uae: string;
    india: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface PricingData {
    meta: {
        version: string;
        currencies: Currency[];
    };
    services: ServiceCategory[];
    consultation: ConsultationRates;
    faqs: FAQ[];
}
