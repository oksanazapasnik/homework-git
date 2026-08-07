// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Fail the build on CI if test.only is left in the source.
  forbidOnly: !!process.env.CI,

  // Retry once on CI to smooth over network flakiness of the public demo site.
  retries: process.env.CI ? 1 : 0,

  // Run tests in each file in parallel.
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,

  // Reporters: HTML report (opened via `npm run report`) + concise line output.
  reporter: [['html', { open: 'never', outputFolder: 'playwright-report' }], ['list']],

  // Settings shared by all projects.
  use: {
    baseURL: 'https://www.automationexercise.com',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,

    // Artifacts captured only when a test fails — keeps successful runs light.
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  expect: {
    timeout: 10_000,
  },

  // Cross-browser execution. Enable more projects as needed.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
