import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';

import createStore from './store';
import rootReducer from './reducers';

import './less/index.less';

const store = createStore(rootReducer, {
  registry: {
    'app-loading': true,
  },
});

/* eslint-disable react/jsx-filename-extension */
const render = () => {
  ReactDOM.render(
    <Provider store={store} context={ReactReduxContext}>
      <div>Hello React with Redux</div>
    </Provider>,
    document.getElementById('root'),
  );
};
render();

if (module.hot) {
  // Reload components
  module.hot.accept(() => {
    render();
  });
}
