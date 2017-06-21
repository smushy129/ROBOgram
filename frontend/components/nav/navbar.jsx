import React from 'react';
import { Link } from 'react-router-dom';

class navbar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { logout } = this.props;
    return (
      this.props.currentUser ? (
        <hgroup className="nav-group">
          <div className="logo">
            <Link to="/">{<img src="assets/logo" />}</Link>
          </div>

          <div className="nav-links">
            <Link to="/">{<img src="assets/upload" />}</Link>
            <Link to="/">{<img src="assets/profile" />}</Link>
            <Link  onClick={ logout } to="/login">{<img src="assets/logout" />}</Link>
          </div>
        </hgroup>
      ) : null
    );
  }
}

export default navbar;
