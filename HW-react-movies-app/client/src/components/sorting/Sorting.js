import React from 'react';
import PropTypes from 'prop-types';

import './Sorting.scss';

const Sorting = ({ handleChange }) => {
  return (
    <div className="sorting">
      <div className="sorting__title">Sort By</div>
      <select
        onChange={(ev) => handleChange(ev.target.value)}
        className="sorting__select"
      >
        <option value="Default">Default</option>
        <option value="vote_average&desc">Rating desc</option>
        <option value="vote_average&asc">Rating asc</option>
        <option value="release_date&desc">Release date desc</option>
        <option value="release_date&asc">Release date asc</option>
      </select>
    </div>
  );
};

Sorting.propTypes = {
  handleChange: PropTypes.func,
};

export default Sorting;
