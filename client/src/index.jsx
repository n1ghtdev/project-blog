import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './containers/App';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  MOUNT_NODE
);