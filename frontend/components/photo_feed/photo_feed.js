import React from 'react';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    this.props.fetchFeedPhotos();
  }

  render() {
    return (
      <h1 className='photo-feed'>AMAZING PHOTOS HERE</h1>
    );
  }
}

export default PhotoFeed;
