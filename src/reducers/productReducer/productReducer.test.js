import actionTypes from '../../actions/productActions/actionTypes';
import initialState from '../initialState';
import productReducer from '.';

const {
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_SUCCESS
} = actionTypes;

describe('create product reducer', () => {
  it('should return the initial state', () => {
    expect(productReducer(undefined, {})).toEqual(initialState.product.create);
  });

  it('should update state when the start action is dispatched', () => {
    expect(productReducer(initialState.product.create, {
      type: CREATE_PRODUCT_LOADING
    })).toEqual((initialState, {
      createProductLoading: true,
      success: false,
    }));
  });

  it('should update state when the CREATE PRODUCT SUCCESS action is dispatched', () => {
    expect(productReducer(initialState.product.create, {
      type: CREATE_PRODUCT_SUCCESS,
    })).toEqual((initialState, {
      createProductLoading: false,
      success: true
    }));
  });

  it('should update state when the CREATE PRODUCT FAILURE action is dispatched', () => {
    expect(productReducer(initialState.product.create, {
      type: CREATE_PRODUCT_FAILURE,
    })).toEqual((initialState, {
      createProductLoading: false,
      success: false
    }));
  });
});
