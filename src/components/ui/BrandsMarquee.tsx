'use client';

import Image from 'next/image';

const BRANDS = [
  { name: 'Allianz', src: '/logos/allianz-cloud.png' },
  { name: 'XS', src: '/logos/xs.png' },
  { name: 'iSecurify', src: '/logos/isecurify.png' },
  { name: 'Allianz-i', src: '/logos/allianz-i.png' },
];

interface BrandsMarqueeProps {
  speed?: 'slow' | 'medium' | 'fast';
  reverse?: boolean;
}

export default function BrandsMarquee({
  speed = 'medium',
  reverse = false,
}: BrandsMarqueeProps) {
  const duration = speed === 'slow' ? '40s' : speed === 'fast' ? '15s' : '25s';

  // Duplicate the list so it can scroll seamlessly
  const doubledBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="relative w-full overflow-hidden py-10 select-none bg-surface/50 border-y border-border/50">
      {/* Soft gradient fade on left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center mb-8">
        <span className="label-caps text-on-surface-variant mb-2">Trusted by Global Teams</span>
      </div>

      <div 
        className="flex w-max relative group"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className={`flex w-max items-center justify-around gap-16 md:gap-24 animate-marquee-full group-hover:[animation-play-state:paused] ${reverse ? 'reverse' : ''}`} style={{ animationDuration: duration }}>
          {BRANDS.map((brand, i) => (
            <div
              key={`g1-${brand.name}-${i}`}
              className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 mx-8 md:mx-12"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={60}
                className="object-contain max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
        <div className={`flex w-max items-center justify-around gap-16 md:gap-24 animate-marquee-full group-hover:[animation-play-state:paused] ${reverse ? 'reverse' : ''}`} style={{ animationDuration: duration }}>
          {BRANDS.map((brand, i) => (
            <div
              key={`g2-${brand.name}-${i}`}
              className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 mx-8 md:mx-12"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={60}
                className="object-contain max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
