import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';

import './SearchPanel.scss';

// PATTERN: Stateless Component

const SearchPanel = ({ handleSearch, handleInput }) => {
  return (
    <div className="search-panel">
      <h2 className="search-panel__header">Find your movie</h2>
      <div className="search-panel__row">
        <Input
          placeholder="What do you want to watch?"
          size="large"
          onChange={(e) => handleInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button
          type="primary"
          size="large"
          className="search-panel__button"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

SearchPanel.propTypes = {
  handleSearch: PropTypes.func,
  handleInput: PropTypes.func,
};

export default SearchPanel;
