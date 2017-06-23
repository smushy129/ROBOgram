import React from 'react';
import { connect } from 'react-redux';

import PhotoFeed from './photo_feed';
import { fetchFeedPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state) => {
  
  return ({
    state
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchFeedPhotos: () => dispatch(fetchFeedPhotos())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
