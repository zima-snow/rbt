import { takeLatest } from 'redux-saga/effects';

import { DESIGNS_PAGE_OPEN } from '../actions';

import { handleDesigns } from './designs';

// eslint-disable-next-line import/prefer-default-export
export function* designsSaga() {
  yield takeLatest([DESIGNS_PAGE_OPEN], handleDesigns);
}
