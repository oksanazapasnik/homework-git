const { killConsentOverlay } = require('../helpers/consent');

class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  /** Navigate to a path relative to the configured baseURL. */
  async goto(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    await killConsentOverlay(this.page);
  }

  /** Scroll to the very bottom (footer, subscription box live there). */
  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  /** Current page title. */
  async getTitle() {
    return this.page.title();
  }
}

module.exports = { BasePage };
