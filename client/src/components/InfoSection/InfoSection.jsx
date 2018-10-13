import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';

const Info = styled.div`
  height: 200px;
  background-color: #607D8B;
`;

const InfoSection = ({ children }) => (
  <Info>
    <Container>
      { children }
    </Container>
  </Info>
);

InfoSection.propTypes = {
  children: PropTypes.any,
};

export default InfoSection;
