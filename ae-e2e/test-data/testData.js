module.exports = {
  // Invalid credentials.
  invalidCredentials: {
    email: 'not.registered.user@example-test.com',
    password: 'definitely-wrong-password',
  },

  // Search inputs.
  searchTerms: ['dress', 'top', 'jeans', 'tshirt'],

  // Contact-us form payload.
  contactMessage: {
    subject: 'Automated test enquiry',
    message: 'This message was submitted by an automated end-to-end test.',
  },

  // Expected messages.
  expectedMessages: {
    loginError: 'Your email or password is incorrect!',
    signupExistingEmailError: 'Email Address already exist!',
    contactSuccess: 'Success! Your details have been submitted successfully.',
    subscribeSuccess: 'You have been successfully subscribed!',
    accountCreated: 'Account Created!',
    accountDeleted: 'Account Deleted!',
  },
};
