const analyticsProvider = (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || "ga4").toLowerCase();

export type AnalyticsProvider = "ga4" | "plausible";

function resolveAnalyticsProvider(provider: string): AnalyticsProvider {
  if (provider === "plausible") {
    return "plausible";
  }
  return "ga4";
}

export const env = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "",
  analyticsProvider: resolveAnalyticsProvider(analyticsProvider),
};

export const isAnalyticsConfigured = Boolean(env.analyticsId);
