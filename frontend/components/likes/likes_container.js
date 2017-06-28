import { connect } from 'react-redux';
import { createLike, destroyLike } from '../../actions/like_actions';
import Likes from './likes';

const mapDispatchToProps = (dispatch) => {
  return({
    createLike: (photo_id) => { return dispatch(createLike(photo_id)); },
    destroyLike: (photo_id) => { return dispatch(destroyLike(photo_id)); }
  });
};


export default connect(
  null,
  mapDispatchToProps
)(Likes);
