import api from './index';

export const materialApi = {
  
  list() {
    return api.get('/materials');
  },
  

  create(data) {
    return api.post('/materials', data);
  }
};