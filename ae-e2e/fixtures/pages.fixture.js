const base = require('@playwright/test');
const { installConsentGuard } = require('../helpers/consent');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { SignupPage } = require('../pages/SignupPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage');
const { CartPage } = require('../pages/CartPage');
const { ContactUsPage } = require('../pages/ContactUsPage');

const test = base.test.extend({
  pageGuards: [
    async ({ page }, use) => {
      await installConsentGuard(page);
      page.on('dialog', (dialog) => dialog.accept().catch(() => {}));
      await use();
    },
    { auto: true },
  ],

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
});

const { expect } = base;

module.exports = { test, expect };
