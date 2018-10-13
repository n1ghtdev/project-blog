import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormWrapper = styled.form``;

const Form = (props) => (
  <FormWrapper {...props}>
    { props.children }
  </FormWrapper>
);

Form.propTypes = {
  children: PropTypes.any,
};

export default Form;
