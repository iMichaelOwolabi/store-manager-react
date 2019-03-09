import actionTypes from '../../actions/productActions/actionTypes';
import initialState from '../initialState';

const {
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_SUCCESS
} = actionTypes;

export default (state = initialState.product.create, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_LOADING:
      return {
        ...state,
        createProductLoading: true
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        createProductLoading: false,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        createProductLoading: false,
        success: true,
      };
    default:
      return state;
  }
};
