import React from 'react';
import { Select } from 'antd';
import './Sorting.scss';

const { Option } = Select;

const Sorting = () => {
  return (
    <div className="sorting">
      <div className="sorting__title">Sort By</div>
      <Select defaultValue="Release date"
              dropdownClassName="sorting__select-dropdown">
        <Option value="Title (A-Z)">Genre</Option>
        <Option value="Title (Z-A)">Rating</Option>
        <Option value="Views">Release date</Option>
      </Select>
    </div>
  );
};

export default Sorting;