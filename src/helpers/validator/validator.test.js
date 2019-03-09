import loginValidator, { productValidator } from '.';

describe('test login validation function', () => {
  test('return value of the login validation function', () => {
    const username = '';
    const password = '';
    expect(loginValidator(username, password)).toBe(
      'Kindly enter username and password to proceed'
    );
  });
  test('return value of the login validation function', () => {
    const username = 'username';
    const password = 'password';
    expect(loginValidator(username, password)).toBe(false);
  });
});

describe('Test validator', () => {
  // it('should check for valid email', () => {
  //   const user = {
  //     email: 'fakerfake.com',
  //     password: 'passwordA23s'
  //   };
  //   const checkUser = signInValidator(user);
  //   expect(checkUser.email).toEqual('Invalid Email Address');
  // });

  it('should check if product name field is empty', () => {
    const product = {
      productName: '',
      price: '2',
      quantity: '1',
      minQty: '1',
      productImage: 'img'
    };
    const checkProduct = productValidator(product);
    expect(checkProduct.productName).toEqual('Product name is required');
  });
  it('should check if product price field is empty', () => {
    const product = {
      productName: 'pro',
      price: '',
      quantity: '1',
      minQty: '1',
      productImage: 'img'
    };
    const checkProduct = productValidator(product);
    expect(checkProduct.price).toEqual('Price field is required');
  });
  it('should check if product price field is a number', () => {
    const product = {
      productName: 'pro',
      price: 'come',
      quantity: '1',
      minQty: '1',
      productImage: 'img'
    };
    const checkProduct = productValidator(product);
    expect(checkProduct.price).toEqual('Price must be a number');
  });
  it('should check if product quantity field is empty', () => {
    const product = {
      productName: 'pro',
      price: '2',
      quantity: '',
      minQty: '1',
      productImage: 'img'
    };
    const checkProduct = productValidator(product);
    expect(checkProduct.quantity).toEqual('Quantity is required');
  });
  it('should check if product quantity field is a number', () => {
    const product = {
      productName: 'pro',
      price: '1',
      quantity: 'qty',
      minQty: '1',
      productImage: 'img'
    };
    const checkProduct = productValidator(product);
    expect(checkProduct.quantity).toEqual('Quantity must be a number');
  });
  it('should check if min quantity field is empty', () => {
    const product = {
      productName: 'pro',
      price: '2',
      quantity: '1',
      minQty: '',
      productImage: 'img'
    };
    const checkProduct = productValidator(product);
    expect(checkProduct.minQty).toEqual('The Minimum quantity is required');
  });
  it('should check if minimum quantity field is a number', () => {
    const product = {
      productName: 'pro',
      price: '1',
      quantity: '1',
      minQty: 'miqty',
      productImage: 'img'
    };
    const checkProduct = productValidator(product);
    expect(checkProduct.minQty).toEqual('Minimum quantity must be a number');
  });
});
