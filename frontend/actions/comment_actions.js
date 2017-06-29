import * as APIUtil from '../util/comments_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DESTROY_COMMENT = "DESTROY_COMMENT";

export const receiveComment = (comment) => {
  return({
    type: RECEIVE_COMMENT,
    comment: comment,
  });
};

export const destroyComment = (comment) => {
  return({
    type: DESTROY_COMMENT,
    comment: comment,
  });
};

export const addComment = (comment) => (dispatch) => {
  return APIUtil.addComment(comment)
    .then( (comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = (commentId) => (dispatch) => {
  return APIUtil.deleteComment(commentId)
    .then( (comment) => dispatch(destroyComment(comment)));
};
