import { connect } from 'react-redux';
import { createLike, destroyLike } from '../../actions/like_actions';
import { fetchFeedPhotos } from '../../actions/photo_feed_actions';
import { fetchSinglePhoto } from '../../actions/photo_detail_actions';
import Likes from './likes';

const mapDispatchToProps = (dispatch) => {
  return({
    createLike: (photo_id) => { return dispatch(createLike(photo_id)); },
    destroyLike: (photo_id) => { return dispatch(destroyLike(photo_id)); },
    fetchFeedPhotos: () => { return dispatch(fetchFeedPhotos()); },
    fetchSinglePhoto: (photoId) => { return dispatch(fetchSinglePhoto(photoId)); }
  });
};


export default connect(
  null,
  mapDispatchToProps
)(Likes);
