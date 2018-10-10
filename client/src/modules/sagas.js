import { all, fork } from 'redux-saga/effects';
import { watchFetchPosts } from './blogSaga';

export default function* sagas() {
  yield all([
    fork(watchFetchPosts),
  ]);
}
