import * as APIUtil from '../util/likes_util';

export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const receiveLike = (like) => {
  return ({
    type: RECEIVE_LIKE,
    like: like
  });
};

export const removeLike = (like) => {
  return ({
    type: REMOVE_LIKE,
    like: like
  });
};

export const createLike = photo_id => (dispatch) => {
  return APIUtil.createLike(photo_id)
    .then( (like) => { return dispatch(receiveLike(like)); });
};

export const destroyLike = photoId => (dispatch) => {
  return APIUtil.destroyLike(photoId)
    .then( (like) => { return dispatch(removeLike(like)); });
};
