import '@babel/polyfill';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '../pages/Blog';
import Post from '../pages/Blog/Post';
import AddPost from '../pages/Blog/AddPost';

import AppWrapper from '../components/AppWrapper';
import TopNav from '../components/TopNav';
import Item from '../components/TopNav/Item';
import InfoSection from '../components/InfoSection';
import MidSection from '../components/MiddleSection';
import MainContainer from '../components/MainContainer';
import SideContainer from '../components/SideContainer';
import NavCatContainer from './NavCatContainer';


export default function App() {
  return (
    <AppWrapper>
      <TopNav>
        <Item to="/">Home</Item>
        <Item to="/blog">About</Item>
        <Item to="/blog/add-post">Add new post</Item>
      </TopNav>
      <InfoSection>
        Test
      </InfoSection>
      <MidSection>
        <MainContainer>
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/add-post" component={AddPost} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </MainContainer>
        <SideContainer>
          <NavCatContainer />
        </SideContainer>
      </MidSection>
      {/* Footer */}
    </AppWrapper>
  );
}
