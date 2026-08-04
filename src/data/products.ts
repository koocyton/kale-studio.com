export type ProductCategory =
  | "Productivity"
  | "Tools"
  | "AI"
  | "Games"
  | "Entertainment";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  playStoreUrl: string;
  downloadSource?: "googlePlay" | "github";
  detailPage?: string;
  webUrl?: string;
  gradient: string;
  glow: string;
  icon: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "peckoku",
    name: "Peckoku",
    category: "Games",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bobog.n.cock_pluzzle",
    gradient: "from-yellow-400 to-amber-600",
    glow: "shadow-amber-500/20",
    icon: "/app-icons/peckoku.webp",
  },
  {
    id: "loomnote",
    name: "LoomNote",
    category: "Productivity",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=xyz.onote.gg.ml.app",
    detailPage: "/loom-note/",
    webUrl: "/loomnote-web/",
    gradient: "from-violet-500 to-indigo-600",
    glow: "shadow-violet-500/20",
    icon: "/app-icons/loomnote.png",
  },
  {
    id: "sms-forwarder",
    name: "SMS Forwarder",
    category: "Tools",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bobog.n.sms_forwarder",
    webUrl: "/sms-forwarder-web/",
    gradient: "from-cyan-400 to-blue-600",
    glow: "shadow-cyan-500/20",
    icon: "/app-icons/sms-forwarder.png",
  },
  {
    id: "sms-forwarder-pro",
    name: "SMS Forwarder Pro",
    category: "Tools",
    playStoreUrl:
      "https://github.com/koocyton/sms_forwarder_pro/releases/download/release/sms_forwarder_last.apk",
    downloadSource: "github",
    detailPage: "/sms-forwarder-pro/",
    webUrl: "/sms-forwarder-web/",
    gradient: "from-cyan-400 to-blue-600",
    glow: "shadow-cyan-500/20",
    icon: "/app-icons/sms-forwarder.png",
    badge: "Pro",
  },
  {
    id: "loomix-ai",
    name: "Loomix AI",
    category: "AI",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.doopp.kaman.and.chaptoon",
    gradient: "from-fuchsia-500 to-pink-600",
    glow: "shadow-fuchsia-500/20",
    icon: "/app-icons/loomix-ai.png",
  },
  {
    id: "brain-fit",
    name: "Brain Fit",
    category: "Games",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.doopp.kaman.and.recall",
    gradient: "from-emerald-400 to-teal-600",
    glow: "shadow-emerald-500/20",
    icon: "/app-icons/brain-fit.png",
  },
  {
    id: "arrow-puzzle",
    name: "Arrow Puzzle",
    category: "Games",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bobog.gg.arrow_game",
    gradient: "from-amber-400 to-orange-600",
    glow: "shadow-amber-500/20",
    icon: "/app-icons/arrow-puzzle.webp",
  },
  {
    id: "block-hero",
    name: "Block Hero",
    category: "Games",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bobog.gg.block_hero",
    gradient: "from-sky-400 to-indigo-600",
    glow: "shadow-sky-500/20",
    icon: "/app-icons/block-hero.webp",
  },
  {
    id: "dramatube",
    name: "DramaTube",
    category: "Entertainment",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bobog.and.gg.dramabit",
    gradient: "from-orange-400 to-rose-600",
    glow: "shadow-orange-500/20",
    icon: "/app-icons/dramatube.png",
  },
  {
    id: "gutty",
    name: "Gutty",
    category: "Tools",
    playStoreUrl: "https://github.com/koocyton/gutty",
    downloadSource: "github",
    detailPage: "/gutty/",
    gradient: "from-sky-400 to-indigo-600",
    glow: "shadow-sky-500/20",
    icon: "/app-icons/gutty.png",
    badge: "OSS",
  },
  {
    id: "reactor-guice",
    name: "reactor-guice",
    category: "Tools",
    playStoreUrl: "https://github.com/koocyton/reactor-guice",
    downloadSource: "github",
    detailPage: "/reactor-guice/",
    gradient: "from-violet-500 to-indigo-600",
    glow: "shadow-violet-500/20",
    icon: "/app-icons/reactor-guice.png",
    badge: "OSS",
  },
];
