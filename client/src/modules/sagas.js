import { all, fork } from 'redux-saga/effects';
import { watchFetchPosts, watchCreatePost, watchPostRedirect } from './blog/blogSaga';
import { watchFetchCats } from './category/categorySaga';

export default function* sagas() {
  yield all([
    fork(watchFetchPosts),
    fork(watchFetchCats),
    fork(watchCreatePost),
    fork(watchPostRedirect),
  ]);
}
