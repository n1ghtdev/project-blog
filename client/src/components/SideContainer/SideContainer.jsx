import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';

const Side = styled.div`
  flex-basis: 20%;
  border-left: 1px dashed #E0E0E0;
`;

const SideContainer = ({ children }) => (
  <Side>
    <Container>
      { children }
    </Container>
  </Side>
);

SideContainer.propTypes = {
  children: PropTypes.any,
};

export default SideContainer;
