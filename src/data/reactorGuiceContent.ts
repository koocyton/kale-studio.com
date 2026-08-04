import type { Locale } from "@/i18n";

export const REACTOR_GUICE_MAVEN =
  "https://mvnrepository.com/artifact/com.doopp/reactor-guice";
export const REACTOR_GUICE_GITHUB = "https://github.com/koocyton/reactor-guice";
export const REACTOR_GUICE_COORDINATE = "com.doopp:reactor-guice";

export type ReactorGuiceListing = {
  back: string;
  category: string;
  tagline: string;
  description: string;
  maven: string;
  github: string;
  architectureTitle: string;
  architectureDesc: string;
  layers: { title: string; desc: string }[];
  flowTitle: string;
  flowSteps: string[];
  stackTitle: string;
  stack: { name: string; role: string }[];
  featuresTitle: string;
  features: { title: string; desc: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
};

const en: ReactorGuiceListing = {
  back: "All Products",
  category: "Open Source",
  tagline: "Guice meets Reactor-Netty",
  description:
    "A reactive Java microservice framework combining Google Guice with Reactor-Netty. Annotation routing, Mono handlers, WebSocket, static files, HTTPS, and an optional API gateway — reflection only at startup.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "Reactive server architecture",
  architectureDesc:
    "Reactor-Netty owns non-blocking I/O. Guice owns wiring. Publishers route HTTP, WebSocket, static assets, or gateway traffic. Controllers return Mono.",
  layers: [
    {
      title: "Application",
      desc: "@Controller and @Service with JAX-RS paths — handlers return Mono for reactive composition.",
    },
    {
      title: "Framework",
      desc: "ReactorGuiceServer scans packages, builds Guice injector, registers routes, then launch().",
    },
    {
      title: "Publishers",
      desc: "HandlePublisher, WebsocketPublisher, StaticFilePublisher, and ApiGatewayPublisher share one HTTP server.",
    },
    {
      title: "Infra",
      desc: "Optional MyBatis, Redis, JSON converters, templates, HTTPS, CORS, and URI filters.",
    },
  ],
  flowTitle: "Boot sequence",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → scan Controllers / Services",
    "setHttpMessageConverter, addResource, addFilter, setHttps…",
    "launch() → Reactor-Netty HttpServer with reactive publishers",
  ],
  stackTitle: "Core stack",
  stack: [
    { name: "Guice", role: "Dependency injection & modules" },
    { name: "Reactor-Netty", role: "Non-blocking HTTP / WebSocket" },
    { name: "Project Reactor", role: "Mono / reactive pipelines" },
    { name: "JAX-RS API", role: "Familiar routing annotations" },
  ],
  featuresTitle: "Capabilities",
  features: [
    {
      title: "Reactive handlers",
      desc: "Controller methods return Mono — compose remote calls, redirects, and Protobuf without blocking threads.",
    },
    {
      title: "Annotation routing",
      desc: "Startup scan wires @GET/@POST/@PUT/@DELETE/@Path; no manual route tables.",
    },
    {
      title: "API gateway mode",
      desc: "Optional ApiGatewayDispatcher proxies HTTP and WebSocket as a lightweight gateway.",
    },
    {
      title: "HTTP + WebSocket",
      desc: "Same server for REST, real-time sockets (incl. Sec-WebSocket-Protocol), and static index.html.",
    },
    {
      title: "HTTPS & CORS",
      desc: "JKS-based HTTPS and optional cross-origin headers for browser clients.",
    },
    {
      title: "Maven ready",
      desc: "Published as com.doopp:reactor-guice on Maven Central.",
    },
  ],
  ctaTitle: "Start with reactor-guice",
  ctaSubtitle: "Add the dependency and launch a reactive Guice + Reactor-Netty service in a few lines.",
};

