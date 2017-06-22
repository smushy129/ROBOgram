import React from 'react';

class userProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props.state;
    return (
      <section className ='user-profile'>

        <div className="awesomo-img">
          <img src={window.images.awesomo_img} />
        </div>

        <ul className='user-profile-details'>
          <li className='user-profile-username'>{user.username}</li>

          <div className='deets'>
            <li className='user-profile-name'>{user.name}</li>
            &nbsp;
            <li>{user.bio} <a href={user.website}>{user.website}</a></li>
          </div>
        </ul>

      </section>
    );
  }
}

export default userProfile;
