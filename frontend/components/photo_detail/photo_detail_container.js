import React from 'react';
import { connect } from 'react-redux';

import PhotoDetail from './photo_detail';
import { fetchSinglePhoto } from '../../actions/photo_detail_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  fetchSinglePhoto: (id) => { return dispatch(fetchSinglePhoto(id)); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
