import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Form/Button';

const ModalContainer = styled.div`
  display: none;
  ${({ active }) => active && `
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0, .6);
  `}
`;

const ModalBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: scale(2); zoom: 0.5; /* fixes blurry bug which comes with absolute centering */
  background: #FAFAFA;
  width: 300px;
  padding: 15px 15px 0 15px;
  color: #424242;
  box-shadow: 2px 2px 10px 0 rgba(0,0,0, .5);
`;

const ModalContent = styled.div`
  padding: 35px 0;
`;
const ModalButtons = styled.div`
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;
const ModalTitle = styled.div``;

const Modal = ({
  title, content, active, hideModal, redirectModal, type,
}) => ReactDOM.createPortal(
  <ModalContainer active={active}>
    <ModalBox>
      {title ? <ModalTitle>{ title }</ModalTitle> : null}
      <ModalContent>
        { content }
      </ModalContent>
      <ModalButtons>
        <Button styles="modal-button--text" onClick={hideModal}>Close</Button>
        { redirectModal && type === 'SUCCESS' ?
          <Button styles="modal-button" onClick={redirectModal}>Redirect</Button> :
          null }
      </ModalButtons>
    </ModalBox>
  </ModalContainer>,
  document.getElementById('root')
);

Modal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
  active: PropTypes.bool,
  hideModal: PropTypes.func,
  redirectModal: PropTypes.func,
  type: PropTypes.string,
};

export default Modal;
