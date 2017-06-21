export const fetchSingleUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};
