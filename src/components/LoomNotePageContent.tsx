"use client";

import Link from "next/link";
import Image from "next/image";
import PlayStoreButton from "@/components/PlayStoreButton";
import TechBackground from "@/components/TechBackground";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

const LOOMNOTE_PLAY_STORE =
  "https://play.google.com/store/apps/details?id=xyz.onote.gg.ml.app";

const featureIcons = [
  "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776",
  "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z",
  "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
];

export default function LoomNotePageContent() {
  const { t } = useLanguage();

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
              {t.loomnote.back}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-violet-500/30 shadow-lg shadow-violet-500/20">
                <Image
                  src="/app-icons/loomnote.png"
                  alt="LoomNote"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
                {t.loomnote.category}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">LoomNote</h1>
            <p className="mt-2 text-lg font-medium text-violet-300/80">{t.loomnote.tagline}</p>
            <p className="mt-6 text-lg text-muted leading-relaxed">{t.loomnote.description}</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <PlayStoreButton href={LOOMNOTE_PLAY_STORE} />
              <a
                href="/loomnote-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-surface-alt transition-all"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                {t.loomnote.openWeb}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.loomnote.features.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 60}>
                <div className="glass-card card-hover-glow rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-300 mb-4">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.loomnote.ctaTitle}</h2>
            <p className="text-muted mb-8">{t.loomnote.ctaSubtitle}</p>
            <PlayStoreButton href={LOOMNOTE_PLAY_STORE} className="mx-auto" />
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
