import { CREW_ADD, CREW_REMOVE } from './reducer';
import shortid from 'shortid';

export function addCrew(crew) {
  crew._id = shortid.generate();
  return {
    type: CREW_ADD,
    payload: crew
  };
}

export function removeCrew(id) {
  return {
    type: CREW_REMOVE,
    payload: id
  };
}
