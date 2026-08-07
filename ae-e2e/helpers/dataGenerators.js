// Pure functions for generating and preparing test data.

/** Return random alphanumeric string of the given length. */
function randomString(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generate a unique email address.
 */
function randomEmail(prefix = 'qa') {
  return `${prefix}.${Date.now()}.${randomString(4)}@example-test.com`;
}

/**
 * Build a valid user object for the signup flow.
 */
function generateUser(overrides = {}) {
  const suffix = randomString(5);
  return {
    name: `QA ${suffix}`,
    email: randomEmail(),
    password: `Pwd_${suffix}!1`,
    title: 'Mr',
    birthDay: '10',
    birthMonth: 'May',
    birthYear: '1990',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Test Co',
    address: '221B Baker Street',
    address2: 'Floor 2',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zipcode: 'M4B1B3',
    mobileNumber: '+15551234567',
    ...overrides,
  };
}

module.exports = {
  randomString,
  randomEmail,
  generateUser,
};
