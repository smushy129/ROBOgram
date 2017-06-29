import merge from 'lodash/merge';
import { RECEIVE_SINGLE_PHOTO, DELETE_PHOTO } from '../actions/photo_detail_actions';
import { DESTROY_DETAIL_COMMENT, RECEIVE_DETAIL_COMMENT } from '../actions/comment_detail_actions';

const _defaultState = {
  comments: [],
};

const PhotoDetailReducer = (state = _defaultState, action) => {
  switch (action.type) {

    case RECEIVE_SINGLE_PHOTO:
      return merge({}, state, action.photoDetail);

    case DELETE_PHOTO:
      return _defaultState;

    case RECEIVE_DETAIL_COMMENT:
      const photoId = action.comment.photoId;
      const commentsArr = Object.assign([], state.comments);
      return merge({}, state, { comments: commentsArr });

    default:
      return state;
  }
};

export default PhotoDetailReducer;
