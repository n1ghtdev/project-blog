import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchBlogPosts, fetchSingleBlogPost } from '../../utils/fetchBlogPosts';
import { fetchRequest, fetchSuccess, fetchFailure } from './blogAction';

export function* watchFetchPosts() {
  yield takeEvery('FETCH_POSTS', fetchPostsAsync);
}

export function* watchFetchPost() {
  yield takeEvery('FETCH_POST', fetchPostAsync);
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

function* fetchPostAsync({ id }) {
  try {
    yield put(fetchRequest());
    const data = yield call(() => fetchSingleBlogPost(id));
    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchFailure());
  }
}
