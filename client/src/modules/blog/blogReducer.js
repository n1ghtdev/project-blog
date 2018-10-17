import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from '../../constants/blogConstants';

const initialState = {
  posts: [],
  loading: false,
  fetched: false,
  error: false,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {
        ...state, posts: action.payload, loading: false, fetched: true,
      };
    case FETCH_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
