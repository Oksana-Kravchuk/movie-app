import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';
import Footer from './Footer';

// PATTERN Layout component

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Content />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
