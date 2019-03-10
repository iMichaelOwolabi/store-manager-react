import axios from './axiosInstance';
import { getToken } from '../jwt';

const options = {
  headers: {
    'x-access-token': getToken()
  }
};
const createProductRequest = async (product) => {
  const response = await axios.post('/products', product, options);
  return response;
};
export default createProductRequest;

const getAllProductsRequest = async () => {
  const response = await axios('/products', options);
  return response;
};
export { getAllProductsRequest };
