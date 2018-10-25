import { all, fork } from 'redux-saga/effects';
import { watchFetchPosts, watchCreatePost, watchPostRedirect } from './blog/blogSaga';

export default function* sagas() {
  yield all([
    fork(watchFetchPosts),
    fork(watchCreatePost),
    fork(watchPostRedirect),
  ]);
}
