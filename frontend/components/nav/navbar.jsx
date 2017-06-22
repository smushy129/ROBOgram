import React from 'react';
import { Link } from 'react-router-dom';

class navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      currentUser ? (
        <hgroup className="nav-group">
          <div className="logo">
            <Link to="/"><img src={window.images.logo_img} /></Link>
          </div>

          <div className="nav-links">
            <Link to="/"><img src={window.images.upload_icon} /></Link>
            <Link to={`/users/${currentUser.id}`}><img src={window.images.profile_icon} /></Link>
            <Link onClick={ logout } to="/login"><img src={window.images.logout_icon} /></Link>
          </div>
        </hgroup>
      ) : null
    );
  }
}

export default navbar;
