import { createStore, combineReducers } from 'redux';
import crews from './crews/reducer';
import pirates from './pirates/reducer';

const rootReducer = combineReducers({
  crews,
  pirates
});

const store = createStore(
  rootReducer, 
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;