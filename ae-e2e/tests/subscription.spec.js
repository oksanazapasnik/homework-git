const { test, expect } = require('../fixtures/pages.fixture');
const { randomEmail } = require('../helpers/dataGenerators');
const testData = require('../test-data/testData');

test.describe('Subscription', () => {
  test('should subscribe successfully from the home page footer', async ({ homePage }) => {
    await homePage.open();
    await homePage.scrollToBottom();
    await expect(homePage.footer.subscriptionHeading).toBeVisible();

    await homePage.footer.subscribe(randomEmail('sub'));

    await expect(homePage.footer.successMessage).toContainText(
      testData.expectedMessages.subscribeSuccess,
      { ignoreCase: true },
    );
  });

  test('should subscribe successfully from the cart page footer', async ({ cartPage }) => {
    await cartPage.open();
    await cartPage.scrollToBottom();
    await expect(cartPage.footer.subscriptionHeading).toBeVisible();

    await cartPage.footer.subscribe(randomEmail('sub'));

    await expect(cartPage.footer.successMessage).toContainText(
      testData.expectedMessages.subscribeSuccess,
      { ignoreCase: true },
    );
  });
});
