import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ErrorBoundry from './containers/error-boundry';

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);