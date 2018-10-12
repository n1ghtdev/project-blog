import '@babel/polyfill';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '../pages/Blog';
import Post from '../pages/Blog/Post';

import AppWrapper from '../components/AppWrapper';
import TopNav from '../components/TopNav';
import Item from '../components/TopNav/Item';
import MidSection from '../components/MiddleSection';
import BlogPosts from '../components/BlogPosts';

export default function App() {
  return (
    <AppWrapper>
      <TopNav>
        <Item to="/blog">Home</Item>
        <Item to="/blog">Home</Item>
        <Item to="/blog">Home</Item>
      </TopNav>
      <MidSection>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={Post} />
        </Switch>
        <div style={{ flexBasis: '20%', height: '200px', background: 'black' }}></div>
      </MidSection>

    </AppWrapper>
  );
}
