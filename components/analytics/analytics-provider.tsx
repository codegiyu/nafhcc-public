'use client';

import Script from 'next/script';

export function AnalyticsProvider() {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  if (!analyticsId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
