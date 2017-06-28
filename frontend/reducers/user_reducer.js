import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import { RECEIVE_SINGLE_PHOTO, DELETE_PHOTO } from '../actions/photo_detail_actions';
import { RECEIVE_FOLLOW, UNFOLLOW } from '../actions/follow_actions';
import { REMOVE_FEED } from '../actions/photo_feed_actions';

const _defaultState = Object.freeze({});

const UserReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  
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

    case REMOVE_FEED:
      return _defaultState;

    default:
      return state;
  }
};


export default UserReducer;
