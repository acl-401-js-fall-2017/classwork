import { combineReducers } from 'redux';
import { loading, error } from '../app/reducer';
import { crews } from '../crews/reducer';
import { pirates } from '../pirates/reducer';

export default combineReducers({
  crews,
  pirates,
  loading,
  error
});