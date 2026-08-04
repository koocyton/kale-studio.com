"use client";

import Link from "next/link";
import Image from "next/image";
import TechBackground from "@/components/TechBackground";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  GUTTY_COORDINATE,
  GUTTY_GITHUB,
  GUTTY_MAVEN,
  getGuttyListing,
} from "@/data/guttyContent";

const layerIcons = [
  "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
  "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z",
  "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
];

const featureIcons = [
  "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  "M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z",
  "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  "M21 7.5l-2.4-1.8M3 7.5l2.4-1.8m15.6 1.8v9a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 16.5v-9m18 0L12 12.75 3 7.5",
];

export default function GuttyPageContent() {
  const { locale } = useLanguage();
  const c = getGuttyListing(locale);

  return (
    <>
      <section className="relative overflow-hidden">
        <TechBackground />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl animate-hero-in">
            <Link
              href="/#products"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors mb-8"
            >
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {c.back}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-sky-500/30 shadow-lg shadow-sky-500/20">
                <Image
                  src="/app-icons/gutty.png"
                  alt="Gutty"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  unoptimized
                  priority
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-medium">
                  {c.category}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide text-white bg-gradient-to-br from-sky-400 to-indigo-500">
                  OSS
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Gutty</h1>
            <p className="mt-2 text-lg font-medium text-sky-300/80">{c.tagline}</p>
            <p className="mt-6 text-lg text-muted leading-relaxed">{c.description}</p>

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface-alt/80 font-mono text-xs text-primary">
              {GUTTY_COORDINATE}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={GUTTY_MAVEN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-primary-dark shadow-glow transition-all btn-glow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                </svg>
                {c.maven}
              </a>
              <a
                href={GUTTY_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-surface-alt transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                {c.github}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{c.architectureTitle}</h2>
              <p className="mt-3 text-muted leading-relaxed">{c.architectureDesc}</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {c.layers.map((layer, i) => (
              <RevealOnScroll key={layer.title} delay={i * 60}>
                <div className="glass-card card-hover-glow rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-300 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={layerIcons[i]} />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{layer.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{layer.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-5">{c.flowTitle}</h2>
              <ol className="space-y-3">
                {c.flowSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 glass-card rounded-xl p-4 text-sm text-muted leading-relaxed"
                  >
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="font-mono text-[13px] pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-5">{c.stackTitle}</h2>
              <div className="space-y-3">
                {c.stack.map((item) => (
                  <div
                    key={item.name}
                    className="glass-card rounded-xl px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-foreground">{item.name}</span>
                    <span className="text-sm text-muted text-end">{item.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-surface relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">{c.featuresTitle}</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.features.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 50}>
                <div className="glass-card card-hover-glow rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-300 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={featureIcons[i]} />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">{c.ctaTitle}</h2>
            <p className="text-muted mb-8">{c.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={GUTTY_MAVEN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-background bg-primary rounded-xl hover:bg-primary-dark shadow-glow transition-all btn-glow"
              >
                {c.maven}
              </a>
              <a
                href={GUTTY_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-foreground rounded-xl border border-border hover:border-primary/40 hover:bg-surface-alt transition-all"
              >
                {c.github}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
