import React from 'react';

export const AmbientLights = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 select-none">
      {/* Top Left - Soft Violet/Primary */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[clamp(300px,50vw,800px)] h-[clamp(300px,50vw,800px)] bg-primary/15 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[200px] mix-blend-normal animate-ambient-1" 
        aria-hidden="true"
      />
      
      {/* Center Right - Soft Cyan */}
      <div 
        className="absolute top-[30%] right-[-15%] w-[clamp(400px,60vw,900px)] h-[clamp(400px,60vw,900px)] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[200px] mix-blend-normal animate-ambient-2" 
        style={{ animationDelay: '-5s' }}
        aria-hidden="true"
      />
      
      {/* Bottom Center - Soft Teal/Secondary */}
      <div 
        className="absolute bottom-[-20%] left-[20%] w-[clamp(350px,55vw,850px)] h-[clamp(350px,55vw,850px)] bg-secondary/15 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[200px] mix-blend-normal animate-ambient-1" 
        style={{ animationDelay: '-12s' }}
        aria-hidden="true"
      />

      {/* Optional subtle noise overlay (ultra low opacity) */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" aria-hidden="true" />
    </div>
  );
};
