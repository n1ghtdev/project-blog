import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavCat from '../../components/NavCat';
import Item from '../../components/NavCat/Item';
import { fetchData } from '../../modules/category/categoryAction';

class NavCatContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {
    const { list } = this.props.cats;
    const catList = list.map((cat) =>
      (<Item key={cat.id} href={`/blog/${cat.id}`}>{cat.name}</Item>));
    return (
      <NavCat>
        { catList }
      </NavCat>
    );
  }
}

const mapStateToProps = (state) => ({
  cats: state.cats,
});

NavCatContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cats: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(NavCatContainer);
