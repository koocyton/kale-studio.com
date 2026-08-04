import ReactorGuicePageContent from "@/components/ReactorGuicePageContent";

export const metadata = {
  title: "reactor-guice — Guice + Reactor-Netty Framework",
  description:
    "Reactive Java microservice framework combining Guice with Reactor-Netty. Annotation routing, Mono handlers, WebSocket, HTTPS, and optional API gateway.",
};

export default function ReactorGuicePage() {
  return <ReactorGuicePageContent />;
}
