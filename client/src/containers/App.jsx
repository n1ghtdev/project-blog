import '@babel/polyfill';

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Blog from '../pages/Blog';
import Post from '../pages/Blog/Post';

export default function App() {
  return (
    <div>
      <h1>Testing App...</h1>
      <Link to="/blog">Blog</Link>
      <Switch>
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Post} />
      </Switch>
    </div>
  );
}
