import * as actions from './constants';
import authApi from '../services/authApi';
import { getStoredToken } from '../services/request';

export function checkForToken() {
  return dispatch => {
    const token = getStoredToken();
    if(!token) {
      dispatch({ type: actions.CHECKED_TOKEN });      
      return;
    }

    dispatch({ type: actions.GOT_TOKEN, payload: token });

    return authApi.verify()
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_FAILED, payload: error });
      });
  };
}

export function signin(credentials) {
  return dispatch => {
    authApi.signin(credentials)
      .then(({ token }) => {
        dispatch({ type: actions.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_FAILED, payload: error });
      });
  };
}

export function signup(user) {
  return dispatch => {
    authApi.signup(user)
      .then(({ token }) => {
        dispatch({ type: actions.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_FAILED, payload: error });
      });
  };
}

export function signout() {
  return { type: actions.LOGOUT };
}