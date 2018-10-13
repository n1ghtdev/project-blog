import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1170px;
  margin: 0 auto;
  background-color: #f5f5f5;
  display: flex;
  flex-flow: column nowrap;
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
