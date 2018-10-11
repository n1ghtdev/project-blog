import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { blogReducer } from './blog/blogReducer';

const reducers = combineReducers({
  routing: routerReducer,
  blog: blogReducer,
});

export default reducers;
