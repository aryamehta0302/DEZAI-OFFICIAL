import React from 'react';

export const AmbientLights = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 select-none">
      {/* Top Left - Deep Gold */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[clamp(400px,60vw,900px)] h-[clamp(400px,60vw,900px)] bg-primary/20 rounded-full blur-[120px] sm:blur-[200px] lg:blur-[250px] mix-blend-multiply animate-ambient-1" 
        aria-hidden="true"
      />
      
      {/* Center Right - Soft Amber/Bronze */}
      <div 
        className="absolute top-[30%] right-[-15%] w-[clamp(500px,70vw,1000px)] h-[clamp(500px,70vw,1000px)] bg-amber-600/10 rounded-full blur-[120px] sm:blur-[200px] lg:blur-[250px] mix-blend-multiply animate-ambient-2" 
        style={{ animationDelay: '-5s' }}
        aria-hidden="true"
      />
      
      {/* Bottom Center - Pale Gold/Secondary */}
      <div 
        className="absolute bottom-[-20%] left-[20%] w-[clamp(450px,65vw,950px)] h-[clamp(450px,65vw,950px)] bg-primary/10 rounded-full blur-[120px] sm:blur-[200px] lg:blur-[250px] mix-blend-multiply animate-ambient-1" 
        style={{ animationDelay: '-12s' }}
        aria-hidden="true"
      />

    </div>
  );
};
