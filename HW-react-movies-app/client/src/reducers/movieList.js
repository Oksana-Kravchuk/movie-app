const movieList = (state, action) => {
  if (!state) {
    return {
      movies: [],
      error: null,
      appliedFilter: '',
      query: '',
    };
  }

  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload.data,
      };

    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        error: action.payload,
      };

    case 'DELETE_MOVIE_SUCCESS':
      return {
        ...state,
        movies: state.movies.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    case 'UPDATE_INPUT_VALUE':
      return {
        ...state,
        query: action.payload,
      };

    case 'SET_APPLIED_FILTER':
      return {
        ...state,
        appliedFilter: action.payload,
      };

    case 'UPDATE_MOVIE_SUCCESS':
      const updatedMovie = action.payload;

      return {
        ...state,
        movies: state.movies.map((item) => {
          return item.id === updatedMovie.id ? updatedMovie : item;
        }),
      };

    case 'ADD_MOVIE_SUCCESS':
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    default:
      return state;
  }
};

export default movieList;
