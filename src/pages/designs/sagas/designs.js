/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';
import axios from 'axios';

import { rbtRegistryUpdate } from '../../../actions';

import { designsPageDataReceive } from '../actions';

export function* handleDesigns() {
  try {
    yield put(rbtRegistryUpdate('designs-list-loading', true));
    const response = yield axios.get(`/api/designs?_page=0&_limit=20&_sort=updated&_order=desc`);

    yield put(designsPageDataReceive(response.data));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(rbtRegistryUpdate('designs-list-loading', false));
  }
}
