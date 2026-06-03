export type Locale =
  | "en"
  | "ja"
  | "ko"
  | "fr"
  | "es"
  | "zh-CN"
  | "zh-TW"
  | "ar"
  | "hi";

export type ProductCategoryKey =
  | "Productivity"
  | "Tools"
  | "AI"
  | "Games"
  | "Entertainment";

export type ProductId =
  | "loomnote"
  | "sms-forwarder"
  | "loomix-ai"
  | "brain-fit"
  | "dramatube";

export interface Translations {
  meta: { description: string };
  nav: {
    products: string;
    smsForwarderWeb: string;
    loomNoteWeb: string;
    about: string;
    privacy: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    explore: string;
    aboutUs: string;
  };
  stats: { apps: string; powered: string; passion: string };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    learnMore: string;
    googlePlay: string;
    webAvailable: string;
  };
  categories: Record<ProductCategoryKey, string>;
  productItems: Record<
    ProductId,
    { tagline: string; description: string }
  >;
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  cta: { title: string; subtitle: string };
  footer: {
    tagline: string;
    products: string;
    links: string;
    privacy: string;
    about: string;
    rights: string;
  };
  about: {
    eyebrow: string;
    quote: string;
    p1: string;
    p2: string;
    p3: string;
    contact: string;
    email: string;
    website: string;
  };
  loomnote: {
    back: string;
    category: string;
    tagline: string;
    description: string;
    openWeb: string;
    ctaTitle: string;
    ctaSubtitle: string;
    features: { title: string; desc: string }[];
  };
  playStore: { download: string; label: string };
  language: { label: string };
  notFound: { message: string; back: string };
}

export type LocaleInfo = {
  code: Locale;
  label: string;
  nativeLabel: string;
  dir: "ltr" | "rtl";
};

export const locales: LocaleInfo[] = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", dir: "ltr" },
  { code: "ko", label: "Korean", nativeLabel: "한국어", dir: "ltr" },
  { code: "fr", label: "French", nativeLabel: "Français", dir: "ltr" },
  { code: "es", label: "Spanish", nativeLabel: "Español", dir: "ltr" },
  { code: "zh-CN", label: "Chinese (Simplified)", nativeLabel: "简体中文", dir: "ltr" },
  { code: "zh-TW", label: "Chinese (Traditional)", nativeLabel: "繁體中文", dir: "ltr" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", dir: "ltr" },
];

export const defaultLocale: Locale = "en";
