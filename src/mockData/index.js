import { API_BASE_URL } from '../constants';

const mockResponse = {
  status: 200,
  success: false,
  data: {
    message: 'Oops! something went wrong, kindly try again'
  }
};
const fakeUser = {
  username: 'jones',
  password: 'password'
};
const payload = {
  username: 'jones',
  password: 'password'
};

const loginEndpoint = `${API_BASE_URL}/api/v1`;
export {
  mockResponse,
  fakeUser,
  loginEndpoint,
  payload
};
