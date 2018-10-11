import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPost } from '../../../modules/blog/blogAction';

class Post extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.match.params.id));
  }
  render() {
    const { blog } = this.props;
    const { posts } = blog;
    return (
      <div>
        <h2>{ posts.title }</h2>
        <p>{ posts.description }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blog: state.blog,
});

Post.propTypes = {};

export default connect(mapStateToProps)(Post);
