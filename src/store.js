import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

export default (reducers = {}, persistedState = {}) => {
  let middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, createLogger()];
  }

  const composedMiddleware = compose(applyMiddleware(...middlewares));

  const store = createStore(combineReducers({ ...reducers }), persistedState, composedMiddleware);

  store.injectedReducers = reducers;

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(combineReducers({ ...store.injectedReducers }));
    });
  }

  return store;
};
