import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../../modules/blog/blogAction';
import BlogPosts from '../../components/BlogPosts';
import Post from '../../components/BlogPosts/Post';

class Blog extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    const { posts } = this.props.blog;
    const blogPosts = posts.map((post) =>
      (<Post
        key={post.id}
        to={`/blog/${post.cat_id}/${post.id}`}
        title={post.title}
        description={post.description}
      />));
    return (
      <BlogPosts>
        { blogPosts }
      </BlogPosts>
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
