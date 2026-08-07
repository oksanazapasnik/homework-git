const { BasePage } = require('./BasePage');

class ProductDetailsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);

    this.info = page.locator('.product-information');
    this.name = this.info.locator('h2');
    this.category = this.info.locator('p', { hasText: 'Category:' });
    this.price = this.info.locator('span span');
    this.availability = this.info.locator('p:has-text("Availability:")');
    this.condition = this.info.locator('p:has-text("Condition:")');
    this.brand = this.info.locator('p:has-text("Brand:")');

    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.locator('button.cart');

    // Modal shown after adding to cart.
    this.cartModal = page.locator('#cartModal');
    this.viewCartLink = this.cartModal.getByRole('link', { name: 'View Cart' });
    this.continueShoppingButton = this.cartModal.getByRole('button', {
      name: 'Continue Shopping',
    });
  }

  async open(productId = 1) {
    await this.goto(`/product_details/${productId}`);
  }

  async getProductName() {
    return ((await this.name.textContent()) ?? '').trim();
  }

  async isDetailVisible() {
    return this.info.isVisible();
  }

  async setQuantity(quantity) {
    await this.quantityInput.fill(String(quantity));
  }

  async addToCartAndViewCart() {
    await this.addToCartButton.click();
    await this.viewCartLink.click();
  }
}

module.exports = { ProductDetailsPage };
