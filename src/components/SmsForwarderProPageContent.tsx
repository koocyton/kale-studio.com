"use client";

import Link from "next/link";
import Image from "next/image";
import TechBackground from "@/components/TechBackground";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  SMS_FORWARDER_PRO_APK,
  SMS_FORWARDER_PRO_SHOTS,
  SMS_FORWARDER_PRO_WEB,
  getSmsForwarderProListing,
} from "@/data/smsForwarderProContent";

export default function SmsForwarderProPageContent() {
  const { locale } = useLanguage();
  const c = getSmsForwarderProListing(locale);

  return (
    <>
      <section className="relative overflow-hidden">
        <TechBackground />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="animate-hero-in">
            <Link
              href="/#products"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors mb-8"
            >
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {c.back}
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[22%] overflow-hidden ring-2 ring-cyan-400/30 shadow-lg shadow-cyan-500/20 shrink-0 bg-white">
                <Image
                  src="/sms-forwarder-pro/icon.webp"
                  alt="SMS Forwarder Pro"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  unoptimized
                  priority
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 text-xs font-medium">
                    {c.category}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide text-white bg-gradient-to-br from-amber-400 to-orange-500">
                    Pro
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  SMS Forwarder Pro
                </h1>
                <p className="mt-1 text-lg text-cyan-300/80">{c.subtitle}</p>
                <p className="mt-2 text-sm text-muted">{c.developer}</p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                  <span>{c.downloads}</span>
                  <span>{c.contentRating}</span>
                  <span>{c.inAppPurchases}</span>
                  <span>{c.updatedOn}</span>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={SMS_FORWARDER_PRO_APK}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-gray-950 font-semibold text-sm hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/25 hover:scale-[1.02]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {c.downloadApk}
                  </a>
                  <a
                    href={SMS_FORWARDER_PRO_WEB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-surface-alt transition-all"
                  >
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    {c.openWeb}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-xl font-semibold text-foreground mb-5">{c.screenshotsTitle}</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {SMS_FORWARDER_PRO_SHOTS.map((src, i) => (
              <RevealOnScroll key={src} delay={i * 40}>
                <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-lg shadow-black/20">
                  <Image
                    src={src}
                    alt={`SMS Forwarder Pro screenshot ${i + 1}`}
                    width={666}
                    height={1184}
                    className="w-full h-auto block"
                    unoptimized
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">{c.aboutTitle}</h2>
              <p className="text-muted leading-relaxed">{c.about}</p>
              <p className="mt-4 text-amber-200/90 leading-relaxed border-s-2 border-amber-400/50 ps-4">
                {c.caution}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">{c.howToTitle}</h2>
              <ol className="space-y-3 list-decimal list-inside text-muted leading-relaxed">
                {c.howTo.map((step) => (
                  <li key={step} className="ps-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">{c.featuresTitle}</h2>
              <ul className="space-y-2.5">
                {c.features.map((f) => (
                  <li key={f} className="flex gap-3 text-muted leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted/80 leading-relaxed">{c.note}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">{c.permissionsTitle}</h2>
              <p className="text-sm text-muted mb-4">{c.permissionsIntro}</p>
              <div className="space-y-4">
                {c.permissions.map((p, i) => (
                  <div key={p.title} className="glass-card rounded-xl p-4">
                    <p className="text-sm font-medium text-foreground">
                      {i + 1}. {p.title}
                    </p>
                    <p className="mt-1 text-sm text-muted">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">{c.privacyTitle}</h2>
              <ul className="space-y-2.5">
                {c.privacy.map((item) => (
                  <li key={item} className="flex gap-3 text-muted leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">{c.dataSafetyTitle}</h2>
              <p className="text-sm text-muted mb-4 leading-relaxed">{c.dataSafetyIntro}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.dataSafety.map((item) => (
                  <div key={item.title} className="glass-card rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">{c.whatsNewTitle}</h2>
              <ol className="space-y-2 list-decimal list-inside text-muted leading-relaxed">
                {c.whatsNew.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">{c.supportTitle}</h2>
              <div className="glass-card rounded-xl p-5 space-y-3 text-sm">
                <div>
                  <p className="text-muted">{c.supportEmailLabel}</p>
                  <a
                    href={`mailto:${c.supportEmail}`}
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    {c.supportEmail}
                  </a>
                </div>
                <div>
                  <p className="text-muted">{c.supportPhoneLabel}</p>
                  <a
                    href={`tel:${c.supportPhone}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {c.supportPhone}
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="text-center pt-4">
              <a
                href={SMS_FORWARDER_PRO_APK}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-gray-950 font-semibold text-sm hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {c.downloadApk}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
