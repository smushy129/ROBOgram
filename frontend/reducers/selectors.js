export const selectedPhotos = (state) => {
  const { photos } = state.user;
  
  if (photos) {
    return Object.keys(state.user.photos).map(id => state.user.photos[id]);
  }
};
