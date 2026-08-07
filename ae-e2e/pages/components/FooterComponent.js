/**
 * FooterComponent: the newsletter subscription box in the footer.
 */
class FooterComponent {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.subscriptionHeading = page.getByRole('heading', { name: 'Subscription' });
    this.emailInput = page.locator('#susbscribe_email');
    this.subscribeButton = page.locator('#subscribe');
    this.successMessage = page.locator('#success-subscribe');
  }

  /** Enter an email and submit the subscription form. */
  async subscribe(email) {
    await this.emailInput.scrollIntoViewIfNeeded();
    await this.emailInput.fill(email);
    await this.subscribeButton.click();
  }

  async isSuccessVisible() {
    return this.successMessage.isVisible();
  }

  async getSuccessText() {
    return this.successMessage.textContent();
  }
}

module.exports = { FooterComponent };
