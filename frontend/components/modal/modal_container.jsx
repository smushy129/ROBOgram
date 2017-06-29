import React from 'react';
import { connect } from 'react-redux';

import Modal from './modal';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearPhotoDetailState } from '../../actions/photo_detail_actions';

const mapStateToProps = ({modal}) => {
  return ({
    isOpen: modal.isOpen,
    component: modal.component
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: (component) => { return dispatch(openModal(component)); },
    closeModal: () => { return dispatch(closeModal()); },
    clearPhotoDetailState: () => { return dispatch(clearPhotoDetailState()); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
