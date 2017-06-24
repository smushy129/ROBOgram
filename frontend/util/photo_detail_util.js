export const fetchSinglePhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  });
};
