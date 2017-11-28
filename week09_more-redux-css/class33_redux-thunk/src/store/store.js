import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  // add middleware
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;

