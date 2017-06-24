import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _defaultState = { isOpen: false, component: null };

const ModalReducer = (state = _defaultState, action) => {
  switch (action.type) {

    case OPEN_MODAL:
      return { isOpen: true, component: action.component };

    case CLOSE_MODAL:
      return _defaultState;

    default:
      return state;
  }
};

export default ModalReducer;
