import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
                K
              </div>
              <span className="text-lg font-bold text-white">Kale Studio</span>
            </div>
            <p className="text-sm leading-relaxed">
              Building beautiful & useful apps with passion.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ken-note/"
                  className="hover:text-white transition-colors"
                >
                  KenNote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy/"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="mailto:henry@5163.xyz"
                  className="hover:text-white transition-colors"
                >
                  henry@5163.xyz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Kale Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
