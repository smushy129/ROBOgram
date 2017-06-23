import merge from 'lodash/merge';
import { RECEIVE_FEED_PHOTOS } from '../actions/photo_actions';

const _defaultState = {};

const PhotosReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FEED_PHOTOS:
      return merge({}, state, action.photos);
    default:
      return state;
  }
};

export default PhotosReducer;
