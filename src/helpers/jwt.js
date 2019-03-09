import { token } from '../constants';

const setToken = authentication => localStorage.setItem(token, authentication);
export default setToken;

export const getToken = () => localStorage.getItem(token);
