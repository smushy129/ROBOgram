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

  handleSubmit(e) {
    let formData = new FormData();
    formData.append("photo[caption]", this.state.caption);
    formData.append("photo[image]", this.state.imageFile);
    this.props.uploadPhoto(formData);
    this.props.closeModal();
  }

  render() {

  return(
    <div onClick={ (e) => e.stopPropagation() }>
      Upload Photo

      <input type="text" onChange={this.updateCaption}/>
      <input type="file" onChange={this.updateFile}/>
      <button onClick={this.handleSubmit}>Upload</button>
      <img src={this.state.imageUrl}/>
    </div>);
  }
}

export default UploadPhoto;