const ja: ReactorGuiceListing = {
  back: "すべての製品",
  category: "オープンソース",
  tagline: "Guice と Reactor-Netty が出会うとき",
  description:
    "Google Guice と Reactor-Netty を組み合わせたリアクティブ Java マイクロサービスフレームワーク。アノテーションルーティング、Mono ハンドラ、WebSocket、静的ファイル、HTTPS、API ゲートウェイ。反射は起動時のみ。",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "リアクティブサーバアーキテクチャ",
  architectureDesc:
    "非同期 I/O は Reactor-Netty、配線は Guice、ルーティングは Publisher。Controller は Mono を返す。",
  layers: [
    { title: "アプリケーション", desc: "@Controller / @Service — JAX-RS パス、ハンドラは Mono を返す。" },
    { title: "フレームワーク", desc: "パッケージ走査、Guice Injector、ルート登録後に launch()。" },
    { title: "Publisher", desc: "Handle / Websocket / StaticFile / ApiGateway が同一 HTTP サーバを共有。" },
    { title: "インフラ", desc: "MyBatis、Redis、JSON、テンプレート、HTTPS、CORS、URI Filter。" },
  ],
  flowTitle: "起動フロー",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → Controller / Service を走査",
    "setHttpMessageConverter、addResource、addFilter、setHttps…",
    "launch() → Reactor-Netty HttpServer",
  ],
  stackTitle: "コアスタック",
  stack: [
    { name: "Guice", role: "依存性注入とモジュール" },
    { name: "Reactor-Netty", role: "ノンブロッキング HTTP / WebSocket" },
    { name: "Project Reactor", role: "Mono / リアクティブパイプライン" },
    { name: "JAX-RS API", role: "馴染みのあるルーティング注釈" },
  ],
  featuresTitle: "機能",
  features: [
    { title: "リアクティブハンドラ", desc: "Controller は Mono を返す。リモート呼び出しやリダイレクトをノンブロッキングで。" },
    { title: "アノテーションルーティング", desc: "起動時に @GET/@POST/@PUT/@DELETE/@Path を配線。" },
    { title: "API ゲートウェイ", desc: "ApiGatewayDispatcher で HTTP / WebSocket をプロキシ可能。" },
    { title: "HTTP + WebSocket", desc: "REST、リアルタイム、静的 index.html を同一サーバで。" },
    { title: "HTTPS & CORS", desc: "JKS による HTTPS と任意の CORS ヘッダ。" },
    { title: "Maven 対応", desc: "Maven Central の com.doopp:reactor-guice。" },
  ],
  ctaTitle: "reactor-guice を始める",
  ctaSubtitle: "依存関係を追加し、数行でリアクティブな Guice + Reactor-Netty サーバを起動。",
};

const ko: ReactorGuiceListing = {
  back: "모든 제품",
  category: "오픈 소스",
  tagline: "Guice가 Reactor-Netty를 만날 때",
  description:
    "Google Guice와 Reactor-Netty를 결합한 리액티브 Java 마이크로서비스 프레임워크. 어노테이션 라우팅, Mono 핸들러, WebSocket, 정적 파일, HTTPS, API 게이트웨이. 반사는 시작 시에만.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "리액티브 서버 아키텍처",
  architectureDesc:
    "비동기 I/O는 Reactor-Netty, 배선은 Guice, 라우팅은 Publisher. Controller는 Mono를 반환.",
  layers: [
    { title: "애플리케이션", desc: "@Controller / @Service — JAX-RS 경로, 핸들러는 Mono 반환." },
    { title: "프레임워크", desc: "패키지 스캔, Guice Injector, 라우트 등록 후 launch()." },
    { title: "Publisher", desc: "Handle / Websocket / StaticFile / ApiGateway가 하나의 HTTP 서버를 공유." },
    { title: "인프라", desc: "MyBatis, Redis, JSON, 템플릿, HTTPS, CORS, URI 필터." },
  ],
  flowTitle: "부팅 순서",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → Controller / Service 스캔",
    "setHttpMessageConverter, addResource, addFilter, setHttps…",
    "launch() → Reactor-Netty HttpServer",
  ],
  stackTitle: "핵심 스택",
  stack: [
    { name: "Guice", role: "의존성 주입 및 모듈" },
    { name: "Reactor-Netty", role: "논블로킹 HTTP / WebSocket" },
    { name: "Project Reactor", role: "Mono / 리액티브 파이프라인" },
    { name: "JAX-RS API", role: "익숙한 라우팅 어노테이션" },
  ],
  featuresTitle: "기능",
  features: [
    { title: "리액티브 핸들러", desc: "Controller는 Mono를 반환. 원격 호출과 리다이렉트를 논블로킹으로." },
    { title: "어노테이션 라우팅", desc: "시작 시 @GET/@POST/@PUT/@DELETE/@Path 배선." },
    { title: "API 게이트웨이", desc: "ApiGatewayDispatcher로 HTTP / WebSocket 프록시." },
    { title: "HTTP + WebSocket", desc: "REST, 실시간, 정적 index.html을 한 서버에서." },
    { title: "HTTPS & CORS", desc: "JKS HTTPS와 선택적 CORS 헤더." },
    { title: "Maven 지원", desc: "Maven Central의 com.doopp:reactor-guice." },
  ],
  ctaTitle: "reactor-guice로 시작하기",
  ctaSubtitle: "의존성을 추가하고 몇 줄로 리액티브 Guice + Reactor-Netty 서비스를 띄우세요.",
};

