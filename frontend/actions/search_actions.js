import * as APIUtil from '../util/search_util';
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => {
  return ({
    type: RECEIVE_USERS,
    users: users
  });
};

export const queryUsers = (queryString) => (dispatch) => {
  return APIUtil.queryUsers(queryString).
    then( (users) => { return dispatch(receiveUsers(users)); });
};
