import GuttyPageContent from "@/components/GuttyPageContent";

export const metadata = {
  title: "Gutty — Guice + Netty Server Framework",
  description:
    "Lightweight Java server framework combining Guice dependency injection with Netty. Annotation routing, HTTP & WebSocket, optional MyBatis and Redis.",
};

export default function GuttyPage() {
  return <GuttyPageContent />;
}
