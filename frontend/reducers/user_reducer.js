import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import { RECEIVE_SINGLE_PHOTO, DELETE_PHOTO } from '../actions/photo_detail_actions';
import { RECEIVE_FOLLOW, UNFOLLOW } from '../actions/follow_actions';

const _default_state = Object.freeze({});

const UserReducer = (state = _default_state, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  // debugger;
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return action.user;

    case RECEIVE_SINGLE_PHOTO:
      const photo = action.photoDetail;
      return merge({}, state, { photos: { [photo.id]: photo } } );

    case DELETE_PHOTO:
      delete newState.photos[action.photo.id];
      return newState;

    case RECEIVE_FOLLOW:
      return merge({}, state, { followers: action.follow });

    case UNFOLLOW:
      delete newState.followers[Object.keys(action.follow)];
      return newState;

    default:
      return state;
  }
};


export default UserReducer;
