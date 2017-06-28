import merge from 'lodash/merge';
import { RECEIVE_FEED_PHOTOS, REMOVE_FEED } from '../actions/photo_feed_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const _defaultState = {
  photos: {}
};

const PhotoFeedReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return merge({}, _defaultState, { photos :action.photos });

    case REMOVE_FEED:
      return _defaultState;

    // case INFINITE_FEED_PHOTOS:
    //   return merge({}, state, { photos :action.photos });

    default:
      return state;
  }
};

export default PhotoFeedReducer;
