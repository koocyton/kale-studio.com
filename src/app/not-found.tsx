import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-24">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-200 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
