import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../../components/error-indicator';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
