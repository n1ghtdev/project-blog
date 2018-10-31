import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchBlogPosts } from '../../utils/fetchBlogPosts';
import { postRequest } from '../../utils/postRequest';
import pushHistory from '../../utils/pushHistory';
import { fetchSuccess, fetchFailure, createPostSuccess, createPostFailure } from './blogAction';
import { FETCH_DATA, CREATE_POST_REQUEST, CREATE_POST_REDIRECT } from '../../constants/blogConstants';

export function* watchFetchPosts() {
  yield takeEvery(FETCH_DATA, fetchPostsAsync);
}

export function* watchCreatePost() {
  yield takeEvery(CREATE_POST_REQUEST, createPostAsync);
}

export function* watchPostRedirect() {
  yield takeEvery(CREATE_POST_REDIRECT, postRedirect);
}

function* fetchPostsAsync() {
  try {
    const data = yield call(fetchBlogPosts);
    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchFailure());
  }
}

function* createPostAsync({ payload }) {
  const requestURL = 'http://localhost:8080/api/blog';
  try {
    const response = yield call(postRequest, requestURL, payload);
    const body = yield response.json();
    yield put(createPostSuccess(body));
  } catch (err) {
    console.log(`${err.name} - ${err.message} - ${err.stack}`);
    yield put(createPostFailure());
  }
}

function* postRedirect({ payload }) {
  try {
    yield call(fetchPostsAsync);
    yield call(pushHistory, payload.path);
  } catch (err) {
    console.log(`${err.name} - ${err.message} - ${err.stack}`);
  }
}
