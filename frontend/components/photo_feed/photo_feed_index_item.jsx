import React from 'react';
import { Link } from 'react-router-dom';

import LikesContainer from '../likes/likes_container';
import CommentFormContainer from '../comments/comment_form_container';
import { selectComments } from '../../reducers/selectors';

class PhotoFeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  likeOrLikes(num_likes) {
    if (num_likes === 1)
      return "like";
    else {
      return "likes";
    }
  }

  deleteCommentBtn(comment) {
    const { deleteComment, currentUser } = this.props;

    if (currentUser.username === comment.username) {
      return(
        <button onClick={ () => deleteComment(comment.id) }>
           <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    const { photo } = this.props;

    const comments = selectComments(photo.comments);
    let photoComments;
    if (comments) {
      photoComments = comments.map( (comment) => {
        return (
          <li key={comment.id}>
            <div className='photo-feed-comment-list-item'>
              <p>
                <Link to={`/users/${comment.userId}`}>{ comment.username }</Link>
                &nbsp;
                { comment.body }
              </p>

             { this.deleteCommentBtn(comment) }
            </div>
          </li>
        );
      });
    }

    return (
      <li className='photo-card'>
        <div className='photo-card-header'>
          <img className='photo-card-avatar' src={ photo.avatar_url } />
          <Link to={`/users/${photo.user_id}`}>{ photo.username }</Link>
        </div>

        <div className='photo-card-image'>
          <img src={ photo.image_url } />
        </div>

        <div className='photo-card-info'>
          <div className='photo-card-like-comment-btn'>
            <LikesContainer isLikedByCurrentUser={ photo.liked_by_current_user} photoId={ photo.id }/>
            &nbsp;
            <button className='comment-button'>
              <i className="fa fa-comment-o" aria-hidden="true"></i>
            </button>
          </div>

          <div className='photo-card-num-likes'>
            <p>{ photo.num_likes } { this.likeOrLikes(photo.num_likes) }</p>
          </div>

          <ul className='photo-card-comments'>
            <li>
              <Link to={`/users/${photo.user_id}`}>{ photo.username }</Link>
              &nbsp;{ photo.caption }
            </li>

            { photoComments }

         </ul>

         <div className='time-ago'>
            <div>{ photo.timestamp } ago</div>
         </div>

         <div className='photo-feed-comment'>
             <CommentFormContainer photoId={ photo.id }/>
         </div>
        </div>
      </li>
    );
  }
}

export default PhotoFeedIndexItem;
