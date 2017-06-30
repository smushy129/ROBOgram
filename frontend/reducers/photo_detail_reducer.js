import merge from 'lodash/merge';
import { RECEIVE_SINGLE_PHOTO, DELETE_PHOTO, CLEAR_PHOTO_DETAIL_STATE }
  from '../actions/photo_detail_actions';
import { RECEIVE_COMMENT, DESTROY_COMMENT } from '../actions/comment_actions';

const _defaultState = {
  comments: {},
};

const PhotoDetailReducer = (state = _defaultState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SINGLE_PHOTO:
      return action.photoDetail;

    case DELETE_PHOTO:
      return _defaultState;

    case RECEIVE_COMMENT:
      const commentId = action.comment.id;
      return merge({}, state, { comments: { [commentId]: action.comment }});

    case DESTROY_COMMENT:
      delete newState.comments[action.comment.id];
      return newState;

    case CLEAR_PHOTO_DETAIL_STATE:
      return _defaultState;

    default:
      return state;
  }
};

export default PhotoDetailReducer;
