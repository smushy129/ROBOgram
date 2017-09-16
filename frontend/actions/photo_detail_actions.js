import * as APIUtil from '../util/photo_detail_util';
import { receiveErrors } from './error_actions'
export const RECEIVE_SINGLE_PHOTO = "RECEIVE_SINGLE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const CLEAR_PHOTO_DETAIL_STATE = "CLEAR_PHOTO_DETAIL_STATE";

export const receiveSinglePhoto = (photoDetail) => {
  return ({
    type: RECEIVE_SINGLE_PHOTO,
    photoDetail: photoDetail
  });
};

export const deletePhotoFromState = (photo) => {
  return({
    type: DELETE_PHOTO,
    photo: photo,
  });
};

export const clearPhotoDetailState = () => {
  return ({
    type: CLEAR_PHOTO_DETAIL_STATE
  });
};

export const fetchSinglePhoto = (id) => (dispatch) => {
  return APIUtil.fetchSinglePhoto(id)
    .then( (photoDetail) => { return dispatch(receiveSinglePhoto(photoDetail)); });
};

export const uploadPhoto = (photo, callback) => (dispatch) => {
  return APIUtil.uploadPhoto(photo, callback)
    .then( (photo) => {
      return dispatch(receiveSinglePhoto(photo));
    }, (error) => {
      return dispatch(receiveErrors(error.responseJSON));
    }
  );
};

export const deletePhoto = (id, callback) => (dispatch) => {
  return APIUtil.deletePhoto(id, callback)
    .then( (photo) => { return dispatch(deletePhotoFromState(photo)); });
};
