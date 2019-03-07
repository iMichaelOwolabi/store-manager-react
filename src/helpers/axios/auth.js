import axios from './axiosInstance';

const axiosLogin = async (user) => {
  const response = await axios.post('/auth/login', user);

  return response;
};
export default axiosLogin;
