import type { Locale } from "@/i18n";

export const SMS_FORWARDER_PRO_APK =
  "https://github.com/koocyton/sms_forwarder_pro/releases/download/release/sms_forwarder_1.0.33.apk";

export const SMS_FORWARDER_PRO_WEB = "/sms-forwarder-web/";

export const SMS_FORWARDER_PRO_SHOTS = [
  "/sms-forwarder-pro/shot-01.webp",
  "/sms-forwarder-pro/shot-02.webp",
  "/sms-forwarder-pro/shot-03.webp",
  "/sms-forwarder-pro/shot-04.webp",
  "/sms-forwarder-pro/shot-05.webp",
  "/sms-forwarder-pro/shot-06.webp",
  "/sms-forwarder-pro/shot-07.webp",
] as const;

export type SmsForwarderProListing = {
  back: string;
  category: string;
  subtitle: string;
  developer: string;
  downloads: string;
  contentRating: string;
  inAppPurchases: string;
  downloadApk: string;
  openWeb: string;
  screenshotsTitle: string;
  aboutTitle: string;
  about: string;
  caution: string;
  howToTitle: string;
  howTo: string[];
  featuresTitle: string;
  features: string[];
  note: string;
  permissionsTitle: string;
  permissionsIntro: string;
  permissions: { title: string; desc: string }[];
  privacyTitle: string;
  privacy: string[];
  dataSafetyTitle: string;
  dataSafetyIntro: string;
  dataSafety: { title: string; desc: string }[];
  whatsNewTitle: string;
  whatsNew: string[];
  supportTitle: string;
  supportEmailLabel: string;
  supportPhoneLabel: string;
  supportEmail: string;
  supportPhone: string;
  updatedOn: string;
};

const en: SmsForwarderProListing = {
  back: "All Products",
  category: "Tools",
  subtitle: "Auto To You PC",
  developer: "Kale-Studio",
  downloads: "1K+ downloads",
  contentRating: "Everyone",
  inAppPurchases: "In-app purchases",
  downloadApk: "Download APK",
  openWeb: "View on PC (Web)",
  screenshotsTitle: "Screenshots",
  aboutTitle: "About this app",
  about:
    "This is an application that can sync SMS or notifications across multiple devices (PC, phone).",
  caution:
    "Caution! If someone else asks you to install this application, be careful, as he or she may be a scammer.",
  howToTitle: "How to use",
  howTo: [
    "First, add a filter to set the recipient.",
    "Enter the recipient's phone number, email, URL, Telegram, or push service ID. You can add multiple.",
    "You can set keywords that appear in the phone number or message body as conditions, or leave them blank if you only want to forward everything.",
    "You can customize the template for forwarded messages.",
  ],
  featuresTitle: "Features",
  features: [
    "Forward SMS or notifications to email, phone, URL, Telegram, or push services.",
    "Add filters for various options.",
    "Supports Gmail and SMTP.",
    "Supports dual SIM card setup.",
    "Supports run-time settings.",
    "Supports filter backup/restore.",
  ],
  note: "This application does not provide the ability to receive messages from devices that have not installed the application.",
  permissionsTitle: "Requested permissions",
  permissionsIntro: "All permissions are requested only when the feature is used.",
  permissions: [
    {
      title: "Receive SMS, receive MMS, read SMS, send SMS",
      desc: "Required for reading and sending SMS.",
    },
    {
      title: "Read contacts",
      desc: "Required for reading your Gmail account and contact names.",
    },
  ],
  privacyTitle: "Privacy",
  privacy: [
    "This application requires permission to read or send SMS.",
    "This application does not store SMS or contacts on a server.",
    "When you uninstall this application, all data will be deleted unconditionally. (However, before uninstalling this application, please remove the push service account from the application first.)",
  ],
  dataSafetyTitle: "Data safety",
  dataSafetyIntro:
    "Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age.",
  dataSafety: [
    {
      title: "No data shared with third parties",
      desc: "The developer declares that no data is shared with third parties.",
    },
    {
      title: "No data collected",
      desc: "The developer declares that no data is collected.",
    },
  ],
  whatsNewTitle: "What’s new",
  whatsNew: [
    "Avoid showing errors in poor network conditions",
    "Fixed an issue where forwarding might fail",
    "UI adjustments and fixes",
    "Added support for more forwarding platforms",
    "Added forwarding filter support",
  ],
  supportTitle: "App support",
  supportEmailLabel: "Support email",
  supportPhoneLabel: "Phone number",
  supportEmail: "koocyton@gmail.com",
  supportPhone: "+13522070338",
  updatedOn: "Updated on May 18, 2026",
};

