import qs from 'query-string';
const url = '/api';

const wrap = async promise => {
  const response = await promise;
  if(response.ok) return response.json();

  const contentType = response.headers.get('content-type');
  
  const error = contentType && contentType.startsWith('application/json')
    ? await response.json()
    : await response.text();

  throw error;
};

const api = {
  get(path) {
    return wrap(
      fetch(`${url}${path}`)
    );
  },
  post(path, data) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    );
  },
  delete(path) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'delete'
      })
    );
  }
};

export const responseApi = {
  get(options = {}) {
    return api.get(`/test?${qs.stringify(options)}`);
  }
};