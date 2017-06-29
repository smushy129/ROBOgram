import CommentFormDetail from './comment_form_detail';
import { connect } from 'react-redux';
import { addComment, destroyComment } from '../../actions/comment_detail_actions';
import { fetchFeedPhotos } from '../../actions/photo_feed_actions';
import { fetchSinglePhoto } from '../../actions/photo_detail_actions';

const mapDispatchToProps = (dispatch) => {
  return ({
    addComment: (comment) => { return dispatch(addComment(comment)); },
    destroyComment: (comment_id) => { return dispatch(destroyComment(comment_id)); },
    fetchSinglePhoto: (photoId) => { return dispatch(fetchSinglePhoto(photoId)); }
  });
};

export default connect(
  null,
  mapDispatchToProps
)(CommentFormDetail);
