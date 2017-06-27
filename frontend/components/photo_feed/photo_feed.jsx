import React from 'react';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);

    this.parsePhotos = this.parsePhotos.bind(this);
  }

  componentWillMount() {
    this.props.fetchFeedPhotos();
  }

  parsePhotos() {
    const { photoFeed } = this.props;

    photoFeedArray = Object.keys(photoFeed).map(id => photoFeed[id]);
    console.log(photoFeedArray);
  }

  render() {
    // debugger;
    // this.parsePhotos();
    return (
      <div>
        <h1 className='photo-feed'>AMAZING PHOTOS HERE</h1>
      </div>
    );
  }
}

export default PhotoFeed;
