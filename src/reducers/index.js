import pagesReducers from '../pages/reducers';

import registryReducer from './registry';

export default {
  registry: registryReducer,
  entities: pagesReducers,
};
