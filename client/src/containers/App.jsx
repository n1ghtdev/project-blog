import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Blog from './Blog';

export default function App () {
  return (
    <div>
      <h1>Testing App...</h1>
      <Link to="/blog">Blog</Link>

      <Switch>
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}