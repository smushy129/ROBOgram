export const createFollow = (followee_id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/follows`,
    data: { followee_id }
  });
};

export const deleteFollow = (follower_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows/${follower_id}`
  });
};
