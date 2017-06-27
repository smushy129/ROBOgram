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
    const photos = selectedPhotos(this.props);
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
        <h1> No photos yet! </h1>
      );
    }
    return allUserPhotos.reverse();
  }

  followOrEditProfileButton() {
    let currentUser = this.props.currentUser;
    let currentUserProfile = this.props.user;
    const { deleteFollow, createFollow } = this.props;


    if (currentUserProfile.followers) {
      if (Object.keys(currentUserProfile.followers).includes(currentUser.id.toString())) {
        return <button className='following-btn' onClick={ () => deleteFollow(currentUserProfile.id) }>Following</button>;
      }
    }

    if (currentUser.id === currentUserProfile.id) {
      return <button className='edit-profile-btn'>Edit Profile</button>;
    } else {
      return <button className='follow-btn' onClick={ () => createFollow(currentUserProfile.id) }>Follow</button>;
    }
  }

  render() {
    const { user } = this.props;
    let userPhotos = this.userPhotos();
    let numPhotos = 0;

    if (userPhotos.length > 0) {
      numPhotos = userPhotos.length;
    }


    return (
      <section className='user-data'>
        <div className ='user-profile'>
          <div className="profile-img">
            <img src={user.avatar_url} />
          </div>

          <ul className='user-profile-details'>
            <div className='username-follow-btn'>
              <li className='user-profile-username'>{user.username}</li>
              { this.followOrEditProfileButton() }
            </div>

            <div className="user-meta-data">
              <span className='post-count'>
                <li>{numPhotos}</li>
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
