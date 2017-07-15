import React from 'react';

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
        <li key={idx}>
          <img src={user.avatar_url}></img>
          <div>
            {user.username}
            {user.name}
          </div>
        </li>
      );
    });
    return allUsers;
  }

  render() {
    return (
      <ul>
        { this.allUsers() }
      </ul>
    );
  }
}

export default Discover;
