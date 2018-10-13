import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;


const Container = ({ children }) => (
  <BContainer>
    { children }
  </BContainer>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
