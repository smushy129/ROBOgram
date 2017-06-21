import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

export const mapStateToProps = (state) => {
  return ({
    state
  });
};

export const mapDispatchToProps = () => {
  return ({
    
  });
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
