export const CREW_ADD = 'CREW_ADD';
export const CREW_REMOVE = 'CREW_REMOVE';
export const CREW_UPDATE = 'CREW_UPDATE';

export default function crews(state = [], { type, payload }) {
  switch(type) {
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