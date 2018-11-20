import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPostRequest } from '../../../modules/blog/blogAction';
import Form from '../../../components/Form';
import Input from '../../../components/Form/Input';
import Textarea from '../../../components/Form/Textarea';
import Button from '../../../components/Form/Button';
import Select from '../../../components/Form/Select';
import { showModal } from '../../../modules/modal/modalAction';
import ModalContainer from '../../../containers/ModalContainer';
import generateURI from '../../../utils/generateURI';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: { id: 0 },
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
    if (this.state.title === '' || this.state.description === '' || this.state.category === '') {
      this.props.showModal({ title: 'Syntax Error', type: 'FAILURE', content: 'Fields must be filled!' });
      return;
    }

    this.props.showModal({ type: 'SUCCESS', content: `"${this.state.title}" - successfully created` });
    this.props.createPostRequest(
      this.state.title,
      typeof this.state.category === 'string' ? JSON.parse(this.state.category) : this.state.category,
      this.state.description
    );
  }
  render() {
    const { post } = this.props.post;
    const { cats } = this.props;
    return (
      <Form method="POST">
        <ModalContainer redirectPath={`post/${post.id}/${generateURI(post.title)}`} />
        <Input
          title="Title:"
          name="title"
          value={this.state.title}
          type="input"
          placeholder="Title..."
          onChange={this.onChange}
        />
        <Select
          title="Category: "
          options={cats.list}
          name="category"
          value={this.state.category}
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
  cats: state.cats,
});

const mapDispatchToProps = {
  createPostRequest,
  showModal,
};

AddPost.propTypes = {
  createPostRequest: PropTypes.func,
  showModal: PropTypes.func,
  post: PropTypes.object,
  cats: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
