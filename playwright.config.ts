import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 5 * 60 * 1000,
  workers: 2, // full-site crawl tests are heavy; more workers than this risks browser crashes on a laptop
  use: {
    baseURL: "http://localhost:3000",
    headless: true, // set to false only when debugging a specific test with --headed
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    actionTimeout: 5000,
    navigationTimeout: 15000,
  },
});
