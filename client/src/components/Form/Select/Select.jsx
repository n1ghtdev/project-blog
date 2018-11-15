import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Option from './Option';
import Label from '../Label';

const FormSelect = styled.select`
  padding: 10px;
  max-width: 250px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #CFD8DC;
`;

const Select = ({
  name, value, onChange, options, title,
}) => (
  <Label htmlFor={name} title={title}>
    <FormSelect name={name} value={value} onChange={onChange}>
      { options.map((option) => (
        <Option key={option.id} value={option.id}>{option.name}</Option>
      )) }
    </FormSelect>
  </Label>
);

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default Select;
