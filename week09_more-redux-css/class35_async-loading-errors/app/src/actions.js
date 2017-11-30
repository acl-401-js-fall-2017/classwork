import { RESPONSE_LOAD, LOADING, ERROR } from './reducer';
import { responseApi } from './api';

export function loadResponse(options) {
  return async dispatch => {
    // action is starting, 
    // tell the store we are loading...
    dispatch({ type: LOADING });

    // talk to server via api...
    try {
      const response = await responseApi.get(options);
      // dispatch load action when done...
      dispatch({ 
        type: RESPONSE_LOAD, 
        payload: response
      });
    }
    catch(err) {
      dispatch({
        type: ERROR,
        payload: err
      });

      throw err;
    }


  };
}