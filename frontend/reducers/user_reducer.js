import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';

const _default_state = Object.freeze({});

const UserReducer = (state = _default_state, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return action.user;

    default:
      return state;
  }
};


export default UserReducer;
