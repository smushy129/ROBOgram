export const login = ({username, password}) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user: {username: username, password: password} }
  });
};

export const signup = ({username, password}) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user: {username: username, password: password} }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
};
