const { test, expect } = require('../fixtures/pages.fixture');
const { generateUser } = require('../helpers/dataGenerators');
const testData = require('../test-data/testData');

test.describe('Contact Us', () => {
  test('should submit the contact form successfully', async ({ homePage, contactUsPage }) => {
    const user = generateUser();

    await homePage.open();
    await homePage.header.goToContactUs();
    await expect(contactUsPage.getInTouchHeading).toBeVisible();

    await contactUsPage.submitForm({
      name: user.name,
      email: user.email,
      subject: testData.contactMessage.subject,
      message: testData.contactMessage.message,
    });

    await expect(contactUsPage.successMessage).toContainText(
      testData.expectedMessages.contactSuccess,
      { ignoreCase: true },
    );
  });
});
