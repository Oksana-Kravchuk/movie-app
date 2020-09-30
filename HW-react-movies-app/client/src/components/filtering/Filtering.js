import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { filterMovies } from '../../actions';
import './Filtering.scss';

const Filtering = () => {
  const dispatch = useDispatch();
  const { apliedFilter } = useSelector(
    (state) => ({
      apliedFilter: state.movieList.apliedFilter,
    }),
    shallowEqual,
  );
  const filterItems = ['All', 'Comedy', 'Action', 'Drama', 'Fantasy'];

  return (
    <ul className="filter">
      {filterItems.map((item) => {
        const classModifier =
          item === (apliedFilter || 'All') ? 'filter__item--active' : '';
        return (
          <li
            key={item}
            className={`filter__item ${classModifier}`}
            onClick={() => dispatch(filterMovies(item))}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Filtering;
