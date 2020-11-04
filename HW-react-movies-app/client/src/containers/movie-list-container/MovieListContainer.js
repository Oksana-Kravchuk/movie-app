import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import ErrorIndicator from '../../components/error-indicator';
import MovieList from '../../components/movie-list';
import { toggleDeleteMovieModal, toggleEditMovieModal } from '../../actions';
import EmptySearchResult from '../../components/empy-search-result';

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const {
    movies,
    error,
    isDeleteMovieModalVisible,
    isEditMovieModalVisible,
  } = useSelector(
    (state) => ({
      movies: state.movieList.movies,
      error: state.movieList.error,
      isDeleteMovieModalVisible: state.movie.isDeleteMovieModalVisible,
      isEditMovieModalVisible: state.movie.isEditMovieModalVisible,
    }),
    shallowEqual,
  );

  if (!movies.length) {
    return <EmptySearchResult />;
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
