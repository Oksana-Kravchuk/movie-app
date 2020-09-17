import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieDetail from '../../components/movie-detail';

const MovieDetailContainer = ({ id }) => {
  const [movieDetail, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, [id]);

  return <MovieDetail movie={movieDetail} />;
};

MovieDetailContainer.propTypes = {
  id: PropTypes.string,
};

export default MovieDetailContainer;
