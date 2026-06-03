"use client";

import { useLanguage } from "@/contexts/LanguageContext";

type PlayStoreButtonProps = {
  href: string;
  className?: string;
};

export default function PlayStoreButton({ href, className = "" }: PlayStoreButtonProps) {
  const { t } = useLanguage();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-gray-900 font-medium text-sm hover:bg-gray-100 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] btn-glow ${className}`}
    >
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.005 1.005 0 01-.61-.92V2.734a1.005 1.005 0 01.609-.92zm2.983 1.365l9.363 5.422-2.316 2.316-7.047-7.738zm0 17.642l7.047-7.738 2.316 2.316-9.363 5.422zM15.093 11.609l2.316-2.316 3.678 2.128a1.005 1.005 0 010 1.738l-3.678 2.128-2.316-2.316L17.5 12l-2.407-.391z" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wide opacity-70">{t.playStore.download}</span>
        <span>{t.playStore.label}</span>
      </span>
    </a>
  );
}
