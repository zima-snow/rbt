import { DESIGNS_PAGE_OPEN, DESIGNS_PAGE_DATA_RECEIVE } from './consts';

export const designsPageOpen = () => ({
  type: DESIGNS_PAGE_OPEN,
  payload: {},
});

export const designsPageDataReceive = data => ({
  type: DESIGNS_PAGE_DATA_RECEIVE,
  payload: { data },
});
