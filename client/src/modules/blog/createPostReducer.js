import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE } from '../../constants/blogConstants';

const initialState = {
  post: { title: '', cat_id: null, description: '' },
  creating: false,
  created: false,
  error: false,
};

export const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { ...state, creating: true };
    case CREATE_POST_SUCCESS:
      return {
        post: {
          title: action.payload.title,
          cat_id: action.payload.cat_id,
          description: action.payload.description,
        },
        creating: false,
        created: true,
      };
    case CREATE_POST_FAILURE:
      return { ...state, creating: false, error: true };
    default:
      return state;
  }
};
