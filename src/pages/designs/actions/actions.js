import {
  DESIGNS_PAGE_OPEN,
  DESIGNS_PAGE_DATA_RECEIVE,
  DESIGNS_PAGE_GET_BATCH_DATA,
  DESIGNS_PAGE_BATCH_DATA_RECEIVE,
  DESIGNS_PAGE_RESET_DATA,
} from './consts';

export const designsPageOpen = () => ({
  type: DESIGNS_PAGE_OPEN,
  payload: {},
});

export const designsPageDataReceive = data => ({
  type: DESIGNS_PAGE_DATA_RECEIVE,
  payload: { data },
});

export const designsPageGetBatchData = filter => ({
  type: DESIGNS_PAGE_GET_BATCH_DATA,
  payload: filter,
});

export const designsPageBatchDataReceive = (batchData, filters, totalCount) => ({
  type: DESIGNS_PAGE_BATCH_DATA_RECEIVE,
  payload: { batchData, filters, totalCount },
});

export const designsPageResetData = () => ({
  type: DESIGNS_PAGE_RESET_DATA,
});
