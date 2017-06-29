import React from 'react';
import { connect } from 'react-redux';

import PhotoDetail from './photo_detail';
import { fetchSinglePhoto, deletePhoto } from '../../actions/photo_detail_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchFeedPhotos } from '../../actions/photo_feed_actions';
import { createLike, destroyLike } from '../../actions/like_actions';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => ({
  photoDetail: state.photoDetail,
  currentUser: state.session.currentUser,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSinglePhoto: (id) => { return dispatch(fetchSinglePhoto(id)); },
  closeModal: () => { return dispatch(closeModal()); },
  deletePhoto: (id, callback) => { return dispatch(deletePhoto(id, callback)); },
  fetchFeedPhotos: () => { return dispatch(fetchFeedPhotos()); },
  createLike: (photo_id) => { return dispatch(createLike(photo_id)); },
  destroyLike: (photo_id) => { return dispatch(destroyLike(photo_id)); },
  deleteComment: (commentId) => { return dispatch(deleteComment(commentId)); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
