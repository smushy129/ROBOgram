import React from 'react';
import { Link } from 'react-router-dom';

import LikesContainer from '../likes/likes_container';
import CommentFormContainer from '../comments/comment_form_container';
import { selectComments } from '../../reducers/selectors';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
    this.renderDeleteBtn = this.renderDeleteBtn.bind(this);
    this.deleteCommentBtn = this.deleteCommentBtn.bind(this);
  }

  componentDidMount() {
      this.props.fetchSinglePhoto(this.props.id);
  }

  getMonth() {
    const MONTH = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };

    return MONTH[this.props.photoDetail.created_at_month];
  }

  goBack() {
    const { currentUser } = this.props.currentUser;
    this.props.closeModal();
 }

  likeOrLikes(num_likes) {
    if (num_likes === 1)
      return "like";
    else {
      return "likes";
    }
  }

  renderDeleteBtn(id, deletePhoto, user, callback) {
    if (this.props.currentUser.username === user.username) {
      return(
        <button className='delete-photo-btn' onClick={ () => deletePhoto(id, this.goBack) }>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      );
    } else {
      return null;
    }
  }

  deleteCommentBtn(comment) {
      const { deleteComment, currentUser } = this.props;

    if (currentUser.username === comment.username) {
      return(
        <button onClick={ () => deleteComment(comment.id) } className='comment-delete-btn'>
           <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      );
    } else {
      return null;
    }
  }

  render() {
    const { photoDetail, user, closeModal, deletePhoto, id, fetchFeedPhotos, fetchSinglePhoto } = this.props;

    if (photoDetail.id) {

      const comments = selectComments(photoDetail.comments);
      let photoComments;
      if (comments) {
        photoComments = comments.map( (comment) => {
          return (
            <li key={comment.id}>
              <div className='photo-detail-comment-list-item'>
                <p>
                  <Link to={`/users/${comment.userId}`} onClick={ () => closeModal() }>{ comment.username }</Link>
                  &nbsp;
                  { comment.body }
                </p>

                { this.deleteCommentBtn(comment) }
              </div>
            </li>
          );
        });
      }

      return(
        <div className='modal-photo-detail' onClick={ (e) => e.stopPropagation() }>
          <img className='modal-photo-detail-image' src={ photoDetail.image_url }/>

          <div className='modal-photo-detail-info'>
            <div className='modal-photo-detail-header'>

              <div className='modal-photo-detail-avatar' onClick={ () => closeModal() }>
                <img src={ user.avatar_url } />
              </div>

              <div className='username-and-delete'>
                <div className='modal-photo-detail-header-username'>
                  <span onClick={ () => closeModal() }>{ user.username }</span>
                </div>

                { this.renderDeleteBtn(id, deletePhoto, user, this.goBack)}
              </div>
            </div>

            <div className='modal-photo-detail-caption'>
              <p>
                <span className='modal-photo-detail-header-username' onClick={ () => closeModal() }>
                  { user.username }
                </span>
                 &nbsp;
                { photoDetail.caption }
              </p>
            </div>

            <div className='modal-photo-detail-body'>
              <ul>
                { photoComments }
              </ul>
            </div>

            <div className='modal-photo-detail-like-comment'>
                <LikesContainer isLikedByCurrentUser={ photoDetail.liked_by_current_user} photoId={ id }/>
              &nbsp;
              <button className='modal-comment-button'>
                <i className="fa fa-comment-o" aria-hidden="true"></i>
              </button>

            </div>

            <div className='modal-photo-detail-like-count'>
              <span>{ photoDetail.num_likes } { this.likeOrLikes(photoDetail.num_likes) }</span>
            </div>

            <div className='modal-photo-detail-timestamp'>
              {this.getMonth()} {photoDetail.created_at_day}
            </div>

            <div className='modal-photo-detail-comments-section'>
              <CommentFormContainer photoId={ id }/>
            </div>

          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PhotoDetail;
