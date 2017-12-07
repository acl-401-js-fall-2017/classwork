import * as actions from './constants';
import api from '../services/albumApi';

export function getAlbum(id) {

  return dispatch => {
    dispatch({ type: actions.FETCHING_ALBUM });
    
    api.get(id)
      .then(
        albums => {
          dispatch({ type: actions.FETCHED_ALBUM, payload: albums });
        },
        error => {
          dispatch({ type: actions.FETCHED_ALBUM_ERROR, payload: error });
        }
      );
  };

}

export function addImage(image) {

  return (dispatch, getState) => {
    dispatch({ type: actions.ADDING_IMAGE });
    
    const { album } = getState();

    api.addImage(album._id, image)
      .then(
        saved => {
          dispatch({ type: actions.ADDED_IMAGE, payload: saved });
        },
        error => {
          dispatch({ type: actions.ADDED_IMAGE_ERROR, payload: error });
        }
      );
  };
}

export function removeImage(imageId) {

  return (dispatch, getState) => {
    dispatch({ type: actions.REMOVING_IMAGE });
    
    const { album } = getState();

    api.removeImage(album._id, imageId)
      .then(
        () => {
          dispatch({ type: actions.REMOVED_IMAGE, payload: imageId });
        },
        error => {
          dispatch({ type: actions.REMOVED_IMAGE_ERROR, payload: error });
        }
      );
  };
}