import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalContainer = styled.div`
  display: none;
  ${({ active }) => active && `
    display: block;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0, .8);
  `}
`;

const ModalBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: orange;
  width: 300px;
  padding: 15px 15px 0 15px;
`;

const ModalContent = styled.div`
  padding: 25px 0;
  min-height: 100px;
`;
const ModalButtons = styled.div`
  padding-bottom: 15px;
`;
const ModalTitle = styled.div``;

const Modal = ({
  title, content, active, children, hideModal, trigger,
}) => { return ReactDOM.createPortal(
  <ModalContainer active={active}>
    <ModalBox active={active}>
      <ModalTitle>
        { title }
      </ModalTitle>
      <ModalContent>
        { content }
      </ModalContent>
      <ModalButtons>
        <button onClick={hideModal}>Close</button>
      </ModalButtons>
    </ModalBox>
  </ModalContainer>,
  document.getElementById('root'))
};

Modal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
  active: PropTypes.bool,
  hideModal: PropTypes.any,
};

export default Modal;
