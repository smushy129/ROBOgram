import React from 'react';

class PhotoFeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photo } = this.props;

    return (
      <div className='photo-card'>
        <li className='photo-card-image'><img src={ photo.image_url } /></li>
      </div>
    );
  }
}

export default PhotoFeedIndexItem;
