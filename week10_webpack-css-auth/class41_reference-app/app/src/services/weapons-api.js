import api from './api';

export default {
  get(id) {
    const path = id ? `/weapons/${id}` : '/weapons';
    return api.get(path);
  },
  add(weapon) {
    return api.post('/weapons', weapon);
  },
  update(weapon) {
    return api.put(`/weapons/${weapon._id}`, weapon);
  },
  remove(id) {
    return api.delete(`/weapons/${id}`);
  }
};