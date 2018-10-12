import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MidSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 150px; /*temp*/
`;

const MiddleSection = ({ children }) => (
  <MidSection>
    { children }
  </MidSection>
);

MiddleSection.propTypes = {
  children: PropTypes.any,
};

export default MiddleSection;
