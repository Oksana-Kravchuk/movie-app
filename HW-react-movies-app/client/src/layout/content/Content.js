import React from 'react';
import MovieListContainer from '../../containers/movie-list-container';
import MoviesManagerBar from '../../containers/movies-manager-bar/movies-manager-bar';

const Content = () => {
  return (
    <section className="main">
      <div className="container">
        <MoviesManagerBar />
        <MovieListContainer />
      </div>
    </section>
  );
};

export default Content;
