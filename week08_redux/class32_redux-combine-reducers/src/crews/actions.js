import { CREW_ADD } from './reducer';
import shortid from 'shortid';

export function addCrew(crew) {
  crew._id = shortid.generate();
  return {
    type: CREW_ADD,
    payload: crew
  };
}
