import React from 'react';
import { Select } from 'antd';
import './sorting.scss';

const { Option } = Select;

const Sorting = () => {
  return (
    <div className="sorting">
      <div className="sorting__title">Sort By</div>
      <Select defaultValue="Release date"
              dropdownClassName="sorting__select-dropdown">
        <Option value="Title (A-Z)">Title (A-Z)</Option>
        <Option value="Title (Z-A)">Title (Z-A)</Option>
        <Option value="Views">Views</Option>
      </Select>
    </div>
  );
};

export default Sorting;