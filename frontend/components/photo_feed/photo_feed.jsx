import React from 'react';
import PhotoFeedIndexItem from './photo_feed_index_item';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);

    this.parsePhotos = this.parsePhotos.bind(this);
  }

  componentWillMount() {
    this.props.fetchFeedPhotos();
  }

  parsePhotos() {
    const { photos } = this.props.photoFeed;

    let photosList = Object.keys(photos).map( (id) => {
      return (
        <PhotoFeedIndexItem photo={ photos[id]} key={ id } />
      );
    });

    return photosList;
  }

  ifNotEmptyObj(obj) {
    return Object.keys(obj).length !== 0;
  }

  render() {
     let photosList;

     if (this.ifNotEmptyObj(this.props.photoFeed.photos)) {
       photosList = this.parsePhotos();
     }

    return (
      <div>
        <div className='photo-feed'>{photosList}</div>
      </div>
    );
  }
}

export default PhotoFeed;
