const { test, expect } = require('../fixtures/pages.fixture');
const { generateUser } = require('../helpers/dataGenerators');
const testData = require('../test-data/testData');

test.describe('Account', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await expect.poll(() => homePage.isLoaded()).toBe(true);
  });

  test('should register a new user and then delete the account', async ({
    homePage,
    loginPage,
    signupPage,
  }) => {
    const user = generateUser();

    await homePage.header.goToSignupLogin();
    await loginPage.startSignup(user.name, user.email);
    await signupPage.fillAccountInformation(user);

    await expect(signupPage.accountCreated).toContainText(
      testData.expectedMessages.accountCreated,
      { ignoreCase: true },
    );

    await signupPage.continueAfterCreation();

    expect(await homePage.header.isLoggedIn()).toBe(true);
    expect(await homePage.header.getLoggedInUsername()).toBe(user.name);

    await homePage.header.deleteAccount();
    await expect(signupPage.accountDeleted).toContainText(
      testData.expectedMessages.accountDeleted,
      { ignoreCase: true },
    );
  });

  test('should log in with a freshly registered account and then log out', async ({
    homePage,
    loginPage,
    signupPage,
  }) => {
    const user = generateUser();
    await homePage.header.goToSignupLogin();
    await loginPage.startSignup(user.name, user.email);
    await signupPage.fillAccountInformation(user);
    await signupPage.continueAfterCreation();
    await homePage.header.logout();

    await loginPage.login(user.email, user.password);

    expect(await homePage.header.isLoggedIn()).toBe(true);
    expect(await homePage.header.getLoggedInUsername()).toBe(user.name);

    await homePage.header.logout();
    await expect(loginPage.loginHeading).toBeVisible();
    expect(await homePage.header.isLoggedIn()).toBe(false);

    // Clean up: log back in and delete the throwaway account.
    await loginPage.login(user.email, user.password);
    await homePage.header.deleteAccount();
    await expect(signupPage.accountDeleted).toBeVisible();
  });

  test('should show an error when signing up with an already registered email', async ({
    homePage,
    loginPage,
    signupPage,
  }) => {
    const user = generateUser();
    await homePage.header.goToSignupLogin();
    await loginPage.startSignup(user.name, user.email);
    await signupPage.fillAccountInformation(user);
    await signupPage.continueAfterCreation();

    await homePage.header.logout();

    await loginPage.open();
    await loginPage.startSignup(user.name, user.email);

    await expect(loginPage.signupError).toContainText(
      testData.expectedMessages.signupExistingEmailError,
      { ignoreCase: true },
    );

    const cleanup = async () => {
      await homePage.open();
      await loginPage.open();
      await loginPage.login(user.email, user.password);
      await homePage.header.deleteAccount();
    };
    await cleanup();
  });

// Should reject invalid login
  const invalidLogins = [
    testData.invalidCredentials,
    { email: 'unknown.user@example-test.com', password: 'WrongPass1!' },
    { email: 'ghost@example-test.com', password: 'anotherWrong9' },
  ];

  for (const creds of invalidLogins) {
    test(`should reject invalid login (email="${creds.email}")`, async ({
      homePage,
      loginPage,
    }) => {
      await homePage.header.goToSignupLogin();
      await loginPage.login(creds.email, creds.password);

      await expect(loginPage.loginError).toContainText(testData.expectedMessages.loginError, {
        ignoreCase: true,
      });
    });
  }
});
