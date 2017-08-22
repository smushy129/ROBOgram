import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Search from '../search/search_container';

import UploadPhotoContainer from '../upload_photo/upload_photo_container';

class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const { logout } = this.props;
    logout();
    this.props.history.push('/');
  }

  render() {
    const { currentUser, openModal, handleShow, showMenu } = this.props;
    return (
      currentUser ? (
        <header className="header">
          <hgroup className="nav-group">
            <div className="logo">
              <Link to="/"><img src={window.images.logo_img} /></Link>
            </div>

            <div className='search-bar'>
              <Search />
            </div>

            <div className="menu-links">
              <button className="menu-icon"
                onClick={ handleShow } >
                <img src={window.images.menu} />
              </button>

              <div className="dropdown" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link to="/discover">Discover</Link>
                <button onClick={ () => openModal(<UploadPhotoContainer />) }>Upload</button>
                <Link to={`/users/${currentUser.id}`}>Profile</Link>
                <button onClick={ this.handleLogOut } >Logout</button>
              </div>
            </div>

            <div className="nav-links">
              <Link className="discover-icon" to="/discover"><img src={window.images.discover_icon} /></Link>
              <button className="upload-icon" onClick={ () => openModal(<UploadPhotoContainer />) }><img src={window.images.upload_icon} /></button>
              <Link className="user-icon" to={`/users/${currentUser.id}`}><img src={window.images.profile_icon} /></Link>
              <button className="logout-icon" onClick={ this.handleLogOut } ><img src={window.images.logout_icon} /></button>
            </div>
          </hgroup>
        </header>
      ) : null
    );
  }
}

export default navbar;
