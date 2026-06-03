import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-24 relative">
      <div className="absolute inset-0 bg-grid bg-grid-mask opacity-20 pointer-events-none" />
      <div className="relative text-center">
        <p className="text-8xl font-bold font-mono text-gradient mb-4">404</p>
        <p className="text-xl text-muted mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-background bg-primary rounded-xl hover:bg-primary-dark shadow-glow transition-all"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
