import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalContainer = styled.div`
  ${({ active }) => active && `
    z-index: 9999;
    position: fixed;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0, .8);
  `}
`;

const ModalBox = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: orange;
  width: 300px;
  padding: 15px 15px 0 15px;
  ${({ active }) => active && `
    display: block;
  `}
`;

const ModalContent = styled.div`
  padding: 25px 0;
  min-height: 100px;
`;
const ModalButtons = styled.div`
  padding-bottom: 15px;
`;
const ModalTitle = styled.div``;

const Modal = ({ title, content, active, children }) => (
  <ModalContainer active={active}>
    <ModalBox active={active}>
      <ModalTitle>
        { title }
      </ModalTitle>
      <ModalContent>
        { content }
      </ModalContent>
      <ModalButtons>
        {/* :thinking: */}
      </ModalButtons>
    </ModalBox>
  </ModalContainer>
);

Modal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
  active: PropTypes.bool,
};

export default Modal;
