import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// this is for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
  console.log('before action', action);
  return next(action);
};

const store = createStore(
  rootReducer,
  // this wrapper is so redux dev tools works
  composeEnhancers(
    // add middleware
    applyMiddleware(logger, thunk)
  )
);

export default store;

