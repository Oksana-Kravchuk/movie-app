import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './components/app';
import ErrorBoundary from './containers/error-boundary';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
