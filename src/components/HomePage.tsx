"use client";

import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import TechBackground from "@/components/TechBackground";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

const featureIcons = [
  "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182",
];

export default function HomePage() {
  const { t } = useLanguage();

  const stats = [
    { value: "6", label: t.stats.apps },
    { value: "AI", label: t.stats.powered },
    { value: "100%", label: t.stats.passion },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <TechBackground />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="text-center max-w-3xl mx-auto animate-hero-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface-alt/80 text-xs font-mono text-primary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {t.hero.title}{" "}
              <span className="text-gradient text-shimmer">{t.hero.titleHighlight}</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-background bg-primary rounded-xl hover:bg-primary-dark shadow-glow hover:shadow-glow-lg transition-all btn-glow"
              >
                {t.hero.explore}
              </Link>
              <Link
                href="/about/"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-foreground rounded-xl border border-border hover:border-primary/40 hover:bg-surface-alt transition-all"
              >
                {t.hero.aboutUs}
              </Link>
            </div>

            <div className="mt-16 flex items-center justify-center gap-10 sm:gap-16">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center animate-hero-in" style={{ animationDelay: `${200 + i * 100}ms` }}>
                  <div className="text-2xl sm:text-3xl font-bold text-gradient font-mono">{stat.value}</div>
                  <div className="text-xs text-muted uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 sm:py-28 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow={t.products.eyebrow}
              title={t.products.title}
              description={t.products.description}
            />
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <RevealOnScroll key={product.id} delay={i * 80}>
                <ProductCard product={product} index={i} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-surface relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow={t.features.eyebrow}
              title={t.features.title}
              description={t.features.description}
            />
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.features.items.map((feature, i) => (
              <RevealOnScroll key={feature.title} delay={i * 60}>
                <div className="glass-card card-hover-glow rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={featureIcons[i]} />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <div className="glass-card rounded-3xl p-10 sm:p-14 relative overflow-hidden card-hover-glow">
              <div className="hero-glow w-64 h-64 bg-primary/10 top-0 start-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.cta.title}</h2>
                <p className="mt-4 text-lg text-muted">{t.cta.subtitle}</p>
                <a
                  href="mailto:koocyton@gmail.com"
                  className="mt-8 inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-background bg-primary rounded-xl hover:bg-primary-dark shadow-glow transition-all btn-glow"
                >
                  koocyton@gmail.com
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
