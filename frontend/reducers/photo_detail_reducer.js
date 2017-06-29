import merge from 'lodash/merge';
import { RECEIVE_SINGLE_PHOTO, DELETE_PHOTO } from '../actions/photo_detail_actions';
import { RECEIVE_COMMENT, DESTROY_COMMENT } from '../actions/comment_actions';

const _defaultState = {
  comments: {},
};

const PhotoDetailReducer = (state = _defaultState, action) => {

  switch (action.type) {

    case RECEIVE_SINGLE_PHOTO:
      return merge({}, state, action.photoDetail);

    case DELETE_PHOTO:
      return _defaultState;

    case RECEIVE_COMMENT:
      const commentId = action.comment.id;
      return merge({}, state, { comments: { [commentId]: action.comment }});

    default:
      return state;
  }
};

export default PhotoDetailReducer;
