import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../modules/blog/blogAction';

class Blog extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { blog } = this.props;

    const blogPosts = blog.posts.map((post) =>
      <li key={post.id}><Link to={`/blog/${post.id}`}>{post.title}</Link></li>);
    return (
      <div>
        <h1>Blog Notes</h1>
        <ul>
          { blogPosts }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blog: state.blog,
});

Blog.propTypes = {
  dispatch: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Blog);
