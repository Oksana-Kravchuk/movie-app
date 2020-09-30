import React from 'react';
import PropTypes from 'prop-types';

import SearchToggler from '../components/search-toggler';
import MovieDetailContainer from '../containers/movie-detail-container';
import Logo from '../components/logo';

const MoviePage = ({ match }) => {
  const {
    params: { id },
  } = match;
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

MoviePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MoviePage;
