export const createLike = (photo_id) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: { photo_id }
  });
};

export const destroyLike = (photoId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${photoId}`
  });
};
