import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Kale Studio — Because of passion.",
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid bg-grid-mask opacity-30 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          About
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-8">Kale Studio</h1>

        <div className="prose-dark space-y-8">
          <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="hero-glow w-48 h-48 bg-primary/10 -top-10 -right-10" />
            <blockquote className="relative text-xl sm:text-2xl font-semibold text-foreground italic border-l-2 border-primary pl-6">
              &ldquo;Because of passion&rdquo;
            </blockquote>
          </div>

          <p className="text-lg leading-relaxed">
            欢迎来到 <strong>Kale Studio</strong> — 一家独立软件工作室，
            专注于打造优雅且实用的移动与 Web 应用。
          </p>

          <p className="text-lg leading-relaxed">
            我们相信，优秀的软件源于真正的热情。每一款产品都经过精心打磨，
            注重用户体验、尊重隐私，并追求简洁之美。
          </p>

          <p className="text-lg leading-relaxed">
            从笔记工具 LoomNote、短信转发 SMS Forwarder，到 AI 创作 Loomix AI、
            益智游戏 Brain Fit 与短剧应用 DramaTube — 我们持续探索技术的边界，
            为用户带来更有价值的数字体验。
          </p>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:henry@5163.xyz" className="font-medium">
                henry@5163.xyz
              </a>
            </p>
            <p className="mt-2">
              Website:{" "}
              <a href="https://kale-studio.com" className="font-medium">
                kale-studio.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
