import actionTypes from '../../actions/authActions/actionTypes';
import initialState from '../initialState';
import authReducer from '.';
import { payload } from '../../mockData';

const {
  AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = actionTypes;

describe('user authentication reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState.auth);
  });

  it('should update state when the start action is dispatched', () => {
    expect(authReducer(initialState.auth, { type: AUTH_LOADING })).toEqual((initialState, {
      authIsLoading: true,
      success: false,
      response: {},
      isAuthenticated: false,
    }));
  });

  it('should update state when the LOGIN_SUCCESS action is dispatched', () => {
    expect(authReducer(initialState.auth, {
      type: LOGIN_SUCCESS,
      payload
    })).toEqual((initialState, {
      authIsLoading: false,
      success: true,
      isAuthenticated: true,
      response: payload,
    }));
  });

  it('should update state when the LOGIN_FAILURE action is dispatched', () => {
    expect(authReducer(initialState.auth, {
      type: LOGIN_FAILURE,
    })).toEqual((initialState, {
      authIsLoading: false,
      success: false,
      response: {},
      isAuthenticated: false,
    }));
  });
});
