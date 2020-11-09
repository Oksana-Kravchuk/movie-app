import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../components/logo';

const Header = ({ children }) => {
  const [topChild, mainChild] = children;

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <Logo />
          {topChild}
        </div>
        {mainChild}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.element,
};

export default Header;
