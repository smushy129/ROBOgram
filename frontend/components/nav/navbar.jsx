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
    const { currentUser, openModal } = this.props;
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


            <div className="nav-links">
              <button onClick={ () => openModal(<UploadPhotoContainer />) }><img src={window.images.upload_icon} /></button>
              <Link to={`/users/${currentUser.id}`}><img src={window.images.profile_icon} /></Link>
              <button onClick={ this.handleLogOut } ><img src={window.images.logout_icon} /></button>
            </div>
          </hgroup>
        </header>
      ) : null
    );
  }
}

export default navbar;
