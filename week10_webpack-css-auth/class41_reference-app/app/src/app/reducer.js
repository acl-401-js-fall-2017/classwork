export const LOADING = 'LOADING';
export const LOADED = 'LOADED';
export const ERROR = 'ERROR';

export function loading(state = false, { type }) {
  switch(type) {
    case LOADING:
      return true;
    case LOADED:
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
    case LOADING:
      return null;
    default:
      return state;
  }
}