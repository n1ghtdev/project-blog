import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';

const FormInput = styled.input`
  padding: 10px;
  max-width: 500px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #CFD8DC;
  &:focus {
    outline-color: #90A4AE;
  }
`;

const Input = ({
  name, value, type, onChange, placeholder, title,
}) => (
  <Label htmlFor={name} title={title}>
    <FormInput
      id={name}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  </Label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export default Input;
