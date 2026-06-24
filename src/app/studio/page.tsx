'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SERVICES, BUSINESS_FAQ } from '@/lib/constants';
import ReviewsMarquee from '@/components/ui/ReviewsMarquee';
import { CUSTOMER_REVIEWS } from '@/lib/reviews';
import JsonLd from '@/components/layout/JsonLd';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function StudioPage() {
  const studioServiceSchemas = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "DEZAI",
      "url": "https://dezai.com"
    }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": BUSINESS_FAQ.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dezai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Studio",
        "item": "https://dezai.com/studio"
      }
    ]
  };

  return (
    <>
      <JsonLd schema={[...studioServiceSchemas, faqSchema, breadcrumbSchema]} />
      {/* Hero */}
      <section className="pt-32 pb-[120px] relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent" />
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeInUp} className="label-caps text-tertiary mb-4 block">DEZAI Studio</motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-glow"
              style={{ letterSpacing: '-0.04em' }}
            >
              Digital Solutions That<br />Drive Growth.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
              We combine precision engineering with artistic vision to create digital experiences that set new industry standards.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="glass-card p-10 rounded-3xl group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                  service.color === 'primary'
                    ? 'bg-primary/10 group-hover:bg-primary'
                    : 'bg-tertiary/10 group-hover:bg-tertiary'
                }`}>
                  <span className={`material-symbols-outlined transition-colors ${
                    service.color === 'primary'
                      ? 'text-primary group-hover:text-on-primary'
                      : 'text-tertiary group-hover:text-on-tertiary'
                  }`}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 text-sm label-caps opacity-60">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 -z-10 bg-white/[0.02] backdrop-blur-sm" />
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Built On Strong Foundations
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: 'bolt', title: 'Fast Execution', desc: 'Rapid, milestone-driven delivery without cutting corners.' },
              { icon: 'visibility', title: 'Transparency', desc: 'Full visibility into progress, budget, and timeline at all times.' },
              { icon: 'memory', title: 'Modern Technology', desc: 'We use the latest, battle-tested stacks — not legacy tools.' },
              { icon: 'handshake', title: 'Long-term Partnerships', desc: 'We build relationships, not just projects. Your growth is ours.' },
            ].map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="glass-card rounded-2xl p-8 text-center">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4 block">{v.icon}</span>
                <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-[120px] relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="label-caps text-tertiary mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-glow">
              Meet the Core Team
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              The architects, creators, and engineers leading DEZAI's mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Dhairya Desai',
                role: 'Founder & CEO',
                image: '/founder-ceo.jpeg',
                pos: 'object-top',
                zoom: false,
                glowColor: 'from-amber-500/10 to-yellow-500/10',
                glowBorder: 'hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] hover:border-amber-500/30',
                skills: ['Strategy', 'Product Architecture', 'Scale'],
                bio: 'Visionary product architect leading DEZAI’s global strategy, business development, and technology roadmap.',
              },
              {
                name: 'Jiya Shah',
                role: 'Co-Founder',
                image: '/co-founder.jpeg',
                pos: 'object-top',
                zoom: true,
                glowColor: 'from-violet-500/10 to-fuchsia-500/10',
                glowBorder: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] hover:border-violet-500/30',
                skills: ['Operations', 'UX/UI Direction', 'Brand'],
                bio: 'Leading operations and design excellence, shaping DEZAI\'s culture, client relations, and brand identity.',
              },
              {
                name: 'Arya Mehta',
                role: 'Chief Technology Officer',
                image: '/cto-v4.png',
                pos: 'object-top',
                zoom: false,
                glowColor: 'from-blue-500/10 to-cyan-500/10',
                glowBorder: 'hover:shadow-[0_0_50px_rgba(37,99,235,0.15)] hover:border-blue-500/30',
                skills: ['Systems Engineering', 'Cloud Arch', 'Full-Stack'],
                bio: 'Systems architect scaling DEZAI’s engineering frameworks, developer pipelines, and technical excellence.',
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative group glass-card rounded-3xl overflow-hidden text-left border border-white/5 transition-all duration-300 ${member.glowBorder}`}
              >
                {/* Glow Backdrop */}
                <div className={`absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-gradient-to-br ${member.glowColor} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Image Wrapper */}
                <div className="aspect-[4/5] relative overflow-hidden bg-surface-bright/20 border-b border-white/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.pos} group-hover:scale-110 transition-transform duration-700 ease-out`}
                    style={member.zoom ? { transform: 'scale(1.6)', transformOrigin: 'top center' } : undefined}
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                  
                  {/* Subtle Shimmer Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Card overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-95" />
                  
                  {/* Floating Role Badge in Image */}
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 bg-surface-high/90 backdrop-blur-md border border-white/10 text-tertiary rounded-full label-caps tracking-wider shadow-lg">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="font-bold text-xl mb-2 text-on-surface group-hover:text-glow tracking-tight transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 min-h-[60px]">
                    {member.bio}
                  </p>
                  
                  {/* Skill/Specialty Pills */}
                  <div className="border-t border-white/5 pt-4">
                    <div className="text-[10px] font-medium text-white/40 label-caps mb-2">Expertise</div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-[10px] px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/5 text-on-surface-variant/90 font-mono tracking-tight group-hover:bg-white/[0.06] group-hover:border-white/10 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-[120px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="label-caps text-tertiary mb-4 block">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-glow">
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

      {/* FAQ */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 -z-10 bg-white/[0.02] backdrop-blur-sm" />
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {BUSINESS_FAQ.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-static p-6 rounded-2xl group cursor-pointer"
              >
                <summary className="font-bold flex justify-between items-center list-none">
                  {faq.question}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1280px] mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-glow">
            Let&apos;s Build Your Next Product.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(185,199,228,0.5)] transition-all hover:scale-105"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>
    </>
  );
}
