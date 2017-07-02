import merge from 'lodash/merge';
import { RECEIVE_FEED_PHOTOS, REMOVE_FEED } from '../actions/photo_feed_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, DESTROY_COMMENT } from '../actions/comment_actions';

const _defaultState = {
  photos: {}
};

const PhotoFeedReducer = (state = _defaultState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return merge({}, _defaultState, { photos: action.photos });

    case REMOVE_FEED:
      return _defaultState;

    // case INFINITE_FEED_PHOTOS:
    //   return merge({}, state, { photos :action.photos });
    case RECEIVE_COMMENT:
      let photoId = action.comment.photoId;
      let commentId = action.comment.id;
      return merge({}, state, { photos: { [photoId]: { comments: { [commentId]: action.comment }}}});

    case DESTROY_COMMENT:
      let photoid = action.comment.photoId;
      let commentid = action.comment.id;
      delete newState.photos[photoid].comments[commentid];
      return newState;

    case RECEIVE_LIKE:
      newState.photos[action.like.photoId].liked_by_current_user = true;
      newState.photos[action.like.photoId].num_likes += 1;
      return merge({}, newState, { photos: { [action.like.photoId]: { likes: { [action.like.userId]: action.like }}}});

    case REMOVE_LIKE:
      delete newState.photos[action.like.photoId].likes[action.like.userId];
      newState.photos[action.like.photoId].liked_by_current_user = false;
      newState.photos[action.like.photoId].num_likes -= 1;
      return newState;

    default:
      return state;
  }
};

export default PhotoFeedReducer;
