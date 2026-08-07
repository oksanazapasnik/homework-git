const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);

    // Login block
    this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loginError = page.locator('form').filter({ hasText: 'Login' }).locator('p');

    // Signup block
    this.signupHeading = page.getByRole('heading', { name: 'New User Signup!' });
    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.signupError = page.locator('form').filter({ hasText: 'Signup' }).locator('p');
  }

  async open() {
    await this.goto('/login');
  }

  /** Fill and submit the login form. */
  async login(email, password) {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  /** Start the signup flow; leads to the account-information page. */
  async startSignup(name, email) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }

  async getLoginErrorText() {
    return this.loginError.textContent();
  }

  async getSignupErrorText() {
    return this.signupError.textContent();
  }
}

module.exports = { LoginPage };
