"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <section className="flex-1 flex items-center justify-center py-24 relative">
      <div className="absolute inset-0 bg-grid bg-grid-mask opacity-20 pointer-events-none" />
      <div className="relative text-center animate-hero-in">
        <p className="text-8xl font-bold font-mono text-gradient mb-4">404</p>
        <p className="text-xl text-muted mb-8">{t.notFound.message}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-background bg-primary rounded-xl hover:bg-primary-dark shadow-glow transition-all btn-glow"
        >
          {t.notFound.back}
        </Link>
      </div>
    </section>
  );
}
