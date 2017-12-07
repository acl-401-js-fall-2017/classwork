import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import AlbumDetail from './AlbumDetail';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    album: state.album,
    error: state.albumError,
    loading: state.albumLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
// bindActionCreators turns an action creators like: 
// getAlbum(id)
// addImage(image)
// removeImage(imageId)
// into:
// {
//    getAlbum(id) { dispatch(getAlbum(id)) }
//    addImage(image) { dispatch(addImage(image)) }
//    removeImage(imageId) { dispatch(removeImage(imageId)) }
// }

const AlbumDetailContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AlbumDetail);

// export the wrapper
export default AlbumDetailContainer;
