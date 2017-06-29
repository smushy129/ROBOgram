export const addComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: { comment }
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  });
};
