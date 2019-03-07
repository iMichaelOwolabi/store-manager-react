import actionTypes from '../../actions/authActions/actionTypes';
import initialState from '../initialState';

const {
  AUTH_LOADING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} = actionTypes;

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        authIsLoading: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authIsLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authIsLoading: false,
        success: true,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
