'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import JsonLd from '@/components/layout/JsonLd';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TeamCard({ member, i }: { member: any; i: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
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
    <motion.article
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
              alt={`Portrait of ${member.name}, ${member.role} at DEZAI`}
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
          <header>
            <h3 className="font-extrabold text-2xl mb-2 text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 font-medium">
              {member.bio}
            </p>
          </header>
          
          <footer className="border-t border-border/60 pt-5 text-left">
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
          </footer>
        </div>
      </div>
    </motion.article>
  );
}

const CORE_TEAM = [
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
    bio: "Visionary product architect leading DEZAI's global strategy, business development, and technology roadmap.",
  },
  {
    name: 'Jiya Shah',
    role: 'Co-Founder',
    image: '/co-founder.jpeg',
    pos: 'object-top',
    zoom: true,
    objectFit: 'object-cover',
    skills: ['Operations', 'UX/UI Direction', 'Brand'],
    bio: "Leading operations and design excellence, shaping DEZAI's culture, client relations, and brand identity.",
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
    bio: "Systems architect scaling DEZAI's engineering frameworks, developer pipelines, and technical excellence.",
  },
];

export default function CoreTeam() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DEZAI",
    "employee": CORE_TEAM.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "description": member.bio,
      "image": `https://dezai.org${member.image}`
    }))
  };

  return (
    <section className="py-[120px] relative bg-surface-dim" aria-label="Core Team">
      <JsonLd schema={teamSchema} />
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.header
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
            The architects, creators, and engineers leading DEZAI&apos;s mission.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CORE_TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
