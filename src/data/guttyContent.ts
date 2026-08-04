import type { Locale } from "@/i18n";

export const GUTTY_MAVEN =
  "https://mvnrepository.com/artifact/com.doopp/gutty";
export const GUTTY_GITHUB = "https://github.com/koocyton/gutty";
export const GUTTY_COORDINATE = "com.doopp:gutty";

export type GuttyListing = {
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

const en: GuttyListing = {
  back: "All Products",
  category: "Open Source",
  tagline: "When Guice meets Netty",
  description:
    "A lightweight Java server framework that pairs Guice dependency injection with Netty networking — Spring-like annotations, package scanning, HTTP + WebSocket, and optional MyBatis / Redis / templates.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "Server architecture",
  architectureDesc:
    "Netty owns I/O. Guice owns wiring. Dispatcher owns routing. Your code stays in Controllers and Socket handlers.",
  layers: [
    {
      title: "Application",
      desc: "@Controller, @Service, and @Socket — JAX-RS style routes with Guice injection.",
    },
    {
      title: "Framework",
      desc: "Gutty scans packages, binds components, registers routes, then starts Netty.",
    },
    {
      title: "Network",
      desc: "One pipeline for HTTP, WebSocket upgrade, and static files on the same event loop.",
    },
    {
      title: "Infra",
      desc: "Optional MyBatis, Redis, JSON converters, and Freemarker / Thymeleaf via Guice modules.",
    },
  ],
  flowTitle: "Boot sequence",
  flowSteps: [
    "loadProperties → setBasePackages → converters / filters / modules",
    "Scan @Service / @Controller / @Socket and bind them in Guice",
    "Map @Path + HTTP methods (or WebSocket handlers) into Dispatcher",
    "Netty pipeline: WebSocket → HTTP → static files",
  ],
  stackTitle: "Core stack",
  stack: [
    { name: "Guice", role: "Dependency injection & lifecycle" },
    { name: "Netty", role: "HTTP / WebSocket transport" },
    { name: "JAX-RS API", role: "Familiar routing annotations" },
    { name: "MyBatis + Redis", role: "Optional data access" },
  ],
  featuresTitle: "Capabilities",
  features: [
    {
      title: "Annotation routing",
      desc: "Startup package scan wires @GET/@POST/@Path for HTTP and @Socket for long-lived connections.",
    },
    {
      title: "Auto parameter binding",
      desc: "Inject query, path, form, cookie, file, JSON, and Protobuf arguments into handlers.",
    },
    {
      title: "HTTP + WebSocket",
      desc: "Short requests and real-time frames share one Netty server with JSON / Protobuf codecs.",
    },
    {
      title: "URI filters",
      desc: "Attach filters by path prefix for auth, session attributes, and cross-cutting logic.",
    },
    {
      title: "Views & JSON",
      desc: "Freemarker / Thymeleaf templates or Jackson / Gson — choose with @Produces.",
    },
    {
      title: "Maven ready",
      desc: "Published as com.doopp:gutty on Maven Central for drop-in use.",
    },
  ],
  ctaTitle: "Start with Gutty",
  ctaSubtitle: "Add the dependency and spin up a Netty + Guice server in a few lines.",
};

const ja: GuttyListing = {
  back: "すべての製品",
  category: "オープンソース",
  tagline: "Guice と Netty が出会うとき",
  description:
    "Guice の DI と Netty のネットワークを組み合わせた軽量 Java サーバフレームワーク。Spring 風アノテーション、パッケージ走査、HTTP + WebSocket、任意の MyBatis / Redis / テンプレート。",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "サーバアーキテクチャ",
  architectureDesc:
    "I/O は Netty、配線は Guice、ルーティングは Dispatcher。あなたのコードは Controller と Socket に集中。",
  layers: [
    { title: "アプリケーション", desc: "@Controller / @Service / @Socket — JAX-RS 風ルートと Guice 注入。" },
    { title: "フレームワーク", desc: "パッケージ走査、DI バインド、ルート登録の後に Netty 起動。" },
    { title: "ネットワーク", desc: "同一イベントループで HTTP・WebSocket・静的ファイル。" },
    { title: "インフラ", desc: "MyBatis、Redis、JSON、テンプレートを Guice モジュールで接続。" },
  ],
  flowTitle: "起動フロー",
  flowSteps: [
    "loadProperties → setBasePackages → 変換器 / Filter / Module",
    "@Service / @Controller / @Socket を走査し Guice にバインド",
    "@Path と HTTP メソッド（または WS）を Dispatcher に登録",
    "Netty: WebSocket → HTTP → 静的ファイル",
  ],
  stackTitle: "コアスタック",
  stack: [
    { name: "Guice", role: "依存性注入とライフサイクル" },
    { name: "Netty", role: "HTTP / WebSocket 転送" },
    { name: "JAX-RS API", role: "馴染みのあるルーティング注釈" },
    { name: "MyBatis + Redis", role: "オプションのデータアクセス" },
  ],
  featuresTitle: "機能",
  features: [
    { title: "アノテーションルーティング", desc: "起動時に走査。@GET/@POST/@Path で HTTP、@Socket で長接続。" },
    { title: "パラメータ自動注入", desc: "Query / Path / Form / Cookie / ファイル / JSON / Protobuf をハンドラへ。" },
    { title: "HTTP + WebSocket", desc: "短接続とリアルタイムを同一 Netty サーバで。JSON / Protobuf 対応。" },
    { title: "URI Filter", desc: "パス接頭辞で認証やセッション属性などを差し込み。" },
    { title: "View & JSON", desc: "Freemarker / Thymeleaf または Jackson / Gson。@Produces で選択。" },
    { title: "Maven 対応", desc: "Maven Central の com.doopp:gutty として公開。" },
  ],
  ctaTitle: "Gutty を始める",
  ctaSubtitle: "依存関係を追加し、数行で Netty + Guice サーバを起動。",
};

const ko: GuttyListing = {
  back: "모든 제품",
  category: "오픈 소스",
  tagline: "Guice가 Netty를 만날 때",
  description:
    "Guice DI와 Netty 네트워킹을 결합한 경량 Java 서버 프레임워크. Spring 스타일 어노테이션, 패키지 스캔, HTTP + WebSocket, 선택적 MyBatis / Redis / 템플릿.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "서버 아키텍처",
  architectureDesc:
    "I/O는 Netty, 배선은 Guice, 라우팅은 Dispatcher. 코드는 Controller와 Socket에 집중.",
  layers: [
    { title: "애플리케이션", desc: "@Controller / @Service / @Socket — JAX-RS 스타일 라우팅과 Guice 주입." },
    { title: "프레임워크", desc: "패키지 스캔, DI 바인딩, 라우트 등록 후 Netty 기동." },
    { title: "네트워크", desc: "같은 이벤트 루프에서 HTTP·WebSocket·정적 파일." },
    { title: "인프라", desc: "MyBatis, Redis, JSON, 템플릿을 Guice 모듈로 연결." },
  ],
  flowTitle: "부팅 순서",
  flowSteps: [
    "loadProperties → setBasePackages → 변환기 / 필터 / 모듈",
    "@Service / @Controller / @Socket 스캔 후 Guice 바인딩",
    "@Path + HTTP 메서드(또는 WS)를 Dispatcher에 등록",
    "Netty: WebSocket → HTTP → 정적 파일",
  ],
  stackTitle: "핵심 스택",
  stack: [
    { name: "Guice", role: "의존성 주입 및 생명주기" },
    { name: "Netty", role: "HTTP / WebSocket 전송" },
    { name: "JAX-RS API", role: "익숙한 라우팅 어노테이션" },
    { name: "MyBatis + Redis", role: "선택적 데이터 접근" },
  ],
  featuresTitle: "기능",
  features: [
    { title: "어노테이션 라우팅", desc: "시작 시 스캔. @GET/@POST/@Path로 HTTP, @Socket으로 장연결." },
    { title: "파라미터 자동 바인딩", desc: "Query / Path / Form / Cookie / 파일 / JSON / Protobuf를 핸들러에 주입." },
    { title: "HTTP + WebSocket", desc: "짧은 요청과 실시간 프레임을 하나의 Netty 서버에서." },
    { title: "URI 필터", desc: "경로 prefix로 인증·세션 등 횡단 관심사 연결." },
    { title: "뷰 & JSON", desc: "Freemarker / Thymeleaf 또는 Jackson / Gson. @Produces로 선택." },
    { title: "Maven 지원", desc: "Maven Central의 com.doopp:gutty로 배포." },
  ],
  ctaTitle: "Gutty로 시작하기",
  ctaSubtitle: "의존성을 추가하고 몇 줄로 Netty + Guice 서버를 띄우세요.",
};

const fr: GuttyListing = {
  back: "Tous les produits",
  category: "Open Source",
  tagline: "Quand Guice rencontre Netty",
  description:
    "Framework serveur Java léger associant l'injection Guice au réseau Netty — annotations façon Spring, scan de packages, HTTP + WebSocket, MyBatis / Redis / templates optionnels.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "Architecture serveur",
  architectureDesc:
    "Netty gère les I/O, Guice le câblage, Dispatcher le routage. Votre code reste dans Controllers et Socket handlers.",
  layers: [
    { title: "Application", desc: "@Controller, @Service et @Socket — routage style JAX-RS avec injection Guice." },
    { title: "Framework", desc: "Scan des packages, liaison DI, routes, puis démarrage Netty." },
    { title: "Réseau", desc: "Pipeline Netty : HTTP, WebSocket et fichiers statiques sur le même event loop." },
    { title: "Infra", desc: "MyBatis, Redis, JSON et templates via modules Guice optionnels." },
  ],
  flowTitle: "Séquence de démarrage",
  flowSteps: [
    "loadProperties → setBasePackages → convertisseurs / filtres / modules",
    "Scanner @Service / @Controller / @Socket et lier via Guice",
    "Enregistrer @Path + méthodes HTTP (ou WS) dans Dispatcher",
    "Pipeline Netty : WebSocket → HTTP → fichiers statiques",
  ],
  stackTitle: "Stack principale",
  stack: [
    { name: "Guice", role: "Injection de dépendances" },
    { name: "Netty", role: "Transport HTTP / WebSocket" },
    { name: "JAX-RS API", role: "Annotations de routage familières" },
    { name: "MyBatis + Redis", role: "Accès données optionnel" },
  ],
  featuresTitle: "Capacités",
  features: [
    { title: "Routage par annotations", desc: "Scan au démarrage ; @GET/@POST/@Path pour HTTP, @Socket pour le long-lived." },
    { title: "Liaison des paramètres", desc: "Injecte Query, Path, Form, cookies, fichiers, JSON et Protobuf." },
    { title: "HTTP + WebSocket", desc: "Un serveur Netty pour requêtes courtes et frames temps réel." },
    { title: "Filtres URI", desc: "Filtres par préfixe pour auth, session et cross-cutting." },
    { title: "Vues & JSON", desc: "Freemarker / Thymeleaf ou Jackson / Gson via @Produces." },
    { title: "Maven", desc: "Publié comme com.doopp:gutty sur Maven Central." },
  ],
  ctaTitle: "Démarrer avec Gutty",
  ctaSubtitle: "Ajoutez la dépendance et lancez un serveur Netty + Guice en quelques lignes.",
};

const es: GuttyListing = {
  back: "Todos los productos",
  category: "Código abierto",
  tagline: "Cuando Guice encuentra Netty",
  description:
    "Framework de servidor Java ligero que une la inyección Guice con la red Netty — anotaciones al estilo Spring, escaneo de paquetes, HTTP + WebSocket y MyBatis / Redis / plantillas opcionales.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "Arquitectura del servidor",
  architectureDesc:
    "Netty maneja el I/O, Guice el cableado, Dispatcher el enrutado. Tu código vive en Controllers y Socket handlers.",
  layers: [
    { title: "Aplicación", desc: "@Controller, @Service y @Socket — rutas estilo JAX-RS con inyección Guice." },
    { title: "Framework", desc: "Escaneo de paquetes, binding DI, rutas y arranque de Netty." },
    { title: "Red", desc: "Pipeline Netty: HTTP, WebSocket y estáticos en el mismo event loop." },
    { title: "Infra", desc: "MyBatis, Redis, JSON y plantillas mediante módulos Guice." },
  ],
  flowTitle: "Secuencia de arranque",
  flowSteps: [
    "loadProperties → setBasePackages → conversores / filtros / módulos",
    "Escanear @Service / @Controller / @Socket y enlazar con Guice",
    "Registrar @Path + métodos HTTP (o WS) en Dispatcher",
    "Pipeline Netty: WebSocket → HTTP → estáticos",
  ],
  stackTitle: "Stack principal",
  stack: [
    { name: "Guice", role: "Inyección de dependencias" },
    { name: "Netty", role: "Transporte HTTP / WebSocket" },
    { name: "JAX-RS API", role: "Anotaciones de enrutado familiares" },
    { name: "MyBatis + Redis", role: "Acceso a datos opcional" },
  ],
  featuresTitle: "Capacidades",
  features: [
    { title: "Enrutado por anotaciones", desc: "Escaneo al arrancar; @GET/@POST/@Path para HTTP, @Socket para conexiones largas." },
    { title: "Parámetros automáticos", desc: "Inyecta Query, Path, Form, cookies, archivos, JSON y Protobuf." },
    { title: "HTTP + WebSocket", desc: "Un Netty para peticiones cortas y frames en tiempo real." },
    { title: "Filtros URI", desc: "Filtros por prefijo para auth, sesión y concerns transversales." },
    { title: "Vistas & JSON", desc: "Freemarker / Thymeleaf o Jackson / Gson vía @Produces." },
    { title: "Maven", desc: "Publicado como com.doopp:gutty en Maven Central." },
  ],
  ctaTitle: "Empieza con Gutty",
  ctaSubtitle: "Añade la dependencia y levanta un servidor Netty + Guice en pocas líneas.",
};

const zhCN: GuttyListing = {
  back: "所有产品",
  category: "开源",
  tagline: "当 Guice 遇上 Netty",
  description:
    "轻量级 Java 服务端框架：Guice 依赖注入 + Netty 网络层。Spring 风格注解、包扫描、HTTP + WebSocket，并可选用 MyBatis / Redis / 模板引擎。",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "服务端架构",
  architectureDesc:
    "Netty 负责收发包，Guice 负责装配，Dispatcher 负责路由。业务写在 Controller 与 Socket Handler。",
  layers: [
    { title: "应用层", desc: "@Controller / @Service / @Socket — JAX-RS 风格路由，Guice 依赖注入。" },
    { title: "框架层", desc: "扫包、绑定组件、注册路由，再交给 Netty 启动服务。" },
    { title: "网络层", desc: "同一 EventLoop 处理 HTTP、WebSocket 升级与静态资源。" },
    { title: "基础设施", desc: "可选接入 MyBatis、Redis、JSON 转换与 Freemarker / Thymeleaf。" },
  ],
  flowTitle: "启动流程",
  flowSteps: [
    "loadProperties → setBasePackages → 转换器 / Filter / Module",
    "扫描 @Service / @Controller / @Socket 并绑定到 Guice",
    "将 @Path + HTTP 方法（或 WebSocket）写入 Dispatcher",
    "Netty Pipeline：WebSocket → HTTP → 静态资源",
  ],
  stackTitle: "核心技术栈",
  stack: [
    { name: "Guice", role: "依赖注入与生命周期" },
    { name: "Netty", role: "HTTP / WebSocket 传输" },
    { name: "JAX-RS API", role: "熟悉的路由注解" },
    { name: "MyBatis + Redis", role: "可选数据访问" },
  ],
  featuresTitle: "能力",
  features: [
    { title: "注解路由", desc: "启动扫包；@GET/@POST/@Path 配置 HTTP，@Socket 配置长连接。" },
    { title: "参数自动注入", desc: "支持 Query / Path / Form / Cookie / 文件 / JSON / Protobuf。" },
    { title: "HTTP + WebSocket", desc: "同一 Netty 服务处理短请求与实时帧，含 JSON / Protobuf 编解码。" },
    { title: "URI Filter", desc: "按路径前缀挂载过滤器，做鉴权、Session 等横切逻辑。" },
    { title: "模板与 JSON", desc: "Freemarker / Thymeleaf 或 Jackson / Gson，由 @Produces 选择。" },
    { title: "Maven 可用", desc: "已发布至 Maven Central：com.doopp:gutty。" },
  ],
  ctaTitle: "用 Gutty 起步",
  ctaSubtitle: "引入依赖，几行代码即可拉起 Netty + Guice 服务。",
};

const zhTW: GuttyListing = {
  back: "所有產品",
  category: "開源",
  tagline: "當 Guice 遇上 Netty",
  description:
    "輕量級 Java 服務端框架：Guice 依賴注入 + Netty 網路層。Spring 風格註解、套件掃描、HTTP + WebSocket，並可選用 MyBatis / Redis / 模板引擎。",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "服務端架構",
  architectureDesc:
    "Netty 負責收發包，Guice 負責組裝，Dispatcher 負責路由。業務寫在 Controller 與 Socket Handler。",
  layers: [
    { title: "應用層", desc: "@Controller / @Service / @Socket — JAX-RS 風格路由，Guice 依賴注入。" },
    { title: "框架層", desc: "掃包、綁定元件、註冊路由，再交給 Netty 啟動服務。" },
    { title: "網路層", desc: "同一 EventLoop 處理 HTTP、WebSocket 升級與靜態資源。" },
    { title: "基礎設施", desc: "可選接入 MyBatis、Redis、JSON 轉換與 Freemarker / Thymeleaf。" },
  ],
  flowTitle: "啟動流程",
  flowSteps: [
    "loadProperties → setBasePackages → 轉換器 / Filter / Module",
    "掃描 @Service / @Controller / @Socket 並綁定到 Guice",
    "將 @Path + HTTP 方法（或 WebSocket）寫入 Dispatcher",
    "Netty Pipeline：WebSocket → HTTP → 靜態資源",
  ],
  stackTitle: "核心技術棧",
  stack: [
    { name: "Guice", role: "依賴注入與生命週期" },
    { name: "Netty", role: "HTTP / WebSocket 傳輸" },
    { name: "JAX-RS API", role: "熟悉的路由註解" },
    { name: "MyBatis + Redis", role: "可選資料存取" },
  ],
  featuresTitle: "能力",
  features: [
    { title: "註解路由", desc: "啟動掃包；@GET/@POST/@Path 配置 HTTP，@Socket 配置長連線。" },
    { title: "參數自動注入", desc: "支援 Query / Path / Form / Cookie / 檔案 / JSON / Protobuf。" },
    { title: "HTTP + WebSocket", desc: "同一 Netty 服務處理短請求與即時幀，含 JSON / Protobuf 編解碼。" },
    { title: "URI Filter", desc: "按路徑前綴掛載過濾器，做鑑權、Session 等橫切邏輯。" },
    { title: "模板與 JSON", desc: "Freemarker / Thymeleaf 或 Jackson / Gson，由 @Produces 選擇。" },
    { title: "Maven 可用", desc: "已發佈至 Maven Central：com.doopp:gutty。" },
  ],
  ctaTitle: "用 Gutty 起步",
  ctaSubtitle: "引入依賴，幾行程式碼即可拉起 Netty + Guice 服務。",
};

const ar: GuttyListing = {
  back: "جميع المنتجات",
  category: "مفتوح المصدر",
  tagline: "عندما يلتقي Guice بـ Netty",
  description:
    "إطار خادم Java خفيف يجمع حقن Guice مع شبكة Netty — تعليقات بأسلوب Spring ومسح الحزم و HTTP + WebSocket مع MyBatis / Redis / قوالب اختيارية.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "هندسة الخادم",
  architectureDesc:
    "Netty للإدخال/الإخراج، Guice للربط، Dispatcher للتوجيه. كودك في Controllers ومعالجات Socket.",
  layers: [
    { title: "التطبيق", desc: "@Controller و @Service و @Socket — توجيه بأسلوب JAX-RS مع حقن Guice." },
    { title: "الإطار", desc: "مسح الحزم وربط المكونات وتسجيل المسارات ثم تشغيل Netty." },
    { title: "الشبكة", desc: "خط أنابيب Netty لـ HTTP و WebSocket والملفات الثابتة." },
    { title: "البنية", desc: "MyBatis و Redis و JSON والقوالب عبر وحدات Guice اختيارية." },
  ],
  flowTitle: "تسلسل التشغيل",
  flowSteps: [
    "loadProperties → setBasePackages → محولات / مرشحات / وحدات",
    "مسح @Service / @Controller / @Socket وربطها بـ Guice",
    "تسجيل @Path وطرق HTTP (أو WS) في Dispatcher",
    "مسار Netty: WebSocket → HTTP → ملفات ثابتة",
  ],
  stackTitle: "المكدس الأساسي",
  stack: [
    { name: "Guice", role: "حقن التبعيات ودورة الحياة" },
    { name: "Netty", role: "نقل HTTP / WebSocket" },
    { name: "JAX-RS API", role: "تعليقات توجيه مألوفة" },
    { name: "MyBatis + Redis", role: "وصول بيانات اختياري" },
  ],
  featuresTitle: "القدرات",
  features: [
    { title: "توجيه بالتعليقات", desc: "مسح عند التشغيل؛ @GET/@POST/@Path لـ HTTP و @Socket للاتصالات الطويلة." },
    { title: "ربط المعاملات", desc: "حقن Query و Path و Form وملفات و JSON و Protobuf." },
    { title: "HTTP + WebSocket", desc: "خادم Netty واحد للطلبات القصيرة والإطارات الفورية." },
    { title: "مرشحات URI", desc: "مرشحات حسب البادئة للمصادقة والجلسة." },
    { title: "العروض و JSON", desc: "Freemarker / Thymeleaf أو Jackson / Gson عبر @Produces." },
    { title: "Maven", desc: "منشور كـ com.doopp:gutty على Maven Central." },
  ],
  ctaTitle: "ابدأ مع Gutty",
  ctaSubtitle: "أضف الاعتماد وشغّل خادم Netty + Guice بأسطر قليلة.",
};

const hi: GuttyListing = {
  back: "सभी उत्पाद",
  category: "ओपन सोर्स",
  tagline: "जब Guice मिलता है Netty से",
  description:
    "हल्का Java सर्वर फ़्रेमवर्क — Guice DI + Netty नेटवर्किंग। Spring-जैसे annotations, पैकेज स्कैन, HTTP + WebSocket, वैकल्पिक MyBatis / Redis / templates.",
  maven: "Maven Central",
  github: "GitHub",
  architectureTitle: "सर्वर आर्किटेक्चर",
  architectureDesc:
    "I/O Netty पर, wiring Guice पर, routing Dispatcher पर। आपका कोड Controllers और Socket handlers में।",
  layers: [
    { title: "एप्लिकेशन", desc: "@Controller, @Service और @Socket — JAX-RS स्टाइल रूटिंग व Guice इंजेक्शन।" },
    { title: "फ़्रेमवर्क", desc: "पैकेज स्कैन, DI बाइंडिंग, रूट रजिस्टर, फिर Netty स्टार्ट।" },
    { title: "नेटवर्क", desc: "एक ही event loop पर HTTP, WebSocket और स्टैटिक फ़ाइलें।" },
    { title: "इंफ़्रा", desc: "वैकल्पिक MyBatis, Redis, JSON और टेम्प्लेट — Guice मॉड्यूल से।" },
  ],
  flowTitle: "बूट क्रम",
  flowSteps: [
    "loadProperties → setBasePackages → converters / filters / modules",
    "@Service / @Controller / @Socket स्कैन कर Guice में बाइंड",
    "@Path + HTTP methods (या WS) को Dispatcher में दर्ज करें",
    "Netty pipeline: WebSocket → HTTP → static files",
  ],
  stackTitle: "कोर स्टैक",
  stack: [
    { name: "Guice", role: "Dependency injection व lifecycle" },
    { name: "Netty", role: "HTTP / WebSocket transport" },
    { name: "JAX-RS API", role: "परिचित routing annotations" },
    { name: "MyBatis + Redis", role: "वैकल्पिक data access" },
  ],
  featuresTitle: "क्षमताएँ",
  features: [
    { title: "Annotation Routing", desc: "स्टार्ट पर स्कैन; @GET/@POST/@Path से HTTP, @Socket से लंबा कनेक्शन।" },
    { title: "Auto Parameter Binding", desc: "Query, Path, Form, cookies, files, JSON, Protobuf हैंडलर में।" },
    { title: "HTTP + WebSocket", desc: "एक Netty सर्वर — छोटे अनुरोध और रीयल-टाइम फ़्रेम।" },
    { title: "URI Filters", desc: "पाथ prefix से auth और session जैसे concerns।" },
    { title: "Views & JSON", desc: "Freemarker / Thymeleaf या Jackson / Gson — @Produces से चुनें।" },
    { title: "Maven Ready", desc: "Maven Central पर com.doopp:gutty।" },
  ],
  ctaTitle: "Gutty से शुरू करें",
  ctaSubtitle: "Dependency जोड़ें और कुछ पंक्तियों में Netty + Guice सर्वर चलाएँ।",
};

const byLocale: Record<Locale, GuttyListing> = {
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

export function getGuttyListing(locale: Locale): GuttyListing {
  return byLocale[locale] ?? en;
}
