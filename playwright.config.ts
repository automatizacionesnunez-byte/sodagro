import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  use: { baseURL: "http://127.0.0.1:4332", ...devices["Desktop Chrome"] },
  webServer: { command: "npm run dev -- --host 127.0.0.1 --port 4332", url: "http://127.0.0.1:4332", reuseExistingServer: false },
});
