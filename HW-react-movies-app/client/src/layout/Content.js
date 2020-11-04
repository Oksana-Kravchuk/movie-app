import React from 'react';

import MovieListContainer from '../containers/movie-list-container';
import FilteringContainer from '../containers/filtering-container';
import SortingContainer from '../containers/sorting-container';

const Content = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="movies-manager-bar">
          <FilteringContainer />
          <SortingContainer />
        </div>
        <MovieListContainer />
      </div>
    </section>
  );
};

export default Content;
