import { takeEvery, put } from 'redux-saga/effects';

import { RBT_INIT, rbtRegistryUpdate } from '../actions';

function* handleInit() {
  yield put(rbtRegistryUpdate('app-loading', false));
}

export default function* appLoadedSaga() {
  yield takeEvery(RBT_INIT, handleInit);
}
