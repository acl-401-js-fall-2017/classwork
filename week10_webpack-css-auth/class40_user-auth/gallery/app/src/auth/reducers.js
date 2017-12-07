import * as actions from './constants';
import { combineReducers } from 'redux';

export default (state = {}, action) => combineReducers({ user, token, error, checkedToken })(state, action);

export function user(state = null, { type, payload }) {
  switch(type) {
    case actions.FETCHED_USER:
      return payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

export function token(state = null, { type, payload }) {
  switch(type) {
    case actions.GOT_TOKEN:
      return payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state; 
  }
}

export function error(state = null, { type, payload }) {
  switch(type) {
    case actions.AUTH_FAILED:
      return payload;
    case actions.LOGOUT:
    case actions.GOT_TOKEN:
    case actions.FETCHED_USER:
      return null;
    default:
      return state;
  }
}

export function checkedToken(state = false, { type, payload }) {
  switch(type) {
    case actions.CHECKED_TOKEN:
    case actions.FETCHED_USER:
    case actions.AUTH_FAILED:
      return true;
    default:
      return state;
  }
}