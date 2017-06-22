import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchSingleUser } from '../../actions/user_actions';

export const mapStateToProps = (state) => {
  return ({
    state
  });
};

export const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSingleUser: (id) => { return dispatch(fetchSingleUser(id)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
