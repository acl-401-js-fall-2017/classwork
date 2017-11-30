import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { response, loading, error } from './reducer';

const rootReducer = combineReducers({
  response, loading, error
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(promiseMiddleware())
  )
);

export default store;