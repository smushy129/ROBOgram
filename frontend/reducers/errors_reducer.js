import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/error_actions';

const _defaultState = [];

const ErrorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors

    case REMOVE_ERRORS:
      return _defaultState;

    default:
      return _defaultState;
  }
}

export default ErrorsReducer;
