import { LOADING, LOADED, ERROR } from '../app/reducer';
const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => async action => {
  
  if(!isPromise(action.payload)) return next(action);

  // do our special promise work
  const { type, payload } = action;
  dispatch({ type: LOADING });
  
  try {
    const result = await payload;
    dispatch({ type: LOADED });    
    dispatch({ 
      type, 
      payload: result
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
