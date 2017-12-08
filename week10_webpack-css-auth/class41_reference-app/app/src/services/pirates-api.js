import api from './api';

export default {
  get(id) {
    const path = id ? `/pirates/${id}` : '/pirates';
    return api.get(path);
  },
  add(pirate) {
    return api.post('/pirates', pirate);
  },
  update(pirate) {
    return api.put(`/pirates/${pirate._id}`, pirate);
  },
  remove(id) {
    return api.delete(`/pirates/${id}`);
  }
};