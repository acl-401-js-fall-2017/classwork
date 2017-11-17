import api from './api';

export default {
  get() {
    return api.get('/lists');
  },
  add(list) {
    return api.post('/lists', list);
  },
  remove(id) {
    return api.fetch(`/lists/${id}`);
  }
};