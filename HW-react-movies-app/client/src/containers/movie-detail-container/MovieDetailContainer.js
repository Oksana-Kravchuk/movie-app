import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovie } from '../../actions';
import MovieDetail from '../../components/movie-detail';

// PATTERN Container component

const MovieDetailContainer = ({ id }) => {
  const dispatch = useDispatch();
  const { movieDetail } = useSelector(
    (state) => ({
      movieDetail: state.movie.movieDetail,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [id]);

  return <MovieDetail movie={movieDetail} />;
};

MovieDetailContainer.propTypes = {
  id: PropTypes.string,
};

export default MovieDetailContainer;
