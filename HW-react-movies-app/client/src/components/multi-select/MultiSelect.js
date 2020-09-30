import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const MultiSelect = ({ onBlur, placeholder, defaultValue, onChange }) => {
  const values = ['Crime', 'Documentary', 'Horror', 'Comedy', ...defaultValue];

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
