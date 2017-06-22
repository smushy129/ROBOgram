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

        <div className='username-details'>
          <div className='user-profile-username'>{user.username}</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <ul className='user-profile-details'>
            <li className='user-profile-name'>{user.name}</li>
            &nbsp;
            <li className='user-profile-bio'>{user.bio}</li>
            &nbsp;
            <li className='user-profile-website'><a href={user.website}>{user.website}</a></li>
          </ul>
        </div>


      </section>
    );
  }
}

export default userProfile;
