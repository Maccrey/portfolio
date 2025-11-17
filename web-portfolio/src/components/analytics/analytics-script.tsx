import Script from "next/script";
import { env } from "@/lib/env";
import { featureFlags } from "@/lib/feature-flags";

type Props = {
  baseDomain?: string;
};

function renderGaScript(analyticsId: string) {
  return (
    <>
      <Script
        id="ga4-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsId}');
        `}
      </Script>
    </>
  );
}

function renderPlausibleScript(domain: string) {
  return (
    <Script
      id="plausible-loader"
      src="https://plausible.io/js/script.js"
      data-domain={domain}
      strategy="afterInteractive"
      defer
    />
  );
}

export function AnalyticsScript({ baseDomain }: Props) {
  if (!featureFlags.analytics) {
    return null;
  }

  if (env.analyticsProvider === "plausible") {
    // Plausible에서는 도메인 문자열을 식별자로 활용한다.
    return renderPlausibleScript(baseDomain ?? env.analyticsId);
  }

  return renderGaScript(env.analyticsId);
}
