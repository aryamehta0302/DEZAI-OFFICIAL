'use client';

export default function PageBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      {/* Clean white base */}
      <div className="absolute inset-0 bg-white" />
      {/* Subtle warm gradient — top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(26,43,90,0.03),transparent_60%)]" />
      {/* Very subtle dot grid pattern for visual texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d0d0ce 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
