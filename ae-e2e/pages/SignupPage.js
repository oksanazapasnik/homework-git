const { BasePage } = require('./BasePage');

class SignupPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);

    this.enterAccountInfoHeading = page.getByText('Enter Account Information');
    this.titleMr = page.locator('#id_gender1');
    this.titleMrs = page.locator('#id_gender2');
    this.password = page.locator('#password');
    this.days = page.locator('#days');
    this.months = page.locator('#months');
    this.years = page.locator('#years');
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.company = page.locator('#company');
    this.address = page.locator('#address1');
    this.address2 = page.locator('#address2');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');
    this.createAccountButton = page.locator('[data-qa="create-account"]');

    // Confirmation screens.
    this.accountCreated = page.locator('[data-qa="account-created"]');
    this.continueButton = page.locator('[data-qa="continue-button"]');
    this.accountDeleted = page.locator('[data-qa="account-deleted"]');
  }

  /**
   * Fill the whole account-information form from a user object and submit it.
   */
  async fillAccountInformation(user) {
    await (user.title === 'Mrs' ? this.titleMrs : this.titleMr).check();
    await this.password.fill(user.password);
    await this.days.selectOption(user.birthDay);
    await this.months.selectOption({ label: user.birthMonth });
    await this.years.selectOption(user.birthYear);
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.company.fill(user.company);
    await this.address.fill(user.address);
    await this.address2.fill(user.address2);
    await this.country.selectOption({ label: user.country });
    await this.state.fill(user.state);
    await this.city.fill(user.city);
    await this.zipcode.fill(user.zipcode);
    await this.mobileNumber.fill(user.mobileNumber);
    await this.createAccountButton.click();
  }

  async getAccountCreatedText() {
    return this.accountCreated.textContent();
  }

  async continueAfterCreation() {
    await this.continueButton.click();
  }

  async getAccountDeletedText() {
    return this.accountDeleted.textContent();
  }
}

module.exports = { SignupPage };
