import React from 'react';
import { useDispatch } from 'react-redux';

import { sortMovies } from '../../actions';
import './Sorting.scss';

const Sorting = () => {
  const dispatch = useDispatch();

  return (
    <div className="sorting">
      <div className="sorting__title">Sort By</div>
      <select
        onChange={(ev) => dispatch(sortMovies(ev.target.value))}
        className="sorting__select"
      >
        <option value="Default">Default</option>
        <option value="Rating">Rating &darr;</option>
        <option value="Release date">Release date &darr;</option>
      </select>
    </div>
  );
};

export default Sorting;
