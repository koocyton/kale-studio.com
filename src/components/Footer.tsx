"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="text-lg font-semibold text-foreground">Kale Studio</span>
            <p className="text-sm text-muted leading-relaxed mt-4">{t.footer.tagline}</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              {t.footer.products}
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {products.map((product) => (
                <li key={product.id}>
                  {product.detailPage ? (
                    <Link href={product.detailPage} className="text-muted hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                  ) : (
                    <a
                      href={product.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transition-colors"
                    >
                      {product.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
              {t.footer.links}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy/" className="text-muted hover:text-primary transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-muted hover:text-primary transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <a href="mailto:koocyton@gmail.com" className="text-muted hover:text-primary transition-colors">
                  koocyton@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Kale Studio. {t.footer.rights}</span>
          <span className="font-mono text-muted/60">kale-studio.com</span>
        </div>
      </div>
    </footer>
  );
}
