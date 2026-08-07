/**
 * HeaderComponent: the site's top navigation bar.
 */
class HeaderComponent {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: ' Home' });
    this.productsLink = page.getByRole('link', { name: ' Products' });
    this.cartLink = page.locator('a[href="/view_cart"]').first();
    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.contactUsLink = page.getByRole('link', { name: ' Contact us' });
    this.logoutLink = page.getByRole('link', { name: ' Logout' });
    this.deleteAccountLink = page.getByRole('link', { name: ' Delete Account' });
    this.loggedInAs = page.locator('a:has-text("Logged in as")');
  }

  async goToProducts() {
    await this.productsLink.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async goToSignupLogin() {
    await this.signupLoginLink.click();
  }

  async goToContactUs() {
    await this.contactUsLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async deleteAccount() {
    await this.deleteAccountLink.click();
  }

  async isLoggedIn() {
    return this.loggedInAs.isVisible();
  }

  async getLoggedInUsername() {
    const text = (await this.loggedInAs.textContent()) ?? '';
    return text.replace('Logged in as', '').trim();
  }
}

module.exports = { HeaderComponent };
