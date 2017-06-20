import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.displayErrors = this.displayErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayErrors() {
    if (this.props.errors) {
      const errorItems = this.props.errors.map( (errorMsg, idx) => {
        return (
          <li key={ "errorMsg" + idx } >{errorMsg}</li>
        );
      });

      return (
        <ul>
          {errorItems}
        </ul>
      );
    } else {
      return null;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }


  render() {
    return(
      <section>

        <form onSubmit={this.handleSubmit} className='signup-form'>
          <h2>ROBOgram</h2>

          <p>Sign up to see photos from your robo friends.</p>

          <label>
            <input
              type='text'
              onChange={this.update("username")}
              placeholder="Username"
              value={this.state.username}
              />
          </label>

          <br></br>

          <label>
            <input
              type='text'
              onChange={this.update("password")}
              placeholder="Password"
              value={this.state.password}
              />
          </label>

          <br></br>

          <button className='signup-button'>Sign Up</button>
        </form>

        {this.displayErrors()}

        <div className='have-account'>
          <p>Have an account? <Link to="/login">Log in</Link> </p>
        </div>

      </section>
    );
  }

}

export default withRouter(SignupForm);
