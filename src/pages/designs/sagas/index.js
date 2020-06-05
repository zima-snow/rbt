import { takeLatest } from 'redux-saga/effects';

import { DESIGNS_PAGE_OPEN, DESIGNS_PAGE_GET_BATCH_DATA } from '../actions';

import { handleDesigns, handleDesignsByFilter } from './designs';

export function* designsSaga() {
  yield takeLatest([DESIGNS_PAGE_OPEN], handleDesigns);
}

export function* designsFilterSaga() {
  yield takeLatest([DESIGNS_PAGE_GET_BATCH_DATA], handleDesignsByFilter);
}
