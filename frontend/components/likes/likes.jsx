import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  likeButtonToRender() {
    const { isLikedByCurrentUser, createLike, destroyLike, photoId } = this.props;

    if (isLikedByCurrentUser) {
      return (
        <button className='liked-button' onClick={ () => destroyLike(photoId) }>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <button className='unliked-button' onClick={ () => createLike(photoId) }>
          <i className="fa fa-heart-o" aria-hidden="false"></i>
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        { this.likeButtonToRender() }
      </div>
    );
  }
}

export default Likes;
