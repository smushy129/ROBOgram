import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, UNDISPLAY_ERRORS, SIGN_OUT }
  from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });

    case SIGN_OUT:
      return nullUser;

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, { errors });

    case UNDISPLAY_ERRORS:
      const emptyErrors = action.errors;
      return merge({}, nullUser, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
