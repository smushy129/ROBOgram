import React from 'react';
import { connect } from 'react-redux';

import Modal from './modal';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (component) => {
  return ({
    component
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: () => { return dispatch(openModal()); }
  });
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
