import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  background-color: #f5f5f5;
`;

const AppWrapper = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

AppWrapper.propTypes = {
  children: PropTypes.any,
};

export default AppWrapper;
