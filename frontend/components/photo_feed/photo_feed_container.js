import React from 'react';
import { connect } from 'react-redux';

import PhotoFeed from './photo_feed';
import { fetchFeedPhotos } from '../../actions/photo_feed_actions';

const mapStateToProps = (state) => {
  return ({
    photoFeed: state.photoFeed,
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
