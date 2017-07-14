export const queryUsers = (users) => {
  return $.ajax({
    method: 'GET',
    url: `api/users`,
    data: { users }
  });
};
