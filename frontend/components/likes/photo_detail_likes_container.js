import { connect } from 'react-redux';
import { createPhotoDetailLike, destroyPhotoDetailLike }
  from '../../actions/like_actions';
import { fetchFeedPhotos } from '../../actions/photo_feed_actions';
import { fetchSinglePhoto } from '../../actions/photo_detail_actions';
import PhotoDetailLikes from './photo_detail_likes';

const mapStateToProps = (state) => {
  return ({
    photoDetail: state.photoDetail
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createLike: (photo_id) => { return dispatch(createPhotoDetailLike(photo_id)); },
    destroyLike: (photo_id) => { return dispatch(destroyPhotoDetailLike(photo_id)); },
    fetchSinglePhoto: (photoId) => { return dispatch(fetchSinglePhoto(photoId)); },
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetailLikes);
