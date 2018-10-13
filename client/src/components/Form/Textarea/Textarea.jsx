import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormGroup = styled.div``;
const FormLabel = styled.label`
  display: block;
  padding-left: 5px;
  padding-bottom: 5px;
`;
const FormTextarea = styled.textarea`
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #CFD8DC;
  &:focus {
    outline-color: #90A4AE;
  }
`;

const Textarea = ({
  name, value, type, onChange, placeholder, title,
}) => (
  <FormGroup>
    <FormLabel htmlFor={name}>{ title }</FormLabel>
    <FormTextarea
      id={name}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      rows="20"
      cols="75"
    />
  </FormGroup>
);

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export default Textarea;
