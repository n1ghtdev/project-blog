import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPostRequest } from '../../../modules/blog/blogAction';
import Form from '../../../components/Form';
import Input from '../../../components/Form/Input';
import Textarea from '../../../components/Form/Textarea';
import Button from '../../../components/Form/Button';
import { showModal } from '../../../modules/modal/modalAction';
import ModalContainer from '../../../containers/ModalContainer';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      description: '',
    };

    this.onChange = this.onChange.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  addPost(e) {
    e.preventDefault();

    // temp, replaces validation function for now
    if (this.state.title === '' || this.state.description === '') {
      this.props.showModal({ title: 'Syntax Error', type: 'FAILURE', content: 'Fields must be filled!' });
      return;
    }

    this.props.showModal({ type: 'SUCCESS', content: `"${this.state.title}" - successfully created` });
    this.props.createPostRequest(this.state);
  }
  render() {
    const { post } = this.props.post;
    return (
      <Form method="POST">
        <ModalContainer redirectPath={`blog/${post.id}`} />
        <Input
          title="Title:"
          name="title"
          value={this.state.title}
          type="input"
          placeholder="Title..."
          onChange={this.onChange}
        />
        <Textarea
          title="Description:"
          name="description"
          value={this.state.description}
          type="input"
          placeholder="Description..."
          onChange={this.onChange}
        />
        <Button styles="form-button" onClick={this.addPost}>Add post</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post,
});

const mapDispatchToProps = {
  createPostRequest,
  showModal,
};

AddPost.propTypes = {
  createPostRequest: PropTypes.func,
  showModal: PropTypes.func,
  post: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
