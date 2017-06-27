import React from 'react';

class PhotoFeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photo } = this.props;

    return (
      <li><img src={ photo.image_url } /></li>
    );
  }
}

export default PhotoFeedIndexItem;
