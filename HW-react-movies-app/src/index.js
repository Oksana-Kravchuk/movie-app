import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ErrorBoundary from './containers/error-boundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);