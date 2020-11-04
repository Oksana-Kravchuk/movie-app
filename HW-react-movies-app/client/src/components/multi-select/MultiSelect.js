import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const MultiSelect = ({ onBlur, placeholder, defaultValue, onChange }) => {
  const values = [
    'Crime',
    'Adventure',
    'Horror',
    'Comedy',
    'Drama, Romance',
    'Fantasy',
    'Romance',
    'Drama',
  ];

  return (
    <>
      <Select
        mode="multiple"
        dropdownClassName="multiple-select-dropdown"
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        showArrow
      >
        {values.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    </>
  );
};

MultiSelect.propTypes = {
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default MultiSelect;
