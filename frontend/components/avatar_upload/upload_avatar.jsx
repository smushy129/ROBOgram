import React from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import Errors from '../errors/errors'

class UploadAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: null,
      imageUrl: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDragDropFile = this.updateDragDropFile.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateDragDropFile(e) {
    let file = e[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    let formData = new FormData();
    formData.append("user[avatar]", this.state.imageFile);
    this.props.updateAvatar(formData, this.props.user.id)
    .then( () => this.props.closeModal());
  }

  render() {
    return(
      <div className='upload-avatar' onClick={ (e) => e.stopPropagation() }>
        <div className='upload-avatar-content'>
          <div className='img-preview'>
            <div className="upload-avatar-side">
              <p>Update Profile Picture</p>
              <div className='cancel-submit'>
                <button onClick={this.handleSubmit}>Upload</button>
                &nbsp; &nbsp;
                <button onClick={() => this.props.closeModal() }>Cancel</button>
              </div>
              <Errors />
            </div>

            <Dropzone className="drag-drop-zone"
              onDrop={ this.updateDragDropFile }><img
              src={this.state.imageUrl}/>
            </Dropzone>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadAvatar;
