import React from 'react';
import { Link } from 'react-router-dom';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchSinglePhoto(this.props.id);
  }

  render() {
    const { photoDetail, user } = this.props.state;
    const { closeModal } = this.props;

    if (photoDetail) {
      return(
        <div className='modal-photo-detail' onClick={ (e) => e.stopPropagation() }>
          <img className='modal-photo-detail-image' src={ photoDetail.image_url }/>

          <div className='modal-photo-detail-info'>
            <div className='modal-photo-detail-header'>
                <img src={ user.avatar_url }/>

                <div className='modal-photo-detail-header-username'>
                  <p onClick={ () => closeModal() }>{ user.username }</p>
                </div>
            </div>

            <div className='modal-photo-detail-caption'>
              <p onClick={ () => closeModal() }>{ user.username }</p>
                &nbsp;
              { photoDetail.caption }
            </div>

            <div className='modal-photo-detail-body'>

            </div>

            <div className='modal-photo-detail-like-comment'>

            </div>

            <div className='modal-photo-detail-like-count'>

            </div>

            <div className='modal-photo-detail-timestamp'>

            </div>

            <div className='modal-photo-detail-comments'>

            </div>

          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PhotoDetail;
