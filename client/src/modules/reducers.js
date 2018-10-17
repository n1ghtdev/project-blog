import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { blogReducer } from './blog/blogReducer';
import { createPostReducer } from './blog/createPostReducer';

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
});

export default reducers;
