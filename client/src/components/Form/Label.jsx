import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormGroup = styled.div``;
const FormLabel = styled.label`
  display: block;
  padding-left: 5px;
  padding-bottom: 5px;
`;

const Label = ({ htmlFor, title, children }) => (
  <FormGroup>
    <FormLabel htmlFor={htmlFor}>{title}</FormLabel>
    { children }
  </FormGroup>
);

Label.propTypes = {
  children: PropTypes.any,
  htmlFor: PropTypes.string,
  title: PropTypes.string,
};

export default Label;
