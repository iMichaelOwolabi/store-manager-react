/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import {
  loginFailure,
  loginSuccess,
  userLogin
} from '..';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axios/auth';
import {
  mockResponse,
  fakeUser,
  payload,

} from '../../../mockData';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });
const dispatch = jest.fn();

describe('user authentication actions login', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.LOGIN_SUCCESS} is fired`, () => {
    expect(loginSuccess(payload)).toEqual({
      type: actionTypes.LOGIN_SUCCESS,
      payload
    });
  });

  it(`should return an action object once ${actionTypes.LOGIN_FAILURE} is fired`, () => {
    expect(loginFailure(payload)).toEqual({
      type: actionTypes.LOGIN_FAILURE
    });
  });

  it('should call the auth start dispatch function', () => {
    axios.axiosLogin = jest.fn().mockResolvedValue(mockResponse);
    userLogin(fakeUser)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.AUTH_LOADING });
  });

  it('should call the login success dispatch function', async () => {
    axios.axiosLogin = jest.fn().mockResolvedValue(mockResponse);
    await userLogin({}, true)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
  });

  it('should throw error', async () => {
    axios.axiosLogin = jest.fn(() => {
      throw { response: mockResponse };
    });
    try {
      await userLogin(fakeUser)(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith({
        type: actionTypes.LOGIN_FAILURE,
        payload: mockResponse,
      });
    }
    store.clearActions();
  });
});
