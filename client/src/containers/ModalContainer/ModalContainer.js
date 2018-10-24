import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import { hideModal } from '../../modules/modal/modalAction';

class ModalContainer extends React.PureComponent {
  render() {
    const { modal } = this.props;
    return (
      <Modal title={modal.title} content={modal.content} active={modal.active} hideModal={this.props.hideModal} />
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = {
  hideModal,
};

ModalContainer.propTypes = {
  modal: PropTypes.object,
  hideModal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
