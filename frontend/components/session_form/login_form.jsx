import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
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
    this.props.login(user);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }


  render() {
    return(
      <section>

        <div className='auth-form'>
          <h2 className='logo'>Robogram</h2>
          <form onSubmit={this.handleSubmit} className="login-form">

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

            <button className='login-button'>Login</button>

            {this.displayErrors()}
          </form>
        </div>


        <div className='dont-have-account'>
          <p>Don't have an account? <Link to="/signup">Sign up</Link> </p>
        </div>

      </section>
    );
  }

}

export default withRouter(LoginForm);
