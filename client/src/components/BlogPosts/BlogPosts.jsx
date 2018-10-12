import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogContainer = styled.div`
  flex-basis: 78%;
  padding-left: 15px;
  padding-right: 15px;
`;

const BlogPosts = ({ children }) => (
  <BlogContainer>
    { children }
  </BlogContainer>
);

BlogPosts.propTypes = {
  children: PropTypes.any,
};

export default BlogPosts;
