import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  ownProps
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (component) => dispatch(openModal(component)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
