const initialState = {
  posts: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return state;
    case 'FETCH_SUCCESS':
      return { ...state, posts: action.payload };
    case 'ADD_POST_REQUEST':
      return { posts: [...state.posts, { id: action.payload.id, title: action.payload.title, description: action.payload.description }] };
    default:
      return state;
  }
};
