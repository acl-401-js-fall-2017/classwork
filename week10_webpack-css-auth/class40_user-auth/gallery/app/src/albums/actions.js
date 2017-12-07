import * as actions from './constants';
import api from '../services/albumsApi';

export function getAlbums() {

  return dispatch => {
    dispatch({ type: actions.FETCHING_ALBUMS });
    
    api.get()
      .then(albums => {
        dispatch({ type: actions.FETCHED_ALBUMS, payload: albums });
      })
      .catch(error => {
        dispatch({ type: actions.FETCHED_ALBUMS_ERROR, payload: error });
      });
  };
}

export function addAlbum(album) {

  return dispatch => {
    dispatch({ type: actions.ADDING_ALBUM });
    
    api.add(album)
      .then(saved => {
        dispatch({ type: actions.ADDED_ALBUM, payload: saved });
      })
      .catch(error => {
        dispatch({ type: actions.ADDED_ALBUM_ERROR, payload: error });
      });
  };
}

export function removeAlbum(albumId) {

  return dispatch => {
    dispatch({ type: actions.REMOVING_ALBUM });
    
    api.remove(albumId)
      .then(() => {
        dispatch({ type: actions.REMOVED_ALBUM, payload: albumId });
      })
      .catch(error => {
        dispatch({ type: actions.REMOVED_ALBUM_ERROR, payload: error });
      });
  };
}