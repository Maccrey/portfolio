import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";

const ORIGINAL_ENV = { ...process.env };

describe("runtime env + feature flags", () => {
  beforeEach(() => {
    vi.resetModules();
    process.env = { ...ORIGINAL_ENV } as NodeJS.ProcessEnv;
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it("disables analytics when no ID is configured", async () => {
    delete process.env.NEXT_PUBLIC_ANALYTICS_ID;
    const { env } = await import("@/lib/env");
    const { featureFlags } = await import("@/lib/feature-flags");

    expect(env.analyticsProvider).toBe("ga4");
    expect(featureFlags.analytics).toBe(false);
  });

  it("enables Plausible mode when the provider is set", async () => {
    process.env.NEXT_PUBLIC_ANALYTICS_ID = "maccrey.dev";
    process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER = "plausible";

    const { env } = await import("@/lib/env");
    const { featureFlags } = await import("@/lib/feature-flags");

    expect(env.analyticsProvider).toBe("plausible");
    expect(featureFlags.analytics).toBe(true);
  });
});
