import { toast } from 'react-toastify';
import createProductRequest from '../../helpers/axios/product';
import actionTypes from './actionTypes';
import triggerLoading from '../../helpers/triggerLoading';
import { networkErrorMessage } from '../../constants';

const { CREATE_PRODUCT_LOADING, CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_SUCCESS } = actionTypes;

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
