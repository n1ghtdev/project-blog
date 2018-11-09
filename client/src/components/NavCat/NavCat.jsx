import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavCatWrapper = styled.div``;
const NavCatList = styled.ul`
  list-style-type: none;
`;

const NavCat = ({ children }) => (
  <NavCatWrapper>
    <NavCatList>
      { children }
    </NavCatList>
  </NavCatWrapper>
);

NavCat.propTypes = {
  children: PropTypes.array.isRequired,
};

export default NavCat;
