import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  likeButtonToRender() {
    const { isLikedByCurrentUser } = this.props;

    if (isLikedByCurrentUser) {
      return (
        <button className='unliked-button'>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <button className='unliked-button'>
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
