const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    isAuthenticated: false,
    response: {}
  },
  products: {
    create: {
      createProductLoading: false,
      success: false,
    },
    get: {
      success: true,
      products: []
    },
    theProduct: {
      product: []
    }
  }
};
export default initialState;
