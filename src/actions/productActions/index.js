import { toast } from 'react-toastify';
import createProductRequest, {
  getAllProductsRequest,
  getSingleProductRequest,
} from '../../helpers/axios/product';
import actionTypes from './actionTypes';
import triggerLoading from '../../helpers/triggerLoading';
import { networkErrorMessage } from '../../constants';

const {
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_SUCCESS
} = actionTypes;

export const createProductSuccess = () => ({
  type: CREATE_PRODUCT_SUCCESS,
});

export const createProductFailure = () => ({
  type: CREATE_PRODUCT_FAILURE,
});

export const createProduct = product => async (dispatch) => {
  dispatch(triggerLoading(CREATE_PRODUCT_LOADING));
  try {
    const response = await createProductRequest(product);
    dispatch(createProductSuccess());
    toast.success(response.data.message);
  } catch (error) {
    if (error) {
      dispatch(createProductFailure());
      toast.error(error.response.data.message);
    } else {
      toast.warn(networkErrorMessage);
    }
  }
};

export const getProductsSuccess = payload => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload
});
export const getProductsFailure = () => ({
  type: GET_ALL_PRODUCTS_FAILURE
});

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await getAllProductsRequest();
    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

export const getProductFailure = () => ({
  type: GET_SINGLE_PRODUCT_FAILURE
});

export const getProductSuccess = payload => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  payload
});

export const getSingleProduct = id => async (dispatch) => {
  try {
    const response = await getSingleProductRequest(id);
    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
