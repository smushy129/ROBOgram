import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      photo_id: props.photoId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(body) {
    return (e) => {
      e.preventDefault();
      this.setState({[body]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (!this.state.body) {
      return;
    }

    const comment = this.state;
    this.props.addComment(comment)
      .then( () => this.setState({body: ''}));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input className='comments-box'
          type='text'
          placeholder='Add a comment...'
          value={this.state.body}
          onChange={this.updateBody('body')}
          />

        <button onClick={this.handleSubmit} className='comment-form-btn'></button>
      </form>
    );
  }
}

export default CommentForm;
