import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const MultiSelect = ({ defaultValue, placeholder }) => {
  const values = ['Crime', 'Documentary', 'Horror', 'Comedy'];

  return (
    <>
      <Select
        mode="multiple"
        dropdownClassName="multiple-select-dropdown"
        defaultValue={defaultValue}
        placeholder={placeholder}
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
};

export default MultiSelect;
