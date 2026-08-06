import { Metadata } from 'next';
import StudioHero from '@/components/studio/StudioHero';
import ServiceGrid from '@/components/studio/ServiceGrid';
import PricingExperience from '@/components/studio/PricingExperience';
import PricingCalculator from '@/components/studio/PricingCalculator';
import ConsultationRates from '@/components/studio/ConsultationRates';
import WhyDezai from '@/components/studio/WhyDezai';
import StudioFAQ from '@/components/studio/StudioFAQ';
import StudioCTA from '@/components/studio/StudioCTA';
import JsonLd from '@/components/layout/JsonLd';
import CoreTeam from '@/components/studio/CoreTeam';
import ClientTestimonials from '@/components/studio/ClientTestimonials';

export const metadata: Metadata = {
  title: 'DEZAI Studio | Custom AI Development & B2B SaaS Engineering',
  description: 'Hire a dedicated remote team of senior engineers and product architects. Specializing in AI integrations, custom SaaS platforms, and enterprise cloud solutions.',
  alternates: { canonical: '/studio' },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Engineering & AI Development",
  "provider": {
    "@type": "Organization",
    "name": "DEZAI"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "DEZAI Studio Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Applications & Platforms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SaaS & Web Engineering"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Engineering"
        }
      }
    ]
  }
};

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <JsonLd schema={serviceSchema} />
      {/* 1. Hero Section */}
      <StudioHero />

      {/* 2. Service Categories */}
      <ServiceGrid />

      {/* 3. Interactive Pricing Experience */}
      <PricingExperience />

      {/* 4. Pricing Calculator */}
      <PricingCalculator />

      {/* 5. Consultation Rates */}
      <ConsultationRates />

      {/* 6. Core Team */}
      <CoreTeam />

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* 7. Why Dezai Studio */}
      <WhyDezai />

      {/* 7. FAQs */}
      <StudioFAQ />

      {/* 8. CTA Section */}
      <StudioCTA />
    </main>
  );
}
