import { CREW_LOAD, CREW_ADD, CREW_REMOVE, CREW_ERROR } from './reducer';
import crewsApi from '../services/crews-api';

export function loadCrews() {
  return async dispatch => {
    try {
      const crews = await crewsApi.get();
      dispatch({ type: CREW_LOAD, payload: crews });
    }
    catch(err) {
      dispatch({
        type: CREW_ERROR,
        payload: err
      });
    }
  };
}

export function addCrew(crew) {
  return async dispatch => {
    try {
      const saved = await crewsApi.add(crew);
      dispatch({
        type: CREW_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: CREW_ERROR,
        payload: err
      });
    }
  };
}

export function removeCrew(id) {
  return {
    type: CREW_REMOVE,
    payload: id
  };
}
