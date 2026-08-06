import pricingDataJson from '@/data/pricing.json';
import { PricingData, Currency } from '@/types/studio';

export const pricingData = pricingDataJson as PricingData;

export const getCurrencySymbol = (currency: Currency): string => {
    switch (currency) {
        case 'USD': return '$';
        case 'AED': return 'AED';
        case 'INR': return '₹';
        case 'EUR': return '€';
        case 'GBP': return '£';
        default: return '$';
    }
};

export const getCurrencyName = (currency: Currency): string => {
    switch (currency) {
        case 'USD': return 'US / Global';
        case 'AED': return 'UAE / GCC';
        case 'INR': return 'India';
        case 'EUR': return 'European Union';
        case 'GBP': return 'United Kingdom';
        default: return 'Global';
    }
};
