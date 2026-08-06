'use client';

import { motion } from 'framer-motion';
import ReviewsMarquee from '@/components/ui/ReviewsMarquee';
import { CUSTOMER_REVIEWS } from '@/lib/reviews';

export default function ClientTestimonials() {
  return (
    <section className="py-[120px] overflow-hidden bg-surface-dim">
      <div className="max-w-[1280px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="label-caps text-primary mb-4 block">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Read how we help fast-growing startups and enterprises deploy digital solutions within budget and timelines.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-6">
        <ReviewsMarquee reviews={CUSTOMER_REVIEWS.slice(0, 8)} speed="medium" />
        <ReviewsMarquee reviews={CUSTOMER_REVIEWS.slice(8)} speed="medium" reverse />
      </div>
    </section>
  );
}
