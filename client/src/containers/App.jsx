import '@babel/polyfill';

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Blog from '../pages/Blog';

export default function App() {
  return (
    <div>
      <h1>Testing App...</h1>
      <Link to="/blog">Blog</Link>
      <Switch>
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}
