import React from 'react';

import MovieListContainer from '../../containers/movie-list-container';
import Filtering from '../../components/filtering';
import Sorting from '../../components/sorting';

const Content = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="movies-manager-bar">
          <Filtering />
          <Sorting />
        </div>
        <MovieListContainer />
      </div>
    </section>
  );
};

export default Content;