const zhCN: SmsForwarderProListing = {
  back: "所有产品",
  category: "工具",
  subtitle: "自动转发到电脑",
  developer: "Kale-Studio",
  downloads: "1K+ 次下载",
  contentRating: "所有人",
  inAppPurchases: "应用内购",
  downloadApk: "下载 APK",
  openWeb: "在电脑上查看（Web）",
  screenshotsTitle: "截图",
  aboutTitle: "关于此应用",
  about: "这是一款可以在多台设备（电脑、手机）之间同步短信或通知的应用。",
  caution: "注意！如果有人要求你安装此应用，请务必小心，对方可能是骗子。",
  howToTitle: "使用方法",
  howTo: [
    "首先添加筛选条件，设置接收方。",
    "输入接收方的手机号、邮箱、URL、Telegram 或推送服务 ID，可添加多个。",
    "可设置手机号或短信正文中的关键词作为条件；若要转发全部短信，可留空。",
    "可自定义转发消息的模板。",
  ],
  featuresTitle: "功能",
  features: [
    "将短信或通知转发至邮箱、手机、URL、Telegram 或推送服务。",
    "支持多种筛选条件。",
    "支持 Gmail 与 SMTP。",
    "支持双卡设置。",
    "支持运行时配置。",
    "支持筛选条件备份/恢复。",
  ],
  note: "本应用无法接收未安装本应用的设备上的消息。",
  permissionsTitle: "所需权限",
  permissionsIntro: "所有权限仅在使用相关功能时才会请求。",
  permissions: [
    {
      title: "接收短信、接收彩信、读取短信、发送短信",
      desc: "用于读取和发送短信。",
    },
    {
      title: "读取联系人",
      desc: "用于读取 Gmail 账号与联系人姓名。",
    },
  ],
  privacyTitle: "隐私",
  privacy: [
    "本应用需要读取或发送短信的权限。",
    "本应用不会将短信或联系人存储在服务器上。",
    "卸载本应用后，所有数据将无条件删除。（不过，卸载前请先在应用中移除推送服务账号。）",
  ],
  dataSafetyTitle: "数据安全",
  dataSafetyIntro:
    "了解开发者如何收集与共享你的数据，是安全的第一步。数据隐私与安全做法可能因你的使用方式、地区和年龄而异。",
  dataSafety: [
    {
      title: "不与第三方共享数据",
      desc: "开发者声明不会与第三方共享数据。",
    },
    {
      title: "不收集数据",
      desc: "开发者声明不收集数据。",
    },
  ],
  whatsNewTitle: "更新内容",
  whatsNew: [
    "弱网环境下避免显示错误",
    "修复转发可能失败的问题",
    "界面调整与修复",
    "支持更多转发平台",
    "新增转发筛选支持",
  ],
  supportTitle: "应用支持",
  supportEmailLabel: "支持邮箱",
  supportPhoneLabel: "电话",
  supportEmail: "koocyton@gmail.com",
  supportPhone: "+13522070338",
  updatedOn: "更新于 2026 年 5 月 18 日",
};

const zhTW: SmsForwarderProListing = {
  ...zhCN,
  back: "所有產品",
  category: "工具",
  subtitle: "自動轉發到電腦",
  downloads: "1K+ 次下載",
  contentRating: "所有人",
  inAppPurchases: "應用內購",
  downloadApk: "下載 APK",
  openWeb: "在電腦上查看（Web）",
  screenshotsTitle: "截圖",
  aboutTitle: "關於此應用",
  about: "這是一款可以在多台裝置（電腦、手機）之間同步簡訊或通知的應用。",
  caution: "注意！如果有人要求你安裝此應用，請務必小心，對方可能是騙子。",
  howToTitle: "使用方法",
  howTo: [
    "首先新增篩選條件，設定接收方。",
    "輸入接收方的手機號、信箱、URL、Telegram 或推送服務 ID，可新增多個。",
    "可設定手機號或簡訊正文中的關鍵字作為條件；若要轉發全部簡訊，可留空。",
    "可自訂轉發訊息的範本。",
  ],
  featuresTitle: "功能",
  features: [
    "將簡訊或通知轉發至信箱、手機、URL、Telegram 或推送服務。",
    "支援多種篩選條件。",
    "支援 Gmail 與 SMTP。",
    "支援雙卡設定。",
    "支援執行時設定。",
    "支援篩選條件備份/還原。",
  ],
  note: "本應用無法接收未安裝本應用的裝置上的訊息。",
  permissionsTitle: "所需權限",
  permissionsIntro: "所有權限僅在使用相關功能時才會請求。",
  permissions: [
    {
      title: "接收簡訊、接收彩信、讀取簡訊、傳送簡訊",
      desc: "用於讀取和傳送簡訊。",
    },
    {
      title: "讀取聯絡人",
      desc: "用於讀取 Gmail 帳號與聯絡人姓名。",
    },
  ],
  privacyTitle: "隱私",
  privacy: [
    "本應用需要讀取或傳送簡訊的權限。",
    "本應用不會將簡訊或聯絡人儲存在伺服器上。",
    "解除安裝本應用後，所有資料將無條件刪除。（不過，解除安裝前請先在應用中移除推送服務帳號。）",
  ],
  dataSafetyTitle: "資料安全",
  dataSafetyIntro:
    "了解開發者如何收集與共享你的資料，是安全的第一步。資料隱私與安全做法可能因你的使用方式、地區和年齡而異。",
  dataSafety: [
    {
      title: "不與第三方共享資料",
      desc: "開發者聲明不會與第三方共享資料。",
    },
    {
      title: "不收集資料",
      desc: "開發者聲明不收集資料。",
    },
  ],
  whatsNewTitle: "更新內容",
  whatsNew: [
    "弱網環境下避免顯示錯誤",
    "修復轉發可能失敗的問題",
    "介面調整與修復",
    "支援更多轉發平台",
    "新增轉發篩選支援",
  ],
  supportTitle: "應用支援",
  supportEmailLabel: "支援信箱",
  supportPhoneLabel: "電話",
  updatedOn: "更新於 2026 年 5 月 18 日",
};

const listings: Partial<Record<Locale, SmsForwarderProListing>> = {
  en,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
};

export function getSmsForwarderProListing(locale: Locale): SmsForwarderProListing {
  return listings[locale] ?? en;
}
