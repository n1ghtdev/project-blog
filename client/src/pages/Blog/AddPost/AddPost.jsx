import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPostRequest } from '../../../modules/blog/blogAction';
import Form from '../../../components/Form';
import Input from '../../../components/Form/Input';
import Textarea from '../../../components/Form/Textarea';
import Button from '../../../components/Form/Button';


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
      alert('Fields must be filled!');
      return;
    }

    this.props.createPostRequest(this.state);
  }
  render() {
    return (
      <Form method="POST">
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
        <Button onClick={this.addPost}>Add post</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  createPostRequest,
};

AddPost.propTypes = {
  createPostRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(AddPost);
