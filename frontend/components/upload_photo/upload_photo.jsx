import React from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import Errors from '../errors/errors'

class UploadPhoto extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      caption: "",
      imageFile: null,
      imageUrl: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.updateCaption = this.updateCaption.bind(this);
    this.updateDragDropFile = this.updateDragDropFile.bind(this);
  }

  updateCaption(e) {
    this.setState({
      caption: e.target.value
    });
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

  goBack() {
    const { currentUser } = this.props;
    this.props.closeModal();
    this.props.history.push(`/users/${currentUser.id}`);
 }

  handleSubmit(e) {
    let formData = new FormData();
    formData.append("photo[caption]", this.state.caption);
    formData.append("photo[image]", this.state.imageFile);
    this.props.uploadPhoto(formData, this.goBack);
  }

  render() {
    return(
      <div className='upload-modal' onClick={ (e) => e.stopPropagation() }>
        <div className='upload-modal-content'>

          <div className='img-preview'>
            <div className="upload-side">
              <p>Upload an Image</p>

              <label>
                <textarea rows="4" cols="50" className='upload-caption'type="text"
                  onChange={this.updateCaption}
                  placeholder='Add a caption'
                  />
              </label>

              <div className='cancel-submit'>
                <button onClick={this.handleSubmit}>Upload</button>
                &nbsp; &nbsp;
                <button onClick={() => this.props.closeModal() }>Cancel</button>
              </div>
              <Errors />
            </div>
            <Dropzone className="drag-drop-zone"
              onDrop={ this.updateDragDropFile }>
              <img src={this.state.imageUrl}/>
            </Dropzone>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadPhoto;
