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
    if (this.props.errors.length) {
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
    this.props.processForm(user);
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
          <h3>Sign Up</h3>

          <p>{signupBlurb}</p>

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

          <button>Sign Up</button>
        </form>

        {this.displayErrors()}

      </section>
    );
  }

}

export default withRouter(SignupForm);
