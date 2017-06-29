import * as APIUtil from '../util/comments_util';

export const RECEIVE_DETAIL_COMMENT = "RECEIVE_DETAIL_COMMENT";
export const DESTROY_DETAIL_COMMENT = "DESTROY_DETAIL_COMMENT";

export const receiveDetailComment = (comment) => {
  return({
    type: RECEIVE_DETAIL_COMMENT,
    comment: comment,
  });
};

export const destroyDetailComment = (comment) => {
  return({
    type: DESTROY_DETAIL_COMMENT,
    comment: comment,
  });
};

export const addComment = (comment) => (dispatch) => {
  return APIUtil.addComment(comment)
    .then( (comment) => dispatch(receiveDetailComment(comment)));
};

export const deleteComment = (comment_id) => (dispatch) => {
  return APIUtil.deleteComment(comment_id)
    .then( (comment) => dispatch(deleteDetailComment(comment)));
};
