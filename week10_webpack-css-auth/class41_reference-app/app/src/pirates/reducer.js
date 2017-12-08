import { CREW_LOAD, ADD_TO_CREW, REMOVE_FROM_CREW } from '../crews/reducer';
export const PIRATES_LOAD = 'PIRATES_LOAD';
export const PIRATE_LOAD = 'PIRATE_LOAD';
export const PIRATE_ADD = 'PIRATE_ADD';
export const PIRATE_REMOVE = 'PIRATE_REMOVE';
export const PIRATE_UPDATE = 'PIRATE_UPDATE';

export function pirates(state = null, { type, payload }) {
  switch(type) {
    case PIRATES_LOAD:
      return payload.map(pirate => pirate._id);
    case PIRATE_ADD:
      return [...state, payload._id];
    case PIRATE_REMOVE:
      return state.filter(id => id !== payload);
    case CREW_LOAD: {
      const { pirates } = payload;
      if(!pirates) return state;
      if(!state) return pirates.map(p => p._id);

      const set = new Set(state);
      pirates.forEach(p => set.add(p._id));
      return [...set.values()];
    }
    default:
      return state;
  }
}

export function piratesLoaded(state = false, { type }) {
  switch(type) {
    case PIRATES_LOAD:
      return true;
    default:
      return state;
  }
}

export function piratesById(state = {}, { type, payload }) {
  switch(type) {
    case PIRATES_LOAD:
      return payload.reduce((map, pirate) => {
        map[pirate._id] = {
          ...pirate,
          crew: pirate.crew ? (pirate.crew._id || pirate.crew) : null
        };
        return map;
      }, state);
    case PIRATE_ADD:
      return {
        ...state, 
        [payload._id]: payload
      };
    case PIRATE_REMOVE: {
      const { [payload]: id, ...rest } = state;
      return rest;
    }
    case PIRATE_LOAD:
    case PIRATE_UPDATE: {
      const pirate = state[payload._id] || {};
      return {
        ...state,
        [payload._id]: {
          ...pirate,
          ...payload,
        }
      };    
    }
    case ADD_TO_CREW: {
      const pirate = state[payload.pirateId];
      return {
        ...state,
        [payload.pirateId]: {
          ...pirate,
          crew: payload.crewId
        }
      };
    }
    case REMOVE_FROM_CREW:
      return piratesById(state, { 
        type: ADD_TO_CREW, 
        payload: {
          crewId: null,
          pirateId: payload.pirateId
        }
      });
    case CREW_LOAD: {
      const { pirates } = payload;
      if(!pirates) return state;
      return piratesById(state, { type: PIRATES_LOAD, payload: pirates });
    }
    default:
      return state;
  }
}