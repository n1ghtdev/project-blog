import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchBlogPosts } from '../../utils/fetchBlogPosts';
import { fetchRequest, fetchSuccess, fetchFailure } from './blogAction';

export function* watchFetchPosts() {
  yield takeEvery('FETCH_POSTS', fetchPostsAsync);
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
