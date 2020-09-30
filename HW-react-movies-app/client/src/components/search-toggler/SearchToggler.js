import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import './SearchToggler.scss';

const SearchToggler = () => {
  const [inputVisibility, setinputVisibility] = useState(false);
  return (
    <div className="search-toggler">
      <span
        onClick={() => setinputVisibility(!inputVisibility)}
        className="search-toggler__icon"
      >
        <SearchOutlined />
      </span>
      <input
        placeholder="search..."
        className={`search-toggler__input ${
          inputVisibility ? 'search-toggler__input--active' : ''
        }`}
      />
    </div>
  );
};

export default SearchToggler;
