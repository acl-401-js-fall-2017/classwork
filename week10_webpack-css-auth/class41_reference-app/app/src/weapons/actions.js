import { WEAPONS_LOAD, WEAPON_ADD, WEAPON_REMOVE, WEAPON_UPDATE } from './reducer';
import weaponsApi from '../services/weapons-api';

export function loadWeapons() {
  return (dispatch, getState) => {
    if(getState().weapons) return;

    dispatch({
      type: WEAPONS_LOAD,
      payload: weaponsApi.get()
    });
  };
}

export function addWeapon(weapon) {
  return {
    type: WEAPON_ADD,
    payload: weaponsApi.add(weapon)
  };
}

export function updateWeapon(weapon) {
  return {
    type: WEAPON_UPDATE,
    payload: weaponsApi.update(weapon)
  };
}

export function removeWeapon(id) {
  return {
    type: WEAPON_REMOVE,
    payload: weaponsApi.remove(id).then(() => id)
  };
}