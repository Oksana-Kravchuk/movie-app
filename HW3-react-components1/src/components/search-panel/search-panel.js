import React from 'react';
import { Input, Button } from 'antd';
import './search-panel.scss';

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <h2 className="search-panel__header">Find your movie</h2>
      <div className="search-panel__row">
        <Input
          placeholder="What do you want to watch?"
          size="large"
          className="search-panel__input" />
        <Button type="primary" size="large"
                className="search-panel__button">Search</Button>
      </div>
    </div>
  );
};

export default SearchPanel;