import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import { album, albumError, albumLoading } from '../album/reducers';
import { albums, albumsError, albumsLoading } from '../albums/reducers';

export default combineReducers({
  auth,
  albums,
  albumsError,
  albumsLoading,
  album,
  albumError,
  albumLoading
});