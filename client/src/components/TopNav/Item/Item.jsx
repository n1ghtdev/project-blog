import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopNavItem = styled.li`
  list-style-type: none;
  padding-right: 15px;
  &:last-child {
    padding-right: 0;
  }
`;
const TopNavLink = styled(Link)`
  color: #212121;
`;

const Item = (props) => (
  <TopNavItem>
    <TopNavLink {...props}>
      { props.children }
    </TopNavLink>
  </TopNavItem>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Item;
