import { PIRATE_ADD } from './reducer';
import shortid from 'shortid';

export function addPirate(crewId, pirate) {
  pirate._id = shortid.generate();
  return {
    type: PIRATE_ADD,
    payload: { crewId, pirate }
  };
}
