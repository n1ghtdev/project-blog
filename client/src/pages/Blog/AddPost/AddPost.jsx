import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../../components/Form';
import Input from '../../../components/Form/Input';
import Textarea from '../../../components/Form/Textarea';
class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };

    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      </Form>
    );
  }
}

AddPost.propTypes = {

};

export default AddPost;
