import React from 'react';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchSinglePhoto(this.props.id);
  }

  render() {
    const { photoDetail } = this.props.state;
    if (photoDetail) {
      debugger
      return(
        <div>
          <img src={ photoDetail['image_url'] }/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PhotoDetail;


// onClick={ (e) => e.stopPropogation() }
