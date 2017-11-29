import { CREW_ADD, CREW_REMOVE } from '../crews/reducer';
export const PIRATE_LOAD = 'PIRATE_LOAD';
export const PIRATE_ADD = 'PIRATE_ADD';
export const PIRATE_REMOVE = 'PIRATE_REMOVE';

export default function pirates(state = {}, { type, payload }) {
  switch(type) {
    case CREW_ADD:
      return {
        ...state,
        [payload._id]: []
      };
    case CREW_REMOVE: {
      const { [payload]: id, ...rest } = state;
      return rest;
    }
    case PIRATE_LOAD: {
      const { crewId, pirates } = payload;
      return {
        ...state,
        [crewId]: pirates
      };      
    }
    case PIRATE_ADD: {
      const crewId = payload.crew;
      return {
        ...state,
        [crewId]: [...state[crewId], payload]
      };
    }
    case PIRATE_REMOVE: {
      const { crewId, _id } = payload;
      return {
        ...state,
        [crewId]: state[crewId].filter(p => p._id !== _id)
      };
    }
    default:
      return state;
  }
}