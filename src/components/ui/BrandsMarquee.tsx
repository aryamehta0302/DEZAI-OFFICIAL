'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const BRANDS = [
  { name: 'Allianz', src: '/logos/allianz-cloud.png', label: 'Enterprise Cloud Partner' },
  { name: 'XS', src: '/logos/xs.png', label: 'SaaS Engineering Client' },
  { name: 'iSecurify', src: '/logos/isecurify.png', label: 'Security Audit Partner' },
  { name: 'Allianz-i', src: '/logos/allianz-i.png', label: 'Digital Transformation' },
];

export default function BrandsMarquee() {
  return (
    <div className="w-full py-16 bg-surface-dim border-y border-border/50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="label-caps text-on-surface-variant mb-2">Trusted by Enterprise Partners</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="h-16 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={brand.src}
                  alt={`${brand.name} - ${brand.label}`}
                  title={`${brand.name} - ${brand.label}`}
                  width={140}
                  height={50}
                  className="object-contain max-h-12 w-auto h-auto"
                />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-on-surface-variant/50 group-hover:text-primary transition-colors font-semibold">
                {brand.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
