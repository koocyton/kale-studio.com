import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Kale Studio — Because of passion.",
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>

        <div className="prose prose-gray max-w-none">
          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 sm:p-12 mb-12">
            <blockquote className="text-2xl font-semibold text-gray-800 italic border-l-4 border-primary pl-6">
              &ldquo;Because of passion&rdquo;
            </blockquote>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to{" "}
            <strong className="text-gray-900">Kale Studio</strong> — a small
            independent software studio dedicated to building beautiful and
            practical applications.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We believe great software comes from genuine passion. Every product
            we create is crafted with attention to detail, respect for user
            privacy, and a commitment to simplicity.
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-gray-600">
              Email:{" "}
              <a
                href="mailto:henry@5163.xyz"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                henry@5163.xyz
              </a>
            </p>
            <p className="text-gray-600 mt-2">
              Website:{" "}
              <a
                href="https://kale-studio.com"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                kale-studio.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
