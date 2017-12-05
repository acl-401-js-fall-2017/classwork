import { CREW_LOAD, CREW_ADD, CREW_REMOVE } from './reducer';
import crewsApi from '../services/crews-api';

export function loadCrews() {
  return {
    type: CREW_LOAD,
    payload: crewsApi.get()
  };
}

export function addCrew(crew) {
  return {
    type: CREW_ADD,
    payload: crewsApi.add(crew)
  };
}

export function removeCrew(id) {
  return {
    type: CREW_REMOVE,
    payload: crewsApi.remove(id).then(() => id)
  };
}
