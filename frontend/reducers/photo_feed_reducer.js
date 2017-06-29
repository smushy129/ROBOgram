import merge from 'lodash/merge';
import { RECEIVE_FEED_PHOTOS, REMOVE_FEED } from '../actions/photo_feed_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, DESTROY_COMMENT } from '../actions/comment_actions';

const _defaultState = {
  photos: {}
};

const PhotoFeedReducer = (state = _defaultState, action) => {
  
  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return merge({}, _defaultState, { photos: action.photos });

    case REMOVE_FEED:
      return _defaultState;

    // case INFINITE_FEED_PHOTOS:
    //   return merge({}, state, { photos :action.photos });
    case RECEIVE_COMMENT:
      const photoId = action.comment.photoId;
      const commentId = action.comment.id;

      return merge({}, state, { photos: { [photoId]: { comments: { [commentId]: action.comment }}}});

    default:
      return state;
  }
};

export default PhotoFeedReducer;