const fr: ReactorGuiceListing = {
  back: "Tous les produits",
  category: "Open Source",
  tagline: "Guice rencontre Reactor-Netty",
  description:
    "Framework de microservices Java réactif associant Guice et Reactor-Netty. Routage par annotations, handlers Mono, WebSocket, fichiers statiques, HTTPS et passerelle API optionnelle — réflexion uniquement au démarrage.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "Architecture serveur réactive",
  architectureDesc:
    "Reactor-Netty gère les I/O non bloquantes, Guice le câblage, les Publishers le routage. Les Controllers renvoient Mono.",
  layers: [
    { title: "Application", desc: "@Controller et @Service — chemins JAX-RS, handlers en Mono." },
    { title: "Framework", desc: "Scan des packages, Injector Guice, routes, puis launch()." },
    { title: "Publishers", desc: "Handle, Websocket, StaticFile et ApiGateway sur le même HttpServer." },
    { title: "Infra", desc: "MyBatis, Redis, JSON, templates, HTTPS, CORS et filtres URI." },
  ],
  flowTitle: "Séquence de démarrage",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → scan Controllers / Services",
    "setHttpMessageConverter, addResource, addFilter, setHttps…",
    "launch() → Reactor-Netty HttpServer",
  ],
  stackTitle: "Stack principale",
  stack: [
    { name: "Guice", role: "Injection de dépendances" },
    { name: "Reactor-Netty", role: "HTTP / WebSocket non bloquant" },
    { name: "Project Reactor", role: "Mono / pipelines réactifs" },
    { name: "JAX-RS API", role: "Annotations de routage familières" },
  ],
  featuresTitle: "Capacités",
  features: [
    { title: "Handlers réactifs", desc: "Les Controllers renvoient Mono — appels distants et redirections sans bloquer." },
    { title: "Routage par annotations", desc: "Scan au démarrage pour @GET/@POST/@PUT/@DELETE/@Path." },
    { title: "Mode passerelle API", desc: "ApiGatewayDispatcher proxy HTTP et WebSocket." },
    { title: "HTTP + WebSocket", desc: "REST, temps réel et index.html statique sur un serveur." },
    { title: "HTTPS & CORS", desc: "HTTPS via JKS et en-têtes CORS optionnels." },
    { title: "Maven", desc: "Publié comme com.doopp:reactor-guice sur Maven Central." },
  ],
  ctaTitle: "Démarrer avec reactor-guice",
  ctaSubtitle: "Ajoutez la dépendance et lancez un service Guice + Reactor-Netty réactif en quelques lignes.",
};

