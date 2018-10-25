import * as types from '../../constants/blogConstants';

export const fetchSuccess = (payload) => ({
  type: types.FETCH_SUCCESS,
  payload,
});

export const fetchFailure = () => ({
  type: types.FETCH_FAILURE,
});

export const fetchData = () => ({
  type: types.FETCH_DATA,
});

export const createPostRequest = (payload) => ({
  type: types.CREATE_POST_REQUEST,
  payload,
});

export const createPostSuccess = (payload) => ({
  type: types.CREATE_POST_SUCCESS,
  payload,
});

export const createPostFailure = () => ({
  type: types.CREATE_POST_FAILURE,
});

export const createPostRedirect = (payload) => ({
  type: types.CREATE_POST_REDIRECT,
  payload,
});
