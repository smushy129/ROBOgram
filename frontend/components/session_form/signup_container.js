import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  const loggedIn = Boolean(state.session.currentUser);
  return (
    {
      loggedIn: loggedIn,
      errors: state.session.errors,
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    signup: (user) => { return dispatch(signup(user)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
