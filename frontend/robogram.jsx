import React from 'react';
import ReactDOM from 'react-dom';
//Components
// import Root from './components/root';
// import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to ROBOgram</h1>, root);
});






// let store;
// if (window.currentUser) {
//   const preloadedState = { session: { currentUser: window.currentUser } };
//   store = configureStore(preloadedState);
//   delete window.currentUser;
// } else {
//   store = configureStore();
// }
