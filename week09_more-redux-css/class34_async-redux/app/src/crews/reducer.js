export const CREW_LOAD = 'CREW_LOAD';
export const CREW_ADD = 'CREW_ADD';
export const CREW_REMOVE = 'CREW_REMOVE';
export const CREW_UPDATE = 'CREW_UPDATE';
export const CREW_ERROR = 'CREW_ERROR';

export function crews(state = [], { type, payload }) {
  switch(type) {
    case CREW_LOAD:
      return payload;
    case CREW_ADD:
      return [...state, payload];
    case CREW_REMOVE:
      return state.filter(c => c._id !== payload);
    case CREW_UPDATE:
      return state.map(c => c._id === payload._id ? { ...c, ...payload } : c);
    default:
      return state;
  }
}

export function crewsLoading(state = false, { type, payload }) {
  switch(type) {
    default:
      return state;
  }
}

export function crewsError(state = null, { type, payload }) {
  switch(type) {
    case CREW_LOAD:
    case CREW_ADD:
    case CREW_REMOVE:
    case CREW_UPDATE:
      return null;
    case CREW_ERROR:
      return payload;
    default:
      return state;
  }
}