'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { SERVICES, BUSINESS_FAQ } from '@/lib/constants';
import ReviewsMarquee from '@/components/ui/ReviewsMarquee';
import BrandsMarquee from '@/components/ui/BrandsMarquee';
import { CUSTOMER_REVIEWS } from '@/lib/reviews';
import JsonLd from '@/components/layout/JsonLd';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function TeamCard({ member, i }: { member: any; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group card-elevated rounded-2xl text-left bg-surface border border-border hover:border-primary/40 hover:shadow-[0_24px_56px_rgba(26,43,90,0.12)]"
    >
      {/* Magic Card Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl transition duration-500 z-10"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(26, 43, 90, 0.08), transparent 40%)`,
        }}
      />
      
      {/* Animated Border Beam */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(26,43,90,0.3)_360deg)] animate-[spin_4s_linear_infinite]" />
        <div className="absolute inset-[1px] bg-surface rounded-2xl" />
      </div>

      <div className="relative z-20 rounded-2xl h-full flex flex-col pointer-events-none p-6" style={{ transform: 'translateZ(20px)' }}>
        {/* Isometric Grid Background in Card */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] group-hover:scale-105 transition-transform duration-1000 -z-10 rounded-2xl" />
        
        {/* Circular Image Wrapper */}
        <div className="flex flex-col items-center mb-6 pt-4 relative">
          <div className={`w-48 h-48 relative rounded-full overflow-hidden border-4 border-surface shadow-[0_8px_32px_rgba(0,0,0,0.15)] ring-2 ring-border group-hover:ring-primary/40 transition-all duration-500 mb-4 z-10 shrink-0 ${member.bg || 'bg-surface-dim'}`}>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className={`group-hover:scale-110 transition-transform duration-700 ease-out ${member.objectFit || 'object-cover'} ${member.pos}`}
              style={member.scale ? { transform: `scale(${member.scale})`, transformOrigin: member.transformOrigin || 'center' } : (member.zoom ? { transform: 'scale(1.4)', transformOrigin: 'top center' } : undefined)}
              sizes="192px"
            />
          </div>
          
          {/* Floating Role Label - Tech style */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface/80 backdrop-blur-xl border border-border/80 shadow-sm rounded z-20 -mt-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase font-mono">
              {member.role}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-transparent flex-1 flex flex-col justify-between text-center">
          <div>
            <h3 className="font-extrabold text-2xl mb-2 text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 font-medium">
              {member.bio}
            </p>
          </div>
          
          <div className="border-t border-border/60 pt-5 text-left">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <span className="material-symbols-outlined text-[14px] text-primary/70">memory</span>
              <span className="text-[9px] font-bold text-outline uppercase tracking-[0.2em] font-mono">Core Capabilities</span>
            </div>
            <div className="space-y-3">
              {member.skills.map((skill: string, idx: number) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="text-[10px] font-mono font-semibold text-on-surface-variant w-full max-w-[130px] group-hover:text-primary transition-colors truncate">
                    {skill}
                  </div>
                  <div className="flex-1 h-[2px] bg-border overflow-hidden rounded-full">
                    <motion.div 
                      initial={{ x: '-100%' }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1, delay: i * 0.2 + idx * 0.1, ease: 'easeOut' }}
                      className="w-full h-full bg-gradient-to-r from-primary/40 to-primary rounded-full transform origin-left group-hover:brightness-125 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StudioPage() {
  const studioServiceSchemas = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "DEZAI",
      "url": "https://dezai.org"
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
        "item": "https://dezai.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Studio",
        "item": "https://dezai.org/studio"
      }
    ]
  };

  return (
    <>
      <JsonLd schema={[...studioServiceSchemas, faqSchema, breadcrumbSchema]} />
      {/* Hero */}
      <section className="pt-32 pb-[120px] relative">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl text-center">
            <motion.span variants={fadeInUp} className="label-caps text-primary mb-4 block">DEZAI Studio</motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              Digital Solutions That<br />Drive Growth.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed">
              We combine precision engineering with artistic vision to create digital experiences that set new industry standards.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <BrandsMarquee />

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
                className="card-elevated p-10 rounded-2xl group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 bg-primary/8 group-hover:bg-primary">
                  <span className="material-symbols-outlined transition-colors text-primary group-hover:text-on-primary">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 text-sm label-caps text-on-surface-variant">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-primary">arrow_forward</span>
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
      <section className="py-[120px] bg-surface-dim">
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
              <motion.div key={v.title} variants={fadeInUp} className="card-elevated rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{v.icon}</span>
                </div>
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="label-caps text-primary mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
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
                pos: 'object-[center_15%]',
                zoom: false,
                scale: 0.93,
                transformOrigin: 'center',
                objectFit: 'object-cover',
                bg: 'bg-[#d5d5d5]',
                skills: ['Strategy', 'Product Architecture', 'Scale'],
                bio: 'Visionary product architect leading DEZAI\'s global strategy, business development, and technology roadmap.',
              },
              {
                name: 'Jiya Shah',
                role: 'Co-Founder',
                image: '/co-founder.jpeg',
                pos: 'object-top',
                zoom: true,
                objectFit: 'object-cover',
                skills: ['Operations', 'UX/UI Direction', 'Brand'],
                bio: 'Leading operations and design excellence, shaping DEZAI\'s culture, client relations, and brand identity.',
              },
              {
                name: 'Arya Mehta',
                role: 'Chief Technology Officer',
                image: '/cto-v4.png',
                pos: 'object-top',
                zoom: false,
                objectFit: 'object-contain',
                scale: 1.15,
                transformOrigin: 'top center',
                bg: 'bg-[#ffffff]',
                skills: ['Systems Engineering', 'Cloud Arch', 'Full-Stack'],
                bio: 'Systems architect scaling DEZAI\'s engineering frameworks, developer pipelines, and technical excellence.',
              },
            ].map((member, i) => (
              <TeamCard key={member.name} member={member} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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

      {/* FAQ */}
      <section className="py-[120px] relative">
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
                className="card-static p-6 rounded-2xl group cursor-pointer"
              >
                <summary className="font-bold flex justify-between items-center list-none">
                  {faq.question}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-on-surface-variant">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] bg-surface-dim">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1280px] mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Let&apos;s Build Your Next Product.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-primary-dim hover:shadow-[0_12px_40px_rgba(26,43,90,0.2)] transition-all"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>
    </>
  );
}

