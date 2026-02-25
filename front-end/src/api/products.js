import api from './index';

export const productApi = {
  list() {
    return api.get('/products');
  },
  create(data) {
   
    return api.post('/products', data);
  }
};