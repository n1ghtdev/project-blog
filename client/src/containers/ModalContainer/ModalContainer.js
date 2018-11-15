import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import { hideModal } from '../../modules/modal/modalAction';
import { createPostRedirect } from '../../modules/blog/blogAction';
class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.createPostRedirect = this.createPostRedirect.bind(this);
  }

  onClose() {
    this.props.hideModal();
  }

  createPostRedirect() {
    this.props.hideModal();
    this.props.createPostRedirect({ path: this.props.redirectPath });
  }

  render() {
    const {
      title, content, isOpen, type,
    } = this.props.modal;

    return (
      <React.Fragment>
        <Modal
          title={title}
          content={content}
          hideModal={this.onClose}
          redirectModal={this.createPostRedirect}
          type={type}
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
  redirectPath: PropTypes.string,
  createPostRedirect: PropTypes.func,
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = {
  hideModal,
  createPostRedirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