const es: ReactorGuiceListing = {
  back: "Todos los productos",
  category: "Código abierto",
  tagline: "Guice encuentra Reactor-Netty",
  description:
    "Framework de microservicios Java reactivo que une Guice con Reactor-Netty. Enrutado por anotaciones, handlers Mono, WebSocket, estáticos, HTTPS y gateway API opcional — reflexión solo al arrancar.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "Arquitectura de servidor reactiva",
  architectureDesc:
    "Reactor-Netty maneja I/O no bloqueante, Guice el cableado, Publishers el enrutado. Los Controllers devuelven Mono.",
  layers: [
    { title: "Aplicación", desc: "@Controller y @Service — rutas JAX-RS, handlers en Mono." },
    { title: "Framework", desc: "Escaneo de paquetes, Injector Guice, rutas y launch()." },
    { title: "Publishers", desc: "Handle, Websocket, StaticFile y ApiGateway en el mismo HttpServer." },
    { title: "Infra", desc: "MyBatis, Redis, JSON, plantillas, HTTPS, CORS y filtros URI." },
  ],
  flowTitle: "Secuencia de arranque",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → escanear Controllers / Services",
    "setHttpMessageConverter, addResource, addFilter, setHttps…",
    "launch() → Reactor-Netty HttpServer",
  ],
  stackTitle: "Stack principal",
  stack: [
    { name: "Guice", role: "Inyección de dependencias" },
    { name: "Reactor-Netty", role: "HTTP / WebSocket no bloqueante" },
    { name: "Project Reactor", role: "Mono / pipelines reactivos" },
    { name: "JAX-RS API", role: "Anotaciones de enrutado familiares" },
  ],
  featuresTitle: "Capacidades",
  features: [
    { title: "Handlers reactivos", desc: "Los Controllers devuelven Mono — llamadas remotas y redirecciones sin bloquear." },
    { title: "Enrutado por anotaciones", desc: "Escaneo al arrancar para @GET/@POST/@PUT/@DELETE/@Path." },
    { title: "Modo API gateway", desc: "ApiGatewayDispatcher hace proxy de HTTP y WebSocket." },
    { title: "HTTP + WebSocket", desc: "REST, tiempo real e index.html estático en un servidor." },
    { title: "HTTPS & CORS", desc: "HTTPS con JKS y cabeceras CORS opcionales." },
    { title: "Maven", desc: "Publicado como com.doopp:reactor-guice en Maven Central." },
  ],
  ctaTitle: "Empieza con reactor-guice",
  ctaSubtitle: "Añade la dependencia y levanta un servicio Guice + Reactor-Netty reactivo en pocas líneas.",
};

const zhCN: ReactorGuiceListing = {
  back: "所有产品",
  category: "开源",
  tagline: "当 Guice 遇上 Reactor-Netty",
  description:
    "基于 Google Guice 与 Reactor-Netty 的响应式 Java 微服务框架。注解路由、Mono 处理器、WebSocket、静态资源、HTTPS，以及可选 API 网关 — 仅在启动时使用反射。",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "响应式服务端架构",
  architectureDesc:
    "Reactor-Netty 负责非阻塞 I/O，Guice 负责装配，Publisher 负责分发。Controller 返回 Mono。",
  layers: [
    { title: "应用层", desc: "@Controller / @Service — JAX-RS 路径，处理器返回 Mono。" },
    { title: "框架层", desc: "扫包、构建 Guice Injector、注册路由，再 launch()。" },
    { title: "Publisher", desc: "Handle / Websocket / StaticFile / ApiGateway 共享同一 HTTP 服务。" },
    { title: "基础设施", desc: "可选 MyBatis、Redis、JSON、模板、HTTPS、CORS、URI Filter。" },
  ],
  flowTitle: "启动流程",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → 扫描 Controller / Service",
    "setHttpMessageConverter、addResource、addFilter、setHttps…",
    "launch() → Reactor-Netty HttpServer",
  ],
  stackTitle: "核心技术栈",
  stack: [
    { name: "Guice", role: "依赖注入与模块" },
    { name: "Reactor-Netty", role: "非阻塞 HTTP / WebSocket" },
    { name: "Project Reactor", role: "Mono / 响应式流水线" },
    { name: "JAX-RS API", role: "熟悉的路由注解" },
  ],
  featuresTitle: "能力",
  features: [
    { title: "响应式处理器", desc: "Controller 返回 Mono，可组合远程调用、重定向与 Protobuf，不阻塞线程。" },
    { title: "注解路由", desc: "启动扫包配置 @GET/@POST/@PUT/@DELETE/@Path，无需手写路由表。" },
    { title: "API 网关模式", desc: "可选 ApiGatewayDispatcher，代理 HTTP 与 WebSocket。" },
    { title: "HTTP + WebSocket", desc: "同一服务处理 REST、实时长连接与静态 index.html。" },
    { title: "HTTPS 与 CORS", desc: "基于 JKS 的 HTTPS，以及可选跨域响应头。" },
    { title: "Maven 可用", desc: "已发布至 Maven Central：com.doopp:reactor-guice。" },
  ],
  ctaTitle: "用 reactor-guice 起步",
  ctaSubtitle: "引入依赖，几行代码即可拉起响应式 Guice + Reactor-Netty 服务。",
};

