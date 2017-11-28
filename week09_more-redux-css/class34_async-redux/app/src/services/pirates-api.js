import api from './api';

export default {
  get(crewId) {
    return api.get(`/pirates?crew=${crewId}`);
  },
  add(pirate) {
    return api.post('/pirates', pirate);
  },
  remove(id) {
    return api.delete(`/pirates/${id}`);
  }
};