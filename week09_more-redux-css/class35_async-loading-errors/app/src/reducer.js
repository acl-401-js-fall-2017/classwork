export const RESPONSE_COMPLETE = 'RESPONSE_COMPLETE';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export function response(state = null, { type, payload }) {
  switch(type) {
    case RESPONSE_COMPLETE:
      return payload;
    default:
      return state;
  }
}

export function loading(state = false, { type }) {
  switch(type) {
    case LOADING:
      return true;
    case RESPONSE_COMPLETE:
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
    case RESPONSE_COMPLETE:
    case LOADING:
      return null;
    default:
      return state;
  }
}