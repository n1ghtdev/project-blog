import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogContainer = styled.div`

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
