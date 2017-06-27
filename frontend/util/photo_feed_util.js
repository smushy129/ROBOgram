export const fetchFeedPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos`
  });
};
