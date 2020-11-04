import React from 'react';
import PropTypes from 'prop-types';

import './Filtering.scss';

const Filtering = ({ items, applyFilter, appliedFilter }) => {
  return (
    <ul className="filter">
      {items.map((item) => {
        const classModifier =
          item === (appliedFilter || 'All') ? 'filter__item--active' : '';
        return (
          <li
            key={item}
            className={`filter__item ${classModifier}`}
            onClick={() => applyFilter(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

Filtering.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  applyFilter: PropTypes.func,
  appliedFilter: PropTypes.string,
};

export default Filtering;
