import { PIRATE_LOAD } from '../pirates/reducer';
export const CREWS_LOAD = 'CREWS_LOAD';
export const CREW_LOAD = 'CREW_LOAD';
export const CREW_ADD = 'CREW_ADD';
export const CREW_REMOVE = 'CREW_REMOVE';
export const CREW_UPDATE = 'CREW_UPDATE';
export const ADD_TO_CREW = 'ADD_TO_CREW';
export const REMOVE_FROM_CREW = 'REMOVE_FROM_CREW';

export function crews(state = null, { type, payload }) {
  switch(type) {
    case CREWS_LOAD:
      return payload.map(crew => crew._id);
    case CREW_ADD:
      return [...state, payload._id];
    case CREW_REMOVE:
      return state.filter(id => id !== payload);
    case PIRATE_LOAD: {
      if(!state) return [payload.crew._id];
      const found = state.find(c => c === payload.crew._id);
      if(found) return state;
      return [...state, payload.crew];
    }
    default:
      return state;
  }
}


export function crewsLoaded(state = false, { type }) {
  switch(type) {
    case CREWS_LOAD:
      return true;
    default:
      return state;
  }
}


export function crewsById(state = {}, { type, payload }) {
  switch(type) {
    case CREWS_LOAD:
      return payload.reduce((map, crew) => {
        map[crew._id] = crew;
        return map;
      }, state);
    case CREW_ADD:
      return {
        ...state, 
        [payload._id]: payload
      };
    case CREW_REMOVE: {
      const { [payload]: id, ...rest } = state;
      return rest;
    }
    case CREW_LOAD:
    case CREW_UPDATE: {
      let { pirates, ...rest } = payload;
      pirates = pirates ? pirates.map(p => p._id) : pirates;
      return {
        ...state,
        [payload._id]: { ...rest, pirates }
      };
    }
    case ADD_TO_CREW: {
      const crew = state[payload.crewId];
      return {
        ...state,
        [payload.crewId]: {
          ...crew, 
          pirates: [...crew.pirates, payload.pirateId]
        }
      };
    }
    case REMOVE_FROM_CREW: {
      const crew = state[payload.crewId];
      return {
        ...state,
        [payload.crewId]: {
          ...crew, 
          pirates: crew.pirates.filter(p => p !== payload.pirateId)
        }
      };
    }
    case PIRATE_LOAD: {
      if(state && state[payload.crew._id]) return state;
      return crewsById(state, { type: CREW_LOAD, payload: payload.crew });
    }
    default:
      return state;
  }
}