import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
import PropTypes from 'prop-types';

const MultiSelect = ({ defaultValue, placeholder }) => {
  const values = ['Crime', 'Documentary', 'Horror', 'Comedy'];

  return (
    <>
      <Select mode="multiple"
              dropdownClassName="multiple-select-dropdown"
              defaultValue={defaultValue}
              placeholder={placeholder}
              showArrow >
                { values.map((item, index) => 
                  <Option key={index}>{item}</Option>)}
      </Select>
    </>
  );
};

MultiSelect.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string
};

export default MultiSelect;