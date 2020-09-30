import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Spin } from 'antd';

import ErrorIndicator from '../../components/error-indicator';
import MovieList from '../../components/movie-list';
import {
  fetchMovies,
  toggleDeleteMovieModal,
  toggleEditMovieModal,
} from '../../actions';

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const {
    movies,
    loading,
    error,
    isDeleteMovieModalVisible,
    isEditMovieModalVisible,
  } = useSelector(
    (state) => ({
      movies: state.movieList.visibleMovies,
      loading: state.movieList.loading,
      error: state.movieList.error,
      isDeleteMovieModalVisible: state.movie.isDeleteMovieModalVisible,
      isEditMovieModalVisible: state.movie.isEditMovieModalVisible,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <MovieList
      movies={movies}
      toggleDeleteModalVisibility={() => dispatch(toggleDeleteMovieModal())}
      isDeleteMovieModalVisible={isDeleteMovieModalVisible}
      isEditMovieModalVisible={isEditMovieModalVisible}
      toggleEditModalVisibility={() => dispatch(toggleEditMovieModal())}
    />
  );
};

export default MovieListContainer;
