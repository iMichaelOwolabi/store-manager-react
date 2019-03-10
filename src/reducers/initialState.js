const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    isAuthenticated: false,
    response: {}
  },
  product: {
    create: {
      createProductLoading: false,
      success: false,
    },
    get: {
      success: true,
      products: []
    }
  }
};
export default initialState;
