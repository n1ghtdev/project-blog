import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TopNavContainer = styled.div``;
const TopNavList = styled.ul`
  display: flex;
  
`;


const TopNav = (props) => (
  <TopNavContainer>
    <TopNavList>
      { props.children }
    </TopNavList>
  </TopNavContainer>
);

TopNav.propTypes = {
  children: PropTypes.any,
};

export default TopNav;
