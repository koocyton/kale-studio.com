"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KenNoteRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/loom-note/");
  }, [router]);

  return (
    <section className="flex-1 flex items-center justify-center py-24">
      <p className="text-muted text-sm">Redirecting to LoomNote…</p>
    </section>
  );
}
