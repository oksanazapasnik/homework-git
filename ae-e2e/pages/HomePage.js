const { BasePage } = require('./BasePage');
const { HeaderComponent } = require('../pages/components/HeaderComponent');
const { FooterComponent } = require('../pages/components/FooterComponent');

class HomePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.footer = new FooterComponent(page);
    this.slider = page.locator('#slider');
    this.featuresItems = page.locator('.features_items');
  }

  /** Open the home page from scratch. */
  async open() {
    await this.goto('/');
  }

  /** True once the hero slider is rendered — a proxy for "home loaded". */
  async isLoaded() {
    return this.slider.isVisible();
  }
}

module.exports = { HomePage };
