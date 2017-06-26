import merge from 'lodash/merge';
import { RECEIVE_SINGLE_PHOTO} from '../actions/photo_detail_actions';

const _defaultState = {};

const PhotoDetailReducer = (state = _defaultState, action) => {
  switch (action.type) {

    case RECEIVE_SINGLE_PHOTO:
      return merge({}, state, action.photoDetail);

    default:
      return state;
  }
};

export default PhotoDetailReducer;
