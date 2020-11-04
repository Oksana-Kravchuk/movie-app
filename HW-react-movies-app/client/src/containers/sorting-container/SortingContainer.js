import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Sorting from '../../components/sorting';
import { sortMovies } from '../../actions';

const SortingContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { query } = useSelector(
    (state) => ({ query: state.movieList.query }),
    shallowEqual,
  );

  const setParams = (sortBy, sortOrder) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('sortBy', sortBy);
    urlParams.set('sortOrder', sortOrder);

    return urlParams.toString();
  };

  const handleChange = (value) => {
    if (!query) return;

    const sortParams = value.split('&');
    const [sortBy, sortOrder] = sortParams;
    const url = setParams(sortBy, sortOrder);

    history.push(`?${url}`);
    dispatch(sortMovies(url, query));
  };

  return <Sorting handleChange={handleChange} />;
};

export default SortingContainer;
