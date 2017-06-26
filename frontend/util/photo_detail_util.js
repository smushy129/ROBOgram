export const fetchSinglePhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  });
};

export const uploadPhoto = (photo, callback) => {
  return $.ajax({
    method: 'POST',
    url: `/api/photos`,
    contentType: false,
    processData: false,
    data: photo,
  });
};
