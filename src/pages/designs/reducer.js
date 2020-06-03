import { DESIGNS_PAGE_DATA_RECEIVE } from './actions';

const defaultState = {
  list: [],
  totalCount: '0',
};

function dataReceive(action, state) {
  const { data } = action.payload;

  return {
    ...state,
    list: data,
  };
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case DESIGNS_PAGE_DATA_RECEIVE:
      return dataReceive(action, state);
    default:
      return state;
  }
};
