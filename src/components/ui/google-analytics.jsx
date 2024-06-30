'use client';
import Script from 'next/script';

export default function GoogleAnalytics({ googleAnalyticsTrackingID }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', "${NEXT_PUBLIC_GA_TRACKING_ID}");
    `}
      </Script>
    </>
  );
}
