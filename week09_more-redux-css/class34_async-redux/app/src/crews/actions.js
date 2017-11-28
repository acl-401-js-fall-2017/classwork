import { CREW_LOAD, CREW_ADD, CREW_REMOVE } from './reducer';
import crewsApi from '../services/crews-api';

export function loadCrews() {
  return async dispatch => {
    const crews = await crewsApi.get();
    dispatch({ type: CREW_LOAD, payload: crews });
  };
}

export function addCrew(crew) {
  return async dispatch => {
    const saved = await crewsApi.add(crew);
    dispatch({
      type: CREW_ADD,
      payload: saved
    });
  };
}

export function removeCrew(id) {
  return {
    type: CREW_REMOVE,
    payload: id
  };
}
