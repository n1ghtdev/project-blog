import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import { hideModal } from '../../modules/modal/modalAction';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.hideModal();
  }

  render() {
    const { isOpen } = this.props.modal;

    return (
      <React.Fragment>
        <Modal
          title={this.props.title}
          content={this.props.content}
          hideModal={this.onClose}
          active={isOpen}
        />
      </React.Fragment>
    );
  }
}

ModalContainer.propTypes = {
  hideModal: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  modal: PropTypes.object,
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
