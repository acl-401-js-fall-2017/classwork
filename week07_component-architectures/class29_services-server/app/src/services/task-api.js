import api from './api';

export default {
  get(listId) {
    return api.get(`/lists/${listId}/tasks`);
  },
  add(task) {
    return api.post(`/lists/${task.list}/tasks`, task);
  },
  remove(listId, id) {
    return api.delete(`/lists/${listId}/tasks/${id}`);
  }
};