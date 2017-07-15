import * as APIUtil from '../util/user_util';

export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveSingleUser = (user) => {
  return ({
    type: RECEIVE_SINGLE_USER,
    user: user,
  });
};

export const receiveAllUsers = (users) => {
  return ({
    type: RECEIVE_ALL_USERS,
    users: users,
  });
};


export const fetchSingleUser = (id) => (dispatch) => {
  return APIUtil.fetchSingleUser(id)
    .then( (user) => { return dispatch(receiveSingleUser(user)); });
};

export const updateAvatar = formData => dispatch => {
  return APIUtil.updateAvatar(formData)
    .then( (user) => { return dispatch(receiveSingleUser(user)); });
};

export const updateUser = user => dispatch => {
  return APIUtil.updateUser(user).then(user => (
    dispatch(receiveSingleUser(user))
  ));
};

export const fetchAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers()
    .then( (users) => { return dispatch(receiveAllUsers(users)); });
};
