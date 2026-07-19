import Script from "next/script";
import SmsForwarderProPageContent from "@/components/SmsForwarderProPageContent";

export const metadata = {
  title: "SMS Forwarder Pro",
  description:
    "Forward SMS or notifications to email, phone, URL, Telegram, or push services. Sync across PC and phone.",
};

export default function SmsForwarderProPage() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-392594682"
      />
      <Script id="google-ads-tag-aw-392594682">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-392594682');
        `}
      </Script>
      <SmsForwarderProPageContent />
    </>
  );
}
