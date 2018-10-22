import '@babel/polyfill';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '../pages/Blog';
import Post from '../pages/Blog/Post';
import AddPost from '../pages/Blog/AddPost';

import ModalHandler from './ModalHandler';

import AppWrapper from '../components/AppWrapper';
import TopNav from '../components/TopNav';
import Item from '../components/TopNav/Item';
import InfoSection from '../components/InfoSection';
import MidSection from '../components/MiddleSection';
import MainContainer from '../components/MainContainer';
import SideContainer from '../components/SideContainer';


export default function App() {
  return (
    <AppWrapper>
      <ModalHandler />
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
            <Route path="/blog/:id" component={Post} />
          </Switch>
        </MainContainer>
        <SideContainer>
          <p>HELLO</p>
        </SideContainer>
      </MidSection>
      {/* Footer */}
    </AppWrapper>
  );
}
