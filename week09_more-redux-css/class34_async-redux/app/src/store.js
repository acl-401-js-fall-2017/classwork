import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import crews from './crews/reducer';
import pirates from './pirates/reducer';

const rootReducer = combineReducers({
  crews,
  pirates
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;