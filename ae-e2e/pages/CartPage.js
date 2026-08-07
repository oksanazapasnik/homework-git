const { BasePage } = require('./BasePage');
const { FooterComponent } = require('../pages/components/FooterComponent');

class CartPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.footer = new FooterComponent(page);

    this.cartTable = page.locator('#cart_info_table');
    this.rows = page.locator('#cart_info_table tbody tr');
    this.emptyCartMessage = page.locator('#empty_cart');
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
  }

  async open() {
    await this.goto('/view_cart');
  }

  /** Number of product rows currently in the cart. */
  async getItemCount() {
    return this.rows.count();
  }

  /** The product name for a given row. */
  async getProductNameByRow(rowIndex = 0) {
    return (
      (await this.rows.nth(rowIndex).locator('.cart_description h4 a').textContent()) ?? ''
    ).trim();
  }

  /** The quantity value shown for a given row. */
  async getQuantityByRow(rowIndex = 0) {
    return (
      (await this.rows.nth(rowIndex).locator('.cart_quantity button').textContent()) ?? ''
    ).trim();
  }

  /** True if the given product name appears anywhere in the cart. */
  async hasProduct(productName) {
    const names = await this.rows.locator('.cart_description h4 a').allTextContents();
    return names.some((n) => n.trim() === productName.trim());
  }

  async isCartTableVisible() {
    return this.cartTable.isVisible();
  }
}

module.exports = { CartPage };
