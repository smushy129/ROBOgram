import merge from 'lodash/merge';
import { OPEN_MODAL } from '../actions/modal_actions';

const _defaultState = { isOpen: false };

const ModalReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return merge({}, state, action.isOpen);
    default:
      return state;
  }
};

export default ModalReducer;
