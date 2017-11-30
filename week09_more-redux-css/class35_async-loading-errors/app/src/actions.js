import { RESPONSE_COMPLETE } from './reducer';
import { responseApi } from './api';

export function loadResponse(options) {
  return { 
    type: RESPONSE_COMPLETE, 
    payload: responseApi.get(options)
  };
}