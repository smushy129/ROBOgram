import CommentForm from './comment_form';
import { connect } from 'react-redux';
import { addComment, destroyComment } from '../../actions/comment_actions';

const mapDispatchToProps = (dispatch) => {
  return ({
    addComment: (comment) => { return dispatch(addComment(comment)); },
    destroyComment: (comment_id) => { return dispatch(destroyComment(comment_id)); }
  });
};

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
