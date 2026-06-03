"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPageContent() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid bg-grid-mask opacity-30 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            {t.about.eyebrow}
          </p>
          <h1 className="text-4xl font-bold text-foreground mb-8">Kale Studio</h1>
        </RevealOnScroll>

        <div className="prose-dark space-y-8">
          <RevealOnScroll delay={80}>
            <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden card-hover-glow">
              <div className="hero-glow w-48 h-48 bg-primary/10 -top-10 -end-10 animate-pulse-ring" />
              <blockquote className="relative text-xl sm:text-2xl font-semibold text-foreground italic border-s-2 border-primary ps-6">
                &ldquo;{t.about.quote}&rdquo;
              </blockquote>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <p className="text-lg leading-relaxed">{t.about.p1}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <p className="text-lg leading-relaxed">{t.about.p2}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-lg leading-relaxed">{t.about.p3}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={240}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">{t.about.contact}</h2>
              <p>
                {t.about.email}:{" "}
                <a href="mailto:koocyton@gmail.com" className="font-medium">
                  koocyton@gmail.com
                </a>
              </p>
              <p className="mt-2">
                {t.about.website}:{" "}
                <a href="https://kale-studio.com" className="font-medium">
                  kale-studio.com
                </a>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
