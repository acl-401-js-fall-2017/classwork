import { request } from './request';

const URL = '/albums';

export default {
  get(id) {
    return request.get(`${URL}/${id}`);
  },
  addImage(albumId, image) {
    return request.post(`${URL}/${albumId}/images`, image);
  },
  removeImage(albumId, id) {
    return request.delete(`${URL}/${albumId}/images/${id}`);
  }
};