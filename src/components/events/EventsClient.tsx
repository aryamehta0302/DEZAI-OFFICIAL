'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HACKORBIT_PHOTOS = [
  '/events/photos/charusat/1786904030722.png',
  '/events/photos/charusat/1786904030983.png',
  '/events/photos/charusat/1786904031088.png',
  '/events/photos/charusat/1786904031318.png',
  '/events/photos/charusat/1786985542643.png',
  '/events/photos/charusat/1786985549796.png',
  '/events/photos/charusat/1786985549939.png',
];

const TETRATHON_PHOTOS = [
  '/events/photos/navrachana/1786188013437.png',
  '/events/photos/navrachana/1786188021678.png',
  '/events/photos/navrachana/1786188022151.png',
  '/events/photos/navrachana/1786188022398.png',
];

export default function EventsClient() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1280px] mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Decorative background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          <div className="badge-primary mb-8 tracking-widest uppercase font-bold text-xs px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full">
            The DEZAI Ecosystem
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-on-surface via-on-surface to-on-surface-variant text-center font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tight leading-[1.1] mb-8 pb-2">
            Hackathons &amp; <span className="text-primary">Industry Moments</span>
          </h1>
          <p className="text-on-surface-variant text-center text-lg sm:text-xl max-w-2xl leading-relaxed font-medium">
            Real moments from the DEZAI ecosystem — student hackathons, industry jury roles, and engineering mentorship in action.
          </p>
        </motion.div>
      </section>

      {/* Events Timeline */}
      <section className="w-full max-w-[1280px] mx-auto px-6 pb-32 flex flex-col gap-24">
        
        {/* Event 1: Hackorbit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 md:gap-10 card-elevated p-6 sm:p-8 md:p-12 rounded-3xl bg-surface/60 backdrop-blur-xl border border-white/5 relative overflow-hidden group"
        >
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-start justify-between relative z-10">
            <div className="flex-1 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg text-sm">code</span>
                <span className="text-sm font-bold text-primary tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Student Hackathon &middot; 2026</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">GDG CHARUSAT &times; DEZAI Hackorbit 2026</h2>
              <h3 className="text-xl md:text-2xl font-medium text-on-surface-variant mb-6">Building real products with the next generation of engineers</h3>
              <p className="text-on-surface-variant/80 text-lg leading-relaxed mb-6">
                Students and mentors came together for an intensive build session. From live product demos to hands-on mentoring, Hackorbit showcased the DEZAI approach in action — real code, real feedback, real growth.
              </p>
            </div>
          </div>

          {/* Hackorbit Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
            {HACKORBIT_PHOTOS.map((src, i) => (
              <motion.div 
                key={src} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden bg-surface-dim shadow-sm group/image ${i === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-video' : 'aspect-[4/3] sm:aspect-[4/3]'}`}
              >
                <Image
                  src={src}
                  alt={`DEZAI Hackorbit Hackathon 2026 moment ${i + 1}`}
                  title={`DEZAI Hackorbit Hackathon 2026 moment ${i + 1}`}
                  fill
                  className="object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event 2: Tetrathon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 md:gap-10 card-elevated p-6 sm:p-8 md:p-12 rounded-3xl bg-surface/60 backdrop-blur-xl border border-white/5 relative overflow-hidden group"
        >
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-start justify-between relative z-10">
            <div className="flex-1 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-2 rounded-lg text-sm">gavel</span>
                <span className="text-sm font-bold text-tertiary tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-tertiary to-purple-500">Jury / Industry Representation &middot; 2026</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">Tetrathon 2026 — India's First Indo-French Hackathon</h2>
              <h3 className="text-xl md:text-2xl font-medium text-on-surface-variant mb-6">DEZAI Founder &amp; CEO as Jury at Navrachana University, Baroda</h3>
              <p className="text-on-surface-variant/80 text-lg leading-relaxed mb-6">
                Representing DEZAI on the jury of India's first Indo-French hackathon. Evaluating student and startup teams, exchanging perspectives with an international organising cohort, and reinforcing DEZAI's commitment to high-standard product engineering and talent development.
              </p>
            </div>
          </div>

          {/* Tetrathon Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {TETRATHON_PHOTOS.map((src, i) => (
              <motion.div 
                key={src} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden bg-surface-dim shadow-sm aspect-[4/3] sm:aspect-[4/3] group/image"
              >
                <Image
                  src={src}
                  alt={`DEZAI Tetrathon 2026 Jury moment ${i + 1}`}
                  title={`DEZAI Tetrathon 2026 Jury moment ${i + 1}`}
                  fill
                  className="object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Hover overlay sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </section>
    </div>
  );
}
