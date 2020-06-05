/* eslint-disable import/prefer-default-export */
import { put, select } from 'redux-saga/effects';
import axios from 'axios';

import { rbtRegistryUpdate } from '../../../actions';

import {
  designsPageDataReceive,
  designsPageResetData,
  designsPageBatchDataReceive,
} from '../actions';
import { entitiesSelector } from '../../../selectors';

export function* handleDesigns() {
  try {
    yield put(rbtRegistryUpdate('designs-list-loading', true));

    const { page, limit, updated } = yield select(state =>
      entitiesSelector('designs')(state, 'filters'),
    );

    const response = yield axios.get(
      `/api/designs?_page=${page}&_limit=${limit}&_sort=updated&_order=${updated}`,
    );

    yield put(designsPageDataReceive(response.data));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(rbtRegistryUpdate('designs-list-loading', false));
  }
}

export function* handleDesignsByFilter(action) {
  try {
    yield put(rbtRegistryUpdate('designs-list-loading', true));

    const {
      payload: { assemble, review, updated, page, limit, title },
    } = action;

    const filters = yield select(state => entitiesSelector('designs')(state, 'filters'));

    if (!page) {
      yield put(designsPageResetData());
    }

    const filter = {
      title: title !== undefined ? title : filters.title,
      assemble: assemble !== undefined ? assemble.key : filters.assemble,
      review: review !== undefined ? review.key : filters.review,
      updated: updated && updated !== filters.updated ? updated : filters.updated,
      page: page && page !== filters.page ? page : 1,
      limit: limit && limit !== filters.limit ? limit : filters.limit,
    };

    let params = `_page=${filter.page}&_limit=${filter.limit}
      &_sort=updated&_order=${filter.updated}&`;

    if (filter.title.length !== 0) params = `${params}q=${filter.title}&`;
    if (filter.assemble !== 'any') params = `${params}assemblyStatus=${filter.assemble}&`;
    if (filter.review !== 'any') params = `${params}reviewStatus=${filter.review}&`;

    const response = yield axios.get(`/api/designs?${params}`);

    yield put(
      designsPageBatchDataReceive(response.data, filter, response.headers['x-total-count']),
    );
  } catch (error) {
    console.error(error);
  } finally {
    yield put(rbtRegistryUpdate('designs-list-loading', false));
  }
}
