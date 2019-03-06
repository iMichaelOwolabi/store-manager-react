import loginValidator from '.';

describe('test login validation function', () => {
  test('return value of the login validation function', () => {
    const username = '';
    const password = '';
    expect(loginValidator(username, password)).toBe('Kindly enter username and password to proceed');
  });
  test('return value of the login validation function', () => {
    const username = 'username';
    const password = 'password';
    expect(loginValidator(username, password)).toBe(false);
  });
});
