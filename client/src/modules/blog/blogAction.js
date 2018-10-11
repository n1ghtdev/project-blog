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

export const fetchPost = (id) => ({
  type: 'FETCH_POST',
  id,
});
