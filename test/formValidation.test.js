const { isValidEmail } = require('../formValidation');

describe('isValidEmail', () => {
  test('valid email passes', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('invalid email fails', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });
});
