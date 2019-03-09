/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import {
  createProduct,
  createProductSuccess,
  createProductFailure
} from '.';
import actionTypes from './actionTypes';
import * as axios from '../../helpers/axios/product';
import {
  mockResponse,
  payload,
} from '../../mockData';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });
const dispatch = jest.fn();

describe('create product actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should return an action object once CREATE_PRODUCT_SUCCESS is fired', () => {
    expect(createProductSuccess()).toEqual({
      type: actionTypes.CREATE_PRODUCT_SUCCESS,
    });
  });

  it('should return an action object once CREATE_PRODUCT_FAILURE is fired', () => {
    expect(createProductFailure()).toEqual({
      type: actionTypes.CREATE_PRODUCT_FAILURE
    });
  });

  it('should call the product start dispatch function', () => {
    axios.createProductRequest = jest.fn().mockResolvedValue(mockResponse);
    createProduct(payload)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.CREATE_PRODUCT_LOADING });
  });

  it('should throw error', async () => {
    axios.createProductRequest = jest.fn(() => {
      throw { response: mockResponse };
    });
    try {
      await createProduct(payload)(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith({
        type: actionTypes.CREATE_PRODUCT_FAILURE,
        payload: mockResponse,
      });
    }
    store.clearActions();
  });
});
