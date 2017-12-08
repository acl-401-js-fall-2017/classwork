import { 
  CREWS_LOAD, CREW_LOAD, CREW_ADD, CREW_REMOVE, CREW_UPDATE,
  ADD_TO_CREW, REMOVE_FROM_CREW 
} from './reducer';
import crewsApi from '../services/crews-api';
import piratesApi from '../services/pirates-api';

export function loadCrews() {
  return (dispatch, getState) => {
    if(getState().crewsLoaded) return;

    dispatch({
      type: CREWS_LOAD,
      payload: crewsApi.get()
    });
  };
}

export function loadCrew(crewId) {
  return (dispatch, getState) => {
    const crew = getState().crewsById[crewId];
    if(crew && crew.pirates) return;

    dispatch({
      type: CREW_LOAD,
      payload: crewsApi.get(crewId)
    });
  };
}

export function addCrew(crew) {
  return {
    type: CREW_ADD,
    payload: crewsApi.add(crew)
  };
}

export function updateCrew(crew) {
  return {
    type: CREW_UPDATE,
    payload: crewsApi.update(crew)
  };
}

export function removeCrew(id) {
  return {
    type: CREW_REMOVE,
    payload: crewsApi.remove(id).then(() => id)
  };
}

const update = (crewId, pirateId, crew) => piratesApi
  .update({ _id: pirateId, crew: crew })
  .then(() => ({ crewId, pirateId }));

export function addToCrew(crewId, pirateId) {
  return {
    type: ADD_TO_CREW,
    payload: update(crewId, pirateId, crewId)
  };
}

export function removeFromCrew(crewId, pirateId) {
  return {
    type: REMOVE_FROM_CREW,
    payload: update(crewId, pirateId, null)
  };
}