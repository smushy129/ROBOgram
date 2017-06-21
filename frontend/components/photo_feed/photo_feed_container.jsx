import React from 'react';
import { connect } from 'react-redux';

import PhotoFeed from './photo_feed';

const mapStateToProps = (state) => {
  return ({
    state
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
