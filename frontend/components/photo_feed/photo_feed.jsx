import React from 'react';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchFeedPhotos();
  }

  render() {
    return (
      <div>
        <h1 className='photo-feed'>AMAZING PHOTOS HERE</h1>
      </div>
    );
  }
}

export default PhotoFeed;
