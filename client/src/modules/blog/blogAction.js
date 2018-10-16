export const fetchRequest = () => ({
  type: 'FETCH_REQUEST',
});

export const fetchSuccess = (payload) => ({
  type: 'FETCH_SUCCESS',
  payload,
});

export const fetchFailure = () => ({
  type: 'FETCH_FAILURE',
});

export const fetchPosts = () => ({
  type: 'FETCH_POSTS',
});

export const addPostRequest = (payload) => ({
  type: 'ADD_POST_REQUEST',
  payload,
});

export const addPostReceive = (payload) => ({
  type: 'ADD_POST_RECEIVE',
  payload,
});

