import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <span>netflix</span>roulette
      </Link>
    </div>
  );
};

export default Logo;
