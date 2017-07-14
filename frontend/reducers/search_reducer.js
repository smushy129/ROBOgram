import merge from 'lodash/merge';
import { RECEIVE_USERS } from "../actions/search_actions";

const _defaultState = [];

const SearchReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};


export default SearchReducer;
