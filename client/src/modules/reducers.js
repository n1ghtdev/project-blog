import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { blogReducer } from './blog/blogReducer';
import { createPostReducer } from './blog/createPostReducer';
import { modalReducer } from './modal/modalReducer';
import { categoryReducer } from './category/categoryReducer';

/* make reducers export by default */

const routeInitialState = { location: null };

const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

const reducers = combineReducers({
  routing: routeReducer,
  blog: blogReducer,
  post: createPostReducer,
  modal: modalReducer,
  cats: categoryReducer,
});

export default reducers;
