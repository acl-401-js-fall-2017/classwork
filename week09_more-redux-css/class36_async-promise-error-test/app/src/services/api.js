const url = '/api';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

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
        headers
      })
    );
  },
  put(path, data) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers
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

export default api;

export const booksApi = {
  get() {
    return api.get('/books');
  },
  add(book) {
    return api.post('/books', book);
  },
  update(book) {
    return api.put(`/books/${book._id}`, book);
  },
  remove(id) {
    return api.delete(`/books/${id}`);
  }
};