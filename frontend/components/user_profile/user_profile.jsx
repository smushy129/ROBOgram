import React from 'react';
import { selectedPhotos } from '../../reducers/selectors';
import PhotoDetailContainer from '../photo_detail/photo_detail_container';
import UploadAvatarContainer from '../avatar_upload/upload_avatar_container';
import { Link } from 'react-router-dom';

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
        null
      );
    }
    return allUserPhotos.reverse();
  }

  followOrEditProfileButton() {
    let currentUserProfile = this.props.user;
    const { deleteFollow, createFollow, currentUser } = this.props;


    if (currentUserProfile.followers) {
      if (Object.keys(currentUserProfile.followers).includes(currentUser.id.toString())) {
        return <button className='following-btn' onClick={ () => deleteFollow(currentUserProfile.id) }>Following</button>;
      }
    }

    if (currentUser.id === currentUserProfile.id) {
      return (<Link className="edit-profile-btn" to={`/users/${this.props.currentUser.id}/edit`}>Edit Profile</Link>);
    } else {
      return <button className='follow-btn' onClick={ () => createFollow(currentUserProfile.id) }>Follow</button>;
    }
  }

  render() {
    const { user, openModal } = this.props;
    let userPhotos = this.userPhotos();

    return (
      <section className='user-data'>
        <div className ='user-profile'>
          <div className='user-profile-contain'>
            <div className="profile-img">
              <button onClick={ () => openModal(<UploadAvatarContainer />)}
                className='upload-avatar-button'>
                <img src={user.avatar_url} />
              </button>
            </div>

            <ul className='user-profile-details'>
              <div className='username-follow-btn'>
                <li className='user-profile-username'>{user.username}</li>
                { this.followOrEditProfileButton() }
              </div>

              <div className="user-meta-data">
                <span className='post-count'>
                  <li>{user.num_photos}</li>
                  &nbsp;
                  <p>posts</p>
                </span>

                <span className='follower-count'>
                  <li>{user.num_followers}</li>
                  &nbsp;
                  <p>followers</p>
                </span>

                <span className='following-count'>
                  <li>{user.num_followees}</li>
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
