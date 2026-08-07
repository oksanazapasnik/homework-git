const { BasePage } = require('./BasePage');

class ProductsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);

    this.allProductsHeading = page.getByRole('heading', { name: 'All Products' });
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsHeading = page.getByRole('heading', { name: 'Searched Products' });

    this.productCards = page.locator('.features_items .product-image-wrapper');

    // Add-to-cart confirmation modal.
    this.cartModal = page.locator('#cartModal');
    this.continueShoppingButton = this.cartModal.getByRole('button', {
      name: 'Continue Shopping',
    });
    this.viewCartLink = this.cartModal.getByRole('link', { name: 'View Cart' });
  }

  async open() {
    await this.goto('/products');
  }

  /** Enter a term and submit the product search. */
  async searchForProduct(term) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  /** How many product cards are currently rendered. */
  async getProductCount() {
    return this.productCards.count();
  }

  /**
   * Add the Nth product to the cart via its hover "Add to cart"
   * button, then dismiss the modal with "Continue Shopping".
   */
  async addProductToCartByIndex(index = 0) {
    const card = this.productCards.nth(index);
    await card.scrollIntoViewIfNeeded();
    await card.hover();
    await card.locator('.product-overlay a.add-to-cart').first().click();
    await this.continueShoppingButton.click();
  }

  /** Open the details page for the Nth product. */
  async openProductDetailsByIndex(index = 0) {
    const card = this.productCards.nth(index);
    await card.scrollIntoViewIfNeeded();
    await card.locator('a:has-text("View Product")').click();
  }

  async isAllProductsVisible() {
    return this.allProductsHeading.isVisible();
  }

  async isSearchedProductsVisible() {
    return this.searchedProductsHeading.isVisible();
  }
}

module.exports = { ProductsPage };
