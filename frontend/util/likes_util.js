export const createLike = (photo_id) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: { photo_id }
  });
};

export const destroyLike = (photo_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${photo_id}`
  });
};
