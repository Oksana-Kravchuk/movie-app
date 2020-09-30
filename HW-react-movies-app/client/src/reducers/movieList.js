const updateOrder = (state, type) => {
  const sortRule = (key) => (a, b) => (a[key] > b[key] ? 1 : -1);
  const sortMovies = (key) => state.visibleMovies.slice().sort(sortRule(key));

  switch (type) {
    case 'Rating':
      return {
        ...state,
        visibleMovies: sortMovies('vote_average'),
      };
    case 'Release date':
      return {
        ...state,
        visibleMovies: sortMovies('release_date'),
      };
    default:
      return {
        ...state,
        visibleMovies: state.movies,
      };
  }
};

const movieList = (state, action) => {
  if (!state) {
    return {
      movies: [],
      visibleMovies: [],
      loading: true,
      error: null,
      apliedFilter: '',
    };
  }

  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload.data,
        visibleMovies: action.payload.data,
        loading: false,
      };

    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'FILTER_MOVIES':
      return {
        ...state,
        apliedFilter: action.payload,
        visibleMovies: state.movies.filter((item) => {
          if (action.payload === 'All') return state.movies;
          return item.genres.includes(action.payload);
        }),
      };

    case 'SORT_MOVIES':
      return updateOrder(state, action.payload);

    case 'DELETE_MOVIE_SUCCESS':
      return {
        ...state,
        visibleMovies: state.movies.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    case 'UPDATE_MOVIE_SUCCESS':
      const updatedMovie = action.payload;

      return {
        ...state,
        visibleMovies: state.visibleMovies.map((item) => {
          return item.id === updatedMovie.id ? updatedMovie : item;
        }),
      };

    case 'ADD_MOVIE_SUCCESS':
      return {
        ...state,
        visibleMovies: [...state.visibleMovies, action.payload],
      };

    default:
      return state;
  }
};

export default movieList;
