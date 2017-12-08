import { PIRATES_LOAD, PIRATE_LOAD, PIRATE_ADD, PIRATE_REMOVE, PIRATE_UPDATE } from './reducer';
import piratesApi from '../services/pirates-api';

export function loadPirates() {
  return (dispatch, getState) => {
    if(getState().piratesLoaded) return;

    dispatch({
      type: PIRATES_LOAD,
      payload: piratesApi.get()
    });
  };
}

export function loadPirate(pirateId) {
  return (dispatch, getState) => {
    const pirate = getState().piratesById[pirateId];
    if(pirate && pirate.weapons) return;

    dispatch({
      type: PIRATE_LOAD,
      payload: piratesApi.get(pirateId)
    });
  };
}

export function addPirate(pirate) {
  return {
    type: PIRATE_ADD,
    payload: piratesApi.add(pirate)
  };
}

export function updatePirate(pirate) {
  return {
    type: PIRATE_UPDATE,
    payload: piratesApi.update(pirate)
  };
}

export function removePirate(id) {
  return {
    type: PIRATE_REMOVE,
    payload: piratesApi.remove(id).then(() => id)
  };
}