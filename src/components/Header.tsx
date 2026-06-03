"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/sms-forwarder-web/", label: "SMS Forwarder Web", external: true },
  { href: "/loomnote-web/", label: "LoomNote Web", external: true },
  { href: "/about/", label: "About" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold text-sm group-hover:shadow-glow transition-shadow">
              K
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 blur-md transition-opacity -z-10" />
            </div>
            <span className="text-lg font-semibold text-foreground tracking-tight">
              Kale Studio
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-surface-alt transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-surface-alt transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-alt transition-colors text-muted"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-surface-alt transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-surface-alt transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/privacy-policy/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-surface-alt transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
