import { all, fork } from 'redux-saga/effects';
import { watchFetchPosts, watchFetchPost } from './blog/blogSaga';

export default function* sagas() {
  yield all([
    fork(watchFetchPosts),
    fork(watchFetchPost),
  ]);
}
