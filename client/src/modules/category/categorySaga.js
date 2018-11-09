import { call, put, takeEvery } from 'redux-saga/effects';
import fetchResponseJSON from '../../utils/fetchResponseJSON';
import { fetchSuccess, fetchFailure } from './categoryAction';
import * as types from '../../constants/categoryConstants';

export function* watchFetchCats() {
  yield takeEvery(types.FETCH_CAT_DATA, fetchCatsAsync);
}

function* fetchCatsAsync() {
  try {
    const data = yield call(fetchResponseJSON, '/api/blog/categories');
    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchFailure());
  }
}
