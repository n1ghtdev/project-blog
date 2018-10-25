import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  ${({ styles }) => styles === 'form-button' && `
    padding: 10px 25px;
    border-radius: 3px;
    background: #88afc1;
    color: #fff;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `}
  ${({ styles }) => styles === 'modal-button' && `
    padding: 7px 15px;
    border-radius: 3px;
    background: #607D8B;
    color: #fff;
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
  `}
    ${({ styles }) => styles === 'modal-button--text' && `
    background: transparent;
    color: #424242;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `}
`;

const Button = ({ children, onClick, styles }) => (
  <ButtonContainer styles={styles} type="button" onClick={onClick}>{ children }</ButtonContainer>
);

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.string,
};

export default Button;
