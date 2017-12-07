import store from '../store/index';
import superagent from 'superagent';

let token = '';

const storage = window.localStorage;

store.subscribe(() => {
  const { token: newToken } = store.getState().auth;
  if(newToken !== token) {
    token = newToken;
    token ? storage.token = token : storage.clear('token');
  }
});

export const getStoredToken = () => storage.token;

export const API_URL = '/api';

const wrap = cmd => cmd
  .set('Authorization', token)
  .then(
    r => r.body,
    ({ response }) => {
      const { body, text } = response;
      const error = body ? body.message || body.error || body : text;
      throw error;
    }
  );

export const request = {
  get(url) {
    return wrap(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrap(superagent.post(`${API_URL}${url}`).send(data));
  },
  delete(url) {
    return wrap(superagent.delete(`${API_URL}${url}`));
  },
};
