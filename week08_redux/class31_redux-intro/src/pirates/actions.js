import * as actions from './constants';
import shortid from 'shortid';

export function addPirate(pirate) {
  pirate._id = shortid.generate();
  pirate.timestamp = new Date();
  return {
    type: actions.PIRATE_ADD,
    payload: pirate
  };
}

export function updatePirate(pirate) {
  return {
    type: actions.PIRATE_UPDATE,
    payload: pirate
  };
}

export function removePirate(id) {
  return {
    type: actions.PIRATE_REMOVE,
    payload: id
  };
}