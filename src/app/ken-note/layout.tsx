import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KenNote",
  description: "KenNote has been renamed to LoomNote.",
};

export default function KenNoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
