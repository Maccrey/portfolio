import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    include: ["src/tests/**/*.test.ts", "src/tests/**/*.test.tsx"],
    exclude: ["e2e/**", "node_modules/**"],
    coverage: {
      reporter: ["text", "html"],
    },
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
