import { env } from "./env";

export const featureFlags = {
  analytics: Boolean(env.analyticsId),
};
