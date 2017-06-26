import React from 'react';

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

  goBack() {
   this.context.router.push("/");
 }

  handleSubmit(e) {
    let formData = new FormData();
    formData.append("photo[caption]", this.state.caption);
    formData.append("photo[image]", this.state.imageFile);
    this.props.uploadPhoto(formData, this.goBack);
    this.props.closeModal();
  }

  render() {
    return(
      <div className='upload-modal' onClick={ (e) => e.stopPropagation() }>
        <div className='upload-modal-content'>
          <p>Upload Photo</p>

          <div className='img-preview'>
            <img src={this.state.imageUrl}/>
          </div>

          <label>
            <input className='file-name' type="file" onChange={this.updateFile}/>
          </label>

          <label>
            <input className='upload-caption'type="text"
              onChange={this.updateCaption}
              placeholder='Add a caption'
              />
          </label>
        </div>

        <div className='cancel-submit'>
          <button onClick={() => this.props.closeModal() }>Cancel</button>
          <button onClick={this.handleSubmit}>Upload</button>
        </div>
      </div>
    );
  }
}

export default UploadPhoto;
