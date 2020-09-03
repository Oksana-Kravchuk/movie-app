import React from 'react';
import './Filtering.scss';

const Filtering = () => {
  return (
      <ul className="filter">
        <li key="all" className="filter__item">
          All
        </li>
        <li key="documentary" className="filter__item">
          Documentary
        </li>
        <li key="comedy" className="filter__item">
          Comedy
        </li>
        <li key="horror" className="filter__item">
          Horror
        </li>
        <li key="crime" className="filter__item">
          Crime
        </li>
      </ul>
  );
};

export default Filtering;