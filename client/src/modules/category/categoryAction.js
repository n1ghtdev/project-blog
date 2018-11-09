import * as types from '../../constants/categoryConstants';

export const fetchSuccess = (payload) => ({
  type: types.FETCH_CAT_SUCCESS,
  payload,
});

export const fetchFailure = () => ({
  type: types.FETCH_CAT_FAILURE,
});

export const fetchData = () => ({
  type: types.FETCH_CAT_DATA,
});
