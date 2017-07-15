import { RECEIVE_NOT_FOLLOWED_USERS } from '../actions/user_actions';

const DiscoverReducer = (state = [], action) => {
  switch (action.type) {

    case RECEIVE_NOT_FOLLOWED_USERS:
      return action.users;

    default:
      return state;
  }
};

export default DiscoverReducer;
