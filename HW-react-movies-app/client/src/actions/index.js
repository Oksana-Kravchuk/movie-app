import MovieService from '../services/MoviesService';

const moviesLoaded = (newMovies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: newMovies,
  };
};

const moviesError = (error) => {
  return {
    type: 'FETCH_MOVIES_FAILURE',
    payload: error,
  };
};

const toggleMoviePopover = (id) => {
  return {
    type: 'TOGGLE_MOVIE_POPOVER',
    payload: id,
  };
};

const toggleDeleteMovieModal = (movie) => {
  return {
    type: 'TOGGLE_DELETE_MOVIE_MODAL',
    payload: movie,
  };
};

const toggleEditMovieModal = (movie) => {
  return {
    type: 'TOGGLE_EDIT_MOVIE_MODAL',
    payload: movie,
  };
};

const toggleAddMovieModal = () => {
  return {
    type: 'TOGGLE_ADD_MOVIE_MODAL',
  };
};

const updateMovieSuccess = (movie) => {
  return {
    type: 'UPDATE_MOVIE_SUCCESS',
    payload: movie,
  };
};

const deleteMovieSuccess = (id) => {
  return {
    type: 'DELETE_MOVIE_SUCCESS',
    payload: id,
  };
};

const updateInputValue = (value) => {
  return {
    type: 'UPDATE_INPUT_VALUE',
    payload: value,
  };
};

const addMovieSuccess = (movie) => {
  return {
    type: 'ADD_MOVIE_SUCCESS',
    payload: movie,
  };
};

const fetchMovieSuccess = (movie) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: movie,
  };
};

const setAppliedFilter = (filter) => {
  return {
    type: 'SET_APPLIED_FILTER',
    payload: filter,
  };
};

const updateMovie = (movie) => (dispatch) => {
  MovieService.updateMovie(movie)
    .then((data) => dispatch(updateMovieSuccess(data)))
    .then(() => dispatch(toggleEditMovieModal()))
    .catch((err) => dispatch(moviesError(err)));
};

const deleteMovie = (id) => (dispatch) => {
  MovieService.deleteMovie(id)
    .then(() => dispatch(deleteMovieSuccess(id)))
    .then(() => dispatch(toggleDeleteMovieModal()))
    .catch((err) => dispatch(moviesError(err)));
};

const addMovie = (movie) => (dispatch) => {
  MovieService.addMovie(movie)
    .then((data) => dispatch(addMovieSuccess(data)))
    .then(() => dispatch(toggleAddMovieModal()))
    .catch((err) => dispatch(moviesError(err)));
};

const fetchMovie = (id) => (dispatch) => {
  MovieService.fetchMovie(id)
    .then((data) => dispatch(fetchMovieSuccess(data)))
    .catch((err) => dispatch(moviesError(err)));
};

const sortMovies = (params, searchQuery) => (dispatch) => {
  MovieService.sortBy(params, searchQuery)
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
};

const filterMovies = (query, searchQuery) => (dispatch) => {
  MovieService.filter(query, searchQuery)
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
};

const doSearch = (query) => (dispatch) => {
  MovieService.search(query)
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
};

export {
  filterMovies,
  sortMovies,
  toggleMoviePopover,
  toggleDeleteMovieModal,
  deleteMovie,
  toggleEditMovieModal,
  addMovie,
  updateMovie,
  fetchMovie,
  doSearch,
  toggleAddMovieModal,
  updateInputValue,
  deleteMovieSuccess,
  setAppliedFilter,
};
