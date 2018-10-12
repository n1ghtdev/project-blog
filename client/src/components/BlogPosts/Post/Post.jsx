import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostWrapper = styled.div`
  padding-top: 25px;
  &:first-child {
    padding-top: 0;
  }
`;
const PostTitle = styled.h3``;
const PostLink = styled(Link)`
  color: #37474F;
`;
const PostDescription = styled.p``;

const Post = ({ title, description, to }) => (
  <PostWrapper>
    <PostTitle>
      <PostLink to={to}>
        { title }
      </PostLink>
    </PostTitle>
    <PostDescription>{ description }</PostDescription>
  </PostWrapper>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Post;
