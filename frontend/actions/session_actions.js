import * as APIUtil from '../util/session_api_util';
import { removeFeed } from './photo_feed_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGIN_ERRORS =  'LOGIN_ERRORS';
export const UNDISPLAY_ERRORS = 'UNDISPLAY_ERRORS';
export const SIGN_OUT = "SIGN_OUT";

export const receiveCurrentUser = currentUser => {
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const signOut = currentUser => {
  return ({
    type: SIGN_OUT,
    currentUser
  });
};

export const receiveErrors = errors => {
  return ({
    type: LOGIN_ERRORS,
    errors
  });
};

export const unDisplayErrors = () => {
  return ({
    type: UNDISPLAY_ERRORS,
    errors: [],
  });
};

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(signOut(null))))
    .then(() => dispatch(removeFeed()))
);
