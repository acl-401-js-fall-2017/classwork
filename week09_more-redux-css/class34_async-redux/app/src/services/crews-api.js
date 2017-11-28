import api from './api';

export default {
  get() {
    return api.get('/crews');
  },
  add(crew) {
    return api.post('/crews', crew);
  },
  remove(id) {
    return api.fetch(`/crews/${id}`);
  }
};