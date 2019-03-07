import { toast } from 'react-toastify';
import axiosLogin from '../../helpers/axios/auth';
import actionTypes from './actionTypes';
import triggerLoading from '../../helpers/triggerLoading';
import { networkErrorMessage } from '../../constants';
import setToken from '../../helpers/jwt';

const { AUTH_LOADING, LOGIN_FAILURE, LOGIN_SUCCESS } = actionTypes;

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = payload => ({
  type: LOGIN_FAILURE,
  payload
});

export const userLogin = user => async (dispatch) => {
  dispatch(triggerLoading(AUTH_LOADING));
  try {
    const response = await axiosLogin(user);
    setToken(response.data.data.token);
    dispatch(loginSuccess(response));
    toast.success(response.data.message);
  } catch (error) {
    if (error) {
      dispatch(loginFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      toast.warn(networkErrorMessage);
    }
  }
};
