import React from 'react';
import { Link } from 'react-router-dom';
import UploadPhotoContainer from '../upload_photo/upload_photo_container';

class navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout, openModal } = this.props;
    return (
      currentUser ? (
        <header className="header">
          <hgroup className="nav-group">
            <div className="logo">
              <Link to="/"><img src={window.images.logo_img} /></Link>
            </div>

            <div className="nav-links">
              <button onClick={ () => openModal(<UploadPhotoContainer />) }><img src={window.images.upload_icon} /></button>
              <Link to={`/users/${currentUser.id}`}><img src={window.images.profile_icon} /></Link>
              <Link onClick={ logout } to="/login"><img src={window.images.logout_icon} /></Link>
            </div>
          </hgroup>
        </header>
      ) : null
    );
  }
}

export default navbar;
