import * as actions from './constants';

export default function pirates(state = [], { type, payload }) {
  switch (type) {
    case actions.PIRATE_ADD:
      return [
        ...state,
        payload
      ];
    case actions.PIRATE_REMOVE:
      return state.filter(p => p._id !== payload);
      // filter is shorter way to do:
      // const index = state.find(p => p._id === payload);
      // return [
      //   ...state.slice(0, index),
      //   ...state.slice(index + 1)
      // ];
    case actions.PIRATE_UPDATE:
      // this selectively updates based on properties of the payload
      return state.map(p => p._id === payload._id ? { ...p, ...payload } : p);
      // this entirely replaces the object in state with payload
      // return state.map(p => p._id === payload._id ? payload : p);
    default:
      return state;
  }
}