export const RESPONSE_LOAD = 'RESPONSE_LOAD';
export const LOADING = 'LOADING';

export function response(state = null, { type, payload }) {
  switch(type) {
    case RESPONSE_LOAD:
      return payload;
    default:
      return state;
  }
}

export function loading(state = false, { type, payload }) {
  switch(type) {
    case LOADING:
      return true;
    case RESPONSE_LOAD:
      return false;
    default:
      return state;
  }
}