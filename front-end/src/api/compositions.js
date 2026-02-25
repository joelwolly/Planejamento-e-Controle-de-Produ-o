import api from './index';

export const compositionApi = {
  
  list() {
    return api.get('/compositions');
  },
 
  create(data) {
    return api.post('/compositions', data);
  }
};