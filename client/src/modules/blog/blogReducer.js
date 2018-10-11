export const blogReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return state;
    case 'FETCH_SUCCESS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
// TODO: make state as array instead of object
// TODO: filter single post instead of making more requests to server
