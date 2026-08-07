const { BasePage } = require('./BasePage');

class ContactUsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);

    this.getInTouchHeading = page.getByRole('heading', { name: 'Get In Touch' });
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.subjectInput = page.locator('[data-qa="subject"]');
    this.messageInput = page.locator('[data-qa="message"]');
    this.submitButton = page.locator('[data-qa="submit-button"]');
    this.successMessage = page.locator('.status.alert-success');
  }

  async open() {
    await this.goto('/contact_us');
  }

  /**
   * Fill and submit the contact form.
   */
  async submitForm({ name, email, subject, message }) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
    await this.submitButton.click();
  }

  async isSuccessVisible() {
    return this.successMessage.isVisible();
  }

  async getSuccessText() {
    return this.successMessage.textContent();
  }
}

module.exports = { ContactUsPage };