const zhTW: ReactorGuiceListing = {
  back: "所有產品",
  category: "開源",
  tagline: "當 Guice 遇上 Reactor-Netty",
  description:
    "基於 Google Guice 與 Reactor-Netty 的響應式 Java 微服務框架。註解路由、Mono 處理器、WebSocket、靜態資源、HTTPS，以及可選 API 閘道 — 僅在啟動時使用反射。",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "響應式服務端架構",
  architectureDesc:
    "Reactor-Netty 負責非阻塞 I/O，Guice 負責組裝，Publisher 負責分發。Controller 回傳 Mono。",
  layers: [
    { title: "應用層", desc: "@Controller / @Service — JAX-RS 路徑，處理器回傳 Mono。" },
    { title: "框架層", desc: "掃包、建構 Guice Injector、註冊路由，再 launch()。" },
    { title: "Publisher", desc: "Handle / Websocket / StaticFile / ApiGateway 共享同一 HTTP 服務。" },
    { title: "基礎設施", desc: "可選 MyBatis、Redis、JSON、模板、HTTPS、CORS、URI Filter。" },
  ],
  flowTitle: "啟動流程",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → 掃描 Controller / Service",
    "setHttpMessageConverter、addResource、addFilter、setHttps…",
    "launch() → Reactor-Netty HttpServer",
  ],
  stackTitle: "核心技術棧",
  stack: [
    { name: "Guice", role: "依賴注入與模組" },
    { name: "Reactor-Netty", role: "非阻塞 HTTP / WebSocket" },
    { name: "Project Reactor", role: "Mono / 響應式流水線" },
    { name: "JAX-RS API", role: "熟悉的路由註解" },
  ],
  featuresTitle: "能力",
  features: [
    { title: "響應式處理器", desc: "Controller 回傳 Mono，可組合遠端呼叫、重導向與 Protobuf，不阻塞執行緒。" },
    { title: "註解路由", desc: "啟動掃包配置 @GET/@POST/@PUT/@DELETE/@Path，無需手寫路由表。" },
    { title: "API 閘道模式", desc: "可選 ApiGatewayDispatcher，代理 HTTP 與 WebSocket。" },
    { title: "HTTP + WebSocket", desc: "同一服務處理 REST、即時長連線與靜態 index.html。" },
    { title: "HTTPS 與 CORS", desc: "基於 JKS 的 HTTPS，以及可選跨域回應頭。" },
    { title: "Maven 可用", desc: "已發佈至 Maven Central：com.doopp:reactor-guice。" },
  ],
  ctaTitle: "用 reactor-guice 起步",
  ctaSubtitle: "引入依賴，幾行程式碼即可拉起響應式 Guice + Reactor-Netty 服務。",
};

const ar: ReactorGuiceListing = {
  back: "جميع المنتجات",
  category: "مفتوح المصدر",
  tagline: "عندما يلتقي Guice بـ Reactor-Netty",
  description:
    "إطار خدمات Java مصغّرة تفاعلي يجمع Guice مع Reactor-Netty. توجيه بالتعليقات، معالجات Mono، WebSocket، ملفات ثابتة، HTTPS وبوابة API اختيارية — الانعكاس عند التشغيل فقط.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "هندسة خادم تفاعلية",
  architectureDesc:
    "Reactor-Netty للإدخال/الإخراج غير الحاجب، Guice للربط، Publishers للتوجيه. Controllers تُرجع Mono.",
  layers: [
    { title: "التطبيق", desc: "@Controller و @Service — مسارات JAX-RS ومعالجات Mono." },
    { title: "الإطار", desc: "مسح الحزم وبناء Injector وتسجيل المسارات ثم launch()." },
    { title: "Publishers", desc: "Handle و Websocket و StaticFile و ApiGateway على نفس الخادم." },
    { title: "البنية", desc: "MyBatis و Redis و JSON والقوالب و HTTPS و CORS ومرشحات URI." },
  ],
  flowTitle: "تسلسل التشغيل",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → مسح Controllers / Services",
    "setHttpMessageConverter، addResource، addFilter، setHttps…",
    "launch() → Reactor-Netty HttpServer",
  ],
  stackTitle: "المكدس الأساسي",
  stack: [
    { name: "Guice", role: "حقن التبعيات والوحدات" },
    { name: "Reactor-Netty", role: "HTTP / WebSocket غير حاجب" },
    { name: "Project Reactor", role: "Mono / خطوط تفاعلية" },
    { name: "JAX-RS API", role: "تعليقات توجيه مألوفة" },
  ],
  featuresTitle: "القدرات",
  features: [
    { title: "معالجات تفاعلية", desc: "Controllers تُرجع Mono — استدعاءات بعيدة وإعادة توجيه دون حجب." },
    { title: "توجيه بالتعليقات", desc: "مسح عند التشغيل لـ @GET/@POST/@PUT/@DELETE/@Path." },
    { title: "وضع بوابة API", desc: "ApiGatewayDispatcher يوكّل HTTP و WebSocket." },
    { title: "HTTP + WebSocket", desc: "REST والوقت الفعلي و index.html على خادم واحد." },
    { title: "HTTPS و CORS", desc: "HTTPS عبر JKS ورؤوس CORS اختيارية." },
    { title: "Maven", desc: "منشور كـ com.doopp:reactor-guice على Maven Central." },
  ],
  ctaTitle: "ابدأ مع reactor-guice",
  ctaSubtitle: "أضف الاعتماد وشغّل خدمة Guice + Reactor-Netty تفاعلية بأسطر قليلة.",
};

