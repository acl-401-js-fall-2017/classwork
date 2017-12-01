const isPromise = val => val && typeof val.then === 'function';
const hasPromise = ({ payload }) => payload && isPromise(payload);

export default function createPromiseMiddleware() {
  return ({ dispatch, getState, foo }) => next => async action => {

    if (!hasPromise(action)) return next(action);

    dispatch({ type: 'LOADING' });

    try {
      dispatch({ type: action.type, payload: await action.payload });
    }
    catch(err) {
      dispatch({ type: 'ERROR', payload: err });
      throw err;
    }

  };
}