import * as APIUtil from '../util/user_util';

export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const receiveSingleUser = (user) => {
  return ({
    type: RECEIVE_SINGLE_USER,
    user: user,
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
