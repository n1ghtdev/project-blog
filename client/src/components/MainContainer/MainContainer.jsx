import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.div`
  flex-basis: 78%;
`;

const MainContainer = ({ children }) => (
  <Main>
    { children }
  </Main>
);

MainContainer.propTypes = {
  children: PropTypes.any,
};

export default MainContainer;
