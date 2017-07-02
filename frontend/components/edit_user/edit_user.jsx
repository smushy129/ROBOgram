import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      name: "",
      bio: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const { user } = this.props;
    this.props.fetchSingleUser(this.props.match.params.id)
    .then(() => {
      this.setState ({
        id: `${user.id}`,
        username: `${user.username}`,
        name: `${user.name}`,
        bio: `${user.bio}`,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.updateUser(user)
    .then ( () => this.props.history.push(`/users/${this.props.user.id}`));
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    const { user } = this.props;

    return (
      <div className="edit-user-page">
        <div className="edit-user-body">
          <div className="left-panel">
            <ul className='left-panel-list'>
              <li>Edit Profile</li>
            </ul>
          </div>

          <div className="edit-user-section">
            <div className="edit-header">
              <img className="profile-pic edit-profile-pic" src={user.avatar_url}/>
              <div className="edit-user-username">{user.username}</div>
            </div>

            <form className="edit-user-form" onSubmit={this.handleSubmit}>
              <div className="edit-name">
                <div>Name</div>
                <input value={this.state.name} onChange={this.update("name")}></input>
              </div>

              <div className="edit-username">
                <div>Username</div>
                <input value={this.state.username} onChange={this.update("username")}></input>
              </div>

              <div className="edit-bio">
                <div>Bio</div>
                <textarea value={this.state.bio} onChange={this.update("bio")}></textarea>
              </div>

              <div className="edit-user-submit-btn">
                <div></div>
                <button className="submitEdit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
