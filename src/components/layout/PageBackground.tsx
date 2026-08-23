'use client';

export default function PageBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      {/* Warm beige base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Radiant Starburst Graphic */}
      <div className="absolute top-[-30%] right-[-10%] w-[120vw] h-[120vw] max-w-[1600px] max-h-[1600px] opacity-10 pointer-events-none origin-center animate-[spin_120s_linear_infinite]"
           style={{
             background: 'repeating-conic-gradient(from 0deg, transparent 0deg, transparent 10deg, var(--color-primary) 10deg, var(--color-primary) 11deg)'
           }}
      />
      
      {/* Center glowing bloom to soften the starburst */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle,var(--color-primary-container)_0%,transparent_60%)] opacity-30 blur-[60px]" />
      
      {/* Gold Dust Particles Overlay */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />
      
      {/* Gradient fade at bottom to blend into content */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
