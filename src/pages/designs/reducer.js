import {
  DESIGNS_PAGE_DATA_RECEIVE,
  DESIGNS_PAGE_BATCH_DATA_RECEIVE,
  DESIGNS_PAGE_RESET_DATA,
} from './actions';

const defaultState = {
  list: [],
  totalCount: '0',
  filters: {
    title: '',
    assemble: 'any',
    review: 'any',
    updated: 'desc',
    page: 1,
    limit: 20,
  },
};

function dataReceive(action, state) {
  const { data } = action.payload;

  return {
    ...state,
    list: data,
  };
}

function batchDataReceive(action, state) {
  const { batchData, filters, totalCount } = action.payload;

  return {
    ...state,
    list: [...state.list, ...batchData],
    filters: {
      ...state.filters,
      ...filters,
    },
    totalCount,
  };
}

function resetData(action, state) {
  return {
    ...state,
    list: [],
    filter: {
      ...state.filters,
      page: 1,
    },
  };
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case DESIGNS_PAGE_DATA_RECEIVE:
      return dataReceive(action, state);
    case DESIGNS_PAGE_BATCH_DATA_RECEIVE:
      return batchDataReceive(action, state);
    case DESIGNS_PAGE_RESET_DATA:
      return resetData(action, state);
    default:
      return state;
  }
};
