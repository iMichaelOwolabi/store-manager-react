import actionTypes from '../../actions/productActions/actionTypes';
import initialState from '../initialState';

const {
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_SUCCESS,
} = actionTypes;

const { products } = initialState;

export default (state = products, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_LOADING:
      return {
        ...state,
        create: {
          createProductLoading: true
        }
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        create: {
          createProductLoading: false,
          success: false
        }
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        create: {
          createProductLoading: false,
          success: true,
        }
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        get: {
          products: action.payload.data,
        }
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        get: {
          ...state
        }
      };
    case GET_SINGLE_PRODUCT_FAILURE:
      return {
        theProduct: {
          state
        }
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        theProduct: {
          product: action.payload.data
        }
      };
    default:
      return state;
  }
};
