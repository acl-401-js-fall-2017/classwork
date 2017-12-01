export const BOOK_LOAD = 'BOOK_LOAD';
export const BOOK_ADD = 'BOOK_ADD';
export const BOOK_REMOVE = 'BOOK_REMOVE';
export const BOOK_UPDATE = 'BOOK_UPDATE';

export const REVIEW_LOAD = 'REVIEW_LOAD';
export const REVIEW_ADD = 'REVIEW_ADD';

export function books(state = [], { type, payload }) {
  switch(type) {
    case BOOK_LOAD:
      return payload;
    case BOOK_ADD:
      return [...state, payload];
    case BOOK_REMOVE:
      return state.filter(b => b._id !== payload);
    case BOOK_UPDATE:
      return state.map(b => b._id === payload._id ? payload : b);
    default:
      return state;
  }
}

export function reviews(state = {}, { type, payload }) {
  switch(type) {
    case REVIEW_LOAD:
      return {
        ...state,
        [payload.parentId]: payload.children
      };
    default:
      return state;
  }
}