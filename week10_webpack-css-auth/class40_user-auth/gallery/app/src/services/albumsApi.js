import { request } from './request';

const URL = '/albums';

export default {
  get() {
    return request.get(URL);
  },
  add(album) {
    return request.post(URL, album);
  },
  remove(id) {
    return request.delete(`${URL}/${id}`);
  }
};