import React from 'react';
import { selectedPhotos } from '../../reducers/selectors';

class userProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props.state;
    const photos = selectedPhotos(this.props.state);
    let allUserPhotos;

    if (photos) {
      allUserPhotos = photos.map( (photo) => {
        return (
          <li key={photo.id} className='user-photo-list-item'>
            <img src={photo.image_url} />
          </li>
        );
      });
    }

    return (
      <section className='user-data'>
        <div className ='user-profile'>
          <div className="awesomo-img">
            <img src={user.avatar_url} />
          </div>

          <ul className='user-profile-details'>
            <li className='user-profile-username'>{user.username}</li>

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
