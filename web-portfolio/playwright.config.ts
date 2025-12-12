import fs from "fs";
import path from "path";
import { defineConfig, devices } from "@playwright/test";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
const { combinedEnv } = loadEnvConfig(projectDir, true);

process.env.NEXT_PUBLIC_BASE_PATH = "";

const PORT = 4123;
let resolvedBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? combinedEnv?.NEXT_PUBLIC_BASE_PATH;

if (resolvedBasePath === undefined) {
  const envPath = path.join(projectDir, ".env.local");
  if (fs.existsSync(envPath)) {
    const match = fs.readFileSync(envPath, "utf8").match(/^NEXT_PUBLIC_BASE_PATH=(.*)$/m);
    if (match?.[1]) {
      resolvedBasePath = match[1];
    }
  }
}

const BASE_PATH = resolvedBasePath ? `/${resolvedBasePath}` : "";
const BASE_URL = `http://127.0.0.1:${PORT}${BASE_PATH}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: `npm run dev -- --hostname 127.0.0.1 --port ${PORT}`,
    reuseExistingServer: !process.env.CI,
    url: BASE_URL,
    stdout: "pipe",
    stderr: "pipe",
    env: {
      NEXT_PUBLIC_BASE_PATH: "",
      NO_BASE_PATH: "true",
    },
  },
});
