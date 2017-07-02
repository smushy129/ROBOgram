export const fetchSingleUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const updateAvatar = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user: user},
  });
};
