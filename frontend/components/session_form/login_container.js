import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, unDisplayErrors } from '../../actions/session_actions';


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
    login: (user) => { return dispatch(login(user)); },
    unDisplayErrors: () => { return dispatch(unDisplayErrors()); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
