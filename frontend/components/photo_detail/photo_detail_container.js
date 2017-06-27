import React from 'react';
import { connect } from 'react-redux';


import PhotoDetail from './photo_detail';
import { fetchSinglePhoto, deletePhoto } from '../../actions/photo_detail_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchFeedPhotos } from '../../actions/photo_feed_actions';

const mapStateToProps = (state) => ({
  photoDetail: state.photoDetail,
  currentUser: state.session.currentUser,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSinglePhoto: (id) => { return dispatch(fetchSinglePhoto(id)); },
  closeModal: () => { return dispatch(closeModal()); },
  deletePhoto: (id, callback) => { return dispatch(deletePhoto(id, callback)); },
  fetchFeedPhotos: () => { return dispatch(fetchFeedPhotos()); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
