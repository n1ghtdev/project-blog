import * as types from '../../constants/categoryConstants';

const initialState = {
  list: [],
  loading: false,
  fetched: false,
  error: false,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CAT_DATA:
      return { ...state, loading: true };
    case types.FETCH_CAT_SUCCESS:
      return {
        ...state, list: action.payload, loading: false, fetched: true,
      };
    case types.FETCH_CAT_FAILURE:
      return {
        ...state, loading: false, error: true,
      };
    default:
      return state;
  }
};

