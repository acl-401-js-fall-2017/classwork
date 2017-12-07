import * as actions from './constants';

export function album(state = { images: [] }, action) {
  switch(action.type) {
    case actions.FETCHED_ALBUM:
      return action.payload;
    case actions.ADDED_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload]
      };
    case actions.REMOVED_IMAGE: {
      const images = state.images;
      const index = images.findIndex(i => i._id === action.payload);
      return {
        ...state,
        images: [...images.slice(0, index), ...images.slice(index + 1)]
      };
    }
    default:
      return state;
  }
}

export function albumError(state = null, action) {
  switch(action.type) {
    case actions.FETCHED_ALBUM_ERROR:
    case actions.ADDED_IMAGE_ERROR:
      return action.payload;
    case actions.FETCHING_ALBUM:
    case actions.ADDING_IMAGE:
      return null;
    default:
      return state;
  }
}

export function albumLoading(state = false, action) {
  switch(action.type) {
    case actions.FETCHING_ALBUM:
    case actions.ADDING_IMAGE:
      return true;
    case actions.FETCHED_ALBUM:
    case actions.ADDED_IMAGE:
    case actions.FETCHED_ALBUM_ERROR:
    case actions.ADDED_IMAGE_ERROR:
      return false;
    default:
      return state;
  }
}