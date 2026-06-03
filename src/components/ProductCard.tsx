"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import type { ProductId } from "@/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t } = useLanguage();
  const primaryHref = product.detailPage ?? product.playStoreUrl;
  const isExternal = !product.detailPage;
  const item = t.productItems[product.id as ProductId];
  const category = t.categories[product.category];

  const cardContent = (
    <>
      <div className="card-shine absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-white/[0.04] to-transparent pointer-events-none" />

      <div className="flex items-start justify-between gap-4 mb-5">
        <div
          className={`relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg ${product.glow} group-hover:scale-105 group-hover:shadow-glow transition-all duration-300 ring-1 ring-white/10`}
        >
          <Image
            src={product.icon}
            alt={product.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-wider text-muted px-2.5 py-1 rounded-full border border-border bg-surface-alt/50">
          {category}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-light transition-colors">
        {product.name}
      </h3>
      <p className="text-xs font-medium text-primary/80 mb-3">{item.tagline}</p>
      <p className="text-sm text-muted leading-relaxed line-clamp-3">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
          {isExternal ? t.products.googlePlay : t.products.learnMore}
          <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        {product.webUrl && (
          <span className="text-xs text-muted/70">· {t.products.webAvailable}</span>
        )}
      </div>
    </>
  );

  const className =
    "group relative glass-card card-hover-glow rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 block h-full";

  if (isExternal) {
    return (
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={primaryHref} className={className}>
      {cardContent}
    </Link>
  );
}
