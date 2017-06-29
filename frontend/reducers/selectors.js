import values from 'lodash/values';
import orderBy from 'lodash/orderBy';

export const selectedPhotos = (state) => {
  const { photos } = state.user;

  if (photos) {
    return Object.keys(state.user.photos).map(id => state.user.photos[id]);
  }
};

export const selectComments = (comments) => {

  if (comments) {
    return Object.keys(comments).map(id => comments[id]);
  }
};
