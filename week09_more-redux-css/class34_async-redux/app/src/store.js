import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { crews, crewsLoading, crewsError } from './crews/reducer';
import pirates from './pirates/reducer';

const rootReducer = combineReducers({
  crews,
  crewsLoading,
  crewsError,
  pirates
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;