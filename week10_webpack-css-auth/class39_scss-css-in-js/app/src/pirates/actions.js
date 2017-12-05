import { PIRATE_ADD, PIRATE_LOAD, PIRATE_REMOVE } from './reducer';
import piratesApi from '../services/pirates-api';

export function loadPirates(crewId) {
  return async (dispatch, getState) => {
    const { pirates } = getState();
    if(pirates[crewId]) return;

    dispatch({
      type: PIRATE_LOAD,
      payload: piratesApi.get(crewId).then(pirates => ({ crewId, pirates }))
    });
  };
}

export function addPirate(crewId, pirate) {
  pirate.crew = crewId;
  return {
    type: PIRATE_ADD,
    payload: piratesApi.add(pirate)
  };
}

export function removePirate(crewId, id) {
  return {
    type: PIRATE_REMOVE,
    payload: piratesApi.remove(id).then(() => ({ crewId, _id: id }))
  };
}
