import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Post extends React.PureComponent {
  render() {
    const { post } = this.props;
    return (
      <div>
        <h2>{ post.title }</h2>
        <p>{ post.description }</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.blog.posts.find((post) => post.id === Number(ownProps.match.params.id)),
});

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Post);
