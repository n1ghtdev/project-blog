import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavCatItem = styled.li``;
const NavCatLink = styled(Link)`
  text-decoration: none;
  color: #000;
  ${({ active }) => active && `
    font-weight: bold;
    text-decoration: underline;
  `}
`;

const Item = ({ children, href, active }) => (
  <NavCatItem>
    <NavCatLink to={href} active={active}>{ children }</NavCatLink>
  </NavCatItem>
);

Item.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Item;
