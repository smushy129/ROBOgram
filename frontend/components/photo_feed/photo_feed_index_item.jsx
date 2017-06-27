import React from 'react';

class PhotoFeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photo } = this.props;

    return (
      <li className='photo-card'>
        <div className='photo-card-header'>
          <img className='photo-card-avatar' src={ photo.avatar_url } />
          <p>{ photo.username }</p>
        </div>


        <div className='photo-card-image'>
          <img src={ photo.image_url } />
        </div>

      </li>
    );
  }
}

export default PhotoFeedIndexItem;
