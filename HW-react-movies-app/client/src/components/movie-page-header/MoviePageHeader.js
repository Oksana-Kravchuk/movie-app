import React from 'react';
import { useParams } from 'react-router-dom';

import SearchToggler from '../search-toggler';
import MovieDetailContainer from '../../containers/movie-detail-container';
import Logo from '../logo';

const MoviePageHeader = () => {
  const { id } = useParams();
  return (
    <section className="top-section">
      <div className="container">
        <div className="top-section__row">
          <Logo />
          <SearchToggler />
        </div>
        <MovieDetailContainer id={id} />
      </div>
    </section>
  );
};

export default MoviePageHeader;
