import React from 'react';
import { Link } from 'react-router-dom';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.allUsers = this.allUsers.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  allUsers() {
    const { discover } = this.props;
    let allUsers = discover.map( (user, idx) => {
      return (
        <li key={idx} className='user-list-item'>
          <section>
            <img src={user.avatar_url}></img>
            &nbsp; &nbsp;
            <div>
              <p><Link to={`/users/${user.userId}`}>{user.username}</Link></p>
              <span>{user.name}</span>
            </div>
          </section>
          <button className='follow-btn' onClick={ () => createFollow(user.userId) }>Follow</button>
        </li>
      );
    });
    return allUsers;
  }

  render() {
    return (
      <ul className='user-list'>
        { this.allUsers() }
      </ul>
    );
  }
}

export default Discover;
