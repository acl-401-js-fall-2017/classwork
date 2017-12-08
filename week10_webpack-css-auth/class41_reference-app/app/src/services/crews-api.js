import api from './api';

export default {
  get(id) {
    const path = id ? `/crews/${id}` : '/crews';
    return api.get(path);
  },
  add(crew) {
    return api.post('/crews', crew);
  },
  update(crew) {
    return api.put(`/crews/${crew._id}`, crew);
  },
  remove(id) {
    return api.delete(`/crews/${id}`);
  }
};