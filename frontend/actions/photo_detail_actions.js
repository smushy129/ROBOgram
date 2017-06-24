import * as APIUtil from '../util/photo_detail_util';
export const RECEIVE_SINGLE_PHOTO = "RECEIVE_SINGLE_PHOTO";

export const receiveSinglePhoto = (photoDetail) => {
  return ({
    type: RECEIVE_SINGLE_PHOTO,
    photoDetail: photoDetail
  });
};

export const fetchSinglePhoto = (id) => (dispatch) => {
  return APIUtil.fetchSinglePhoto(id)
    .then( (photoDetail) => { return dispatch(receiveSinglePhoto(photoDetail)); });
};
