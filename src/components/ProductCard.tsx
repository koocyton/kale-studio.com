import Link from "next/link";
import type { Product } from "@/data/products";
import { categoryLabels } from "@/data/products";
import ProductIcon from "./ProductIcon";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const primaryHref = product.detailPage ?? product.playStoreUrl;
  const isExternal = !product.detailPage;

  const cardContent = (
    <>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-white/[0.03] to-transparent pointer-events-none" />

      <div className="flex items-start justify-between gap-4 mb-5">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white shadow-lg ${product.glow} group-hover:scale-105 transition-transform duration-300`}
        >
          <ProductIcon path={product.iconPath} />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-wider text-muted px-2.5 py-1 rounded-full border border-border bg-surface-alt/50">
          {categoryLabels[product.category]}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary-light transition-colors">
        {product.name}
      </h3>
      <p className="text-xs font-medium text-primary/80 mb-3">{product.tagline}</p>
      <p className="text-sm text-muted leading-relaxed line-clamp-3">
        {product.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
          {isExternal ? "Get on Google Play" : "Learn more"}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        {product.webUrl && (
          <span className="text-xs text-muted/70">· Web 版可用</span>
        )}
      </div>
    </>
  );

  const className =
    "group relative glass-card rounded-2xl p-6 hover:border-primary/30 hover:shadow-glow transition-all duration-300 block h-full";

  if (isExternal) {
    return (
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
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
