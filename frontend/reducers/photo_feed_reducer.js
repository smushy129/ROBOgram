import merge from 'lodash/merge';
import { RECEIVE_FEED_PHOTOS } from '../actions/photo_feed_actions';

const _defaultState = {};

const PhotoFeedReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return merge({}, state, action.photos);
    default:
      return state;
  }
};

export default PhotoFeedReducer;
