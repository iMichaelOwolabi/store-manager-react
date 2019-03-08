import Validator from 'validator';

const loginValidator = (username, password) => {
  if (username.trim().length === 0 || password.trim().length === 0) {
    return 'Kindly enter username and password to proceed';
  }
  return false;
};
export default loginValidator;

export const productValidator = (product) => {
  const errors = {};
  if (Validator.isEmpty(product.productName.trim())) {
    errors.productName = 'Product name is required';
  }
  if (Validator.isEmpty(product.price)) {
    errors.price = 'Price field is required';
  } else if (!Validator.isNumeric(product.price)) {
    errors.price = 'Price must be a number';
  }
  if (Validator.isEmpty(product.quantity)) {
    errors.quantity = 'Quantity is required';
  } else if (!Validator.isNumeric(product.quantity)) {
    errors.quantity = 'Quantity must be a number';
  }
  if (Validator.isEmpty(product.minQuantity)) {
    errors.minQuantity = 'The Minimum quantity is required';
  } else if (!Validator.isNumeric(product.minQuantity)) {
    errors.minQuantity = 'Minimum quantity must be a number';
  }
  if (Validator.isEmpty(product.productImage)) {
    errors.productImage = 'The product image is required';
  }
  return errors;
};
