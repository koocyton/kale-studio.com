"use client";

export default function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid bg-grid-mask opacity-60" />
      <div className="scan-line" />
      <div className="hero-glow w-[500px] h-[500px] bg-primary/20 -top-48 start-1/2 -translate-x-1/2 animate-pulse-ring" />
      <div className="hero-glow w-[300px] h-[300px] bg-accent/15 top-20 -end-20 animate-float" />
      <div className="hero-glow w-[250px] h-[250px] bg-violet-500/10 bottom-0 -start-20 animate-float-delayed" />
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 23 + 10) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + (i % 5)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
