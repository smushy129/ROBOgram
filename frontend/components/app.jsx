import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter }
  from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
//components
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_container';
import SignupFormContainer from './session_form/signup_container';
import PhotoFeedContainer from './photo_feed/photo_feed_container';


const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>

  <ProtectedRoute path="/" component={PhotoFeedContainer} />
  <AuthRoute path="/login" component={LoginFormContainer} />
  <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
