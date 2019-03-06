const loginValidator = (username, password) => {
  if (username.trim().length === 0 || password.trim().length === 0) {
    return 'Kindly enter username and password to proceed';
  }
  return false;
};
export default loginValidator;
