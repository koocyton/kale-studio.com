export type ProductCategory =
  | "Productivity"
  | "Tools"
  | "AI"
  | "Games"
  | "Entertainment";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  playStoreUrl: string;
  detailPage?: string;
  webUrl?: string;
  gradient: string;
  glow: string;
  iconPath: string;
};

export const products: Product[] = [
  {
    id: "loomnote",
    name: "LoomNote",
    tagline: "Weave ideas into clarity",
    description:
      "An elegant note-taking app for creative minds. Capture thoughts, organize with ease, and sync across devices — with a dedicated Web companion.",
    category: "Productivity",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=xyz.onote.gg.ml.app",
    detailPage: "/loom-note/",
    webUrl: "/loomnote-web/",
    gradient: "from-violet-500 to-indigo-600",
    glow: "shadow-violet-500/20",
    iconPath:
      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    id: "sms-forwarder",
    name: "SMS Forwarder",
    tagline: "Messages, anywhere you need them",
    description:
      "Forward SMS to email, webhooks, or other devices in real time. Built for automation workflows with end-to-end encryption and a powerful web dashboard.",
    category: "Tools",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bobog.n.sms_forwarder",
    webUrl: "/sms-forwarder-web/",
    gradient: "from-cyan-400 to-blue-600",
    glow: "shadow-cyan-500/20",
    iconPath:
      "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
  },
  {
    id: "loomix-ai",
    name: "Loomix AI",
    tagline: "Create with intelligent artistry",
    description:
      "Transform photos into stunning cartoon-style artwork powered by AI. Explore creative filters, styles, and tools that bring your imagination to life.",
    category: "AI",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.doopp.kaman.and.chaptoon",
    gradient: "from-fuchsia-500 to-pink-600",
    glow: "shadow-fuchsia-500/20",
    iconPath:
      "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
  },
  {
    id: "brain-fit",
    name: "Brain Fit",
    tagline: "Train your mind, one puzzle at a time",
    description:
      "A collection of brain-training puzzles designed to sharpen memory, logic, and focus. Short sessions that fit your day — fun and scientifically inspired.",
    category: "Games",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.doopp.kaman.and.recall",
    gradient: "from-emerald-400 to-teal-600",
    glow: "shadow-emerald-500/20",
    iconPath:
      "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.845 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.471 1.508 1.333 1.508 2.316V18",
  },
  {
    id: "dramatube",
    name: "DramaTube",
    tagline: "Short dramas, endless stories",
    description:
      "Discover bite-sized drama series from around the world. Curated stories crafted for your schedule — watch anywhere, anytime.",
    category: "Entertainment",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bobog.and.gg.dramabit",
    gradient: "from-orange-400 to-rose-600",
    glow: "shadow-orange-500/20",
    iconPath:
      "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0h-1.5",
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  Productivity: "生产力",
  Tools: "工具",
  AI: "人工智能",
  Games: "益智游戏",
  Entertainment: "娱乐",
};
