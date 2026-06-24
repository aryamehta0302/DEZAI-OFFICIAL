'use client';

import dynamic from 'next/dynamic';

const ShaderCanvas = dynamic(() => import('@/components/shaders/ShaderCanvas'), { ssr: false });

export default function PageBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      {/* Shader layer — high visibility */}
      <div className="absolute inset-0 opacity-80">
        <ShaderCanvas variant="hero" />
      </div>
      {/* Royal blue ambient glow — top center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(37,99,235,0.18),transparent_60%)]" />
      {/* Gold accent glow — bottom right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_85%_100%,rgba(200,155,50,0.06),transparent_50%)]" />
      {/* Blue side glow — left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_60%_at_0%_40%,rgba(37,99,235,0.10),transparent_50%)]" />
      {/* Blue side glow — right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_60%_at_100%_60%,rgba(37,99,235,0.08),transparent_50%)]" />
      {/* Very thin content overlay — just enough for text readability, NOT killing the graphics */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-surface/50" />
    </div>
  );
}
