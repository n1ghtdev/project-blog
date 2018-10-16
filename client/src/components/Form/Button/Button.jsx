import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button``;

const Button = ({ children, onClick }) => (
  <ButtonContainer type="button" onClick={onClick}>{ children }</ButtonContainer>
);

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
