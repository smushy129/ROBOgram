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

  componentDidMount() {
    this.props.unDisplayErrors();
  }

  displayErrors() {
    if (this.props.errors) {
      const errorItems = this.props.errors.map( (errorMsg, idx) => {
        return (
          <li key={ "errorMsg" + idx } >{errorMsg}</li>
        );
      });

      return (
        <ul className="errors">
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
      <section className='auth-page'>

      <div className="auth-phone-img">
        <img src={window.images.auth_img} />
      </div>

        <div className='auth-form'>
          <h2 className='logo'>Robogram</h2>
          <form onSubmit={this.handleSubmit} className='signup-form'>

          <div className="signup-blurb">
            <p>Sign up to see photos from</p>
            <p>all your robot friends.</p>
          </div>

            <label>
              <input
                type='text'
                onChange={this.update("username")}
                placeholder="Username"
                value={this.state.username}
                />
            </label>

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
            {this.displayErrors()}
          </form>

          <div className='has-account'>
            <p>Have an account? <Link to="/login">Log in</Link> </p>
          </div>
        </div>



      </section>
    );
  }

}

export default withRouter(SignupForm);
