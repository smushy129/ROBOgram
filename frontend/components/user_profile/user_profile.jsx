import React from 'react';
import { selectedPhotos } from '../../reducers/selectors';
import PhotoDetailContainer from '../photo_detail/photo_detail_container';
import { Link } from 'react-router-dom';

class userProfile extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    const { user } = this.props.state;
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
    }

    return (
      <section className='user-data'>
        <div className ='user-profile'>
          <div className="profile-img">
            <img src={user.avatar_url} />
          </div>

          <ul className='user-profile-details'>
            <div>
              <li className='user-profile-username'>{user.username}</li>
            </div>

            <div className="user-meta-data">
              <span className='post-count'>
                <li>4</li>
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
            { allUserPhotos }
          </ul>

        </section>

      </section>
    );
  }
}

export default userProfile;