const hi: ReactorGuiceListing = {
  back: "सभी उत्पाद",
  category: "ओपन सोर्स",
  tagline: "जब Guice मिलता है Reactor-Netty से",
  description:
    "Google Guice और Reactor-Netty वाला रिएक्टिव Java माइक्रोसर्विस फ़्रेमवर्क। Annotation routing, Mono handlers, WebSocket, static files, HTTPS और वैकल्पिक API gateway — reflection केवल स्टार्टअप पर।",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "रिएक्टिव सर्वर आर्किटेक्चर",
  architectureDesc:
    "Non-blocking I/O Reactor-Netty पर, wiring Guice पर, routing Publishers पर। Controllers Mono लौटाते हैं।",
  layers: [
    { title: "एप्लिकेशन", desc: "@Controller और @Service — JAX-RS paths, handlers Mono लौटाते हैं।" },
    { title: "फ़्रेमवर्क", desc: "पैकेज स्कैन, Guice Injector, रूट्स, फिर launch()।" },
    { title: "Publishers", desc: "Handle / Websocket / StaticFile / ApiGateway एक ही HttpServer पर।" },
    { title: "इंफ़्रा", desc: "MyBatis, Redis, JSON, templates, HTTPS, CORS, URI filters।" },
  ],
  flowTitle: "बूट क्रम",
  flowSteps: [
    "ReactorGuiceServer.create().bind(host, port)",
    "createInjector + basePackages → Controllers / Services स्कैन",
    "setHttpMessageConverter, addResource, addFilter, setHttps…",
    "launch() → Reactor-Netty HttpServer",
  ],
  stackTitle: "कोर स्टैक",
  stack: [
    { name: "Guice", role: "Dependency injection व modules" },
    { name: "Reactor-Netty", role: "Non-blocking HTTP / WebSocket" },
    { name: "Project Reactor", role: "Mono / reactive pipelines" },
    { name: "JAX-RS API", role: "परिचित routing annotations" },
  ],
  featuresTitle: "क्षमताएँ",
  features: [
    { title: "Reactive handlers", desc: "Controllers Mono लौटाते हैं — remote calls और redirects बिना ब्लॉक।" },
    { title: "Annotation routing", desc: "स्टार्ट पर @GET/@POST/@PUT/@DELETE/@Path वायर।" },
    { title: "API gateway mode", desc: "ApiGatewayDispatcher HTTP और WebSocket प्रॉक्सी करता है।" },
    { title: "HTTP + WebSocket", desc: "REST, realtime और static index.html एक सर्वर पर।" },
    { title: "HTTPS & CORS", desc: "JKS HTTPS और वैकल्पिक CORS headers।" },
    { title: "Maven Ready", desc: "Maven Central पर com.doopp:reactor-guice।" },
  ],
  ctaTitle: "reactor-guice से शुरू करें",
  ctaSubtitle: "Dependency जोड़ें और कुछ पंक्तियों में reactive Guice + Reactor-Netty सेवा चलाएँ।",
};

const byLocale: Record<Locale, ReactorGuiceListing> = {
  en,
  ja,
  ko,
  fr,
  es,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  ar,
  hi,
};

export function getReactorGuiceListing(locale: Locale): ReactorGuiceListing {
  return byLocale[locale] ?? en;
}
