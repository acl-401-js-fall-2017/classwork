import { combineReducers } from 'redux';
import { error, loading } from '../app/reducer';
import { crews, crewsById } from '../crews/reducer';
import { pirates, piratesById, piratesLoaded } from '../pirates/reducer';
import { weapons, weaponsById } from '../weapons/reducer';

export default combineReducers({
  crews,
  crewsById,
  pirates,
  piratesById,
  piratesLoaded,
  weapons,
  weaponsById,
  loading,
  error,
  // pirates
});