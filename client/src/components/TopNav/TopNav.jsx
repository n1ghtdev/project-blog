import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TopNavContainer = styled.div`
  padding: 15px;
`;
const TopNavList = styled.ul`
  display: flex;
  justify-content: center;
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
