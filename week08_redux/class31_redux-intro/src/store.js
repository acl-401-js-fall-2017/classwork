import { createStore } from 'redux';
import pirates from './pirates/reducer';

const store = createStore(pirates);

export default store;