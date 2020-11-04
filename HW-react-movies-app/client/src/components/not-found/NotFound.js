import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <Logo />
        <div className="not-found__content">
          <h2 className="not-found__text">Page No Found</h2>
          <div className="not-found__image" />
          <Link to="/">
            <button className="button button--secondary">
              Go back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
