import * as APIUtil from '../util/follows_util';
import { fetchSingleUser } from './user_actions';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const UNFOLLOW = "UNFOLLOW";

export const receiveFollow = (follow) => {
  return({
    type: RECEIVE_FOLLOW,
    follow: follow,
  });
};

export const unfollow = (follow) => {
  return({
    type: UNFOLLOW,
    follow: follow,
  });
};

export const createFollow = (followee_id) => (dispatch) => {
  return APIUtil.createFollow(followee_id)
    .then( (follow) => dispatch(receiveFollow(follow)))
      .then( (user) => {
        const id = parseInt(Object.keys(user.follow)[0]);
        return dispatch(fetchSingleUser(user.follow[id].followee_id)); });
};

export const deleteFollow = (follower_id) => (dispatch) => {
  return APIUtil.deleteFollow(follower_id)
    .then( (follow) => dispatch(unfollow(follow)))
      .then( (user) => {
        const id = parseInt(Object.keys(user.follow)[0]);
        return dispatch(fetchSingleUser(user.follow[id].followee_id)); });
};
