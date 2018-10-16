import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchBlogPosts } from '../../utils/fetchBlogPosts';
import { postRequest } from '../../utils/postRequest';
import { fetchRequest, fetchSuccess, fetchFailure, addPostReceive } from './blogAction';

export function* watchFetchPosts() {
  yield takeEvery('FETCH_POSTS', fetchPostsAsync);
}

export function* watchAddPost() {
  yield takeEvery('ADD_POST_REQUEST', addPostAsync);
}

function* fetchPostsAsync() {
  try {
    yield put(fetchRequest());
    const data = yield call(fetchBlogPosts);
    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchFailure());
  }
}

function* addPostAsync({ payload }) {
  const requestURL = 'http://localhost:8080/api/blog';
  try {
    const post = yield call(postRequest, requestURL, payload);
    yield put(addPostReceive(post));
  } catch (err) {
    if (err.name !== 'SyntaxError') {
      console.log(`${err.name} - ${err.message} - ${err.stack}`);
    }
  }
}
