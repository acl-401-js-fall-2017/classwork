export const RESPONSE_LOAD = 'RESPONSE_LOAD';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export function response(state = null, { type, payload }) {
  switch(type) {
    case RESPONSE_LOAD:
      return payload;
    default:
      return state;
  }
}

export function loading(state = false, { type }) {
  switch(type) {
    case LOADING:
      return true;
    case RESPONSE_LOAD:
    case ERROR:
      return false;
    default:
      return state;
  }
}

export function error(state = null, { type, payload }) {
  switch(type) {
    case ERROR:
      return payload;
    case RESPONSE_LOAD:
    case LOADING:
      return null;
    default:
      return state;
  }
}