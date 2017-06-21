import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

//testing
import { login, signup, logout } from './actions/session_actions';
window.login = login;
window.signup = signup;
window.logout = logout;



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store }/>, root);
});
