import merge from 'lodash/merge';
import { RECEIVE_SINGLE_PHOTO, DELETE_PHOTO } from '../actions/photo_detail_actions';

const _defaultState = {};

const PhotoDetailReducer = (state = _defaultState, action) => {
  switch (action.type) {

    case RECEIVE_SINGLE_PHOTO:
      return merge({}, state, action.photoDetail);

    case DELETE_PHOTO:
      return _defaultState;

    default:
      return state;
  }
};

export default PhotoDetailReducer;
