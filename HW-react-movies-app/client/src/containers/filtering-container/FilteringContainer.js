import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { filterMovies, setAppliedFilter } from '../../actions';
import Filtering from '../../components/filtering';

const FilteringContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { appliedFilter, query } = useSelector(
    (state) => ({
      appliedFilter: state.movieList.appliedFilter,
      query: state.movieList.query,
    }),

    shallowEqual,
  );

  const filterItems = ['All', 'Comedy', 'Action', 'Drama', 'Fantasy'];

  const setParams = (value) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('filter', value);

    return urlParams.toString();
  };

  const applyFilter = (value) => {
    if (!query) return;

    const url = value === 'All' ? '' : setParams(value);
    history.push(`?${url}`);
    dispatch(setAppliedFilter(value));
    dispatch(filterMovies(url, query));
  };

  return (
    <Filtering
      items={filterItems}
      applyFilter={applyFilter}
      appliedFilter={appliedFilter}
    />
  );
};

export default FilteringContainer;
