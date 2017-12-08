export const WEAPONS_LOAD = 'WEAPONS_LOAD';
export const WEAPON_ADD = 'WEAPON_ADD';
export const WEAPON_REMOVE = 'WEAPON_REMOVE';
export const WEAPON_UPDATE = 'WEAPON_UPDATE';

export function weapons(state = null, { type, payload }) {
  switch(type) {
    case WEAPONS_LOAD:
      return payload.map(weapon => weapon._id);
    case WEAPON_ADD:
      return [...state, payload._id];
    case WEAPON_REMOVE:
      return state.filter(id => id !== payload);
    default:
      return state;
  }
}

export function weaponsById(state = {}, { type, payload }) {
  switch(type) {
    case WEAPONS_LOAD:
      return payload.reduce((map, weapon) => {
        map[weapon._id] = weapon;
        return map;
      }, {});
    case WEAPON_ADD:
      return {
        ...state, 
        [payload._id]: payload
      };
    case WEAPON_REMOVE: {
      const { [payload]: id, ...rest } = state;
      return rest;
    }
    case WEAPON_UPDATE:
      return {
        ...state,
        [payload._id]: payload
      };
    default:
      return state;
  }
}