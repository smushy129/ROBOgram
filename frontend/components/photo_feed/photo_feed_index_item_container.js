import { connect } from 'react-redux';
import PhotoFeedIndexItem from './photo_feed_index_item';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    photoFeed: state.photoFeed,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteComment: (commentId) => { return dispatch(deleteComment(commentId)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeedIndexItem);
