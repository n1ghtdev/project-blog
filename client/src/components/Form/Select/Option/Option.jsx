import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionWrapper = styled.option``;

const Option = ({ value, children }) => (
  <OptionWrapper value={value}>{children}</OptionWrapper>
);

Option.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Option;
