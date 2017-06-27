import * as APIUtil from '../util/photo_feed_util';
export const RECEIVE_FEED_PHOTOS = "RECEIVE_FEED_PHOTOS";

export const receiveFeedPhotos = (photos) => {
  return ({
    type: RECEIVE_FEED_PHOTOS,
    photos: photos,
  });
};

export const fetchFeedPhotos = () => (dispatch) => {
  return APIUtil.fetchFeedPhotos()
    .then( (photos) => { return dispatch(receiveFeedPhotos(photos)); });
};
