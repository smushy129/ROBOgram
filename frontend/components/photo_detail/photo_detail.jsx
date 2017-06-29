import React from 'react';
import { Link } from 'react-router-dom';

import LikesContainer from '../likes/likes_container';
import CommentFormDetailContainer from '../comments/comment_form_detail_container';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
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

  render() {
    const { photoDetail, user } = this.props;
    const { closeModal, deletePhoto, id, fetchFeedPhotos, fetchSinglePhoto } = this.props;

    if (photoDetail) {
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

                <button className='delete-photo-btn' onClick={ () => deletePhoto(id, this.goBack).then( () => fetchFeedPhotos()) }>
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
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
                <li><span>robocop</span> nice outfit!</li>
                <li><span>terminator</span> i have the same shoes!</li>
                <li><span>wall-E</span> *machine noises*</li>
              </ul>
            </div>

            <div className='modal-photo-detail-like-comment'>
              <LikesContainer isLikedByCurrentUser={ photoDetail.liked_by_current_user} photoId={ id }/>
              &nbsp;
              <button className='comment-button'>
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
              <CommentFormDetailContainer photoId={ photoDetail.id }/>
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
