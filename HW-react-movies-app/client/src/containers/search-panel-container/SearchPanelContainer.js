import React, { useEffect } from 'react';
import { useHistory, matchPath } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { updateInputValue, doSearch } from '../../actions';
import SearchBar from '../../components/search-panel';

const SearchPanelContainer = () => {
  const { query } = useSelector(
    (state) => ({ query: state.movieList.query }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUrl = window.location.pathname;

  const isSearchPath = (path) => {
    return matchPath(path, {
      path: '/search/Search:search?',
    });
  };

  useEffect(() => {
    if (!query && !isSearchPath(currentUrl)) return;
    const {
      params: { search },
    } = isSearchPath(currentUrl);
    const decodedSearchParam = decodeURI(search).trim();
    dispatch(updateInputValue(search.trim()));
    dispatch(doSearch(decodedSearchParam));
  }, []);

  const changeUrl = (params) => {
    history.replace(params);
  };

  const handleSearch = () => {
    dispatch(doSearch(query));
    isSearchPath(currentUrl)
      ? changeUrl(`Search ${query}`)
      : changeUrl(`/search/Search ${query}`);
  };

  const handleInput = (value) => {
    dispatch(updateInputValue(value));
  };

  return <SearchBar handleSearch={handleSearch} handleInput={handleInput} />;
};

export default SearchPanelContainer;
