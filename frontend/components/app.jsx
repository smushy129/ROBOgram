import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
//components
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_container';
import SignupFormContainer from './session_form/signup_container';


const App = () => (
  <div>
    <header>
      <h1>Welcome to ROBOgram</h1>
      <GreetingContainer />
    </header>

  <Route exact path="/" component={LoginFormContainer} />
  <AuthRoute exact path="/login" component={LoginFormContainer} />
  <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
