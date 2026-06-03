"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLocale,
  locales,
  translations,
  type Locale,
  type Translations,
} from "@/i18n";

const STORAGE_KEY = "kale-studio-locale";

type LanguageContextValue = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string): value is Locale {
  return locales.some((l) => l.code === value);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isLocale(stored)) {
      setLocaleState(stored);
    } else {
      const browser = navigator.language;
      if (browser.startsWith("zh-TW") || browser.startsWith("zh-HK")) {
        setLocaleState("zh-TW");
      } else if (browser.startsWith("zh")) {
        setLocaleState("zh-CN");
      } else if (browser.startsWith("ja")) {
        setLocaleState("ja");
      } else if (browser.startsWith("ko")) {
        setLocaleState("ko");
      } else if (browser.startsWith("fr")) {
        setLocaleState("fr");
      } else if (browser.startsWith("es")) {
        setLocaleState("es");
      } else if (browser.startsWith("ar")) {
        setLocaleState("ar");
      } else if (browser.startsWith("hi")) {
        setLocaleState("hi");
      }
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const dir = locales.find((l) => l.code === locale)?.dir ?? "ltr";

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir, mounted]);

  const value = useMemo(
    () => ({
      locale,
      t: translations[locale],
      setLocale,
      dir,
    }),
    [locale, setLocale, dir]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
