import { RESPONSE_LOAD, LOADING } from './reducer';

export function loadResponse() {
  return dispatch => {
    // action is starting, tell the store we are loading...
    dispatch({ type: LOADING });

    // talk to server via api...
  };
}