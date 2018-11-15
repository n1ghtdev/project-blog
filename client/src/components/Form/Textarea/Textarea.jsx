import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';

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
  <Label htmlFor={name} title={title}>
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
  </Label>
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
