import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import { showModal, hideModal } from '../../modules/modal/modalAction';

class ModalHandler extends React.PureComponent {
  render() {
    const { modal } = this.props;
    return (
      <Modal title={modal.title} content={modal.content} active={modal.active} />
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = {
  showModal,
  hideModal,
};

ModalHandler.propTypes = {
  modal: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalHandler);
