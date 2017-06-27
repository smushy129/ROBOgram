import React from 'react';
import { selectedPhotos } from '../../reducers/selectors';
import PhotoDetailContainer from '../photo_detail/photo_detail_container';

class userProfile extends React.Component {
  constructor(props) {
    super(props);

    this.followOrEditProfileButton = this.followOrEditProfileButton.bind(this);
   }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    let destinationUserId = nextProps.match.params.id;
    if(this.props.match.params.id !== destinationUserId) {
      this.props.fetchSingleUser(destinationUserId);
    }
  }

  userPhotos() {
    const photos = selectedPhotos(this.props.state);
    let allUserPhotos;

    if (photos) {
      allUserPhotos = photos.map( (photo, idx) => {
        return (
            <li key={photo.id} className='user-photo-list-item'
            onClick={ () => this.props.openModal(<PhotoDetailContainer id={photo.id}/>) }>
            <img src={photo.image_url} />
          </li>
        );
      });
    } else {
      return (
        <h1> loading </h1>
      );
    }
    return allUserPhotos;
  }

  followOrEditProfileButton() {
    let currentUser = this.props.state.session.currentUser;
    let currentUserProfile = this.props.state.user;
    const { deleteFollow, createFollow } = this.props;


    if (currentUserProfile.followers) {
      if (Object.keys(currentUserProfile.followers).includes(currentUser.id.toString())) {
        return <button className='follow-btn' onClick={ () => deleteFollow(currentUserProfile.id) }>Following</button>;
      }
    }

    if (currentUser.id === currentUserProfile.id) {
      return <button className='edit-profile-btn'>Edit Profile</button>;
    } else {
      return <button className='follow-btn' onClick={ () => createFollow(currentUserProfile.id) }>Follow</button>;
    }
  }

  render() {
    const { user } = this.props.state;
    let userPhotos = this.userPhotos();

    return (
      <section className='user-data'>
        <div className ='user-profile'>
          <div className="profile-img">
            <img src={user.avatar_url} />
          </div>

          <ul className='user-profile-details'>
            <div>
              <li className='user-profile-username'>{user.username}</li>
              { this.followOrEditProfileButton() }
            </div>

            <div className="user-meta-data">
              <span className='post-count'>
                <li>{userPhotos.length}</li>
                &nbsp;
                <p>posts</p>
              </span>

              <span className='follower-count'>
                <li>9</li>
                &nbsp;
                <p>followers</p>
              </span>

              <span className='following-count'>
                <li>2</li>
                &nbsp;
                <p>following</p>
              </span>
            </div>

            <div className='deets'>
              <li className='user-profile-name'>{user.name}</li>
              &nbsp;
              <li>{user.bio} <a href={user.website}>{user.website}</a></li>
            </div>
          </ul>
        </div>

        <section className='user-photos-section'>
          <ul className='user-photos-list'>
            {userPhotos}
          </ul>

        </section>

      </section>
    );
  }
}

export default userProfile;
