import { connect } from 'react-redux';
import PhotoFeedIndexItem from './photo_feed_index_item';
import { deleteComment } from '../../actions/comment_actions';
import { createLike, destroyLike } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    photoFeed: state.photoFeed,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteComment: (commentId) => { return dispatch(deleteComment(commentId)); },
    createLike: (photo_id) => { return dispatch(createLike(photo_id)); },
    destroyLike: (photo_id) => { return dispatch(destroyLike(photo_id)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeedIndexItem);
