import * as APIUtil from '../util/user_util';
import { receiveErrors } from './error_actions'
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_NOT_FOLLOWED_USERS = "RECEIVE_NOT_FOLLOWED_USERS";

export const receiveSingleUser = (user) => {
  return ({
    type: RECEIVE_SINGLE_USER,
    user: user,
  });
};

export const receiveNotFollowedUsers = (users) => {
  return ({
    type: RECEIVE_NOT_FOLLOWED_USERS,
    users: users,
  });
};


export const fetchSingleUser = (id) => (dispatch) => {
  return APIUtil.fetchSingleUser(id)
    .then( (user) => { return dispatch(receiveSingleUser(user)); });
};

export const updateAvatar = formData => dispatch => {
  return APIUtil.updateAvatar(formData)
    .then( (user) => {
      return dispatch(receiveSingleUser(user));
    }, (error) => {
      return dispatch(receiveErrors(error.responseJSON));
    }
  );
};

export const updateUser = user => dispatch => {
  return APIUtil.updateUser(user).then(user => (
    dispatch(receiveSingleUser(user))
  ));
};

export const fetchNotFollowedUsers = () => dispatch => {
  return APIUtil.fetchNotFollowedUsers()
    .then( (users) => { return dispatch(receiveNotFollowedUsers(users)); });
};
